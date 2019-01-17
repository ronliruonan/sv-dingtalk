/**
 * Created by Ron on 2019/1/13
 */

let isDingTalk = /dingtalk/.test(navigator.userAgent.toLowerCase());

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
      onSuccess: function() {
        if (typeof corpId === "function") {
          corpId();
        }
      },
      onFail: function() {
        if (typeof corpId === "function") {
          corpId();
        }
      }
    });
  } else {
    window.open(url);
  }
}

export default {
  parseCorpId: parseCorpId,
  openLink: openLink
};
