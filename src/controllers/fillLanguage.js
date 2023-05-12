const fillLanguage = async (Language) => {
  try {
    await Language.bulkCreate([
      { name: "Spanish" },
      { name: "English" },
      { name: "French" },
      { name: "German" },
      { name: "Italian" },
      { name: "Portuguese" },
      { name: "Russian" },
      { name: "Japanese" },
      { name: "Chinese" },
      { name: "Korean" },
      { name: "Arab" },
      { name: "Hindi" },
      { name: "Tamil" },
      { name: "telugu" },
      { name: "Bengali" },
      { name: "Marathi" },
      { name: "Gujarati" },
      { name: "Punjabi" },
      { name: "Dutch" },
      { name: "Swedish" },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillLanguage;
