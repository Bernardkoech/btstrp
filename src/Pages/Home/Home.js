import React from 'react'
import Products from "../Products/Products"
import Cards from '../Cards/Cards'
import useCardData from '../../components/UseCardData/UseCardData'
import Hero from '../../components/Hero/Hero'
import WhatsAppChat from '../../components/Whatsapp/WhatsAppChat'
import About from '../About/About'
import Banner from "../../components/Banner/Banner"

const Home = () => {

  const { cards } = useCardData();

  return (
    <div>
    <Banner />
       <WhatsAppChat />
       <Hero />
       <hr />
       <Products />
       <hr />
       <About />
       <hr />
       {cards && <Cards cards={cards.filter((card) => card.homepage === true)} />}
    </div>
  )
}

export default Home
