'use client';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        credits={{ enabled: false }}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white">
                        <div className="text-center space-y-8 px-6">
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                                Welcome to <span className="text-indigo-400">Fullpage.js</span>
                            </h1>

                            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto">
                                Smooth scrolling sections built with React and Tailwind CSS.
                            </p>

                            <button
                                onClick={() => fullpageApi.moveSectionDown()}
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300 shadow-xl hover:shadow-indigo-500/30"
                            >
                                <span className="relative z-10">Scroll Down</span>
                                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                            </button>
                        </div>
                    </div>
                    <div className="section flex items-center justify-center bg-white">
                        <div className="text-center space-y-6 px-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
                                Section 2
                            </h2>
                            <p className="text-lg text-zinc-600 max-w-lg mx-auto">
                                Each section fills the viewport and transitions smoothly.
                            </p>
                        </div>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;