// var promise = Promise.resolve('SECRET VALUE');
//
//
//    // Likewise...
//
//    var promise = new Promise(function (fulfill, reject) {
//      reject(new Error('SECRET VALUE'));
//    });
//
//    var promise = Promise.reject(new Error('SECRET VALUE'));
//
// ## Task
//
// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject

var promise = Promise.resolve('SECRET VALUE');

var promise = new Promise(function(fulfill, reject) {

    reject(new Error('SECRET VALUE'));
});

var promise = Promise.reject(new Error('SECRET VALUE'));
console.log(promise);
