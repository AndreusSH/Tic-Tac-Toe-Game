<<<<<<< HEAD

   
var moves = [];
var player = 'X';
var machine = 'O';
//var curPlayer = player;
=======
/*var moves = [];
var player = 'X';
var machine = 'O';
var curPlayer = player;
>>>>>>> 212f33f5821ed187c81ada490c27c6af1dca0e12

$(document).ready(function(){
  
 $("#choiceX").click(function(){
        alert("You will play with X")
   player = 'X';
   machine = "O"
   console.log(player);
    });
  


$("#choiceO").click(function(){
        alert("You will play with O");
  player = "O";
   machine = "X";
  console.log(player);
    });
  
 });
 
 
<<<<<<< HEAD
  $("#reset").click(function(){
  alert("you are going to reset");
  
  $(".fill").removeClass("circle cross winner");

  console.log(moves);
    moves = [];
 // firstMove();
  //----Here I can just clear the interval so that exprefunction  
    clearTimeout(myVar);

})
$(".fill").on("click", function firstMove(){
    var selected = $(this);
  console.log(player)
  
=======
$(".fill").on("click", function firstMove(){
    var selected = $(this);
  console.log(player)

>>>>>>> 212f33f5821ed187c81ada490c27c6af1dca0e12
 // alert("add a cross here");
 

 myArray = moves.push(Number(selected.attr("id")));
 
 console.log(myArray);
  
  
  if (selected.hasClass("cross")||selected.hasClass("circle")){
     
     alert("already selected");
     
   }

 
   else {
     if (player === "X"){
       
       selected.addClass("cross");
     }
   if (player === "O"){
<<<<<<< HEAD
     
     selected.addClass("circle");
     
   }
   myVar = setTimeout(pcMove , 500);
     
   }
 

if (winner("cross")){
       alert("congrats " + player +  " won");
       
       $(".fill").removeClass("circle cross winner");
  //moves = [];     
  //firstMove();
  clearTimeout(myVar);
       }
  else if (winner("circle")){
    alert("congrats " + player +  " won");
    $(".fill").removeClass("circle cross winner");
    
   // firstMove()
      clearTimeout(myVar);
    
  }
       
     
     
 function pcMove(){
=======
     
     selected.addClass("circle");
     
   }
   breakkie = setTimeout(pcMove , 500);
     
   }
 

if (winner("cross")){
       alert("congrats " + player +  " won");
       $(".fill").removeClass("circle cross");
       firstMove()
       }
  else if (winner("circle")){
    alert("congrats " + player +  " won");
    $(".fill").removeClass("circle cross");
    firstMove()
    
    
  }
       
     
     
 function pcMove(tryingAgain){
>>>>>>> 212f33f5821ed187c81ada490c27c6af1dca0e12
   
   //alert("Is this even working?");
   ram = Math.floor((Math.random() * 8) +1 );
   
   console.log(ram);
   
   //I wanna loop through the array and check if I have this number;
   
  
   
   if (moves.includes(ram) === true){
    
   
   
    tried = Math.floor((Math.random() * 8) +1 );
    pcMove();
   
   }
   
   
   
  
    else{
    if (player === "X"){$("#"+ram).addClass("circle");
    player = "X";
<<<<<<< HEAD
                        //console.log(player);
=======
                        console.log(player);
>>>>>>> 212f33f5821ed187c81ada490c27c6af1dca0e12
    
    }
    if (player === "O"){$("#"+ram).addClass("cross");
    player = "O";  
<<<<<<< HEAD
                        //console.log(player);
=======
                        console.log(player);
>>>>>>> 212f33f5821ed187c81ada490c27c6af1dca0e12
                       }
   
    }
    
   console.log(moves.push(ram));
   console.log(moves);
   //player = 1;
 }
  
  
  function winner(turn){
  
  if($("#1").hasClass(turn) && $("#2").hasClass(turn) && $("#3").hasClass(turn) ){
    $("#1,#2,#3").addClass("winner");
    return true;
  
  } else if ($("#4").hasClass(turn) && $("#5").hasClass(turn) && $("#6").hasClass(turn)){
    $("#4,#5,#6").addClass("winner");
  return true;
  
  } else if ($("#7").hasClass(turn) && $("#8").hasClass(turn) && $("#9").hasClass(turn)){
  $("#7,#8,#9").addClass("winner");
  return true;
  
  }else if ($("#1").hasClass(turn) && $("#4").hasClass(turn) && $("#7").hasClass(turn)){
  $("#1,#4,#7").addClass("winner");
  return true;
  
  }else if ($("#2").hasClass(turn) && $("#5").hasClass(turn) && $("#8").hasClass(turn)){
  $("#2,#5,#8").addClass("winner");
  return true;
  
  }else if ($("#3").hasClass(turn) && $("#6").hasClass(turn) && $("#9").hasClass(turn)){
  $("#3,#6,#9").addClass("winner");
  return true;
  
  }else if ($("#3").hasClass(turn) && $("#5").hasClass(turn) && $("#7").hasClass(turn)){
  $("#3,#5,#7").addClass("winner");
  return true;
  
  }else if ($("#1").hasClass(turn) && $("#5").hasClass(turn) && $("#9").hasClass(turn)){
  $("#1,#5,#9").addClass("winner");
  return true;
  
  }
  
  else {
  
  return false;
  }
  
  }
  
<<<<<<< HEAD
=======
   
  
  
    });
   
   
   
   */
   
   
   var moves = [];
