import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { TestRoute } from '@/routes/tests.route';

ValidateEnv();

const app = new App([new TestRoute()]);

app.listen();
