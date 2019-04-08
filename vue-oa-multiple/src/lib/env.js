// 【本地】
export const DINGAPPKEY = "钉钉AppKey";
export const DINGAGENTID = "钉钉AgentId";

/**
 * Develop, http://192.168.1.90:9043
 */
const DOMAIN = process.env.NODE_ENV === "production" ? '' : '';
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
