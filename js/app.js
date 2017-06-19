$(document).ready(function(){

  $(document).on("click", function(e) {
    var $item = $(".rad-dropmenu-item");
    if ($item.hasClass("active")) {
      $item.removeClass("active");
    }
  });

  $(".rad-toggle-btn").on('click', function() {
    $('.sidenav-overlay').toggleClass("opacidad");
    $(".rad-sidebar").toggleClass("rad-nav-min");
    $(".rad-body-wrapper").toggleClass("rad-nav-min");
    setTimeout(function() {
      initializeCharts();
    }, 300);
  });

  $(".sidenav-overlay").on('click', function(){
    $(".rad-sidebar").removeClass("rad-nav-min");
    $(".rad-body-wrapper").removeClass("rad-nav-min");
    $(".sidenav-overlay").toggleClass("opacidad")
  })
  
  $(".rad-dropdown >.rad-menu-item").on('click', function(e) {
    e.stopPropagation();
    $(".rad-dropmenu-item").removeClass("active");
    $(this).next(".rad-dropmenu-item").toggleClass("active");
  });

  function initializeCharts() {
    $(".rad-chart").empty();
  }

  initializeCharts();

  $('.collapse__head').click(function(){

    $(this).parent().find('.collapse__body').slideToggle('slow');
    $(this).find("path").toggleClass("flecha");
  });

  $('li.liMenu a').click(function(){ 
    $('li.liMenu').removeClass('activate');
    $(this).parent().addClass('activate');
  });

  $('ul.nav-tabs li a.textMenuDetailFamily').click(function(){ 
    $('ul.nav-tabs li').removeClass('activado');
    $(this).parent().addClass('activado');
  });
  // LOAD()
  $(".linkDashboard a").click(function(){
      $("main .rad-body-wrapper .container-fluid").load('dashboard.html');
  });  
  $(".linkPerfil a").click(function(){
      $("main .rad-body-wrapper .container-fluid").load('perfil.html');
  });  
  $(".linkHce a").click(function(){
      $("main .rad-body-wrapper .container-fluid").load('hce.html');
  });
  $(".linkFamilia a").click(function(){
      $("main .rad-body-wrapper .container-fluid").load('familia.html');
  });  
  $(".linkServicios a").click(function(){
      $("main .rad-body-wrapper .container-fluid").load('servicios.html');
  }); 
  $(".linkPreguntas a").click(function(){
      $("main .rad-body-wrapper .container-fluid").load('preguntas.html');
  });  
  $(".linkAyuda a").click(function(){
      $("main .rad-body-wrapper .container-fluid").load('ayuda.html');
  });    
})