console.log('JS loaded');

var numberOfClicks = 0;

var onReady = function() {
  console.log('the doc is ready');

  //Create a <button> element on the DOM, 
  // you may do this in jQuery, or write it directly in the HTML code. 
  // Have the button text read "Generate".
  $('#create').on('click', generate);
  $('#container').on('click', '.deleteButton', deleteDiv);
  $('#container').on('click', '.swapButton', swapColor);
};

// creates a div
function generate ( ) {
  console.log('called generate');

  var $div = $('<div></div>');
  numberOfClicks += 1;

  // Inside the <div> element you created in the previous step, create a <p> element
  // that shows how many times you have clicked the button from the first step.
  // $container.append('<div><p>' + numberOfClicks + '</p></div>');
  $div.append('<p>' + numberOfClicks + '</p>')

  // Inside the <div> element you created in step two, 
  // append two <button> elements. 
  // The text of the two buttons should read "Swap" and "Delete".
  // $container.append('<button class="swapButton">Swap</button>');
  // $container.append('<button class="deleteButton">Delete</button>');
  $div.append('<button class="swapButton">Swap</button>');
  $div.append('<button class="deleteButton">Delete</button>');

  // In a CSS file, any <div> created using the 
  // "Generate" button should have a Red background-color.
  $div.addClass('color-div');

  // Using jQuery, append a <div> element when you click the button.
  $('#container').append($div);
}

function deleteDiv () {
  console.log('called deleteDiv');
// Clicking a "Delete" <button> should remove 
// its parent <div> container (and all of its contents).
$(this).parent().remove();
}

function swapColor ( ) {
  console.log('called swapColor');
  // Clicking a "Swap" < button > should change its parent background - color from Red to Yellow.
  // Clicking a "Swap" <button> again should change its parent background-color from Yellow back to Red
  if (!$(this).parent().hasClass('yellow')) {
    $(this).parent().addClass('yellow');
    $(this).parent().css('background-color', 'yellow');
  } else {
    $(this).parent().removeClass('yellow');
    $(this).parent().css('background-color', 'red');
  }
}

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(onReady);
