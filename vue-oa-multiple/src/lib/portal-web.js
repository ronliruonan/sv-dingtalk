/**
 * Created by Ron on 2019-1-14
 */
import baseRequestDef from './base-request'
import { PORTALAPIHOST } from "./env";

function request(Config, msg) {
    return baseRequestDef(PORTALAPIHOST, Config, msg);
}

/**
 * Index首页-发文列表请求 
 */
export async function getIndexFawen(Config = {
    method: 'post',
    url: '/api/services/portal/publicationannouncement/pageLoad',
    data: {
        "page": {
            "pageNo": 1,
            "pageSize": 4
        },
        "publishType": 3,
        "status": 1
    }
}) {
    return request(Config, "getIndexFawen request bad");
}
/**
 * Index首页-公告列表请求
 */
export async function getIndexGonggao(Config = {
    method: 'post',
    url: '/api/services/portal/publicationannouncement/pageLoad',
    data: {
        "page": {
            "pageNo": 1,
            "pageSize": 4
        },
        "publishType": 2,
        "status": 1
    }
}) {
    return request(Config, "getIndexGonggao request bad");
}
/**
 * Index首页-公告列表请求
 */
export async function getIndexNews(Config = {
    method: 'post',
    url: '/api/services/portal/newscollege/pageLoad',
    data: {
        "page": {
            "pageNo": 1,
            "pageSize": 4
        }
    }
}) {
    return request(Config, "getIndexNews request bad");
}

/**
 * 查询 文章
 * @param {Object} data 额外数据
 * @param {Object} Config 基础请求配置
 */
export async function viewArticle(data, Config = {
    method: 'post',
    url: '/api/services/portal/publicationannouncement/getPublicationAnnouncementById',
    data: { id: -1, type: 'view' }
}) {
    if (data && data.isNews && data.isNews === '1') {
        Config.url = '/api/services/portal/newscollege/getNewsCollegeById'
    }
    Config.data = { ...Config.data, ...data }
    return request(Config, 'viewArticl request bad');
}

/**
 * 公告列表 请求
 * @param {String} title 标题
 * @param {Object} page 页面配置
 * @param {Object} Config 请求配置
 */
export async function getNoticeList(title = '', page = {
    pageNo: 0,
    pageSize: 10
}, Config = {
    method: 'post',
    url: '/api/services/portal/publicationannouncement/getPublicationAnnouncement',
    data: {
        publishType: 2,
        status: 1
    }
}) {
    Object.assign(Config.data, { title: title });
    Object.assign(Config.data, { page: page });

    return request(Config, "getNoticeList request bad");
}
/**
 * 新闻列表 请求
 * @param {String} title 标题
 * @param {Object} page 页面配置
 * @param {Object} Config 请求配置
 */
export async function getNewsList(title = '', page = {
    pageNo: 0,
    pageSize: 10
}, Config = {
    method: 'post',
    url: '/api/services/portal/newscollege/getNewsCollege',
    data: {}
}) {
    Object.assign(Config.data, { title: title });
    Object.assign(Config.data, { page: page });

    return request(Config, "getNewsList request bad");
}

/**
 * 发文列表请求
 * @param {String} title 标题
 * @param {Object} page 页面配置
 * @param {Object} Config 请求配置
 */
export async function getDispatchList(title = '', page = {
    pageNo: 0,
    pageSize: 10
}, Config = {
    method: 'post',
    url: '/api/services/portal/publicationannouncement/getPublicationAnnouncement',
    data: {
        publishType: 3,
        status: 1
    }
}) {
    Object.assign(Config.data, { title: title });
    Object.assign(Config.data, { page: page });

    return request(Config, "getDispatchList request bad");
}
