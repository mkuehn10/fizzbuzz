$(function() {

    'use strict';

    function fizzBuzzify(num) {
        var divByThree;
        var divByFive;
        var appendHTML;

        for (var i = 1; i <= num; i++) {
            console.log(i);
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
    }


    $('#fizzbuzz-form').submit(function(event) {
        event.preventDefault();
        $('.container').html('');
        var numToFizzBuzz = $('#fizzbuzz-number').val();

        console.log(parseInt(numToFizzBuzz) == numToFizzBuzz);
        if (parseInt(numToFizzBuzz) == numToFizzBuzz) {
            $('#fizzbuzz-number').val(parseInt(numToFizzBuzz));
            $('.error-message').hide();
            $('#fizzbuzz-number').removeClass('red-border');
            fizzBuzzify(numToFizzBuzz);
        } else {
            $('.error-message').show();
            $('#fizzbuzz-number').addClass('red-border');
        }

    });

    $('#fizzbuzz-number').keypress(function(event) {
        if (event.keyCode === 13) {
            $('#fizzbuzz-form').submit();
            return false;
        }
    });

    $('.close').click(function() {
        $('.alert').hide();
    });
});