import P_cards from "./problem_cards1";
import P_buttons from "./problem_button_pill";
import P_dropdown from "./problem_dropdown_button";


function Problems() {

    return (
        <div className="grid grid-cols-4 gap-4 h-screen p-4 bg-gray-200 px-20">

            {/* First child div with 3 columns */}
            <div className="col-span-3 bg-white p-8 grid grid-cols-3 gap-4">
                {/* Div with a column space of 3 */}
                <div className="col-span-3 grid grid-cols-3 gap-4" id="container">
                    <div className="col-span-1 rounded-md ">
                        <a href=""> <img className=" rounded-md " src="https://assets.leetcode.com/users/images/7b7c1fab-b877-47fa-bc72-548fbcc9f94a_1703037199.2794356.jpg" alt="problem page image" /></a>
                    </div>

                    <div className="col-span-1 ">
                        <a href=""> <img className=" rounded-md h-full" src="https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg" alt="problem page image" /></a>
                    </div>

                    <div className="col-span-1 ">
                        <a href=""> <img className=" rounded-md h-full" src="https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png" alt="problem page image" /></a>
                    </div>


                </div>

                {/* Second set of nested divs */}
                <div className="col-span-3 grid grid-cols-3 gap-4" id="container1">
                    <div className="col-span-3 p-4 pl-0 flex items-center justify-between">
                        <p className=" text-2xl text-neutral-600">Study plan</p>
                        <a href="">See all</a>
                    </div>
                    <P_cards></P_cards>
                    <P_cards></P_cards>
                    <P_cards></P_cards>
                    <P_cards></P_cards>
                    <P_cards></P_cards>
                    <P_cards></P_cards>
                </div>
                {/* Additional divs with a column space of 3 */}
                <div className="col-span-3 bg-blue-200 p-4">
                    <h2 className="text-lg font-bold mb-2"></h2>
                    <p></p>
                </div>

                <div className="col-span-3">
                    <div className="flex content-center overflow-hidden overflow-x-scroll no-scrollbar gap-4 ">
                        <P_buttons></P_buttons>
                        <P_buttons></P_buttons>
                        <P_buttons></P_buttons>
                        <P_buttons></P_buttons>
                        <P_buttons></P_buttons>
                        <P_buttons></P_buttons>
                        <P_buttons></P_buttons>
                        <P_buttons></P_buttons>
                    </div>

                </div>

                <div className="col-span-3">
                    <div className="mb-3 flex flex-col">
                        <div className="flex w-full flex-wrap gap-2">
                            <P_dropdown />
                            <P_dropdown />
                            <P_dropdown />
                            <P_dropdown />
                            <div className="relative flex-1">
                                <div className="flex items-center bg-gray-100 rounded p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    className="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search questions"
                                    className="outline-none ml-2 flex-grow bg-gray-100"
                                    autoComplete="off"
                                />
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second child div with 1 column */}
            <div className="col-span-1 bg-gray-300 p-8">
                {/* Content for the second div */}
                <h2 className="text-lg font-bold mb-2"></h2>
                <p></p>
            </div>
        </div>
    );
}

export default Problems