// Think about application structure a bit, very similar to traffic light exercise
// Look at how we're taking functions and calling them from event handlers - common pattern in JS
function menuOneShow(){
    document.getElementById('menu-1').classList.add('show');    
  }
  

  function menusHide() {
    document.getElementById('menu-1').classList.remove('show');
  }

  document.getElementById('menu-1-button').addEventListener('mouseover', menuOneShow);
  document.getElementById('menu-1-button').addEventListener('mouseleave', menusHide);