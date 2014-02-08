$(document).ready (function(){
	$(".dragIcon").draggable({helper: "clone"});
    
	$(".droprow").droppable({drop: function (e,ui) {
		var element = $(ui.draggable).clone();

 		var activityNum = parseInt($(this).attr('id').match(/(\d+)$/)[0], 10);

		var containerElement = $('.circlecontainer');
        var iconType = containerElement.attr('type');
        
		var newelement = element.html('<div class="circlecontainer '+iconType+'"><div class="icon"></div><p class="activitycontext"></p></div>');
    
		$(this).append(newelement);
		var activity = prompt("Please enter your activity that is " + iconType,"Hiking");
		if (activity!=null) {
			x = "my activity: " +activity +".";
			$('#dropped .activitycontext').html(x);
            dropRef.set(activity + ' time!');
		}
        
        // Wipe the old children and add the new one
        $(this).empty();
        $(this).append(element);

        // Talk to firebase and tell it the new change
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
	}});
})



// var newElement = $('<div></div>').addClass(iconType).addClass('circlecontainer')