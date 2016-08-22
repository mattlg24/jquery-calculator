console.log('I am connected');

// number event listener
$('.buttons').on('click', function(event) {
    let number = parseFloat($(event.target).text());
    $('#screen').append(number)
})

// operator event listener
$('.buttons').on('click', '.operator', function(event) {
    var operator = ($(event.target).text());
    if (operator !== '=') {
        $('#screen').append(operator)
    } else {
        // console.log(operator)
    }
})

// clear event listener
$('.buttons').on('click', '#clear', function() {
    location.reload()
})

// equals event listener
$('#equals').on('click', function() {
    let equation = $('#screen').text()
    $('#screen').empty()

    let multiplyOperator = equation.indexOf('x')
    let divideOperator = equation.indexOf('÷')
    let addOperator = equation.indexOf('+')
    let subtractOperator = equation.indexOf('-')
    let total = 0
    let number1 = ''
    let number2 = ''

    // if 'x' is in the equation, find number1 and multiply by number2 and append to screen
    if (multiplyOperator > 0) {
        number1 = parseInt(equation.substring(0, multiplyOperator))
        number2 = parseInt(equation.substring(multiplyOperator + 1))
        total = number1 * number2
        $('#screen').append(total)
    }

    // if '÷' is in the equation, find number1 and divide by number2 and append to screen. if divide by '0' return 'ERROR'
    if (divideOperator > 0) {
        number1 = parseInt(equation.substring(0, divideOperator))
        number2 = parseInt(equation.substring(divideOperator + 1))
        if (number2 === 0) {
            $('#screen').append().text('ERROR')
        } else {
            total = number1 / number2
            $('#screen').append(total)
        }
    }

    // if '+' is in the equation, find number1 and add number2 and append to screen
    if (addOperator > 0) {
        number1 = parseInt(equation.substring(0, addOperator))
        number2 = parseInt(equation.substring(addOperator + 1))
        total = number1 + number2
        $('#screen').append(total)
    }

    // if '-' is in the equation, find number1 and subtract number2 and append to screen
    if (subtractOperator > 0) {
        number1 = parseInt(equation.substring(0, subtractOperator))
        number2 = parseInt(equation.substring(subtractOperator + 1))
        total = number1 - number2
        $('#screen').append(total)
    }

});
