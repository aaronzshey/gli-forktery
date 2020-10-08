//import { uniqueVar, uniqueVar2, uniqueVar3 }from 'js/background.mjs'

//console.log(uniqueVar)

window.onload = function() {
  var close = document.getElementById("close")
var modal = document.getElementById("modal-bg")
var open = document.getElementById("loginlink")
  var styleTarget = document.getElementsByTagName("link")[0];
  //script[0] is an unpkg link
  var paperTarget = document.getElementsByTagName("script")[1];
  console.log(paperTarget);
  console.log(styleTarget);

  //console.log(jsTarget.src);
  //console.log(paperTarget.src);
  //console.log(styleTarget.href);
  var newScript = document.createElement("script");

  //rewrite this, ffs
 /* theme.addEventListener("click", () => {
    console.log("click");
    if (styleTarget.href="styles/homestyles.css"){

    } else if (styleTarget.href="styles/darkhome.css"){
      
    }

  }); /*
  //change icon, use font awesome
  /*
    paperTarget.remove();
    newScript.src = "js/darkbackground.js";
    document.body.appendChild(newScript);
*/
  close.onclick = function(){
  modal.style.display = "none"
}
  
  open.onclick = function (){
    modal.style.display = "block"
  }
};



