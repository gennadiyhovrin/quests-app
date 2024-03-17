import Image from "next/image";
import Link from "next/link";
import IconPerson from "../../public/img/svg/icon-person.svg";
import IconPuzzle from "../../public/img/svg/icon-puzzle.svg";
import { Post } from "@/data/types";


const Card = ({ post }: { post: Post }) => {
  const { title, previewImg, level, peopleCount, id } = post;

  return (
    <Link href={`/quests/${id}`} className="relative text-white cursor-pointer" >
      <Image width={300} height={300} src={`/${previewImg}`} alt={title} className="w-full h-full object-cover rounded-lg" />
      <div className="absolute bottom-0 left-0 p-4 rounded-b-lg w-full">
        <div className="text-xl font-bold">{title}</div>
        <div className=" mt-2 flex items-center space-x-4">
          <div className="flex items-center">
            <Image src={IconPerson} alt="People" className="w-4 h-4 mr-2" />
            <span className="text-sm">{peopleCount.join(" - ")}</span>
          </div>
          <div>|</div>
          <div className="flex items-center">
            <Image src={IconPuzzle} alt="Puzzle" className="w-4 h-4 mr-2" />
            <span className="text-sm">{level}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
