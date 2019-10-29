$("#9-btn").click(function(event){
    event.preventDefault();
    var input9 = $("#9").val()
    localStorage.setItem("@9:00", input9)
    // console.log(input9);

    console.log(localStorage.getItem("@9:00"))

   document.querySelector(".text9").textContent=localStorage.getItem("@9:00");


})

function save9(){
if(localStorage.getItem("@9:00")){
    $("#9").val(localStorage.getItem("@9:00"))}}

save9()





$("#10-btn").click(function(event){
    event.preventDefault();
    var input10 = $("#10").val()
    localStorage.setItem("@10:00", input10)
    console.log(input10);

})



$("#11-btn").click(function(event){
    event.preventDefault();
    var input11 = $("#11").val()
    localStorage.setItem("@11:00", input11)
    console.log(input11);

})



$("#12-btn").click(function(event){
    event.preventDefault();
    var input12 = $("#12").val()
    localStorage.setItem("@12:00", input12)
    console.log(input12);

})



$("#1-btn").click(function(event){
    event.preventDefault();
    var input1 = $("#1").val()
    localStorage.setItem("@1:00", input1)
    console.log(input1);

})



$("#2-btn").click(function(event){
    event.preventDefault();
    var input2 = $("#2").val()
    localStorage.setItem("@2:00", input2)
    console.log(input2);

})



$("#3-btn").click(function(event){
    event.preventDefault();
    var input3 = $("#3").val()
    localStorage.setItem("@3:00", input3)
    console.log(input3);

})



$("#4-btn").click(function(event){
    event.preventDefault();
    var input4 = $("#4").val()
    localStorage.setItem("@4:00", input4)
    console.log(input4);

})

$("#5-btn").click(function(event){
    event.preventDefault();
    var input5 = $("#5").val()
    localStorage.setItem("@5:00", input5)
    console.log(input5);

})



