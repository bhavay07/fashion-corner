import Canvas from './canvas';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
      <HomePage />
      <ProductDetails />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
