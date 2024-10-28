import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const sydneystuff = {
  pic: "src/images/Sydney.jpg",
  description: "Sydney, Australia, is a vibrant and cosmopolitan city known for its stunning harbor, iconic landmarks, and multicultural atmosphere. As the capital of New South Wales, Sydney is situated on the country's southeastern coast and is Australia's largest city. It boasts world-famous attractions such as the Sydney Opera House, with its distinctive sail-like design, and the Sydney Harbour Bridge, an engineering marvel offering panoramic views of the city. Sydney's diverse population contributes to its rich cultural tapestry, evident in its bustling neighborhoods, lively food scene, and eclectic arts and entertainment offerings. The city enjoys a temperate climate, with mild winters and warm summers, making it an ideal destination for outdoor activities year-round. From its beautiful beaches to its dynamic urban landscape, Sydney captivates visitors with its blend of natural beauty, modern amenities, and laid-back lifestyle.",
  link: "https://www.sydneyoperahouse.com",
};

const nyc = {
  pic: "src/images/NYC.png",
  description : "New York City, often described as the cultural, financial, and media capital of the world, is an iconic metropolis famed for its skyscrapers, broad avenues, and vibrant cultural life. At the heart of the city's skyline stands the Empire State Building, a towering symbol of New York's architectural ambition and historical resilience. This city, sprawling across five diverse boroughs, is a melting pot of cultures, offering an endless array of world-class museums, parks, and dining experiences. From the bustling streets of Manhattan, where the lights of Broadway shine, to the serene landscapes of Central Park, and down to the historic lanes of Brooklyn, each area contributes its unique flavor to the city's dynamic mosaic. New York's spirit is indomitable; it's a place of endless possibilities, where history is made, and dreams are pursued, all under the watchful gaze of the Empire State Building, a steadfast reminder of the city's lofty aspirations and achievements.",
  link: "https://www.esbnyc.com"
}

const london = {
  pic: "src/images/London.jpg",
  description: "London, England, is a sprawling metropolis that seamlessly blends centuries of history with cutting-edge modernity. At its core is Big Ben, the iconic clock tower that stands as a symbol of the city's enduring appeal. This landmark, overlooking the Houses of Parliament, is just one of many that embody London's rich heritage, alongside the majestic Tower of London and the regal Buckingham Palace. Yet, London is not one to dwell solely in the past; it is also a city that pulses with contemporary life, from the bustling markets of Camden to the high-tech London Eye, offering panoramic views of the city's skyline. The city's vibrant cultural tapestry is evident in its diverse culinary scene, world-class museums, and thriving theatre district, making London a dynamic and multifaceted destination. Big Ben's chimes resonate not just through Westminster, but throughout London, reminding both locals and visitors of the city's capacity to inspire and awe across ages.",
  link: "https://www.parliament.uk/visiting/visiting-and-tours/big-ben-tour/"
}

const tokyo = {
  pic: "src/images/Tokyo.jpg",
  description: "Tokyo, Japan, is a city where tradition and innovation intersect in the most extraordinary ways. Dominating its skyline, the Tokyo Tower, a beacon of progress and a nod to the Eiffel Tower's design, offers breathtaking views over the city and symbolizes Japan's post-war rebirth as a global power. This vibrant metropolis is a patchwork of contrasting scenes, from the serene Meiji Shrine, offering a slice of tranquility amid the urban sprawl, to the electric buzz of Shibuya Crossing, the epitome of the city's fast-paced life. Tokyo's culinary landscape is just as diverse, ranging from Michelin-starred restaurants to the humble ramen shops tucked away in its alleys. The city's penchant for innovation permeates through its tech-savvy districts like Akihabara, while its heart remains rooted in the calm and order deeply embedded in Japanese culture. Tokyo Tower, standing tall, not just as a tourist attraction but as a symbol of Tokyo's resilience and futuristic vision, watches over a city that's constantly moving forward yet remains deeply connected to its past.",
  link: "https://www.tokyotower.co.jp"
}

const paris = {
  pic: "src/images/Paris.jpg",
  description: "Paris, France, is a city that embodies the epitome of sophistication, where every cobblestone street whispers tales of centuries past, and the iconic Eiffel Tower stands tall as a timeless symbol of architectural splendor and romance. From the grandeur of the Louvre Museum, housing masterpieces like the Venus de Milo, to the charming ambiance of Montmartre, where artists find inspiration in every corner, Paris offers a sensory journey through history, culture, and art. The Eiffel Tower, originally erected for the 1889 World's Fair, now serves as a beloved landmark, offering breathtaking views of the city's enchanting skyline and serving as a beacon of Parisian identity. With its elegant boulevards adorned with chic boutiques and sidewalk cafés, the Seine River winding gracefully through its heart, and the fragrance of freshly baked baguettes lingering in the air, Paris captures the hearts of travelers and locals alike, inviting them to immerse themselves in its timeless elegance and undeniable allure.",
  link: "https://www.toureiffel.paris/fr"
}

const toronto = {
  pic: "src/images/Toronto.jpg",
  description: "Toronto, Canada, is a bustling metropolis renowned for its vibrant culture, rich history, and striking skyline dominated by the iconic CN Tower. This diverse city captivates visitors with its eclectic mix of neighborhoods, each offering its own distinct character and charm. From the upscale boutiques of Yorkville to the bohemian vibes of Queen Street West, Toronto is a melting pot of cultures, cuisines, and experiences. The CN Tower, a marvel of engineering and a symbol of Canadian pride, offers panoramic views of the city and beyond, providing a breathtaking perspective of Toronto's urban landscape. Beyond its architectural wonders, Toronto boasts world-class museums, thriving arts scene, and scenic waterfront areas like the Harbourfront and Toronto Islands. With its welcoming atmosphere and vibrant energy, Toronto invites visitors to immerse themselves in its diverse tapestry of sights, sounds, and flavors, promising an unforgettable urban adventure in the heart of Canada.",
  link: "https://www.cntower.ca"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App pic = ""/>}></Route>
        <Route path='/New York' element={<App pic = {nyc.pic} description = {nyc.description} link = {nyc.link}/>}></Route>
        <Route path='/Tokyo' element={<App pic = {tokyo.pic} description = {tokyo.description} link = {tokyo.link}/>}></Route>
        <Route path='/Sydney' element={<App pic = {sydneystuff.pic} description = {sydneystuff.description} link = {sydneystuff.link}/>}></Route>
        <Route path='/Toronto' element={<App pic = {toronto.pic} description = {toronto.description} link = {toronto.link}/>}></Route>
        <Route path='/Paris' element={<App pic = {paris.pic} description = {paris.description} link = {paris.link}/>}></Route>
        <Route path='/London' element={<App pic = {london.pic} description = {london.description} link = {london.link}/>}></Route>
        <Route path='*' element={<App pic = ""/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)