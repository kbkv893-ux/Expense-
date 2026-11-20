let ወጪዎች = JSON.parse(localStorage.getItem("ወጪዎች")) || [];

let ስምሳጥን = document.getElementById("ስም");
let መጠንሳጥን = document.getElementById("መጠን");
let ጨምር = document.getElementById("ጨምር");
let ድምርቦታ = document.getElementById("ድምር");
let ዝርዝር = document.getElementById("ዝርዝር");

function አሳይ() {
  localStorage.setItem("ወጪዎች", JSON.stringify(ወጪዎች));
  ዝርዝር.innerHTML = "";
  let ድምርዋጋ = 0;

  for (let i = 0; i < ወጪዎች.length; i++) {
    ድምርዋጋ = ድምርዋጋ + ወጪዎች[i].መጠን;

    let አካል = document.createElement("li");
    አካል.textContent = ወጪዎች[i].ስም + ": " + ወጪዎች[i].መጠን + " ብር ";

    let ሰርዝ = document.createElement("button");
    ሰርዝ.textContent = "ሰርዝ";
    ሰርዝ.addEventListener("click", function() {
      ወጪዎች.splice(i, 1);
      አሳይ();
    });

    አካል.appendChild(ሰርዝ);
    ዝርዝር.appendChild(አካል);
  }

  ድምርቦታ.textContent = ድምርዋጋ;

  if (ድምርዋጋ > 1000) {
    ድምርቦታ.style.color = "red";
  } else {
    ድምርቦታ.style.color = "black";
  }
}

ጨምር.addEventListener("click", function() {
  let ዋጋ = Number(መጠንሳጥን.value);

  if (ስምሳጥን.value !== "" && ዋጋ > 0) {
    ወጪዎች.push({ ስም: ስምሳጥን.value, መጠን: ዋጋ });
    ስምሳጥን.value = "";
    መጠንሳጥን.value = "";
    አሳይ();
  }
});

አሳይ();
