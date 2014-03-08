

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

});
