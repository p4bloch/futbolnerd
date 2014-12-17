Template.PlayerInTeam.events({
	'click .switch': function(e, t){
		Players.update({_id: t.data._id}, {$set: {'team': switchTeam(t.data.team)}});
	}
});

Template.Team1.helpers({
	players: function(){
		return Players.find({'team': 1});
	}
});

Template.Team2.helpers({
	players: function(){
		return Players.find({'team': 2});
	}
});

function switchTeam(team){
	if (team == 1) return 2;
	return 1;
}