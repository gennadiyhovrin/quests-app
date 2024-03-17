import { Facebook, Youtube, Instagram } from "./icons";

const components = {
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string;
};

const SocialIcon = ({ kind, href}: SocialIconProps) => {
  const SocialSvg = components[kind];

  return (
    <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={href}>
     
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6`}
      />
    </a>
  );
};

export default SocialIcon;
