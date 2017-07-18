$(document).ready(function(){
  function retrieveData(){
    var payload = null;
    $.get('https://www.reddit.com/r/aww/.json').done(function(json) {
      payload = json.data.children;
      displayData(payload);
      console.log(json)
  });
};

function displayData(payload){
  payload.forEach(function(post){
    console.log(post);

    $('.container').append('<div class="box"><h2 id="title">' + post.data.title + '</h2><p id="user">Username: ' + post.data.author + '<p> '+ post.data.num_comments + ' Comments</p>' + '<img class="img" src=' + post.data.thumbnail + '></div><br/>');

  });
}

retrieveData();


});
