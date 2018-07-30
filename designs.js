const color = $('#colorPicker');
const height = $('#inputHeight');
const width = $('#inputWidth');
const canvas = $('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Creates rows for the grid
  for (let x = 1; x <= height.val(); x++) {
    canvas.append('<tr></tr>');
  };
  // Creates squares of the grid using a while loop to satisfy the project rubric
  let y = 1
  while (y <= width.val()) {
    $('tr').append('<td></td>');
    y++;
  };
};

// Creates an event listener for user submission
$('#sizePicker').submit(function(event) {
//   Erase any previously drawn grid
  $('#pixelCanvas').empty();
//   Draws new Grid
  makeGrid();
  event.preventDefault();
});

// Creates an event listener for user clicks on the canvas, changes color of tile
canvas.on('click', 'td', function(event) {
  let chosenColor = color.val();
  event.preventDefault();
  if ($(this).css('background-color') != 'rgb(227, 227, 227)') {
    $(this).css('background-color', 'rgb(227, 227, 227)');
  } else {
    $(this).css('background-color', chosenColor);
  }
});
