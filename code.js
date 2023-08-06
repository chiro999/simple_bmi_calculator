function calculate(){
     var w = document.getElementById("weight").value;
     var h = document.getElementById("height").value;

     var hsqr = h*h;

     var bmi = w/hsqr;
     
     document.getElementById("bmi_value").innerHTML = bmi;



};