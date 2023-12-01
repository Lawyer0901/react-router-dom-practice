import { Link, useSearchParams, useLocation } from 'react-router-dom';

const ClienPage = () => {
  const location = useLocation();
  console.log(location);
  const clients = [
    { id: '1', name: 'client-1' },
    { id: '2', name: 'client-2' },
    { id: '3', name: 'client-3' },
    { id: '4', name: 'client-4' },
    { id: '5', name: 'client-5' },
    { id: '6', name: 'client-6' },
    { id: '7', name: 'client-7' },
    { id: '8', name: 'client-8' },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const clientName = searchParams.get('name') ?? '';
  const visibleClient = clients.filter(client =>
    client.name.toLowerCase().includes(clientName.toLowerCase())
  );
  const handleChange = e => {
    const name = e.target.value;
    const nextParams = name !== '' ? { name } : {};
    console.log(nextParams);
    setSearchParams(nextParams);
  };
  return (
    <div>
      <input type="text" value={clientName} onChange={handleChange} />
      <ul>
        {visibleClient.map(client => {
          return (
            <li key={client.id}>
              <Link to={`${client.name}`} state={{ from: location }}>
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClienPage;
