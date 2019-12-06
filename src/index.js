import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function () {
  $("li:even").css('backgroundColor', 'pink')
	$("li:odd").css('backgroundColor', 'lightblue') 
})

class Person {
  static info = 'aaa'
}

console.log(Person.info)