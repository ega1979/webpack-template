import $ from 'jquery';
import '../scss/style.scss'

const message = 'Hello webpack!!'
$('#container').text(message)
$('#container').css('color', '#ccc000')
console.log(message)