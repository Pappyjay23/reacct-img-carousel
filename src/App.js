import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./data/SliderData";
import "./App.css";

function App() {
	return <ImageSlider slides={SliderData} />;
}

export default App;
