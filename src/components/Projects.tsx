import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import './Projects.css';
import im from '../assets/PushSwap.png';
import ek from '../assets/elementsKeeper.png';
import ekg from '../assets/elementsKeeperGameplay.png';
import ekb from '../assets/elementsKeeperBook.png';
import sec42 from '../assets/42Sec.png';
import sec42T from '../assets/42SecQuest.png';
import sec42g1 from '../assets/42SecGame.png';
import sec42g2 from '../assets/42SecGame2.png';
import sec42E from '../assets/42SecElev.png';
import erSaveManager from '../assets/ERSaveManager.png';
import im4 from '../assets/Transcendence.png';
import im5 from '../assets/cub3d.png';
import im6 from '../assets/minishell.png'
import im7 from '../assets/Philo.png'
import im8 from '../assets/Space.png'
import im9 from '../assets/webserv.png'
import im10 from '../assets/ford.png'
import im11 from '../assets/elden.png'

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
      images : [im],
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
      images: [sec42, sec42T, sec42E, sec42g1, sec42g2],
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
      images: [ek, ekg, ekb],
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
      image: im6,
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
      image: im,
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
      image: im10,
    },
    {
      title: 'Transcendence',
      technologies: 'Python, JavaScript, ThreeJS, HTML, CSS, Django, PostgreSQL, Docker, Figma',
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
      image: im4,
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
      image: im11,
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
      image: erSaveManager,
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
      image: im9,
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
      image: im7,
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
      image: im8,
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