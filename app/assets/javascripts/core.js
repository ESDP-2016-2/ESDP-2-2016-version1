$(document).ready(function () {
    $('.phone').inputmask('0999999999');

    $('#show-hide-aids-form').click(function(){
        $('#aids-form').slideToggle();
    });

    $('.post-item-pseudolink').click(function(){
        $(this).next('.post-item-body').slideToggle();
    });

    var all_org = $("#organization-list").html();

    function renderOneOrg(org){
        var htmlOrg = '<div><h4><a href="/organizations/show/'+ org.id +'">'+ org.name+'</a></h4>' +
            '<ul>' +
            '<li>'+ org.location +'</li>' +
            '<li>'+ org.address +'</li>' +
            '<li>'+ org.phone +'</li>' +
            '</ul></div>';
        return htmlOrg;
    }

    function renderListOrg(arrayOrg, id){
        for (var i = 0; i < arrayOrg.length; i++) {
            var oneOrg = renderOneOrg(arrayOrg[i]);
            $(id).append(oneOrg);
        }
    }

    function clearContent(id){
        $(id).html(' ');
    }

    function filter_organizations(organization_category_id) {
        $.ajax({
            type: "GET",
            url:  "/organizations/filter_organizations/"+organization_category_id,
            dataType: "json",
            success: function(data) {
                clearContent("#organization-list");
                renderListOrg(data.organizations,"#organization-list");
            }
        });
    }

    $("#filter_org").change(function(e){
        if(e.currentTarget.selectedIndex != 0) {
            filter_organizations(e.currentTarget.selectedIndex);
        }else{
            $("#organization-list").html(all_org);
        }
    });

});