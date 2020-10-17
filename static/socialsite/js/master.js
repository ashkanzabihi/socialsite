var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    canvasWidth = (window.innerWidth || document.documentElement.clientWidth),
    canvasHeight = (window.innerHeight || document.documentElement.clientHeight),
    requestAnimationFrame = window.requestAnimationFrame || 
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

var persons = [],
    numberofFirefly = 30,
    birthToGive = 25;
        