import { ENV } from './env.config';

export const URL = ENV.dev ? 'localhost:3000' : 'domain-name';

export const USER_NAME = ENV.dev ? 'developer' : 'visitor';
