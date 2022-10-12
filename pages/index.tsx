import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portofolio</title>
      </Head>

      <main>
        <h1 className=" text-blue-500">CEK</h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
