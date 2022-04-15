

function disable(){
  map.setOptions({
    zoomControl: true,
    gestureHandling: 'greedy'
  })
}




function animation(){
    document.getElementById("container").innerHTML +="<h1 class=\"animation\">&nbsp &nbsp &nbsp P R A G Y A N &nbsp &nbsp &nbsp P A R A M I T A &nbsp &nbsp &nbsp N A Y A K</h1>";
    var spanText = function spanText(text) {
        var string = text.innerText;
        var spaned = '';
        for (var i = 0; i < string.length; i++) {
          if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
          else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
        }
        text.innerHTML = spaned;
      }
      
      var headline = document.querySelector("h1");
      spanText(headline);
      
      let animations = document.querySelectorAll('.animation');
      
      animations.forEach(animation => {
        let letters = animation.querySelectorAll('span');
        letters.forEach((letter, i) => {
          letter.style.animationDelay = (i * 0.15) + 's';
        })
      })
}

function firstpage(){
  window.location = "second.html";
}
