import React from "react";

interface Props {
  active: boolean;
}

const GermanButton: React.FC<Props> = ({ active }) => {
  return active ? (
    <>
      <svg className="w-5 h-5 mr-2 rounded-full" viewBox="0 0 512 512">
        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
        <path d="M0 0h512v170.7H0z" />
        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
      </svg>
      Deutsch
    </>
  ) : (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <div className="inline-flex items-center">
        <svg className="h-3.5 w-3.5 rounded-full mr-2" viewBox="0 0 512 512">
          <path fill="#ffce00" d="M0 341.3h512V512H0z" />
          <path d="M0 0h512v170.7H0z" />
          <path fill="#d00" d="M0 170.7h512v170.6H0z" />
        </svg>
        Deutsch
      </div>
    </a>
  );
};

export default GermanButton;
