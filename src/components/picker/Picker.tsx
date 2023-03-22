import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { List } from './styles'

const Picker = () => {
  return (
    <>
    <h2>Pick a category!</h2>
<List>
    <div>
      <FaPizzaSlice />
      <h3>Italian</h3>
    </div>
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