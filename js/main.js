var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
	  var navRight = document.getElementById("nav");
	  var navLeft = document.getElementById("nav-left");
	  var nav = navRight !== null ? navRight : navLeft;

	  var button = document.getElementById("menu");
	  var site = document.getElementById("wrap");
	  
	  if (nav.className == "menu-open" || nav.className == "menu-open-left") {
	  	  nav.className = "";
	  	  button.className = "";
	  	  site.className = "";
	  } else if (reverse !== null) {
	  	  nav.className += "menu-open-left";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	  } else {
	  	  nav.className += "menu-open";
	  	  button.className += "btn-close";
	  	  site.className += "fixed";
	    }
	}

// Ensures backward compatibility with IE old versions
function menuClick() {
	if (document.addEventListener && icon !== null) {
		icon.addEventListener('click', toggle);
	} else if (document.attachEvent && icon !== null) {
		icon.attachEvent('onclick', toggle);
	} else {
		return;
	}
}

menuClick();

var test = document.getElementById('Test');
function testJs(){
  alert('ok')
}

function init() {

    // DOM node
    const btn = document.querySelector(".floating-btn");
    
    // handle window scroll
    function handlScroll() {
        if (window.pageYOffset > 300) {
            btn.style.transform = "scale(1)";
        } else {
            btn.style.transform = "scale(0)";
        }
    }
    
    // attach scroll to window
    window.addEventListener("scroll", handlScroll);
    
    // handle reset scroll
    function scrollUp() {
        window.scrollTo(0, 0);
    }
    
    // reset window scroll
    btn.addEventListener("click", scrollUp);
}

// invoke init when DOM loaded
window.addEventListener("DOMContentLoaded", init);