
var moves = [];

$(document).ready(function(){
  
var player = 1; 
 
 
 $(".fill").on("click", function firstMove(){
    var selected = $(this);
  //alert("add a cross here");
  
 
 myArray = moves.push(Number(selected.attr("id")));
 
 console.log(myArray);
 
 
 
  //myArray = moves.push(selected);
  //console.log (myArray);
  //console.log(moves);
  
   
   if (selected.hasClass("cross")||selected.hasClass("circle")){
     
     alert("already selected");
     
   }
   else {
     if (player === 1){
       
       selected.addClass("cross");
       
       if (winner("cross")){
       alert("congrats " + player +  "won");
       }
       
          breakkie = setTimeout(pcMove , 500);
     }
     
  
     
   }
   
   function pcMove(tryingAgain){
   
   //alert("Is this even working?");
   ram = Math.floor((Math.random() * 8) +1 );
   
   console.log(ram);
   
   //I wanna loop through the array and check if I have this number;
   
  
   
   if (moves.includes(ram) === true){
    
   
   
    tried = Math.floor((Math.random() * 8) +1 );
    pcMove(tried);
   
   }
   
   
   
  
    else{
    
      $("#"+ram).addClass("circle");
    }
   
 
   console.log(moves.push(ram));
   console.log(moves);
   player = 1;
   
     
   }
 
    
  }); 
  
  
  function winner(turn){
  
  if($("#1").hasClass(turn) && $("#2").hasClass(turn) && $("#3").hasClass(turn) ){
  
  
  } else if ($("#4").hasClass(turn) && $("#5").hasClass(turn) && $("#6").hasClass(turn)){
  return true;
  
  } else if ($("#7").hasClass(turn) && $("#8").hasClass(turn) && $("#9").hasClass(turn)){
  
  return true;
  
  }else if ($("#1").hasClass(turn) && $("#4").hasClass(turn) && $("#7").hasClass(turn)){
  
  return true;
  
  }else if ($("#2").hasClass(turn) && $("#5").hasClass(turn) && $("#8").hasClass(turn)){
  
  return true;
  
  }else if ($("#3").hasClass(turn) && $("#6").hasClass(turn) && $("#9").hasClass(turn)){
  
  return true;
  
  }else if ($("#3").hasClass(turn) && $("#5").hasClass(turn) && $("#7").hasClass(turn)){
  
  return true;
  
  }else if ($("#1").hasClass(turn) && $("#5").hasClass(turn) && $("#9").hasClass(turn)){
  
  return true;
  
  }
  
  else {
  
  return false;
  }
  
  }
  
   
});
 
 
