import { TASKAPIHOST } from "./env";

const baseRequest = require('./base-request');

async function request(Config, msg) {
    await baseRequest.checkJwt();

    const user_info = getUserInfo();
    if (!user_info) throw { 'errcode': 404, 'errmsg': '没找到UserInfo' };

    const user_code = user_info.user_code;

    Object.assign(Config.data, { userCode: user_code });

    return baseRequest.default(TASKAPIHOST, Config, msg);
}

function getUserInfo() {
    const user_info = sessionStorage.getItem('user_info');
    if (user_info && user_info.indexOf('user_code') > -1)
        return (JSON.parse(user_info));

    return false;
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
