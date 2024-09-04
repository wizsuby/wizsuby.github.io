"use client";
import Button from "@/components/buttons/Button";
import { works } from "@/data/works";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "phosphor-react";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full max-w-md pt-5">
      <div>
        <nav>
          <Link
            href="/"
            className="flex gap-3 items-center font-medium text-neutral-500 hover:text-blue-700"
          >
            <ArrowLeft />
            Go back to Home
          </Link>
        </nav>
      </div>
      <div className="my-16 space-y-16">
        {works.map((item, index) => (
            <div key={index}>
                <div className="border aspect-[2] rounded-xl relative overflow-clip">
                    <Image src={item.image} alt={item.name} fill className="object-cover object-top" />
                </div>
                <div className="flex items-center justify-between mt-2 pl-2">
                <p className="font-semibold">{item.name}</p>
                <Link href={item.link}>
                <Button>Visit</Button>
                </Link>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default page;
