import ContestBigCard from "./contest_big_card";
import ContestMediumCard from "./contest_medium_card";
import ContestRanking from "./contest_ranking";
import ContestSmallCard from "./contest_small_card";
import Footer from "../../footer";
import Navbar from "../../navbar";
import { LuTrophy } from "react-icons/lu";
import trophy from '../../../assets/TrophyCup.png'

function Contest() {
  return (
    <>
      <Navbar></Navbar>
      <div className="px-64 bg-[#1a1a1a] text-white pt-12">
        <div className="p-4 pt-8">
          <div>
            <span className="px-3 py-2 rounded-xl bg-gray-600">Wish you first AC🤞</span>
            <div className="text-center">
              <div className="h-[100px] flex justify-center my-4"><img src={trophy} alt="Error" /></div>
              <div className="flex justify-center text-4xl font-extralight"><div className="mr-[10px] font-semibold">LeetCode</div>Contest</div>
              <div className="text-sm my-6 text-gray-300/70">Contest every week. Compete and see your ranking!</div>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <ContestBigCard></ContestBigCard>
            <ContestBigCard></ContestBigCard>
          </div>
          <div>
            <div className="flex justify-between py-4">
              <div className="text-xl font-semibold">Featured Contests</div>
              <div className="text-blue-600">Sponser a contest</div>
            </div>
            <div className="flex gap-4">
              <ContestMediumCard></ContestMediumCard>
              <ContestMediumCard></ContestMediumCard>
              <ContestMediumCard></ContestMediumCard>
            </div>
            <div className="flex gap-4 mt-16">
              <div className="w-4/6 bg-gray-500/20 rounded-2xl p-4">
                <div className="flex justify-between mb-5">
                  <div className="flex gap-12">
                    <div className="bg-gray-500/30 rounded-md px-4 py-1 font-semibold">Past Contests</div>
                    <div>My Contests</div>
                  </div>
                  <div className="text-xs">What's a Virtual Contest?</div>
                </div>
                <div className="grid gap-6">
                  {[...Array(15)].map((_, index) => (
                    <ContestSmallCard key={index} week={370+index} />
                  ))}
                </div>
              </div>
              <div className="bg-gray-500/20 rounded-2xl p-4 w-2/6">
                <div className="flex items-center gap-2 font-semibold mb-8">
                  <div><LuTrophy /></div>
                  <div>Global Ranking</div>
                </div>
                <div className="grid gap-6">
                  {[...Array(20)].map((_, index) => (
                    <ContestRanking key={index} rank={index+1} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Contest;