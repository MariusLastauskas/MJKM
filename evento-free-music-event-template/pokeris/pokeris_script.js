$(document).ready(function(){
	var cardDeck;
	p1=[];
	p2=[];
	p3=[];
	p4=[];

	var tablemove=0;
	var round=0;

	var p1money=500;
	var p2money=500;
	var p3money=500;
	var p4money=500;

	var p1bid=0;
	var p2bid=0;
	var p3bid=0;
	var p4bid=0;

	var pot=0;
	var smallblind=10;
	var bigblind=20;
	var dealer=1;
	var reqbid=bigblind;
	var lastPlayer;

	blindBidding(dealer);

	function blindBidding(D){
		if(D==1){
			p2bid+=smallblind;
			$('#ontable2').html(p2bid+"$");
			p3bid+=bigblind;
			$('#ontable3').html(p3bid+"$");
			p2money-=smallblind;
			$('#money2').html(p2money+'$');
			p3money-=bigblind;
			$("#money3").html(p3money+"$");
			$('#pos1').html("D");
			$('#pos2').html("SB");
			$('#pos3').html("BB");
			$('#pos4').html(" ");
			lastPlayer=3;
		}
		else if(D==2){
			p3bid+=smallblind;
			$('#ontable3').html(p3bid+"$");
			p4bid+=bigblind;
			$('#ontable4').html(p4bid+"$");
			p3money-=smallblind;
			$('#money3').html(p3money+'$');
			p4money-=bigblind;
			$("#money4").html(p4money+"$");
			$('#pos2').html("D");
			$('#pos3').html("SB");
			$('#pos4').html("BB");
			$('#pos1').html(" ");
			lastPlayer=4;
		}
		else if(D==3){
			p4bid+=smallblind;
			$('#ontable4').html(p4bid+"$");
			p1bid+=bigblind;
			$('#ontable1').html(p1bid+"$");
			p4money-=smallblind;
			$('#money4').html(p4money+'$');
			p3money-=bigblind;
			$("#money1").html(p1money+"$");
			$('#pos3').html("D");
			$('#pos4').html("SB");
			$('#pos1').html("BB");
			$('#pos2').html(" ");
			lastPlayer=1;
		}
		else if(D==4){
			p1bid+=smallblind;
			$('#ontable1').html(p1bid+"$");
			p2bid+=bigblind;
			$('#ontable2').html(p2bid+"$");
			p1money-=smallblind;
			$('#money1').html(p1money+'$');
			p2money-=bigblind;
			$("#money2").html(p2money+"$");
			$('#pos4').html("D");
			$('#pos1').html("SB");
			$('#pos2').html("BB");
			$('#pos3').html(" ");
			lastPlayer=2;
		}
	}
	playingRound(dealer);

	function playingRound(dealer){
		if(round==0){
			if(dealer==1){
				playerturn();
				// pcturn(1);
				// pcturn(2);
				// pcturn(3);
			}
			else if(dealer==2){
				pcturn(1);
				pcturn(2);
				pcturn(3);
				playerturn();
			}
			else if(dealer==3){
				pcturn(2);
				pcturn(3);
				playerturn();
				// pcturn(1);
			}
			else{
				pcturn(3);
				playerturn();
				// pcturn(1);
				// pcturn(2);
			}
		}
	}

	shufleCards();
	function shufleCards(){
		resetDeck();

				// $("#1player").html("<p></p>");
				// $("#2player").html("<p></p>");
				// $("#3player").html("<p></p>");
				// $("#4player").html("<p></p>");
		
		for(var j=0;j<2;j++){
			for(var i=1;i<=4;i++){
				dealHand(i);
			}
		}

		// for(var i=0;i<5;i++){
		// 	dealTable();}

		p1.unshift(0);
		p2.unshift(0);
		p3.unshift(0);
		p4.unshift(0);
		
		var p1hand=[0];
		var p2hand=[0];
		var p3hand=[0];
		var p4hand=[0];

		findHighestPair(p1,p1hand);
		for(var i=0;i<p1hand.length;i++){
			console.log(p1hand[i])
		}
		findHighestPair(p2,p2hand);
		for(var i=0;i<p2hand.length;i++){
			console.log(p2hand[i])
		}
		findHighestPair(p3,p3hand);
		for(var i=0;i<p3hand.length;i++){
			console.log(p3hand[i])
		}
		findHighestPair(p4,p4hand);
		for(var i=0;i<p4hand.length;i++){
			console.log(p4hand[i])
		}

		
	}

	function resetDeck(){
		cardDeck=["as.png","2s.png","3s.png","4s.png","5s.png","6s.png","7s.png","8s.png","9s.png","10s.png","js.png","qs.png","ks.png","ac.png","2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","jc.png","qc.png","kc.png","ah.png","2h.png","3h.png","4h.png","5h.png","6h.png","7h.png","8h.png","9h.png","10h.png","jh.png","qh.png","kh.png","ad.png","2d.png","3d.png","4d.png","5d.png","6d.png","7d.png","8d.png","9d.png","10d.png","jd.png","qd.png","kd.png"];		
	}

	function dealHand(player){
		var drawnCard;
		drawnCard=Math.floor((Math.random()*cardDeck.length)+1);
		if(cardDeck[drawnCard-1]!=0){
			if(player==4)
				$("#"+player+"player").html($("#"+player+"player").html()+" <img src='"+cardDeck[drawnCard-1]+"'>");
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
			//$("#table").html($("#table").html()+" <img src='"+cardDeck[drawnCard-1]+"'>");
			p1.unshift(drawnCard-1);
			p2.unshift(drawnCard-1);
			p3.unshift(drawnCard-1);
			p4.unshift(drawnCard-1);
		cardDeck[drawnCard-1]=0;
		}
			else{dealTable();}
	}

	function findHighCard(player,hand){
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
	}

	function findHighestPair(player,hand){
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
		var cardsx1=[];
		var cardsx2=[];
		var cardsx3=[];
		var cardsx4=[];
		for(var i=0;i<13;i++){
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
		if(cardsx4.length>0){
			hand[0]=8;
			hand.push(cardsx4[0]);
			hand.push(cardsx1[0]);
			console.log("FOUR OF A KIND")
		}
		else if(cardsx3.length>0){
			if(cardsx2.length>0){
				hand[0]=7;
				hand.push(cardsx3[0]);
				hand.push(cardsx2[0]);
				console.log("FULL HOUSE")
			}
			else{
				hand[0]=4;
				hand.push(cardsx3[0]);
				hand.push(cardsx1[0]);
				hand.push(cardsx1[1]);
				console.log("THREE OF A KIND")
			}
		}
		else if(cardsx2.length>0){
			if(cardsx2.length>1){
				hand[0]=3;
				hand.push(cardsx2[0]);
				hand.push(cardsx2[1]);
				hand.push(cardsx1[0]);
				console.log("TWO PAIRS")
			}
			else{
				hand[0]=2;
				hand.push(cardsx2[0]);
				hand.push(cardsx1[0]);
				hand.push(cardsx1[1]);
				hand.push(cardsx1[2]);
				console.log("ONE PAIR")
			}
		}
		else{
			hand[0]=1;
			hand.push(cardsx1[0]);
			hand.push(cardsx1[1]);
			hand.push(cardsx1[2]);
			hand.push(cardsx1[3]);
			hand.push(cardsx1[4]);
			console.log("HIGH HAND");
		}

		for(var i=0;i<9;i++){
			if(numberOfCards[i]>0&&numberOfCards[i+1]>0&&numberOfCards[i+2]>0&&numberOfCards[i+3]>0&&numberOfCards[i+4]>0){   //finding straight
				console.log("STRAIGHT"+(i+2));
				if(hand[0]<=5){
					hand.unshift(i+2);
					hand.unshift(5);
				}
			}

		}
		if(numberOfCards[0]>0&&numberOfCards[1]>0&&numberOfCards[2]>0&&numberOfCards[3]>0&&numberOfCards[12]>0){
				console.log("STRAIGHT")
				if(hand[0]<=5){
					hand.unshift(0);
					hand.unshift(5);
				}
			}

			var spades=0;
			var clubs=0;
			var diamonds=0;
			var hearths=0;
		for(var i=1;i<=player.length;i++){   //finding flush
			if(player[i]<13){
				spades++;
			}
			else if(player[i]>12&&player[i]<26){
				clubs++;
			}
			else if(player[i]>25&&player[i]<39){
				hearths++;
			}
			else if(player[i]>38){
				diamonds++;
			}
		}
		if(spades>4){
			var highspades=[];
			for(var i=0;i<player.length;i++){
				if(player[i]<13){
					highspades.push(player[i]);
				}
			}
			console.log("FLUSH");
			highspades.sort(function(a, b){return a-b});
			if(highspades[0]==1){
				highspades.push(14);
			}
			highspades.sort(function(a, b){return a-b});
			if(hand[0]<5){
				for(var i=0;i<highspades.length;i++){
					hand.unshift(highspades[i]+1);
				}
				hand.unshift(6);}
				else if(hand[0]==5){
					console.log('STRAIGHT FLUSH')
					hand[0]=9;
				}
		}
		if(clubs>4){
			var highclub=[];
			for(var i=0;i<player.length;i++){
				if(player[i]>12&&player[i]<26){
					highclub.push(player[i]-12);
				}
			}
			console.log("FLUSH");
			highclub.sort(function(a, b){return a-b});
			if(highclub[0]==1){
				highclub.push(14);
			}
			highclub.sort(function(a, b){return a-b});
			if(hand[0]<5){
				for(var i=0;i<highclub.length;i++){
					hand.unshift(highclub[i]+1);
				}
				hand.unshift(6);}
				else if(hand[0]==5){
					console.log('STRAIGHT FLUSH')
					hand[0]=9;
				}
		}
		if(diamonds>4){
			var highdiamonds=[];
			for(var i=0;i<player.length;i++){
				if(player[i]>38){
					highdiamonds.push(player[i]-38);
				}
			}
			highdiamonds.sort(function(a, b){return a-b});
			console.log("FLUSH");
			if(highdiamonds[0]==1){
				highdiamonds.push(14);
			}
			highdiamonds.sort(function(a, b){return a-b});
			if(hand[0]<5){
				for(var i=0;i<highdiamonds.length;i++){
					hand.unshift(highdiamonds[i]+1);
				}
				hand.unshift(6);}
				else if(hand[0]==5){
					console.log('STRAIGHT FLUSH')
					hand[0]=9;
				}
		}
		if(hearths>4){
			var highhearts=[];
			for(var i=0;i<player.length;i++){
				if(player[i]>25&&player[i]<39){
					highhearts.push(player[i]-25);
				}
			}
			highhearts.sort(function(a, b){return a-b});
			console.log("FLUSH");
			if(highhearts[0]==1){
				highhearts.push(14);
			}
			highhearts.sort(function(a, b){return a-b});
			if(hand[0]<5){
				for(var i=0;i<highhearts.length;i++){
					hand.unshift(highhearts[i]+1);
				}
				hand.unshift(6);}
				else if(hand[0]==5){
					console.log('STRAIGHT FLUSH')
					hand[0]=9;
				}
		}
	}

	function fold(player){
		$('#move'+player).html('FOLD');
		if(player==lastPlayer){
			//table();
		}
	}

	function check(player){
		$("#move"+player).html('CHECK');
		// console.log("ss");
		if(player==lastPlayer){
			//table();
		}
	}

	function bet(player,playermoney,playerbid){
		$('#move'+player).html('BET');
		lastPlayer=player;
		reqbid+=bigblind;
		playermoney-=reqbid;
		$("#money"+player).html(playermoney+"$");
		playerbid=reqbid;
		$("#ontable"+player).html(playerbid+"$");
	}

	function call(player,playermoney,playerbid){
		$('#move'+player).html('CALL');
		playermoney-=reqbid;
		$("#money"+player).html(playermoney+"$");
		playerbid=reqbid;
		$('#ontable'+player).html(playerbid+"$");
	}

	function table(){
		if(tablemove==0){
			for(var i=0;i<3;i++){
			dealTable();}
			tablemove++;
		}
		else{
			dealTable();
		}
	}

	function pcturn(player){
		call(player);
	}

	function playerturn(){
		$(".btn-warning").removeClass("disabled");

	}

	$("#btn-fold").click(function(){
		fold(4);
		$(".btn-warning").addClass("disabled");
		if(dealer==1){
			pcturn(1);
			pcturn(2);
			pcturn(3);
		}
		else if(dealer==3){
			pcturn(1);
		}
		else if(dealer==4){
			pcturn(1);
			pcturn(2);
		}
	})

	$("#btn-bet").click(function(){
		bet(4,p4money,p4bid);
		$(".btn-warning").addClass("disabled");
		if(dealer==1){
			pcturn(1);
			pcturn(2);
			pcturn(3);
		}
		else if(dealer==3){
			pcturn(1);
		}
		else if(dealer==4){
			pcturn(1);
			pcturn(2);
		}
	})

	$("#btn-checkcall").click(function(){
		// console.log(reqbid);
		// console.log(p4bid);
		if(reqbid>p4bid){
			call(4,p4money,p4bid);
			// console.log("ss")
		}
		else{
			check(4,p4money,p4bid);
		}
		$(".btn-warning").addClass("disabled");
		if(dealer==1){
			console.log("ss")
			pcturn(1);
			pcturn(2);
			pcturn(3);
		}
		else if(dealer==3){
			pcturn(1);
		}
		else if(dealer==4){
			pcturn(1);
			pcturn(2);
		}
	})
})