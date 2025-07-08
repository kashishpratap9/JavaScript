// Immediately Invoked function expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a common design pattern used to create a private scope for variables and functions, preventing them from polluting the global namespace.


(function hello(){
    console.log("Hello, World!");   
})();

(() => {
    console.log("Hello, KASHISH!");   
})();

