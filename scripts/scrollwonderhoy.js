window.onload = function() {
    var img = document.getElementById('scrolling-gif');
    var div = document.getElementById('bottom-wonderhoy');
    
    var currentPosition = 0; // initial position
    var initialScrollSpeed = 6; // initial scroll speed
    var scrollSpeed = initialScrollSpeed; // current scroll speed
    
    function scrollImage() {
      currentPosition += scrollSpeed; // increment position based on current scroll speed
      img.style.top = -currentPosition + 'px'; // adjust top position
      
      // calculate new scroll speed with deceleration effect
      if (currentPosition < (img.clientHeight - window.innerHeight - 30)) {
        scrollSpeed = Math.max(1, initialScrollSpeed - currentPosition / 200); // adjust the divisor for more/less deceleration
        window.requestAnimationFrame(scrollImage);
      } else {
        div.style.display = 'block'; // show the bottom div
        setTimeout(function() {
          div.style.opacity = 1; // gradually increase opacity
        }, 200); // adjust delay as needed
      }
    }
    
    disableScroll(); // disable scrolling before animation starts
    
    // function to dynamically change the gif and font size based on viewport width
    function adaptWidth() {
      var viewportWidth = window.innerWidth;
      if (viewportWidth < 1087) {
        img.src = './assets/night-street-sakura.gif'; 
        var scaledFontSize = String(0.3 * viewportWidth) + 'px';
        img.style.height = '100vh';
        div.style.fontSize = scaledFontSize;
        div.style.left = '50%';
      } else {
        img.src = './assets/night-street-sakura-short.gif';
        div.style.fontSize = '1000%';
      }
    }
    
    // call adaptWidth initially and on window resize
    adaptWidth();
    window.addEventListener('resize', adaptWidth);
    
    // start scrolling function after a short delay 
    setTimeout(function() {
      scrollImage();
    }, 1000); // start after 1 second
    
    function disableScroll() {
      // prevent scrolling using modern approach for most browsers
      document.body.style.overflow = 'hidden';
      // prevent scrolling for older browsers
      document.documentElement.style.overflow = 'hidden';
      // scroll to top to ensure user doesnt accidentally see any part of the page
      window.scrollTo(0, 0);
    }
    
    function enableScroll() {
      // enable scrolling by resetting overflow to default
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  };
  