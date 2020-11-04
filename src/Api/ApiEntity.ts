import axios, { Method, AxiosError, AxiosResponse, ResponseType } from 'axios'

import { ApiError, getErrorNameByStatusCode } from '../Utils/errors'

export default class ApiEntity {
  public constructor(
    protected readonly _endpoint: string,
    protected readonly _userAgentHeader: string,
    protected readonly _authHeader: {
      username: string
      password: string
    },
    protected readonly _email: string,
    protected readonly _token: string,
  ) {}

  protected _request<TRequestBody, TResponseBody>({
    method,
    path,
    data,
    responseType
  }: {
    method: Method
    path: string
    data?: TRequestBody
    responseType?: ResponseType
  }): Promise<TResponseBody> {
    return axios({
      method,
      url: `${this._endpoint}/${path}`,
      data,
      headers: {
        'User-Agent': this._userAgentHeader,
        'Authorization': 'Basic ' + Buffer.from(this._email + ':' + this._token).toString('base64'),
        'Content-type': 'application/json'
      },
      responseType
    })
      .then((response: AxiosResponse) => {
        return response.data
      })
      .catch((error: AxiosError) => {
        console.log(error)
        if (error.response) {
          throw new ApiError(
            getErrorNameByStatusCode(error.response.status),
            error.response.data
          )
        } else if (error.request) {
          throw new Error('The request was made but no response was received')
        } else {
          throw new Error(error.message)
        }
      })
  }
}
