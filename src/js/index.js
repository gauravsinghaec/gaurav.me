$.fn.visible = function(partial) {
	var $t            = $(this),
	$w            = $(window),
	height        = $w.height(),
	delta         = height*0.05,
	viewTop       = $w.scrollTop(),
	viewBottom    = viewTop + height,
	_top          = $t.offset().top,
	_bottom       = _top + $t.height(),
	compareTop    = partial === true ? _bottom : _top,
	compareBottom = partial === true ? _top : _bottom;
  	// console.log((viewTop+delta),(viewBottom - delta));
	// console.log(viewTop,viewBottom,_top,_bottom,compareTop,compareBottom);
	return ((compareBottom <= viewBottom-delta) && (compareTop >= viewTop+delta));
};

$(window).scroll(function(event) {
	$(".card").each(function(i, el) {
		var el = $(el);
	if (el.visible(true)) {
		el.addClass("come-in");
		el.removeClass("go-out");
	}else{
		el.addClass("go-out");
		el.removeClass("come-in");
  	}
	});

});