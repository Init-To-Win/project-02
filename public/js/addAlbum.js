console.log("HELLO WORLD");

const addRecordHandler = async (event) => {
  event.preventDefault();

  const name = document.getElementById("add-album-name").value.trim();
  const year = document.getElementById("add-album-year").value.trim();
  const artist = document.getElementById("add-artist").value.trim();

  const response = await fetch("/api/artists/records/user", {
    method: "POST",
    body: JSON.stringify({ name, year, artist }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Record added to your collection!");
  } else {
    alert("ERROR");
  }
};

document
  .getElementById("add-album-button")
  .addEventListener("click", addRecordHandler);
