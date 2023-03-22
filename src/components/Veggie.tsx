import { useState, useEffect } from "react";
import { Wrapper, Gradient, CardSmall } from "./styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Veggie = () => {
  const [veggieRecipes, setVeggieRecipes] = useState<any[]>([]);

  const veggieIdeas = async () => {
    const checkStorage = localStorage.getItem("veggieRecipes");

    if (checkStorage) {
      setVeggieRecipes(JSON.parse(checkStorage));
    } else {
      const api: Response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.NEXT_PUBLIC_FOODIE_API_KEY}&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggieRecipes", JSON.stringify(data.recipes));
      console.log('veggie', data);
      setVeggieRecipes(data.recipes);
    }
  };

  useEffect(() => {
    veggieIdeas();
  }, []);

  return (
    <Wrapper>
      <h2>Veggie top picks</h2>

      <Splide
        options={{
          perPage: 5,
          drag: "free",
          gap: "1rem",
          rewind: true,
        }}
      >
        {veggieRecipes.map((veggie): any => {
          return (
            <SplideSlide>
              <CardSmall key={veggie.id}>
                <p>{veggie.title}</p>
                <img src={veggie.image} alt={veggie.title} />
                <Gradient />
              </CardSmall>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
