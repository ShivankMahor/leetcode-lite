function Card({ data }){
    const { imageUrl, chapters, items, progress } = data;

    return (
        <div className="inline-block px-3">
            <div className="relative w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                    src={imageUrl}
                    alt="Loading"
                    className="w-full h-2/3 object-cover"
                />

                <div className="absolute top-0 left-0 p-4 text-white">
                    <p className="text-sm font-bold">Shorter Line</p>
                    <p className="text-2xl font-bold">Data Structure and Algorithim</p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 px-4 pb-5 pt-8 flex justify-between items-end">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-navy-700 ">{chapters}</p>
                        <p className="text-sm font-normal text-gray-600">Chapters</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl font-bold text-navy-700">
                            {items}
                        </p>
                        <p className="text-sm font-normal text-gray-600">Items</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="w-20 h-20 bg-white border-4 border-grey-200 rounded-full flex items-center justify-center mb-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="black"
                                viewBox="0 0 20 24"
                                stroke="clack"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 3l14 9L5 21V3z"
                                />
                            </svg>
                        </div>
                        <p className="text-sm pt-2 font-semibold text-gray-600 text-center">{progress}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
