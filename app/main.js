/*global ng, document, window*/
/**
 * Bootstrap for angular2-sandbox
 *
 * @author  Elizabeth Linn
 * @namespace angular2sandbox
 * @param  angular2sandbox namespace
 * @return function
 */
(function (angular2sandbox) {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        ng.platformBrowserDynamic.bootstrap(angular2sandbox.AppComponent);
    });
}(window.angular2sandbox || (window.angular2sandbox = {})));
