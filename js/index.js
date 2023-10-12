var menu = [
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
    }
];

var menu_html = "<div class='col-xl-4 col-lg-4 col-md-9' data-bottom-center='transform:translateY(40px);opacity: 0;' data--160-bottom-center='transform:translateY(0px);opacity: 1;'><div class='item'><img src='{{photo}}'><h2>{{name}}<div class='tittle'> </div></h2><p>NT$ {{price}}</p></div></div>";

function show_menu(){
    for(var i=0; i<menu.length; i++){
        var item = menu[i];

        var now_item_html =
        menu_html
            .replace("{{photo}}",item.photo)
            .replace("{{name}}",item.name)
            .replace("{{price}}",item.price);
        $(".menu").append(now_item_html);
    }
}

show_menu();

document.body.id = "skrollr-body";
var s = skrollr.init();

$(window).scroll(function () { 
    if($(window).scrollTop()>50){
        $(".navbar-brand").css("opacity","1")
        $(".navbar").css("background-color","rgba(255,255,255,1)")
        $(".navbar").css("box-shadow","0px 2px 5px 0px rgba(0, 0, 0, 0.25)")
    }else{
        $(".navbar-brand").css("opacity","0")
        $(".navbar").css("background-color","rgba(255,255,255,0)")
        $(".navbar").css("box-shadow","0px 2px 5px 0px rgba(0, 0, 0, 0)")
    }
});


var burger_menu = false;
$("#nav-list").click(function () { 
    burger_menu=!burger_menu
    console.log(1);
});
if(burger_menu == true){
    $(".navbar-brand").css("opacity","1")
    $(".navbar").css("background-color","rgba(255,255,255,1)")
    $(".navbar").css("box-shadow","0px 2px 5px 0px rgba(0, 0, 0, 0.25)")
}else if(burger_menu == false){
    $(".navbar-brand").css("opacity","0")
    $(".navbar").css("background-color","rgba(255,255,255,0)")
    $(".navbar").css("box-shadow","0px 2px 5px 0px rgba(0, 0, 0, 0)")
}



$(window).mousemove(function (evt) { 
    var pagex=evt.pageX;
    var pagey=evt.pageY;
    
    var x=pagex - $("#about").offset().left;
    var y=pagey - $("#about").offset().top;
    
    $(".r1text").css("transform","translateX("+(y/10)+"px)");
    $(".r2text").css("transform","translateX("+(y/15)+"px)");
    $(".r1img").css("transform","translateX("+(x/50)+"px)");

    $("#bean").css("left",x+"px");
    $("#bean").css("top",y+"px");
    if(y<0 || y>$("#about").outerHeight()){
        $("#bean").css("display","none");
    }else{
        $("#bean").css("display","block");
    }

    var birdplace=$("#bird").offset().left+$("#bird").width()/2;
    var birdtop=$("#bird").offset().top;
    

    if(pagex<birdplace-80){
        $("#bird").attr("src","img/bird_left.svg");
    }else if(pagex>birdplace+80){
        $("#bird").attr("src","img/bird_right.svg");
    }else{
        $("#bird").attr("src","img/bird_top.svg");
    }
    if(pagex<birdplace-80 && pagey<birdtop){
        $("#bird").attr("src","img/bird_top_left.svg");
    }
    if(pagex>birdplace+80 && pagey<birdtop){
        $("#bird").attr("src","img/bird_top_right.svg");
    }

});

$("#skrollr-body").css("height", "auto");



