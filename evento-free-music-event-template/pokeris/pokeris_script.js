$(document).ready(function(){
	var cardDeck;
	p1=[];
	p2=[];
	p3=[];
	p4=[];
	// var p1strenght;
	// var p2strenght;
	// var p3strenght;
	// var p4strenght;

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
		p1.unshift(0);
		p2.unshift(0);
		p3.unshift(0);
		p4.unshift(0);
		findHighCard(p1);
		findHighCard(p2);
		findHighCard(p3);
		findHighCard(p4);
		
		console.log(p1[0]);
		console.log(p2[0]);
		console.log(p3[0]);
		console.log(p4[0]);
	}

	function resetDeck(){
		cardDeck=["as","2s","3s","4s","5s","6s","7s","8s","9s","10s","js","qs","ks","ac","2c","3c","4c","5c","6c","7c","8c","9c","10c","jc","qc","kc","ah","2h","3h","4h","5h","6h","7h","8h","9h","10h","jh","qh","kh","ad","2d","3d","4d","5d","6d","7d","8d","9d","10d","jd","qd","kd"];		
	}

	function dealHand(player){
		var drawnCard;
		drawnCard=Math.floor((Math.random()*cardDeck.length)+1);
		if(cardDeck[drawnCard-1]!=0){
			$("#"+player+"player").html($("#"+player+"player").html()+" "+cardDeck[drawnCard-1]);
			//console.log(player);
			if(player==1){
				p1.unshift(drawnCard-1);
				}
				else if(player==2){
					p2.unshift(drawnCard-1);
				}
				else if(player==3){
					p3.unshift(drawnCard-1);
				}
				else if(player==4){
					p4.unshift(drawnCard-1);
				}
			cardDeck[drawnCard-1]=0;}
				else{dealHand(player);}
	}

	function dealTable(){
		var drawnCard;
		drawnCard=Math.floor((Math.random()*cardDeck.length)+1);
		if(cardDeck[drawnCard-1]!=0){
			$("#table").html($("#table").html()+" "+cardDeck[drawnCard-1]);
			p1.unshift(drawnCard-1);
			p2.unshift(drawnCard-1);
			p3.unshift(drawnCard-1);
			p4.unshift(drawnCard-1);
		cardDeck[drawnCard-1]=0;
		}
			else{dealTable();}
	}

	function findHighCard(player){
		for(var i=0;i<=7;i++){
			if(player[i]==1||player[i]==14||player[i]==27||player[i]==40){
				player[0]=1;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==2||player[i]==15||player[i]==28||player[i]==41){
				player[0]=2;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==3||player[i]==16||player[i]==29||player[i]==42){
				player[0]=3;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==4||player[i]==17||player[i]==30||player[i]==43){
				player[0]=4;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==5||player[i]==18||player[i]==31||player[i]==44){
				player[0]=5;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==6||player[i]==19||player[i]==32||player[i]==45){
				player[0]=6;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==7||player[i]==20||player[i]==33||player[i]==46){
				player[0]=7;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==8||player[i]==21||player[i]==34||player[i]==47){
				player[0]=8;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==9||player[i]==22||player[i]==35||player[i]==48){
				player[0]=9;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==10||player[i]==23||player[i]==36||player[i]==49){
				player[0]=10;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==11||player[i]==24||player[i]==37||player[i]==50){
				player[0]=11;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==12||player[i]==25||player[i]==38||player[i]==51){
				player[0]=12;
			}}
		for(var i=0;i<=7;i++){
			if(player[i]==0||player[i]==13||player[i]==26||player[i]==39){
				player[0]=13;
			}}
			//console.log(player)
	}

})