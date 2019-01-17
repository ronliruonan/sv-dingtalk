/**
 * Created by Ron on 2019-1-15
 */
// 待办
import imgTodo from "../assets/todo02.png";
// 驾驶舱
// import imgJiashi from "../assets/jiashicang.png";
import imgDabing from "../assets/dabing.png";
// 打卡
import imgDaka from "../assets/daka.png";
// 审批
import imgApprove from "../assets/shenpi.png";
// sm
// import imgSm from "../assets/wori.png";

export function getMetaHeader() {
  return [
    {
      agentId: 0,
      appIcon: imgTodo,
      url: "https://www.baidu.com",
      name: "待办事宜"
    },
    {
      agentId: 0,
      appIcon: imgDabing,
      url: "https://www.baidu.com",
      name: "领导驾驶舱"
    },
    {
      agentId: 213290794,
      appIcon: imgApprove,
      name: "审批"
    },
    {
      agentId: 213290791,
      appIcon: imgDaka,
      name: "考勤打卡",
      isSpecial: true
    }
  ];
}

export default {
  getMetaHeader
};
