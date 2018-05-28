var d_length = 200, init_l = 0;
var d_breadth = 200, init_b = 0;
var svg = d3.select('body').append('svg').attr('height', 600).attr('width','100%').style('color', 'black')
.attr('transform','translate(50,0) ');
var x_cordinate_line1 = 5, line_x=20; // 5 pixel from left margin
var y_cordinate_line1 = 5, line_y=20 ; // 5 pixel from the top margin
var radi = 70, circle_x = 80, circle_y = 80 ;
var shifts_both_axes = 220;
var x_travel_line = 100, y_travel_line = 100;
var x_cordinate_line2 = 5;
var y_cordinate_line2 = 5+x_travel_line;
var grp = svg.append('g').attr('transform', 'translate(0,0)');
var reachComputing = 0, checkerDrawing = 0;
var ch1=false, ch2=false,ch3=false,ch4=false,ended=false;


function Id_generator() {
	x = Math.floor(Math.random() * 10000000000);
	console.log('Id : '+x);
	return x;
}

var decisionArray = [
	[0,0,0],
	[0,-1,0],
	[0,0,0]
]; // 1 for X and -1 for O
var checker_firstRun = 0;

 function start(){
 default_lining();

 	checker_firstRun++;
 	
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[0][0]!=-1){

				decisionArray[0][0]=1;ch1=ch2=ch3=ch4=false;computing();}else{alert('Wrong Clicked.!')}console.log('Clicked' +(0))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[0][1]!=-1){

				decisionArray[0][1]=1;ch1=ch2=ch3=ch4=false;computing();}else{alert('Wrong Clicked.!')}console.log('Clicked' +(1))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[0][2]!=-1){

				decisionArray[0][2]=1;ch1=ch2=ch3=ch4=false;computing();
			}else{alert('Wrong Clicked.!')}console.log('Clicked' +(2))
		}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	init_l+=d_length;init_b=0;

	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[1][0]!=-1){

				decisionArray[1][0]=1;ch1=ch2=ch3=ch4=false;computing();}else{alert('Wrong Clicked.!')}console.log('Clicked' +(3))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[1][1]!=-1){

				decisionArray[1][1]=1;ch1=ch2=ch3=ch4=false;computing();}else{alert('Wrong Clicked.!')}console.log('Clicked' +(4))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[1][2]!=-1){

				decisionArray[1][2]=1;ch1=ch2=ch3=ch4=false;computing();}else{alert('Wrong Clicked.!')}console.log('Clicked' +(5))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	init_l+=d_length;init_b=0;

	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[2][0]!=-1){

				decisionArray[2][0]=1;ch1=ch2=ch3=ch4=false;computing();}else{alert('Wrong Clicked.!')}console.log('Clicked' +(6))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[2][1]!=-1){

				decisionArray[2][1]=1;ch1=ch2=ch3=ch4=false;computing();}else{alert('Wrong Clicked.!')}console.log('Clicked' +(7))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	grp.append('rect').attr('x', init_b).attr('y',init_l).attr('width', d_breadth).attr('height', d_length)
			.attr('fill','white').on('click' ,function(){ if(decisionArray[2][2]!=-1){

				decisionArray[2][2]=1;ch1=ch2=ch3=ch4=false;computing();}else{alert('Wrong Clicked.!')}console.log('Clicked' +(8))}).style('padding',0)
			.attr('id', function() {
				return Id_generator().slug;
			});
	init_b+=d_breadth;
	init_l+=d_length;init_b=0;
	if (checker_firstRun==1) {drawing(arr=decisionArray);}
	
	
}

function default_lining(argument) {
	/* vertical lines below */
	svg.append('line').attr('x1', d_breadth).attr('y1', 0).attr('x2',d_breadth).attr('y2',d_length*3).style('stroke','black');
	svg.append('line').attr('x1', d_breadth*2).attr('y1', 0).attr('x2',d_breadth*2).attr('y2',d_length*3).style('stroke','black');
	/* horizontal lines */
	svg.append('line').attr('x1', 0).attr('y1', d_length).attr('x2',d_breadth*3).attr('y2',d_length).style('stroke','black');
	svg.append('line').attr('x1', 0).attr('y1', d_length*2).attr('x2',d_breadth*3).attr('y2',d_length*2).style('stroke','black');
}


