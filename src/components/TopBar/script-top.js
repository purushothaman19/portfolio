
 document.fn.moveIt = function(){
    var documentwindow = document(window);
    var instances = [];
    
    document(this).each(function(){
      instances.push(new moveItItem(document(this)));
    });
    
    window.addEventListener('scroll', function(){
      var scrollTop = documentwindow.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }, {passive: true});
  }
  
  var moveItItem = function(el){
    this.el = document(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };
  
  moveItItem.prototype.update = function(scrollTop){
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  };
  
  // Initialization
  document(function(){
    document('[data-scroll-speed]').moveIt();
  });