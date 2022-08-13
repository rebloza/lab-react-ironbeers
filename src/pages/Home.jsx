import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";


import {Link} from "react-router-dom"


function Home() {
  return (
    <div  >
        <div> 
            <Link to="/beers">
              <img  src={beers} alt="beers" />
              <div > 
                <h3>All Beers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis reiciendis porro, sit dolores expedita nesciunt et suscipit esse corrupti, illum, debitis consectetur accusantium deserunt quis labore sint libero aperiam excepturi?</p>
              </div>
            </Link>
        </div>

        <div>
            <Link to="/random-beer">
              <img  src={randomBeer} alt="random-beer" />
              <div > 
                <h3>Random Beers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut, animi aperiam aspernatur consequuntur aliquam corporis rerum quia perspiciatis sit fuga dignissimos sint expedita nobis temporibus perferendis unde illum maiores.</p>
              </div>
              
            </Link>
        </div>
        <div>
            <Link to="/new-beer">
              <img  src={newBeer} alt="new-beer" />
              <div >
                <h3>New Beer</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur doloribus accusamus officiis odio facere unde molestias expedita dicta! Fugit est, cum doloribus repellat reprehenderit aliquam hic vitae quidem delectus libero!</p>
              </div>
              
            </Link>
        </div>
    </div>
  )
}

export default Home