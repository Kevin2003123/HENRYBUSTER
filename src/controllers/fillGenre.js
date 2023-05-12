const fillGenre = async (Genre) => {
  try {
    await Genre.bulkCreate([
      { name: "Action" },
      { name: "Adventure" },
      { name: "Animation" },
      { name: "Comedy" },
      { name: "Crime" },
      { name: "Documentary" },
      { name: "Drama" },
      { name: "Family" },
      { name: "Fantasy" },
      { name: "History" },
      { name: "Horror" },
      { name: "Music" },
      { name: "Mystery" },
      { name: "Romance" },
      { name: "Science Fiction" },
      { name: "TV Movie" },
      { name: "Thriller" },
      { name: "War" },
      { name: "Western" },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillGenre;
