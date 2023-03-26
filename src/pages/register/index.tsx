import { MainRegister, FormBox, Button } from "../styles"
import Link from "next/link"

const Register = () => {
  return (
    <MainRegister>
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

      <Button>Create your account</Button>

    </FormBox>
      <p>Already an user?</p>
      <Button>
        <Link href={'/login'}>
        Log in!
        </Link>
        
        </Button>
    </MainRegister>
  )
}

export default Register