//
//= require ng2-app/vendor/es6-shim/es6-shim
//= require ng2-app/vendor/reflect-metadata/Reflect
//= require ng2-app/vendor/systemjs/dist/system.src
//= require ng2-app/vendor/zone.js/dist/zone

System.import('assets/ng2-app/system-config.js').then(function () {
    System.import('main');
}).catch(console.error.bind(console));