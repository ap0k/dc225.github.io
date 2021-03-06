(function($) {
  "use strict";

  /* jshint ignore:start */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
  /* jshint ignore:end */

  ga('create', 'UA-67479703-1', 'auto');
  ga('send', 'pageview');

  $("a").on('click', function(e) {
    var url = $(this).attr("href");
    if( e.currentTarget.host != window.location.host ) {
      ga('send', 'event', 'outbound', 'click', url, {
        'hitCallback': function() {  }
       });
    }
  });

  // Track basic JavaScript errors
  window.addEventListener('error', function(e) {
      _gaq.push([
          '_trackEvent',
          'JavaScript Error',
          e.message,
          e.filename + ':  ' + e.lineno,
          true
      ]);
  });

  // Track AJAX errors (jQuery API)
  $(document).ajaxError(function(e, request, settings) {
      _gaq.push([
          '_trackEvent',
          'Ajax error',
          settings.url,
          e.result,
          true
      ]);
  });
}(jQuery));
