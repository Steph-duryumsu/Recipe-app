import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox  from './components/SearchBox';
import './App.css';
import RecipeList from './components/RecipeList';
import ReviewSection from './components/ReviewSection';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  // const Apikey = 'CKl+Y5aB5W6oy/QJ6p0TYw==6VrQYZVkH0Zr6TdT';

 

  useEffect (() => {
    const fetchRecipe = async () => {
      if (!searchTerm) return;
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      );
      setRecipes(res.data.meals || []);
      } catch (error) {
        console.log('Error fetching recipes:', error);
      }
    };

    fetchRecipe();
  }, [searchTerm]);

  return (
    <div className='App'>
      {/* <img src='Images/image1.jpg' alt='This is a picture'/> */}
      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <RecipeList recipes={recipes}/>
      <ReviewSection/>
    </div>
  );
}

export default App;