(function () {
    var OPENAPIHOST = 'http://192.168.1.104:8181/dingtalk_app_demo_war_exploded';
    OPENAPIHOST = 'http://192.168.1.104:3000';
    // OPENAPIHOST = 'http://192.168.1.104:8080';
    OPENAPIHOST = 'http://joten90dev3000.vaiwan.com:8081';

    var DINGAPPKEY = '钉钉Appkey';

    var isDingtalk = /DingTalk/.test(navigator.userAgent);
    var proper = {};
    var _userId = '';
    var _userInfo = {};
    Object.defineProperty(proper, 'userId', {
        enumerable: true,
        get: function () {
            return _userId;
        },
        set: function (newValue) {
            _userId = newValue;
            getUserInfo(proper.userId);
            getUserMicroapp(proper.userId);
        }
    });
    Object.defineProperty(proper, 'userInfo', {
        enumerable: true,
        get: function () {
            return _userInfo;
        },
        set: function (newValue) {
            _userInfo = newValue;
            updateUI();
        }
    });

    function parseCorpId(url, param) {
        var searchIndex = url.indexOf('?');
        var searchParams = url.slice(searchIndex + 1).split('&');
        for (var i = 0; i < searchParams.length; i++) {
            var items = searchParams[i].split('=');
            if (items[0].trim() == param) {
                return items[1].trim();
            }
        }
    }
    function openLink(url, corpId) {
        if (corpId && typeof corpId === 'string') {
            if (url && url.indexOf('$CORPID$') !== -1) {
                url = url.replace(/\$CORPID\$/, corpId);
            }
        }
        if (url && url.indexOf('$TIMESTAMP$') !== -1) {
            url = url.replace(/\$TIMESTAMP\$/, Date.now());
        }
        if (isDingtalk) {
            dd.biz.util.openLink({
                url: url,
                onSuccess: function () {
                    if (typeof corpId === 'function') {
                        corpId();
                        alert(2);
                    }
                },
                onFail: function () {
                    if (typeof corpId === 'function') {
                        corpId();
                    }
                }
            });
        } else {
            window.open(url);
        }
    }

    function updateName() {
        var dateTime = new Date().getHours();
        var isAdmin = proper.userInfo.isAdmin;
        var name = proper.userInfo.name;
        var nb = {};
        if (name) {
            if (dateTime >= 5 && dateTime <= 12) {
                nb.wh = isAdmin ? '早上好，管理员，' + name : '早上好，' + name;
                nb.whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
            } else if (dateTime > 12 && dateTime <= 18) {
                nb.wh = isAdmin ? '下午好，管理员，' + name : '下午好，' + name;
                nb.whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
            } else {
                nb.wh = isAdmin ? '晚上好，管理员，' + name : '晚上好，' + name;
                nb.whImage = 'https://gw.alicdn.com/tps/TB15FNwOFXXXXbqXXXXXXXXXXXX-36-36.jpg';
            }
        }
        return nb;
    }

    function updateUI() {
        var nb = updateName();
        var html = '<img src="' + nb.whImage + '" class="admin-image">'
            + '<div class="admin-hello">'
            + nb.wh
            + '</div>';
        $('.admin-manager').html(html);
    }

    function getUserId(corpId) {
        authCode(corpId).then(function (result) {
            var code = result.code;
            var getUserIdRequest = {
                url: OPENAPIHOST + '/api/users/auth/' + code,
                type: 'GET',
                headers:{
                    'appkey': DINGAPPKEY
                },
                dataType: 'json',
                success: function (response) {

                    if (response.errcode === 0) {
                        proper.userId = response.userid;
                    } else {
                        alert(JSON.stringify(response) + 'getUserId');
                    }
                },
                error: function (err) {
                    alert('[aya002]');

                    alert(JSON.stringify(err));
                }
            }
            $.ajax(getUserIdRequest);
        }).catch(function (error) {
            alert(JSON.stringify(error));
        });
    }

    function authCode(corpId) {
        return new Promise(function (resolve, reject) {
            dd.ready(function () {
                dd.runtime.permission.requestAuthCode({
                    corpId: corpId,
                    onSuccess: function (result) {
                        resolve(result);
                    },
                    onFail: function (err) {
                        reject(err);
                    }
                });
            });
        });
    }

    function getUserInfo(userid) {
        var getUserInfoRequest = {
            url: OPENAPIHOST + '/api/users/' + userid,
            type: 'GET',
            headers:{
                'appkey': DINGAPPKEY
            },
            dataType: 'json',
            success: function (response) {
                if (response.errcode === 0) {
                    proper.userInfo = response;
                } else {
                    alert(JSON.stringify(response) + '[getUserInfo]');
                }
            },
            error: function (err) {

            }
        };
        $.ajax(getUserInfoRequest);
    }

    function getUserMicroapp(userid) {
        var getUserMicroappRequest = {
            url: OPENAPIHOST + '/api/microapps/user/' + userid,
            type: 'GET',
            headers:{
                'appkey': DINGAPPKEY
            },
            dataType: 'json',
            success: function (response) {
                $('#microapps').html('嗯嗯嗯嗯嗯嗯嗯呃');

                let nb = [];

                nb.push(`<div class="cell"><div class="cell-box"><div>接口返回失败,${response.errmsg}</div></div></di>`);
                if (response.errcode === 0) {
                    nb = [];
                    nb.push(`<div class="cell"><div class="cell-box"><div>接口返回失败,非数组</div></div></div>`);

                    if (Array.isArray(response.appList)) {
                        // alert(Object.prototype.toString.call(response.appList));
                        nb = [];
                        response.appList.forEach((value) => {
                            nb.push(`<div class="cell"><div class="cell-box"><div>
                                        <div class="cell-image-container">
                                            <a href="dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid=钉钉&agentid=${value.agentId}">
                                                <img src="${value.appIcon}" class="cell-image" />
                                            </a>
                                        </div>
                                        <div class="cell-text">${value.name}</div>
                                    </div></div></div>`);
                        });
                    }
                }

                $('#microapps').html(nb.join(''));
            },
            error: function (err) {
                alert('aya_microapp-error');
            }
        };
        $.ajax(getUserMicroappRequest);
    }

    $(function () {

        $('.banner-image').on('click', function () {
            const url = 'https://alimarket.m.taobao.com/markets/dingtalk/cydd?lwfrom=20161118115327653';
            openLink(url);
        });

        $('.item').on('click', function () {

        });

        $('.admin-edit').on('click', function () {
            // dd_web_timestamp=$TIMESTAMP$&
            const url = 'https://h5.dingtalk.com/industry_versatility/get.html?dd_progress=false&corpId=$CORPID$',
                originalUrl = location.href,
                corpId = parseCorpId(originalUrl, 'corpId'),
                testUrl = 'https://h5.dingtalk.com/industry_versatility/get.html?dd_web_timestamp=1546051369005&dd_progress=false&corpId=钉钉';

            openLink(url, corpId);
        });

        var originalUrl = location.href;
        var corpId = parseCorpId(originalUrl, 'corpId');
        var jsApiList = [];
        var signRequest = {
            url: OPENAPIHOST + '/api/auth/jsapi-oauth?href=' + encodeURIComponent(location.href),
            type: 'GET',
            headers:{
                'appkey': DINGAPPKEY
            },
            dataType: 'json',
            success: function (response) {
                if (response.errcode === 0) {
                    const config = {
                        agentId: response.agentId || '钉钉',
                        // corpId: response.corpId || '',
                        // corpId: DINGAPPKEY,
                        corpId: '钉钉corpId',
                        timeStamp: response.timeStamp || '',
                        nonceStr: response.nonceStr || '',
                        signature: response.signature || '',
                        // jsApiList: jsApiList || ['biz.ding.post']
                        // jsApiList: ['biz.user.get', 'biz.ding.post']
                        jsApiList: []
                    };
                    
                    dd.config(config);

                    dd.error(function (err) {
                        $('#aya_msg').append(`<p style="color:red;word-break:break-all;">${JSON.stringify(err)}</p>`);
                    });

                    getUserId(corpId);
                } else {
                    alert(JSON.stringify(response) + 'sign');
                }
            },
            error: function () {

            }
        };
        $.ajax(signRequest);
    });
})();
