import React from "react";
import { List, Icon, LinkTo } from "./styles";
import { categories } from "@/utils/Categories";
import { useRouter } from "next/router";

const Picker = () => {
  const router = useRouter();
  const navigate = (type: string): void => {
    console.log(type);
    router.push({
      pathname: "/filtered/",
      query: { type },
    });
  };
  
  return (
    <>
      <h2>Pick a category!</h2>

      <List>
        {categories.map((cat): any => {
          return (
            <LinkTo onClick={() => navigate(cat.type)} key={cat.type}>
              <Icon>{cat.icon}</Icon>
              <h3>{cat.type}</h3>
            </LinkTo>
          );
        })}
      </List>
    </>
  );
};

export default Picker;
