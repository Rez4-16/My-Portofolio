import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(28,28,28)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 \">
      <Head>
        <title>Portofolio</title>
      </Head>

    <Header />

    {/* Hero */}
    <section id="hero">
    <Hero />
    </section>

    {/* About */}


    {/* Experience */}


    {/* Skills */}

    
    {/* Projects */}


    {/* Contact me */}

    </div>
  )
}

export default Home
