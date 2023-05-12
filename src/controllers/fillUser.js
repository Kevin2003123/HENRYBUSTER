const fillUser = async (User) => {
  try {
    await User.bulkCreate([
      { name: "kevin2003123", password: "12345", isAdmin: true },
      { name: "franklyn", password: "12345", isAdmin: false },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = fillUser;
