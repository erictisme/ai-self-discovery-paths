import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Profile() {
  const router = useRouter();
  const { userData } = router.query;
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (userData) {
      setProfile(JSON.parse(userData));
    }
  }, [userData]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      {profile && (
        <div>
          <h2>Background: {profile.background}</h2>
          <h2>Values: {profile.values}</h2>
          <h2>Priorities: {profile.priorities}</h2>
          <h2>Dilemmas: {profile.dilemmas}</h2>
          {/* TODO: Add more detailed analysis here */}
        </div>
      )}
    </div>
  );
}
