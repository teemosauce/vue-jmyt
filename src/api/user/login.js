import mash5 from '../http/mash5'

export default function (params) {
    return mash5.post('', {
        'method.name': 'mash5.user.loginBatch',
        'user.telphone': params.account,
        'user.password': params.password
    })
}