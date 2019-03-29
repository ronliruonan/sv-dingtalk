import baseRequest from './base-request';
import { TASKAPIHOST } from "./env";

function request(Config, msg) {
    return baseRequest(TASKAPIHOST, Config, msg);
}

/**
 * 获取待办个数 
 */
export async function getIndexTodoCount(
    Config = {
        method: 'post',
        url: '/getuntasks',
        data: {
            userCode: 'jim'
        }
    }) {
    return request(Config, "getTodoCount request bad");
}

/**
 * 获取待办列表
 */
export async function getTodoList(
    keyword = '',
    page = {
        pageNo: 0,
        pageSize: 10
    }, Config = {
        method: 'post',
        url: '/getuntasks',
        data: {
            userCode: 'jim'
        }
    }) {
    Object.assign(Config.data, { keyword: keyword });
    Object.assign(Config.data, { page: page });

    return request(Config, "getDispatchList request bad");
}
