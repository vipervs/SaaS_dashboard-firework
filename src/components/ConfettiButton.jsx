import React from 'react';

const ConfettiButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      aria-label="Trigger celebration animation"
    >
      Celebrate! 🎉
    </button>
  );
}

export default ConfettiButton;
