import { useParams, useLocation, Link } from 'react-router-dom';

const BookDetails = () => {
  const book = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/books';
  //   console.log(book);
  return (
    <div>
      <Link to={backLink}>Back to books</Link>
      <h1>This is {book.id} information</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam hic
        soluta iusto nesciunt fugit quisquam in voluptatibus consequuntur et
        dignissimos laborum eligendi nemo, laudantium delectus illo expedita
        natus aspernatur corporis!
      </p>
    </div>
  );
};

export default BookDetails;
