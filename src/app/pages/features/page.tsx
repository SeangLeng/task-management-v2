import Image from "next/image";
import { Button, Chip } from "@nextui-org/react";

import backgroundSvg from "~/assets/rectangle-12.svg";
import feature from '~/assets/Work time-amico.png';
import taskCreater from '~/assets/Accept tasks-amico.png';
import addTask from '~/assets/Add tasks-amico.png';

export default function Features() {
  return (
    <section id="feature">
      <section className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <Image className="absolute top-0 right-0 w-full -z-10" src={backgroundSvg} alt="background" />
          <h1 className="text-text-color font-semibold">Start your tasks with <span className="text-primary-color">Taskdots</span></h1>
          <p className="text-text-color lg:w-2/3 w-full mt-5 text-xl">Embark on a Journey of Productivity and Mastery: Kickstart Your Day with Tasker, Your Ultimate Task Management Companion</p>
        </div>
        <div>
          <Image src={feature} alt="features" />
        </div>
      </section>
      <section className="mt-20">
        <h2 className="text-center font-semibold">Our <span className="text-primary-color">services</span></h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-10 gap-10 justify-center items-center">
          <Image className="w-2/3 m-auto" src={taskCreater} alt="task-creator" />
          <div>
            <h2 className="text-text-color font-semibold">Task Creation and Editing</h2>
            <div className="flex gap-3 mt-3">
              <Chip color="secondary" variant="flat" >generation</Chip>
              <Chip color="secondary" variant="flat" >revision</Chip>
            </div>
            <p className="text-text-color mt-8">Empower users to seamlessly initiate new tasks, furnishing them with a title, detailed description, and a specified due date. Experience enhanced productivity with the added capability to effortlessly edit and delete tasks, ensuring flexibility and control in task management.</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-10 gap-10 justify-center items-center">
          <div>
            <h2 className="text-text-color font-semibold">Task Organization</h2>
            <div className="flex gap-3 mt-3">
              <Chip color="secondary" variant="flat" >Prepare</Chip>
            </div>
            <p className="text-text-color mt-8">Effortlessly organize your workload by categorizing tasks into distinct lists or projects, allowing for streamlined task management. Enhance precision with customizable tags or labels, providing a systematic approach to sorting and identifying tasks based on unique criteria.</p>
          </div>
          <Image className="w-2/3 m-auto" src={addTask} alt="task-creator" />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-10 gap-10 justify-center items-center">
          <Image className="w-2/3 m-auto" src={taskCreater} alt="task-creator" />
          <div>
            <h2 className="text-text-color font-semibold">Task Prioritization</h2>
            <div className="flex gap-3 mt-3">
              <Chip color="secondary" variant="flat" >Categories</Chip>
              <Chip color="secondary" variant="flat" >Sorting</Chip>
            </div>
            <p className="text-text-color mt-8">Take control of your tasks by assigning priority levels—be it high, medium, or low—with our user-friendly platform. Easily customize your task list to reflect urgency and importance. Experience efficient task management through seamless sorting based on priority, ensuring a focused and prioritized workflow.</p>
          </div>
        </div>
      </section>
      <section className="mt-20 flex flex-col justify-center items-center gap-5">
        <h2 className="font-bold text-center text-primary-color">Start your task today</h2>
        <Button variant="bordered" className="text-2xl font-semibold rounded-full w-fit mt-5" size="lg" color="secondary">Join us</Button>
      </section>
    </section>
  )
}
