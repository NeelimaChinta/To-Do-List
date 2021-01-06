///done todo
$("ul").on("click", "li", function(){ 
    $(this).toggleClass("completed");
});

//delete todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
 e.stopPropagation();
});

//create todo
$("input[type='text'").keypress(function(e){
    if(e.which === 13){
     var todotext =  $(this).val();
     $(this).val("");
     $("ul").append("<li><span><i class='fa-trash'></i></span>" + todotext + "</li>");
    } 
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
})
