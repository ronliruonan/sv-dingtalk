import { TASKAPIHOST } from "./env";
import baseRequestDef, { checkJwt } from './base-request'
// const baseRequest = require('./base-request');

async function request(Config, msg) {
    await checkJwt();

    const user_info = getUserInfo();
    if (!user_info) throw { 'errcode': 404, 'errmsg': '没找到UserInfo' };

    const { user_code: userCode } = user_info;

    Object.assign(Config.data, { userCode: userCode });

    return baseRequestDef(TASKAPIHOST, Config, msg);
}

function getUserInfo() {
    const user_info = sessionStorage.getItem('user_info');

    // 易读性不如if
    // const available = user_info && user_info.includes('user_code');
    // return available ? JSON.parse(user_info) : false;

    if (!user_info) return false;
    if (!user_info.includes('user_code')) return false;

    return JSON.parse(user_info);
}


/**
 * 获取待办个数 
 */
export function getIndexTodoCount(Config = {
    method: 'post',
    url: '/getuntasks',
    data: {
        userCode: 'nothing'
    }
}) {
    return request(Config, "getTodoCount request bad");
}

/**
 * 获取待办列表
 */
export function getTodoList(
    keyword = '',
    page = {
        pageNo: 0,
        pageSize: 10
    }, Config = {
        method: 'post',
        url: '/getuntasks',
        data: {
            userCode: 'nothing'
        }
    }) {
    Object.assign(Config.data, { keyword: keyword });
    Object.assign(Config.data, { page: page });

    return request(Config, "getDispatchList request bad");
}
