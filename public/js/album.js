const reviewButton = document.getElementById("comment-button");
const reviewContent = document.getElementById("review-content");

const addReview = async (event) => {
  event.preventDefault();
  console.log(event);
  console.dir(reviewContent);
};

reviewButton.addEventListener("click", addReview);
console.log("HEllo");
