// "use client"
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  // console.log("Shiva Surkheti aka GoatX")
  return (
    <div className={styles.container}>
      <div>&copy; 2023 GoatX. All rights reserved.</div>
      <div>
        <div className={styles.social}>
            <Image src='/1.png' width={18} height={18}  className={styles.icon} alt='GoatX'/>
            <Image src='/2.png' width={18} height={18}  className={styles.icon} alt='GoatX'/>
            <Image src='/3.png' width={18} height={18}  className={styles.icon} alt='GoatX'/>
            <Image src='/4.png' width={18} height={18}  className={styles.icon} alt='GoatX'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
