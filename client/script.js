var $ = require('jquery');

$(function() {
  $(":button").on('click', addTodo);
  $(":text").on('keypress', function(e) {
    var key = e.keyCode;
    if( key == 13 || key == 169 ) {
      addTodo();
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });
  $('input').on('click', function() {
    $(this.nextElementSibling).toggleClass('checked');
  });
});

var addTodo = function() {
  var text = $('#add-todo-text').val();
  $.ajax({
    url: '/api/todos',
    type: 'POST',
    data: {
      text: text
    },
    dataType: 'json',
    success: function(data) {
      var todo = data.todo[0];
      var newLiHtml = todoTemplate(todo);
      $('form + ul').append(newLiHtml);
      $('#add-todo-text').val('');
    }
  });
};
