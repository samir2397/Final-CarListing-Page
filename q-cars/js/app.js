$(".pit-bot").on({mouseenter:function(){
$(this).css("border-bottom-color","red")
var pitIndex=$(this).index()
$(this).each(function(ind,sld){
    $(sld).parents(".carSlide").find(".slide-item").hide()
})
$(this).parents(".carSlide").find("[dt-slide="+pitIndex+"]").fadeIn(250)
},mouseleave:function(){
    $(".pit-bot").css("border-bottom-color","white")
}})
