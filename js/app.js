// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
 




$(document).foundation();


//redirect on main page keyword search

$("#input1").keyup(function(event) {
                if (event.keyCode==13) {
  
    location.href =("search.html");
     $('#input1').val(''); 
  }               
});






// Doughnut Chart for Weekly Goals in charity

var dd1 = [
  {
    value: 75,
    color:"#4eddc1"
  },
  {
    value : 25,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 75
};
var dougnut1 = new Chart(document.getElementById("weeklyGoal").getContext("2d")).Doughnut(dd1,options);
var dougnut2 = new Chart(document.getElementById("weeklyGoal4").getContext("2d")).Doughnut(dd1,options);



var dd2 = [
  {
    value: 20,
    color:"#4eddc1"
  },
  {
    value : 80,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 75
};
var dougnut3 = new Chart(document.getElementById("weeklyGoal2").getContext("2d")).Doughnut(dd2,options);
var dougnut4 = new Chart(document.getElementById("weeklyGoal5").getContext("2d")).Doughnut(dd2,options);
   


var dd3 = [
  {
    value: 75,
    color:"#4eddc1"
  },
  {
    value : 25,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 75
};
var dougnut5 = new Chart(document.getElementById("weeklyGoal3").getContext("2d")).Doughnut(dd3,options);
var dougnut6 = new Chart(document.getElementById("weeklyGoal6").getContext("2d")).Doughnut(dd3,options);










///////main page select refresh

