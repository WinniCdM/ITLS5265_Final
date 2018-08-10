function worksdropdownclick() {
    document.getElementById("worksdropdown").classList.toggle("show");
    if (document.getElementById("storedropdown").classList.contains('show')) {
        document.getElementById("storedropdown").classList.remove('show');
    }
}
function storedropdownclick() {
    document.getElementById("storedropdown").classList.toggle("show");
    if (document.getElementById("worksdropdown").classList.contains('show')) {
        document.getElementById("worksdropdown").classList.remove('show');
    }
}
window.onclick = function(e) {
    if (!e.target.matches('.navitem')) {
        var worksDropdown = document.getElementById("worksdropdown");
        var storeDropdown = document.getElementById("storedropdown");
        if (worksDropdown.classList.contains('show')) {
            worksDropdown.classList.remove('show');
        }
        if (storeDropdown.classList.contains('show')) {
            storeDropdown.classList.remove('show');
        }
    }
}
function displayHiddenFields(selectedItem) {
    var styleHidden = document.getElementById("style");
    var otherHidden = document.getElementById("other");
    $("#style-input").removeAttr("required");
    $("#other_genre-input").removeAttr("required");
    if (selectedItem.value == "invitation_genre" || selectedItem.value == ""){
        styleHidden.style.display="none";
        otherHidden.style.display="none";
        SelectElement("style-input", "");
        $("#other_genre-input").val("");
    }
    else if (selectedItem.value == "other_genre"){
        styleHidden.style.display="block";
        otherHidden.style.display="block";
        $("#style-input").attr("required", "required");
        $("#other_genre-input").attr("required", "required");
    }  
    else{
        styleHidden.style.display="block";
        otherHidden.style.display="none";
        $("#style-input").attr("required", "required");
        $("#other_genre-input").val("");
    }
}

function showGenreDetail(selected) {
    var numGenres = document.getElementsByClassName("genreHideable").length;
    document.getElementById("genreDetailTitle").style.display="none";
    for (var i=0; i < numGenres; i++){
        document.getElementsByClassName("genreHideable")[i].style.display = "none";
    }
    if(selected.value != ""){
        document.getElementById("genreDetailTitle").style.display="block";
        document.getElementById(selected.value).style.display="block";
    }
}

function showStyleDetail(selected) {
    var numStyles = document.getElementsByClassName("styleHideable").length;
    document.getElementById("styleDetailTitle").style.display="none";
    for (var i=0; i < numStyles; i++){
        document.getElementsByClassName("styleHideable")[i].style.display = "none";
    }
    if(selected.value != ""){
        document.getElementById("styleDetailTitle").style.display="block";
        document.getElementById(selected.value).style.display="block";
    }
}
var currPrice = 30.00;  
$(".calculate").change(function() {
    var newPrice = currPrice;
    $(".calculate option:selected").each(function() {
        newPrice += $(this).data('price')
    });
    $("#price").html(newPrice.toFixed(2));
});

function SelectElement(id, valueToSelect)
{    
    var element = document.getElementById(id);
    element.value = valueToSelect;
}