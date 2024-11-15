import React, { useState } from 'react';
import { Users, X } from 'lucide-react';

interface ActivityBlockProps {
  title: string;
  subtitle?: string;
  maxParticipants: number;
}

export default function ActivityBlock({ title, subtitle, maxParticipants }: ActivityBlockProps) {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newName, setNewName] = useState('');

  const addParticipant = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim() && participants.length < maxParticipants) {
      setParticipants([...participants, newName.trim()]);
      setNewName('');
    }
  };

  const removeParticipant = (index: number) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <Users size={16} />
          <span className="text-sm">{participants.length}/{maxParticipants}</span>
        </div>
      </div>
      
      <div className="space-y-2 max-h-48 overflow-y-auto mt-3">
        {participants.map((name, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded">
            <span className="text-sm text-gray-700">{name}</span>
            <button 
              onClick={() => removeParticipant(index)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Remove participant"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      {participants.length < maxParticipants && (
        <form onSubmit={addParticipant} className="mt-3">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Add participant..."
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={30}
          />
        </form>
      )}
    </div>
  );
}