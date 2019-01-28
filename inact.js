$(".type"). addClass("hide");
// $(".nav1"). mouseover(function(){
//   $(".type").removeClass("hide");
//   $(".container").addClass("modown");
// });
// $(".type"). mouseout(function(){
//   $(".type").addClass("hide");
//   $(".container").addClass("moup");
// });

// grid width and img size admjustment according to the window size
var cw = window.innerWidth/2-85;
console.log(window.innerWidth);
console.log(cw);
var ch = 0.6*cw;
$("img").attr("width",cw);
$(".container").css("grid-template-columns",cw);
$(".container").css("grid-template-rows",ch);

$(".text"). addClass("hide");

$(".brainr1"). hover(function(){
  $(".text1").toggleClass("hide");
  $(".br1").toggleClass("opa");
})

$(".chair1"). hover(function(){
  $(".text2").toggleClass("hide");
  $(".br2").toggleClass("opa");
})

$(".bake"). hover(function(){
  $(".text3").toggleClass("hide");
  $(".br3").toggleClass("opa");
})

$(".food"). hover(function(){
  $(".text4").toggleClass("hide");
  $(".br4").toggleClass("opa");
})

$(".re"). hover(function(){
  $(".text5").toggleClass("hide");
  $(".br5").toggleClass("opa");
})

$(".dental"). hover(function(){
  $(".text6").toggleClass("hide");
  $(".br6").toggleClass("opa");
})

$(".puz"). hover(function(){
  $(".text7").toggleClass("hide");
  $(".br7").toggleClass("opa");
})

$(".ext"). hover(function(){
  $(".text8").toggleClass("hide");
  $(".br8").toggleClass("opa");
})

$(".cube"). hover(function(){
  $(".text9").toggleClass("hide");
  $(".br9").toggleClass("opa");
})

$(".apt"). hover(function(){
  $(".text10").toggleClass("hide");
  $(".br10").toggleClass("opa");
})
