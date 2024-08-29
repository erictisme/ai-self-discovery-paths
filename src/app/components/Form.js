import { useState } from 'react';

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    background: '',
    values: '',
    priorities: '',
    dilemmas: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Background</label>
        <input name="background" value={formData.background} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Values</label>
        <input name="values" value={formData.values} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Priorities</label>
        <input name="priorities" value={formData.priorities} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Dilemmas</label>
        <input name="dilemmas" value={formData.dilemmas} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
    </form>
  );
}
