const axios = require('axios')
const jwt = require('jsonwebtoken')

/**
 * 返回JSON结构
 */
class ResponseJSON {
    constructor(result = null, errcode = 0, errmsg = 'ok') {
        this.errcode = parseInt(errcode, 10);
        this.errmsg = errmsg;
        this.result = result;
    }
}

async function getJWT(dingUserId) {
    // 有效的dingUserId
    if (!dingUserId) return new ResponseJSON(null, 400, '无效的DINGUSERID');

    try {
        const baseUrl = 'http://dm.cwewater.com:7000/openid-connect-server-webapp/getDingToken';
        const requestData = {
            method: 'get',
            url: `${baseUrl}/${dingUserId}`
        };
        const { data: jwtoken } = await axios(requestData);

        if (!(jwtoken + '').trim()) return new ResponseJSON(null, 404, 'Not Found');

        return new ResponseJSON(jwtoken);
    } catch (error) {
        const { status: __status, statusText: __statusText } = error.response;

        return new ResponseJSON(null, __status, __statusText);
    }
}

async function decodeJWT(jwtoken) {
    if (!jwtoken) return new ResponseJSON(null, 500, '无效的JSONWEBTOKEN')

    try {
        let dtoken = jwt.decode(jwtoken, { complete: true }) || {};

        return new ResponseJSON(dtoken);
    } catch (error) {
        const { status: __status, statusText: __statusText } = error.response;

        return new ResponseJSON(null, __status, __statusText);
    }
}

module.exports = {
    GETJWT: getJWT,
    DECODEJWT: decodeJWT
};
