export enum ApiErrorName {
  BadRequest = 'BadRequest',
  Unauthorized = 'Unauthorized',
  PaymentRequired = 'PaymentRequired',
  UnsupportedMediaType = 'UnsupportedMediaType',
  TooManyRequests = 'TooManyRequests',
  InternalError = 'InternalError',
  ServiceUnavailable = 'ServiceUnavailable',
  UnknownError = 'UnknownError',
}

export const getErrorNameByStatusCode = (statusCode: number): ApiErrorName => {
  switch (statusCode) {
    case 400: 
      return ApiErrorName.BadRequest
    case 401:
      return ApiErrorName.Unauthorized
    case 402:
      return ApiErrorName.PaymentRequired
    case 415:
      return ApiErrorName.UnsupportedMediaType
    case 429:
      return ApiErrorName.TooManyRequests
    case 500:
      return ApiErrorName.InternalError
    case 503:
      return ApiErrorName.ServiceUnavailable
    default:
      return ApiErrorName.UnknownError
  }
}

export class ApiError<TErrorData> extends Error {
  public constructor(name: ApiErrorName, public readonly data: TErrorData) {
    super(name)
  }
}
