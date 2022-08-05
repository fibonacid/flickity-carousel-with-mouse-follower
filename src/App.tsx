import "./App.css";
import Carousel, { CarouselCell } from "./Carousel";

const IMAGES = [
  "https://source.unsplash.com/random/1200x1200/?nature,mountains",
  "https://source.unsplash.com/random/1200x1200/?nature,clouds",
  "https://source.unsplash.com/random/1200x1200/?nature,ocean",
  "https://source.unsplash.com/random/1200x1200/?nature,waves",
  "https://source.unsplash.com/random/1200x1200/?nature,cliffs",
  "https://source.unsplash.com/random/1200x1200/?nature,trees",
  "https://source.unsplash.com/random/1200x1200/?nature,hills",
  "https://source.unsplash.com/random/1200x1200/?nature,sea",
];

function App() {
  return (
    <div className="App">
      <Carousel>
        {IMAGES.map((image, index) => (
          <CarouselCell key={index}>
            <img src={image} width="1200" height="1200" />
          </CarouselCell>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
