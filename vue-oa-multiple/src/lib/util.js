/**
 * Created by Ron on 2019/1/13
 */

let isDingTalk = /dingtalk/.test(navigator.userAgent.toLowerCase());

/**
 * 查询查询串儿
 * @param {String} url ?a=b&c=d类似串儿
 * @param {String} param 键名
 */
export function parseCorpId(url, param) {
    let searchIndex = url.indexOf("?");
    let searchParams = url.slice(searchIndex + 1).split("&");
    for (let i = 0; i < searchParams.length; i++) {
        let items = searchParams[i].split("=");
        if (items[0].trim() == param) {
            return items[1].trim();
        }
    }
}

export function openLink(url, corpId) {
    if (corpId && typeof corpId === "string") {
        if (url && url.indexOf("$CORPID$") !== -1) {
            url = url.replace(/\$CORPID\$/, corpId);
        }
    }
    if (isDingTalk) {
        // eslint-disable-next-line
        dd.biz.util.openLink({
            url: url,
            onSuccess: function () {
                if (typeof corpId === "function") {
                    corpId();
                }
            },
            onFail: function () {
                if (typeof corpId === "function") {
                    corpId();
                }
            }
        });
    } else {
        window.open(url);
    }
}

export function newUrl(pathName, urlSearch = location.search, urlHash = location.hash) {
    if (!pathName) return pathName;
    if (pathName.indexOf('/') < 0) {
        pathName = '/' + pathName;
    }
    const path = pathName + urlSearch + urlHash;

    return location.origin ? location.origin + path : `${location.protocol}//${location.host}${path}`;
}

/**
 * 过滤器：Object to String
 * @param {any} value 待JSON对象
 */
export function filterJSON(value) {
    if (!value) return '';
    return typeof value === 'string' ? value : JSON.stringify(value);
}

/**
 * 过滤器：字典查询
 * @param {Object} value zhi
 * @param {Array} dict 字典
 * @param {Stirng} key 键名
 * @param {String} keyValue 键值
 */
export function filterGetDict(value, dict, key = 'id', keyValue = 'name') {
    if (!Array.isArray(dict)) return value;
    const existed = dict.find(item => item[key] + '' === value + '');

    return existed ? existed[keyValue] : value;
}

/**
 * 过滤器：时间格式化
 * @param {Date} date 待格式化时间
 * @param {String} formate 格式化串儿
 */
export function filterDateFormate(date = new Date('2019-01-21'), formate = 'yyyy-MM-dd') {
    if (/(y+)/.test(formate)) {
        formate = formate.replace(RegExp.$1, (date.getFullYear() + '')).substr(4 - RegExp.$1.length);
    }
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(formate)) {
            let str = o[k] + '';
            formate = formate.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
        }
    }

    function padLeftZero(str) {
        return ('00' + str).substr(str.length)
    }

    return formate;
}

/**
 * 字符串模板
 * @param {String} str 字符串模板
 * @param {Object} data 数据源
 */
export function templateFunc(str, data) {
    if (!str) return str;
    let computed = str.replace(/\{\{(\w+)\}\}/g, function (match, key) {
        return data[key];
    })
    return computed;
}

export function timerFun(fn, immediately = false, timeSpan = 1000 * 60 * 5) {
    if (typeof fn !== 'function') return;
    if (immediately) fn();

    setTimeout(() => {
        fn();
        setTimeout(() => { timerFun(fn, true, timeSpan) }, timeSpan, fn, timeSpan);
    }, timeSpan, fn, timeSpan);
}

export default {
    parseCorpId: parseCorpId,
    openLink: openLink,
    newUrl: newUrl,
    filterGetDict: filterGetDict,
    filterJSON: filterJSON,
    filterDateFormate: filterDateFormate,
    templateFunc: templateFunc
};
