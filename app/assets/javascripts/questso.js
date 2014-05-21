

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
});
