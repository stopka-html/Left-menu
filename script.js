
function sett() {
  elem = document.getElementById("termen");
  div = document.getElementById("div");
  elem2 = document.getElementById("gamejs");
  
  if(elem.style.visibility == "visible"){
   console.log('ok')
    elem.style.visibility = "hidden";
    div.style.backgroundColor = "transparent";
    
  }
  else{
    elem.style.visibility = "visible";
    
    div.style.backgroundColor = "white";
    console.log('no')
    
  }
}
function game() {
  elem = document.getElementById("gamejs");
  elem2 = document.getElementById("termen");
  div = document.getElementById("game");
  
  if(elem.style.visibility == "visible"){
   console.log('ok')
    elem.style.visibility = "hidden";
    div.style.backgroundColor = "transparent";
    
  }
  else{
    elem.style.visibility = "visible";
    div.style.backgroundColor = "white";
    
    console.log('no');
      
    
  }
}