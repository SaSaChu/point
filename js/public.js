/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {

  // 漢堡變換 + menu滑出
  $(document).ready(function() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');

      $('#r_menu_boxs').toggleClass('s_menu');
      $('#menu_back').toggleClass('s_menu_b');
    });
  });

  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });

  $('.login_boxs .icon-x').click (function () {
    $('.login_boxs').toggleClass ('show');
  });

  $('.login_boxs .show-reg').click (function () {
    $('.login_boxs').toggleClass ('show-reg');
  });
  $('.login_boxs .show-psw').click (function () {
    $('.login_boxs').toggleClass ('show-psw');
  });

  $('#login-btn').click (function () {
    $('.login_boxs').toggleClass ('show');
  });
  $('.other .bg, .footer_banner .image, .header_banner .image').imgLiquid ();

});
