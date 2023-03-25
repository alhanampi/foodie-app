import { useRouter } from "next/router";
import { getDetails } from "@/services/foodServices";
import { useEffect, useState } from "react";
import { Container, Text } from "./styles";

const RecipeDetailPage = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const [card, setCard] = useState("");

  const detail = async () => {
    getDetails(id)
      .then((res) => {
        setCard(res.url);
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    detail();
  }, []);

  return (
    <>
      <Text onClick={() => router.back()}>Go back!</Text>
      <Container>
        <img src={card} alt="card" />
      </Container>
    </>
  );
};

export default RecipeDetailPage;
