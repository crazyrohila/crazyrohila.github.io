// jQuery shorthand.

(function($) {

$(document).ready(function () {
  // Main menu animation.
  var logo = $(".logo__link");
  var menu = $(".navigation--main .menu");
  var logo_text = $(".logo__text");
  logo.click(function() {
    logo_text.toggleClass("active");
    menu.toggleClass("is_exp");
  });
  // me link.
  var me = $(".me .menu__links");
  //me.attr("href", "javascript:void();");
  var me_links = $(".navigation--social");
  me.click(function() {
    me_links.toggleClass("hey-here");
  });

  // Footer menu.
  var more = $(".menu__links.more");
  more.removeAttr("href");
  var more_links = $(".menu--social.menu--child");
  more.click(function() {
    var $this = $(this);
    $this.toggleClass("active");
    more_links.toggleClass("is_exp");
  });

  // New tab for all links.
  var links = $(".navigation--social").find("a");
  links.attr("target", "_blank");
});


})(jQuery);
