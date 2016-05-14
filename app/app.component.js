/*global ng, window*/
/**
 * Root component for angular2-sandbox
 *
 * @author  Elizabeth Linn
 * @namespace angular2sandbox
 * @param  angular2sandbox namespace
 * @return function
 */
(function (angular2sandbox) {
    'use strict';
    angular2sandbox.AppComponent = ng.core.Component({
        selector: 'angular2-sandbox',
        template: '<h1>Angular2 sandbox app</h1><p>You\'re welcome.</p>'
    }).Class({
        constructor: function () {
            console.log('Hi!');
        }
    });
}(window.angular2sandbox || (window.angular2sandbox = {})));
