import auth from './auth';
import my from './my';
import question from './question';

export const handlers = [...auth, ...question, ...my];
