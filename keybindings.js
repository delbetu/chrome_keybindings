let keyCodes =  {
  g: 103,
  G: 71
}

$(document).on("keypress", function (e) {
  if ( e.target.nodeName == 'INPUT' || e.target.nodeName == "TEXTAREA" ) return; // when user is writing on textbox

  switch (e.which) {
    case keyCodes.g: // scroll to top on pressing "g" {
      window.scroll({
        top: 100,
        left: 0,
        behavior: 'smooth'
      });
      break;
    case keyCodes.G: // scroll to bottom on pressing "G"
      window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
      break;
      // TODO: Add j & k bindings
  }
});
