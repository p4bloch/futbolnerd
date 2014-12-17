Template.Chat.events({
	'keydown [data-action=chat-message]': function(e){
		var chatName = $('[data-action=chat-name]').val();
		var chatMessage = $('[data-action=chat-message]').val();
		if (e.keyCode == 13){
			if (!chatMessage) return false;
			Messages.insert({
				name: chatName,
				message: chatMessage,
				timestamp: new Date()
			});
			cleanInput(e.target);
			scrollChat();
		}
	}
});

Template.Chat.helpers({
	messages: function(){
		return Messages.find();
	},
});

Template.Mensaje.rendered = function() {
	scrollChat();
}