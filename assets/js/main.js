(function ($) {
  "use strict";

  var WHATSAPP_NUMBER = "919136924323"; // change this to your WhatsApp number
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header border once the page scrolls */
  var $header = $(".site-header");
  $(window).on("scroll", function () {
    $header.toggleClass("is-stuck", $(window).scrollTop() > 10);
  });

  /* Mobile navigation (SlickNav) */
  if ($("#site-menu").length && $.fn.slicknav) {
    $("#site-menu").slicknav({
      label: "",
      prependTo: ".mobile-nav",
      allowParentLinks: true,
      closedSymbol: '<i class="fa-solid fa-chevron-down"></i>',
      openedSymbol: '<i class="fa-solid fa-chevron-up"></i>',
      beforeOpen: function (t) { if ($(t).is(".slicknav_btn")) $(t).attr({ "aria-label": "Close menu", "aria-expanded": "true" }); },
      beforeClose: function (t) { if ($(t).is(".slicknav_btn")) $(t).attr({ "aria-label": "Open menu", "aria-expanded": "false" }); }
    });
    $(".slicknav_btn").attr({ "aria-label": "Open menu", "aria-expanded": "false", role: "button" });
    /* close the mobile menu if the window grows to desktop size */
    $(window).on("resize", function () {
      if (window.innerWidth > 991 && $(".slicknav_btn").hasClass("slicknav_open")) $("#site-menu").slicknav("close");
    });
  }

  /* Hero: live sample journey */
  var $track = $(".track li");
  if ($track.length) {
    var $foot = $(".tracker-foot");
    var total = $track.length;
    var paint = function (step) {
      $track.each(function (i) {
        $(this).toggleClass("done", i < step).toggleClass("now", i === step);
      });
      $foot.toggleClass("show", step >= total);
    };
    if (reduceMotion) {
      paint(total);
    } else {
      var step = 0;
      paint(0);
      setInterval(function () {
        step = step >= total + 2 ? 0 : step + 1;
        paint(Math.min(step, total));
      }, 1500);
    }
  }

  /* Count-up numbers */
  if ($.fn.counterUp && !reduceMotion) {
    $(".count").counterUp({ delay: 10, time: 1200 });
  }

  /* Forms: validate, then hand the enquiry to WhatsApp.
     The site is static, so WhatsApp is the delivery channel. */
  $(".wa-form").each(function () {
    var $form = $(this);
    $form.validator().on("submit", function (e) {
      var $status = $form.find(".form-status");
      if (e.isDefaultPrevented()) {
        $status.text("Some fields need attention. Check the messages above.");
        return;
      }
      e.preventDefault();
      var lines = ["*" + ($form.data("title") || "Website enquiry") + "* (qryntotech website)"];
      $form.find("[data-label]").each(function () {
        var v = $.trim($(this).val() || "");
        if (v) lines.push($(this).data("label") + ": " + v);
      });
      window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
      $status.text("WhatsApp opened with your details. Press send there and our team will reply.");
      $form[0].reset();
    });
  });

  $(".js-year").text(new Date().getFullYear());
})(jQuery);
