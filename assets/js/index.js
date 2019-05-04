// Execute after pages loads
$(document).ready(function () {

// Setting global variables
const noteTitle = $('#title')
const noteContent = $('#content')
const defaultTitle = 'What\'s on your mind today?'
const defaultContent = 'Let\'s write about it!'


// Use localStorage to display values
// localStorage.setItem('title', defaultTitle)
noteTitle.text(localStorage.getItem('title'))
// localStorage.setItem('content', defaultContent)
noteContent.text(localStorage.getItem('content'))

// console.log(localStorage)


// Save user input function
 let save = () => {
    let title = $('#title').text()
    localStorage.setItem('title', title)
    let content = $('#content').text()
    localStorage.setItem('content', content)
}

// Retrieve localStorage items
localStorage.getItem('test')

// Click event that deletes a note
 let remove = () => {
     $('#title').remove();
 }

// Call function everytime the user makes a keystroke
document.onkeyup = () => save()
document.onkeyup = () => save()
$(document).on('click', '#delete', function() {
    $('.card').hide();
})







})