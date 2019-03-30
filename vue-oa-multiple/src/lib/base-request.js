import axios from "axios";
import { sso_ding, SetJsonWebToken } from './sso-web'
import logger from "./logger";

/**
 * 检车本地id_token
 */
export async function checkJwt() {
    let id_token = sessionStorage.getItem('id_token');

    // 1. 本地id_token有效
    if (id_token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${id_token}`;
        return true;
    }

    // 2. 请求id_token
    try {
        let dingUserId = await sso_ding();

        // 2.1. DingUserId无效
        if (!dingUserId) {
            axios.defaults.headers.common["Authorization"] = `Bearer unavailable DingUserId`;
            return false;
        }

        // 2.2. 获取id_token
        await SetJsonWebToken(dingUserId);

        id_token = sessionStorage.getItem('id_token');

        axios.defaults.headers.common["Authorization"] = `Bearer ${id_token}`;

        return id_token ? true : false;
    } catch (error) {
        logger.error(JSON.stringify(error));
        return false;
    }
}

/**
 * 请求基础方法
 * @param {String} HOST 主ApiPath
 * @param {Object} Config 请求配置
 * @param {any} msg 消息
 */
export default async function (HOST, Config, msg) {
    if (process.env.NODE_ENV !== "production") {
        if (!Config) return;
    }

    // Config.withCredentials = true;
    Config.url = HOST + Config.url;

    const canNext = await checkJwt();
    if (!canNext) return { errcode: 100, errmsg: '无效id_token' };

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
