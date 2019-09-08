//waits until page is loaded first
$(document).ready(function(){
    
    $("#button_effects1").click(function() {
        $("#par1").slideToggle('1000');
        
        
    });
    $("#button_effects2").click(function() {
        $("#button_effects2").hide('slow');
        
    });
    
    $("#button_effects3").mouseenter(function() {
        $("#button_effects3").fadeTo(1000, 0.5);
        
    });
    
    $("#button_effects3").mouseleave(function() {
        $("#button_effects3").fadeTo(1000, 1);
        
    });
    
    
    // method chaining
    
    $("#button_effects4").mouseenter(function() {
        $(this).removeClass("makeRed").addClass("makeBorder");
        
    });
    
    $("#button_effects4").mouseleave(function() {
        $(this).removeClass("makeBorder").addClass("makeRed");
        
    });
    
    $("#button_effects5").click(function() {
        $("#par5").slideToggle(2000);
        
    });
    
    // OR
    
    $("#button_effects5").click(function() {
        $("#par5").hide(2000).show(2000);
        
    });
    
    $("#button_effects6").click(function() {
        $("#par6").fadeToggle('slow');
        
    });
    
    // Challenge 4
    
    
    $("a").click(function(){
        $("a").attr("href","http://codeinstitute.net");
    });

    
    
    


    //applies colour red to paragraphs when clicked on 
    $("p").click(function(){
        $("p").addClass("highlight_text");
    });

    //will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").addClass( "h2_color");   
    });

    /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements 
    by removing class h2_font_size from them
    */
    
    //class added for each hr element id//
    
    $("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });

    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "white"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });
});