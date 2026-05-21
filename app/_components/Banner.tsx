'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import { MoveUpRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const typedRef = useRef<HTMLSpanElement>(null);

    // Typing animation
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'FULL STACK DEVELOPER',
                'FRONTEND DEVELOPER',
                'BACKEND DEVELOPER',
                'PYTHON DEVELOPER',
                'CLOUD ENTHUSIAST',
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true,
        });

        return () => typed.destroy();
    }, []);

    // Scroll animation
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}>
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[744px]">
                    {/* 🔹 Typing Animation Here */}
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton text-primary whitespace-pre-line">
                        <span ref={typedRef}></span>
                    </h1><br></br>

                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Aaditya Sahu
                        </span>
                        . A creative Developer turning ideas into smooth, user-friendly digital experiences. 
                        I love crafting interfaces and interactions that make technology feel effortless and intuitive.
                    </p>

                    <div className="slide-up-and-fade mt-8 flex items-center gap-4">
                        <a
                            href="/Resume/Aaditya_Kumar_Sahu-Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md text-sm hover:opacity-90 transition-opacity">
                            View Resume
                            <MoveUpRight size={14} />
                        </a>
                        <a
                            href="/Resume/Aaditya_Kumar_Sahu-Resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-md text-sm hover:bg-muted transition-colors">
                            Download 
                        </a>
                    </div>

                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            1+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
