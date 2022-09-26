import React from 'react'
import TopProducts from './components/TopProducts'
import { products, workFromAnywhereEssentials, comparisionProducts, newsCompanies, publications } from './staticContent'
import TrendingProductComparision from './components/TrendingProductComparision'
import ProductComparisionByCategory from './components/ProductComparisionByCategory'
import Faq from './components/Faq'
import Footer from './components/Footer'
import NewsCoverage from './components/NewsCoverage'
import Testimony from './components/Testimony'
import Banner from './components/Banner'
import ExpertPublications from './components/ExpertPublications'
import ExpertContact from './components/ExpertContact'
import Hero from './components/Hero'
import Header from './components/Header'
import HeaderCategories from './components/HeaderCategories'
import './App.css'
import ChooseYourIndustry from './components/ChooseYourIndustry'
import ThreeSlider from './components/ThreeSlider'

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeaderCategories />
      <Hero />
      <ChooseYourIndustry />
      <TopProducts products={products} />
      <ThreeSlider />
      <TopProducts products={workFromAnywhereEssentials} />
      <TrendingProductComparision products={comparisionProducts} />
      <ProductComparisionByCategory products={comparisionProducts} />
      <ExpertContact />
      <Banner type={0} />
      <ExpertPublications publications={publications} />
      <Banner type={1} />
      <Testimony />
      <NewsCoverage newsCompanies={newsCompanies} />
      <Faq />
      <Footer />
    </React.Fragment>
  )
}

export default App
