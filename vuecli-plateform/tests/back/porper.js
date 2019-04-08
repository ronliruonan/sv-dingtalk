(function() {
  var proper = {};
  var _header = [
    {
      agentId: 0,
      appIcon:
        "https://static.dingtalk.com/media/lALPDeC2t2Gu8MTMyMzI_200_200.png",
      url:
        "http://192.168.1.104:8082/index.html?corpId=钉钉&_cache001__#/todo",
      name: "待办事宜"
    },
    {
      agentId: 钉钉,
      appIcon:
        "https://static.dingtalk.com/media/lALPDeC2t2Gu8MTMyMzI_200_200.png",
      name: "领导驾驶舱"
    },
    {
      agentId: 钉钉,
      appIcon: "http://192.168.1.104:8082/img/shenpi.7e343c8b.png",
      name: "审批"
    },
    {
      agentId: 钉钉,
      appIcon: "http://192.168.1.104:8082/img/daka.13c3e3d8.png",
      name: "考勤打卡",
      isSpecial: true
    }
  ];
  Object.defineProperty(proper, "header", {
    enumerable: true,
    get: function() {
      return _header;
    }
  });
})();
