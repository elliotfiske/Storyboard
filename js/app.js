


$(document).ready (function(){
	$(".circle").draggable({helper: "clone"});
	var counter = 0;
	$(".dropzone").droppable({drop: function (e,ui) {
		var element = $(ui.draggable).clone();

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
		
		counter++;
	}})
})