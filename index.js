function writeCards(names) {
    var messages = [];
    for (var i = 0; i<names.length;i++) {
        var message ='Thank you, ' + names[i] + ', for the wonderful surprise gift!';
        messages.push(message);
    }
return messages;
}

function countDown(number) {
    while(number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}