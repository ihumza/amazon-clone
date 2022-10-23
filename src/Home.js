import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home '>
            <img className='home__image' src="./banner__image.jpg" alt="" />
            <div className="home__row">
                <Product
                    id="123"
                    price={11.99}
                    title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY436_FMwebp_QL65_.jpg"
                />
                <Product
                    id="6453"
                    price={99.99}
                    title="Razer Kraken Gaming Headset: Lightweight Aluminum Frame, Retractable Noise Isolating Microphone, For PC, PS4, PS5, Switch, Xbox One, Xbox Series X & S, Mobile, 3.5 mm Audio Jack – Green
                    "
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71BKQhFzDmL._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="8768"
                    price={20.99}
                    title="HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads, Durable Aluminum Frame, Detachable Microphone, Works with PC, PS5, PS4, Xbox Series X|S, Xbox One – Gun Metal"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71M5l+O4OFL._AC_UY436_FMwebp_QL65_.jpg"
                />
                <Product
                    id="123"
                    price={11.99}
                    title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY436_FMwebp_QL65_.jpg"
                />
                <Product
                    id="123"
                    price={11.99}
                    title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123"
                    price={11.99}
                    title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row"></div>
            <div className="home__row"></div>
        </div>
    )
}

export default Home