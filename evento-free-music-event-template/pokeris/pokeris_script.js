$(document).ready(function(){
	var cardDeck;
	shufleCards();
	function shufleCards(){
		resetDeck();
		for(var j=0;j<2;j++){
			for(var i=1;i<=4;i++){
				dealHand(i);
			}
		}
		for(var i=0;i<5;i++){
			dealTable();}
	}

	function resetDeck(){
		cardDeck=["as","2s","3s","4s","5s","6s","7s","8s","9s","10s","js","qs","ks","ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","jc","qc","kc","ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","jh","qh","kh","ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","jd","qd","kd"];		
	}

	function dealHand(player){
		var drawnCard;
		drawnCard=Math.floor((Math.random()*cardDeck.length)+1);
		console.log(drawnCard);
		if(cardDeck[drawnCard-1]!=0){
			$("#"+player+"player").html($("#"+player+"player").html()+" "+cardDeck[drawnCard-1]);
			cardDeck[drawnCard-1]=0;}
				else{dealHand(player);
					console.log('DDDD')}
	}

	function dealTable(){
		var drawnCard;
		drawnCard=Math.floor((Math.random()*cardDeck.length)+1);
		if(cardDeck[drawnCard-1]!=0){
			$("#table").html($("#table").html()+" "+cardDeck[drawnCard-1]);
		cardDeck[drawnCard-1]=0;
		}
			else{dealTable();}
	}

})