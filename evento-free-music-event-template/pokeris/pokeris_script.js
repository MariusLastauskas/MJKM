$(document).ready(function s(){
	var cardDeck=[];
	var unfoldedplayer=[true,true,true,true];

	var p1money=500;
	var p2money=500;
	var p3money=500;
	var p4money=500;

	p1=[];
	p2=[];
	p3=[];
	p4=[];

	var tablemove=0;
	var round=0;
	var bidturn=0;
	var stop=false;
	var share=[];


	var p1bid=0;
	var p2bid=0;
	var p3bid=0;
	var p4bid=0;

	var pot=0;
	var smallblind=10;
	var bigblind=20;
	var realdeal=1;
	var dealer=1;
	var reqbid=bigblind;
	var lastPlayer;

	$("#1player").html("<img src='backcard.png'><img src='backcard.png'>");
	$("#2player").html("<img src='backcard.png'><img src='backcard.png'>");
	$("#3player").html("<img src='backcard.png'><img src='backcard.png'>");
	$("#4player").html("");


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
		//alert("last"+lastPlayer)
	}
	dealer=realdeal;
	playingRound(dealer);

	function playingRound(dealer){
		 // alert("d"+round)
		stop=false;
		if(round==0){
			if(dealer==1){
				playerturn();
				// pcturn(1);
				// pcturn(2);
				// pcturn(3);
			}
			else if(dealer==2){
				//stop=true;
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
				if(stop==false)
					{pcturn(3,p3money,p3bid);}
				if(stop==false)
					{playerturn();
						// alert("Ss")
						bidturn--}
			}
			else if(dealer==3){
				pcturn(2,p2money,p2bid);
				if(stop==false)
					{pcturn(3,p3money,p3bid);}
				if(stop==false)
					{playerturn();
						bidturn-=2}
				// pcturn(1);
			}
			else{//alert("dd"+dealer)
				// stop=true;
				pcturn(3,p3money,p3bid);
				//stop=true;
				if(stop==false)
					{playerturn();
						bidturn--;
						stop=true;}
				// pcturn(1);
				// pcturn(2);
			}
		}
		else{
			if(dealer==1){
				pcturn(2,p2money,p2bid);
				if(stop==false)
					{pcturn(3,p3money,p3bid);}
				if(stop==false)
					{playerturn();}
			}
			else if(dealer==2){
				// alert("sss")
				pcturn(3,p3money,p3bid);
				if(stop==false)
					{playerturn();}
			}
			else if(dealer==3){
					{
						playerturn();}
			}
			else{
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
				if(stop==false)
					{pcturn(3,p3money,p3bid);}
				if(stop==false)
					{playerturn();}
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

		// p1.unshift(0);
		// p2.unshift(0);
		// p3.unshift(0);
		// p4.unshift(0);
		
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
		if(cardDeck[drawnCard-1]!=0 ){
			$("#table").html($("#table").html()+" <img src='"+cardDeck[drawnCard-1]+"'>");
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
		for(var i=0;i<=player.length;i++){
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
		bidturn++;
		unfoldedplayer[player-1]=false;
				if(bidturn==4){
					bidturn=0;
					table();
				}
		
	}

	function check(player){
		if(unfoldedplayer[player-1]==true){
			$("#move"+player).html('CHECK');
			bidturn++;
			// alert("check"+tablemove+" "+player)
			if(bidturn==4){
					bidturn=0;
					// alert("btn-fold")
						table();
					}}
					else{fold(player)}
	}

	function bet(player,playermoney,playerbid){
		if(unfoldedplayer[player-1]==true){
			$('#move'+player).html('BET');
			lastPlayer=player;
			reqbid+=bigblind;
			if(player==1){
				p1money-=reqbid-p1bid;
				$("#money"+player).html(p1money+"$");
				p1bid=reqbid;
				$("#ontable"+player).html(p1bid+"$");}
			else if(player==2){
				p2money-=reqbid-p2bid;
				$("#money"+player).html(p2money+"$");
				p2bid=reqbid;
				$("#ontable"+player).html(p2bid+"$");}
			else if(player==3){
				p3money-=reqbid-p3bid;
				$("#money"+player).html(p3money+"$");
				p3bid=reqbid;
				$("#ontable"+player).html(p3bid+"$");}
			else if(player==4){
				p4money-=reqbid-p4bid;
				$("#money"+player).html(p4money+"$");
				p4bid=reqbid;
				$("#ontable"+player).html(p4bid+"$");}
			bidturn=1;}
			else{fold(player)
				bidturn=0;
			}
	}

	function call(player,playermoney,playerbid){
		if(unfoldedplayer[player-1]==true){
			$('#move'+player).html('CALL');
			if(player==1){
			p1money-=reqbid-p1bid;
			p1bid=reqbid;
			$('#ontable'+player).html(p1bid+"$");
			$("#money"+player).html(p1money+"$");}
			else if(player==2){
			p2money-=reqbid-p2bid;
			p2bid=reqbid;
			$('#ontable'+player).html(p2bid+"$");
			$("#money"+player).html(p2money+"$");}
			else if(player==3){
			p3money-=reqbid-p3bid;
			p3bid=reqbid;
			$('#ontable'+player).html(p3bid+"$");
			$("#money"+player).html(p3money+"$");}
			else{
			p4money-=reqbid-p4bid;
			p4bid=reqbid;
			$('#ontable'+player).html(p4bid+"$");
			$("#money"+player).html(p4money+"$");}
			bidturn++;
			// alert("tablemove"+tablemove+" "+player)
					if(bidturn==4){
						bidturn=0;
						table();
					}}
					else{fold(player)}
	}

	function table(){
		pot+=p1bid+p2bid+p3bid+p4bid;
		p1bid=0;
		p2bid=0;
		p3bid=0;
		p4bid=0;
		$("#ontable1").html("0$");
		$("#ontable2").html("0$");
		$("#ontable3").html("0$");
		$("#ontable4").html("0$");
		reqbid=0;
		//alert("tabke"+tablemove)
		$("#pot").html(pot+"$");
		if(tablemove==0){
			$("#table").html("");
			for(var i=0;i<3;i++){
			dealTable();
			}
			tablemove++;
		}
		else if(tablemove==3){
			revealCards();
		}
		else{
			dealTable();
			tablemove++;
		}
		round++;
		playingRound(dealer);
	}

	function revealCards(){
		var p1h=[];
		var p2h=[];
		var p3h=[];
		var p4h=[];

		findHighestPair(p1,p1h);
		for(var i=0;i<p1.length;i++){
			console.log(p1h[i])
		}
		findHighestPair(p2,p2h);
		for(var i=0;i<p2h.length;i++){
			console.log(p2h[i])
		}
		findHighestPair(p3,p3h);
		for(var i=0;i<p3h.length;i++){
			console.log(p3h[i])
		}
		findHighestPair(p4,p4h);
		for(var i=0;i<p4h.length;i++){
			console.log(p4h[i])
		}

		resetDeck();
		// for(var i=0;i<cardDeck.length;i++){
		// }
		$("#1player").html("<img src='"+cardDeck[p1[6]]+"'><img src='"+cardDeck[p1[5]]+"'>");
		$("#2player").html("<img src='"+cardDeck[p2[6]]+"'><img src='"+cardDeck[p2[5]]+"'>");
		$("#3player").html("<img src='"+cardDeck[p3[6]]+"'><img src='"+cardDeck[p3[5]]+"'>");

		// $("#table").html($("#table").html()+" <img src='"+cardDeck[drawnCard-1]+"'>");

		var vinner=compareCards(p1h,p2h,p3h,p4h);
		if(vinner!=0){
			alert(vinner+'!');
			if(vinner==1){
				p1money+=pot;
				pot=0;
				$("#money1").html(p1money+"$");
				$("#pot").html("potas");
			}
			else if(vinner==2){
				p2money+=pot;
				pot=0;
				$("#money2").html(p2money+"$");
				$("#pot").html("potas");
			}
			else if(vinner==3){
				p3money+=pot;
				pot=0;
				$("#money3").html(p3money+"$");
				$("#pot").html("potas");
			}
			else if(vinner==4){
				p4money+=pot;
				pot=0;
				$("#money4").html(p4money+"$");
				$("#pot").html("potas");
			}
		}
		else{
			sharePot();
			$("#pot").html("potas");
		}
		// var cardDeck=[];

	// var p1money=500;
	// var p2money=500;
	// var p3money=500;
	// var p4money=500;

	p1=[];
	p2=[];
	p3=[];
	p4=[];

	unfoldedplayer=[true,true,true,true];
	$(".btn-warning").removeClass("disabled");

	tablemove=0;
	round=0;
	bidturn=0;
	stop=false;
	share=[];


	p1bid=0;
	p2bid=0;
	p3bid=0;
	p4bid=0;

	pot=0;
	smallblind=10;
	bigblind=20;
	realdeal=1;
	dealer=dealer+1;
	if(dealer==5){
		dealer=1;
		bidturn--;
	}
	reqbid=bigblind;
	// var lastPlayer;

	$("#1player").html("<img src='backcard.png'><img src='backcard.png'>");
	$("#2player").html("<img src='backcard.png'><img src='backcard.png'>");
	$("#3player").html("<img src='backcard.png'><img src='backcard.png'>");
	$("#4player").html("");
	$("#table").html("");

		 blindBidding(dealer);
		shufleCards();
		playingRound(dealer);

	}

	function sharePot(){
		for(var i=0;i<share.length;i++){
			if(share[i]==1){
				p1money+=pot/share.length;
				$("#money1").html(p1money+"$");
			}
			if(share[i]==2){
				p2money+=pot/share.length;
				$("#money2").html(p2money+"$");
			}
			if(share[i]==3){
				p3money+=pot/share.length;
				$("#money3").html(p3money+"$");
			}
			if(share[i]==4){
				p4money+=pot/share.length;
				$("#money4").html(p4money+"$");
			}
		}
	}

	function compareCards(p1,p2,p3,p4){
		// var best;
		var bcards1=[];
		var bcards2=[];
		var bcards3=[];
		var bcards4=[];
		var bcards5=[];
		var bcards0=[];
		var max0=0;
		var max1=0;
		var max2=0;
		var max3=0;
		var max4=0;
		var max5=0;
		var vinner=[true,true,true,true];
		var vinnerNumber=4;

		if(p1[0]==1||p1[0]==6){
			bcards0.push(p1[0]);
			bcards1.push(p1[1]);
			bcards2.push(p1[2]);
			bcards3.push(p1[3]);
			bcards4.push(p1[4]);
			bcards5.push(p1[5]);
			max0=Math.max(max0,p1[0]);
			// max1=Math.max(max1,p1[1]);
			// max2=Math.max(max2,p1[2]);
			// max3=Math.max(max3,p1[3]);
			// max4=Math.max(max4,p1[4]);
			// max5=Math.max(max5,p1[5]);
		}
		else if(p1[0]==2){
			bcards0.push(p1[0]);
			bcards1.push(p1[1]);
			bcards2.push(p1[2]);
			bcards3.push(p1[3]);
			bcards4.push(p1[4]);
			bcards5.push(0);
			max0=Math.max(max0,p1[0]);
			// max1=Math.max(max1,p1[1]);
			// max2=Math.max(max2,p1[2]);
			// max3=Math.max(max3,p1[3]);
			// max4=Math.max(max4,p1[4]);
		}
		else if(p1[0]==3||p1[0]==4){
			bcards0.push(p1[0]);
			bcards1.push(p1[1]);
			bcards2.push(p1[2]);
			bcards3.push(p1[3]);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p1[0]);
			// max1=Math.max(max1,p1[1]);
			// max2=Math.max(max2,p1[2]);
			// max3=Math.max(max3,p1[3]);
		}
		else if(p1[0]==7||p1[0]==8){
			bcards0.push(p1[0]);
			bcards1.push(p1[1]);
			bcards2.push(p1[2]);
			bcards3.push(0);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p1[0]);
			// max1=Math.max(max1,p1[1]);
			// max2=Math.max(max2,p1[2]);
		}
		else if(p1[0]==5||p1[0]==9){
			bcards0.push(p1[0]);
			bcards1.push(p1[1]);
			bcards2.push(0);
			bcards3.push(0);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p1[0]);
			// max1=Math.max(max1,p1[1]);
		}
		//---------------------------
		if(p2[0]==1||p2[0]==6){
			bcards0.push(p2[0]);
			bcards1.push(p2[1]);
			bcards2.push(p2[2]);
			bcards3.push(p2[3]);
			bcards4.push(p2[4]);
			bcards5.push(p2[5]);
			max0=Math.max(max0,p2[0]);
			// max1=Math.max(max1,p2[1]);
			// max2=Math.max(max2,p2[2]);
			// max3=Math.max(max3,p2[3]);
			// max4=Math.max(max4,p2[4]);
			// max5=Math.max(max5,p2[5]);
		}
		else if(p2[0]==2){
			bcards0.push(p2[0]);
			bcards1.push(p2[1]);
			bcards2.push(p2[2]);
			bcards3.push(p2[3]);
			bcards4.push(p2[4]);
			bcards5.push(0);
			max0=Math.max(max0,p2[0]);
			// max1=Math.max(max1,p2[1]);
			// max2=Math.max(max2,p2[2]);
			// max3=Math.max(max3,p2[3]);
			// max4=Math.max(max4,p2[4]);
		}
		else if(p2[0]==3||p2[0]==4){
			bcards0.push(p2[0]);
			bcards1.push(p2[1]);
			bcards2.push(p2[2]);
			bcards3.push(p2[3]);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p2[0]);
			// max1=Math.max(max1,p2[1]);
			// max2=Math.max(max2,p2[2]);
			// max3=Math.max(max3,p2[3]);
		}
		else if(p2[0]==7||p2[0]==8){
			bcards0.push(p2[0]);
			bcards1.push(p2[1]);
			bcards2.push(p2[2]);
			bcards3.push(0);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p2[0]);
			// max1=Math.max(max1,p2[1]);
			// max2=Math.max(max2,p2[2]);
		}
		else if(p2[0]==5||p2[0]==9){
			bcards0.push(p2[0]);
			bcards1.push(p2[1]);
			bcards2.push(0);
			bcards3.push(0);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p2[0]);
			// max1=Math.max(max1,p2[1]);
		}
		//---------------------------
		if(p3[0]==1||p3[0]==6){
			bcards0.push(p3[0]);
			bcards1.push(p3[1]);
			bcards2.push(p3[2]);
			bcards3.push(p3[3]);
			bcards4.push(p3[4]);
			bcards5.push(p3[5]);
			max0=Math.max(max0,p3[0]);
			// max1=Math.max(max1,p3[1]);
			// max2=Math.max(max2,p3[2]);
			// max3=Math.max(max3,p3[3]);
			// max4=Math.max(max4,p3[4]);
			// max5=Math.max(max5,p3[5]);
		}
		else if(p3[0]==2){
			bcards0.push(p3[0]);
			bcards1.push(p3[1]);
			bcards2.push(p3[2]);
			bcards3.push(p3[3]);
			bcards4.push(p3[4]);
			bcards5.push(0);
			max0=Math.max(max0,p3[0]);
			// max1=Math.max(max1,p3[1]);
			// max2=Math.max(max2,p3[2]);
			// max3=Math.max(max3,p3[3]);
			// max4=Math.max(max4,p3[4]);
		}
		else if(p3[0]==3||p3[0]==4){
			bcards0.push(p3[0]);
			bcards1.push(p3[1]);
			bcards2.push(p3[2]);
			bcards3.push(p3[3]);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p3[0]);
			// max1=Math.max(max1,p3[1]);
			// max2=Math.max(max2,p3[2]);
			// max3=Math.max(max3,p3[3]);
		}
		else if(p3[0]==7||p3[0]==8){
			bcards0.push(p3[0]);
			bcards1.push(p3[1]);
			bcards2.push(p3[2]);
			bcards3.push(0);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p3[0]);
			// max1=Math.max(max1,p3[1]);
			// max2=Math.max(max2,p3[2]);
		}
		else if(p3[0]==5||p3[0]==9){
			bcards0.push(p3[0]);
			bcards1.push(p3[1]);
			bcards2.push(0);
			bcards3.push(0);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p3[0]);
			// max1=Math.max(max1,p3[1]);
		}
		//-------------------------
		if(p4[0]==1||p4[0]==6){
			bcards0.push(p4[0]);
			bcards1.push(p4[1]);
			bcards2.push(p4[2]);
			bcards3.push(p4[3]);
			bcards4.push(p4[4]);
			bcards5.push(p4[5]);
			max0=Math.max(max0,p4[0]);
			// max1=Math.max(max1,p4[1]);
			// max2=Math.max(max2,p4[2]);
			// max3=Math.max(max3,p4[3]);
			// max4=Math.max(max4,p4[4]);
			// max5=Math.max(max5,p4[5]);
		}
		else if(p4[0]==2){
			bcards0.push(p4[0]);
			bcards1.push(p4[1]);
			bcards2.push(p4[2]);
			bcards3.push(p4[3]);
			bcards4.push(p4[4]);
			bcards5.push(0);
			max0=Math.max(max0,p4[0]);
			// max1=Math.max(max1,p4[1]);
			// max2=Math.max(max2,p4[2]);
			// max3=Math.max(max3,p4[3]);
			// max4=Math.max(max4,p4[4]);
		}
		else if(p4[0]==3||p4[0]==4){
			bcards0.push(p4[0]);
			bcards1.push(p4[1]);
			bcards2.push(p4[2]);
			bcards3.push(p4[3]);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p4[0]);
			// max1=Math.max(max1,p4[1]);
			// max2=Math.max(max2,p4[2]);
			// max3=Math.max(max3,p4[3]);
		}
		else if(p4[0]==7||p4[0]==8){
			bcards0.push(p4[0]);
			bcards1.push(p4[1]);
			bcards2.push(p4[2]);
			bcards3.push(0);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p4[0]);
			// max1=Math.max(max1,p4[1]);
			// max2=Math.max(max2,p4[2]);
		}
		else if(p4[0]==5||p4[0]==9){
			bcards0.push(p4[0]);
			bcards1.push(p4[1]);
			bcards2.push(0);
			bcards3.push(0);
			bcards4.push(0);
			bcards5.push(0);
			max0=Math.max(max0,p4[0]);
			// max1=Math.max(max1,p4[1]);
		}
			// console.log(bcards0+"max"+max0)
			// console.log(bcards1+"max"+max1)
			// console.log(bcards2+"max"+max2)
			// console.log(bcards3+"max"+max3)
			// console.log(bcards4+"max"+max4)
			// console.log(bcards5+"max"+max5)
		for(var i=0;i<4;i++){
			if(bcards0[i]<max0&&vinner[i]==true){
				vinner[i]=false;
				vinnerNumber--;
			}
			if(vinner[i]==true){
				max1=Math.max(max1,bcards1[i]);
			}
		}
		if(vinnerNumber==1){
			for(var i=0;i<4;i++){
				if(vinner[i]==true){
					return i+1;
				}
			}
		}
		else{
			for(var i=0;i<4;i++){
				if(bcards1[i]<max1&&vinner[i]==true){
					vinner[i]=false;
					vinnerNumber--;
				}
				if(vinner[i]==true){
					max2=Math.max(max2,bcards2[i]);
				}
			}
			if(vinnerNumber==1){
				for(var i=0;i<4;i++){
					if(vinner[i]==true){
						return i+1;
					}
				}
			}
			else{
				for(var i=0;i<4;i++){
					if(bcards2[i]<max2&&vinner[i]==true){
						vinner[i]=false;
						vinnerNumber--;
					}
					if(vinner[i]==true){
						max3=Math.max(max3,bcards3[i]);
					}
				}
				if(vinnerNumber==1){
					for(var i=0;i<4;i++){
						if(vinner[i]==true){
							return i+1;
						}
					}
				}
				else{
					for(var i=0;i<4;i++){
						if(bcards3[i]<max3&&vinner[i]==true){
							vinner[i]=false;
							vinnerNumber--;
						}
						if(vinner[i]==true){
							max4=Math.max(max4,bcards4[i]);
						}
					}
					if(vinnerNumber==1){
						for(var i=0;i<4;i++){
							if(vinner[i]==true){
								return i+1;
							}
						}
					}
						else{
						for(var i=0;i<4;i++){
							if(bcards4[i]<max4&&vinner[i]==true){
								vinner[i]=false;
								vinnerNumber--;
							}
							if(vinner[i]==true){
								max5=Math.max(max5,bcards5[i]);
							}
						}
						if(vinnerNumber==1){
							for(var i=0;i<4;i++){
								if(vinner[i]==true){
									return i+1;
								}
							}
						}
						else{
							for(var i=0;i<4;i++){
								if(bcards5[i]<max5&&vinner[i]==true){
									vinner[i]=false;
									vinnerNumber--;
								}
							}
							if(vinnerNumber==1){
								for(var i=0;i<4;i++){
									if(vinner[i]==true){
										return i+1;
									}
								}
							}
							else{alert("dalinasi");
								for(var i=0;i<4;i++){
									if(vinner[i]==true){
										alert((i+1));
										share.push(i+1);
										return 0;
									}
								}
							}
						}
					}
				}
			}
		}

		// for(var i=0;i<bcards0.length;i++){
		// 	console.log(bcards0[i])
		// }
		// best=Math.max(p1[0],p2[0],p3[0],p4[0]);
		// if(p1[0]==best){
		// 	bcards.unshift(1);
		// }
		// if(p2[0]==best){
		// 	bcards.unshift(2);
		// }
		// if(p3[0]==best){
		// 	bcards.unshift(3);
		// }
		// if(p4[0]==best){
		// 	bcards.unshift(4);
		// }
		// for(var i=0;i<bcards.length;i++){
		// 	console.log(bcards[i]);
		// }9
		// bcards.sort();
		// for(var i=0;i<bcards.length;i++){
		// 	console.log(bcards[i]);
		// }

		// var stop=false;
		}

	function pcturn(player,money,bid){
		if(reqbid==bid)
			check(player);
		else{call(player,money,bid);}
	}

	function playerturn(){
		if(reqbid>p4bid){
			$("#btn-checkcall").html("CALL");
		}
		else{$("#btn-checkcall").html("CHECK")}
		// console.log("remove")
		// $(".btn-warning").removeClass("disabled");
		//alert("jau")
		// stop=true;

	}

	$("#btn-fold").click(function(){
		fold(4);
		 $(".btn-warning").addClass("disabled");
		if(round==0){
			if(dealer==1){
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
				if(stop==false)
					{pcturn(3,p3money,p3bid);}
			}
			else if(dealer==3){
				pcturn(1,p1money,p1bid);
			}
			else if(dealer==4){
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
			}
		}
		else{
			if(dealer==1){
				pcturn(1,p1money,p1bid);
			}
			else if(dealer==2){
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
			}
			else if(dealer==3){
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
				if(stop==false)
					{pcturn(3,p3money,p3bid);}
			}
		}
	})

	$("#btn-bet").click(function(){
		
			bet(4,p4money,p4bid);
		// $(".btn-warning").addClass("disabled");
		round++;
		stop=true;
		playingRound(4);
	})

	$("#btn-checkcall").click(function(){
		if(reqbid>p4bid){
			call(4,p4money,p4bid);
		}
		// stop=true;
		else{
			check(4);
		}
		// $(".btn-warning").addClass("disabled");
		if(round==0){
			if(dealer==1){
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
				if(stop==false)
					{pcturn(3,p3money,p3bid);}
			}
			else if(dealer==3){
				pcturn(1,p1money,p1bid);
			}
			else if(dealer==4){
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
			}
		}
		else{
			if(dealer==1){
				pcturn(1,p1money,p1bid);
			}
			else if(dealer==2){
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
			}
			else if(dealer==3){
				pcturn(1,p1money,p1bid);
				if(stop==false)
					{pcturn(2,p2money,p2bid);}
				if(stop==false)
					{pcturn(3,p3money,p3bid);}
			}
		}	
	})
})