import * as types from './types';

export const saveSubdomain = (subdomain) => {
  return { type: types.saveSubdomain, subdomain }
}
