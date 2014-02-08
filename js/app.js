$(document).ready (function(){

	$(".dragIcon").draggable({helper: "clone"});
	$(".dragIcon").draggable({helper: "clone"});
    
    $('.droprow').droppable({drop: function(e, ui) {
        var element = $(ui.draggable).clone();
        
        var activityNum = parseInt($(this).attr('id').match(/(\d+)$/)[0], 10);
        
		var activity = prompt("Please enter your activity","Hiking");
        if (activity!=null) {
			x = "Activity: " + activity + ".";
			$(".activitycontext").html(x);
            
            switch (activityNum) {
                case 1:
                    dropRef.update({activity1: activity});
                    break;
                case 2:
                    dropRef.update({activity2: activity});
                    break;
                case 3:
                    dropRef.update({activity3: activity});
                    break;
                case 4:
                    dropRef.update({activity4: activity});
                    break;
            }
		}
        
        $(this).empty();
        
        $(this).append(element);
    }});
})