import React from 'react';

const Review = () => {
    return (
        <div>
            <section class="">
            
            <div class="flex flex-col justify-center items-center ">
                <h1 class=" text-2xl lg:text-5xl text-title font-bold mt-4 mb-6 lg:text-left text-center">What Clients Says
                </h1>
                <p class="text-sm lg:text-base font-medium text-sub mb-6 text-center">
                    The barn house captivates with its blend of rustic charm and modern sophistication,featuring
                    weathered wood, sleek metal accents.
                </p>
            </div>
            <div class="w-11/12 mx-auto bg-white rounded-2xl">
                <div class=" p-10  grid lg:grid-cols-3 grid-cols-1 gap-6 ">
                    
                    <div class="flex flex-col justify-center items-center p-8 gap-6 rounded-2xl border-2 shadow-lg shadow-green " >
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <h1 class="text-xl font-extrabold mb-2 text-title">Elona Homes</h1>
                        <p class="text-des font-medium text-center">Renting a home offers flexibility, convenience, and often fewer responsibilities compared to. It allows people to move more easily for work or lifestyle changes without the long-term commitment of buying property. Renters don't have to worry about property taxes, home maintenance, or repairs, which can be a significant advantage.
                            homeownership.</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked"/>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center p-8 gap-6 rounded-2xl border-2 shadow-lg shadow-green " >
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <h1 class="text-xl font-extrabold mb-2 text-title">Ava Max</h1>
                        <p class="text-des font-medium text-center">Renting a home offers flexibility, convenience, and often fewer responsibilities compared to. It allows people to move more easily for work or lifestyle changes without the long-term commitment of buying property. Renters don't have to worry about property taxes, home maintenance, or repairs, which can be a significant advantage.
                            homeownership.</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked"/>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center p-8 gap-6 rounded-2xl border-2 shadow-lg shadow-green " >
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <h1 class="text-xl font-extrabold mb-2 text-title">Amber Head</h1>
                        <p class="text-des font-medium text-center ">Renting a home offers flexibility, convenience, and often fewer responsibilities compared to. It allows people to move more easily for work or lifestyle changes without the long-term commitment of buying property. Renters don't have to worry about property taxes, home maintenance, or repairs, which can be a significant advantage.
                            homeownership.</p>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked="checked"/>
                        </div>
                    </div>
                </div>
                <div class="w-11/12 mx-auto flex justify-center items-center">
                <a className="btn hidden lg:flex font-Lato text-white bg-[#007580] rounded-2xl font-bold text-lg   border-0 duration-300">View More</a>
                </div>
            </div>            
        </section>
        </div>
    );
}

export default Review;
