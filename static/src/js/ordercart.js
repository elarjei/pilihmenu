$(document).ready(function () {
  $(function () {
    $(".progress-wizard>a:gt(1)").remove();
  });

  $(function () {
    $("#cart_total>table>tbody>tr:gt(3)").remove();
  });

  $(".toggle_summary_div").removeClass("d-none");
  $(".input-group>div>a").removeClass("d-none");
  $(".card-body>h4").removeClass("d-none");

  $(".js_cart_summary>div>div>a").remove();

  $(".oe_cart>div>div>a").removeClass("mb32 float-right");
  $(".d-xl-none.mt8>a").removeClass("mb32 float-right");
  $(".oe_website_sale>div>div").removeClass("d-none");

  $(".col-12.col-xl.order-xl-1.oe_cart").remove();

  $("div.col-12.col-xl-auto.order-xl-2").addClass("col-xl-12");
});
