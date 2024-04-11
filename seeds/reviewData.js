const { Review } = require("../models");

const reviewData = [
  {
    record_id: 1,
    user_id: 1,
    review_content: "Not enough kazoos.",
    stars: 3,
  },
  {
    record_id: 1,
    user_id: 3,
    review_content: "Great Driving Music!",
    stars: 5,
  },
  {
    record_id: 2,
    user_id: 5,
    review_content: "Really good. Love the harmonies!",
    stars: 4,
  },
  {
    record_id: 2,
    user_id: 7,
    review_content: "Ok, but not as good as Mozart.",
    stars: 3,
  },
  {
    record_id: 3,
    user_id: 9,
    review_content:
      "I kissed the love of my life for the first time to this music. It's as amazing today as it was then.",
    stars: 5,
  },
  {
    record_id: 3,
    user_id: 11,
    review_content: "Nice.",
    stars: 4,
  },
  {
    record_id: 4,
    user_id: 2,
    review_content: "Needs more Cowbell.",
    stars: 3,
  },
  {
    record_id: 4,
    user_id: 4,
    review_content: "Amazing melodies and vocals!",
    stars: 5,
  },
  {
    record_id: 5,
    user_id: 6,
    review_content: "Loving all the bagpipes!",
    stars: 4,
  },
  {
    record_id: 5,
    user_id: 8,
    review_content: "Doesn't turn up to 11.",
    stars: 3,
  },
  {
    record_id: 6,
    user_id: 10,
    review_content:
      "I wish I could rip my ears off, grow them back, and hear this again for the first time.",
    stars: 5,
  },
  {
    record_id: 6,
    user_id: 12,
    review_content:
      "Despite the name of the album, there are no mangos or fruit of any kind being played. Still nice music, I guess.",
    stars: 4,
  },
  {
    record_id: 7,
    user_id: 1,
    review_content: "Artist was clearly on drugs, and not the fun kind.",
    stars: 3,
  },
  {
    record_id: 7,
    user_id: 2,
    review_content: "The pinnacle of musical achievement!",
    stars: 5,
  },
  {
    record_id: 8,
    user_id: 3,
    review_content:
      "Maybe a bit too much accordian, but otherwise a quality record.",
    stars: 4,
  },
  {
    record_id: 8,
    user_id: 4,
    review_content:
      "Why do we create art? Is it to enjoy? Is it to grab a small piece of immortality?  Is it to have something to listen to in elevators? This album falls into that last category, I believe.",
    stars: 3,
  },
  {
    record_id: 9,
    user_id: 5,
    review_content: "Wow!",
    stars: 5,
  },
  {
    record_id: 9,
    user_id: 6,
    review_content:
      "I listened to this album 37 times in a row, and now I'm tired of it.",
    stars: 4,
  },
  {
    record_id: 10,
    user_id: 7,
    review_content: "Hardly any violas, but ok.",
    stars: 3,
  },
  {
    record_id: 10,
    user_id: 8,
    review_content: "I named my child after this album. Sublime!",
    stars: 5,
  },
  {
    record_id: 11,
    user_id: 9,
    review_content:
      "When I think of my favorite music, this album doesn't quite make the cut, but it keeps me awake while I'm driving, so that's nice.",
    stars: 4,
  },
  {
    record_id: 11,
    user_id: 10,
    review_content: "Excellent hold music.",
    stars: 3,
  },
  {
    record_id: 12,
    user_id: 11,
    review_content: "Listening to this album healed my leprosy. Amazing!",
    stars: 5,
  },
  {
    record_id: 12,
    user_id: 12,
    review_content:
      "This album caused me to have an existential crisis, but I'm better now.",
    stars: 4,
  },
  {
    record_id: 13,
    user_id: 1,
    review_content: "Not enough kazoos.",
    stars: 3,
  },
  {
    record_id: 13,
    user_id: 3,
    review_content: "Great Driving Music!",
    stars: 5,
  },
  {
    record_id: 14,
    user_id: 5,
    review_content: "Really good. Love the harmonies!",
    stars: 4,
  },
  {
    record_id: 14,
    user_id: 7,
    review_content: "Ok, but not as good as Mozart.",
    stars: 3,
  },
  {
    record_id: 15,
    user_id: 9,
    review_content:
      "I kissed the love of my life for the first time to this music. It's as amazing today as it was then.",
    stars: 5,
  },
  {
    record_id: 15,
    user_id: 11,
    review_content: "Nice.",
    stars: 4,
  },
  {
    record_id: 16,
    user_id: 2,
    review_content: "Needs more Cowbell.",
    stars: 3,
  },
  {
    record_id: 16,
    user_id: 4,
    review_content: "Amazing melodies and vocals!",
    stars: 5,
  },
  {
    record_id: 17,
    user_id: 6,
    review_content: "Loving all the bagpipes!",
    stars: 4,
  },
  {
    record_id: 17,
    user_id: 8,
    review_content: "Doesn't turn up to 11.",
    stars: 3,
  },
  {
    record_id: 18,
    user_id: 10,
    review_content:
      "I wish I could rip my ears off, grow them back, and hear this again for the first time.",
    stars: 5,
  },
  {
    record_id: 18,
    user_id: 12,
    review_content:
      "Despite the name of the album, there are no mangos or fruit of any kind being played. Still nice music, I guess.",
    stars: 4,
  },
  {
    record_id: 19,
    user_id: 1,
    review_content: "Artist was clearly on drugs, and not the fun kind.",
    stars: 3,
  },
  {
    record_id: 19,
    user_id: 2,
    review_content: "The pinnacle of musical achievement!",
    stars: 5,
  },
  {
    record_id: 20,
    user_id: 3,
    review_content:
      "Maybe a bit too much accordian, but otherwise a quality record.",
    stars: 4,
  },
  {
    record_id: 20,
    user_id: 4,
    review_content:
      "Why do we create art? Is it to enjoy? Is it to grab a small piece of immortality?  Is it to have something to listen to in elevators? This album falls into that last category, I believe.",
    stars: 3,
  },
  {
    record_id: 21,
    user_id: 5,
    review_content: "Wow!",
    stars: 5,
  },
  {
    record_id: 21,
    user_id: 6,
    review_content:
      "I listened to this album 37 times in a row, and now I'm tired of it.",
    stars: 4,
  },
  {
    record_id: 22,
    user_id: 7,
    review_content: "Hardly any violas, but ok.",
    stars: 3,
  },
  {
    record_id: 22,
    user_id: 8,
    review_content: "I named my child after this album. Sublime!",
    stars: 5,
  },
  {
    record_id: 23,
    user_id: 9,
    review_content:
      "When I think of my favorite music, this album doesn't quite make the cut, but it keeps me awake while I'm driving, so that's nice.",
    stars: 4,
  },
  {
    record_id: 23,
    user_id: 10,
    review_content: "Excellent hold music.",
    stars: 3,
  },
  {
    record_id: 24,
    user_id: 11,
    review_content: "Listening to this album healed my leprosy. Amazing!",
    stars: 5,
  },
  {
    record_id: 24,
    user_id: 12,
    review_content:
      "This album caused me to have an existential crisis, but I'm better now.",
    stars: 4,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
