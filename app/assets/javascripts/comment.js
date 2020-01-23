$(function(){
  function buildHTML(comment){
    var html = `<div class="comment_text" id="comment${comment.comment_id}">
                  <div class="display">
                    <strong><a href=/users/${comment.user_id}>${comment.user_name}</a>：</strong>
                    <a class="delete" href=/tweets/${comment.tweet_id}/comments/${comment.comment_id}>削除</a>
                  </div>
                  <div class="comment_mac">
                    ${comment.text}
                  </div>
                </div>`
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comments').append(html);
      $('.textbox').val('');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  });

  $(document).on('click','.delete', function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    $.ajax({
      url: href,
      type: "DELETE",
      dataType: 'json'
    })
    .done(function(comment){
      $(`#comment${comment.comment_id}`).remove();
    })
    .fail(function(){
      alert('error');
    })
  })
})