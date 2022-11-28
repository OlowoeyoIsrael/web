
var next = document.getElementById("next");

   let n=0;

next.addEventListener("click", function (){
  var work = document.getElementsByClassName("work1");

  for(let i=0;i<work.length;i++){
    work[i].style.display = "none";
    }

    n++;

  if(n>work.length){
     n=1;
    }

     work[n-1].style.display = "block";
    
});

var prev = document.getElementById("prev");
var work = document.getElementsByClassName("work1");

let p =work.length;

prev.addEventListener("click", function (){

  for(let i=0;i<work.length;i++){
    work[i].style.display = "none";
    }


     p--;

   if(p<1){
         p=work.length;
    }

    work[p-1].style.display = "block";
});

// indicator icons

// var prev = document.getElementById("prev");
// var button = document.getElementsById("button1");
//
// let p =button.length;
//
// prev.addEventListener("click", function (){
//
//   for(let i=0;i<work.length;i++){
//     button[i].classList.remove = "active";
//     }
//
//
//      p--;
//
//    if(p<1){
//          p=button.length;
//     }
//
//     button[p-1].classList.add = "active";
// });




//
//   var button = document.getElementsByClassName("button")
//
//
//
//
//   if(n>work.length){
//     n=1;
//   }
//
//   work[n-1].style.display = "block";
//
//   button[n-1].className += "active";
//
//


$(".valuetoggler1").click(function(){
  $(".dropbody1").slideToggle();
});


$(".valuetoggler2").click(function(){
  $(".dropbody2").slideToggle();
});

$(".valuetoggler3").click(function(){
  $(".dropbody3").slideToggle();
});
