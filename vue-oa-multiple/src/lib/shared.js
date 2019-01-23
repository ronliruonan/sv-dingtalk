/**
 * Created by Ron on 2019-1-13
 */

export function authCode(corpId) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line
    dd.ready(function () {
      // eslint-disable-next-line
      dd.runtime.permission.requestAuthCode({
        corpId: corpId,
        onSuccess: function(result) {
          resolve(result);
        },
        onFail: function(err) {
          reject(err);
        }
      });
    });
  });
}
