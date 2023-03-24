import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { List } from './styles'
import Link from 'next/link';

const Picker = () => {
  return (
    <>
    <h2>Pick a category!</h2>

    
<List>
    <Link href={`/ideas/italian`}>

      <FaPizzaSlice />
      <h3>Italian</h3>

    </Link>
    <div>
      <FaHamburger />
      <h3>Fast food</h3>
    </div>

    <div>
      <GiNoodles />
      <h3>Thai</h3>
    </div>

    <div>
      <GiChopsticks />
      <h3>Japanese</h3>
    </div>
    </List>
    </>
  )
}

export default Picker