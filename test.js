var svg = d3.select('body').append('svg').attr('height','100%').attr('width','100%');
var grp = svg.append('g').attr('transform', 'translate(0,0) ');
var arr = [];
for (var i = 0; i < 5; i++) {
	arr.push(i);
}
console.log(arr);

	grp.selectAll('rect').enter().data(arr).append('rect').attr('x',0).attr('y', function (d,i) {
		return d*200;
	}).attr('height', 200).attr('width',200);
	
