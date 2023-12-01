import React from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const BooksPage = () => {
  const location = useLocation();
  const books = [
    { id: 'h-1', name: 'Hoodie 1' },
    { id: 'h-2', name: 'Hoodie 2' },
    { id: 'h-3', name: 'Hoodie 3' },
    { id: 's-1', name: 'Sneakers 1' },
    { id: 's-2', name: 'Sneakers 2' },
    { id: 's-3', name: 'Sneakers 3' },
    { id: 's-4', name: 'Sneakers 4' },
    { id: 'p-1', name: 'Pants 1' },
    { id: 'p-2', name: 'Pants 2' },
    { id: 'p-3', name: 'Pants 3' },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';
  //   console.log(name);
  const visibleBooks = books.filter(book =>
    book.name.toLowerCase().includes(name.toLowerCase())
  );
  const handleChange = e => {
    const name = e.target.value;
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    // console.log(name);
  };
  return (
    <div>
      <input value={name} type="text" name="book" onChange={handleChange} />
      <ul>
        {visibleBooks.map(book => {
          return (
            <li key={book.id}>
              <Link to={`${book.name}`} state={{ from: location }}>
                {book.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksPage;
