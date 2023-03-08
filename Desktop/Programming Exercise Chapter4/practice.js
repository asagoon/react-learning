function submit(){
    var angle = document.getElementById("angle").value;
    document.getElementById("angleSubmit").innerHTML = angle;

    var velocity = document.getElementById("velocity").value;
    document.getElementById("velocitySubmit").innerHTML = velocity;

    var name = document.getElementById("name").value;
    document.getElementById("tname").innerHTML = name;

    var city = document.getElementById("city").value;
    document.getElementById("tcity").innerHTML = city;
}

function weight(){
    var weight = document.getElementById("weight").value;

if (weight < 0 || weight >= 200){
    alert("Invalid weight");
}
else{
    var weight_lbs = weight*2.2;
    weight_1 = weight_lbs.toFixed(0);
}

    document.getElementById("pweight").innerHTML = weight_1;
}

function height() {
   var height = document.getElementById("inputMeters").value;
   document.getElementById("outputFeet").innerHTML = height*0.032808
  }

  function celsius() {
    var celsius= document.getElementById("inputCelsius").value;
    document.getElementById("outputFahrenheit").innerHTML = (celsius*1.8)+32;
   }

   function reverseName() {
    var str = document.getElementById("reverseName").value;
    var strrev = '';
    for (var i=str.length - 1; i>=0; i--){
        strrev = strrev + str.charAt(i);
    }
    document.getElementById("result").innerHTML = "The reversed String is: "+ strrev;

   }