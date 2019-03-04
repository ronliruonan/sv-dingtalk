import axios from "axios";
import { TASKAPIHOST } from "./env";

axios.defaults.headers.common["Content-Type"] = 'application/json';
axios.defaults.headers.common["Accept"] = 'application/json';
axios.defaults.headers.common["Access-Control-Allow-Headers"] = 'Content-Type, X-XSRF-TOKEN';

function request(Config, msg) {
    if (process.env.NODE_ENV !== "production") {
        if (!Config) return;
    }

    // Config.withCredentials = true;
    Config.url = TASKAPIHOST + Config.url;

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
 * 获取待办个数
 * @param {*} Config 
 */
export async function getIndexTodoCount(Config = {
    method: 'post',
    url: '/getuntasks',
    data: {
        userId: 'jim'
    }
}) {
    return request(Config, "getTodoCount request bad");
}

export async function getTodoList(keyword = '', page = {
    pageNo: 0,
    pageSize: 10
}, Config = {
    method: 'post',
    url: '/getuntasks',
    data: {
        userId: 'jim'
    }
}) {
    Object.assign(Config.data, { keyword: keyword });
    Object.assign(Config.data, { page: page });

    return request(Config, "getDispatchList request bad");
}
