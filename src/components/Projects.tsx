import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import './Projects.css';
import './Splide.css';
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

import hackR from '../assets/exolegendRobot.png'
import hackG from '../assets/exolegendGame.jpg'

import tr from '../assets/Transcendence.png';
import trC from '../assets/TranscendenceCustomize.png';
import trA from '../assets/TranscendenceAchievements.png';
import trR from '../assets/TranscendenceRumble.png';
import trR1 from '../assets/TranscendenceRumble2.png';

import cub3d from '../assets/cub3d.png';
import cub3dE from '../assets/cub3dExit.png';
import cub3dD from '../assets/cub3dDoor.png';

import im6 from '../assets/minishell.png'
import im7 from '../assets/Philo.png'

import spM from '../assets/spaceMain.png'
import spG from '../assets/spaceGame.png'
import spP from '../assets/spacePause.png'
import spS from '../assets/spaceShop.png'

import im9 from '../assets/webserv.png'
import im10 from '../assets/ford.png'
import im11 from '../assets/elden.png'
import eldenCounter from '../assets/eldenCounter.jpg'

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const labels = {
    schoolProject: t('schoolProject'),
    gameDevelopment: t('gameDeveloppement'),
    memoryManagement: t('memoryManagement'),
    parsing: t('parsing'),
    personalProject: t('personalProject'),
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
    math : t('math'),
  };

  const projects = [
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
      images: [tr, trC, trA, trR, trR1],
    },
    {
      title: 'Cube3D',
      technologies: 'C, Minilibx',
      tags: [
        labels.schoolProject,
        labels.gameDevelopment, 
        labels.memoryManagement,
        labels.math,
      ],
      description: t('cub3dDesc'),
      githubLink: 'cube3d',
      images : [cub3d, cub3dD, cub3dE],
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
      githubLink: 'FordJohnson',
      image: im10,
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
      image: eldenCounter,
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
      description: t('philoDesc'),
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
      images: [spM, spG, spP, spS],
      link:false,
    },
    {
      title: '72h Exolegend Hackathon',
      technologies: 'C++',
      tags: [
        labels.personalProject,
        labels.artificialIntelligence,
        labels.teamManagement,
        labels.memoryManagement,
        labels.algorithm,
        labels.math,
      ],
      description: t('hackathondesc'),
      githubLink: 'None',
      images: [hackR, hackG],
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