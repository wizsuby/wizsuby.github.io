import Image from "next/image";
import React, { PropsWithChildren } from "react";
import image1 from "../../../public/Images/image.png";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <div className="flex relative md:px-5 xl:container mx-auto px-3">
        {children}

        <div className="w-full h-fit sticky top-0 hidden lg:block">
          <div className="h-screen w-full relative">
            <Image
              src={image1}
              alt="Abstract 3d element"
              placeholder="blur"
              fill
              className="object-contain object-right-top"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default layout;
