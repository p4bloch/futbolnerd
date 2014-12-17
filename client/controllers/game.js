Template.Header.helpers({
	game: function(){
		return Games.findOne({id: 1});
	},
	editFecha: function(){
		return Session.get('editFecha');
	},
	editAddress: function(){
		return Session.get('editAddress');
	}
});

Template.Header.events({
	'click [data-action=editFecha]': function(){
		Session.set('editFecha', true);
	},
	'click [data-action=editAddress]': function(){
		Session.set('editAddress', true);
	},
	'keydown [data-action=newFecha]': function(e, t){
		gameId = $('[name=game-id]').val();
		if (e.keyCode == 13){
			console.log(e);
			var newFecha = $('[data-action=newFecha]').val();
			Games.update({_id: gameId}, {$set: {date: newFecha}});
			Session.set('editFecha', false);
		}
	},
	'keydown [data-action=newAddress]': function(e, t){
		gameId = $('[name=game-id]').val();
		if (e.keyCode == 13){
			var newAddress = $('[data-action=newAddress]').val();
			Games.update({_id: gameId}, {$set: {address: newAddress}});
			Session.set('editAddress', false);
		}
	}
});