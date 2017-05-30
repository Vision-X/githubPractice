youGay();
function youGay() {
  alert('You are gay Michael');
}

$('#button').on('click', appendMess);

function appendMess() {
  var content = "You're gay";
  $('#message').append(`
    <p>${content}</p>`
  );
}
