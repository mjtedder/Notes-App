// Execute after pages loads
$(document).ready(function () {

// Setting global variables
const noteTitle = $('.card-header')
const noteContent = $('.card-body')
const defaultTitle = 'What\'s on your mind today?'
const defaultContent = 'Let\'s write about it!'

// Use localStorage to display defualt values
noteTitle.text(localStorage['title'] || defaultTitle)
noteContent.text(localStorage['body'] || defaultContent)










})