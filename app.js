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
      detect_a_winner();
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

  function detect_a_winner() {
    let the_winner = '#';

    if($('#7').html() === $('#8').html() === $('#9').html() !== '#') { // across top
      the_winner = $('#7').html();
    } else if($('#4').html() === $('#5').html() === $('#6').html() !== '#') { // across middle
      the_winner = $('#4').html();
    } else if($('#1').html() === $('#2').html() === $('#3').html() !== '#') { // across bottom
      the_winner = $('#1').html();
    } else if($('#1').html() === $('#4').html() === $('#7').html() !== '#') { // down left
      the_winner = $('#1').html();
    } else if($('#2').html() === $('#5').html() === $('#8').html() !== '#') { // down middle
      the_winner = $('#2').html();
    } else if($('#3').html() === $('#6').html() === $('#9').html() !== '#') { // down right
      the_winner = $('#3').html();
    } else if($('#7').html() === $('#5').html() === $('#3').html() !== '#') { // diagonal
      the_winner = $('#7').html();
    } else if($('#1').html() === $('#5').html() === $('#9').html() !== '#') { // diagonal
      the_winner = $('#1').html();
    }

    if(the_winner === 'X') {
      alert('Congrats!!! You beat a dumb computer! Woohoo!');
      reset_board_with_pound_signs()
    } else if(the_winner === 'O') {
      alert('Uh... um... yeah, that happened.')
      reset_board_with_pound_signs()
    }
  }
});
