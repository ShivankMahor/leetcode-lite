// import Navbar from "./navbar";
// import Card from "./explore_cards";
// import Footer from "./footer";

// let cardimgaddress = [
//     "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png",
//     "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png",
//     "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png",
//     "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
//     "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
//     "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
//     "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
//     "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
//     "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
//     "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
//     "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
// ];

// function Explore() {
//     const cardData = Array.from({ length: 4 }, (_, index) => ({
//         id: index + 1,
//         imageUrl: cardimgaddress[index],
//         chapters: index + 5,
//         items: index * 2 + 10,
//         progress: Math.floor(Math.random() * 100),
//     }));

//     return (
//         <>
//             <Navbar />
//             <div className="mx-20 pt-12">
//                 <div className="top-heading containers px-20">
//                     <div className="label text-base text-slate-300">Welcome to</div>
//                     <div className=" flex items-center justify-between">
//                         <div className="title text-3xl text-neutral-600">Leetcode Explore </div>
//                     </div>
//                 </div>
//                 <div className="mb-30 pt-30">
//                     <p> </p>
//                 </div>
//                 <div className="flex flex-col bg-white px-20 mt-7">
//                     <h1
//                         className="flex py-5 lg:px-1 md:px-1 px-6 text-4xl text-neutral-600"
//                     >
//                         Featured
//                     </h1>
//                     <div className="flex overflow-x-scroll pb-0 no-scrollbar ml-0">
//                         <div className="flex flex-nowrap lg:ml-0 md:ml-0 ml-0 justify-between">
//                             {cardData.map((card) => (
//                                 <Card key={card.id} data={card} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col bg-white px-20 mt-7">
//                     <h1
//                         className="flex py-5 lg:px-1 md:px-1 px-6 text-4xl text-neutral-600"
//                     >
//                         Interview
//                     </h1>
//                     <div className="flex overflow-x-scroll pb-0 no-scrollbar ml-0">
//                         <div className="flex flex-nowrap lg:ml-0 md:ml-0 ml-0">
//                             {cardData.map((card) => (
//                                 <Card key={card.id} data={card} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col bg-white px-20 mt-7">
//                     <h1
//                         className="flex py-5 lg:px-1 md:px-1 px-6 text-4xl text-neutral-600"
//                     >
//                         Learn
//                     </h1>
//                     <div className="flex overflow-x-scroll pb-0 no-scrollbar ml-0">
//                         <div className="flex flex-nowrap lg:ml-0 md:ml-0 ml-0">
//                             {cardData.map((card) => (
//                                 <Card key={card.id} data={card} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <Footer></Footer>
//             </div>
//         </>
//     );
// }

// export default Explore;
import Navbar from "./navbar";
import Card from "./explore_cards";
import Footer from "./footer";

const exploreSections = [
  {
    title: "Featured",
    cards: [
      {
        id: 1,
        imageUrl:
          "https://assets.leetcode.com/explore/cards/leetcodes-interview-crash-course-data-structures-and-algorithms/img-1663091244.png",
        heading: "Crash Course",
        subHeading: "Data Structures & Algorithms",
        chapters: 8,
        items: 20,
        progress: 65,
      },
      {
        id: 2,
        imageUrl:
          "https://assets.leetcode.com/explore/cards/system-design-for-interviews-and-beyond/img-1676672273.png",
        heading: "System Design",
        subHeading: "Interviews & Beyond",
        chapters: 6,
        items: 15,
        progress: 42,
      },
    ],
  },
  {
    title: "Interview",
    cards: [
      {
        id: 3,
        imageUrl:
          "https://assets.leetcode.com/explore/cards/machine-learning-101/img",
        heading: "30 Days of Python",
        subHeading: "Language Mastery",
        chapters: 10,
        items: 25,
        progress: 80,
      },
      {
        id: 4,
        imageUrl:
          "https://assets.leetcode.com/explore/cards/heap/img.png",
        heading: "Top Interview Qs",
        subHeading: "Easy Level",
        chapters: 5,
        items: 12,
        progress: 50,
      },
    ],
  },
  {
    title: "Learn",
    cards: [
      {
        id: 5,
        imageUrl:
          "https://assets.leetcode.com/explore/cards/recursion-i/img",
        heading: "Recursion I",
        subHeading: "Problem Solving",
        chapters: 7,
        items: 18,
        progress: 72,
      },
      {
        id: 6,
        imageUrl:
          "https://assets.leetcode.com/explore/cards/linked-list/img",
        heading: "Linked List",
        subHeading: "Foundations",
        chapters: 4,
        items: 10,
        progress: 33,
      },
    ],
  },
];

function Explore() {
  return (
    <>
      <Navbar />
      <div className="mx-20 pt-12">
        <div className="top-heading containers px-20">
          <div className="label text-base text-slate-300">Welcome to</div>
          <div className="flex items-center justify-between">
            <div className="title text-3xl text-neutral-600">Leetcode Explore</div>
          </div>
        </div>

        {exploreSections.map((section) => (
          <div key={section.title} className="flex flex-col bg-white px-20 mt-7">
            <h1 className="flex py-5 lg:px-1 md:px-1 px-6 text-4xl text-neutral-600">
              {section.title}
            </h1>
            <div className="flex overflow-x-scroll pb-2 no-scrollbar ml-0">
              <div className="flex flex-nowrap ml-0">
                {section.cards.map((card) => (
                  <Card key={card.id} data={card} />
                ))}
              </div>
            </div>
          </div>
        ))}

        <Footer />
      </div>
    </>
  );
}

export default Explore;
