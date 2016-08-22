console.log('I am connected');

// number event handler
$('.buttons').on('click', function(event) {
    let number = parseFloat($(event.target).text());
    $('#screen').append(number)
})

// operator event handler
$('.buttons').on('click', '.operator', function(event) {
    var operator = ($(event.target).text());
    if (operator !== '=') {
        $('#screen').append(operator)
    } else {
        console.log(operator)

    }
})

// clear event listener
$('.buttons').on('click', '#clear', function() {
    location.reload()
})

$('#equals').on('click', function() {
    console.log('hi');
    let equation = $('#screen').text()
    $('#screen').empty()

    let multiplyOperator = equation.indexOf('x')
    let divideOperator = equation.indexOf('÷')
    let addOperator = equation.indexOf('+')
    let subtractOperator = equation.indexOf('-')
    let total = 0
    let number1 = ''
    let number2 = ''

    if (multiplyOperator > 0) {
        number1 = parseInt(equation.substring(0, multiplyOperator))
        number2 = parseInt(equation.substring(multiplyOperator + 1))
        total = number1 * number2
        $('#screen').append(total)
    }

    if (divideOperator > 0) {
        number1 = parseInt(equation.substring(0, multiplyOperator))
        number2 = parseInt(equation.substring(multiplyOperator + 1))
        total = number1 / number2
        $('#screen').append(total)
    }

});
