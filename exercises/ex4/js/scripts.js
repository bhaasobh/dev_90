$(document).ready(function () {
    var slider = document.getElementById("tempRange");
    var output = document.getElementById("tempValue");
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    }

    $('#submitBtn').click(function() {
        checked = $("input[type=checkbox]:checked").length;

        if(checked<1) {
            alert("You must check at least one checkbox.");
            return false;
        }
    });

    const ageSelect = document.getElementById("ageSelect");
    for(let i=23;i<39;i++)
    {
    let option=document.createElement("option");
    option.value = i;
    option.textContent = i;
    ageSelect.appendChild(option); 
    }

});
