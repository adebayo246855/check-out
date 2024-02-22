 
 function proceed(){
const surname = document.getElementById("Firstname").value;
const lastName = document.getElementById("Last").value;
const midName = document.getElementById("Middle").vlaue;
const post = document.getElementById("place").value;
const profile = document.getElementById("State").value;
let result ="";
if(surname !== ""){
result=(`Dear ${surname}, we're not available for now`);

}else{
result =(`you needs to give us your name`)
}
  
let cheched = document.getElementById("deck").innerHTML = result;
  
} 
 
 