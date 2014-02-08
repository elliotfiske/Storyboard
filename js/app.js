

$(document).ready (function(){
	$(".dragIcon").draggable({helper: "clone"});
    
    $('.droprow').droppable({drop: function(e, ui) {
        var element = $(ui.draggable).clone();
        $(this).empty();
        $(this).append(element);
    }});
})