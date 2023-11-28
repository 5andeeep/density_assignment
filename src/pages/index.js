import * as React from "react"
import Layout from "../Components/Layout";
import TradeTheFuture from "../Components/MainComponents/TradeTheFuture";
import StatsDetails from "../Components/MainComponents/StatsDetails";
import EndlessPossibility from "../Components/MainComponents/EndlessPossibility";
import TradeMorePayLess from "../Components/MainComponents/TradeMorePayLess";
import ExploreMarket from "../Components/MainComponents/ExploreMarket";
import NewFrontiers from "../Components/MainComponents/NewFrontiers";
import StartSmallEarnBig from "../Components/MainComponents/StartSmallEarnBig";
import Easy3Steps from "../Components/MainComponents/Easy3Steps";
import BackedByBest from "../Components/MainComponents/BackedByBest";
import PeopleReview from "../Components/MainComponents/PeopleReview";


const IndexPage = () => {
  return (
    <Layout>
      <div>
        <TradeTheFuture />
        <StatsDetails />
        <EndlessPossibility />
        <TradeMorePayLess />
        <ExploreMarket />
        <NewFrontiers />
        <StartSmallEarnBig />
        <Easy3Steps />
        <BackedByBest />
        <PeopleReview />
      </div>
    </Layout>
  )
}

export default IndexPage

