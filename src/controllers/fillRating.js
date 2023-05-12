const fillRating = async (Rating) => {
  try {
    await Rating.bulkCreate([
      {
        comment:
          "exelente pelicula, prer el final no me gusto, hubiera preferiado al mas dramatico",
        rating: 4,
        MovieId: 1,
        UserId: 1,
      },
      {
        comment:
          "exelente pelicula,  el inico no me gusto me parecio muy lento, hubiera preferiado al mas dramastico",
        rating: 4,
        MovieId: 1,
        UserId: 2,
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillRating;
