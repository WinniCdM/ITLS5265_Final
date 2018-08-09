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
    
    function showGenreDetail(selected) {
        document.getElementById("fanart").style.display="none";
        document.getElementById("cc").style.display="none";
        document.getElementById("invitation").style.display="none";
        document.getElementById("other").style.display="none";

        document.getElementById(selected).style.display="block";;
    }
    function showStyleDetail(selected) {
        document.getElementById("sketch_style").classList.remove("show");
        document.getElementById("line_art_style").classList.remove("show");
        document.getElementById("flat_color_style").classList.remove("show");
        document.getElementById("cell_shading_style").classList.remove("show");
        document.getElementById("lined_full_color_style").classList.remove("show");
        document.getElementById("full_render_style").classList.remove("show");

        document.getElementById(selected).classList.add("show");
    }
    function displayHidden(selectedItem) {
        console.log("Function is being called")
        var styleHidden = document.getElementById("style");
        var otherHidden = document.getElementById("other");
        if (selectedItem.value == "invitation" || selectedItem.value == "none"){
            styleHidden.style.display="none"
            otherHidden.style.display="none";
        }
        else if (selectedItem.value == "other"){
            styleHidden.style.display="block";
            otherHidden.style.display="block";
        }  
        else{
            styleHidden.style.display="block";
            otherHidden.style.display="none";
        }
    }
