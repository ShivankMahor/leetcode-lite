function P_buttons() {
    return (
        <a href="">
            <div className="flex content-center justify-center whitespace-nowrap rounded-full h-10 bg-gray-300 p-2 text-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="mr-2 hidden h-5 w-5 lg:block text-label-r m-2 mt-1"
                >
                    <path
                        fillRule="evenodd"
                        d="M20 10v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-2 2zM6 10v9h12v-9H6zM4 6v2h16V6H4zm6 7.5a1 1 0 110-2h4a1 1 0 110 2h-4z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <span className="text-gray-600 ">All Topics</span>
            </div>
        </a>
    )
}

export default P_buttons