function P_cards() {
    return (
        <div className="col-span-1">
            <a href=""><div className="bg-white rounded-md shadow-md overflow-hidden w-276 h-88 flex p-2">

                {/* Left Section with Image */}
                <div className="flex-shrink-0">
                    <img src="https://assets.leetcode.com/study_plan_v2/top-interview-150/cover" alt="Image" className=" rounded w-16 h-16 object-cover" />
                </div>

                {/* Right Section with Headings */}
                <div className="flex flex-col justify-center p-4 pb-0 pt-0">
                    <h1 className="text-xl font-serif">Larger Heading</h1>
                    <h2 className="text-sm font-serif text-gray-600">Smaller Heading</h2>
                </div>

            </div></a>

        </div>
    )
}
export default P_cards