import Navbar from '../sub-component/navbar';
import React, { useEffect } from 'react';
import '../CSSfiles/rental.css'
import SliderProject from "../sub-component/sliderprojects";
import AllrentalFlate from '../sub-component/allrentalflate';
export default function Rentalflate() {

    return (

        <div>
            <Navbar />
            <div style={{ marginTop: '1%' }}>
                <div class="">
                    <section class="py-10 leading-6 text-blue-900 sm:py-16 lg:py-24">
                        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                            <div class="mx-auto max-w-xl text-center">
                                <h2 class="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight">Impressive Results in 2 Years</h2>
                            </div>

                            <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:mt-16">
                                <div class="relative overflow-hidden rounded-xl bg-white">
                                    <div class="py-10 text-center">
                                        <div class="flex items-center flex-col ">
                                            <h3 class="relative inline-block text-4xl font-bold">
                                                <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                                                328
                                            </h3>
                                            <span class="text-base font-medium capitalize">Great Achievements</span>
                                        </div>
                                        <p class="mt-6 text-base md:max-w-xs">Over the past two years, we have facilitated 328 successful real estate transactions, helping clients find their dream homes and lucrative investments..</p>
                                    </div>
                                </div>

                                <div class="relative overflow-hidden rounded-xl bg-white">
                                    <div class="py-10 text-center">
                                        <div class="flex items-center flex-col ">
                                            <h3 class="relative inline-block text-4xl font-bold">
                                                <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                                                16
                                            </h3>
                                            <span class="text-base font-medium capitalize">Graduations Sponsored</span>
                                        </div>
                                        <p class="mt-6 text-base md:max-w-xs">We have sponsored 16 real estate professionals to complete advanced training programs, enhancing their expertise and boosting their careers.</p>
                                    </div>
                                </div>

                                <div class="relative overflow-hidden rounded-xl bg-white">
                                    <div class="py-10 text-center">
                                        <div class="flex items-center flex-col ">
                                            <h3 class="relative inline-block text-4xl font-bold">
                                                <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                                                41+
                                            </h3>
                                            <span class="text-base font-medium capitalize">jobs created</span>
                                        </div>
                                        <p class="mt-6 text-base md:max-w-xs">Our initiatives have resulted in the creation of over 41 jobs within the real estate sector, contributing to community growth and development.</p>
                                    </div>
                                </div>
                                <div class="relative overflow-hidden rounded-xl bg-white">
                                    <div class="py-10 text-center">
                                        <div class="flex items-center flex-col ">
                                            <h3 class="relative inline-block text-4xl font-bold">
                                                <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                                                99%
                                            </h3>
                                            <span class="text-base font-medium capitalize">Happy Customers</span>
                                        </div>
                                        <p class="mt-6 text-base md:max-w-xs">An impressive 99% of our clients have reported complete satisfaction with our services, reflecting our commitment to excellence and client success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </div>

            <div style={{ marginTop: '2%' }}>

                <AllrentalFlate />
                <SliderProject />
            </div>
        </div>
    )
}