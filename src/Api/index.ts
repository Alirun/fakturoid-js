// Config
import { Namespace, endpoints } from '../config'

// Api entities
import Subjects from './Subjects'

type ApiOptionsArguments = {
  namespace?: Namespace
  userAgent: {
    appName: string
    adminEmail: string
  }
  credentials: {
    email: string
    apiKey: string
  }
}

type ApiOptions = ApiOptionsArguments & {
  namespace: Namespace
}

/**
 * Fakturoid HTTP API
 */
export default class Api {
  // Provided
  private readonly _options: ApiOptions

  // Calculated
  private readonly _endpoint: string
  private readonly _userAgentHeader: string
  private readonly _authHeader: {
    username: string
    password: string
  }

  // Public
  public readonly subjects: Subjects

  public constructor(options: ApiOptionsArguments) {
    // Options
    this._options = {
      namespace: Namespace.production,
      ...options
    }

    this._endpoint = endpoints[this._options.namespace]
    this._userAgentHeader = `${this._options.userAgent.appName} (${this._options.userAgent.adminEmail})`
    this._authHeader = {
      username: this._options.credentials.email,
      password: this._options.credentials.apiKey
    }

    this.subjects = new Subjects(this._endpoint, this._userAgentHeader, this._authHeader, this._options.credentials.email, this._options.credentials.apiKey)
  }
}