function lines(j,i){
	// making of the lines
	
	//decisionArray[j][i]=1;
	grp.append('line').attr('x1', x_cordinate_line1+line_x+shifts_both_axes*i).attr('y1', y_cordinate_line1+line_y+shifts_both_axes*j).attr('x2',x_cordinate_line1+x_travel_line+line_x+shifts_both_axes*i )
	.attr('y2', y_cordinate_line1+y_travel_line+line_y+shifts_both_axes*j).style('stroke', 'green').attr('stroke-width','3');
	grp.append('line').attr('x1', x_cordinate_line2+line_x+shifts_both_axes*i).attr('y1', y_cordinate_line2+line_y+shifts_both_axes*j).attr('x2',x_cordinate_line2+x_travel_line +line_x+shifts_both_axes*i)
	.attr('y2', y_cordinate_line2-y_travel_line+line_y+shifts_both_axes*j).style('stroke', 'green').attr('stroke-width','3');
	
	

}
function circles(i,j) {
	// making circles
	grp.append('circle').attr('r', radi).attr('cx',circle_x+shifts_both_axes*i).attr('cy',circle_y+shifts_both_axes*j).attr('fill','none')
		.attr('stroke', 'red').attr('stroke-width','3') ;

	
}


function drawing(argument=0,arr=decisionArray) {
	if (ended==false) {
	console.log('array is ');
	console.log(arr[0]);
	console.log(arr[1]);
	console.log(arr[2])
	
	for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				

				try{
				if (arr[i][j]==-1) {
					circles(j,i);
				}
				if (arr[i][j]==1) {
					//console.log('this is X');
					lines(i,j);
				}}
				catch(e){
					if (decisionArray[i][j]==-1) {
					circles(j,i);
				}
				if (decisionArray[i][j]==1) {
					//console.log('this is X');
					lines(i,j);
				}
			}
		}	
	
}}
}

// actual processing

var winningConditions = [
	[0,1,2],[0,3,6],[6,7,8],[2,5,8],[0,4,8],[2,4,6],[1,4,7],[3,4,5]
];
function exiting(argument) {
	ended = true;
	exit;
}


