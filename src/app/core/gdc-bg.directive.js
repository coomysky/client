(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('gdcBg', gdcBg);

  gdcBg.$inject = ['$state'];

  function gdcBg($state) {
    return {
      link: function(scope, el, attrs) {

        updateClass($state.current, el, attrs);

        scope.$on('$stateChangeSuccess', function(event, toState) {
          updateClass(toState, el, attrs);
        });
      }
    };

    function updateClass(currentState, el, attrs) {
      var isActive = currentState.name === 'home';
      if (isActive) {
        el.addClass('-home');
      } else {
        el.removeClass('-home');
      }
    }
  }
})();
