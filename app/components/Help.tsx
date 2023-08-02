"use client";

import React, { useLayoutEffect,useRef } from "react";
import Image from "next/image";
import pic3 from "../assets/pic3.avif";
import pic4 from "../assets/pic4.avif";
import pic5 from "../assets/pic5.avif";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Help = () => {
  gsap.registerPlugin(ScrollTrigger);

  const text1ref= useRef(null)
  const text2ref= useRef(null)
  const text3ref= useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from([text1ref.current,text2ref.current,text3ref.current], {
        scrollTrigger: {
          trigger: ".video1",
          start: "bottom top",
          toggleActions: "play none none none",
          scrub: false,
        },
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        y: 100,
      });
    });

    return () => ctx.revert();
  }, []);

  const text1 = `        Unlock your bodys fat-burning potential with our high-intensity workout!  Embrace the challenge, see real results, and build a stronger, fitter version of yourself. Don't wait, start your fat-burning journey today and achieve the fit, confident body you deserve!`;
  const text2 = `Power up your strength and transform into a powerhouse!  Embrace the challenge, witness your progress, and feel unstoppable. Don't miss this opportunity to unlock your true strength!`;
  const text3 = ` Unleash your endurance potential with us!  I'll push your limits and help you discover a stronger you. Boost your stamina and energy levels while enjoying my exciting workouts. Don't miss this chance to embark on a journey of new challenges!`;

  return (
    <div className="w-full h-fit flex justify-center items-center flex-col p-5 my-20 help">
      <label className="my-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase ">
          Three things I can help with
        </h2>
      </label>
      <div className="w-full h-fit grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-5 ">
        <div className="px-2 py-10 flex justify-center items-center flex-col gap-y-5 shadow-2xl border rounded-2xl h-fit glass card" ref={text1ref}>
          <div className="h-[10%]">
            <h3 className="uppercase font-semibold">Burning fat</h3>
          </div>
          <div className="h-[60%]">
            <Image src={pic3} alt="training" className=" object-cover" />
          </div>
          <div className="h-[30%]">
            <h4>{text1}</h4>
          </div>
        </div>
        <div className="px-2 py-10 flex justify-center items-center flex-col gap-y-5 shadow-2xl border rounded-2xl h-fit glass card md:translate-y-10" ref={text2ref}>
          <div className="h-[10%]">
            <h3 className="uppercase font-semibold">strength training</h3>
          </div>
          <div className="h-[60%]">
            <Image src={pic4} alt="training" className=" object-cover" />
          </div>
          <div className="h-[30%]">
            <h4>{text2}</h4>
          </div>
        </div>
        <div className="px-2 py-10 flex justify-center items-center flex-col gap-y-5 shadow-2xl border rounded-2xl h-fit glass card" ref={text3ref}>
          <div className="h-[10%]">
            <h3 className="uppercase font-semibold">endurance training</h3>
          </div>
          <div className="h-[60%]">
            <Image src={pic5} alt="training" className=" object-cover" />
          </div>
          <div className="h-[30%]">
            <h4>{text3}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
