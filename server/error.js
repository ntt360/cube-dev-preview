const CODES = {
  UNKNOW: -1,
  SERVICE_ERR: 40500,
  EMPTY_ID: 40100,
  ILLEGAL_ID: 40101,
  COMPILE_ERR: 40102,
  SAVE_ERR: 40200,
  NO_DATA: 40201,
  DATA_EXPIRED: 40202,
};
export { CODES };

export class CubeError extends Error {
  constructor(message, code) {
    super();
    code = message ? CODES.SERVICE_ERR : CODES.UNKNOW;
    message = message || 'unknow';
    let err = new Error(message);
    err.code = code;
    return err;
  }
}
