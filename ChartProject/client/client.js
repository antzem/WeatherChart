
function getWeather(woeid, unit) {
  var url = "http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid=" 
    + woeid + " and u='" + unit +"'&format=json&callback=cbfunc";
  $.getScript(url, function(data) {  } );
}

cbfunc = function(data){
 var temp, name;

 name = data.query.results.channel.description.substring(19);
 temp = data.query.results.channel.wind.chill;

 TemperatureData.insert({
  cityName: name,
  temperature: temp
 });
};

Meteor.call('deleteTemperatures', function(error, id) {
  if(error) {
    return alert(error.reason);
  }
});

if(TemperatureData.find().count() === 0) {
  getWeather(1118370, "c"); //Tokyo
  getWeather(2344116, "c"); //Istanbul
  getWeather(850357, "c"); //Split
  getWeather(725746, "c"); //Venice
  getWeather(615702, "c"); //Paris
  getWeather(2459115, "c"); //New York
}
