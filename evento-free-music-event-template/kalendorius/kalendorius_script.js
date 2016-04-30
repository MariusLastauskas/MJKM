var slide=0;
		$(document).ready(function(){
			count()

			function count(){
				var d=new Date();
				var mėnesioDiena=d.getDate();
				var metai=d.getFullYear();
				var mėnuo=d.getMonth();
				d=new Date(metai,mėnuo+slide,1);
				mėnesioDiena=d.getDate();
				var savaitėsDiena=d.getDay();
				metai=d.getFullYear();
				mėnuo=d.getMonth();
				var x;
				var y;
				var mėnesioPradžia=new Date(metai,mėnuo,1);
				var savaitėsPradžia=mėnesioPradžia.getDay();
				if(savaitėsPradžia==0){
					savaitėsPradžia=7;
				}
				var diena=1;
				var dienųSkaičiusMėnesyje;
				var ind=0;
				// console.log(mėnuo);
				// if(mėnuo==1){
				// 	dienųSkaičiusMėnesyje=28;
				// }
				// else if(mėnuo==3||mėnuo==5||mėnuo==8||mėnuo==10){
				// 	dienųSkaičiusMėnesyje=30;
				// }
				// else{
				// 	dienųSkaičiusMėnesyje=31;
				// }
				// alert(savaitėsPradžia);
				dienųSkaičiusMėnesyje=gettingMonth(mėnuo,metai);
				var lastSunday;
				for(var i=0;i<6;i++)
				{
					for(var j=0;j<7;j++)
					{
						if(j==0 && i==0)
						{
							 $("#"+(i+1)+"-"+savaitėsPradžia).html(diena);
							// console.log((i+1)+"-"+savaitėsPradžia);
							// console.log($("#1-"+savaitėsPradžia).text());
							j=savaitėsPradžia-1;
							$("#"+(i+1)+"-"+savaitėsPradžia).css("color","black");
							$("#"+(i+1)+"-"+savaitėsPradžia).css("font-size","23px");
							$("#"+(i+1)+"-"+savaitėsPradžia).css("font-weight","normal");
						}
						else{
							$("#"+(i+1)+"-"+(j+1)).html(diena);
							$("#"+(i+1)+"-"+(j+1)).css("color","black");
							$("#"+(i+1)+"-"+(j+1)).css("font-size","23px");
							$("#"+(i+1)+"-"+(j+1)).css("font-weight","normal");
						}
						diena++;
						if(j==5)
						{
							lastSunday=i+1;
						}
						if(j==6)
							{$("#"+(i+1)+"-"+(j+1)).css("color","red");}
						if(diena>dienųSkaičiusMėnesyje){
						ind++;
						var paskutinėDiena1=i+1;
						var paskutinėDiena2=j+1;
						break;
						}
					}

					if (ind==1) {
						break;
					}
				}
				$("#"+(lastSunday)+"-6").css("color","red");
				$("#"+(lastSunday)+"-6").css("font-size","50px");
				$("#"+(lastSunday)+"-6").css("font-weight","bold");
				//console.log(lastSunday*7-1)
				dienųSkaičiusMėnesyje=gettingMonth(mėnuo-1,metai);
				lastSunday=lastSunday*7-1;
				for(var i=savaitėsPradžia-1;i>0;i--){
					// console.log(i);
					$("#"+1+"-"+i).html(dienųSkaičiusMėnesyje);
					dienųSkaičiusMėnesyje--;
					$("#"+1+"-"+i).css("color","white");
					$("#"+1+"-"+i).css("font-size","23px");
					$("#"+1+"-"+i).css("font-weight","normal");
					lastSunday--;
				}

				ind=0;
				diena=1;
				dienųSkaičiusMėnesyje=gettingMonth(mėnuo+1,metai);
				for(var i=paskutinėDiena1;i<=6;i++)
				{
					if(i==paskutinėDiena1){
						for(var j=paskutinėDiena2+1;j<=7;j++)
						{
							$("#"+(i)+"-"+(j)).html(diena);
							diena++;
							$("#"+(i)+"-"+(j)).css("color","white");
							$("#"+(i)+"-"+(j)).css("font-size","23px");
							$("#"+(i)+"-"+(j)).css("font-weight","normal");
						}
					}
					else{
						for(var j=1;j<=7;j++)
						{
							$("#"+(i)+"-"+(j)).html(diena);
							diena++;
							$("#"+(i)+"-"+(j)).css("color","white");
							$("#"+(i)+"-"+(j)).css("font-size","23px");
							$("#"+(i)+"-"+(j)).css("font-weight","normal");
						}
					}
				}
				console.log(lastSunday);
				$("#countdown").countdown({
					date: lastSunday+" july 2017 12:00:00",
					format: "on"
				},
		
					function() {
					// callback function
				});
				if(mėnuo==0){
					$("#mėnuo").html("Sausis");
					$(".heading").css("background","url('poker-chips2_1920x1200.jpg')");
				}
				else if(mėnuo==1){
					$("#mėnuo").html("Vasaris");
					$(".heading").css("background","url('6b463dad-41ac-4d06-be41-eac49959ef3b.jpg')");
				}
				else if(mėnuo==2){
					$("#mėnuo").html("Kovas");
					$(".heading").css("background","url('88fb94b7a35841428b7761bece81cb61.jpg')");
				}
				else if(mėnuo==3){
					$("#mėnuo").html("Balandis");
					$(".heading").css("background","url('abstract blue multicolor cgi digital art artwork 3d tp_wallpaperswa.com_53.jpg')");
					menuo="april";
				}
				else if(mėnuo==4){
					$("#mėnuo").html("Gegužė");
					$(".heading").css("background","url('blue_binary-code.jpg')");
				}
				else if(mėnuo==5){
					$("#mėnuo").html("Birželis");
					$(".heading").css("background","url('blue-and-black-wallpapers520994.jpg')");
				}
				else if(mėnuo==6){
					$("#mėnuo").html("Liepa");
					$(".heading").css("background","url('Blue-Wallpaper-15.jpg')");
				}
				else if(mėnuo==7){
					$("#mėnuo").html("Rugpjūtis");
					$(".heading").css("background","url('Blue-Wallpaper-For-Background-30.jpg')");
				}
				else if(mėnuo==8){
					$("#mėnuo").html("Rugsėjis");
					$(".heading").css("background","url('wallpaper-16.jpg')");
				}
				else if(mėnuo==9){
					$("#mėnuo").html("Spalis");
					$(".heading").css("background","url('black-and-blue-wallpaper-1080p.jpg')");
				}
				else if(mėnuo==10){
					$("#mėnuo").html("Lapkritis");
					$(".heading").css("background","url('keyboard_backlit_black_blue_31057_1920x1080.jpg')");
				}
				else if(mėnuo==11){
					$("#mėnuo").html("Gruodis");
					$(".heading").css("background","url('1GWQUvh.jpg')");
				}
			}
			
			function gettingMonth(mėnuo,metai){
				if(mėnuo==1){
					if(metai%4==0)
					return 29;
					else return 28;
				}
				else if(mėnuo==3||mėnuo==5||mėnuo==8||mėnuo==10){
					return 30;
				}
				else{
					return 31;
				}
			}

			$("#prew").click(function(){
				slide=slide-1;
				count();
			})

			$("#next").click(function(){
				slide=slide+1;
				count();
			})
		});
