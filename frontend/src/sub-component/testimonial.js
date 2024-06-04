import * as React from 'react';

    
   
    export default function Testimonial() {
      
    
      return (
       <>
       <section class="py-12 text-blue-900 sm:py-16 lg:py-20">
  <div class="relative mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
    <span class="hidden sm:block -z-10 absolute -left-5 opacity-20 -top-6 rounded-full  bg-blue-500 p-6 text-9xl text-white">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/></svg>
    </span>
    <span class="hidden sm:block -z-10 absolute -right-5 opacity-20 -bottom-6 rounded-full  bg-blue-500 p-6 text-9xl text-white">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>
    </span>

    <div class="flex flex-col items-center">
      <div class="text-center">
        <p class="text-lg font-medium text-blue-600">What clients say about their experience with us</p>
        <h2 class="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">Client Testimonials</h2>
      </div>

      <div class="order-3 mt-8 text-center md:mt-16">
        <button class="mb-20 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">More reviews on TrustPilot</button>
      </div>

      <div class="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
        <div class="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <div class="flex-1">
              <p class="border-blue-500 px-10 text-xl font-black">I felt 110% confident by partnering with Dave!</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">I recently sold a house with Dave and while this can be a very stressful process, I felt 110% confident by partnering with Dave. He was candid, provided great feedback, helped explain clearly all details and managed the actual sale negotiation brilliantly. In addition, he was extremely responsive  to every one of my questions, no matter how small.</p>
              </blockquote>
            </div>

            <div class="-mx-5 mt-8 px-8 py-1">
              <div class="">
                <p class="text-base font-bold">Heidi Fisher</p>
                <p class="mt-0.5 text-sm">CEO, Mavoline</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <div class="flex-1">
              <p class="border-blue-500 px-10 text-xl font-black">Nobody knows Portland and the peninsula better than David.!</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call home. Nobody  knows Portland and the peninsula better than David.</p>
              </blockquote>
            </div>

            <div class="-mx-5 mt-8 px-8 py-1">
              <div class="">
                <p class="text-base font-bold">Brock Foreman</p>
                <p class="text-blue-90 mt-0.5 text-sm">Youtube Personality</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <div class="flex-1">
              <p class="border-blue-500 px-10 text-xl font-black">David is by far the BEST realtor we’ve ever worked with!</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">My wife & I have moved 6 times in the last 25 years. Obviously, we've dealt with many realtors both on the buying and selling side. I have to say that David is by far the BEST realtor we've ever worked with, his professionalism, personality, attention to detail, responsiveness and his ability to close the deal was Outstanding!!!.</p>
              </blockquote>
            </div>

            <div class="-mx-5 mt-8 px-8 py-1">
              <div class="">
                <p class="text-base font-bold">Pierre Comeau</p>
                <p class="text-blue-90 mt-0.5 text-sm">Youtube Personality</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <div class="flex-1">
              <p class="border-blue-500 px-10 text-xl font-black">David also understood and worked with our time frame!</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">David was a joy to work with! The breath of his local knowledge of Portland, ME and its environs along with a thorough real estate expertise was invaluable to us Portland novices. He took time to introduce us to the market and then showed us lots of houses so we had great choices to work with. David also understood and worked with our time frame.</p>
              </blockquote>
            </div>

            <div class="-mx-5 mt-8 px-8 py-1">
              <div class="">
                <p class="text-base font-bold">Amanda Beal</p>
                <p class="text-blue-90 mt-0.5 text-sm">Youtube Personality</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <div class="flex-1">
              <p class="border-blue-500 px-10 text-xl font-black">He keeps his client’s best interests in sharp focus!</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">After working with David to sell my home in 2013,  Since then, I’ve bought two properties and sold one,  David – I’ve found that he keeps his client’s best interests in sharp focus and you can always trust that he is on top of every detail, big and small, which brings great peace of mind in any real estate transaction..</p>
              </blockquote>
            </div>

            <div class="-mx-5 mt-8 px-8 py-1">
              <div class="">
                <p class="text-base font-bold">Abagael Long</p>
                <p class="text-blue-90 mt-0.5 text-sm">Youtube Personality</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-xl  text-center shadow-xl border-t-4 border-blue-300 shadow-blue-200">
          <div class="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <div class="flex-1">
              <p class="border-blue-500 px-10 text-xl font-black">He is a skilled listener and negotiator</p>

              <blockquote class="mt-8 flex-1">
                <p class="leading-relaxed text-blue-900">David is an outstanding agent to work with. He is a skilled listener and negotiator, with very in-depth knowledge of the local markets. My husband and I listed two properties with him at the same time and while he sold one within a week, one took five months to sell.</p>
              </blockquote>
            </div>

            <div class="-mx-5 mt-8 px-8 py-1">
              <div class="">
                <p class="text-base font-bold">Hanna Chen</p>
                <p class="text-blue-90 mt-0.5 text-sm">Esports Commentator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       </>
      );
    }