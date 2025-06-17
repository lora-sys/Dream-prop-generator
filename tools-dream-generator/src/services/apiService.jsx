// 模拟api调用
export const generateProp=async(userInput)=>{
//模拟网络延迟
await new Promise(resolve=>setTimeout(resolve,100));
//基于输入返回不同道具
const props={
'考试':{
    name:"记忆面包机",
    function:"把书本知识打印到面包上，吃掉就能记住知识",
    appearance:"红色烤面包机,带有lcd屏幕和彩虹灯条",
    steps:[
        "将书本放入进料口",
        "选择要记忆的知识点",
        "等待面包弹出后食用"
    ],
    warning:"吃太多会导致消化不良，有效期仅有24小时"
},
'做饭':{
name:"自动料理机",
function:"只需要放入食材，自动生成美味料理",
appearance:"银色金属锅体，带有透明玻璃盖和触摸屏",
steps:[
    "放入食材",
    "选择菜系和口味",
    "等待3分钟完成料理"
],
warning:"长期使用可能导致厨艺退化"


},
'朋友':{
    name:"全息通讯手环",
    function:"与远方朋友进行全息投影通话",
    appearance:"蓝色硅胶手环，中间可能带有全息投影装置",
    steps:[
        "戴上手环",
        "说出朋友名字",
        "开始全息对话"
    ],
    warning:"长时间使用可能导致眼睛疲劳"
}
};

console.log("Userinput",userInput);

// 添加模糊匹配逻辑
if (userInput.includes('考试')) return props['考试'];
if (userInput.includes('做饭')) return props['做饭'];
if (userInput.includes('朋友')) return props['朋友'];
};