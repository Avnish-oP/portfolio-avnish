
import React from 'react';
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/text-reveal-card';

const skills = [
  { name: 'React', logo: "https://via.placeholder.com/150" , level: 'Expert' },
  { name: 'JavaScript', logo: 'https://via.placeholder.com/150', level: 'Familiar' },
  { name: 'CSS', logo: 'https://via.placeholder.com/150', level: 'Beginner' },
  // Add more skills here...
];

function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {skills.map((skill, idx) => (
        <div key={idx} className="flex items-center justify-center bg-[#0E0E10]  rounded-2xl w-full">
        <TextRevealCard
          text={skill.name}
          revealText={skill.level}
        >
          <TextRevealCardTitle>
            <img src={skill.logo} alt={skill.name} className="w-20 h-20" />
          </TextRevealCardTitle>
          
        </TextRevealCard>
      </div>
      ))}
    </div>
  );
}

export default Skills;