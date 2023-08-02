"use client"

import React,{useLayoutEffect,useRef} from 'react'
import { Mesh } from "./Mesh"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'



  
  export default function Testimonials() {

    gsap.registerPlugin(ScrollTrigger)
    console.log("ScrollTrigger", ScrollTrigger)
    useLayoutEffect(()=>{
      let ctx = gsap.context(()=>{
          gsap.from([text1Ref.current,text2Ref.current,text3Ref.current,text4Ref.current,text5Ref.current],{
              scrollTrigger:{
                  trigger:'.blog',
                  start:'bottom top',
                  toggleActions: "play none none none",
                  scrub:false
              },
              opacity:0,
              duration:1,
              stagger:0.2,
              lazy: false,
              y:100,
          })
      })
      
      return () => ctx.revert()
  },[])

  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)
  const text4Ref = useRef(null)
  const text5Ref = useRef(null)

  const featuredTestimonial = {
    body: 'Mike is an exceptional personal trainer! His expertise and dedication to fitness are unparalleled. He tailors each workout to suit individual needs and pushes you to achieve your best. Thanks to Mike, I have seen incredible progress in my fitness journey. Highly recommended!',

    author: {
      refid: text1Ref,
      name: 'Brenna Goyette',
      handle: 'brennagoyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
      logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
    },
  }
  const testimonials = [
    [
      [
        {
          body: `Mike's training methods are top-notch. He keeps workouts fun and challenging, making every session enjoyable.`,
          author: {
            refid: text2Ref,
            name: 'Leslie Alexander',
            handle: 'lesliealexander',
            imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: `I can't recommend Mike enough! He's a true professional with a passion for fitness. Working with him has been transformative for my health and well-being.`,
          author: {
            refid: text3Ref,
            name: 'Lindsay Walton',
            handle: 'lindsaywalton',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: `If you're looking for results, Mike is the guy to go to. His dedication and knowledge will take your fitness to the next level.`,
          author: {
            refid: text4Ref,
            name: 'Tom Cook',
            handle: 'tomcook',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: `I'm so glad I found Mike as my personal trainer. He motivates me to stay consistent and achieve my fitness goals!`,
          author: {
            refid: text5Ref,
            name: 'Leonard Krasner',
            handle: 'leonardkrasner',
            imageUrl:
              'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        // More testimonials...
      ],
    ],
  ]
  
  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

    return (
      <div className="relative isolate  pb-32 pt-24 sm:pt-32 ">
        <Mesh/>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight ">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Here are some testimonials about me
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6  sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="col-span-2 hidden sm:block sm:rounded-2xl border sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1 glass testimonials" ref={text1Ref}>
              <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight ">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4 ">
                <img
                  className="h-10 w-10 flex-none rounded-full "
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex-auto ">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0 testimonials">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2 testimonials'
                        : 'xl:row-start-1 testimonials',
                      'space-y-8 '
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl border p-6 shadow-lg ring-1 ring-gray-900/5 glass testimonials"
                        ref={testimonial.author.refid}
                      >
                        <blockquote>
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                          <div>
                            <div className="font-semibold">{testimonial.author.name}</div>
                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  