/**
 * Created by Ron on 2019-1-15
 */
import { newUrl } from './util';

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

export function getStaticHeaders() {
    return [
        {
            alias:'laoda',
            agentId: 0,
            appIcon: imgApprove,
            name: "流程追踪",
            url: 'https://www.baidu.com',//newUrl('/todo.html'),
            isMove: false
        },
        {
            alias:'lao2',
            agentId: 0,
            appIcon: imgTodo,
            url: newUrl('/todo.html'),
            name: "审批待办",
            isMove: false,
            bage: 0
        },
        {
            alias:'lao3',
            agentId: 0,
            url: 'https://www.baidu.com',
            appIcon: imgDabing,// "https://static.dingtalk.com/media/lALPDeC2t2Gu8MTMyMzI_200_200.png",
            name: "管理驾驶舱"
        },
        {
            alias:'lao3',
            agentId: 90103837,
            appIcon: imgDaka,
            name: "考勤打卡",
            isSpecial: true,
            isMove: true
        }
    ];
}
