


$(document).ready (function(){
	$(".circle").draggable({helper: "clone"});
	$(".dropzone").droppable({drop: function (e,ui) {
		var element = $(ui.draggable).clone();
		$(this).append(element);
		var activity = prompt("Please enter your activity","Hiking");
		if (activity!=null) {
			x = "my activity: " +activity +".";
			document.getElementById("activitycontext").innerHTML=x;
            dropRef.set(activity + ' time!');
		}
	}})
})