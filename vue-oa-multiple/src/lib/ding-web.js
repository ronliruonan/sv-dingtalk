/**
 * Created by Ron on 2019-1-14
 */
import axios from "axios";
import { authCode } from "./shared";
import logger from "./logger";
import { DINGAPPKEY, DINGAGENTID, OPENAPIHOST } from "./env";
import { parseCorpId } from "./util";

function request(Config, msg) {
    if (process.env.NODE_ENV !== "production") {
        if (!Config) return;
    }

    // Config.withCredentials = true;
    Config.url = OPENAPIHOST + Config.url;

    Config.headers = { 'appKey': DINGAPPKEY };
    // axios.defaults.headers.common["appKey"] = DINGAPPKEY;
    // axios.defaults.headers.common["Content-Type"] = 'application/json';
    // axios.defaults.headers.common["Accept"] = 'application/json';
    // axios.defaults.headers.common["Access-Control-Allow-Headers"] = 'Content-Type, X-XSRF-TOKEN';

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

/**
 * [jsApiOAuth js-api 权限校验]
 * @param {[type]} Config    [axios 配置对象]
 * @param {[type]} jsApiList [api list to be authed]
 * @return {[type]}          [Promise]
 */
export function jsApiOAuth(Config, jsApiList) {
    if (process.env.NODE_ENV !== "production") {
        if (!Config) return;
    }

    let params = Config.params || {};
    const href = params.href;
    // eslint-disable-next-line
    dd.error((error) => {
        logger.error(`dd.error: ${JSON.stringify(error)}`);
    });

    if (process.env.NODE_ENV !== "production") {
        if (!href) logger.warn("参数 href 不能为空");
        if (href !== location.href)
            logger.warn("传入的href参数与location.href不相等");
    }

    params.href = encodeURIComponent(href);
    Config.params = params;
    Config.url = OPENAPIHOST + Config.url;

    return new Promise((resoleve, reject) => {
        axios(Config)
            .then(response => {
                const data = response.data;
                if (process.env.NODE_ENV !== "production") {
                    const checks = [
                        "agentId",
                        "corpId",
                        "timeStamp",
                        "nonceStr",
                        "signature"
                    ];
                    const responseKey = Object.keys(data);
                    checks.map(v => {
                        const checkResult = responseKey.filter(k => {
                            return v === k;
                        });
                        if (checkResult.length === 0) {
                            logger.warn(`jsApiOAuth Response ${v} 不能返回空`);
                        }
                    });
                }

                if (data.errcode === 0) {
                    const config = {
                        agentId: DINGAGENTID,
                        corpId: parseCorpId(location.href, "corpId"),
                        timeStamp: data.timeStamp || "",
                        nonceStr: data.nonceStr || "",
                        signature: data.signature || "",
                        jsApiList: jsApiList || []
                    };

                    // eslint-disable-next-line
                    dd.config(config);
                }

                resoleve(response);
            })
            .catch(error => {
                reject({
                    errcode: 100,
                    errmsg: "js api auth request bad",
                    error: error
                });

                logger.error(`sign request error ${JSON.stringify(error)}`);
            });
    });
}

/**
 * [// 走免登流程]
 * @param {[type]} Config    [axios 配置对象]
 * @param {[type]} corpId    [Company corpId]
 * @return {[type]}          [Promise]
 */
export async function getUserId(Config, corpId) {
    if (process.env.NODE_ENV !== "production") {
        if (!Config || typeof Config === "string") {
            logger.error("必须传入axios配置对象");
            return;
        }
        if (!corpId) {
            logger.error("必须传入 corpId");
            return;
        }
    }

    return new Promise((resolve, reject) => {
        authCode(corpId)
            .then(result => {
                const code = result.code;
                Config.url = Config.url + "/" + code;

                let params = Config.params || {};
                params.code = code;
                Config.params = params;
                request(Config, "getUserId request bad")
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * [getUserInfoRequest ]
 * @param {*} Config [axois config]
 */
export function getUserInfo(Config) {
    return request(Config, "getUserInfo request bad");
}

export function getMicroApps(Config) {
    return request(Config, "micApps request bad");
}

export default {
    jsApiOAuth,
    getUserId,
    getUserInfo,
    getMicroApps
};
