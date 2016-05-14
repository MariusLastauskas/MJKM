if(bcards.length==1){
		 	alert("laimėjo "+bcards[0]+" žaidėjas")
		}
		
		else{
			var left=bcards.length;
			if(best==1||best==6){
				for(var i=0;i<bcards.length;i++){
					if(bcards[i]==1){
						best=Math.max(best,p1[1])
					}
					if(bcards[i]==2){
						best=Math.max(best,p2[1])
					}
					if(bcards[i]==3){
						best=Math.max(best,p3[1])
					}
					if(bcards[i]==4){
						best=Math.max(best,p4[1])
					}
				}

				for(var i=0;i<bcards.length;i++){
					if(bcards[i]==1){
						if(p1[1]!=best){
							bcards[i]=0;
							left--;
						}
					}
					if(bcards[i]==2){
						if(p2[1]!=best){
							bcards[i]=0;
							left--;
						}
					}
					if(bcards[i]==3){
						if(p3[1]!=best){
							bcards[i]=0;
							left--;
						}
					}
					if(bcards[i]==4){
						if(p4[1]!=best){
							bcards[i]=0;
							left--;
						}
					}
				}

				if(left==1){
					for(var i=0;i<bcards.length;i++){
						if(bcards[i]!=0){
							alert("laimėjo "+bcards[i]+" žaidėjas");
						}
					}
				}
				else{
						for(var i=0;i<bcards.length;i++){
							if(bcards[i]==1){
								best=Math.max(best,p1[2])
							}
							if(bcards[i]==2){
								best=Math.max(best,p2[2])
							}
							if(bcards[i]==3){
								best=Math.max(best,p3[2])
							}
							if(bcards[i]==4){
								best=Math.max(best,p4[2])
							}
						}

						for(var i=0;i<bcards.length;i++){
						if(bcards[i]==1){
							if(p1[2]!=best){
								bcards[i]=0;
								left--;
							}
						}
						if(bcards[i]==2){
							if(p2[2]!=best){
								bcards[i]=0;
								left--;
							}
						}
						if(bcards[i]==3){
							if(p3[2]!=best){
								bcards[i]=0;
								left--;
							}
						}
						if(bcards[i]==4){
							if(p4[2]!=best){
								bcards[i]=0;
								left--;
							}
						}
						}

						if(left==1){
							for(var i=0;i<bcards.length;i++){
								if(bcards[i]!=0){
									alert("laimėjo "+bcards[i]+" žaidėjas");
								}
						}
						}
						else{
							for(var i=0;i<bcards.length;i++){
								if(bcards[i]==1){
									best=Math.max(best,p1[3])
								}
								if(bcards[i]==2){
									best=Math.max(best,p2[3])
								}
								if(bcards[i]==3){
									best=Math.max(best,p3[3])
								}
								if(bcards[i]==4){
									best=Math.max(best,p4[3])
								}
							}

							for(var i=0;i<bcards.length;i++){
								if(bcards[i]==1){
									if(p1[3]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==2){
									if(p2[3]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==3){
									if(p3[3]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==4){
									if(p4[3]!=best){
										bcards[i]=0;
										left--;
									}
								}
					}

						if(left==1){
							for(var i=0;i<bcards.length;i++){
								if(bcards[i]!=0){
									alert("laimėjo "+bcards[i]+" žaidėjas");
								}
							}
						}
						else{
								for(var i=0;i<bcards.length;i++){
								if(bcards[i]==1){
									best=Math.max(best,p1[4])
								}
								if(bcards[i]==2){
									best=Math.max(best,p2[4])
								}
								if(bcards[i]==3){
									best=Math.max(best,p3[4])
								}
								if(bcards[i]==4){
									best=Math.max(best,p4[4])
								}
							}

							for(var i=0;i<bcards.length;i++){
								if(bcards[i]==1){
									if(p1[4]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==2){
									if(p2[4]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==3){
									if(p3[4]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==4){
									if(p4[4]!=best){
										bcards[i]=0;
										left--;
									}
								}
							}

							if(left==1){
								for(var i=0;i<bcards.length;i++){
									if(bcards[i]!=0){
										alert("laimėjo "+bcards[i]+" žaidėjas");
									}
								}
							}
							else{
									for(var i=0;i<bcards.length;i++){
										if(bcards[i]==1){
											best=Math.max(best,p1[5])
										}
										if(bcards[i]==2){
											best=Math.max(best,p2[5])
										}
										if(bcards[i]==3){
											best=Math.max(best,p3[5])
										}
										if(bcards[i]==4){
											best=Math.max(best,p4[5])
										}
									}

									for(var i=0;i<bcards.length;i++){
										if(bcards[i]==1){
											if(p1[5]!=best){
												bcards[i]=0;
												left--;
											}
										}
										if(bcards[i]==2){
											if(p2[5]!=best){
												bcards[i]=0;
												left--;
											}
										}
										if(bcards[i]==3){
											if(p3[5]!=best){
												bcards[i]=0;
												left--;
											}
										}
										if(bcards[i]==4){
											if(p4[5]!=best){
												bcards[i]=0;
												left--;
											}
										}
									}

									if(left==1){
										for(var i=0;i<bcards.length;i++){
											if(bcards[i]!=0){
												alert("laimėjo "+bcards[i]+" žaidėjas");
											}
										}
									}
									else{
										alert("dalybos");
									}

							}

						}

						}

				}

			}
			else if(best==2){
				var left=bcards.length;
			if(best==2){
				for(var i=0;i<bcards.length;i++){
					if(bcards[i]==1){
						best=Math.max(best,p1[1])
					}
					if(bcards[i]==2){
						best=Math.max(best,p2[1])
					}
					if(bcards[i]==3){
						best=Math.max(best,p3[1])
					}
					if(bcards[i]==4){
						best=Math.max(best,p4[1])
					}
				}

				for(var i=0;i<bcards.length;i++){
					if(bcards[i]==1){
						if(p1[1]!=best){
							bcards[i]=0;
							left--;
						}
					}
					if(bcards[i]==2){
						if(p2[1]!=best){
							bcards[i]=0;
							left--;
						}
					}
					if(bcards[i]==3){
						if(p3[1]!=best){
							bcards[i]=0;
							left--;
						}
					}
					if(bcards[i]==4){
						if(p4[1]!=best){
							bcards[i]=0;
							left--;
						}
					}
				}

				if(left==1){
					for(var i=0;i<bcards.length;i++){
						if(bcards[i]!=0){
							alert("laimėjo "+bcards[i]+" žaidėjas");
						}
					}
				}
				else{
						for(var i=0;i<bcards.length;i++){
							if(bcards[i]==1){
								best=Math.max(best,p1[2])
							}
							if(bcards[i]==2){
								best=Math.max(best,p2[2])
							}
							if(bcards[i]==3){
								best=Math.max(best,p3[2])
							}
							if(bcards[i]==4){
								best=Math.max(best,p4[2])
							}
						}

						for(var i=0;i<bcards.length;i++){
						if(bcards[i]==1){
							if(p1[2]!=best){
								bcards[i]=0;
								left--;
							}
						}
						if(bcards[i]==2){
							if(p2[2]!=best){
								bcards[i]=0;
								left--;
							}
						}
						if(bcards[i]==3){
							if(p3[2]!=best){
								bcards[i]=0;
								left--;
							}
						}
						if(bcards[i]==4){
							if(p4[2]!=best){
								bcards[i]=0;
								left--;
							}
						}
						}

						if(left==1){
							for(var i=0;i<bcards.length;i++){
								if(bcards[i]!=0){
									alert("laimėjo "+bcards[i]+" žaidėjas");
								}
						}
						}
						else{
							for(var i=0;i<bcards.length;i++){
								if(bcards[i]==1){
									best=Math.max(best,p1[3])
								}
								if(bcards[i]==2){
									best=Math.max(best,p2[3])
								}
								if(bcards[i]==3){
									best=Math.max(best,p3[3])
								}
								if(bcards[i]==4){
									best=Math.max(best,p4[3])
								}
							}

							for(var i=0;i<bcards.length;i++){
								if(bcards[i]==1){
									if(p1[3]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==2){
									if(p2[3]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==3){
									if(p3[3]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==4){
									if(p4[3]!=best){
										bcards[i]=0;
										left--;
									}
								}
					}

						if(left==1){
							for(var i=0;i<bcards.length;i++){
								if(bcards[i]!=0){
									alert("laimėjo "+bcards[i]+" žaidėjas");
								}
							}
						}
						else{
								for(var i=0;i<bcards.length;i++){
								if(bcards[i]==1){
									best=Math.max(best,p1[4])
								}
								if(bcards[i]==2){
									best=Math.max(best,p2[4])
								}
								if(bcards[i]==3){
									best=Math.max(best,p3[4])
								}
								if(bcards[i]==4){
									best=Math.max(best,p4[4])
								}
							}

							for(var i=0;i<bcards.length;i++){
								if(bcards[i]==1){
									if(p1[4]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==2){
									if(p2[4]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==3){
									if(p3[4]!=best){
										bcards[i]=0;
										left--;
									}
								}
								if(bcards[i]==4){
									if(p4[4]!=best){
										bcards[i]=0;
										left--;
									}
								}
							}

							if(left==1){
								for(var i=0;i<bcards.length;i++){
									if(bcards[i]!=0){
										alert("laimėjo "+bcards[i]+" žaidėjas");
									}
								}
							}
							else{alert("laimėjo "+bcards[i]+" žaidėjas")};

						}

						}

				}
			}
			else if(best==3||best==4){
				var check=3;
			}
			else if(best==7){
				var check=2;
			}
			else if(best==5||8){
				var check=1;
			}
		}
		// 	if(stop==false){
		// 		best=0;
		// 		for(var i=1;i<=check;i++){
		// 			for(var j=0;j<bcards.length;j++){
		// 				if(bcards[j]==1){
		// 					best=Math.max(best,p1[i]);
		// 				}
		// 				if(bcards[j]==2){
		// 					best=Math.max(best,p2[i]);
		// 				}
		// 				if(bcards[j]==3){
		// 					best=Math.max(best,p3[i]);
		// 				}
		// 				if(bcards[j]==4){
		// 					best=Math.max(best,p4[i]);
		// 				}
		// 			}
		// 			for(var j=0;j<bcards.length;j++){
		// 				if(bcards[j]==1){
		// 					if(p1[i]!=best){
		// 						// bcards.splice(j, 1);
		// 						delete bcards[j];
		// 					}
		// 				}
		// 				if(bcards[j]==2){
		// 					if(p2[i]!=best){
		// 						// bcards.splice(j, 1);
		// 						delete bcards[j];
		// 					}
		// 				}
		// 				if(bcards[j]==3){
		// 					if(p3[i]!=best){
		// 						// bcards.splice(j, 1);
		// 						delete bcards[j];
		// 					}
		// 				}
		// 				if(bcards[j]==3){
		// 					if(p3[i]!=best){
		// 						// bcards.splice(j, 1);
		// 						delete bcards[j];
		// 					}
		// 				}
		// 			}
		// 			compareCards(p1,p2,p3,p4);
		// 		}
		// 	}
		// }

		 // console.log("best"+bcards.length)
	}