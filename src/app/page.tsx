import Image from "next/image";
import Link from "next/link";
import {
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  TwitterLogo,
} from "@/assets/icons/icons";
import Button from "@/components/buttons/Button";
import CTAButton from "@/components/buttons/CTAButton";

export default function Home() {
  return (
    <main>
      <div className="lg:grid lg:grid-cols-12 container mx-auto">
        <div className="container mx-auto px-3 lg:col-span-4">
          <div className="pt-28 lg:pt-52">
            <div className="w-16 h-16 relative overflow-clip bg-neutral-400 rounded-full">
              <Image
                src="/Images/MyPhoto.png"
                fill
                alt="Image of Suby (Subhrajyoti Basu)"
              />
            </div>
            <div className="flex space-x-3 mt-3 lg:hidden">
              <GithubLogo size={21} weight="fill" color="#2302A9" />
              <TwitterLogo size={21} weight="fill" color="#00E0FF" />
              <LinkedinLogo size={21} weight="fill" color="#0276FF" />
            </div>
            <div className="mt-7 lg:mt-14">
              <div className="text-xl font-semibold lg:text-2xl">
                🖐️ I&apos;m Suby, Your Expert Fullstack Web Developer & AI
                Advocate. Unlocking the Power of Exceptional Web Solutions!
                Elevate Your Online Presence Today.
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <Button>
                <span>Download Resume</span> <DownloadSimple size={20} />
              </Button>
              <Button>
                <PaperPlaneTilt size={20} />
              </Button>
            </div>
            <div className="mt-14">
              <div className="text-lg lg:text-xl lg:leading-relaxed">
                I&apos;m your go-to{" "}
                <span className="font-semibold underline underline-offset-4">
                  fullStack web developer
                </span>
                . Ready to turn your digital dreams into a reality? With my
                cutting-edge expertise, I&apos;ll make your online presence
                shine.
                <div className="mt-4">
                  Harnessing the latest technologies like
                  <span className=" flex flex-wrap">
                    <span className="font-semibold underline underline-offset-4">
                      Next.js
                    </span>
                    ,
                    <span className="font-semibold underline underline-offset-4">
                      React.js
                    </span>
                    ,
                    <span className="font-semibold underline underline-offset-4">
                      Qwik.js
                    </span>
                    ,
                    <span className="font-semibold underline underline-offset-4">
                      Supabase
                    </span>
                    ,
                    <span className="font-semibold underline underline-offset-4">
                      Tailwind CSS
                    </span>
                    ,
                    <span className="font-semibold underline underline-offset-4">
                      Express.js
                    </span>
                    ,
                    <span className="font-semibold underline underline-offset-4">
                      MongoDB
                    </span>
                    ,
                    <span>
                      and more. I&apos;ll build you a stunning website that
                      performs flawlessly and it&apos;s just the beginning.
                      I&apos;m specialize in crafting custom animations which
                      creates unforgettable experience.
                    </span>
                  </span>
                </div>
                <div className="mt-4">
                  No matter the size of your business or industry, I&apos;m here
                  to cater to your unique needs. Let&apos;s collaborate and
                  create a web solution that reflects your vision and goals.{" "}
                </div>
                <div className="mt-4">
                  I&apos;ll build websites that not only looks great but also
                  converts visitors into loyal clients. And the list goes on for
                  the web Apps with intuitive user interfaces.
                </div>
              </div>
            </div>
            <div className="mt-4 text-neutral-500 text-sm">
              Ready to unlock your digital potential? Let&apos;s chat and bring
              your vision to life!
            </div>
            <div className="my-4">
              <CTAButton>
                <span>Ready To Make An Impact? Contact Me Now</span>
                <PaperPlaneTilt
                  className="flex-1 lg:flex-none"
                  size={22}
                  weight="fill"
                />
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 hidden lg:block">
          <div className="h-screen w-full relative ">
            <Image
              src="/Images/image.png"
              alt="Abstract 3d element"
              fill
              className="object-contain object-right-top"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
