$(document).ready(function(){

     $(".card").mouseover(function(){
      $(this).find(".whiteBgImage").addClass("hide");
      $(this).find(".yellowBgImage").removeClass("hide");
     });
    $(".card").mouseout(function(){
      $(this).find(".whiteBgImage").removeClass("hide");
      $(this).find(".yellowBgImage").addClass("hide");
     });

     $("#allProj").click(function(){
        $("#allProj").addClass("active");
        $("#constProj").removeClass("active");
        $("#archiProj").removeClass("active");
        $("#interiorProj").removeClass("active");
        $(".constructionProjects").fadeIn(0);
        $(".architechtureProjects").fadeIn(0);
        $(".interiorProjects").fadeIn(0);
        $(".allProjects").fadeIn(0);
     })
     $("#constProj").click(function(){
        $("#allProj").removeClass("active");
        $("#constProj").addClass("active");
        $("#archiProj").removeClass("active");
        $("#interiorProj").removeClass("active");
        $(".constructionProjects").fadeIn(0);
        $(".architechtureProjects").fadeOut(0);
        $(".interiorProjects").fadeOut(0);
        $(".allProjects").fadeOut(0);
     })
     $("#archiProj").click(function(){
        $("#allProj").removeClass("active");
        $("#constProj").removeClass("active");
        $("#archiProj").addClass("active");
        $("#interiorProj").removeClass("active");
        $(".constructionProjects").fadeOut(0);
        $(".architechtureProjects").fadeIn(0);
        $(".interiorProjects").fadeOut(0);
        $(".allProjects").fadeOut(0);
     })
     $("#interiorProj").click(function(){
        $("#allProj").removeClass("active");
        $("#constProj").removeClass("active");
        $("#archiProj").removeClass("active");
        $("#interiorProj").addClass("active");
        $(".constructionProjects").fadeOut(0);
        $(".architechtureProjects").fadeOut(0);
        $(".interiorProjects").fadeIn(0);
        $(".allProjects").fadeOut(0);
     })
    });