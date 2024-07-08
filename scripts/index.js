window.onload = function() {
    var img = document.getElementById('scrolling-gif');
    var div = document.getElementById('bottom-wonderhoy');
    var navButton = document.getElementById('nav-button')
    var navButtonAnchor = document.getElementById('nav-button-anchor')
    
    var currentPosition = 0; 
    var initialScrollSpeed = 6; 
    var scrollSpeed = initialScrollSpeed;
    
    function scrollImage() {
      currentPosition += scrollSpeed; // increment position 
      img.style.top = -currentPosition + 'px';
      

      if (currentPosition < (img.clientHeight - window.innerHeight - 30)) {
        scrollSpeed = Math.max(1, initialScrollSpeed - currentPosition / 200); // change 200 for faster deceleration
        window.requestAnimationFrame(scrollImage);
      } else {
        div.style.display = 'block'; // show wonderhoy after 0.2s
        setTimeout(function() {
          div.style.opacity = 1; 
        }, 200); 

        setTimeout(function() {
          navButton.style.display = 'block'; // show button for links after 0.3s
          setTimeout(function() {
            navButton.style.opacity = 1; 
          }, 200); 
        }, 1000);


      }
    }
    
    disableScroll(); // before animation starts
    
    // change gif and font size based on viewport width
    function adaptWidth() {
      var viewportWidth = window.innerWidth;
      if (viewportWidth < 600) {
        img.src = './assets/night-street-sakura.gif'; 
        var scaledFontSize = String(0.3 * viewportWidth) + 'px';
        img.style.height = '100vh';
        div.style.fontSize = scaledFontSize;
        div.style.left = '50%';
        navButton.style.fontSize = '25px';
        navButtonAnchor.style.bottom = '5%';

      } else {
        img.src = './assets/night-street-sakura-short.gif';
        div.style.fontSize = '1200%';
      }
    }
    
    adaptWidth();
    window.addEventListener('resize', adaptWidth); // call again on window resize
    
    // start scrolling
    setTimeout(function() {
      scrollImage();
    }, 300); // start after 0.3s
    
    function disableScroll() {
      document.body.style.overflow = 'hidden'; // for new browsers
      document.documentElement.style.overflow = 'hidden'; // for old browsers
    }
    
    // function enableScroll() { // reset overflow
    //   document.body.style.overflow = '';
    //   document.documentElement.style.overflow = '';
    // }
  };
  