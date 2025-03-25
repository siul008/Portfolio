import React from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  // Example skills data
  const skillsData = {
    programmingLanguages: [
      { name: 'C#', level: 90 },
      { name: 'PowerFX', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 60 },
      { name: 'C++', level: 60 },
      { name: '.NET', level: 50 },
      { name: 'Javascript', level: 30 },
      { name: 'HTML', level: 20 },
      { name: 'CSS', level: 20 },

    ],
    software: [
      { name: 'Unity', level: 95 },
      { name: 'Power Automate', level: 90 },
      { name: 'Power Apps', level: 80 },
      { name: 'Figma', level: 50 },
      { name: 'FMOD', level: 30 },
      { name: 'Blender', level: 30 },


    ],
    other: [
      { name: 'Git', level: 90 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Team Working', level: 80 },
      { name: 'Docker', level: 30 },

    ],
  };

  return (
    <div className="skills" id="skills">
      <h2>{t('skills')}</h2>
      <div className="skills-container">
        {/* Programming Languages */}
        <div className="skills-category">
          <h3>{t('programmingLanguages')}</h3>
          <ul className="skills-list">
            {skillsData.programmingLanguages.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Software */}
        <div className="skills-category">
          <h3>{t('software')}</h3>
          <ul className="skills-list">
            {skillsData.software.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Other */}
        <div className="skills-category">
          <h3>{t('other')}</h3>
          <ul className="skills-list">
            {skillsData.other.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;