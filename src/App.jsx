import Navbar from './components/Navbar';
import Features from './components/Features';
import NewRelease from './components/NewRelease';
import GridSection from './components/GridSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Home Section: Features ko Home bana dete hain */}
      <div id="home">
        <Features />
      </div>

      {/* Browse Section: NewRelease ko Browse bana dete hain */}
      <div id="browse">
        <NewRelease />
      </div>

      {/* About Section: GridSection ko About bana dete hain */}
      <div id="MyList">
        <GridSection />
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 z-[9999] hover:scale-110"
      >
        ↑
      </button>
    </div>
  );
}

export default App;