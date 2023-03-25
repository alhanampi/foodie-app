const url1 = `https://api.spoonacular.com/recipes/`;
const url2 = `?number=10&apiKey=`;

export const getRandom = async () => {
  const api: Response = await fetch(
    `${url1}random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`
  );
  const data = await api.json();

  localStorage.setItem("randomRecipes", JSON.stringify(data.recipes));
  console.log("random", data);

  return data.recipes;
};

export const getVeggie = async () => {
  const api: Response = await fetch(
    `${url1}random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}&tags=vegetarian`
  );
  const data = await api.json();
  console.log('veggie', data);
  localStorage.setItem("veggieRecipes", JSON.stringify(data.recipes));  console.log("data", data);

  return data.recipes;
};