"use client"


import React,{useEffect, useLayoutEffect} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"


const Start = () => {
     gsap.registerPlugin(ScrollTrigger); 

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: false,
                    pin: true,
                    toggleActions: 'play none none reverse'
                }
            })
    
            tl
                .to('.displacement', {
                    attr: {
                        r: 770
                    },
                    duration: 2
                })
        })
        return() => ctx.revert()
    },[])

    useEffect(() => {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isSafari) {
          const elem = document.getElementById('bigc');
          if (elem) {
            elem.style.display = 'none';
          }
        }
      }, []);


  return (
        <section className="w-full h-full" id="bigc">
    <svg viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice">
        <defs>
            <filter id="displacementFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="100" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <mask id="circleMask">
                <circle cx="600" cy="800" r="0" fill="white" className="displacement" />
            </mask>
        </defs>
         <rect width="1728" height="851.376" fill="#dc2626"  mask="url(#circleMask)"/>   
    </svg>
    </section>
  );
};

export default Start;


