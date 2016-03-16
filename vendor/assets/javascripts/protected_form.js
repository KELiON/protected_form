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

  // Simple implementation of $(document).delegate
  function delegate(event, selector, callback) {
    document.addEventListener(event, function(e){
      if (matches.call(e.target, selector)) {
        callback.call(e.target, e);
      }
    });
  }

  // Form Submit
  function sendProtectedForm() {
    // Looking for closest .js-protected-form block
    var container = this;
    do {
      container = container.parentNode;
    }
    while (!container.className.match('js-protected-form'));
    var form = document.getElementById(container.id + '_form').firstChild;

    // Change html structure: return content into form
    container.parentNode.insertBefore(form, container);
    form.appendChild(container);

    // Fix for IE when using certain versions of pjax libraries and losing focus
    document.body.focus();

    return false;
  }

  delegate('click', '.js-protected-form input[type=submit]', sendProtectedForm);
  delegate('keyup', '.js-protected-form input[type=text], .js-protected-form input[type=email]', function(e){
    if (e.keyCode == 13) {
      sendProtectedForm.call(e.target);
    }
  });
}(this));
