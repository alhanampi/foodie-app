import { Main, FormBox, Button } from "../styles"
import Link from "next/link"

const Register = () => {
  return (
    <Main>
    <h2>Create an account to save your fav recipes!</h2>

    <FormBox>
    <label>
        Name  *
        <input placeholder="me" type="text" required/>
      </label>
      
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
      <p>Already an user?</p>
      <Button>
        <Link href={'/login'}>
        Log in!
        </Link>
        
        </Button>
    </Main>
  )
}

export default Register