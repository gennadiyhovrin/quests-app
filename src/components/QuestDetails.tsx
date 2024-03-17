"use client";
import { Post } from "@/data/types";
import { useEffect } from "react";
import IconPerson from "../../public/img/svg/icon-person.svg";
import IconPuzzle from "../../public/img/svg/icon-puzzle.svg";
import IconClock from "../../public/img/svg/icon-clock.svg";
import Image from "next/image";
import ModalRequest from "./ModalRequest";

const QuestDetails = ({ post }: { post: Post }) => {
  const { title, description, level, duration, peopleCount, coverImg, type } = post;

  useEffect(() => {
    const body: any = document.querySelector("body");
    body.style.backgroundImage = `url(/${coverImg})`;
    return () => {
      body.style.backgroundImage = ``;
    };
  }, []);

  return (
    <section className="p-8 text-white w-1/3 absolute top-1/3 left-2/4">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg leading-7 text-orange-500">{type}</p>

        <h1 className="text-9xl font-bold mb-4">{title}</h1>
        <div className=" my-6 flex items-center space-x-4 text-xl	">
          <div className="flex items-center">
            <Image src={IconClock} alt="Clock" className="w-4 h-4 mr-2" />
            <span className="">{duration}</span>
          </div>
          <div>|</div>
          <div className="flex items-center">
            <Image src={IconPerson} alt="People" className="w-4 h-4 mr-2" />
            <span className="">{peopleCount.join(" - ")}</span>
          </div>
          <div>|</div>
          <div className="flex items-center">
            <Image src={IconPuzzle} alt="Puzzle" className="w-4 h-4 mr-2" />
            <span className="t">{level}</span>
          </div>
        </div>
        <p className="mb-6 text-xl	tracking-wider">{description}</p>
      </div>
      <ModalRequest />
    </section>
  );
};

export default QuestDetails;
