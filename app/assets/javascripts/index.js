$(function() {

  var search_list = $(".left-contents");

  function appendTweet(tweet) {
    if(tweet.user_sign_in && tweet.user_sign_in.id == tweet.user_id){
      var current_user = `<div class="dropdown-item"><a rel="nofollow" data-method="delete" href="/tweets/${tweet.id}">削除</a></div>
                          <div class="dropdown-item"><a data-method="get" href="/tweets/${tweet.id}/edit">編集</a></div>
                          `
    } else {
      var current_user = ""
    }

    var html = `
                  <div class="card-group">
                    <div class="card">
                      <img class="card-img-top" src="${tweet.image}" alt="Card image cap">
                      <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <div class="dropdown-item"><a data-method="get" href="/tweets/${tweet.id}">詳細</a></div>
                          ${current_user}
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">${tweet.title}</h5>
                        <p class="card-text">${tweet.text}</p>
                        <p class="card-text"><small class="text-muted">${tweet.updated_at} ${tweet.nickname}</small></p>
                      </div>
                    </div>
                  </div>`
    search_list.append(html);
   }

   function appendErrMsgToHTML(msg) {
    var html = `<h3 class="top-title">${ msg }</h3>`
    search_list.append(html);
  }
              
  $(".search-input").on("keyup", function() {
    var input = $(".search-input").val();
    $.ajax({
      type: 'GET',
      url: '/',
      data: { q: input },
      dataType: 'json'
    })
    .done(function(tweets) {
      console.log(tweets)
      $(".left-contents").empty();
      $(".left-contents").append(`<h3 class="top-title">投稿一覧</h3>`);
      if (tweets.length !== 0) {
        tweets.forEach(function(tweet){
          appendTweet(tweet);
        });
      }
      else {
        appendErrMsgToHTML("一致するツイートがありません");
      }
    })
    .fail(function() {
      alert('error');
    });
  });
});