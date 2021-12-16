/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

// popup start

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll("#myBtn");
btn.forEach(b => {
  // When the user clicks on the button, open the modal
b.onclick = function() {
  modal.style.display = "block";
}
})
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// popup end


