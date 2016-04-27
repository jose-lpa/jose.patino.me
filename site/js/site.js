(function() {
    var app = angular.module('site', []);

    app.controller('ContentController', function() {
        this.panel = 1;

        this.selectPanel = function(setPanel) {
            this.panel = setPanel;
        };

        this.isSelected = function(checkPanel) {
            return this.panel == checkPanel;
        };
    });
})();
