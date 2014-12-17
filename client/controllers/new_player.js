Template.NewPlayer.events({
	'keydown input': function(e){
		if (e.keyCode == 13){
			var nombre = e.currentTarget.value
			if (!nombre){
				alert('Sos boludo? Escribí algo!');
				return false;
			}

			addPlayer(nombre);
			cleanInput(e.currentTarget);
		}
	}
});

Template.NewPlayer.helpers({
	playersCount: function(){
		return Players.find().count();
	}
});

function addPlayer (name) {
	Players.insert({
		name: name,
		team: teamWithLessPlayers(),
	});
}

function cleanInput (input) {
	input.value = '';
}

function teamWithLessPlayers() {
	team1 = Players.find({'team': 1}).count();
	team2 = Players.find({'team': 2}).count();
	if (team1 > team2) return 2;
	return 1;
}