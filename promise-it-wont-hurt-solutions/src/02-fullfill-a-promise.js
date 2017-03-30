 require('es6-promise');

 'use strict';

    var promise = new Promise(function (fulfill, reject) {
      function execute() {
          setTimeout(execute, 300);
      }
      then(console.log('FULFILLED'));
    });
