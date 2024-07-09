const prisma = require("../utils/prisma");

const createUser = async (username, hash) => {
  const newUser = await prisma.user.create({
    data: {
      username: username,
      password: hash,
    },
  });
  return newUser;
};




module.exports = {
    createUser,

}