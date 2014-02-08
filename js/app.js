$(document).ready (function(){
	$(".modal").addClass("ishidden");
	$(".modaloverlay").addClass("ishidden");
    var iconType = 'food';
    
    $('.circlecontainer').mousedown(function (e) {
        iconType = $(this).attr('type');
        console.log(iconType + 'clicked');
    });

	$(".dragIcon").draggable({helper: "clone"});
    
	$(".droprow").droppable({drop: function (e,ui) {
		var element = $(ui.draggable).clone();

 		var activityNum = parseInt($(this).attr('id').match(/(\d+)$/)[0], 10);
        
		var newelement = element.html('<div class="circlecontainer ' + iconType + '"><div class="icon"></div><span class="activitycontext"></span></div>');
    
		$(this).append(newelement);
		$(".modal").removeClass("ishidden");
		$(".modaloverlay").removeClass("ishidden");
		// var activity = prompt("Please enter your activity that is " + iconType,"Hiking");
		if (activity!=null) {
			x = 'my activity: ' +activity +'.';
			newelement.find('span').html(x);
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