/* // The data model for Tour is as follows
{
  "name": "Adventures in Tokyo - 5 Day Tour",
  "info": "Discover the vibrant mix of tradition and modernity in Tokyo. Visit ancient temples like Senso-ji, explore futuristic districts such as Shibuya and Akihabara, and enjoy authentic Japanese cuisine from sushi to ramen. Guided tours will take you through bustling markets, serene gardens, and hidden alleyways filled with local charm.",
  "image": "https://tx00-web-en.github.io/resources/img/tours/tour-2.jpeg",
  "price": "1,450",
  "duration": "5 days",
  "groupSize": "Max 12 people",
  "rating": 4.8,
  "availability": true
} */

let tourArray = [];
let nextId = 1;

const getAll = () => {
  return tourArray;
};

const addOne = (tourData) => {
  const {
    name,
    info,
    image,
    price,
    duration,
    groupSize,
    rating,
    availability,
  } = tourData;
  if (
    !name ||
    !info ||
    !image ||
    !price ||
    !duration ||
    !groupSize ||
    rating === undefined ||
    availability === undefined
  ) {
    return false;
  }
  const newTour = {
    id: nextId++,
    ...tourData,
  };
  tourArray.push(newTour);
  return newTour;
};

const findById = (id) => {
  const numericId = Number(id);
  const tour = tourArray.find((tour) => tour.id === numericId);
  return tour || false;
};

const updateOneById = (id, updatedData) => {
  const tour = findById(id);
  if (tour) {
    Object.assign(tour, updatedData);
    return tour;
  }
  return false;
};
function deletetourById(id) {
  const numericId = Number(id);
  const tour = findById(numericId);

  if (!tour) {
    return "tour not found";
  }

  const originalLength = tourArray.length;
  tourArray = tourArray.filter((c) => c.id !== numericId);

  return tourArray.length < originalLength
    ? "tour deleted successfully"
    : "No tour was deleted";
}
const deleteOneById = (id) => {
  const tour = findById(id);
  if (!tour) {
    return false;
  }

  const originalLength = tourArray.length;
  tourArray = tourArray.filter((c) => c.id !== id);

  return tourArray.length < originalLength
    ? "Tour deleted successfully"
    : "No tour was deleted";
};

const Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Tour;
