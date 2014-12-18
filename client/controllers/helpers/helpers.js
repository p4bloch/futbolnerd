cleanInput = function(input) {
	input.value = '';
}

scrollChat = function(){
	var el = $(".chat")[0];
    el.scrollTop = el.scrollHeight;
}

Template.registerHelper('dateToHuman', function(date){
	return moment(date).format('D/M h:mm');
});