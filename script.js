
    // initialising variables
    var modal = document.getElementById("modalPage");
    var trigger = document.getElementById("trigger-modal");
    var closing = document.getElementById("closeBtn"); // Corrected the id here

    // when the user clicks on the register button, open the modal
    trigger.onclick = function () {
        modal.style.display = "block";
    }

    // when the user clicks on the x, close the modal
    closing.onclick = function () {
        modal.style.display = "none";
    }

    // when the user clicks anywhere outside of the modal, it closes
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
