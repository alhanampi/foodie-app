const url1 = `https://api.spoonacular.com`;
const url2 = `?number=10&apiKey=`;

export const getRandom = async (): Promise<any> => {
  const api: Response = await fetch(
    `${url1}/recipes/random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`
  );
  const data = await api.json();
  console.log('data random', `${url1}/recipes/random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`);

  localStorage.setItem("randomRecipes", JSON.stringify(data.recipes));
  return data.recipes;
};

export const getVeggie = async (): Promise<any> => {
  const api: Response = await fetch(
    `${url1}/recipes/random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}&tags=vegetarian`
  );
  const data = await api.json();
  localStorage.setItem("veggieRecipes", JSON.stringify(data.recipes));

  return data.recipes;
};

export const getDetails = async (id: string): Promise<any> => {
  const api: Response = await fetch(
    `${url1}/recipes/${id}/card?apiKey=${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`
    );
    const data = await api.json();

  return data;
};

// export const jokeOfTheDay = async () => {
//   const api: Response = await fetch(
//     `${url1}/food/jokes/random?apiKey=${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`
//   );
//   const data = await api.json();
//   console.log('data', data);
//   return data;
// };

export const getCategory = async (type: string): Promise<any> => {
  const api: Response = await fetch(
    `${url1}/recipes/complexSearch${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}&cuisine=${type}`
  );
  const data = await api.json();
  return data.results;
};