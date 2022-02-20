
// console.log("Hi");


// window.onload = function() {
// const nameLetter = document.getElementsByClassName('name');


// function playAudio() {
    
//     const audio = new Audio();
//     audio.src = "./aud1.wav";
//     const audioPromise = audio.play();

//     // if (audioPromise !== undefined) {
//     //     audioPromise
//     //         .then(_ => {
//     //             // Automatic playback started!
//     //             // Show playing UI.
//     //             console.log("audio played auto");
//     //         })
//     //         .catch(error => {
//     //             // Auto-play was prevented
//     //             // Show paused UI.
//     //             console.log("playback prevented");
//     //         });
//     // }
// }

// for (var i = 0; i < nameLetter.length; i++) {
//     nameLetter[i].addEventListener('mouseover', playAudio, false);
// }

// }

// document.ready(function() {

// document.fn.moveIt = function(){
//     var documentwindow = document(window);
//     var instances = [];
    
//     document(this).each(function(){
//       instances.push(new moveItItem(document(this)));
//     });
    
//     window.addEventListener('scroll', function(){
//       var scrollTop = documentwindow.scrollTop();
//       instances.forEach(function(inst){
//         inst.update(scrollTop);
//       });
//     }, {passive: true});
//   }
  
//   var moveItItem = function(el){
//     this.el = document(el);
//     this.speed = parseInt(this.el.attr('data-scroll-speed'));
//   };
  
//   moveItItem.prototype.update = function(scrollTop){
//     this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
//   };
  
//   // Initialization
//   document(function(){
//     document('[data-scroll-speed]').moveIt();
//   });

// });