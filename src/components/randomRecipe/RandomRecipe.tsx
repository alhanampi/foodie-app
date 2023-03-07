import { useState, useEffect } from "react";
import { Wrapper, Card, Gradient } from "./styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const RandomRecipe = () => {
  const [randomRecipes, setRandomRecipes] = useState<any[]>([]);

  const randomIdeas = async () => {
    const api: Response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.NEXT_PUBLIC_FOODIE_API_KEY}`
    );
    const data = await api.json();
    console.log(data);
    setRandomRecipes(data.recipes);
  };

  useEffect(() => {
    randomIdeas();
  }, []);

  return (
    <Wrapper>
      <h2>Feeling like trying something new today?</h2>

      <Splide
        options={{
          perPage: 3,
          drag: "free",
          gap: "5rem",
          rewind: true,
        }}
      >
        {randomRecipes.map((random): any => {
          return (
            <SplideSlide>
              <Card key={random.id}>
                <p>{random.title}</p>
                <img src={random.image} alt={random.title} />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default RandomRecipe;
