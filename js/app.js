// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
 




$(document).foundation();


//redirect on

$("#input1").keyup(function(event) {
                if (event.keyCode==13) {
  
    location.href =("search.html");
     $('#input1').val(''); 
  }               
});



// Doughnut Chart for Weekly Goals




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
var dougnut2 = new Chart(document.getElementById("weeklyGoal2").getContext("2d")).Doughnut(dd1,options);


   
///////tab refresh


