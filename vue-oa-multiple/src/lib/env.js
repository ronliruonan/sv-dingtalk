/**
 * DING API地址:
 * 服务端地址：https://www.ayaron.work
 */
export const OPENAPIHOST = "http://192.168.1.90:9043/ding";
/**
 * 门户 API地址：
 * 内网地址：http://192.168.1.90:8808
 */
export const PORTALAPIHOST = 'http://192.168.1.90:9043/portal';
/**
 * 任务中心 API地址：
 * 内网地址：http://192.168.1.90:8807/services/api 
 */
export const TASKAPIHOST = 'http://192.168.1.90:9043/task/services/api';
export const HASCONSOLE = typeof console !== undefined;
/**
 * 默认账号
 */
export const DEFAULTDINGUSERID = process.env.NODE_ENV === "production" ? 'xiangxiaoqiang001' : 'xiangxiaoqiang001';

// export const DINGAPPKEY = "dingy2ovuvgbpwrzedqn";
// export const DINGAGENTID = "214032587";

// 配置项？
export const DINGAPPKEY = "ding0k7bsqokaosdzwya";
export const DINGAGENTID = "237991893";

/**
 * 是否为钉钉环境
 */
export const ISDINGTALK = /dingtalk/.test(navigator.userAgent.toLowerCase());
