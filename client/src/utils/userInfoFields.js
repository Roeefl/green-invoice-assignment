import moment from 'moment'

const dateFormatter = (date) => moment(date * 1000).format('DD MMMM YYYY HH:MM:SS')

export const userInfoFields = [
  {
    key: 'id'
  },
  {
    key: 'email'
  },
  {
    key: 'firstName'
  },
  {
    key: 'lastName',
  },
  {
    key: 'signUpDate',
    formatter: dateFormatter
  },
  {
    key: 'activationDate',
    formatter: dateFormatter
  },
  {
    key: 'subscriptionExpirationDate',
    formatter: dateFormatter
  },
  {
    key: 'activeBusinessCount'
  }
];
