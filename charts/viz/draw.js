function draw_graph(){
	var visualmark = document.getElementById("mark");
	var visualcolor = document.getElementById("color");
	var visualmotion = document.getElementById("motion");
	var visualorientation = document.getElementById("orientation");
	var visualtexture = document.getElementById("texture");

//Width and height
	var w = 1300;
	var h = 600;
	var padding = 20;
	
	d3.select("svg")
       	.remove();
		
//Get dataset
	d3.csv("McDonald's_Corp_stock.csv", function(dataset) {
		"use strict";

//Initialize data
	dataset.forEach(function(d) {
		d.Open = +d.Open;
		d.Close = +d.Close;
		d.change = +d.Change;
		d.Date = new Date(d.Date);
	  });

//Create scale functions
	var timeScale = d3.time.scale()
		 .domain([new Date(2013, 0, 1), new Date(2013, 10, 1)])
		 .range([2 * padding, w - padding * 7]);
	var yScale = d3.scale.linear()
		 .domain([80, 110])
		 .range([h - 3 * padding, padding * 3]);
			
//Create SVG element
	var svg = d3.select("body")
		.append("svg")
		.attr("width", w)
		.attr("height", h);

//legend		
	svg.append("rect")
		.attr("x", 1160)
		.attr("y", 55)
		.attr("width", 130)
		.attr("height", 110)
		.attr("fill", "none")
		.attr("stroke", "black")
		.attr("stroke-width", "1");
	svg.append("text")
		.attr("x", 1188)
		.attr("y", 85)
 		.attr("font-size", 12)
		.attr("font-weight", "bold")
		.text("Price goes up" ); 
	svg.append("text")
		.attr("x", 1188)
		.attr("y", 115)
 		.attr("font-size", 12)
		.attr("font-weight", "bold")
		.text("Price goes down" );
	svg.append("text")
		.attr("x", 1188)
		.attr("y", 145)
 		.attr("font-size", 12)
		.attr("font-weight", "bold")
		.text("Price no change" );
		
		
	if(visualcolor.checked == true){
		//Draw circles
		var color;
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("class","circle")
			.attr("cx", function(d) {
				return timeScale(d.Date) + 2 * padding;
			})
			.attr("cy", function(d) {
				return yScale(d.Close);
			})
			.attr("r", 3)
			.attr("fill", function(d){
				if(d.Change > 0){
					color = "Gold";
					}
				else if(d.Change < 0){
					color = "lightgray";
					}
				else {
					color = "SpringGreen";
					}
				return color;
				});
		
		//legend		
		svg.append("circle")
			.attr("cx", 1175)
			.attr("cy", 80)
			.attr("r", 5)
			.attr("fill", "Gold")
		svg.append("circle")
			.attr("cx", 1175)
			.attr("cy", 110)
			.attr("r", 5)
			.attr("fill", "lightgray")
		svg.append("circle")
			.attr("cx", 1175)
			.attr("cy", 140)
			.attr("r", 5)
			.attr("fill", "SpringGreen")
	}
	else if(visualmark.checked == true){
		//Draw circles
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("class","circle")
			.attr("cx", function(d) {
				if(d.Change > 0){
				return timeScale(d.Date) + 2 * padding;
				}
				else return -100;
			})
			.attr("cy", function(d) {
				if(d.Change > 0){
				return yScale(d.Close);
				}
				else return -100;
			})
			.attr("r", 3)
			.attr("fill", "Gold");
		
		//Draw rectangles
		svg.selectAll(".datarect1")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("class", "datarect1")
			.attr("x", function(d) {
				if(d.Change < 0){
				return timeScale(d.Date) + 2 * padding - 2.5;
				}
				else return -100;
			})
			.attr("y", function(d) {
				if(d.Change < 0){
				return yScale(d.Close)-6;
				}
				else return -100;
			})
			.attr("width", 3)
			.attr("height", 12)
			.attr("fill", "Silver")
			.attr("stroke", "blue")
			.attr("stroke-width", "1");
			
		//Draw squares
		svg.selectAll(".datarect2")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("class", "datarect2")
			.attr("x", function(d) {
				if(d.Change == 0){
				return timeScale(d.Date) + 2 * padding - 3.5;
				}
				else return -100;
			})
			.attr("y", function(d) {
				if(d.Change == 0){
				return yScale(d.Close) - 3.5;
				}
				else return -100;
			})
			.attr("width", 7)
			.attr("height", 7)
			.attr("fill", "lightGreen")
			.attr("stroke", "blue")
			.attr("stroke-width", "1");
		
		//legend
		svg.append("circle")
			.attr("cx", 1175)
			.attr("cy", 80)
			.attr("r", 5)
			.attr("fill", "Gold")
		svg.append("rect")
			.attr("x", 1173)
			.attr("y", 105)
			.attr("width", 4)
			.attr("height", 12)
			.attr("fill", "Silver")
			.attr("stroke", "blue")
			.attr("stroke-width", "1");
		svg.append("rect")
			.attr("x", 1171)
			.attr("y", 136)
			.attr("width", 8)
			.attr("height", 8)
			.attr("fill", "lightGreen")
			.attr("stroke", "blue")
			.attr("stroke-width", "1");
	}
	else if(visualmotion.checked == true){
		//Draw ellipse
		svg.selectAll("ellipse")
			.data(dataset)
			.enter()
			.append("ellipse")
			.attr("class", "ellipse")
			.attr("cx", function(d) {
				return timeScale(d.Date) + 2 * padding;
			})
			.attr("cy", function(d) {
				return yScale(d.Close);
			})
			.attr("rx", 2)
			.attr("ry", 8)
			.attr("fill", "Gold")
			.attr("stroke", "blue");
			
		var count1 = 0;
		var count2 = 0;
			
		d3.timer(function(){
			if(count1 < 20 && count2 == 0){
				count1 = count1 + 0.2;
			}
			else if(count1 == 20 && count2 == 0){
				count1 = count1 - 0.2;
				count2 = count2 + 0.2;
			}
			else if(count1 > 0 && 0 < count2 < 20){
				count1 = count1 - 0.2;
				count2 = count2 + 0.2;
			}
			else{
				count1 = 0;
				count2 = 0;
			}
			
			svg.selectAll(".ellipse")
				.attr("transform", function(d){
					if(d.Change > 0){
						return "translate(0," + (-count1) + ")";
					}
					else if(d.Change < 0){
						return "translate(0," + count1 + ")";
					}
					else{
						return "translate(0, 0)";
					}
				})
		})
		
		//Lagend
		svg.append("ellipse")
			.attr("class", "up")
			.attr("cx", 1175)
			.attr("cy", 80)
			.attr("rx", 2)
			.attr("ry", 8)
			.attr("fill", "Gold")
			.attr("stroke", "blue");
		svg.append("ellipse")
			.attr("class", "down")
			.attr("cx", 1175)
			.attr("cy", 110)
			.attr("rx", 2)
			.attr("ry", 8)
			.attr("fill", "Gold")
			.attr("stroke", "blue");
		svg.append("ellipse")
			.attr("class", "nochange")
			.attr("cx", 1175)
			.attr("cy", 140)
			.attr("rx", 2)
			.attr("ry", 8)
			.attr("fill", "Gold")
			.attr("stroke", "blue");
		
		var c1 = 0;
		var c2 = 0;
		d3.timer(function(){
			if(c1 < 10 && c2 == 0){
				c1 = c1 + 0.2;
			}
			else if(c1 == 10 && c2 == 0){
				c1 = c1 - 0.2;
				c2 = c2 + 0.2;
			}
			else if(c1 > 0 && 0 < c2 < 10){
				c1 = c1 - 0.2;
				c2 = c2 + 0.2;
			}
			else{
				c1 = 0;
				c2 = 0;
			}
			
			svg.selectAll(".up")
				.attr("transform", function(d){
						return "translate(0," + (-c1) + ")";
				})
			svg.selectAll(".down")
				.attr("transform", function(d){
						return "translate(0," + c1 + ")";
				})
			svg.selectAll(".nochange")
				.attr("transform", function(d){
						return "translate(0, 0)";
				})
		})	
	}
	else if(visualorientation.checked == true){
		//Draw orientation line
		svg.selectAll("line")
			.data(dataset)
			.enter()
			.append("line")
			.attr("class", "ori_line")
			.attr("x1", function(d) {
				return timeScale(d.Date) + 2 * padding;
			})
			.attr("y1", function(d) {
				return yScale(d.Close);
			})
			.attr("x2", function(d) {
				return timeScale(d.Date) + 2 * padding;
			})
			.attr("y2", function(d) {
				if(d.Change > 0){
					return yScale(d.Close) - 30;
				}
				else if(d.Change < 0){
					return yScale(d.Close) + 30;
				}
				else {
					return yScale(d.Close);
				}
			})
			.attr("stroke","SlateBlue")
			.attr("stroke-width", 3);
			
		//Draw circle
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("class","circle")
			.attr("cx", function(d) {
				return timeScale(d.Date) + 2 * padding;
			})
			.attr("cy", function(d) {
				return yScale(d.Close);
			})
			.attr("r", 3.5)
			.attr("fill", "Gold");
			
		svg.append("line")
			.attr("x1", 1175)
			.attr("y1", 60)
			.attr("x2", 1175)
			.attr("y2", 90)
			.attr("stroke","SlateBlue")
			.attr("stroke-width", 3);
		svg.append("line")
			.attr("x1", 1175)
			.attr("y1", 105)
			.attr("x2", 1175)
			.attr("y2", 130)
			.attr("stroke","SlateBlue")
			.attr("stroke-width", 3);
		svg.append("circle")
			.attr("class","circle")
			.attr("cx", 1175)
			.attr("cy", 90)
			.attr("r", 3.5)
			.attr("fill", "Gold");
		svg.append("circle")
			.attr("class","circle")
			.attr("cx", 1175)
			.attr("cy", 105)
			.attr("r", 3.5)
			.attr("fill", "Gold");
		svg.append("circle")
			.attr("class","circle")
			.attr("cx", 1175)
			.attr("cy", 140)
			.attr("r", 3.5)
			.attr("fill", "Gold");
	}
	else if(visualtexture.checked == true){
		//Draw texture rectangle
		svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", function(d){
				if(d.Change < 0){
					return timeScale(d.Date) + 2 * padding - 2;
				}
				else return -100;
				})
			.attr("y", function(d){
				if(d.Change < 0){
					return yScale(d.Close) - 2;
				}
				else return -100;
				})
			.attr("width", 4)
			.attr("height", 4)
			.attr("fill", "none")
			.attr("stroke", "black")
			.attr("stroke-width", "1");
		
		//Draw texture line
		svg.selectAll("line")
			.data(dataset)
			.enter()
			.append("line")
			.attr("class", "ori_line")
			.attr("x1", function(d) {
				if(d.Change > 0){
					return timeScale(d.Date) + 2 * padding;
				}
				else return -100;
			})
			.attr("y1", function(d) {
				if(d.Change > 0){
					return yScale(d.Close)+4.5;
				}
				else return -100;
			})
			.attr("x2", function(d) {
				if(d.Change > 0){
					return timeScale(d.Date) + 2 * padding;
				}
				else return -100;
			})
			.attr("y2", function(d) {
				if(d.Change > 0){
					return yScale(d.Close) - 4.5;
				}
				else return -100;
			})
			.attr("stroke","black")
			.attr("stroke-width", 1.5);
		
		//Draw circle
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("class", "texture_circle")
			.attr("cx", function(d) {
				return timeScale(d.Date) + 2 * padding;
			})
			.attr("cy", function(d) {
				return yScale(d.Close);
			})
			.attr("r", 4.5)
			.attr("fill", "rgba(220,220,22,0.2)");
		
		//Lagend	
		svg.append("rect")
			.attr("x", 1173)
			.attr("y", 78)
			.attr("width", 4)
			.attr("height", 4)
			.attr("fill", "none")
			.attr("stroke", "black")
			.attr("stroke-width", "1");
		svg.append("line")
			.attr("x1", 1175)
			.attr("y1", 105)
			.attr("x2", 1175)
			.attr("y2", 114)
			.attr("stroke", "black")
			.attr("stroke-width", "1");
		svg.append("circle")
			.attr("cx", 1175)
			.attr("cy", 80)
			.attr("r", 4.5)
			.attr("fill", "rgba(220,220,22,0.2)")
		svg.append("circle")
			.attr("cx", 1175)
			.attr("cy", 110)
			.attr("r", 4.5)
			.attr("fill", "rgba(220,220,22,0.2)")
		svg.append("circle")
			.attr("cx", 1175)
			.attr("cy", 140)
			.attr("r", 4.5)
			.attr("fill", "rgba(220,220,22,0.2)")
	}
	else{
		//Draw circles
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("cx", function(d) {
				return timeScale(d.Date) + 2 * padding;
			})
			.attr("cy", function(d) {
				return yScale(d.Close);
			})
			.attr("r", 3);
	}
	
//Adding a path
	var line = d3.svg.line()
		.x(function(d){return timeScale(d.Date) + 2 * padding;})
		.y(function(d){return yScale(d.Close);});

	d3.select("svg")
		.append("path")
		.attr("d", line(dataset))
		.attr("class", "close")
		.attr("fill", "none");

//Create helplines
	svg.append("line")
		.attr("id","xhelper")
		.attr("class", "helper-line")
		.attr("x1", 4 * padding)
		.attr("y1", h - padding)
		.attr("x2", w - padding * 2)
		.attr("y2", h - padding)
		.attr("stroke", "blue")
		.attr("stroke-width", 1)
		.style("visibility", "hidden")

	svg.append("line")
		.attr("id","yhelper")
		.attr("class", "helper-line")
		.attr("x1", w - padding * 2)
		.attr("y1", h - padding * 3)
		.attr("x2", w - padding * 2)
		.attr("y2", padding)
		.attr("stroke","blue")
		.attr("stroke-width", 1)
		.style("visibility", "hidden")

//Create helptextboxs
	svg.append("rect")
		.attr("id", "textboxhelper")
		.attr("rx", 6)
		.attr("ry", 6)
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", 360)
		.attr("height", 35)
		.attr("fill", "rgba(135,206,235,0.6)")
		.attr("stroke", "blue")
		.attr("stroke-width", "1")
		.style("visibility","hidden");

//Create helptexts
	svg.append("text")
		.attr("id", "texthelper1")
		.attr("x", 0)
		.attr("y", 0)
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("fill", "black")
		.attr("text-anchor", "left")
		.style("visibility","hidden");
	svg.append("text")
		.attr("id", "texthelper2")
		.attr("x", 0)
		.attr("y", 0)
		.attr("font-family", "sans-serif")
		.attr("font-size", "11px")
		.attr("fill", "black")
		.attr("text-anchor", "left")
		.style("visibility","hidden");

//Add interaction
	//Circle interaction
	svg.selectAll(".circle")
		.on("mouseover", function(d){
			d3.select(this)
				.transition()
				.attr("r",9);
		})
		.on("mouseout", function(d){
			d3.select(this)
				.transition()
				.attr("r",3);
		})
		.on("mouseover.tooltip", function(d){
			var x = d3.mouse(this)[0];
			var y = d3.mouse(this)[1];
			d3.select("#xhelper")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x2",x)
				.attr("y1",y)
				.attr("y2",y);
			d3.select("#yhelper")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x1",x)
				.attr("x2",x)
				.attr("y2",y);
			d3.select("#textboxhelper")
				.transition()
				.attr("transform","translate(0, 0)")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x", x + padding / 3)
				.attr("y", y - padding * 2.16);
       		d3.select("#texthelper1")
				.transition()
				.attr("transform","translate(0, 0)")
				.text("Close Price:$" + d.Close + ",")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x",x + padding / 1.5)
				.attr("y",y - padding * 1.5);
       		d3.select("#texthelper2")
				.transition()
				.attr("transform","translate(0, 0)")
				.text(d.Date)
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x",x + padding / 1.5)
				.attr("y",y - padding / 1.5);
		})
		.on("mouseout.tooltip", function(d){
			d3.select("#xhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.remove;
			d3.select("#yhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.remove;
			d3.select("#textboxhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
			d3.select("#texthelper1")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
			d3.select("#texthelper2")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
		});
		
		svg.selectAll(".texture_circle")
		.on("mouseover", function(d){
			d3.select(this)
				.transition()
				.attr("r",9);
		})
		.on("mouseout", function(d){
			d3.select(this)
				.transition()
				.attr("r",4.5);
		})
		.on("mouseover.tooltip", function(d){
			var x = d3.mouse(this)[0];
			var y = d3.mouse(this)[1];
			d3.select("#xhelper")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x2",x)
				.attr("y1",y)
				.attr("y2",y);
			d3.select("#yhelper")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x1",x)
				.attr("x2",x)
				.attr("y2",y);
			d3.select("#textboxhelper")
				.transition()
				.attr("transform","translate(0, 0)")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x", x + padding / 3)
				.attr("y", y - padding * 2.16);
       		d3.select("#texthelper1")
				.transition()
				.attr("transform","translate(0, 0)")
				.text("Close Price:$" + d.Close + ",")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x",x + padding / 1.5)
				.attr("y",y - padding * 1.5);
       		d3.select("#texthelper2")
				.transition()
				.attr("transform","translate(0, 0)")
				.text(d.Date)
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x",x + padding / 1.5)
				.attr("y",y - padding / 1.5);
		})
		.on("mouseout.tooltip", function(d){
			d3.select("#xhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.remove;
			d3.select("#yhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.remove;
			d3.select("#textboxhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
			d3.select("#texthelper1")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
			d3.select("#texthelper2")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
		});
		
	// Rect interaction
		svg.selectAll(".datarect1")
		.on("mouseover", function(d){
			d3.select(this)
				.transition()
				.attr("width", 9)
				.attr("height", 36);
		})
		.on("mouseout", function(d){
			d3.select(this)
				.transition()
				.attr("width", 3)
				.attr("height", 12);
		})
		.on("mouseover.tooltip", function(d){
			var x = d3.mouse(this)[0];
			var y = d3.mouse(this)[1];
			d3.select("#xhelper")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x2",x)
				.attr("y1",y)
				.attr("y2",y);
			d3.select("#yhelper")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x1",x)
				.attr("x2",x)
				.attr("y2",y);
			d3.select("#textboxhelper")
				.transition()
				.attr("transform","translate(0, 0)")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x", x + padding / 3)
				.attr("y", y - padding * 2.16);
       		d3.select("#texthelper1")
				.transition()
				.attr("transform","translate(0, 0)")
				.text("Close Price:$" + d.Close + ",")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x",x + padding / 1.5)
				.attr("y",y - padding * 1.5);
       		d3.select("#texthelper2")
				.transition()
				.attr("transform","translate(0, 0)")
				.text(d.Date)
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x",x + padding / 1.5)
				.attr("y",y - padding / 1.5);
		})
		.on("mouseout.tooltip", function(d){
			d3.select("#xhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.remove;
			d3.select("#yhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.remove;
			d3.select("#textboxhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
			d3.select("#texthelper1")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
			d3.select("#texthelper2")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
		});
		
		svg.selectAll(".datarect2")
		.on("mouseover", function(d){
			d3.select(this)
				.transition()
				.attr("width", 18)
				.attr("height", 18)
				.attr("transform","translate(-5.5, -5.5)");
		})
		.on("mouseout", function(d){
			d3.select(this)
				.transition()
				.attr("width", 7)
				.attr("height", 7)
				.attr("transform","translate(0, 0)");
		})
		.on("mouseover.tooltip", function(d){
			var x = d3.mouse(this)[0];
			var y = d3.mouse(this)[1];
			d3.select("#xhelper")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x2",x)
				.attr("y1",y)
				.attr("y2",y);
			d3.select("#yhelper")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x1",x)
				.attr("x2",x)
				.attr("y2",y);
			d3.select("#textboxhelper")
				.transition()
				.attr("transform","translate(0, 0)")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x", x + padding / 3)
				.attr("y", y - padding * 2.16);
       		d3.select("#texthelper1")
				.transition()
				.attr("transform","translate(0, 0)")
				.text("Close Price:$" + d.Close + ",")
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x",x + padding / 1.5)
				.attr("y",y - padding * 1.5);
       		d3.select("#texthelper2")
				.transition()
				.attr("transform","translate(0, 0)")
				.text(d.Date)
				.style("visibility","visible")
				.style("opacity",4)
				.attr("x",x + padding / 1.5)
				.attr("y",y - padding / 1.5);
		})
		.on("mouseout.tooltip", function(d){
			d3.select("#xhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.remove;
			d3.select("#yhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.remove;
			d3.select("#textboxhelper")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
			d3.select("#texthelper1")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
			d3.select("#texthelper2")
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity",0)
				.attr("transform","translate(10, -10)")
				.remove;
		});
		
		//Line interaction
		svg.selectAll(".ori_line")
		.on("mouseover", function(d){
			d3.select(this)
				.transition()
				.attr("y2", function(d) {
					if(d.Change > 0){
						return yScale(d.Close) - 60;
					}
					else if(d.Change < 0){
						return yScale(d.Close) + 60;
					}
					else {
						return yScale(d.Close);
					}
				})
				.attr("stroke-width",2);
		})
		.on("mouseout", function(d){
			d3.select(this)
				.transition()
				.delay(300)
				.attr("y2", function(d) {
					if(d.Change > 0){
						return yScale(d.Close) - 30;
					}
					else if(d.Change < 0){
						return yScale(d.Close) + 30;
					}
					else {
						return yScale(d.Close);
					}
				})
				.attr("stroke-width", 3.5);
		})


//Define X axis
	var xAxis = d3.svg.axis()
		.scale(timeScale)
		.ticks(10)
		.orient("bottom")

//Define Y axis
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.ticks(12)
		.orient("left")

//Create X axis
	svg.append("g")
		.attr("class", "xaxis")
		.attr("transform", "translate(" + 2 * padding + "," + (h - 3 * padding) + ")")
		.call(xAxis);

//Create Y axis
	svg.append("g")
		.attr("class", "yaxis")
		.attr("transform", "translate(" + 4 * padding + ",0)")
		.call(yAxis);

//Axis labels
	d3.select(".yaxis")
		.append("text")
		.text("Close Prices of The Stock of McDonald's Corp. (per share)")
			.attr("id", "xlable")
			.attr("transform", "rotate (90, " + -1.5 * padding + ", 0)")
			.attr("x", h / 5 - padding * 4)
			.attr("y", padding);

	d3.select(".xaxis")
		.append("text")
		.text("Date (From Jan 2 3013 to Oct 11 2013)")
			.attr("id", "ylable")
			.attr("x", w/3 + 2 * padding)
			.attr("y", 2 * padding);

//Title
	svg.append("text")
 		.attr("x", w / 2)
		.attr("y", 2 * padding)
 		.attr("font-size", 20)
		.attr("text-anchor", "middle")
		.attr("font-weight", "bold")
		.text("The Stock of McDonald's Corp. ScatterPlot " );
		
//Desription
	svg.append("text")
 		.attr("x", w  - 400)
		.attr("y", 3.5 * padding)
 		.attr("font-size", 17)
		.attr("text-anchor", "left")
		.attr("font-weight", "bold")
		.text("McDonald's stack rose until" );
	svg.append("text")
 		.attr("x", w  - 400)
		.attr("y", 4.5 * padding)
 		.attr("font-size", 17)
		.attr("text-anchor", "left")
		.attr("font-weight", "bold")
		.text("the middle of April, and then" );
	svg.append("text")
 		.attr("x", w  - 400)
		.attr("y", 5.5 * padding)
 		.attr("font-size", 17)
		.attr("text-anchor", "left")
		.attr("font-weight", "bold")
		.text("went down with some waves" ); 

	});
}
