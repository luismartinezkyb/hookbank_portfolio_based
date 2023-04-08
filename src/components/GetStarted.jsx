import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
export default function GetStarted() {
  return (
    //THIS IS A BALLON VERY NICE
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer`}>
      {/* THIS FULLFILL THE CIRCLE&*} */}
      <div className={`${styles.flexCenter} flex-col bg-primary w-[95%] h-[95%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
            
          </p>
          <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
            
          </p>
      </div>
    </div>
  )
}
