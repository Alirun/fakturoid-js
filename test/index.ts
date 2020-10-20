import { assert } from 'chai'

import { Namespace, fakturoid } from '../src/config'
import Api from '../src/Api/index'

let api: Api
let subject: any

const options = {
  namespace: Namespace.development,
  userAgent: {
    appName: fakturoid.user,
    adminEmail: fakturoid.email
  },
  credentials: {
    apiKey: fakturoid.token,
    email: fakturoid.email
  }
}

const delay = (seconds: number): Promise<void> => new Promise(resolve => {
  setTimeout(resolve, seconds * 1000)
})

describe('Api', () => {
  it('Should successfully initialize Api class with default options', () => {
    const _api = new Api(options)
    assert.ok(_api instanceof Api)
  })

  before(() => {
    api = new Api(options)
  })

  it('Should POST accounts/subject', async () => {
    const data = JSON.stringify({
      'custom_id': null,
      'name': 'MICROSOFT s.r.o.',
      'street': 'Vyskočilova 1461/2a',
      'street2': null,
      'city': 'Praha',
      'zip': '14000',
      'country': 'CZ',
      'registration_no': '47123737',
      'vat_no': 'CZ47123737',
      'bank_account': '',
      'iban': '',
      'variable_symbol': '1234567890',
      'full_name': '',
      'email': '',
      'email_copy': '',
      'phone': '',
      'web': ''
    })

    const path = `accounts/${fakturoid.user}/subjects.json`
    subject = await api.subjects.create({data, path})
    console.log(subject)
    assert.exists(subject)
    assert.exists(subject.id)
  })

  it('Should POST accounts/invoices', async () => {
    const data = JSON.stringify({
      'custom_id': '1234',
      'subject_id': subject.id,
      'number': '2012-0001',
      'currency': 'CZK',
      'payment_method': 'bank',
      'due': 10,
      'issued_on': '2020-09-21',
      'taxable_fulfillment_due': '2020-09-28',
      'bank_account_id': 7,
      'lines': [
        {
          'name': 'Hard work',
          'quantity': '1.0',
          'unit_name': 'h',
          'unit_price': '40000',
          'vat_rate': '21'
        }
      ]
    })

    const path = `accounts/${fakturoid.user}/invoices.json`
    const invoice = await api.subjects.generateInvoice({data, path})
    console.log(invoice)
    assert.exists(invoice)
    assert.exists(invoice.id)
  })

  it('Should POST accounts/expenses', async () => {
    const data = JSON.stringify({
      'subject_id': subject.id,
      'currency': 'CZK',
      'payment_method': 'bank',
      'due': 10,
      'issued_on': '2020-09-21',
      'taxable_fulfillment_due': '2020-09-21',
      'lines': [
        {
          'name': 'Hard work',
          'quantity': '1.0',
          'unit_name': 'h',
          'unit_price': '40000',
          'vat_rate': '21'
        }
      ]
    })

    const path = `accounts/${fakturoid.user}/expenses.json`
    const expense = await api.subjects.generateExpense({data, path})
    console.log(expense)
    assert.exists(expense)
    assert.exists(expense.id)
  })
})
