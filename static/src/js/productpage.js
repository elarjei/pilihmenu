$(function () {
  var tekspesan = $(
    '<p class="teks-pesan" style="display:inline;margin-left:8px;font-size:14px;">Pesan</p>'
  );
  $("a.btn.btn-secondary.btn-sm.a-submit").append(tekspesan);
});

$(document).ready(function () {
  $(".oe_search_box").attr("placeholder", "Cari menu favorit...");

  $(".products_pager>div:nth-child(n + " + 0 + ")").remove();

  $(".nav-link.o_not_editable").text("Semua Menu");
});
