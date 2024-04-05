import { CardItem } from "@/types/Types";
import { PiStudentFill as piStudentFill } from "react-icons/pi";
import { BiTask as biTask } from "react-icons/bi";
import { FaRegShareSquare as faRegShareSquare } from "react-icons/fa";

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
