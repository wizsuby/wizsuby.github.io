"use client";
import Button from "@/components/buttons/Button";
import CTAButton from "@/components/buttons/CTAButton";
import Image from "next/image";
import Link from "next/link";
import {
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  TwitterLogo,
} from "phosphor-react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full max-w-md">
      <div className="pt-28 lg:py-52">
        <div className="w-16 h-16 relative overflow-clip bg-neutral-400 rounded-full">
          <Image
            src="/Images/MyPhoto.png"
            fill
            alt="Image of Suby (Subhrajyoti Basu)"
          />
        </div>
        <div className="mt-20 lg:mt-14">
          <div className="text-xl font-semibold lg:text-2xl tracking-tight">
            🖐️ I&apos;m Suby, Your Expert Fullstack Web Developer & AI Advocate.
            Unlocking the Power of Exceptional Web Solutions! Elevate Your
            Online Presence Today.
          </div>
        </div>
        <div>
          <div className="mt-4 flex items-center space-x-3">
            <Link href="/see-my-works">
              <Button>
                <span>See my Works</span>
              </Button>
            </Link>
            <Link href="mailto:wizsuby@gmail.com">
              <Button>
                <PaperPlaneTilt size={20} />
              </Button>
            </Link>
          </div>
          <div className="flex space-x-2 mt-3 ">
            <Link href="https://github.com/wizsuby">
              <Button>
                <GithubLogo size={21} weight="fill" color="#2302A9" />
              </Button>
            </Link>
            <Link href="https://x.com/wizsuby">
              <Button>
                <TwitterLogo size={21} weight="fill" color="#00E0FF" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/wizsuby/">
              <Button>
                <LinkedinLogo size={21} weight="fill" color="#0276FF" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-14 tracking-tight">
          <div className="text-lg lg:text-xl lg:leading-relaxed">
            I&apos;m your go-to{" "}
            <span className="font-semibold underline underline-offset-4">
              fullStack web developer
            </span>
            . Ready to turn your digital dreams into a reality? With my
            cutting-edge expertise, I&apos;ll make your online presence shine.
            <div className="mt-4">
              Harnessing the latest technologies like
              <span className="inline-flex flex-wrap gap-1">
                <span className="font-semibold underline underline-offset-4 inline-block">
                  Next.js
                </span>
                ,
                <span className="font-semibold underline underline-offset-4 inline-block">
                  React.js
                </span>
                ,
                <span className="font-semibold underline underline-offset-4 inline-block">
                  Qwik.js
                </span>
                ,
                <span className="font-semibold underline underline-offset-4 inline-block">
                  Supabase
                </span>
                ,
                <span className="font-semibold underline underline-offset-4 inline-block">
                  Tailwind CSS
                </span>
                ,
                <span className="font-semibold underline underline-offset-4 inline-block">
                  Express.js
                </span>
                ,
                <span className="font-semibold underline underline-offset-4 inline-block">
                  MongoDB
                </span>
                ,
                <span className="font-semibold underline underline-offset-4 inline-block">
                  Shadcn/UI
                </span>
                <span>
                  and more. I&apos;ll build you a stunning website that performs
                  flawlessly and it&apos;s just the beginning. I&apos;m
                  specialize in crafting custom animations which creates
                  unforgettable experience.
                </span>
              </span>
            </div>
            <div className="mt-4">
              No matter the size of your business or industry, I&apos;m here to
              cater to your unique needs. Let&apos;s collaborate and create a
              web solution that reflects your vision and goals.{" "}
            </div>
            <div className="mt-4">
              I&apos;ll build websites that not only looks great but also
              converts visitors into loyal clients. And the list goes on for the
              web Apps with intuitive user interfaces.
            </div>
          </div>
        </div>
        <div className="mt-4 text-neutral-500 text-sm">
          Ready to unlock your digital potential? Let&apos;s chat and bring your
          vision to life!
        </div>
        <div className="my-4">
          <Link href="mailto:wizsuby@gmail.com">
            <CTAButton>
              <span>Ready To Make An Impact? Contact Me Now</span>
              <PaperPlaneTilt
                className="flex-1 lg:flex-none"
                size={22}
                weight="fill"
              />
            </CTAButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
