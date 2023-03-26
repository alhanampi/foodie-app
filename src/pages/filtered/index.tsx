import { useRouter } from "next/router";
import { getCategory } from "@/services/foodServices";
import { useState, useEffect } from "react";
import { Text, Card, Wrapper } from "./styles";
import "@splidejs/react-splide/css";

const Filtered = () => {
  const router = useRouter();
  const type: any = router.query.type;
  const [filtered, setFiltered] = useState([]);

  const navigate = (id: number): void => {
    router.push({
      pathname: "/details/",
      query: { id },
    });
  };


  useEffect(() => {
    getCategory(type)
      .then((res) => {
        console.log('res', res);

        console.log('filtered', filtered);
        setFiltered(res)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
  <>
  
        <Text onClick={() => router.back()}>Go back!</Text>
  <Wrapper>

        {filtered.map((filtered): any => {
          return (
            <div onClick={() => navigate(filtered.id)}>
              <Card key={filtered.id}>
                <img src={filtered.image} alt={filtered.title} />

                <h3>{filtered.title}</h3>
              </Card>
            </div>
          );
        })}

  </Wrapper>
  </>
  )
};

export default Filtered;
