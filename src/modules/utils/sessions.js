import * as Cookies from 'js-cookie'

export const setSessionCookie = session => {
  Cookies.remove('session')
  Cookies.set('session', session, { expires: 2 })
}

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get('session')

  if (sessionCookie === undefined) return {}

  return JSON.parse(sessionCookie)
}

export const setZoneCookie = zone => {
  Cookies.remove('zone')
  Cookies.set('zone', zone)
}

export const getZoneCookie = () => {
  const sessionCookie = Cookies.get('zone')

  if (sessionCookie === undefined) return []

  return JSON.parse(sessionCookie)
}

export const logout = () => {
  Cookies.remove('session')
  Cookies.remove('zone')
}
