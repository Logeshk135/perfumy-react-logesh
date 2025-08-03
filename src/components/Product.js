import one from "../asstes/images/one.jpg"
import two from "../asstes/images/two.jpg"
import three from "../asstes/images/three.jpg"


function Product() {
  return (
    <div className="product">
      <div class="box">
        <img src={one} alt="Perfume 1" />
        <p>Fogg Wood Extreme, Eau De Parfum, Lounge Men's Perfume, 100ml</p>
      </div>

      <div class="box">
        <img src={two} alt="Perfume 2" />
        <p>Fogg Wood Extreme, Eau De Parfum, Lounge Men's Perfume, 100ml</p>
      </div>

      <div class="box">
        <img src={three} alt="Perfume 3" />
        <p>Fogg Wood Extreme, Eau De Parfum, Lounge Men's Perfume, 100ml</p>
      </div>
    </div>
  )
}

export default Product