
TemperatureData = new Meteor.Collection('temperature_data');

Meteor.methods({
	deleteTemperatures: function() {
		TemperatureData.remove({});
	}
});