(function (global) {
    "use strict";
    var app = global.app = global.app || {};
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        app.kMobile = new kendo.mobile.Application(document.body, { skin: "nova", initial: 'views/home.html' });
    };
    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };
    
    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )(window);