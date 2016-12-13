$(function() {

            $("#showMe").click(function() {

                var opa = $("#progress").css("opacity");

                opa = (opa == 1) ? 0 : 1;

                $("#progress").animate({
                    "opacity": opa
                }, "slow");
            });

            $('#Light').click(function(){
              $('#lightT').attr("href", './css/Bootstrap-Portfolio-Light.css');
            });

            $('#Dark').click(function(){
              $('#lightT').attr("href", './css/Bootstrap-Portfolio-Dark.css');
            });

});
