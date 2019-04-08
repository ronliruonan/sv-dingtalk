// 对应的配置信息文件
const ENVCONFIG = process.env.NODE_ENV === "production" ? require('./env.pro') : require('./env.dev')
/**
 * 钉钉AppKey
 */
export const DINGAPPKEY = ENVCONFIG.DINGAPPKEY;
/**
 * 钉钉AgentId
 */
export const DINGAGENTID = ENVCONFIG.DINGAGENTID;

const DOMAIN = ENVCONFIG.DOMAIN;
/**
 * DING API地址:
 */
export const OPENAPIHOST = `${DOMAIN}/ding`;
/**
 * SSO host
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
