import Cookie from 'js-cookie'
import tenant from './conf/tenant'

const SESSIONID = 'SESSION_ID',
  UID = '-UID-',
  SESSIONS = '-SS-',
  ACCOUNT = '-ACCOUNT-',
  defaultOpts = {
    expires: 7
  }

const getSessionId = (key) => {
  const userId = getUserId()
  if (!userId) {
    return loggedOut()
  }
  let sessions = Cookie.get(SESSIONS)
  if (sessions && typeof sessions === 'string') {
    try {
      sessions = JSON.parse(sessions)
    } catch (e) {
      sessions = {}
    }
  }
  key = key || tenant.getCurrentCode()

  const sessionId = sessions && sessions[key]
  if (!key) {
    if (sessionId) {
      Cookie.set(SESSIONID, sessionId, defaultOpts)
    } else {
      Cookie.remove(SESSIONID)
    }
  }
  return sessionId
}

const loggedIn = (sessions, userId) => {
  if (sessions && userId) {
    Cookie.set(SESSIONS, sessions, defaultOpts)
    Cookie.set(UID, userId, defaultOpts)
  }
}

const loggedOut = () => {
  Cookie.remove(SESSIONID)
  Cookie.remove(SESSIONS)
  Cookie.remove(UID)
}

const getUserId = () => {
  return Cookie.get(UID)
}

const setAccount = (account) => {
  Cookie.set(ACCOUNT, account, defaultOpts)
}

const getAccount = (account) => {
  Cookie.get(ACCOUNT)
}

const removeAccount = (account) => {
  Cookie.remove(ACCOUNT)
}

export default {
  loggedIn,
  loggedOut,
  getSessionId,
  getUserId,
  setAccount,
  getAccount,
  removeAccount
}
