$(".navbar-brand").css("opacity","1")
$(".navbar").css("background-color","rgba(255,255,255,1)")
$(".navbar").css("box-shadow","0px 2px 5px 0px rgba(0, 0, 0, 0.25)")
$("#menu").css("padding-top","140px");

var place_switch = true;
if(place_switch == true){
    $(".taipei").css("background-color","#7BA154");
    $(".taipei").css("color","#fff");
    $(".kaohsiung").css("background-color","#fff");
    $(".kaohsiung").css("color","#7BA154");
}

var job_taipei = [
    {
        name: "櫃台人員",
        type:"正職",
        salary: "月薪："+ 28000 +" - "+32000+"元",
        work: "1. 接待顧客：歡迎客人，提供友善的問候，協助顧客選擇飲品和食物。<br>2. 點單處理：接受訂單，確保準確性，並處理付款。<br>3. 顧客服務：回答顧客的問題，處理投訴，確保顧客滿意。<br>4. 推銷和促銷：介紹特別優惠、新品或咖啡品種，以增加銷售。<br>5. 清潔和維護：保持櫃台、咖啡機和用餐區域的整潔，確保食材和儀器的妥善保存。"
    },
    {
        name: "廚房人員",
        type:"正職",
        salary: "月薪："+ 32000 +" - "+40000+"元",
        work: "1. 食材準備：嚴格按照食譜和指示，準備新鮮的食材，包括蔬菜、肉類、麵包等。<br>2. 烹飪食物：使用各種廚房設備和烹調技巧，烹飪出美味的輕食、糕點、三明治等。<br>3. 食物裝盤：將食物精美地裝盤，確保視覺吸引力。<br>4. 遵守衛生標準：嚴格遵守衛生標準，確保食材和烹飪過程的安全和衛生。<br>5. 品質控制：監控食物品質，確保風味和口感符合標準。"
    }

];
var job_kaohsiung = [
    {
        name: "櫃台人員",
        type:"正職",
        salary: "月薪："+ 28000 +" - "+32000+"元",
        work: "1. 接待顧客：歡迎客人，提供友善的問候，協助顧客選擇飲品和食物。<br>2. 點單處理：接受訂單，確保準確性，並處理付款。<br>3. 顧客服務：回答顧客的問題，處理投訴，確保顧客滿意。<br>4. 推銷和促銷：介紹特別優惠、新品或咖啡品種，以增加銷售。<br>5. 清潔和維護：保持櫃台、咖啡機和用餐區域的整潔，確保食材和儀器的妥善保存。"
    },
    {
        name: "咖啡師",
        type:"正職",
        salary: "月薪："+ 36000 +" - "+42000+"元",
        work: "1. 咖啡製作：製作各種類型的咖啡，包括濃縮咖啡、拿鐵、卡布奇諾、美式咖啡等，確保每杯咖啡的風味。<br>2. 人員訓練：培訓其他店內成員，包括櫃台人員，以確保所有咖啡製作都符合標準。<br>3. 咖啡設備維護：確保咖啡機和其他咖啡設備的正常運作，進行維護和清潔。<br>4. 品質控制：監測咖啡品質，確保咖啡風味和質量達到客戶期望。<br>5. 創新：參與新飲品開發，試驗新食材和咖啡豆，以創造新的咖啡風味。"
    },
    {
        name: "廚房人員",
        type:"正職",
        salary: "月薪："+ 32000 +" - "+40000+"元",
        work: "1. 食材準備：嚴格按照食譜和指示，準備新鮮的食材，包括蔬菜、肉類、麵包等。<br>2. 烹飪食物：使用各種廚房設備和烹調技巧，烹飪出美味的輕食、糕點、三明治等。<br>3. 食物裝盤：將食物精美地裝盤，確保視覺吸引力。<br>4. 遵守衛生標準：嚴格遵守衛生標準，確保食材和烹飪過程的安全和衛生。<br>5. 品質控制：監控食物品質，確保風味和口感符合標準。"
    }

];

var job_html = "<div class='col-xl-9 col-lg-12 item'><h2>{{name}}<div class='tittle'> </div></h2><p>{{type}}，{{salary}}</p><hr /><p>{{work}}</p><div class='btn'>104頁面→</div></div>";

function show_job_taipei(){
    for(var i=0; i<job_taipei.length; i++){
        var item = job_taipei[i];

        var now_item_html =
        job_html
            .replace("{{name}}",item.name)
            .replace("{{type}}",item.type)
            .replace("{{salary}}",item.salary)
            .replace("{{work}}",item.work);
        $(".recruit").append(now_item_html);
    }
}
function show_job_kaohsiung(){
    for(var i=0; i<job_kaohsiung.length; i++){
        var item = job_kaohsiung[i];

        var now_item_html =
        job_html
            .replace("{{name}}",item.name)
            .replace("{{type}}",item.type)
            .replace("{{salary}}",item.salary)
            .replace("{{work}}",item.work);
        $(".recruit").append(now_item_html);
    }
}

show_job_taipei();

function place_switch_check(){
    if(place_switch == true){
        $(".taipei").css("background-color","#7BA154");
        $(".taipei").css("color","#fff");
        $(".kaohsiung").css("background-color","#fff");
        $(".kaohsiung").css("color","#7BA154");
    }else if(place_switch == false){
        $(".kaohsiung").css("background-color","#7BA154");
        $(".kaohsiung").css("color","#fff");
        $(".taipei").css("background-color","#fff");
        $(".taipei").css("color","#7BA154");
    }
}

$(".kaohsiung").click(function () { 
    place_switch = false;
    console.log(place_switch);
    place_switch_check();
    $(".item").remove();
    show_job_kaohsiung();
});
$(".taipei").click(function () { 
    place_switch = true;
    console.log(place_switch);
    place_switch_check();
    $(".item").remove();
    show_job_taipei();
});