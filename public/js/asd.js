var maxTemp = [], minTemp = [], days = [];

// *******************  weather API ****************************
// ajax with jQuery
var weather = function ( lat, lon ) {
  $.ajax( {
    type: 'GET',
    url: 'https://simple-weather.p.mashape.com/weatherdata?lat=' + lat + '&lng=' + lon + '\'',
    data: {},
    dataType: 'json',

    success: function( data ) {
      // MAIN INFO

      // place
      place = data.query.results.channel.item.title;
      // slice it to display  only place
      var temp0 = place.search( 'for' ),
          temp1 = place.search( ',' );

      place = place.slice( temp0 + 3, temp1 );
      document.querySelector( '#place' ).innerHTML = '<p>' + place + '</p>';

      // conditions
      conditions = data.query.results.channel.item.condition.text;
      document.querySelector( '#text' ).innerHTML = '<p>' + conditions + '</p>';
      // condition icon
      code = data.query.results.channel.item.condition.code;
      code2Icon(code);

      //temperature
      temperature = data.query.results.channel.item.condition.temp;
      document.querySelector( '#temperature' ).innerHTML = '<p>' + temperature + ' &deg;C</p>';

      // FORECAST
      for ( var i = 1; i <= 7; i++ ) {

        // getting proper object from arr
        var objNum = data.query.results.channel.item.forecast[ i ];
        // parts of the object that I'm interested in
        var parts = [ "day", "high", "low"];

        //running through object elem
        var temp = "", value = "";

        for ( var j = 1; j <= 3; j++ ) {
          // getting values from delivered object
          value = objNum[ parts[ j - 1 ] ];

          //passing values to proper arrays
          switch ( j ){
            case 1:
              days.push(value);
              break;
            case 2:
              maxTemp.push(Number(value));
              break;
            case 3:
              minTemp.push(Number(value));
              break;
          }
        }
      }
      //paint the graph
      chart(days, maxTemp, minTemp);
      //show buttons
      showButtons();
    },

    complete: function () {
      $('.container').css('display', 'block');
    },

    error: position(), function( jqXHR, exception) {
      var msg = '';
      if ( jqXHR.status === 0 ) {
        msg = 'Not connect.\n Verify Network.';
      } else if ( jqXHR.status == 404 ) {
        msg = 'Requested page not found. [404]';
      } else if ( jqXHR.status == 500 ) {
        msg = 'Internal Server Error [500].';
      } else if ( exception === 'parsererror' ) {
        msg = 'Requested JSON parse failed.';
      } else if ( exception === 'timeout' ) {
        msg = 'Time out error.';
      } else if ( exception === 'abort' ) {
        msg = 'Ajax request aborted.';
      } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
      }
      $( '#answer' ).innerHtml = '<p>' + msg + '</p>';
	position();
    },

    //custom mashape header
    beforeSend: function( xhr ) {
      xhr.setRequestHeader( "X-Mashape-Authorization", "oOYqBRMO8qmshVQb8Vk9zU3Lj003p1Si6zRjsnnxcTdqjfox7V" );
    }
  } );
};

// *******************  geolocation  ****************************
// It's a good practice to ask for permission to track.
// Navigator is less precise but we can
// track user by his IP anyway, with less precision
var position = function(){
  navigator.geolocation.getCurrentPosition(
    // succes function
    function(position){
      var lat = position.coords.latitude,
          lon = position.coords.longitude;
      return weather( lat, lon );
    },
    // error function
    function(){
      $.getJSON('https://ipinfo.io/geo', function(response) {
          var loc = response.loc.split(',');
          return weather ( loc[0], loc[1] );
      });
    }
  );
};

// transforming Yahoo code in to icon
var code2Icon = function ( code ) {
  var icon = '';
  code = parseInt(code);
  switch (code) {
      case 0: icon = 'wi-tornado'; break;
      case 1: icon = 'wi-tornado'; break;
      case 2: icon = 'wi-tornado'; break;
      case 3: icon = 'wi-thunderstorm'; break;
      case 4: icon = 'wi-thunderstorm'; break;
      case 5: icon = 'wi-rain-mix'; break;
      case 6: icon = 'wi-rain-mix'; break;
      case 7: icon = 'wi-rain-mix'; break;
      case 8: icon = 'wi-hail'; break;
      case 9: icon = 'wi-sprinkle'; break;
      case 10: icon = 'wi-hail'; break;
      case 11: icon = 'wi-showers'; break;
      case 12: icon = 'wi-showers'; break;
      case 13: icon = 'wi-snow'; break;
      case 14: icon = 'wi-snow'; break;
      case 15: icon = 'wi-snow'; break;
      case 16: icon = 'wi-snow'; break;
      case 17: icon = 'wi-hail'; break;
      case 18: icon = 'wi-hail'; break;
      case 19: icon = 'wi-fog'; break;
      case 20: icon = 'wi-fog'; break;
      case 21: icon = 'wi-fog'; break;
      case 22: icon = 'wi-fog'; break;
      case 23: icon = 'wi-cloudy-gusts'; break;
      case 24: icon = 'wi-cloudy-windy'; break;
      case 25: icon = 'wi-thermometer-exterior'; break;
      case 26: icon = 'wi-cloudy'; break;
      case 27: icon = 'wi-night-cloudy'; break;
      case 28: icon = 'wi-day-cloudy'; break;
      case 29: icon = 'wi-night-cloudy'; break;
      case 30: icon = 'wi-day-cloudy'; break;
      case 31: icon = 'wi-night-clear'; break;
      case 32: icon = 'wi-day-sunny'; break;
      case 33: icon = 'wi-night-clear'; break;
      case 34: icon = 'wi-day-sunny-overcast'; break;
      case 35: icon = 'wi-rain-mix'; break;
      case 36: icon = 'wi-day-sunny'; break;
      case 37: icon = 'wi-thunderstorm'; break;
      case 38: icon = 'wi-thunderstorm'; break;
      case 39: icon = 'wi-thunderstorm'; break;
      case 40: icon = 'wi-thunderstorm'; break;
      case 41: icon = 'wi-snow'; break;
      case 42: icon = 'wi-snow'; break;
      case 43: icon = 'wi-snow'; break;
      case 44: icon = 'wi-day-cloudy'; break;
      case 45: icon = 'wi-storm-showers'; break;
      case 46: icon = 'wi-snow'; break;
      case 47: icon = 'wi-thunderstorm'; break;
      case 3200: icon = 'wi-cloud'; break;
      default: return '';
  }
  document.querySelector('#icon').innerHTML = '<i class=\"wi ' + icon + '\" style=\"color: #ADC9FF; font-size: 3em;\"></i>';
};

