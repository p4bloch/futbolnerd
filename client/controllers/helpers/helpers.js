cleanInput = function(input) {
	input.value = '';
}

scrollChat = function(){
	var el = $(".chat")[0];
    el.scrollTop = el.scrollHeight;
}