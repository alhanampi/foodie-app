import { useState, useEffect } from "react";
import { Wrapper, Card, Gradient } from "./styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { getRandom } from "@/services/foodServices";

const RandomRecipe = () => {
  const [randomRecipes, setRandomRecipes] = useState<any[]>([]);

  const randomIdeas = async () => {
    const checkStorage = localStorage.getItem("randomRecipes");

    if (checkStorage) {
      setRandomRecipes(JSON.parse(checkStorage));
    } else {
      getRandom()
        .then((res) => {
          setRandomRecipes(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
          gap: "2rem",
          rewind: true,
        }}
      >
        {randomRecipes.map((random): any => {
          return (
            <SplideSlide>
              <Card key={random.id}>
                <img src={random.image} alt={random.title} />
                <Gradient />
                <p>{random.title}</p>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default RandomRecipe;
