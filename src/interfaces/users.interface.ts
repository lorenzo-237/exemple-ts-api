// Users.interface.ts
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
  role: string;
  reset_password_token?: string;
  reset_password_expires?: Date;
  validate_account_token?: string;
  validate_account_expires?: Date;
  validate: boolean;
  double_fa_token?: string;
  double_fa_activate: boolean;
  double_fa_method?: string;
  double_fa_sms_service?: string;
  double_fa_sms_date?: Date;
  phone_number?: string;
  double_fa_first_verify: boolean;
  magic_link_token?: string;
  magic_link_token_expires?: Date;
}
