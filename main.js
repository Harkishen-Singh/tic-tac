var d_length = 200, init_l = 0;
var d_breadth = 200, init_b = 0;
var svg = d3.select('body').append('svg').attr('height', 600).attr('width','100%').style('color', 'black')
.attr('transform','translate(50,0) ');



var grp = svg.append('g').attr('transform', 'translate(0,0)');
function Id_generator() {
	x = Math.floor(Math.random() * 10000000000);
	console.log('Id : '+x);
	return x;
}

decisionArray = [
	[0,0,0],
	[0,-1,0],
	[0,0,0]
]; // 1 for X and -1 for O


 function start(){
 	
 	/*
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {

			grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(d){ lines(d);console.log('Clicked' +(i+j))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
			init_b+=d_breadth;
			
		}init_l+=d_length;
		init_b=0;
		
	}
	*/
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[0][0]=1;drawing();console.log('Clicked' +(0))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[0][1]=1;drawing();console.log('Clicked' +(1));}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[0][2]=1;drawing();console.log('Clicked' +(2))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	init_l+=d_length;init_b=0;

	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[1][0]=1;drawing();console.log('Clicked' +(3))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[1][1]=1;drawing();console.log('Clicked' +(4))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[1][2]=1;drawing();console.log('Clicked' +(5))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	init_l+=d_length;init_b=0;

	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[2][0]=1;drawing();console.log('Clicked' +(6))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[2][1]=1;drawing();console.log('Clicked' +(7))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ decisionArray[2][2]=1;drawing();console.log('Clicked' +(8))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	init_l+=d_length;init_b=0;
	
	drawing();
	default_lining();
}

function default_lining(argument) {
	/* vertical lines below */
	svg.append('line').attr('x1', d_breadth).attr('y1', 0).attr('x2',d_breadth).attr('y2',d_length*3).style('stroke','black');
	svg.append('line').attr('x1', d_breadth*2).attr('y1', 0).attr('x2',d_breadth*2).attr('y2',d_length*3).style('stroke','black');
	/* horizontal lines */
	svg.append('line').attr('x1', 0).attr('y1', d_length).attr('x2',d_breadth*3).attr('y2',d_length).style('stroke','black');
	svg.append('line').attr('x1', 0).attr('y1', d_length*2).attr('x2',d_breadth*3).attr('y2',d_length*2).style('stroke','black');
}
var x_cordinate_line1 = 5, line_x=20; // 5 pixel from left margin
var y_cordinate_line1 = 5, line_y=20 ; // 5 pixel from the top margin
var radi = 70, circle_x = 80, circle_y = 80 ;
var shifts_both_axes = 220;
var x_travel_line = 100, y_travel_line = 100;
var x_cordinate_line2 = 5;
var y_cordinate_line2 = 5+x_travel_line;

function lines(j,i){
	// making of the lines
	console.log('i: '+i+'   j: '+j);
	//decisionArray[j][i]=1;
	grp.append('line').attr('x1', x_cordinate_line1+line_x+shifts_both_axes*i).attr('y1', y_cordinate_line1+line_y+shifts_both_axes*j).attr('x2',x_cordinate_line1+x_travel_line+line_x+shifts_both_axes*i )
	.attr('y2', y_cordinate_line1+y_travel_line+line_y+shifts_both_axes*j).style('stroke', 'black').attr('stroke-width','2');
	grp.append('line').attr('x1', x_cordinate_line2+line_x+shifts_both_axes*i).attr('y1', y_cordinate_line2+line_y+shifts_both_axes*j).attr('x2',x_cordinate_line2+x_travel_line +line_x+shifts_both_axes*i)
	.attr('y2', y_cordinate_line2-y_travel_line+line_y+shifts_both_axes*j).style('stroke', 'black').attr('stroke-width','2');
	console.log(decisionArray[j]);
	compTurn();

}
function circles(i,j) {
	// making circles
	grp.append('circle').attr('r', radi).attr('cx',circle_x+shifts_both_axes*i).attr('cy',circle_y+shifts_both_axes*j).attr('fill','none')
		.attr('stroke', 'black').attr('stroke-width','2') ;
	
}


function drawing(argument) {
	console.log(decisionArray[0]);
	console.log(decisionArray[1]);
	console.log(decisionArray[2]);
	console.log('reached drawing');
	for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if (decisionArray[i][j]==-1) {
					circles(i,j);
				}
				if (decisionArray[i][j]==1) {
					console.log('this is X');
					lines(i,j);
				}
			}
		}	

}

// actual processing

function compTurn(){
	for(var o=0; o<3;o++){
		for (var j = 0; j < 3; j++) {
			if (decisionArray[o][j]==1) {



			}
		}
	}
}

start();
