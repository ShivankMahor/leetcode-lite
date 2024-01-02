import Navbar from "./navbar";
import Card from "./explore_cards";

let cardimgaddress = [
    "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png",
    "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png",
    "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png",
    "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
    "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
    "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
    "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
    "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
    "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
    "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
    "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
];

function Explore() {
    const cardData = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        imageUrl: cardimgaddress[index],
        chapters: index + 5,
        items: index * 2 + 10,
        progress: Math.floor(Math.random() * 100),
    }));

    return (
        <div>
            <Navbar />
            <div className="top-heading containers px-20">
                <div className="label text-base text-slate-300">welcome to</div>
                <div className=" flex items-center justify-between">
                    <div className="title text-3xl text-neutral-600">Leetcode Explore </div>
                </div>
            </div>
            <div className="mb-30 pt-30">
                <p> </p>
            </div>
            <div className="flex flex-col bg-white px-20 mt-7">
                <h1
                    className="flex py-5 lg:px-1 md:px-1 px-6 text-4xl text-neutral-600"
                >
                Featured
                </h1>
                <div className="flex overflow-x-scroll pb-0 hide-scroll-bar ml-0">
                    <div className="flex flex-nowrap lg:ml-0 md:ml-0 ml-0">
                        {cardData.map((card) => (
                            <Card key={card.id} data={card} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white px-20 mt-7">
                <h1
                    className="flex py-5 lg:px-1 md:px-1 px-6 text-4xl text-neutral-600"
                >
                Interview
                </h1>
                <div className="flex overflow-x-scroll pb-0 hide-scroll-bar ml-0">
                    <div className="flex flex-nowrap lg:ml-0 md:ml-0 ml-0">
                        {cardData.map((card) => (
                            <Card key={card.id} data={card} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white px-20 mt-7">
                <h1
                    className="flex py-5 lg:px-1 md:px-1 px-6 text-4xl text-neutral-600"
                >
                Learn
                </h1>
                <div className="flex overflow-x-scroll pb-0 hide-scroll-bar ml-0">
                    <div className="flex flex-nowrap lg:ml-0 md:ml-0 ml-0">
                        {cardData.map((card) => (
                            <Card key={card.id} data={card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
