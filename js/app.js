$(document).ready (function(){
	$("#submit").click(function(e) {
		$(".modal").hide(0);
		$(".modaloverlay").hide(0);

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

	});
	$(".modal").hide(0);
	$(".modaloverlay").hide(0);
    var iconType = 'food';
    
    $('.circlecontainer').mousedown(function (e) {
        iconType = $(this).attr('type');
        console.log(iconType + 'clicked');
    });

	$(".dragIcon").draggable({helper: "clone"});
    
    var activityNum;
	$(".droprow").droppable({drop: function (e,ui) {
		var element = $(ui.draggable).clone();

 		activityNum = parseInt($(this).attr('id').match(/(\d+)$/)[0], 10);
        
		var newelement = element.html('<div class="circlecontainer ' + iconType + '"><div class="icon"></div><span class="activitycontext"></span></div>');
    	
		$(this).append(newelement);
		$(".modal").show(0);
		$(".modaloverlay").show(0);
		// var activity = prompt("Please enter your activity that is " + iconType,"Hiking");

        
        // Wipe the old children and add the new one
        $(this).empty();
        $(this).append(element);
	}});
})



// var newElement = $('<div></div>').addClass(iconType).addClass('circlecontainer')