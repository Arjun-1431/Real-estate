import React from 'react';
import "../CSSfiles/banner.css"
import SearchIcon from '@mui/icons-material/Search';
export default function Banner() {
  return (
   <>
  

  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1
                class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Find Your <br/>Dream &amp; Home
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We Help You 
Building The Dreams & Bring More Than You Expect
                <a target="_blank" class="hover:underline">Excellent </a> Flate for rant and
               Batter maintanance Service <b><a style={{color:'black'}} href="#/" class="hover:underline" target="_blank">WWW.real-estate.com</a></b>
            </p>

            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

                <a href="" target="_blank"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg class="w-6 h-6 text-gray-500 dark:text-gray-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512">
                        <SearchIcon/>
                    </svg>Search Rental Flates
                </a>


            </div>
        </div>

        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={require('../Assets/img2.png')} alt="hero image"/>
        </div>

    </div>
</section>

   </>
  );
}


