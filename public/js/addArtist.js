const addArtistHandler = async (event) => {
  event.preventDefault();

  const name = document.getElementById("add-artist-name").value.trim();
  const bio = document.getElementById("add-artist-bio").value.trim();

  const response = await fetch("/api/artists", {
    method: "POST",
    body: JSON.stringify({ name, bio }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Artist now available");
  } else {
    alert("Error - please try again");
  }
};

document
  .getElementById("add-artist-form")
  .addEventListener("submit", addArtistHandler);
