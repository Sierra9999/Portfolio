import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <section className={styles.introduction}>
          <h1 className={styles.name}>Mateo</h1>
          <p>this will be a description of myself : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices urna sit amet ex mollis, vel varius dolor tincidunt. Nulla facilisi. Nulla facilisi. Suspendisse tristique tortor eget orci fringilla, sit amet rutrum justo consequat. Praesent aliquet eleifend justo, a bibendum dui laoreet ac. Pellentesque eget ullamcorper odio. Ut posuere quam ut quam dapibus, vel consectetur odio ullamcorper. Aenean gravida erat at orci pellentesque facilisis. Vestibulum euismod elit ut sem bibendum</p>
          <p>here we will have some Icons</p>
          <h1>Sierra</h1>
        </section>
    </main>
  )
}