var player = 'X';
var machine = 'O';
//var curPlayer = player;

$(document).ready(function(){
  
 $("#choiceX").click(function(){
        alert("You will play with X")
   player = 'X';
   machine = "O"
   console.log(player);
    });
  


$("#choiceO").click(function(){
        alert("You will play with O");
  player = "O";
   machine = "X";
  console.log(player);
    });
  
 });
 
 
  $("#reset").click(function(){
  alert("you are going to reset");
  
  $(".fill").removeClass("circle cross winner");

  console.log(moves);
    moves = [];
 // firstMove();
  //----Here I can just clear the interval so that exprefunction  
    clearTimeout(myVar);

})
$(".fill").on("click", function firstMove(){
    var selected = $(this);
  console.log(player)
  
 // alert("add a cross here");
 

 myArray = moves.push(Number(selected.attr("id")));
 
 console.log(myArray);
  
  
  if (selected.hasClass("cross")||selected.hasClass("circle")){
     
     alert("already selected");
     
   }

 
   else {
     if (player === "X"){
       
       selected.addClass("cross");
     }
   if (player === "O"){
     
     selected.addClass("circle");
     
   }
   myVar = setTimeout(pcMove , 500);
     
   }
 

if (winner("cross")){
       alert("congrats " + player +  " won");
       
       $(".fill").removeClass("circle cross winner");
  //moves = [];     
  //firstMove();
  clearTimeout(myVar);
       }
  else if (winner("circle")){
    alert("congrats " + player +  " won");
    $(".fill").removeClass("circle cross winner");
    
   // firstMove()
      clearTimeout(myVar);
    
  }
       
     
     
 function pcMove(){
   
   //alert("Is this even working?");
   ram = Math.floor((Math.random() * 8) +1 );
   
   console.log(ram);
   
   //I wanna loop through the array and check if I have this number;
   
  
   
   if (moves.includes(ram) === true){
    
   
   
    tried = Math.floor((Math.random() * 8) +1 );
    pcMove();
   
   }
   
   
   
  
    else{
    if (player === "X"){$("#"+ram).addClass("circle");
    player = "X";
                        //console.log(player);
    
    }
    if (player === "O"){$("#"+ram).addClass("cross");
    player = "O";  
                        //console.log(player);
                       }
   
    }
    
   console.log(moves.push(ram));
   console.log(moves);
   //player = 1;
 }
  
  
  function winner(turn){
  
  if($("#1").hasClass(turn) && $("#2").hasClass(turn) && $("#3").hasClass(turn) ){
    $("#1,#2,#3").addClass("winner");
    return true;
  
  } else if ($("#4").hasClass(turn) && $("#5").hasClass(turn) && $("#6").hasClass(turn)){
    $("#4,#5,#6").addClass("winner");
  return true;
  
  } else if ($("#7").hasClass(turn) && $("#8").hasClass(turn) && $("#9").hasClass(turn)){
  $("#7,#8,#9").addClass("winner");
  return true;
  
  }else if ($("#1").hasClass(turn) && $("#4").hasClass(turn) && $("#7").hasClass(turn)){
  $("#1,#4,#7").addClass("winner");
  return true;
  
  }else if ($("#2").hasClass(turn) && $("#5").hasClass(turn) && $("#8").hasClass(turn)){
  $("#2,#5,#8").addClass("winner");
  return true;
  
  }else if ($("#3").hasClass(turn) && $("#6").hasClass(turn) && $("#9").hasClass(turn)){
  $("#3,#6,#9").addClass("winner");
  return true;
  
  }else if ($("#3").hasClass(turn) && $("#5").hasClass(turn) && $("#7").hasClass(turn)){
  $("#3,#5,#7").addClass("winner");
  return true;
  
  }else if ($("#1").hasClass(turn) && $("#5").hasClass(turn) && $("#9").hasClass(turn)){
  $("#1,#5,#9").addClass("winner");
  return true;
  
  }
  
  else {
  
  return false;
  }
  
  }
  
>>>>>>> 212f33f5821ed187c81ada490c27c6af1dca0e12
  
  
    });
