const { Review } = require("../models");

const reviewData = [
  {
    record_id: "",
    user_id: "",
    review_content: "",
    stars: "",
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
