/**
 * Baidu：https://www.ayaron.work
 * Online, https://cwe.cwewater.com
 * Develop, http://192.168.1.90:9043
 */
const DOMAIN = process.env.NODE_ENV === "production" ? '' : 'http://192.168.1.90:9043';
/**
 * DING API地址:
 */
export const OPENAPIHOST = `${DOMAIN}/ding`;
/**
 * 门户 API地址：
 */
export const PORTALAPIHOST = `${DOMAIN}/portal`;
/**
 * 任务中心 API地址：
 */
export const TASKAPIHOST = `${DOMAIN}/task/services/api`;
export const HASCONSOLE = typeof console !== undefined;
/**
 * 默认账号
 */
export const DEFAULTDINGUSERID = process.env.NODE_ENV === "production" ? 'xiangxiaoqiang001' : '';

// 【小人头】微应用
export const DINGAPPKEY = "dingi9cybqwiiw8iknte";
export const DINGAGENTID = "245346547";

// 配置项？
// export const DINGAPPKEY = "ding0k7bsqokaosdzwya";
// export const DINGAGENTID = "237991893";

/**
 * 是否为钉钉环境
 */
export const ISDINGTALK = /dingtalk/.test(navigator.userAgent.toLowerCase());
