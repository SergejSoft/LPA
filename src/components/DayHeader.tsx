import React from 'react';

interface DayHeaderProps {
  date: Date;
  isSelected: boolean;
  onClick: () => void;
}

export default function DayHeader({ date, isSelected, onClick }: DayHeaderProps) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
        isSelected 
          ? 'bg-blue-500 text-white' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="text-xs font-medium">
        {dayNames[date.getDay()]}
      </span>
      <span className="text-lg font-semibold">
        {date.getDate()}
      </span>
      <span className="text-xs font-medium">
        {monthNames[date.getMonth()]}
      </span>
    </button>
  );
}