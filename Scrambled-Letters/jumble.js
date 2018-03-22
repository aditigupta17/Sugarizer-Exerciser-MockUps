var dictionary = [
    "TIGER",
    "LION",
    "BEAR"
]; //Words taken as input from the super user go into the dictionary
var myWord;

function scramble(word) {
    return word.split('').sort(function(){ return Math.random() - 0.5 }).join('');
}

function chooseWord() {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function printWord(word) {
    var html = "";
    for (var i = 0; i < word.length; i++) {
        html += '<li class="tile">' + word[i] + '</li>'
    }
    $('.word').html(html);
}

function startGame() {
    myWord = chooseWord();
    
    var scrambled = scramble(myWord);
    
    while (scrambled == myWord) {
        scrambled = scramble(myWord);
    }
    
    printWord(scramble(myWord));
}

$(function(){    
    startGame();
    
    $('.word').sortable({
        update: function (e, ui) {
            console.log(myWord, $('.tile').text());
            if (myWord === $('.tile').text()) {
                var playAgain = confirm("You win! Play again?");
                if (playAgain) {
                    startGame();
                }                    
            }
        }
    });  
});
