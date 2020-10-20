import ApiEntity from './ApiEntity'

type requestArgs = {
  data?: string
  path: string
}

export default class Subjects extends ApiEntity {

  public create = async (args: requestArgs): Promise<any> => {
    return await this._request({
      method: 'POST',
      path: args.path,
      data: args.data
    })
  }

  public generateInvoice = async (args: requestArgs): Promise<any> => {
    return await this._request({
      method: 'POST',
      path: args.path,
      data: args.data
    })
  }

  public getExpenses = async (args: requestArgs): Promise<any> => {
    return await this._request({
      method: 'GET',
      path: args.path,
    })
  }

  public downloadPdf = async (args: requestArgs): Promise<any> => {
    return await this._request({
      method: 'GET',
      path: args.path,
    })
  }

  public generateExpense = async (args: requestArgs): Promise<any> => {
    return await this._request({
      method: 'POST',
      path: args.path,
      data: args.data
    })
  }
}
