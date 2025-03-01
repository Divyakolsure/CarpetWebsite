import React from "react";

import Home from "../components/home/Home";
import Collection from "../components/collection/Collection";
import SanzaSection from "../components/sanzasection/SanzaSection";
import Reviews from "../components/reviews/Reviews";
import FeaturedCollection from "../components/featuredcollection/FeaturedCollection";
import ShowcaseSection from "../components/showcasesection/ShowcaseSection";
import FindCarpetsByColours from "../components/findcarpetsbycolours/FindCarpetsByColours";
import ArtificialGrassProducts from "../components/artificialgrassproducts/ArtificialGrassProducts";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Story from "../components/story/Story";

function HomePages() {
    return (
        <>
          <Home/> 
          <SanzaSection/>
          <Collection />
          <Reviews/>
          <FeaturedCollection/>
          <ShowcaseSection/>
           <FindCarpetsByColours/>
           <ArtificialGrassProducts/>
            <NewArrivals/>
            <Story/>
        </>
    );
}

export default HomePages;
