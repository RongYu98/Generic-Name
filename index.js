//var c = document.getElementById("playground");
//var ctx = c.getContext("2d");

var PLAYERS = new Array();
var cursorX;
var cursorY;

function PLAYER(){
    
    var xpositions = new Array();
    var ypositions = new Array(); 
    var onPos = 0;
    var x = 0;
    var y = 0; 
    var move = true;

    this.move = function(){
	
	// if it is before the last position
	if (onPos < xpositions.length)
	{
	    // if arrived at postions[onPos], then move on to next place
	    if ( this.x - xpositions[onPos] < 2 && 
		 this.y - ypositions[onPos+1] < 2 ){
		onPos += 1;
	    }

	    // will move, but if at end, do nothing
	    if ( this.x - xpositions[onPos] > 2 || 
		 this.y - ypositions[onPos+1] > 2 ){ 
		
		//move 
		//...................
		
	    }

	};    
	// draw
	// ............
    };
}

var add = function(){
    // Assuming this will be called when "Add Player" is pressed
    
    //Create a new player that may be added.
    var player = PLAYER();
    
    var creation = function(){
	/*
	  If mouse is clicked, added mouseX and mouseY to the player's 
	  2 arrays..., figure out how to get the eventListener here...
	*/
    };
    
    // if add is pressed again, add the character with those the positions?
    PLAYERS.push(PLAYER);
}



// "run"button should call main() 
// windows.addEventListener(
function main(){
    
    var i;
    for (i = 0; i<PLAYERS.length; i++){
	PLAYERS[i].move();
    }
    var requestID = window.requestAnimationFrame( main );
}

document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}
