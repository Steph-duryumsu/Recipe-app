import './SearchBox.css';

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <header className='search-header'>
      <h1 className='app-title'>Recipe Finder</h1>
     <input
     type='text'
     placeholder='Search for a recipe....'
     value={searchTerm}
     onChange={(e) => onSearchChange(e.target.value)}
     className='search-input'
     /> 
    </header>
  );
}

export default SearchBox;