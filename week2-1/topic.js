let topicsArray = [
    "惡魔貓男",
    "人民的法槌",
    "台北暴徒AKA黑魔王",
    "卑鄙源之助",
    "浪漫Duke"
];

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略,設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
let date = document.getElementById('date');
//指定第一天


