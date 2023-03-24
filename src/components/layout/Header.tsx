import Link from "next/link";
import { HeaderFoodie, Text, SubText, BoxRight, BoxLeft } from "./styles";

const Header = () => {
  return (
    <HeaderFoodie>
      <BoxLeft>
        <Link href={"/"}>
          <img src={"/images/foodie.png"} alt="foodie logo" />
          <Text>Foodie App</Text>
        </Link>
      </BoxLeft>

      <BoxRight>
        <Link href={"/login"}>
          <SubText>Log in</SubText>
        </Link>
        <Link href={"/register"}>
          <SubText>Register!</SubText>
        </Link>
      </BoxRight>
    </HeaderFoodie>
  );
};

export default Header;
