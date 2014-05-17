

//window.Questso = Ember.Application.create();


$(function(){

  $(".icon-upvote").click(function(){
    var id = $(this).data('id');
    $.ajax({
      type: 'PUT',
      url: '/posts/' + id + '/upvote',
      success: function(data){
        $(".vote-counter").html(data['vote_count'])
      }
    });
  });

  $(".icon-downvote").click(function(){
    var id = $(this).data('id');
    $.ajax({
      type: 'PUT',
      url: '/posts/' + id + '/downvote',
      success: function(data){
        $(".vote-counter").html(data['vote_count'])
      }
    });
  });

  $(".icon-delete-post").click(function(){
    var id = $(this).data("id");
    $.ajax({
      type: 'DELETE',
      url: '/posts/' + id,
      success: function(data){
        document.location.href = '/';
      }
    });
  });
});
