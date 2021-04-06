$(document).ready(function() {
    $("#btnAddClass").click(function() {
        if(!$("#pAddClass").hasClass("red"))
        {
            $("#pAddClass").addClass("red");
        }
        else{
          
            $("#pAddClass").removeClass("red");
        }
    });

    $("#btnHide").click(function() {
        if($("#pHide").is(":visible"))
            $("#pHide").hide()
        else
        $("#pHide").show();
    });

    $("#tgImg").hover(function() {
        $("#tgImg").toggle();
    });

    $("#btnSld").click(function() {
        $("#sld").hide();
        $("#sld").slideDown("slow");
    });

    $("#btnSldUp").click(function() {
        $("#sldUp").slideUp("slow");
        $("#sldUp").show();
    });

    $("#btnTg").click(function() {
        $("#stgImg").slideToggle("slow");
    });
    $("#spn-fadIn").click(function() {
        $("#fadeIn").fadeIn(1000);
    });

    $("#spn-fadeOut").click(function() {
        $("#fadeIn").fadeOut(1000);
    });

    $("#before").click(function() {
        $("#par-text").before(" before is Working!");
    });

    $("#after").click(function() {
        $("#par-text").after(" after is Working!");
    });

    $("#append").click(function() {
        $("#par-text").append(" append is Working!");
    });

    $("#h").click(function() {
        $("#hDiv").html("HTML i sWorking!!");
    });

    $("#at").click(function() {
        
        $("#aDiv").text($("input").attr("placeholder"));
    });

    $("#val").click(function() {
        $("#vDiv").text($("#inVal").val());
    });

});