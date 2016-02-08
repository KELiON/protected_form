;(function(window, undefined){

  var matches;

  (function(doc) {
     matches =
        doc.matchesSelector ||
        doc.webkitMatchesSelector ||
        doc.mozMatchesSelector ||
        doc.oMatchesSelector ||
        doc.msMatchesSelector;
  })(document.documentElement);

  // simple implementation of $(document).delegate
  function delegate(event, selector, callback) {
    document.addEventListener(event, function(e){
      if (matches.call(e.target, selector)) {
        callback.call(e.target, e);
      }
    });
  }

  //Form Submit
  function sendProtectedForm(event) {
    // looking for closest .js-protected-form block
    var container = this;
    do {
      container = container.parentNode;
    }
    while (!container.className.match('js-protected-form'));
    var form = document.getElementById(container.id + '_form').firstChild;
    var submitEvent = new Event('submit', {
      'bubbles'    : true,
      'cancelable' : true
    });

    // change html structure: return content into form
    container.parentNode.insertBefore(form, container[0]);
    form.firstChild.appendChild(container);

    // and than trigger submit for this form
    form.dispatchEvent(submitEvent);
    if (event) {
      // Prevent double submit event
      event.preventDefault();
    }
    return false;
  }

  delegate('click', '.js-protected-form input[type=submit]', sendProtectedForm);
  delegate('keyup', '.js-protected-form input[type=text], .js-protected-form input[type=email]', function(e){
    if (e.keyCode == 13) {
      sendProtectedForm.call(e.target);
    }
  });
}(this));