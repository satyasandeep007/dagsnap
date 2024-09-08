import React from 'react';

export default function Transactions({
  isDropdownOpen,
  toggleDropdown,
  toggleMenu,
  isMenuOpen,
  toggleConnectModal
}) {
  return (
    <div className="w-500 bg-gray-200 p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center"
            >
              DevNet 1.0
              <svg
                className={`w-4 h-8 ml-1 transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                } transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                <a
                  href=""
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                >
                  DevNet 1.0
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-400 hover:bg-gray-100"
                >
                 TestNet <span className="text-xs text-red-400 ml-1 italic">coming soon</span>
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-400 hover:bg-gray-100"
                >
                  MainNet <span className="text-xs text-red-400 ml-1 italic">coming soon</span>
                </a>
              </div>
            )}
          </div>
          <button
            onClick={() => window.open('https://mainnet.dagexplorer.io/', '_blank')}
            className="text-blue bg-white px-3 py-1 rounded-full text-sm flex items-center ml-4 h-11"
          >
            DAG Explorer
          </button>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-gray-600 bg-white px-3 py-1 rounded-full text-sm flex items-center ml-4"
            >
              <svg
                className="w-6 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3.75L19.125 7.875V16.125L12 20.25L4.875 16.125V7.875L12 3.75ZM12 5.48325L6.375 8.73975V15.2603L12 18.5167L17.625 15.2603V8.73975L12 5.48325ZM12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM12 13.5C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12C13.5 11.6022 13.342 11.2206 13.0607 10.9393C12.7794 10.658 12.3978 10.5 12 10.5C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12C10.5 12.3978 10.658 12.7794 10.9393 13.0607C11.2206 13.342 11.6022 13.5 12 13.5Z"
                      fill="#656D85"
                    ></path>
                  </svg>
                  <span className="ml-2">Settings</span>
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4.5C7.85625 4.5 4.5 7.85625 4.5 12C4.49915 13.5745 4.99411 15.1092 5.91466 16.3865C6.83521 17.6638 8.13461 18.6188 9.6285 19.116C10.0035 19.1813 10.1438 18.9562 10.1438 18.759C10.1438 18.5812 10.134 17.991 10.134 17.3625C8.25 17.7098 7.7625 16.9035 7.6125 16.4813C7.52775 16.2653 7.1625 15.6 6.84375 15.4215C6.58125 15.2812 6.20625 14.934 6.834 14.925C7.425 14.9152 7.8465 15.4687 7.9875 15.6937C8.6625 16.8277 9.741 16.509 10.1715 16.3125C10.2375 15.825 10.434 15.4972 10.65 15.3097C8.98125 15.1222 7.2375 14.475 7.2375 11.6063C7.2375 10.7903 7.52775 10.116 8.00625 9.59025C7.93125 9.40275 7.66875 8.634 8.08125 7.60275C8.08125 7.60275 8.709 7.40625 10.1438 8.37225C10.7543 8.2028 11.3851 8.11751 12.0188 8.11875C12.6563 8.11875 13.2938 8.20275 13.8938 8.3715C15.3278 7.3965 15.9563 7.6035 15.9563 7.6035C16.3688 8.63475 16.1063 9.4035 16.0313 9.591C16.509 10.116 16.8 10.7813 16.8 11.6063C16.8 14.4848 15.0473 15.1222 13.3785 15.3097C13.65 15.5437 13.8848 15.9938 13.8848 16.6973C13.8848 17.7 13.875 18.5063 13.875 18.7598C13.875 18.9563 14.016 19.1902 14.391 19.1152C15.8798 18.6126 17.1734 17.6557 18.0899 16.3794C19.0064 15.103 19.4996 13.5713 19.5 12C19.5 7.85625 16.1438 4.5 12 4.5Z"
                      fill="#656D85"
                    ></path>
                  </svg>
                  <span className="ml-2">Github</span>
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5876 6.59722C16.5402 6.1182 15.4279 5.76908 14.2669 5.57422C14.1207 5.82591 13.9583 6.16691 13.8447 6.43484C12.6098 6.25622 11.3838 6.25622 10.1659 6.43484C10.0523 6.16691 9.88174 5.82591 9.74371 5.57422C8.57458 5.76908 7.46227 6.1182 6.42221 6.59722C4.31937 9.69871 3.75104 12.7271 4.0352 15.7149C5.43169 16.7298 6.77947 17.3469 8.10369 17.7529C8.42845 17.3144 8.72075 16.8435 8.97244 16.3482C8.49341 16.1696 8.03874 15.9504 7.60031 15.6906C7.71398 15.6094 7.82765 15.5201 7.9332 15.4308C10.58 16.6405 13.4469 16.6405 16.0612 15.4308C16.1749 15.5201 16.2804 15.6094 16.3941 15.6906C15.9556 15.9504 15.501 16.1696 15.0219 16.3482C15.2737 16.8435 15.566 17.3144 15.8907 17.7529C17.2141 17.3469 18.57 16.7298 19.9592 15.7149C20.3083 12.2562 19.4063 9.25219 17.5876 6.59722ZM9.33779 13.8719C8.54211 13.8719 7.89258 13.1493 7.89258 12.2644C7.89258 11.3794 8.52587 10.6568 9.33779 10.6568C10.1416 10.6568 10.7992 11.3794 10.783 12.2644C10.783 13.1493 10.1416 13.8719 9.33779 13.8719ZM14.6729 13.8719C13.8772 13.8719 13.2268 13.1493 13.2268 12.2644C13.2268 11.3794 13.8609 10.6568 14.6729 10.6568C15.4766 10.6568 16.1343 11.3794 16.118 12.2644C16.118 13.1493 15.4848 13.8719 14.6729 13.8719Z"
                      fill="#656D85"
                    ></path>
                  </svg>
                  <span className="ml-2">Feedback</span>
                </a>
                <div className="border-t border-gray-100 my-1"></div>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleConnectModal();
                  }}
                  className="block px-4 py-3 text-sm text-green-600 hover:bg-gray-100 flex items-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7729 14.6522L15.7124 13.5902L16.7729 12.5297C17.1237 12.182 17.4023 11.7685 17.5928 11.3129C17.7832 10.8572 17.8818 10.3685 17.8829 9.87465C17.884 9.38081 17.7875 8.89162 17.5991 8.43517C17.4106 7.97871 17.1338 7.56398 16.7846 7.21479C16.4354 6.86559 16.0207 6.5888 15.5642 6.40032C15.1077 6.21183 14.6186 6.11536 14.1247 6.11645C13.6309 6.11753 13.1421 6.21614 12.6865 6.40662C12.2309 6.5971 11.8174 6.8757 11.4697 7.22642L10.4092 8.28767L9.34795 7.22717L10.4099 6.16667C11.3946 5.18206 12.73 4.62891 14.1224 4.62891C15.5149 4.62891 16.8503 5.18206 17.8349 6.16667C18.8196 7.15129 19.3727 8.48672 19.3727 9.87917C19.3727 11.2716 18.8196 12.6071 17.8349 13.5917L16.7737 14.6522H16.7729ZM14.6519 16.7732L13.5907 17.8337C12.6061 18.8183 11.2707 19.3714 9.8782 19.3714C8.48574 19.3714 7.15031 18.8183 6.1657 17.8337C5.18108 16.8491 4.62793 15.5136 4.62793 14.1212C4.62793 12.7287 5.18108 11.3933 6.1657 10.4087L7.22695 9.34817L8.28745 10.4102L7.22695 11.4707C6.87622 11.8183 6.59763 12.2319 6.40714 12.6875C6.21666 13.1431 6.11805 13.6319 6.11697 14.1257C6.11589 14.6195 6.21236 15.1087 6.40084 15.5652C6.58933 16.0216 6.86611 16.4364 7.21531 16.7856C7.56451 17.1348 7.97924 17.4115 8.43569 17.6C8.89215 17.7885 9.38133 17.885 9.87517 17.8839C10.369 17.8828 10.8578 17.7842 11.3134 17.5937C11.769 17.4032 12.1825 17.1246 12.5302 16.7739L13.5907 15.7134L14.6519 16.7739V16.7732ZM14.1209 8.81792L15.1822 9.87917L9.87895 15.1817L8.8177 14.1212L14.1209 8.81867V8.81792Z"
                      fill="#21A35D"
                    ></path>
                  </svg>
                  <span className="ml-2">Connect</span>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              ></path>
            </svg>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          no transactions
          <svg
            className="w-4 h-4 inline-block ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>View all transactions</span>
        <svg
          className="w-2 h-"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
