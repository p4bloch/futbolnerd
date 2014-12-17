Template.Player.events({
	'click [data-action=delete]': function(e, t){
		Players.remove(t.data._id);
	}
});