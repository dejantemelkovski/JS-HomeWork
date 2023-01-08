$('#button').click(function () {
    if ($('#Name').val()) {
      $('body').append(`<h1>Hello there ${$('#Name').val()}!</h1>`);
    }
  });