//Creating new instances of the politician object

var newPolitician = function (polName, partyColor) {

var politician = {name: polName,
electionResults: null,
totalVotes: function () {
    this.totalVotes = 0;

    for(var i = 0; i < this.electionResults.length; i++) {
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
}, rgbColor: partyColor
};
return politician;
};

var biden = newPolitician('Joe Biden', [0, 0, 255]);
var trump = newPolitician('Donald Trump', [132, 17, 11]);

//electionResults

biden.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

biden.electionResults[9] = 1;
biden.electionResults[4]= 17;
biden.electionResults[43] = 11;

trump.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

trump.electionResults[9]= 28;
trump.electionResults[4]= 38;
trump.electionResults[43] = 27;

// Winner of each state

var setStateResults = function (state) {
    
    theStates[state].winner = null;

    if (biden.electionResults[state] > trump.electionResults[state]) {
        theStates[state].winner = biden;
    } else {
        theStates[state].winner = trump;
    };

    var stateWinner = theStates[state].winner;

    if(stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.rgbColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }
    // Populating the dinamic table

    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
    
    candidate1Name.innerText = trump.name;
    candidate2Name.innerText = biden.name;
    
    candidate1Results.innerText = trump.electionResults[state];
    candidate2Results.innerText = biden.electionResults[state];
    
    if (theStates[state].winner === null){
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
    }
};

// Calling totalVotes

biden.totalVotes();
trump.totalVotes();

console.log(biden, trump);

// Winner

var winner;

if (biden.totalVotes > trump.totalVotes) {
    winner = 'Joe Biden is the winner!';
} else if (biden.totalVotes === trump.totalVotes) {
    winner = "It is a DRAW!";
} else { 
    winner = "Donald Trump";
}; 

// Populating the countryResults table

var countryResults = document.getElementById('countryResults');
var row = countryResults.children[0].children[0];

row.children[0].innerText = biden.name
row.children[1].innerText = biden.totalVotes
row.children[2].innerText = trump.name
row.children[3].innerText = trump.totalVotes
row.children[5].innerText = winner

console.log(winner);
