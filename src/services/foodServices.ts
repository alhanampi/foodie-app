const url1 = `https://api.spoonacular.com/recipes/`;
const url2 = `?number=10&apiKey=`;

export const getRandom = async () => {
  const api: Response = await fetch(
    `${url1}random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`
  );
  const data = await api.json();

  localStorage.setItem("randomRecipes", JSON.stringify(data.recipes));
  return data.recipes;
};

export const getVeggie = async () => {
  const api: Response = await fetch(
    `${url1}random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}&tags=vegetarian`
  );
  const data = await api.json();
  localStorage.setItem("veggieRecipes", JSON.stringify(data.recipes));

  return data.recipes;
};

export const getDetails = async (id: string) => {
  const api: Response = await fetch(
    `${url1}${id}/card?apiKey=${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`
  );
  const data = await api.json();

  return data;
};
