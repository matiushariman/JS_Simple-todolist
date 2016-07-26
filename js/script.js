// Add new todo
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var str = $(this).val();
		$(this).val(""); // Clear textbox
		$("ul").append("<li><span>X</span>"+str+"</li>"); // Append new li
	}
});

// Remove/delete todo
$("ul").on("click", "span", function(){ // When ul span on click
	$(this).parent().fadeOut("fast", function() { // this = span, this->parent = li
		$(this).remove(); // this = li
	});
});