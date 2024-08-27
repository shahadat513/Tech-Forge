import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className="hero my-24 font-Lato">
                <div className="hero-content flex justify-between flex-col lg:flex-row gap-8 p-6 rounded-lg border-2 mt-20 w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex flex-col gap-2 lg:w-3/5'>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 text-left">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
