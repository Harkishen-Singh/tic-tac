var svg = d3.select('body').append('svg').attr('height', 500).attr('width','100%');
var grp = svg.append('g').attr('transform', 'translate(0,0) ');

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
	
