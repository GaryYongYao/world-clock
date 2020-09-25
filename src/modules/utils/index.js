import { lowerCase, startCase } from 'lodash'

export const startCapital = text => startCase(lowerCase(text))

function twoDigit(num) {
  return (num < 10) ? `0${num}` : num
}

export * from './customHooks'
export * from './request'
export * from './sessions'
