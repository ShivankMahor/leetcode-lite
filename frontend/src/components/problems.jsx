import P_cards from "./problem_cards1";
import P_buttons from "./problem_button_pill";
import P_dropdown from "./problem_dropdown_button";
import PaginatedTable from "./paginated_table";
function getRandomTopic(){
    const topics = ['Algorithm Design', 'Data Structures', 'Dynamic Programming', 'Graph Theory', 'Sorting Algorithms', 'Recursion', 'Greedy Algorithms'];
    return topics[Math.floor(Math.random() * topics.length)];
};

function getRandomSolution(){
    return(
        Math.random() > 0.5 ? 'Yes' : 'No'
        )};

function getRandomDifficulty (){
    const difficulties = ['easy', 'medium', 'hard'];
    return difficulties[Math.floor(Math.random() * difficulties.length)];
};

function generateRandomData (count){
    const data = [];
    for (let i = 0; i < count; i++) {
        const topic = getRandomTopic();
        const solution = getRandomSolution();
        const difficulty = getRandomDifficulty();
        data.push({ topic, solution, difficulty });
    }

    return data;
};


function Problems() {
    const data = generateRandomData(500);
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
                            <P_dropdown name={'Lists'} />
                            <P_dropdown name={'Difficulty'}  />
                            <P_dropdown name={'Status'} />
                            <P_dropdown name={'Tags'} />
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
                                </div>
                            </div>
                            <div className="relative inline-bolck">
                                <button
                                    type="button"
                                    className="flex items-center p-2 rounded-md bg-gray-100 text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="1em"
                                        height="1em"
                                        fill="gray-600"
                                        className="pointer-events-none h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.174 5.619a8.064 8.064 0 011.635-.946l.29-1.158A2 2 0 0111.039 2h1.922a2 2 0 011.94 1.515l.29 1.158c.584.252 1.132.57 1.635.946l1.15-.329a2 2 0 012.282.923l.961 1.665a2 2 0 01-.342 2.437l-.86.832a8.151 8.151 0 010 1.888l.86.83a2 2 0 01.342 2.438l-.96 1.665a2 2 0 01-2.283.923l-1.15-.329a8.063 8.063 0 01-1.635.946l-.29 1.158a2 2 0 01-1.94 1.515H11.04a2 2 0 01-1.94-1.515l-.29-1.158a8.064 8.064 0 01-1.635-.946l-1.15.329a2 2 0 01-2.282-.923l-.961-1.665a2 2 0 01.342-2.437l.86-.831a8.158 8.158 0 010-1.889l-.86-.83a2 2 0 01-.342-2.438l.96-1.665a2 2 0 012.283-.923l1.15.329zm-1.7 1.594l-.961 1.665 1.57 1.518-.114.982a6.157 6.157 0 000 1.425l.114.982-1.57 1.518.96 1.665 2.104-.601.794.593c.38.284.793.523 1.23.711l.908.392.53 2.118h1.922l.53-2.118.909-.392a6.07 6.07 0 001.23-.711l.793-.593 2.103.601.961-1.665-1.57-1.518.114-.982a6.172 6.172 0 000-1.425l-.114-.982 1.57-1.518-.96-1.665-2.104.601-.794-.593a6.067 6.067 0 00-1.23-.71l-.908-.392L12.96 4H11.04l-.53 2.119-.909.391a6.064 6.064 0 00-1.23.711l-.793.593-2.103-.601zM12 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="relative flex-1">
                                <div className="flex items-center rounded p-2 pt-1">
                                    <span className="rounded-full bg-green-500 p-2 flex justify-center content-center h-8 w-8 shadow-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"
                                            fill="none"
                                            stroke="currentColor"
                                            className="h-18 w-18 text-white"

                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.398 18.296H5.38a3.6 3.6 0 002.93-1.508l1.023-1.433m11.522-9.71h-2.98a3.6 3.6 0 00-2.93 1.507l-1.146 1.603m5.298-5.747l2.502 2.636-2.502 2.637m0 7.438l2.502 2.636-2.502 2.637M2.398 6.052H5.38a3.6 3.6 0 012.93 1.507l6.635 9.289a3.6 3.6 0 002.93 1.507h2.98"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-green-500 text-lg pl-2">Pick one</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="container mx-auto mt-0">
                        <PaginatedTable data={data} itemsPerPage={25} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Second child div with 1 column */}
            <div className="col-span-1 bg-gray-300 p-8">
                {/* Content for the second div */}
            </div>
        </div>
    );
}

export default Problems