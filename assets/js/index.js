// Execute after pages loads
$(document).ready(function () {

// Setting global variables
const noteTitle = $('.card-header')
const noteContent = $('.card-body')
const defaultTitle = 'What\'s on your mind today?'
const defaultContent = 'Let\'s write about it!'


// Use localStorage to display values
// localStorage.setItem('title', defaultTitle)
noteTitle.text(localStorage.getItem('title'))
// localStorage.setItem('content', defaultContent)
noteContent.text(localStorage.getItem('content'))

console.log(localStorage)


// Create note function
 let save = () => {
    let title = $('.card-header').text()
    localStorage.setItem('title', title)
    let content = $('.card-body').text()
    localStorage.setItem('content', content)
}

// Retrieve localStorage items
localStorage.getItem('test')

// Call function everytime the user makes a keystroke
document.onkeyup = () => save()
document.onkeyup = () => save()








})