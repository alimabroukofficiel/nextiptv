import Hero from './components/Hero'
import MoviesCards from './components/MoviesCards'
import FootballCards from './components/FootballCards'
import CompetitionsCards from './components/CompetitionsCards'
import ChannelsCards from './components/ChannelsCards'
import PricingSrction from "./components/PricingSection"
import WhyUseSection from "./components/WhyUseSection"
import ReviewsSection from "./components/ReviewsSection"
export default function page() {
  return (
    <>
    <Hero></Hero>
    <MoviesCards></MoviesCards>
    <FootballCards></FootballCards>
    <CompetitionsCards></CompetitionsCards>
    <ChannelsCards></ChannelsCards>
    <PricingSrction></PricingSrction>
    <WhyUseSection></WhyUseSection>
    <ReviewsSection></ReviewsSection>
    </>
  )
}
