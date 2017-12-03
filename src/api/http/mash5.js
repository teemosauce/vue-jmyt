import axios from 'axios'
import auth from '../../auth'
import Url from '../../conf/url.conf'

export default axios.create({
  baseURL: Url.mash5ServiceURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  transformRequest(data) {

    var sessionId = auth.getSessionId()

    if (sessionId) {
      data['user.sessionId'] = sessionId
    }

    var params = []
    for (var key in data) {
      var value = data[key]
      if (Array.isArray(value)) {
        for (var val of value) {
          params.push(encodeURIComponent(key) + '=' + encodeURIComponent(val == null ? '' : val))
        }
      } else {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value == null ? '' : value))
      }
    }
    return params.join('&')
  }
})
