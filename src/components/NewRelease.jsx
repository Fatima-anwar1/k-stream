import { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const NewRelease = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalIsOpen]);

  return (
    <div className="px-10 py-16 bg-black">
      <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-red-600 pl-4">
        Coming Soon
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-left">
          <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-widest">
            Exclusive on K-STREAM
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 leading-tight">
            When Life Gives You Tangerines
          </h1>
          <p className="text-gray-400 mt-4 max-w-md">
            A heartwarming story coming exclusively to K-STREAM this November. Get ready for the story!
          </p>
        </div>

        {/* Right Side: Image + Button container */}
<div className="w-full md:w-[400px] flex flex-col gap-4">
  {/* Image */}
  <div className="h-64 rounded-xl overflow-hidden shadow-2xl shrink-0">
    <img 
      src="/assets/Tangerines.jpg" 
      alt="When Life Gives You Tangerines" 
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Button container - justify-end se right side par chala jayega */}
  <div className="flex justify-end">
    <button 
      onClick={() => setModalIsOpen(true)}
      className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-lg shadow-red-600/20"
    >
      Watch Trailer 🎬
    </button>
  </div>
</div>
      </div>

      {/* Modal remains the same */}
      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName="fixed inset-0 bg-black/80 z-[99999] flex items-center justify-center"
        className="relative bg-black p-2 rounded-lg w-full max-w-3xl border border-gray-800 outline-none"
      >
        <button 
          onClick={() => setModalIsOpen(false)} 
          className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-500"
        >
          ×
        </button>
        <iframe 
          className="w-full h-64 md:h-[400px]"
          src="https://www.youtube.com/embed/pxG__ziIbuo?autoplay=1" 
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default NewRelease;