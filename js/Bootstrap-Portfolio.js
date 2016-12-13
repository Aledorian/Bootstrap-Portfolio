$(function() {

            $("#showMe").click(function() {

                var opa = $("#progress").css("opacity");

                opa = (opa == 1) ? 0 : 1;

                $("#progress").animate({
                    "opacity": opa
                }, "slow");
            });


            $('#Light').click(function() {
                jQuery('#sheet1').remove();
                $("link[rel=stylesheet]").append('<href="./css/Bootstrap-Portfolio-Light.css" rel="stylesheet" id="sheet2"/>');
            });

            $('#Dark').click(function() {
                jQuery('#sheet2').remove();
                $("link[rel=stylesheet]").append('<href="./css/Bootstrap-Portfolio-Dark.css" rel="stylesheet" id="sheet1"/>');
            });


            // Test 2
            //
            // $('#Light').click(function(){
            //   $('link[title="mystyle"]')[2].attr('disabled', false);
            //
            // })
            //
            // $('#Dark').click(function(){
            // $('link[title=mystyle]')[2].attr('disabled', true);})
