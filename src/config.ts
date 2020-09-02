
export enum Namespace {
  production = 'production',
  development = 'development'
}

export const namespace: Namespace = Namespace.production

export const endpoints = {
  [Namespace.production]: 'https://app.fakturoid.cz/api/v2',
  [Namespace.development]: 'https://app.fakturoid.cz/api/v2',
}
