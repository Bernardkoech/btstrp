
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Projects from "./Pages/Projects/Projects";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import Cards from "./Pages/Cards/Cards";
import useCardData from "./components/UseCardData/UseCardData";
import ImageDetail from "./Pages/ImageDetail/ImageDetail";
import WhatsAppChat from "./components/Whatsapp/WhatsAppChat";
import Footer from "./components/Footer/Footer";

function App() {
  const { cards } = useCardData();

  return (
    <Router>
      <div className="App" style={{ marginTop: '60px' }}>
        <Navbar />



        <div className="content">

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/cards"
              element={cards && <Cards cards={cards} />} // Pass the cards as a prop
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/image/:id" element={<ImageDetail />} />
            <Route path="/whatsapp" element={<WhatsAppChat />}></Route>
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
