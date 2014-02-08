$(document).ready (function(){

	$(".dragIcon").draggable({helper: "clone"});
	$(".dragIcon").draggable({helper: "clone"});
    
    $('.droprow').droppable({drop: function(e, ui) {
        var element = $(ui.draggable).clone();
        
		var activity = prompt("Please enter your activity","Hiking");
        if (activity!=null) {
			x = "Activity: " + activity + ".";
			$(".activitycontext").html(x);
            dropRef.set(activity + ' time!');
		}
        
        $(this).empty();
        
        $(this).append(element);
    }});
})