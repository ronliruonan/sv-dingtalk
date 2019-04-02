
/**
 * 默认账号
 */
// export let DEFAULTDINGUSERID = process.env.NODE_ENV === "production" ? '' : 'xiangxiaoqiang001';

// // 【小人头】微应用
// export const DINGAPPKEY = "dingxgyezybqss11gqi6";
// export const DINGAGENTID = "213833119";

// // 【水丫】
// export const DINGAPPKEY = "dingvgevt7x4ft14mky6";
// export const DINGAGENTID = "245814357";

// 【本地】
export const DINGAPPKEY = "dingy2ovuvgbpwrzedqn";
export const DINGAGENTID = "214032587";

/**
 * Baidu：https://www.ayaron.work
 * Online, https://cwe.cwewater.com
 * Develop, http://192.168.1.90:9043
 */
const DOMAIN = process.env.NODE_ENV === "production" ? '' : 'https://cwe.cwewater.com';
/**
 * DING API地址:
 */
export const OPENAPIHOST = `${DOMAIN}/ding`;
/**
 * 
 */
export const SSOHOST = `${DOMAIN}/jwt`;
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
 * 是否为钉钉环境
 */
export const ISDINGTALK = /dingtalk/.test(navigator.userAgent.toLowerCase());
