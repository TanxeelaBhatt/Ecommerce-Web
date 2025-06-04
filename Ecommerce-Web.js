
  const popup = document.getElementById("popup");

  document.addEventListener("mousemove", function(event) {
    popup.style.left = event.pageX + "px";
    popup.style.top = event.pageY + "px";
    popup.style.display = "block";
  });

  document.addEventListener("mouseleave", function() {
    popup.style.display = "none";
  });
