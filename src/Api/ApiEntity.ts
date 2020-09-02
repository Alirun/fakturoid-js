import axios, { Method } from 'axios'

import { ApiError, getErrorNameByStatusCode } from '../Utils/errors'

export default class ApiEntity {
  public constructor(
    protected readonly _endpoint: string,
    protected readonly _userAgentHeader: string,
    protected readonly _authHeader: {
      username: string
      password: string
    }
  ) {}

  protected _request<TRequestBody, TResponseBody>({
    method,
    path,
    data
  }: {
    method: Method
    path: string
    data?: TRequestBody
  }): Promise<TResponseBody> {
    return axios({
      method,
      url: `${this._endpoint}/${path}`,
      data
    })
      .then(response => {
        return response.data
      })
      .catch(error => {
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
