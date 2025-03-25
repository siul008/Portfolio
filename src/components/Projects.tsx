import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import './Projects.css';
import im from '../assets/Ray.png';
import im2 from '../assets/AUG21D.png';
import im3 from '../assets/50Ewwg.png';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const labels = {
    schoolProject: t('schoolProject'),
    gameDevelopment: t('gameDeveloppement'),
    memoryManagement: t('memoryManagement'),
    parsing: t('parsing'),
    personalProject: t('personnalProject'),
    soundDesign: t('soundDesign'),
    gameDesign: 'Game Design',
    threeDModeling: t('3DModeling'),
    teamManagement: t('teamManagement'),
    gameJam: 'Game Jam',
    webDevelopment: t('webDeveloppement'),
    responsiveDesign: t('responsiveDesign'),
    unix: 'Unix',
    tokenization: t('tokenization'),
    shell: 'Shell',
    sorting: t('sorting'),
    algorithm: t('algorithm'),
    frontend: 'Frontend',
    backend: 'Backend',
    artificialIntelligence: t('artificialIntelligence'),
    database: t('database'),
    websockets: t('websockets'),
    networking: t('networking'),
    reverseEngineering: t('reverseEngineering'),
    chatBot: t('chatBot'),
    memoryModification: t('memoryModification'),
    fileModification : t('fileModification'),
    ocr : 'OCR',
    multiThreading: t('multiThreading'),
  };

  const projects = [
    {
      title: 'Cube3D',
      technologies: 'C, Minilibx',
      tags: [
        labels.schoolProject,
        labels.gameDevelopment, 
        labels.memoryManagement
      ],
      description: t('cube3dDescription'),
      githubLink: 'cube3d',
      image: im,
    },
    {
      title: '42 Seconds',
      technologies: 'C#, Unity, Blender, Audacity',
      tags: [
        labels.personalProject,
        labels.gameDevelopment,
        labels.soundDesign,
        labels.gameDesign,
        labels.teamManagement,
        labels.gameJam,
        labels.threeDModeling,
      ],
      description: t('42SecondsDescription'),
      githubLink: '42Seconds',
      image: im2,
    },
    {
      title: 'Portfolio',
      technologies: 'React, TypeScript, CSS',
      tags: [labels.webDevelopment, labels.frontend, labels.responsiveDesign],
      description: t('portfolioDesc'),
      githubLink: 'Portfolio',
      image: '',
    },
    {
      title: 'Elements Keeper',
      technologies: 'C#, Unity, Audacity, FL Studio',
      tags: [
        labels.personalProject,
        labels.gameDevelopment,
        labels.gameJam,
        labels.soundDesign,
        labels.gameDesign,
        labels.teamManagement,
      ],
      description: t('elementsKeeperDesc'),
      githubLink: 'ElementsKeeper',
      image: im3,
    },
    {
      title: 'Minishell',
      technologies: 'C, Linux, Bash, Unix',
      tags: [
        labels.schoolProject,
        labels.unix,
        labels.parsing,
        labels.tokenization,
        labels.shell,
        labels.memoryManagement,
      ],
      description: t('minishellDesc'),
      githubLink: 'Minishell',
      image: '',
    },
    {
      title: 'Push Swap',
      technologies: 'C',
      tags: [
        labels.schoolProject,
        labels.unix,
        labels.parsing,
        labels.sorting,
        labels.algorithm,
      ],
      description: t('pushSwapDesc'),
      githubLink: 'PushSwap',
      image: '',
    },
    {
      title: 'Ford Johnson Alorightm',
      technologies: 'C++',
      tags: [
        labels.schoolProject,
        labels.sorting,
        labels.algorithm,
      ],
      description: t('fordJohnsonDesc'),
      githubLink: 'fordJohnson',
      image: '',
    },
    {
      title: 'Transcendence',
      technologies: 'Python, JavaScript, HTML, CSS, Django, ThreeJS, PostgreSQL, Docker, Figma, ThreeJS',
      tags: [
        labels.schoolProject,
        labels.teamManagement,
        labels.artificialIntelligence,
        labels.database,
        labels.frontend,
        labels.backend,
        labels.websockets,
        labels.networking,
        labels.gameDesign,
        labels.gameDevelopment,
        labels.threeDModeling
      ],
      description: t('transcendenceDesc'),
      githubLink: 'TranscendencePong42',
      image: '',
    },
    {
      title: 'Elden Ring Twitch Integration',
      technologies: 'C#, Twitch API, Cheat Engine, .NET',
      tags: [
        labels.personalProject,
        labels.reverseEngineering,
        labels.chatBot,
        labels.memoryModification,
        labels.parsing
      ],
      description: t('eldenRingTwitchDesc'),
      githubLink: 'EldenRingTwitchIntegration',
      image: '',
    },
    {
      title: 'Elden Ring Save Manager',
      technologies: 'C#, Cheat Engine, .NET',
      tags: [
        labels.personalProject,
        labels.reverseEngineering,
        labels.memoryModification,
        labels.fileModification
      ],
      description: t('eldenRingSaveDesc'),
      githubLink: 'SaveManagerEldenRing',
      image: '',
    },
    {
      title: 'Elden Ring Death Counter',
      technologies: 'C#, Tesseract OCR',
      tags: [
        labels.personalProject,
        labels.fileModification,
        labels.ocr
      ],
      description: t('eldenRingDeathDesc'),
      githubLink: 'Elden-Ring-Death-Counter/tree/testBranch',
      image: '',
    },
    {
      title: 'Webserv',
      technologies: 'C++, HTTP, CGI',
      tags: [
        labels.schoolProject,
        labels.parsing,
        labels.backend
      ],
      description: t('webservDesc'),
      githubLink: 'webserv',
      image: '',
    },
    {
      title: 'Philosophers',
      technologies: 'C',
      tags: [
        labels.schoolProject,
        labels.parsing,
        labels.multiThreading
      ],
      description: t('philosophersDesc'),
      githubLink: 'philosophers',
      image: '',
    },
    {
      title: 'Game In Progress',
      technologies: 'C#, Blender, FMOD, Unity, Audacity, FL Studio, Figma',
      tags: [
        labels.personalProject,
        labels.gameDesign,
        labels.gameDevelopment,
        labels.soundDesign,
        labels.teamManagement,
        labels.responsiveDesign,
        labels.threeDModeling
      ],
      description: t('gameDesc'),
      githubLink: 'None',
      image: '',
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2>{t('projects')}</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;