const fillFormat = async (Format) => {
  try {
    await Format.bulkCreate([
      { name: "DVD" },
      { name: "Blu-ray Disc" },
      { name: "naVHS" },
      { name: "LaserDisc" },
      { name: "Betamax" },
      { name: "HD DVD" },
      { name: "VCD" },
      { name: "UMD" },
      { name: "Cine en 35 mm" },
      { name: "Cine en 70 mm" },
      { name: "Cinta de película" },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillFormat;
