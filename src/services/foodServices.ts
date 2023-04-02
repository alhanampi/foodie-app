import axios from 'axios';

const url1 = `https://api.spoonacular.com`;
const url2 = `?number=10&apiKey=`;

export const getRandom = async (): Promise<any> => {
  try {
    const response = await axios.get(`${url1}/recipes/random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`);
    
    const { recipes } = response.data;
    
    localStorage.setItem("randomRecipes", JSON.stringify(recipes));
    
    return recipes;
  } catch (error: any) {
    throw new Error(`Failed to fetch random recipes: ${error}`);
  }
};

export const getVeggie = async (): Promise<any> => {
  try {
    const response = await axios.get(`${url1}/recipes/random${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}&tags=vegetarian`);
    
    const { recipes } = response.data;
    
    localStorage.setItem("veggieRecipes", JSON.stringify(recipes));
    
    return recipes;
  } catch (error: any) {
    throw new Error(`Failed to fetch vegetarian recipes: ${error}`);
  }
};

export const getDetails = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`${url1}/recipes/${id}/card?apiKey=${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`);
    
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch recipe details: ${error}`);
  }
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
  try {
    const response = await axios.get(`${url1}/recipes/complexSearch${url2}${process.env.NEXT_PUBLIC_FOODIE_API_KEY}&cuisine=${type}`);
    
    const { results } = response.data;
    
    return results;
  } catch (error: any) {
    throw new Error(`Failed to fetch recipes by category: ${error}`);
  }
};