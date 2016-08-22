console.log('I am connected');

// number event handler
$('.buttons').on('click', function(event) {
let number1 = parseFloat($(event.target).text());
$('#screen').append(number1)
})

// operator event handler
$('.buttons').on('click', '.operator',function(event) {
  let operator = ($(event.target).text());
  $('#screen').append(operator)
  console.log(operator);
})

// clear event listener
$('.buttons').on('click', '#clear', function() {
  location.reload()
})


$('#equals').on('click', function() {
let equation = $('#screen').text()


  let multiplyOperator = equation.includes('X')
  let divideOperator = equation.includes('÷')
  let addOperator = equation.includes('+')
  let subtractOperator = equation.includes('-')

  if (multiplyOperator === true) {
  
  }



})
