import Picker from "@/components/picker/Picker";
import RandomRecipe from "@/components/RandomRecipe";
import Veggie from "@/components/Veggie";
import { Main, Title } from "./styles";
//*implement it later, I don't have any more daily attempts left
// import { jokeOfTheDay } from "@/services/foodServices";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [joke, setJoke] = useState('');

  
  // useEffect(() => {
  //   jokeOfTheDay()
  //     .then((res) => (
  //       console.log('res', typeof res), 
  //       setJoke(res)
  //       )
  //       )
  //     .catch((err) => console.log(err));

  //   console.log('joke',typeof joke);
  // }, []);

  return (
    <Main>
      <Title>Welcome!</Title>
      <Picker />
      <Veggie />
      <RandomRecipe />
      {/* <h3>Wanna hear a food joke?</h3> */}
      {/* <p>{joke}</p> */}
    </Main>
  );
}
