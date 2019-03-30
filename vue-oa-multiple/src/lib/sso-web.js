/**
 * Created by Ron on 2019-03-27
 */
import axios from 'axios'
import { getUserId } from './ding-web';
import { parseCorpId } from './util';
import { SSOHOST } from "./env";
import logger from './logger';

function request(Config, msg) {
    if (process.env.NODE_ENV !== "production") {
        if (!Config) return;
    }

    // Config.withCredentials = true;
    Config.url = SSOHOST + Config.url;

    return new Promise((resolve, reject) => {
        axios(Config)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject({ errcode: 100, errmsg: msg, error: error });
            });
    });
}

export function GetJwtInfo(Config) {
    return request(Config, "getJWTInfo request bad");
}

export async function SetJsonWebToken(dingUserId) {
    const postJwtRequest = {
        url: `/jwt/${dingUserId}`,
        method: "POST"
    };
    const jwtResponse = await GetJwtInfo(postJwtRequest);

    if (jwtResponse.status !== 200)
        return logger.error(`GetJWTErr:${jwtResponse}`);

    const {
        data: { id_token: id_token, user_info: user_info }
    } = jwtResponse;

    if (!id_token || !user_info) return logger.error(`GetSysUserErr`);

    sessionStorage.setItem("id_token", id_token);
    sessionStorage.setItem("user_info", JSON.stringify(user_info));
}

/**
 * 获取钉钉账号（需要在钉钉平台下运行）
 * 例如："lisi"
 */
export function sso_ding() {
    return new Promise(async (resolve, reject) => {
        try {
            if (process.env.NODE_ENV !== 'production') {
                const env = require('./env')
                resolve(env.DEFAULTDINGUSERID);
            }
            const corpId = parseCorpId(location.href, "corpId");
            const getUserIdRequest = { url: "/api/users/auth" };
            const getUserIdResponse = await getUserId(getUserIdRequest, corpId);
            const data = getUserIdResponse.data;

            if (data.errcode !== 0) {
                logger.error(`GET DingUserId Err：${data.errmsg}`);
                reject(data);
            }

            const dingUserId = data.userid;

            logger.info(`${dingUserId}`);
            resolve(dingUserId);
        } catch (err) {
            reject(err);
        }
    })
}
