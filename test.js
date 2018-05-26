/*var svg = d3.select('body').append('svg').attr('height', 500).attr('width','100%');
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
	
*/
/*
 * Represents a state in the game
 * @param old [State]: old state to intialize the new state
 */
var State = function(old) {

    /*
     * public : the player who has the turn to player
     */
    this.turn = "";

    /*
     * public : the number of moves of the AI player
     */
    this.oMovesCount = 0;

    /*
     * public : the result of the game in this State
     */
    this.result = "still running";

    /*
     * public : the board configuration in this state
     */
    this.board = [];

    /* Begin Object Construction */
    if(typeof old !== "undefined") {
        // if the state is constructed using a copy of another state
        var len = old.board.length;
        this.board = new Array(len);
        for(var itr = 0 ; itr < len ; itr++) {
            this.board[itr] = old.board[itr];
        }

        this.oMovesCount = old.oMovesCount;
        this.result = old.result;
        this.turn = old.turn;
    }
    /* End Object Construction */

    /*
     * public : advances the turn in a the state
     */
    this.advanceTurn = function() {
        this.turn = this.turn === "X" ? "O" : "X";
    }

    /*
     * public function that enumerates the empty cells in state
     * @return [Array]: indices of all empty cells
     */
    this.emptyCells = function() {
        var indxs = [];
        for(var itr = 0; itr < 9 ; itr++) {
            if(this.board[itr] === "E") {
                indxs.push(itr);
            }
        }
        return indxs;
    }

    /*
     * public  function that checks if the state is a terminal state or not
     * the state result is updated to reflect the result of the game
     * @returns [Boolean]: true if it's terminal, false otherwise
     */
    this.isTerminal = function() {
        var B = this.board;

        //check rows
        for(var i = 0; i <= 6; i = i + 3) {
            if(B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
                this.result = B[i] + "-won"; //update the state result
                return true;
            }
        }

        //check columns
        for(var i = 0; i <= 2 ; i++) {
            if(B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
                this.result = B[i] + "-won"; //update the state result
                return true;
            }
        }

        //check diagonals
        for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
            if(B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2*j]) {
                this.result = B[i] + "-won"; //update the state result
                return true;
            }
        }

        var available = this.emptyCells();
        if(available.length == 0) {
            //the game is draw
            this.result = "draw"; //update the state result
            return true;
        }
        else {
            return false;
        }
    };

};