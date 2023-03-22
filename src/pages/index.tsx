import Picker from "@/components/picker/Picker";
import RandomRecipe from "@/components/RandomRecipe";
import Veggie from "@/components/Veggie";
import { Main, Title } from "./styles";

export default function Home() {
  return (
    <Main>
      <Title>Welcome!</Title>
      <Picker />
      <RandomRecipe />
      <Veggie />
    </Main>
  );
}
