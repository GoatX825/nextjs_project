import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../../public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Better design for your digital products.</h1>
          <p  className={styles.desc}>Turning your idea into Reality. We bring together the teams from the global tech industry.</p>
          <Button url="/portfolio" text="See Our Works" />
          
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt='' className={styles.img} />
          {/* external images halne idea - next-config milaune ani  */}
          {/* <Image src="https://images.pexels.com/photos/18528685/pexels-photo-18528685/free-photo-of-waterfalls-on-rocks-in-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={800} height={800} /> */}
        </div>
    </div>

  )
}
