var d_length = 200, init_l = 0;
var d_breadth = 200, init_b = 0;
var svg = d3.select('body').append('svg').attr('height', 600).attr('width','100%').style('color', 'black')
.attr('transform','translate(50,0) ');

var grp = svg.append('g').attr('transform', 'translate(0,0)');
function start(){
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {

			grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click', function(d,i){ console.log('Clicked Red button'); }).style('padding',0);
			init_b+=d_breadth;
			
		}init_l+=d_length;
		init_b=0;
		
	}
	default_lining();
	control_figures();
}

function default_lining(argument) {
	/* vertical lines below */
	svg.append('line').attr('x1', d_breadth).attr('y1', 0).attr('x2',d_breadth).attr('y2',d_length*3).style('stroke','black');
	svg.append('line').attr('x1', d_breadth*2).attr('y1', 0).attr('x2',d_breadth*2).attr('y2',d_length*3).style('stroke','black');
	/* horizontal lines */
	svg.append('line').attr('x1', 0).attr('y1', d_length).attr('x2',d_breadth*3).attr('y2',d_length).style('stroke','black');
	svg.append('line').attr('x1', 0).attr('y1', d_length*2).attr('x2',d_breadth*3).attr('y2',d_length*2).style('stroke','black');
}
function control_figures(argument) {
	var x_cordinate_line1 = 5; // 5 pixel from left margin
	var y_cordinate_line1 = 5; // 5 pixel from the top margin
	var radi = 70, circle_x = 200, circle_y = 200 ;

	var x_travel_line = 100, y_travel_line = 100;

	var x_cordinate_line2 = 5;
	var y_cordinate_line2 = 5+x_travel_line;
	// making of the lines

	grp.append('line').attr('x1', x_cordinate_line1).attr('y1', y_cordinate_line1).attr('x2',x_cordinate_line1+x_travel_line )
	.attr('y2', y_cordinate_line1+y_travel_line).style('stroke', 'black').attr('stroke-width','2');
	grp.append('line').attr('x1', x_cordinate_line2).attr('y1', y_cordinate_line2).attr('x2',x_cordinate_line2+x_travel_line )
	.attr('y2', y_cordinate_line2-y_travel_line).style('stroke', 'black').attr('stroke-width','2');

	grp.append('circle').attr('r', radi).attr('cx',circle_x).attr('cy',circle_y).attr('fill','none')
		.attr('stroke', 'black').attr('stroke-width','2') ;
	
}

start();