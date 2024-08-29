import { useState } from 'react';
import { useRouter } from 'next/router';
import Form from '../components/Form';

export default function Home() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  const handleFormSubmit = (formData) => {
    setUserData(formData);
    router.push({
      pathname: '/scenarios',
      query: { userData: JSON.stringify(formData) }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Self Discovery Paths</h1>
      {userData ? (
        <div>
          <h2>Welcome, {userData.background}</h2>
          <button onClick={() => router.push({ pathname: '/profile', query: { userData: JSON.stringify(userData) } })} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md">View Profile</button>
        </div>
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
