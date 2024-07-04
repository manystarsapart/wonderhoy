window.onload = function() {
    var img = document.getElementById('scrolling-gif');
    var div = document.getElementById('bottom-wonderhoy');
    
    var currentPosition = 0; // initial position
    var scrollSpeed = 4; // adjust scroll speed here (increment position)
    
    function scrollImage() {
      currentPosition += scrollSpeed; // increment position based on scroll speed
      img.style.top = -currentPosition + 'px'; // adjust top position
      
      // check if the entire image has scrolled past its natural height
      if (currentPosition < (img.clientHeight - window.innerHeight - 30)) {
        window.requestAnimationFrame(scrollImage);
      } else {
        div.style.display = 'block'; // show the bottom div
        setTimeout(function() {
          div.style.opacity = 1; // gradually increase opacity
        }, 1000); // can adjust as needed
      }
    }
    
    disableScroll(); // disable scrolling before animation starts
    
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
  