

//window.Questso = Ember.Application.create();

$(function(){

  $(".icon-upvote").click(function(){
    var id = $(this).data('id')
    $.ajax({
      type: 'PUT',
      url: '/posts/' + id + '/upvote.json',
      success: function(data){
        $(".vote-counter-" + id).html(data['vote_count'])
      }
    });
  });

  $(".icon-downvote").click(function(){
    var id = $(this).data('id');
    $.ajax({
      type: 'PUT',
      url: '/posts/' + id + '/downvote.json',
      success: function(data){
        $(".vote-counter-" + id).html(data['vote_count'])
      }
    });
  });

  $(".icon-delete-post").click(function(){
    var id = $(this).data("id");
    $.ajax({
      type: 'DELETE',
      url: '/posts/' + id + '.json',
      success: function(data){
        document.location.href = '/';
      }
    });
  });

  $(".facebook-share").click(function(){
    var url = $(this).data(url) || '';
    if(url) {
      share_to_facebook(url, 550, 400)
    }
  });
});


function share_to_facebook(url, width, height) {
        //Allow for borders.
    var leftPosition = (window.screen.width / 2) - ((width / 2) + 10), 
        //Allow for title and status bars.
        topPosition = (window.screen.height / 2) - ((height / 2) + 50),
        windowFeatures = "status=no,height=" + height 
      + ",width=" + width + ",resizable=yes,left=" 
      + leftPosition + ",top=" + topPosition + ",screenX=" 
      + leftPosition + ",screenY=" + topPosition 
      + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open("https://www.facebook.com/dialog/share?" + 
      "app_id=471240789685989&display=popup" +
     "&href=" + encodeURIComponent(url) +
     "&redirect_uri=http://trenvenue.com/close",'name',windowFeatures);
}
