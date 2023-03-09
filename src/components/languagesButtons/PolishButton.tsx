import React from "react";

interface Props {
  active: boolean;
}

const PolishButton: React.FC<Props> = ({ active }) => {
  return active ? (
    <>
      <svg className="w-5 h-5 mr-2 rounded-full border" viewBox="0 0 512 512">
        <rect x="0" y="0" width="512" height="512" fill="#fff" />
        <rect x="0" y="0" width="512" height="256" fill="#fff" />
        <rect x="0" y="256" width="512" height="256" fill="#dc143c" />
      </svg>
      Polski
    </>
  ) : (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <div className="inline-flex items-center">
        <svg
          className="h-3.5 w-3.5 rounded-full mr-2 border"
          viewBox="0 0 512 512"
        >
          <rect x="0" y="0" width="512" height="512" fill="#fff" />
          <rect x="0" y="0" width="512" height="256" fill="#fff" />
          <rect x="0" y="256" width="512" height="256" fill="#dc143c" />
        </svg>
        Polski
      </div>
    </a>
  );
};

export default PolishButton;
