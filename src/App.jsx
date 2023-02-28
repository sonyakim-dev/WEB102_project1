import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Store from './Components/Store'

const boba_store = [
  {
    name: "Boba Sky",
    location: "8450 E Valley Blvd, Rosemead, CA 91770",
    website: "https://boba-sky.business.site/?utm_source=gmb&utm_medium=referral",
    image: "https://lh5.googleusercontent.com/p/AF1QipM1p6lgqaj755_2Ky9LWSDAPhGyLQc5__JiL3Zw=w408-h295-k-no",
  },
  {
    name: "Boba Ave 8090",
    location: "140 Valley Blvd #118B, San Gabriel, CA 91776",
    image: "https://lh5.googleusercontent.com/p/AF1QipP2mxB999cfpHeosikDqbhFna3zMiH8m5bhqY3y=w408-h306-k-no",
  },
  {
    name: "Twinkle Tea",
    location: "406 E Valley Blvd, Alhambra, CA 91801",
    website: "https://www.toasttab.com/twinkletea-alhambra",
    image: "https://lh5.googleusercontent.com/p/AF1QipP870qvkHWBmhkT0oFLf7CrxI7bq-TK5E5cs2TC=w408-h306-k-no",
  },
  {
    name: "Tan-Cha",
    location: "227 W Valley Blvd #118, San Gabriel, CA 91776", 
    website: "http://tan-cha.net/",
    image: "https://lh5.googleusercontent.com/p/AF1QipOFjDjxO7AuGX8Pf_Jdc3KwFDI8dMx1Ra2N-wLi=w408-h306-k-no",
  },
  {
    name: "Boba Corner", 
    location: "1635 S San Gabriel Blvd, San Gabriel, CA 91776", 
    image: "https://lh5.googleusercontent.com/p/AF1QipN1VxD1SMstq4ULuvxWF9jYK-OkNZFWTO_YgzVI=w408-h307-k-no",
  },
  {
    name: "ViVi Bubble Tea",
    location: "311 E Valley Blvd, San Gabriel, CA 91776",
    website: "https://vivi-bubble-tea-taiwanese-restaurant.business.site/?utm_source=gmb&utm_medium=referral",
    image: "https://lh5.googleusercontent.com/p/AF1QipNBV_UPbCIouncpNfd9TXCU2YxOGTSQFWhUoVB3=w408-h671-k-no",
  },
  {
    name: "BoBaPOP Tea Bar",
    location: "625 E Valley Blvd Ste L, San Gabriel, CA 91776",
    website: "https://order.snackpass.co/Bobapop-Tea-Bar-San-Gabriel-62aa653675f28400eb5d51cd",
    image: "https://lh5.googleusercontent.com/p/AF1QipM8NFLfl40ESzbnXc2Zi4DvSIaSjH_i5ssaP1rQ=w426-h240-k-no",
  },
  {
    name: "Xing Fu Tang",
    location: "1468 E Valley Blvd, Alhambra, CA 91801",
    website: "http://xingfutang.com/",
    image: "https://lh5.googleusercontent.com/p/AF1QipOfMyFxhtGc_9ksXcZ0ZAkdzPpRYLI42D60lG8U=w408-h306-k-no",
  },
  {
    name: "Sunright Tea Studio - San Gabriel",
    location: "1245 S San Gabriel Blvd, San Gabriel, CA 91776",
    website: "http://snrtea.com/",
    image: "https://lh5.googleusercontent.com/p/AF1QipOv7a-sp4v1_v6hjk7RRKH9QsIBkhVaCgVz6ck6=w408-h306-k-no",
  },
  {
    name: "Citeadrinks (San Gabriel)",
    location: "529 Valley Blvd #138-A, San Gabriel, CA 91776",
    website: "https://citeadrinks.menutoorder.com/",
    image: "https://lh5.googleusercontent.com/p/AF1QipOPmonNKedMBlMEN7_2-lvZ4c_xSlBaQKNGcXGY=w408-h306-k-no",
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Boba Store in San Gabriel</h1>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "15px"}}>
        {boba_store.map((s) => (<Store name={s.name} location={s.location} website={s.website} image={s.image}/>))}
      </div>
    </div>
  )
}

export default App
