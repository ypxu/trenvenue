/**
  A class used to handle filtering routes such as latest, hot, read, etc.

  TODO: Migrate UI to use ember.

  @class FilteredListRoute
  @extends Questso.Route
  @namespace Questso
  @module Questso
**/
Questso.FilteredListRoute = Questso.Route.extend({

  redirect: function() { Questso.redirectIfLoginRequired(this); },

  exit: function() {
    this._super();

    var listController = this.controllerFor('list');
    listController.set('canCreateTopic', false);
    listController.set('filterMode', '');
  },

  renderTemplate: function() {
    this.render('listTopics', {
      into: 'list',
      outlet: 'listView',
      controller: 'listTopics'
    });
  },

  setupController: function() {
    var listController = this.controllerFor('list'),
        listTopicsController = this.controllerFor('listTopics');

    listController.set('filterMode', this.filter);

    var listContent = listTopicsController.get('model');
    if (listContent) {
      listContent.set('loaded', false);
    }

    listController.set('category', null);
    listController.load(this.filter).then(function(topicList) {
      listController.set('canCreateTopic', topicList.get('can_create_topic'));
      listTopicsController.set('model', topicList);
      Questso.FilteredListRoute.scrollToLastPosition();
    });
  }
});

Questso.FilteredListRoute.reopenClass({
  scrollToLastPosition: function() {
    var scrollPos = Questso.Session.currentProp('topicListScrollPosition');
    if (scrollPos) {
      Em.run.next(function() { $('html, body').scrollTop(scrollPos); });
      Questso.Session.currentProp('topicListScrollPosition', null);
    }
  }
});

Questso.ListController.filters.forEach(function(filter) {
  Questso["List" + (filter.capitalize()) + "Route"] = Questso.FilteredListRoute.extend({ filter: filter });
});
