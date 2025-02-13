import { useEffect, useState } from "react";
import { CategoriesInput, CategoriesList, CategoriesSearchContainer, SelectedCategory } from "./categoriesSearch.styles";
import { FaXmark as IconClose, FaUpload as IconUpload } from 'react-icons/fa6';
import { useServerActions } from "@/app/contexts/server-actions";
import { Category } from "@/app/types/types";

type CategoriesSearchProps = {
    selectedCategories: Category[];
    setSelectedCategories: (categories: Category[]) => void;
    };

export default function CategoriesSearch({ selectedCategories, setSelectedCategories }: CategoriesSearchProps) {

      const { getCategories } = useServerActions();

      const [categories, setCategories] = useState<Category[]>([]);
      const [searchTerm, setSearchTerm] = useState('');

        useEffect(() => {
          const fetchCategories = async () => {
            try {
              const categories = await getCategories();
              setCategories(categories);
            } catch (error) {
              console.error('Failed to fetch categories:', error);
            } finally {
            }
          };
          fetchCategories();
        }, []);

      const filteredCategories = categories.filter(
        category =>
          category.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
          !selectedCategories.some(selected => selected.id === category.id)
      );
    
      const addCategory = (category: Category) => {
        setSelectedCategories(prev => [...prev, category]);
        setSearchTerm('');
      };
    
      const removeCategory = (categoryId: string) => {
        setSelectedCategories(prev => prev.filter(cat => cat.id !== categoryId));
      };
  return (
    <CategoriesSearchContainer>
      {selectedCategories.map(category => (
        <SelectedCategory key={category.id}>
          {category.name}

          <IconClose onClick={() => removeCategory(category.id)} />
        </SelectedCategory>
      ))}
      <CategoriesInput
        type='text'
        id='categories'
        placeholder='Search categories...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={
          searchTerm && filteredCategories.length > 0 ? 'expanded' : ''
        }
      />
      {searchTerm && filteredCategories.length > 0 && (
        <CategoriesList>
          {filteredCategories.map(category => (
            <li
              key={category.id}
              onClick={() => addCategory(category)}
              style={{ padding: '0.25rem 0', cursor: 'pointer' }}
            >
              {category.name}
            </li>
          ))}
        </CategoriesList>
      )}
    </CategoriesSearchContainer>
  );
}
