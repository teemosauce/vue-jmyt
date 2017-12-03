import mash5 from '../http/mash5'
import role from '../../conf/role.conf'

export default function (params) {
    return mash5.post('', Object.assign({
        'method.name': 'mash5.user.queryUserInfo',
        'method.optimize': 'includeField',
        'method.optimize.includeField.fieldName': [
            '_id',
            'name',
            'telphone',
            'email',
            'mainTenantCode',
            'tenants',
            'playRole'
        ]
    }, params)).then((response) => {
        return response.data
    }).then((res) => {
        const user = res && res.object
        if (user && role) {
            var roles = user.playRole
            if (roles instanceof Array) {
                for (var i = 0, len = roles.length; i < len; i++) {
                    var id = roles[i]
                    if (typeof id === 'object') {
                        id = id._id
                    }
                    id = id.substr(0, id.indexOf('@'))
                    switch (id) {
                            //局端管理员
                        case role.bureau:
                            user.isBureauer = true
                            break
                            //运维员工，责任人，上报人
                        case role.employee:
                            user.isEmployeer = true
                            break
                            //通信科运维主管(MRO_allRole角色)
                        case role.subLeader:
                            user.isSubLearder = true
                            break
                            //通信处运维主管
                        case role.mainLeader:
                            user.isMainLeader = true
                            break
                        default:
                            break
                    }
                }
            }
        }
        return user
    })
}