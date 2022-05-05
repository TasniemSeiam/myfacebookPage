
//set login and signup buttons:

var welcome=$(".welcomeib");
var buttons=$(".buttons")
var loginButton=$(".loginBt");
var signupButton=$(".signupBt");
var login=$(".login");
var signup=$(".signup");
var form=$(".forms");
var closeLogin=$(".closing");
var closeSignup=$(".closesignup");
//login open and close
loginButton.click(function () {
    buttons.hide(800);
    welcome.hide();
    login.show(1000);
    form.show();
});
closeLogin.on("click",function () {
    form.hide();
    login.hide(900);
    welcome.show(100);
    buttons.show(900);  
});
//sign up open and close
signupButton.click(function(){
    buttons.hide(800);
    welcome.hide();
    signup.show(1000);
    form.show();
});
closeSignup.click(function(){
    form.hide(200);
    signup.hide(900);
    welcome.show(100);
    buttons.show(900);  
});//////////////////////////////////////////////////////// End login page ////////////////////////////////////////////////////

// animation on search input
$(document).ready(function () {
    var search=$("#search");
    search.focus(function () {
        search.removeAttr('placeholder');
    }).blur(function () {
        $(this).attr('placeholder','search about...')
    }) 
});
//set icon and secttion request
let request=document.querySelector(".friends");
let friendRequest =document.querySelector(".friendrequest");
//show and hide friends section 
request.addEventListener("click",()=>{
    messages.classList.remove("sectionshow");
    notifications.classList.remove("sectionshow");
    friendRequest.classList.toggle("sectionshow");
});
//set icon and secttion message
let chat=document.querySelector(".chats");
let messages =document.querySelector(".message");
//show and hide messages section
chat.addEventListener("click",()=>{
    notifications.classList.remove("sectionshow");
    friendRequest.classList.remove("sectionshow");
    messages.classList.toggle("sectionshow");
});
//set icon and secttion message
let notification=document.querySelector(".notificationbell");
let notifications =document.querySelector(".notifications");
//show and hide notifications section
notification.addEventListener("click",()=>{
    messages.classList.remove("sectionshow");
    friendRequest.classList.remove("sectionshow");
    notifications.classList.toggle("sectionshow");
});

//set drop down
let drop=document.querySelector(".ndrop");
let navdrop =document.querySelector(".navdrop");
//show and hide drop down
drop.addEventListener("click",()=>{
    navdrop.classList.toggle("sectionshow")
});
///set and active heart icon
/*
var heart=$(".heart");
heart.on("click",function () {
    $(this).toggleClass("like")
});*/

var hearts=document.querySelectorAll(".heart");

hearts.forEach(a=>{
    a.onclick=function(e){
        var mark =e.target.dataset.heart;
        let b=e.target.classList;
        a.classList.toggle("like");
        var lov =document.getElementById(mark);
        if (b.contains("like")) {
            lov.innerText++;
        }
        else{
            lov.innerText--;
        }

    }
});
//set and get comments
var Comments=document.querySelectorAll(".cc");

Comments.forEach(x=>{
    x.onclick=function(com){
        var c=com.target.dataset.coment;
        var coman =document.getElementById(c);
        x.classList.toggle("activecomment")
        coman.classList.toggle("sectionshow");
        console.log(coman.innerHTML)
    }
});
//////anemation for slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:7,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

/////////






AOS.init()