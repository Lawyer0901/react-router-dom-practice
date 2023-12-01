import { Link, useParams, useLocation } from 'react-router-dom';

const ClientDetails = () => {
  const client = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/clients';
  //   console.log(client);
  return (
    <div>
      <Link to={backLink}>Back to clients</Link>
      <h1>This is {client.id} information</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aliquid
        minus fugiat fuga veritatis corporis dolores, excepturi voluptas
        obcaecati, perspiciatis et vitae exercitationem, asperiores laudantium
        molestiae laboriosam expedita alias est?
      </p>
    </div>
  );
};

export default ClientDetails;
