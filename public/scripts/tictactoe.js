var clickCount=0;
var boolWinner=new Boolean();
var cellArray=["a","a","a","a","a","a","a","a","a"];
$(document).ready(function(){
	var Xwins=0;
	var Owins=0;
	var Catwins=0;
	boolWinner=false;
	document.getElementById('xcell').innerHTML=Xwins;
	document.getElementById('ocell').innerHTML=Owins;
	document.getElementById('catcell').innerHTML=Catwins;

	clickFunc=function(){
		$('table#tictactoe td').bind('click',(function(){
			var clickCell = $('table#tictactoe td').index(event.target);
			if(clickCount%2==0){
				$(this).addClass('clickedX');
				cellArray[clickCell]="X";
				if(checkForWinner("X")){
					Xwins++;
					weHaveAWinner("xcell",Xwins,"X wins!",true);
				}
			}else{
				$(this).addClass('clickedO');
				cellArray[clickCell]="O";
				if(checkForWinner("O")){
					Owins++;
					weHaveAWinner("ocell",Owins,"O wins!",true);
				}
			}
			if((cellArray.indexOf("a")==-1)&&(boolWinner==false)){
				Catwins++;
				weHaveAWinner("catcell",Catwins,"Cat game.",false);
			}
			clickCount++;
			$(this).unbind('click');
		}));
	}

	clickFunc();

	$('#playButton').bind('click',(function(){
		$('table#tictactoe td').removeClass();
		boolWinner=false;
		resetGame();
		clickFunc();
	}));

	$('table#tictactoe td').hover(
		function(){$(this).addClass('hovered');},
		function(){$(this).removeClass('hovered');}
	);
}); // end document.ready

weHaveAWinner=function(cell,winCount,msg,winTF){
	boolWinner=winTF;
	document.getElementById(cell).innerHTML=winCount;
	alert(msg);
	$('table#tictactoe td').unbind('click');
	resetGame();
}

resetGame=function(){
	clickCount=0;
	cellArray=["a","a","a","a","a","a","a","a","a"];
}

checkForWinner=function(XorO){
	if((cellArray[0]==XorO && cellArray[1]==XorO && cellArray[2]==XorO) ||
		(cellArray[3]==XorO && cellArray[4]==XorO && cellArray[5]==XorO) ||
		(cellArray[6]==XorO && cellArray[7]==XorO && cellArray[8]==XorO) ||
		(cellArray[0]==XorO && cellArray[3]==XorO && cellArray[6]==XorO) ||
		(cellArray[1]==XorO && cellArray[4]==XorO && cellArray[7]==XorO) ||
		(cellArray[2]==XorO && cellArray[5]==XorO && cellArray[8]==XorO) ||
		(cellArray[0]==XorO && cellArray[4]==XorO && cellArray[8]==XorO) ||
		(cellArray[2]==XorO && cellArray[4]==XorO && cellArray[6]==XorO)){
		return true;
	}else{
		return false;
	}
}