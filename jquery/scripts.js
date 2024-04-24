$(".dark-btn").click(function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  });
  $(".spin-btn").click(
    function(){
      $(".box").toggleClass("spin")
    }
  );

  $(".reveal-btn").click(
    function(){
      // $(".reveal-btn").addClass("reveal")
      $(".chair").css("display","block")
      $(".reveal-btn").hide
    }
  );
  $( function() {
    $( ".draggable" ).draggable();
  } );