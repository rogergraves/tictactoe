$(document).ready(function(){
  // Put your Javascript code below this line.


  // LISTENERS -- these functions trigger when users do things
  $('.tic').click(function(e) {
    // This will run whenever anyone clicks on something with a 'tic' class.

    // This shows the ID of which of the buttons got clicked
    console.log("This was clicked:", e.target.id);
  });
});