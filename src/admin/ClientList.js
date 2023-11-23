import { useState, useEffect } from 'react';

export default function ClientList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/Models/Process/getClient.php')
      .then(response => response.json())
      .then(data => setPeople(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ul role="list" className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-t-lg" style={{marginTop:'50px'}}>
      {people.map((person) => (
        <li key={person.id} className="flex justify-between gap-x-6 py-5 px-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={"http://localhost:3000/assest/" + person.pro_pic} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="font-semibold">{person.firstName} {person.lastName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="font-semibold">{person.accountType}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">{person.email}</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
