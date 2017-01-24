// Setting up js page for Coned_testpage

//var btn = document.getElementById("button");
//var languageList = document.getElementsByTagName("ul");
//console.log(languageList + " is found");
//
//btn.addEventListener("click", function(){
//    console.log("click");
//    languageList.classList.toggle("show");
//    console.log(languageList.classList.contains("show"));
//})


var btn = document.getElementById("button");

var languageList = document.querySelector(".pdf-lang");

btn.addEventListener("click", function(){
    languageList.classList.toggle("show");
    console.log(languageList.classList.contains("show"))
})

//var current = document.querySelector(".box-container .box:nth-child(2)");
//
//var windowResize = window.outerWidth;
//
//window.addEventListener("resize", function(){
//    if (window.outerWidth <=749) 
//        current.className += " current-box";
//    else
//        current.className = "box";
//});




