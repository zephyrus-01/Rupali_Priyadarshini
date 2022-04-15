

function disable(){
  map.setOptions({
    zoomControl: true,
    gestureHandling: 'greedy'
  })
}




function animation(){
    document.getElementById("container").innerHTML +="<h1 class=\"animation\">&nbsp R U P A L I &nbsp P R I Y A D A R S H I N I &nbsp</h1>";
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
          letter.style.animationDelay = (i * 0.20) + 's';
        })
      })
}

function firstpage(){
  window.location = "second.html";
}
function secondpage(){
  window.location = "third.html";
}
