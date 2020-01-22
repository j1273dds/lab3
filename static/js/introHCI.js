
$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
        $('.jumbotron h1').text("Javascript is connected");
        $("#testjs").text("Please wait...");
        $(".jumbotron p").addClass("active");

    });
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    console.log("Project clicked");
    // prevent the page from reloadings    
    e.preventDefault();
    // In an event handler, $(this) refers to  
    // the object that triggered the event   
    $(this).css("background-color", "#7fff00");
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
        $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
        $(".project-description").toggle();
    }
}
