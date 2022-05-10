import React, { useState } from 'react'
import icon from './Images/icon-music.svg'

const Flex = () => {
  let [plan, setPlan] = useState('Annual Plan')
  let [price, setPrice] = useState('$59.99/year')
  function changePlan() {
    if (plan === 'Annual plan') {
      setPlan('Monthly plan')
      setPrice('$4.99/monthly')
    } else {
      setPlan('Annual plan')
      setPrice('$59.99/year')
    }
  }
  return (
    <div className='flex'>
      <div className='flex2'>
        <div className='flex3'>
          <div>
            <img src={icon} alt='' />
          </div>
          <div className='flex4'>
            <h2>{plan}</h2>
            <p>{price}</p>
          </div>
        </div>
        <div>
          <a onClick={changePlan} href='#'>
            change
          </a>
        </div>
      </div>
    </div>
  )
}

export default Flex
