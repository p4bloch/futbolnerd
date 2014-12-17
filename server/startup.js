Meteor.startup(function () {
	if (Teams.find().count() === 0) {
	  Teams.insert({id: 1});
	  Teams.insert({id: 2});
	}
	if (Games.find().count() === 0) {
	  Games.insert({id: 1, date: '20/12/14 18:30hs', address: 'Av. Cheta 123 - Palermo!'});
	}
});