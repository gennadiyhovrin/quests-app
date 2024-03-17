import questCategories from "@/data/questsCategories";
import CategoryItem from "./CategoryItem";


type Props = {
    activeCategory: string
    setActiveCategory: (category: string) => void
}



const CategoryMenu = ({  activeCategory, setActiveCategory } : Props) => {
  return (
    <nav className=" p-4">
      <ul className="flex space-x-12">
        {questCategories.map((category) => (
          <li key={category.id} onClick={() => setActiveCategory(category.id)} className="cursor-pointer hover:text-orange-400 ">
            <CategoryItem type={category.id} name={category.name} isActive={category.id === activeCategory} />
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default CategoryMenu;
