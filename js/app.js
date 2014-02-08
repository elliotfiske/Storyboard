$(document).ready (function(){
	$(".dragIcon").draggable({helper: "clone"});
	var counter = 0;
	$(".droprow").droppable({drop: function (e,ui) {
		var element = $(ui.draggable).clone();

 		var activityNum = parseInt($(this).attr('id').match(/(\d+)$/)[0], 10);

		var containerElement = $('.circlecontainer');
		var iconType = 'exercise';
		if(containerElement.hasClass('food')) {
			iconType = 'food';
		} 

		var newelement = element.html('<div id="dropped'+counter+'" class="circlecontainer '+iconType+'"><div class="icon"></div><p class="activitycontext"></p></div>');
		//$(this).append(element);
		$(this).append(newelement);
		var activity = prompt("Please enter your activity","Hiking");
		if (activity!=null) {
			x = "my activity: " +activity +".";
			$('#dropped'+counter+' .activitycontext').html(x);
            dropRef.set(activity + ' time!');
		}
        
        $(this).empty();
        
        $(this).append(element);

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