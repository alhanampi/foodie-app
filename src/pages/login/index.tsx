import Link from "next/link"
import { Main, FormBox, Button } from "../styles"

const Login = () => {
  return (
    <Main>
      <h2>Log into your account to save recipes and more!</h2>

      <FormBox>
        <label>
          Email  *
          <input placeholder="me@memail.com" type="text" required/>
        </label>

        <label htmlFor="">
          Password *
          <input placeholder="lots of ****" type="password" required/>
        </label>

        <Button>Log in!</Button>

      </FormBox>
        <p>Not an user yet?</p>
        <Button>
          <Link href={'/register'}>
          Start here!
          </Link>
          
          </Button>

        <p>forgot your password? (too bad, we don't have that coded yet)</p>
      </Main>
  )
}

export default Login