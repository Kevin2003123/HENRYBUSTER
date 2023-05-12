const { Movie, Inventory } = require("../db");
const fillMovie = async (req, res) => {
  try {
    const movie1 = await Movie.create({
      name: "El exorcista del papa",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/qcknZEeD71byJ3XSalDDZ5iHpNr.jpg",
      description:
        "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
      price: 9.99,
      LanguageId: 1,
      FormatId: 1,
      date: "2023/04/5",
      vote_count: 2,
      vote_average: 4,
    });

    await Inventory.create({
      quantity: 10,
      MovieId: movie1.id,
    });

    await movie1.addGenres([1, 2, 3]);
    const movie2 = await Movie.create({
      name: "Guardianes de la Galaxia: Volumen 3",
      image:
        "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      price: 8.99,
      LanguageId: 2,
      FormatId: 2,
      date: "2023/02/15",
    });

    await Inventory.create({
      quantity: 5,
      MovieId: movie2.id,
    });
    await movie2.addGenres([3, 4, 5]);

    const movie3 = await Movie.create({
      name: "Súper Mario Bros. La película",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
      description:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      price: 6.99,
      LanguageId: 4,
      FormatId: 4,
      date: "2023/04/5",
    });

    await Inventory.create({
      quantity: 6,
      MovieId: movie3.id,
    });
    await movie3.addGenres([4, 1, 2]);

    const movie4 = await Movie.create({
      name: "Guardianes de la Galaxia: Volumen 3",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/voAxRv011XHK2qFBXmZKXPj2wWB.jpg",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      price: 10.99,
      LanguageId: 5,
      FormatId: 5,
      date: "2023/04/12",
    });

    await Inventory.create({
      quantity: 20,
      MovieId: movie4.id,
    });
    await movie4.addGenres([3, 1, 2]);

    const movie5 = await Movie.create({
      name: "Posesión infernal: El despertar",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/ioMtng0qHbwNjR1fuxYZsRf1kjm.jpg",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      price: 10.99,
      LanguageId: 6,
      FormatId: 6,
      date: "2023/04/12",
    });

    await Inventory.create({
      quantity: 21,
      MovieId: movie5.id,
    });
    await movie5.addGenres([5, 1, 4]);

    const movie6 = await Movie.create({
      name: "Ghosting",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/zSw2JeQ03GivcS4VKJmWK5sYi1F.jpg",
      description:
        "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
      price: 15.99,
      LanguageId: 7,
      FormatId: 7,
      date: "2023/04/18",
    });

    await Inventory.create({
      quantity: 50,
      MovieId: movie6.id,
    });
    await movie6.addGenres([1, 2]);

    const movie7 = await Movie.create({
      name: "¡Shazam! La furia de los dioses",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/igFLHxab9zG0M89OmEpnOM6TPXn.jpg",
      description: `Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.`,
      price: 1.99,
      LanguageId: 1,
      FormatId: 2,
      date: "2023/03/15",
    });

    await Inventory.create({
      quantity: 60,
      MovieId: movie7.id,
    });
    await movie7.addGenres([1, 2, 3, 4]);

    const movie8 = await Movie.create({
      name: "Alias",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/rmlYg0HdVQDvvNlWishWT2WdxkE.jpg",
      description: `A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.`,
      price: 20.99,
      LanguageId: 2,
      FormatId: 3,
      date: "2023/04/28",
    });

    await Inventory.create({
      quantity: 70,
      MovieId: movie8.id,
    });
    await movie8.addGenres([3, 4, 5, 6]);

    const movie9 = await Movie.create({
      name: "Avatar: El sentido del agua",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/bqOqQ2Tawum3eHKNrc94P4EeaZB.jpg",
      description: `Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.`,
      price: 20.99,
      LanguageId: 3,
      FormatId: 4,
      date: "2022/12/14",
    });

    await Inventory.create({
      quantity: 80,
      MovieId: movie9.id,
    });
    await movie9.addGenres([1, 2, 3, 4]);

    //res.status(200).json("ok");
  } catch (error) {
    //res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

module.exports = fillMovie;
