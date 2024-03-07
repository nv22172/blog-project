import React from "react"
import { images } from "../../../constants";

const Hero = () => {
    return(
        <section>
        <div>
            <h1>read the most interesting article</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quo ullam temporibus hic, consequuntur amet nisi nobis. 
                 Fuga sequi ipsum ullam? Reiciendis doloribus sapiente officiis aliquid quaerat,
                  voluptatibus sint voluptas in!
            </p>
        <div>
            <div>
                <input type="text" />
            </div>
            <button>Search</button>
        </div>
        <div>
            <span>Popular Tags:</span>
            <ul>
                <li>Design</li>  
                <li> user experience</li>  
                 <li>user interfaces</li>   
            </ul>
        </div>
        </div>
        <div>
            <img src={images} alt="" />
        </div>
        </section>
    );
};
export default Hero