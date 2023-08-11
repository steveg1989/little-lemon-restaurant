import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Steven White" description="This is the best Mediterranean food that I've ever had! I would definitely come back again"/>
            <TestimonialCard name="Mike White" description="My 8year old daughter really loved the cozy vibes and delicious food here. You all need to come 10/10."/>
            <TestimonialCard name="Bob King" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard name="John Jackson" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard name="Kim Johnson" description="The food here really refreshes me after a long day of working at the local warehouse. Im so glad I came here."/>
            <TestimonialCard name="Jeff Palmer" description="I came to Little Lemon after a 6 hour flight from the East Coast. The food here tasted so delicious after the trip here."/>
            <TestimonialCard name="Tyler Scott" description="The food here was the bomb!! Everyone should try this place out at least once if they live in Chicago."/>
            <TestimonialCard name="Jessica Black" description="This restaurant is the perfect dinner for me after a long night of studying. Im coming again most definitely."/>
             </Carousel>
    )
}