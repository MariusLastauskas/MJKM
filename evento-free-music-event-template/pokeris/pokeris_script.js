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

		findHighestPair(p1);
		findHighestPair(p2);
		findHighestPair(p3);
		findHighestPair(p4);
		
		// console.log(p1[0]);
		// console.log(p2[0]);
		// console.log(p3[0]);
		// console.log(p4[0]);
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

	function findHighestPair(player){
		var numberOfa=0;
		var numberOf2=0;
		var numberOf3=0;
		var numberOf4=0;
		var numberOf5=0;
		var numberOf6=0;
		var numberOf7=0;
		var numberOf8=0;
		var numberOf9=0;
		var numberOf10=0;
		var numberOfj=0;
		var numberOfq=0;
		var numberOfk=0;
		var numberOfCards=[0,0,0,0,0,0,0,0,0,0,0,0,0];
		for(var i=1;i<=player.length;i++){
			if(player[i]==0||player[i]==13||player[i]==26||player[i]==39){
				numberOfCards[12]++;
			}
			else if(player[i]==1||player[i]==14||player[i]==27||player[i]==40){
				numberOfCards[0]++;
			}
			else if(player[i]==2||player[i]==15||player[i]==28||player[i]==41){
				numberOfCards[1]++;
			}
			else if(player[i]==3||player[i]==16||player[i]==29||player[i]==42){
				numberOfCards[2]++;
			}
			else if(player[i]==4||player[i]==17||player[i]==30||player[i]==43){
				numberOfCards[3]++;
			}
			else if(player[i]==5||player[i]==18||player[i]==31||player[i]==44){
				numberOfCards[4]++;
			}
			else if(player[i]==6||player[i]==19||player[i]==32||player[i]==45){
				numberOfCards[5]++;
			}
			else if(player[i]==7||player[i]==20||player[i]==33||player[i]==46){
				numberOfCards[6]++;
			}
			else if(player[i]==8||player[i]==21||player[i]==34||player[i]==47){
				numberOfCards[7]++;
			}
			else if(player[i]==9||player[i]==22||player[i]==35||player[i]==48){
				numberOfCards[8]++;
			}
			else if(player[i]==10||player[i]==23||player[i]==36||player[i]==49){
				numberOfCards[9]++;
			}
			else if(player[i]==11||player[i]==24||player[i]==37||player[i]==50){
				numberOfCards[10]++;
			}
			else if(player[i]==12||player[i]==25||player[i]==38||player[i]==51){
				numberOfCards[11]++;
			}
		}
		 // for(var i=0;i<13;i++){
		 // 	console.log(numberOfCards[i])
		 // }
		 //console.log(player[0]+"s")
		var cardsx1=[];
		var cardsx2=[];
		var cardsx3=[];
		var cardsx4=[];
		for(var i=0;i<13;i++){
			// daugiausiaiVienoduKortu=Math.max(daugiausiaiVienoduKortu,numberOfCards[i]);
			// //console.log(daugiausiaiVienoduKortu)
			// if(daugiausiaiVienoduKortu==numberOfCards[i]){
			// 	player[0]=i+2;
			// }
			if(numberOfCards[i]==4){
				cardsx4.unshift(i+2);
			}
			else if(numberOfCards[i]==3){
				cardsx3.unshift(i+2);
			}
			else if(numberOfCards[i]==2){
				cardsx2.unshift(i+2);
			}
			else if(numberOfCards[i]==1){
				cardsx1.unshift(i+2);
			}
		}
		//console.log(cardsx1[0])
		if(cardsx4.length>0){
			console.log("4x "+cardsx4[0]+" 1x "+cardsx1[0]);
		}
		else if(cardsx3.length>0){
			if(cardsx2.length>0){
				console.log("3x "+cardsx3[0]+" 2x "+cardsx2[0])
			}
			else{console.log("3x "+cardsx3[0]+" 1x "+cardsx1[0]+" "+cardsx1[1])}
		}
		else if(cardsx2.length>0){
			if(cardsx2.length>1){
				console.log("2x "+cardsx2[0]+" "+cardsx2[1]+" 1x "+cardsx1[0]);
			}
			else{console.log("2x "+cardsx2[0]+" 1x "+cardsx1[0]+" "+cardsx1[1]+" "+cardsx1[2])}
		}
		else{console.log("1x "+cardsx1[0]+" "+cardsx1[1]+" "+cardsx1[2]+" "+cardsx1[3]+" "+cardsx1[4])}
	}

})