function computing(){
	reachComputing++;
	console.log(reachComputing);

	/* winning condition check */

	if(decisionArray[0][0]==1 && decisionArray[0][1]==1 && decisionArray[0][2]==1 )
		{alert('X wins!');exiting();}
	if(decisionArray[0][0]==-1 && decisionArray[0][1]==-1 && decisionArray[0][2]==-1 )
		{alert('O wins!');exiting();}
	if(decisionArray[0][0]==1 && decisionArray[1][0]==1 && decisionArray[2][0]==1 )
		{alert('X wins!');exiting();}
	if(decisionArray[0][0]==-1 && decisionArray[1][0]==-1 && decisionArray[2][0]==-1 )
		{alert('O wins!');exiting();}
	if(decisionArray[2][0]==1 && decisionArray[2][1]==1 && decisionArray[2][2]==1 )
		{alert('X wins!');exiting();}
	if(decisionArray[2][0]==-1 && decisionArray[2][1]==-1 && decisionArray[2][2]==-1 )
		{alert('O wins!');exiting();}
	if(decisionArray[0][2]==1 && decisionArray[1][2]==1 && decisionArray[2][2]==1 )
		{alert('X wins!');exiting();}
	if(decisionArray[0][2]==-1 && decisionArray[1][2]==-1 && decisionArray[2][2]==-1 )
		{alert('O wins!');exiting();}
	if(decisionArray[0][0]==1 && decisionArray[1][1]==1 && decisionArray[2][2]==1 )
		{alert('X wins!');exiting();}
	if(decisionArray[0][0]==-1 && decisionArray[1][1]==-1 && decisionArray[2][2]==-1 )
		{alert('O wins!');exiting();}
	if(decisionArray[0][2]==1 && decisionArray[1][1]==1 && decisionArray[2][0]==1 )
		{alert('X wins!');exiting();}
	if(decisionArray[0][2]==-1 && decisionArray[1][1]==-1 && decisionArray[2][0]==-1 )
		{alert('O wins!');exiting();}
	if(decisionArray[0][1]==1 && decisionArray[1][1]==1 && decisionArray[2][1]==1 )
		{alert('X wins!');exiting();}
	if(decisionArray[0][1]==-1 && decisionArray[1][1]==-1 && decisionArray[2][1]==-1 )
		{alert('O wins!');exiting();}
	if(decisionArray[1][0]==1 && decisionArray[1][1]==1 && decisionArray[1][2]==1 )
		{alert('X wins!');exiting();}
	if(decisionArray[1][0]==-1 && decisionArray[1][1]==-1 && decisionArray[1][2]==-1 )
		{alert('O wins!');exiting();}

	/* endblock */

	/* training for O winning */ 
	if( (decisionArray[0][0]==-1 && decisionArray[1][1]==-1 && decisionArray[2][2]!=1) || (decisionArray[2][2]==-1 && decisionArray[1][1]==-1 && decisionArray[0][2]!=1))
		{	if(decisionArray[2][2]!=1)
				decisionArray[2][2]=-1;
			else if(decisionArray[0][2]!=1) decisionArray[0][2]=-1;
			alert('O wins');exiting()}
	if( (decisionArray[0][2]==-1 && decisionArray[1][1]==-1 && decisionArray[2][0]!=1) || (decisionArray[2][0]==-1 && decisionArray[1][1]==-1 && decisionArray[0][2]!=1) )
		{decisionArray[0][2]=-1;alert('O wins');exiting()}

	if( (decisionArray[0][1]==-1 && decisionArray[1][1]==-1 && decisionArray[2][1]!=1) || (decisionArray[2][1]==-1 && decisionArray[1][1]==-1 && decisionArray[0][1]!=1))
		{	if(decisionArray!=1)
				decisionArray[2][1]=-1;
			else if(decisionArray[0][1]!=1) decisionArray[0][1]=-1;
			alert('O wins');exiting()}
	if( (decisionArray[1][0]==-1 && decisionArray[1][1]==-1 && decisionArray[1][2]!=1) || (decisionArray[1][2]==-1 && decisionArray[1][1]==-1 && decisionArray[1][0]!=1) )
		{
			if(decisionArray[1][2]!=1) {decisionArray[1][2]=-1;}
			else if(decisionArray[1][0]!=1){decisionArray[1][0]==-1;}
			alert('O wins');
			exiting();

	}


	/* endblock */

	/* user winning conditions prevention checks */

	if (
		(decisionArray[0][0]==1 && decisionArray[0][2]== 1) && decisionArray[1][0] ==0
		) {
		decisionArray[0][1] =-1;ch1=true;
	
	}
	 else if (
		(decisionArray[2][0]==1 && decisionArray[2][2]== 1)  && decisionArray[2][1]==0
		) {
		decisionArray[2][1] = -1;ch1=true;
	}
	 else if (
		(decisionArray[0][0]==1 && decisionArray[2][0]== 1) && decisionArray[1][0] ==0
		) {
		decisionArray[1][0] = -1;ch1=true;
		
	}
	else if (
		(decisionArray[0][2]==1 && decisionArray[2][2]== 1) && decisionArray[1][2]==0
		) {
		decisionArray[1][2] = -1;ch1=true;
	}
	else if (
		(decisionArray[2][1]==1 && decisionArray[2][2]== 1) && decisionArray[2][0]==0
		) {
		decisionArray[2][0] = -1;ch1=true;
	}

	/* endblock */

	if(ch1 == false){
	if (decisionArray[0][0]==1 || decisionArray[0][2]==1 || decisionArray[2][0]==1 || decisionArray[2][2]==1 || decisionArray[0][1]==1 || decisionArray[1][2]==1 || decisionArray[2][1]==1 || decisionArray[1][0]==1 ) {
		console.log('this in checks')
		console.log(decisionArray)
		if (decisionArray[0][0]!=1 && decisionArray[2][2]!=1) {
			decisionArray[0][0]=-1;
			console.log('firsst part');ch2=true;
		}
		else if (decisionArray[0][2]!=1 && decisionArray[2][0]!=1) {
			decisionArray[0][2]=-1;
			console.log('second part');ch2=true;
		}	
	}
	else if (decisionArray[0][1]==1 || decisionArray[1][2]==1 || decisionArray[2][1]==1 || decisionArray[2][0]==1 ){
		console.log('this in checks part 2');
		console.log(decisionArray);
		if (decisionArray[0][1]!=1 && decisionArray[2][1]!=1) {
			decisionArray[2][1]=-1;
			console.log('firsst part checks 2')
		}
		else if (decisionArray[1][0]!=1 && decisionArray[1][2]!=1) {
			decisionArray[1][0]=-1;
			console.log('second part checks 2')
		}ch2 = true;
	}}
	if (ch1==false && ch2==false && ch3==false && ch4==false) {
		console.log('ch4 became '+ch4);
		for (var i = 0; i <3; i++) {
			for (var k = 0; k < 3; k++) {
				if (decisionArray[i][k]==0) {
					decisionArray[i][k] = -1;
					console.log('Random one');
					ch4=true;
					break;
				}
			}
			if (ch4==true) {break;}
		
		}
		
	}
	let ccc = true;
	for (var i = 0; i <3; i++) {
			for (var k = 0; k < 3; k++) {
				if (decisionArray[i][k]!=0) {
					ccc=true;
				}
				else{
					ccc = false;
					break;
				}
			}
			
	}
	
	
	checkerDrawing = 0;
	drawing(arr=decisionArray);
		
		
		
}

start();