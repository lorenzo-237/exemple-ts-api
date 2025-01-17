import { plainToInstance } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/httpException';

/**
 * @name ValidationMiddleware
 * @description Allows use of decorator and non-decorator based validation
 * @param type dto
 * @param skipMissingProperties When skipping missing properties
 * @param whitelist Even if your object is an instance of a validation class it can contain additional properties that are not defined
 * @param forbidNonWhitelisted If you would rather to have an error thrown when any non-whitelisted properties are present
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ValidationMiddleware = (type: any, skipMissingProperties = false, whitelist = false, forbidNonWhitelisted = false) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(type, req.body);
    validateOrReject(dto, { skipMissingProperties, whitelist, forbidNonWhitelisted })
      .then(() => {
        req.body = dto;
        next();
      })
      .catch((errors: ValidationError[]) => {
        const message = formatError(errors);
        next(new HttpException(400, message));
      });
  };
};

function formatError(errors: ValidationError[]) {
  return errors.map((error: ValidationError) => {
    if (error.constraints) {
      const values = Object.values(error.constraints);
      if (values.length > 1) {
        return values;
      } else {
        return values.join('');
      }
    } else {
      const errors = formatError(error.children);
      return {
        object: error.property,
        errors: errors,
      };
    }
  });
}
