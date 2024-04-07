import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import TextAnimationComponent from "@/components/typing-text-animation/TextAnimation";
import { CardsItem } from "@/constrain/CardsItem";
import ImageSlides from "@/components/image-slides/ImageSlides";
import AvatarGroups from "@/components/Avatars/AvatarGroup";

export default function Home() {
  return (
    <main>
      <section id="header-homepage">
        <div className="flex justify-center items-center">
          <AvatarGroups maxValue='4' />
        </div>
        <div>
          <h1 className="font-semibold lg:text-5xl md:text-3xl text-2xl text-center m-10 text-text-color">
            Start your tasks with our workspace <br /> <span className="text-secondary-400 dark:text-primary-color">
              <TextAnimationComponent />
            </span>
          </h1>
          <p className="text-description-text text-center md:text-lg sm:text-sm">Empower your productivity journey by initiating tasks within our dedicated workspace on Tasker. Start each endeavor with purpose, harnessing the efficiency of automation tailored to your unique needs.</p>
        </div>
        <div className="flex justify-center items-center gap-5 py-10">
          <Button className="rounded-full lg:text-2xl md:text-xl text-lg p-7 font-semibold text-white bg-gradient-to-tr from-purple-600 to-primary-color">+ Join us</Button>
          <Button className="rounded-full lg:text-2xl md:text-xl text-lg p-7 font-semibold text-primary-color bg-white">Features</Button>
        </div>
      </section>
      <section className="mt-28">
        <h2 className="font-bold text-text-color text-center">What you got from us?</h2>
        <p className="text-description-text text-center mt-5">We offer users task management capabilities, simplifying the process of task reporting and enhancing task management skills for seamless task preparation.</p>
        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {
            CardsItem.map((item, index) => (
              <div key={item.id} className="bg-white hover:border-1 hover:border-primary-color w-full md:hover:scale-105 h-auto transition-all p-5 rounded-xl shadow-md grid gap-2 justify-between">
                <item.icon size={100} className="text-primary-color" />
                <div className="mt-5">
                  <h3 className="font-semibold text-text-color">
                    {item.header}
                  </h3>
                  <p className="text-description-text mt-5 tran">
                    {item.description}
                  </p>
                </div>
                <Link href={item.route} className="hover:font-semibold transition-all text-primary-color flex justify-end items-center gap-3 mt-5">Enjoy <FaArrowRight /></Link>
              </div>
            ))
          }
        </div>
      </section>
      <section id="client-say" className="my-20">
        <h2 className="text-text-color text-center font-semibold">What our client say!.</h2>
        <ImageSlides />
      </section>
      <section className="lg:p-10 md:p-5 p-2 flex justify-center items-center rounded-2xl bg-gradient-to-br from-primary-color to-purple-200 ">
        <div id="box-gradient" className="p-10 gap-10 flex flex-col justify-center items-center">
          <p className="lg:w-2/3 md:w-2/3 w-full lg:text-4xl md:text-2xl text-xl font-semibold text-center text-gray-100">Ready for transform your task on your project ?</p>
          <Button size="lg" className="bg-white text-text-color font-semibold">
            Get Start <FaArrowRight />
          </Button>
        </div>
      </section>
    </main>
  );
}