// *******************  chart  ****************************
// plotting chart with Highcharts
// After second thought I want this clean and
// simple, so I disabled many options bu setting
// enabled: false parameter
var chart = function ( daysArr, maxArr, minArr ){
  Highcharts.chart('chart', {
      chart: {
        type: 'column',
        backgroundColor: '#00256F',
      },
      title: {       // disabled bu 'null'
        text: null, //'<p>Forecast</p>',
        useHTML: true,
        style: {
          color: '#ADC9FF',
          font: '1em "Playfair Display", serif, Verdana, serif',
        }
      },
      xAxis: {
        categories: daysArr,
        lineColor: '#ADC9FF',
        labels: {
          style: {
            color: '#ADC9FF',
            font: '1em "Playfair Display", serif, Verdana, serif',
          }
        }
      },
      yAxis: {
        title: {
          enabled: false,       // disabled
          text: 'Temperature ( &deg;C )',
          style: {
            color: '#ADC9FF',
            font: '1em "Playfair Display", serif, Verdana, serif',
          }
        },
        gridLineColor: '#ADC9FF',
        labels: {
          enabled: false,       // disabled
          style: {
            color: '#ADC9FF'
          }
        }
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:1f}',
            style: {
              color: '#ADC9FF',
              font: '2em  Verdana, serif',
            }
          }
        }
      },
      credits: {
        enabled: false      // disabled
      },
      legend: {
        enabled: false      // disabled
      },
      series: [{
        name: 'max: ',
        color: '#4B71B9',
        data: maxArr,
      }, {
        name: 'min: ',
        color: '#9DBFFF',
        data: minArr
      }]
  });
};

// *******************  change C/F  ****************************
// function for changing C to F or the other way
var changeTemp = function (){
  var currT = "", newT = 0, sign = "", length = 0;

  // take current temperature
  currT = document.querySelector( '#temperature' ).innerHTML;

  length = currT.length;
  sign = currT.slice( length - 5, length - 4 );
  newT = Number(currT.slice(3, 5));

  //functions for using map on maxTemp and minTemp
  var toF = function ( value ){ return Math.round( value * 9/5 + 32 );};
  var toC = function ( value ){ return Math.round(( value - 32 ) * 5/9 );};

  // decide which way to go by sign
  if(sign === 'C'){
    maxTemp = maxTemp.map(toF);
    minTemp = minTemp.map(toF);
    newT = Math.round( newT * 9/5 + 32 );
    sign = 'F';
  } else {
    maxTemp = maxTemp.map(toC);
    minTemp = minTemp.map(toC);
    newT = Math.round(( newT - 32) * 5/9 );
    sign = 'C';
  }

  //update displayed value
  document.querySelector( '#temperature' ).innerHTML = '<p>' + newT + " &deg; " + sign + '</p>';
  //update chart
  return chart(days, maxTemp, minTemp);
};

//changing button colors - need to work on this solution
var changeColor = function (){
  var check = $('.btn').css('background-color');

  if(check === 'rgb(32, 65, 158)'){
    $('#btn-C').css('background-color', 'rgb(49,106,212)');
    $('#btn-F').css('background-color', 'rgb(32,65,158)');
    return changeTemp();
  } else {
    $('#btn-C').css('background-color', 'rgb(32,65,158)');
    $('#btn-F').css('background-color', 'rgb(49,106,212)');
    return changeTemp();
  }
};

// show buttons after ajax.complete
var showButtons = function(){
  $('.btn').addClass('show');
  return 0;
};


// this one is for setting the same
//height of 4 elements in weather section
var height = function(){
  var highestBox = 0;

  $('div.col-3 div.col-4').each(function() {
    // find highest element
    if ($(this).height() > highestBox) {
      // change height of
      highestBox = $(this).height();
    }
  });
  //set up height
  $('div.col-3 div').css("height", highestBox + "px");
};
height();
