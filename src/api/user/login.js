import axios from 'axios'

var login = (params) => {
    return axios.post('http://sy.jmyt.mash5.cn/mashWebServices/service/mash5/rest', {
        'method.name': 'mash5.user.loginBatch',
        'user.telphone': params.account,
        'user.password': params.password
    })
}

export default login