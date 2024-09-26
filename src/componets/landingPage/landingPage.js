import React from "react";
import AnimatedSection from "../../animatedSection";
import Collection from "../collections/collection";
import Categories from "../categories/categories";
import FeaturedProducts from "../products/product";
import Brands from "../brands/brand";
import BackgroundImageWithText from "../customBrand/customBrand";
import FollowProducts from "../FollowProducts/FollowProducts";
export default function LandingPage() {

    return (
        <>
            <AnimatedSection>
                <Collection />
            </AnimatedSection>
            <AnimatedSection>
                <Categories />
            </AnimatedSection>
            <AnimatedSection>
                <FeaturedProducts />
            </AnimatedSection>
            <AnimatedSection>
                <Brands />
            </AnimatedSection>
            <AnimatedSection>
                <BackgroundImageWithText />
            </AnimatedSection>
            <AnimatedSection>
                <FollowProducts />
            </AnimatedSection>
        </>
    )
}