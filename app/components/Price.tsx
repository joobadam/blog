/* "use client"

import React,{useLayoutEffect, useRef} from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Mesh2 from './Mesh2'
 import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger' 



export default function Price() {

  const price1Ref = useRef(null)
  const price2Ref = useRef(null)

   gsap.registerPlugin(ScrollTrigger) 

  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
        gsap.to([price1Ref.current,price2Ref.current],{
            scrollTrigger:{
                trigger:'.video3',
                start:'bottom top',
                toggleActions: "play none none none",
                scrub:false
            },
            opacity:1,
            duration:1,
            stagger:0.4,
            lazy: false,
            x:0,

        })
    })

    return () => ctx.revert()
},[])

const tiers = [
  {
    name: 'Personalmonthly pass',
    id: 'tier-personal',
    href: '#',
    priceMonthly: '$300',
    description: "The perfect choice to start your fitness journey.",
    refid: price1Ref,
    features: [
      'Cost-effectiveness',
      'Consistency',
      'Progress tracking',
      'Nutritional advice',
      '30 days',
      'Body weight control',
    ],
    featured: true,
  },
  {
    name: 'Annual pass',
    id: 'tier-team',
    href: '#',
    priceMonthly: '$250',
    description: 'A plan that scales with your rapidly growing business.',
    features: ['Priority support', 'Free wellness ', 'Advanced analytics', 'Long-term commitment'],
    refid:price2Ref,
    featured: false,
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

  return (
    <div className="relative isolate  px-6 py-24 sm:py-32 lg:px-8">
        <Mesh2/>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-red-600">Pricing</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          The right price for you, whoever you are
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 ">
      You can choose the one that suits you best from multiple options
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative  shadow-2xl border glass price' : 'border sm:mx-8 lg:mx-0 glass price',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 opacity-0 translate-x-[100px]'
            )}
            ref={tier.refid}
          >
            <h3 id={tier.id} className="text-base font-semibold leading-7 text-red-600">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-red-600">{tier.priceMonthly}</span>
              <span className="text-base ">/month</span>
            </p>
            <p className="mt-6 text-base leading-7 ">{tier.description}</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6  sm:mt-10">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 ">
                  <CheckIcon className="h-6 w-5 flex-none text-red-600 absolute right-10" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-red-600 text-white shadow hover:bg-red-500'
                  : 'text-red-600 ring-1 ring-inset ring-red-200 hover:ring-red-300',
                'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:mt-10'
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  )
} */
"use client"

import React,{useEffect} from 'react'
import { CheckIcon } from "@heroicons/react/20/solid";
import Mesh2 from "./Mesh2";
import { motion } from "framer-motion";

export default function Price() {
 

  const tiers = [
    {
      name: "Personalmonthly pass",
      id: "tier-personal",
      href: "#",
      priceMonthly: "$300",
      description: "The perfect choice to start your fitness journey.",
      features: [
        "Cost-effectiveness",
        "Consistency",
        "Progress tracking",
        "Nutritional advice",
        "30 days",
        "Body weight control",
      ],
      featured: true,
    },
    {
      name: "Annual pass",
      id: "tier-team",
      href: "#",
      priceMonthly: "$250",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "Priority support",
        "Free wellness ",
        "Advanced analytics",
        "Long-term commitment",
      ],
      featured: false,
    },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative isolate  px-6 py-24 sm:py-32 lg:px-8">
      <Mesh2 />
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-red-600">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          The right price for you, whoever you are
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 ">
        You can choose the one that suits you best from multiple options
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative  shadow-2xl border glass price"
                : "border sm:mx-8 lg:mx-0 glass price",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className="text-base font-semibold leading-7 text-red-600"
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-red-600">
                {tier.priceMonthly}
              </span>
              <span className="text-base ">/month</span>
            </p>
            <p className="mt-6 text-base leading-7 ">{tier.description}</p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6  sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 ">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-red-600 absolute right-10"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-red-600 text-white shadow hover:bg-red-500"
                  : "text-red-600 ring-1 ring-inset ring-red-200 hover:ring-red-300",
                "mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:mt-10"
              )}
            >
              Get started today
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
