jQuery(function($) {
    $(".tab-content input").on("change", function() {
        if($(this).val() == "") {
            $(".wizard-footer").find("input[name=next]").prop("disabled", true);
        }
    });

});