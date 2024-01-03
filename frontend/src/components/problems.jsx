

function Problems() {
    return (
        <div className="grid grid-cols-4 gap-4 h-screen p-4 bg-gray-200">

            {/* First child div with 3 columns */}
            <div className="col-span-3 bg-white p-8 grid grid-cols-3 gap-4">
                {/* Div with a column space of 3 */}
                <div className="col-span-3 grid grid-cols-3 gap-4" id="container">
                    <div className="col-span-1 ">
                       <a href=""> <img className="h-full" src="https://assets.leetcode.com/users/images/7b7c1fab-b877-47fa-bc72-548fbcc9f94a_1703037199.2794356.jpg" alt="problem page image" /></a>
                    </div>

                    <div className="col-span-1 ">
                    <a href=""> <img className="h-full" src="https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg" alt="problem page image" /></a>

                    </div>

                    <div className="col-span-1 ">
                    <a href=""> <img className="h-full" src="https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png" alt="problem page image" /></a>

                    </div>


                </div>

                {/* Second set of nested divs */}
                <div className="col-span-3 grid grid-cols-3 gap-4" id="container1">
                    <div className="col-span-3 p-4 pl-0 flex items-center justify-between">
                        <p className=" text-2xl text-neutral-600">Study plan</p>
                        <a href="">See all</a>
                    </div>
                    <div className="col-span-1 bg-blue-200 p-4">
                        <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
                    </div>

                    <div className="col-span-1 bg-green-200 p-4">
                        <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
                    </div>

                    <div className="col-span-1 bg-yellow-200 p-4">
                        <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
                    </div>
                    <div className="col-span-1 bg-blue-200 p-4">
                    <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
                    </div>

                    <div className="col-span-1 bg-green-200 p-4">
                    <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
                    </div>

                    <div className="col-span-1 bg-yellow-200 p-4">
                    <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
                    </div>
                </div>
                {/* Additional divs with a column space of 3 */}
                <div className="col-span-3 bg-blue-200 p-4">
                <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
                </div>

                <div className="col-span-3 bg-green-200 p-4">
                <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
                </div>

                <div className="col-span-3 bg-yellow-200 p-4">
                <h2 className="text-lg font-bold mb-2"></h2>
                        <p></p>
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

export default Problems;
