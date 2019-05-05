/**
 * 通过DUID去sso换取id_token
 */
const HostSSOGetDingToken = 'http://dm.cwewater.com:7000/openid-connect-server-webapp/getDingToken';

/**
 * 通过DUID去sso换取id_token
 */
const HostSSODingCode = 'https://cwe.cwewater.com/ding/api/users/auth';

module.exports = {
    HostSSOGetDingToken,
    HostSSODingCode
}
