jQuery(function() {
  return $.each($("[data-time]"), function(index, ele) {
	return $(ele).html(prettyDate(new Date($(this).data("time"))));
  });

  $.expr[':'].external = function(obj){return !obj.href.match(/^mailto:/) && !obj.href.match(/^#:/) && (obj.hostname.replace(/^www\./i, '') != document.location.hostname.replace(/^www\./i, ''));};
  $("a:external").on("click keypress", function (e) {
      ga('send', 'event', 'Link', 'Outbound', $(this).attr("href"), null, true);
  });
  $('a[href^="mailto:"]').on("click keypress", function (e) {
      ga('send', 'event','Link', 'Email', $(this).attr("href").substring(7), null, true);
  });
  $('a[href$=".pdf"]').on("click keypress", function (e) {
      ga('send', 'event', 'Link', 'Presentation Download', $(this).attr("href"));
  });
  
  // SVG CHECK
  var svgSupport = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect;
  if(svgSupport == false){
	$("object[type='image/svg+xml']").each(function () {
		var $replacement = $("<img />").insertAfter($(this));
		var copy = ["id","class","style"];
		for (var i = copy.length - 1; i >= 0; i--) {
			$replacement.attr( copy[i], $(this).attr(copy[i]) );
		};
		$replacement.attr("src", $(this).attr("fallback") );
		$(this).remove();
	});
  }
});
