import React from 'react';
import Modal from 'react-modal';

const AuthModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-gray-900 text-white p-8 rounded-2xl w-full max-w-sm mx-auto mt-20 border border-gray-700 outline-none shadow-2xl"
      overlayClassName="fixed inset-0 bg-black/80 z-[9999] flex items-start justify-center p-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

      {/* Social Login Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Continue with Google
        </button>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Continue with Facebook
        </button>
        <button className="w-full bg-sky-500 text-white py-2 rounded-lg font-semibold hover:bg-sky-600 transition">
          Continue with Twitter
        </button>
      </div>

      <div className="my-6 text-center text-gray-500 text-sm">OR</div>

      {/* Email Input */}
      <input type="email" placeholder="Email Address" className="w-full bg-gray-800 p-3 rounded-lg mb-4 border border-gray-700 outline-none focus:border-red-600" />
      <button className="w-full bg-red-600 py-3 rounded-lg font-bold hover:bg-red-700 transition">
        Continue
      </button>

      <button onClick={onRequestClose} className="mt-6 w-full text-gray-400 text-sm hover:text-white">
        Cancel
      </button>
    </Modal>
  );
};

export default AuthModal;