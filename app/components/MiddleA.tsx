"use client"


import React,{useEffect,useRef} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"


const MidleA = () => {
    gsap.registerPlugin(ScrollTrigger);
 
    const circle2Ref= useRef(null)

    useEffect(()=>{
        let ctx = gsap.context(()=>{
             let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".offers",
                    start: "top top",
                    end: "bottom top",
                    scrub: false,
                    pin: true,
                    toggleActions: 'play pause none reverse',
                }
            })
    
            tl
                .to(circle2Ref.current, {
                    attr: {
                        r: 770
                    },
                    duration: 2,
                    delay:1
                }) 
      /*           gsap.to(circle2Ref.current,{
                    scrollTrigger: {
                        trigger: ".displacement2",
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        pin: true,
                        toggleActions: 'play none none reverse',
                    },
                    attr: {
                        r: 770
                    },
                    duration: 2,
                    delay:1
                }) */
        })
        return() => ctx.revert()
    })
  return (
        <section className="w-full h-full rotate-[180deg]">
    <svg viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice">
        <defs>
            <filter id="displacementFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="100" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <mask id="circleMask" >
                <circle cx="600" cy="800" r="0" fill="white" className="displacement2" ref={circle2Ref}/>
            </mask>
        </defs>
       {/*   <rect width="1728" height="851.376" fill="#92E84E"  mask="url(#circleMask)"/>   */}
        <image style={{transform:"translateX(-20%)" }} href="https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"  mask="url(#circleMask)" className="w-full h-full "/> 
    </svg>
    </section>
  );
};

export default MidleA;
