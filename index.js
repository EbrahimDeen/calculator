//clearing display
function clearAll(){
    document.getElementById('screen').value="";
}
//displaying input
function dispaly(val) 
{ 
    var inputElement=  document.getElementById("screen");
    inputElement.value  +=val;
}

           
 //function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("screen").value ;
    let y = eval(x) 
    document.getElementById("screen").value = y ;
} 