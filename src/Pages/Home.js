import React from 'react'
import Products from "./Products"
import Cards from './Cards'
import useCardData from '../components/UseCardData/UseCardData'
import Hero from '../components/Hero/Hero'
import WhatsAppChat from '../components/WhatsAppChat'

const Home = () => {

  const { cards } = useCardData();

  return (
    <div>
       <Hero />
       <hr />
       <Products />
       <hr />
       {cards && <Cards cards={cards.filter((card) => card.homepage === true)} />}
       <WhatsAppChat />
    </div>
  )
}

export default Home
