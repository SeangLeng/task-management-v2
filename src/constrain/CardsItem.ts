import { CardItem } from "@/types/Types";
import { PiStudentFill as piStudentFill } from "react-icons/pi";
import { BiTask as biTask } from "react-icons/bi";
import { FaRegShareSquare as faRegShareSquare } from "react-icons/fa";
// images of clients (FreePick)
import sampleImage from "~/assets/front-view-young-attractive-lady-colorful-flower-designed-shirt-blue-skirt-hand-expression-white-removebg-preview.png";
import koreanGirl from "~/assets/korean-girl.png";
import boy from "~/assets/man-blue-shirt-hand-sign-opened-both-sides-removebg-preview.png";
import boyHandUp from "~/assets/asian-cheerful-glasses-male-casual-dress-smaile-laugh-gesture-hand-point-finger-copyspace-your-creativity-ideas-text-white-background-removebg-preview.png";
import emma from "~/assets/natural-headset-teenager-white-asian-removebg-preview.png";
import liam from "~/assets/girl-white-shirt-open-hand-sign-side-removebg-preview.png";

export const CardsItem: CardItem[] = [
  {
    id: 1,
    header: "Student task management",
    description:
      "We knew that, student also has task to do, but sometime they cannot prepare their test immediately, so in this platform they do not worry about this now.",
    icon: piStudentFill,
    route: "#",
  },
  {
    id: 2,
    header: "Task manager",
    description: "You can manage your task with multiple task in onetime.",
    icon: biTask,
    route: "#",
  },
  {
    id: 3,
    header: "Task sharing",
    description:
      "Boost collaboration by sharing tasks efficiently, fostering streamlined teamwork and collective success.",
    icon: faRegShareSquare,
    route: "#",
  },
];

export const ImageSlidesData = [
  {
    id: 1,
    profile: sampleImage,
    name: "Thorn soumai",
    caption:
      "Hi there! I have been using your platform for a while, and I am really impressed with how it helps me manage my tasks.",
  },
  {
    id: 2,
    profile: koreanGirl,
    name: "James",
    caption:
      "Loving this platform for task management—it's a game-changer! 🌟 #Efficiency",
  },
  {
    id: 3,
    profile: boy,
    name: "Sophia",
    caption:
      "This tool has become my go-to for task organization! 📝 #Productivity",
  },
  {
    id: 4,
    profile: boyHandUp,
    name: "Alex",
    caption:
      "Highly recommend this for efficient task management! 💼 #OrganizedLife",
  },
  {
    id: 5,
    profile: emma,
    name: "Emma",
    caption:
      "Managing tasks has never been easier with this platform. 🌟 #ProductivityHack",
  },
  {
    id: 6,
    profile: liam,
    name: "Liam",
    caption:
      "This platform keeps my task list in check—thanks for the boost! 🙌 #TaskManagement",
  },
];
