/*{
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active",
  "account_verified": true,
  "country": "Finland"
}*/

let userArray = [];
let nextId = 1;

const getAll = () => {
  return userArray;
};

const addOne = (userData) => {
  const {
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
    account_verified,
    country,
  } = userData;
  if (
    !name ||
    !email ||
    !password ||
    !phone_number ||
    !gender ||
    !date_of_birth ||
    !membership_status ||
    account_verified === undefined ||
    !country
  ) {
    return false;
  }
  const newUser = {
    id: nextId++,
    ...userData,
  };
  userArray.push(newUser);
  return newUser;
};

const findById = (id) => {
  const numericId = Number(id);
  const user = userArray.find((user) => user.id === numericId);
  return user || false;
};

const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    Object.assign(user, updatedData);
    return user;
  }
  return false;
};
function deleteCarById(id) {
  const numericId = Number(id);
  const user = findById(numericId);

  if (!user) {
    return "User not found";
  }

  const originalLength = userArray.length;
  userArray = userArray.filter((c) => c.id !== numericId);

  return userArray.length < originalLength
    ? "User deleted successfully"
    : "No user was deleted";
}
const deleteOneById = (id) => {
  const user = findById(id);
  if (!user) {
    return false;
  }

  const originalLength = userArray.length;
  userArray = userArray.filter((c) => c.id !== id);

  return userArray.length < originalLength
    ? "User deleted successfully"
    : "No user was deleted";
};

const User = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = User;
