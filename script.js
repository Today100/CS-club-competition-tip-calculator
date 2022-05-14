// function click(){
//   console.log("Hello")
//   document.getElementById('tip5').className = 'tip-value active'
// }
function clicked(id){
document.getElementById(id).onclick = function() {myFunction(id)};
}
var the_class = 'tip-value active';

function myFunction(id) {
  if (document.getElementById(id).className == the_class) {
    document.getElementById(id).className = 'tip-value';
  }
  else {
    document.getElementById("tip1").className = 'tip-value';
    document.getElementById("tip2").className = 'tip-value';
    document.getElementById("tip3").className = 'tip-value';
    document.getElementById("tip4").className = 'tip-value';
    document.getElementById("tip5").className = 'tip-value';

    document.getElementById(id).className = the_class;

  }
}


function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}


function getTip(someargument){
  const tips = ["tip1", "tip2", "tip3", "tip4", "tip5"];
  for (let t of tips){
    if (document.getElementById(t).className == "tip-value active"){
      var v = document.getElementById(t).name;
      console.log(v);
      return v;
      }
  }
  if (document.getElementById("cus").value){
    var v = document.getElementById("cus").value;
    return v;
  }

}

document.onkeyup = function (e) {
    var bill = parseFloat(document.getElementById("bill").value);
    var tip = parseFloat(getTip())/100;
    var people = parseFloat(document.getElementById("people").value);
    if (people <= 0){
      document.getElementById("er1").innerHTML = "People cannot be or less than 0";
    }
    else{
      document.getElementById("er1").innerHTML = "";
    }
    var amount = round(bill*tip/people);
    var total = round((bill*tip+bill)/people);
    console.log(tip);
    console.log(total);
    if (amount && total){
    document.getElementById("am").innerHTML = amount;
    document.getElementById("total").innerHTML = total;
    }
}


function reSet(){
  document.getElementById("bill").value = "";
  document.getElementById("tip1").className = 'tip-value';
  document.getElementById("tip2").className = 'tip-value';
  document.getElementById("tip3").className = 'tip-value';
  document.getElementById("tip4").className = 'tip-value';
  document.getElementById("tip5").className = 'tip-value';
  document.getElementById("cus").value = "";
  document.getElementById("people").value = "";
  document.getElementById("am").innerHTML = "";
  document.getElementById("total").innerHTML = "";
}