/**
 * Created by Ron on 2019-1-15
 */
import { newUrl } from './util';

// 待办
import imgTodo from "../assets/todo02.png";
// 驾驶舱
// import imgJiashi from "../assets/jiashicang.png";
// import imgDabing from "../assets/dabing.png";
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
            url: newUrl('/todo.html'),
            name: "待办事宜"
        },
        {
            agentId: 0,
            url: 'https://www.baidu.com',
            // agentId: 214052177,
            // appIcon: imgDabing,
            appIcon:
                "https://static.dingtalk.com/media/lALPDeC2t2Gu8MTMyMzI_200_200.png",
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
