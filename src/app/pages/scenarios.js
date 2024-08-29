import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const generateScenarios = async (userData) => {
  // Mock API call to generate scenarios based on user data
  return [
    {
      scenario: 'Scenario 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
    },
    // More scenarios...
  ];
};

export default function Scenarios() {
  const router = useRouter();
  const { userData } = router.query;
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    if (userData) {
      generateScenarios(JSON.parse(userData)).then(setScenarios);
    }
  }, [userData]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Choose Your Path</h1>
      {scenarios.map((scenario, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-bold">{scenario.scenario}</h2>
          <div className="mt-2 space-y-2">
            {scenario.options.map((option, idx) => (
              <button key={idx} className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md">{option}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
