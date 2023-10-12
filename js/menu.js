$(".navbar-brand").css("opacity","1")
$(".navbar").css("background-color","rgba(255,255,255,1)")
$(".navbar").css("box-shadow","0px 2px 5px 0px rgba(0, 0, 0, 0.25)")
$("#menu").css("padding-top","140px");
var menu_switch = true;
if(menu_switch == true){
    $(".drink").css("background-color","#7BA154");
    $(".drink").css("color","#fff");
    $(".food").css("background-color","#fff");
    $(".food").css("color","#7BA154");
}

var menu_drink = [
    {
        name: "美式咖啡",
        price: 120,
        photo: "img/menu_1.jpg"
    },
    {
        name: "濃郁鮮奶茶",
        price: 100,
        photo: "img/menu_2.jpg"
    },
    {
        name: "特調拿鐵",
        price: 120,
        photo: "img/menu_3.jpg"
    },
    {
        name: "摩卡奇諾",
        price: 100,
        photo: "img/menu_4.jpg"
    },
    {
        name: "英式紅茶",
        price: 90,
        photo: "img/menu_5.jpg"
    },
    {
        name: "焦糖瑪奇朵",
        price: 160,
        photo: "img/menu_6.jpg"
    },
    {
        name: "日式麥茶",
        price: 80,
        photo: "img/menu_7.jpg"
    }
];
var menu_food = [
    {
        name: "芝香貝果",
        price: 120,
        photo: "img/menu_8.jpg"
    },
    {
        name: "烤雞三明治",
        price: 100,
        photo: "img/menu_9.jpg"
    },
    {
        name: "水果鬆餅",
        price: 180,
        photo: "img/menu_10.jpg"
    }
]

var menu_html = "<div class='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 items'><div class='item'><img src='{{photo}}'><h2>{{name}}<div class='tittle'> </div></h2><p>NT$ {{price}}</p></div></div>";

function show_menu_drink(){
    for(var i=0; i<menu_drink.length; i++){
        var item = menu_drink[i];

        var now_item_html =
        menu_html
            .replace("{{photo}}",item.photo)
            .replace("{{name}}",item.name)
            .replace("{{price}}",item.price);
        $(".menu").append(now_item_html);
    }
}
function show_menu_food(){
    for(var i=0; i<menu_food.length; i++){
        var item = menu_food[i];

        var now_item_html =
        menu_html
            .replace("{{photo}}",item.photo)
            .replace("{{name}}",item.name)
            .replace("{{price}}",item.price);
        $(".menu").append(now_item_html);
    }
}

show_menu_drink();



function menu_switch_check(){
    if(menu_switch == true){
        $(".drink").css("background-color","#7BA154");
        $(".drink").css("color","#fff");
        $(".food").css("background-color","#fff");
        $(".food").css("color","#7BA154");
    }else if(menu_switch == false){
        $(".food").css("background-color","#7BA154");
        $(".food").css("color","#fff");
        $(".drink").css("background-color","#fff");
        $(".drink").css("color","#7BA154");
    }
}

$(".food").click(function () { 
    menu_switch = false;
    console.log(menu_switch);
    menu_switch_check();
    $(".items").remove();
    show_menu_food();
});
$(".drink").click(function () { 
    menu_switch = true;
    console.log(menu_switch);
    menu_switch_check();
    $(".items").remove();
    show_menu_drink();
});