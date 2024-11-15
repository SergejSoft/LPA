import React, { useState } from 'react';
import DayHeader from './components/DayHeader';
import ActivityBlock from './components/ActivityBlock';
import { Calendar } from 'lucide-react';
import { Activity } from './types';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date('2023-11-24'));

  const activities: Record<number, Activity[]> = {
    24: [
      { id: 1, title: 'Morning Activities 🌅', subtitle: 'Running • TurnFit • Yoga', maxParticipants: 10 },
      { id: 2, title: 'Beach Volleyball 🏐', maxParticipants: 10 },
      { id: 3, title: 'Padel 🎾', maxParticipants: 10 },
    ],
    25: [
      { id: 4, title: 'Morning Activities 🌅', subtitle: 'Running • TurnFit • Yoga', maxParticipants: 10 },
      { id: 5, title: 'Hiking 🥾', maxParticipants: 10 },
      { id: 6, title: 'Padel 🎾', maxParticipants: 10 },
    ],
    26: [
      { id: 7, title: 'Morning Activities 🌅', subtitle: 'Running • TurnFit • Yoga', maxParticipants: 10 },
      { id: 8, title: 'Bike Tour 🚴‍♂️', maxParticipants: 10 },
      { id: 9, title: 'Padel 🎾', maxParticipants: 10 },
    ],
    27: [
      { id: 10, title: 'Morning Activities 🌅', subtitle: 'Running • TurnFit • Yoga', maxParticipants: 10 },
      { id: 11, title: 'Hiking 🥾', maxParticipants: 10 },
      { id: 12, title: 'Padel 🎾', maxParticipants: 10 },
    ],
    28: [
      { id: 13, title: 'Morning Activities 🌅', subtitle: 'Running • TurnFit • Yoga', maxParticipants: 10 },
      { id: 14, title: 'Dunes 🏜️', maxParticipants: 10 },
      { id: 15, title: 'Padel 🎾', maxParticipants: 10 },
    ],
    29: [
      { id: 16, title: 'Morning Activities 🌅', subtitle: 'Running • TurnFit • Yoga', maxParticipants: 10 },
      { id: 17, title: 'Beach Volleyball 🏐', maxParticipants: 10 },
      { id: 18, title: 'Padel 🎾', maxParticipants: 10 },
    ],
    30: [
      { id: 19, title: 'Morning Activities 🌅', subtitle: 'Running • TurnFit • Yoga', maxParticipants: 10 },
      { id: 20, title: 'Beach Volleyball 🏐', maxParticipants: 10 },
      { id: 21, title: 'Padel 🎾', maxParticipants: 10 },
    ],
   
  };

  const getDates = () => {
    const dates = [];
    const startDate = new Date('2023-11-24');
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const getActivitiesForDate = (date: Date) => {
    return activities[date.getDate()] || [];
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 w-full z-10">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-blue-500" />
            <h1 className="text-xl font-semibold text-gray-900">Grand Canaria sport camp</h1>
          </div>
          
          <div className="flex justify-between gap-1 overflow-x-auto pb-2">
            {getDates().map((date) => (
              <DayHeader
                key={date.toISOString()}
                date={date}
                isSelected={date.toDateString() === selectedDate.toDateString()}
                onClick={() => setSelectedDate(date)}
              />
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto px-4 py-4 space-y-4">
          {getActivitiesForDate(selectedDate).map((activity) => (
            <ActivityBlock
              key={activity.id}
              title={activity.title}
              subtitle={activity.subtitle}
              maxParticipants={activity.maxParticipants}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
