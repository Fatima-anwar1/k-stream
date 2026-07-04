// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-black py-12 px-10 border-t border-white/10 text-center">
      <h2 className="text-red-600 font-bold text-2xl mb-4 uppercase">K-STREAM</h2>
      <p className="text-gray-500 text-sm mb-6">© 2026 K-Stream All rights reserved.</p>
      
      <div className="flex justify-center gap-6 text-gray-400">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
        <a href="#" className="hover:text-white">Contact Us</a>
      </div>
      
      <div className="mt-8 flex justify-center gap-4 text-2xl">
        <span>📸</span> <span>🐦</span> <span>📺</span>
      </div>
    </footer>
  );
};
export default Footer;