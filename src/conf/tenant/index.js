import config from './tenant.conf'

let _defaultTenant

export default {
  getCurrentCode: function () {
    if (!_defaultTenant) {
      let host = location.host
      _defaultTenant = host.substring(0, host.indexOf('.'))
      _defaultTenant = _defaultTenant.toLocaleUpperCase()
    }

    return _defaultTenant
  },

  getMainCode: () => {
    return config.main
  },

  getAllCodes: () => {
    return config.tenants
  }
}
