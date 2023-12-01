import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const BooksPage = lazy(() => import('./pages/BooksPage/BooksPage'));
const ClienPage = lazy(() => import('./pages/ClientPage/ClienPage'));
const Layout = lazy(() => import('./Layout/Layout'));
const BookDetails = lazy(() => import('./pages/BookDetails/BookDetails'));
const ClientDetails = lazy(() => import('./pages/ClientDetails/ClientDetails'));
const About = lazy(() => import('./About/About'));
const Interesting = lazy(() => import('./Interesting/Interesting'));
const Location = lazy(() => import('./Location/Location'));
const InformationPage = lazy(() =>
  import('./pages/InformationPage/InformationPage')
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="client" element={<ClienPage />} />
        <Route path="client/:id" element={<ClientDetails />} />
        <Route path="information" element={<InformationPage />}>
          <Route path="about" element={<About />} />
          <Route path="interesting" element={<Interesting />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
