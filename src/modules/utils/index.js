import moment from 'moment'
import timezone from 'moment-timezone'

export const formatTime = (now, zone, int = false) => {
  const time = moment.unix(now).utc()
  const offset = zone && timezone.tz.zone(zone).parse(time) * -1
  return offset
    ? time.utcOffset(offset).format(int ? 'HH:mm:ss' : 'hh:mm:ss a')
    : time.format(int ? 'HH:mm:ss' : 'hh:mm:ss a')
}

export * from './customHooks'
export * from './request'
export * from './sessions'
