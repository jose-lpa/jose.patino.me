(function() {
    var app = angular.module('site', []);

    app.directive('contentPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'content_panels.html',
            controller: function() {
                this.panel = 1;

                this.selectPanel = function(setPanel) {
                    this.panel = setPanel;
                };

                this.isSelected = function(checkPanel) {
                    return this.panel == checkPanel;
                };
            },
            controllerAs: 'content'
        };
    });
})();
