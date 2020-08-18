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
      setTimeout(dumb_computer_move, 200);
      setTimeout(detect_a_winner, 300);
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

    if(is_a_match($('#0'), $('#1'), $('#2'))) { // across top
      the_winner = $('#0').html();
    } else if(is_a_match($('#3'), $('#4'), $('#5'))) { // across middle
      the_winner = $('#3').html();
    } else if(is_a_match($('#6'), $('#7'), $('#8'))) { // across bottom
      the_winner = $('#6').html();
    } else if(is_a_match($('#0'), $('#3'), $('#6'))) { // down left
      the_winner = $('#0').html();
    } else if(is_a_match($('#1'), $('#4'), $('#7'))) { // down middle
      the_winner = $('#1').html();
    } else if(is_a_match($('#2'), $('#5'), $('#8'))) { // down right
      the_winner = $('#2').html();
    } else if(is_a_match($('#0'), $('#4'), $('#8'))) { // diagonal
      the_winner = $('#0').html();
    } else if(is_a_match($('#2'), $('#4'), $('#6'))) { // diagonal
      the_winner = $('#2').html();
    }

    if(the_winner === 'X') {
      alert('Congrats!!! You beat a dumb computer! Woohoo!');
      reset_board_with_pound_signs()
    } else if(the_winner === 'O') {
      alert('Uh... um... yeah, that happened.')
      reset_board_with_pound_signs()
    }
  }
  
  function is_a_match(cell1, cell2, cell3) {
    if(cell1.html() === cell2.html() && cell2.html() === cell3.html() && cell3.html() !== '#') {
      return(true);
    } else
      return(false);
  }
});
