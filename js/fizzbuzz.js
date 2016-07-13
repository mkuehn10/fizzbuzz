$(function() {

    var divByThree;
    var divByFive;
    var appendHTML;

    for (var i = 1; i <= 100; i++) {

        divByThree = (i % 3 === 0);
        divByFive = (i % 5 === 0);

        if (divByThree && divByFive) {
            appendHTML = 'fizzbuzz';
        } else if (divByThree) {
            appendHTML = 'fizz';
        } else if (divByFive) {
            appendHTML = 'buzz';
        } else {
            appendHTML = i;
        }

        $('.container').append('<p class="num">' + appendHTML + '</p>');
    }
});