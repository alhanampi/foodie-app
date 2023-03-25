import { useState, useEffect } from "react";
import { Wrapper, Gradient, CardSmall } from "./styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { getVeggie } from "@/services/foodServices";

const Veggie = () => {
  const [veggieRecipes, setVeggieRecipes] = useState<any[]>([]);

  const veggieIdeas = async () => {
    const checkStorage = localStorage.getItem("veggieRecipes");

    if (checkStorage) {
      setVeggieRecipes(JSON.parse(checkStorage));
    } else {
      getVeggie()
      .then((res) => {
        setVeggieRecipes(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
