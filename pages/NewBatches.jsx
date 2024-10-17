import React from 'react'
import { Lato } from '@next/font/google';
import Batches from '../components/New Batches/Batches';


const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})

const NewBatches = () => {
  return (
    <div className={lato.className}>
      <div>
        <Batches/>
      </div>
    </div>
  )
}

export default NewBatches
