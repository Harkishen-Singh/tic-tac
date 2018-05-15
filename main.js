var d_length = 200, init_l = 0;
var d_breadth = 200, init_b = 0;
var svg = d3.select('body').append('svg').attr('height', '100%').attr('width','100%').style('color', 'black');

var grp = svg.append('g').attr('transform', 'translate(0,0)');
function start(){
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {

			grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','red').on('click', function(d,i){ console.log('Clicked Red button'); }).style('padding',0);
			init_b+=d_breadth;
			
		}init_l+=d_length;
		init_b=0;
		
	}
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
start();