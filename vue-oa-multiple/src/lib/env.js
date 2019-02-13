/**
 * DING API地址:
 */
export const OPENAPIHOST = "https://www.ayaron.work/ding";
/**
 * 门户 API地址：
 * NGINX地址：https://api.ayaron.work/portal
 * 内网地址：http://192.168.1.90:8808
 */
export const PORTALAPIHOST = 'https://www.ayaron.work/portal';
/**
 * 任务中心 API地址：
 * 内网地址：http://192.168.1.90:8807/services/api 
 */
export const TASKAPIHOST = 'https://www.ayaron.work/task/services/api';
export const HASCONSOLE = typeof console !== undefined;
/**
 * 默认账号
 */
export const DEFAULTDINGUSERID = process.env.NODE_ENV === "production" ? 'xiangxiaoqiang001' : 'xiangxiaoqiang001';

// export const DINGAPPKEY = "dingy2ovuvgbpwrzedqn";
// export const DINGAGENTID = "214032587";

// 这是Tab吗？
export const DINGAPPKEY = "dingxgyezybqss11gqi6";
export const DINGAGENTID = "213833119";

/**
 * 是否为钉钉环境
 */
export const ISDINGTALK = /dingtalk/.test(navigator.userAgent.toLowerCase());
