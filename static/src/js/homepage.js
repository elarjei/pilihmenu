$(document).ready(function () {
  if ($(window).width() > 767) {
    $(function () {
      $(".oe_product_cart_new>div:gt(7)").remove();
    });
  } else if ($(window).width() > 576) {
    $(function () {
      $(".oe_product_cart_new>div:gt(5)").remove();
    });
  } else {
    $(function () {
      $(".oe_product_cart_new>div:gt(3)").remove();
    });
  }
});
