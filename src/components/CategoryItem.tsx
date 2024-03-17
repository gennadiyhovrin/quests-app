import Image from "next/image";

import IconAll from "../../public/img/svg/icon-all-quests.svg";
import IconAdventures from "../../public/img/svg/icon-adventures.svg";
import IconDetective from "../../public/img/svg/icon-detective.svg";
import IconHorrors from "../../public/img/svg/icon-horrors.svg";
import IconMystic from "../../public/img/svg/icon-mystic.svg";
import IconScifi from "../../public/img/svg/icon-scifi.svg";

type Category = {
  name: string;
  isActive: boolean;
  type: string;
};

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface Icons {
  all: IconComponent;
  adventures: IconComponent;
  horror: IconComponent;
  mystic: IconComponent;
  detective: IconComponent;
  "sci-fi": IconComponent;
}

const Icons = {
  all: IconAll,
  adventures: IconAdventures,
  horror: IconHorrors,
  mystic: IconMystic,
  detective: IconDetective,
  "sci-fi": IconScifi,
};

const CategoryItem = ({ name, isActive, type }: Category) => {
  const IconComponent = Icons[type as keyof Icons];

  return (
    <div className={`flex items-center space-x-2 ${isActive ? "text-orange-400" : "text-white"}`}>
      <Image src={IconComponent} alt={name} />
      <span className={`font-medium ${isActive ? "underline" : ""}`}>{name}</span>
    </div>
  );
};

export default CategoryItem;
