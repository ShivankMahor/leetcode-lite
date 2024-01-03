import ContestBigCard from "./contest_big_card";
import ContestMediumCard from "./contest_medium_card";
import ContestSmallCard from "./contest_small_card";
import Footer from "./footer";
import Navbar from "./navbar";

function Contest() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mx-64">
        <div>
          <div>
            <div>Wish you first AC</div>
            <div className="text-center">
              <div>Cup Image</div>
              <div><div>LeetCode</div> Contest</div>
              <div>Contest every week. Compete and see your ranking!</div>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <ContestBigCard></ContestBigCard>
            <ContestBigCard></ContestBigCard>
          </div>
          <div>
            <div className="flex justify-between">
              <div>Featured Contests</div>
              <div>Sponser a contest</div>
            </div>
            <div className="flex gap-4">
              <ContestMediumCard></ContestMediumCard>
              <ContestMediumCard></ContestMediumCard>
              <ContestMediumCard></ContestMediumCard>
            </div>
            <div className="flex gap-4">
              <div className="w-4/6">
                <div className="flex justify-between">
                  <div className="flex gap-6">
                    <div>Past Contests</div>
                    <div>My Contests</div>
                  </div>
                  <div>What's a Virtual Contest?</div>
                </div>
                <ContestSmallCard></ContestSmallCard>
                <ContestSmallCard></ContestSmallCard>
                <ContestSmallCard></ContestSmallCard>
                <ContestSmallCard></ContestSmallCard>
              </div>
              <div>Global Ranking</div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Contest;