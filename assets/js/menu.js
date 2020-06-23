var menuItems = [
    {text:"首頁",url:"/",children:[]},
    {text:"最新消息",url:"/news.html",children:[]},
    {text:"抽籤影片",url:"/video.html",children:[]},
    {text:"現任幹部",url:"",children:[
        {text:"理事會成員",url:"/council.html",children:[]},
        {text:"監事會成員",url:"/supervisor.html",children:[]},
        {text:"秘書處成員",url:"/secretariat.html",children:[]}
    ]},
    {text:"常見問題",url:"/faq.html",children:[]},
    {text:"加入會員",url:"/join.html",children:[]},
    {text:"捐款支持",url:"/donate.html",children:[]},
    {text:"相關辦法",url:"",children:[
        {text:"章程",url:"/article.html",children:[]},
        {text:"會費收取及代扣辦法",url:"/membership.html",children:[]},
        {text:"審查事業單位請求工會同意事項辦法",url:"/agree.html",children:[]},
        {text:"性騷擾防治申訴及調查處理要點",url:"/harassment.html",children:[]}
    ]},
    {text:"會議紀錄",url:"",children:[
        {text:"理事會",url:"https://drive.google.com/open?id=1bCQq-LpnDHCYSXe4dCu58YYoHli5W2_S",children:[]}
    ]},
    {text:"通報專區",url:"/report.html",children:[]},
    {text:"選舉專區",url:"/election/index.html",children:[]},
    {text:"隱私條款",url:"/privacy.html",children:[]},
]
new Vue({
    el:"#wrapper",
    data:{
        ntulu:"國立臺灣大學工會",
        menuItems:menuItems
    }
})