import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checker from "./pages/Checker";
import Map from "./pages/Map";
import Insights from "./pages/Insights";
import About from "./pages/About";

const App = () => {
	return (
		<BrowserRouter>
			<div className="bg-[#FFFFFE] w-full h-screen">
				<Navbar />

				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/checker" element={<Checker />} />
						<Route path="/map" element={<Map />} />
						<Route path="/insights" element={<Insights />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
