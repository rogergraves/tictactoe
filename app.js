$(document).ready(function(){
  // Put your Javascript code below this line.


  // LISTENERS -- these functions trigger when users do things
  $('.tic').click(function(e) {
    // This will run whenever anyone clicks on something with a 'tic' class.

    const cell = $(e.target);
    record_move_if_allowed(cell);

    // This shows the ID of which of the buttons got clicked
    console.log("This was clicked:", e.target.id);
  });

  function record_move_if_allowed(cell) {
    if(cell.html() === '#') {
      // All good!
      cell.html('X');
      dumb_computer_move();
    } else {
      // Nah... They clicked on something that already had an X or an O
      alert('No way hombre... That is CHEATING!');
    }
  }

  function reset_board_with_pound_signs() {
    $('#0').html('#');
    $('#1').html('#');
    $('#2').html('#');
    $('#3').html('#');
    $('#4').html('#');
    $('#5').html('#');
    $('#6').html('#');
    $('#7').html('#');
    $('#8').html('#');
    $('#9').html('#');
  }

  $('#reset').click(function(e) {
    // This will get triggered every time someone clicks on reset
    reset_board_with_pound_signs();
  });

  function dumb_computer_move() {
    let i = 0;
    while(i <= 10) {
      const this_cell = $('#'+i);

      if(this_cell.html() === '#') {
        // We could click on this one
        if(Math.random() > .3) {
          this_cell.html('O'); // Let's choose this one!!!!
          break; // We're outta here
        }
      }

      ++i; // Increases the value if i by +1
    }
  }
});
