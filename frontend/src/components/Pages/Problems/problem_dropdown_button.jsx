import { useState } from "react";
function P_dropdown({name}){
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
      setIsOpen(!isOpen);}
    return(
        <div className="relative flex-1 inline-block text-left">
                        <button
                            type="button"
                            onClick={toggleDropdown}
                            className="inline-flex justify-center bg-gray-100 rounded items-center p-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        >
                            {name}
                            <svg
                                className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"
                            >
                                <path fill-rule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Item 1
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Item 2
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Item 3
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
    )
}
export default P_dropdown