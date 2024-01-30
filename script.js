function revealSeaSilk() {
    var x = document.getElementById("seaSilkExcerpt");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
     }
}

function activateSeaSilk() {
       const link = document.getElementById("seaSilk");
       link.classList.toggle('seaSilkActive');
   }

   function revealGaymers() {
    var x = document.getElementById("gaymersDesc");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
     }
}

function activateGaymers() {
    const link = document.getElementById("gaymers");
    link.classList.toggle('gaymersActive');
}

function activateSeaSilk() {
    const link = document.getElementById("seaSilk");
    link.classList.toggle('seaSilkActive');
}

function revealGaymersExcerpt() {
 var x = document.getElementById("gaymersExcerpt");
 if (x.style.display === "none") {
   x.style.display = "block";
 } else {
   x.style.display = "none";
  }
}

function activateGaymersLink() {
    const link = document.getElementById("gaymersLink");
    link.classList.toggle('gaymersLinkActive');
}