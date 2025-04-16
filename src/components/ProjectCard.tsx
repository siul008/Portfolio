import React from 'react';
import './ProjectCard.css';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  title: string;
  technologies: string;
  tags: string[];
  description: string;
  githubLink: string;
  image?: string; // Optional image for the project
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  technologies,
  tags,
  description,
  githubLink,
  image,
}) => {
      const { t } = useTranslation();
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${image || 'https://via.placeholder.com/600x400'})`,
        }}
      >
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>
          <strong>{t('technologyUsed')}:</strong> {technologies}
        </p>
        <div className="tag-container">
          <strong>Tags:</strong>{' '}
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <p>{description}</p>
        <a
          href= {`https://github.com/siul008/${githubLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          {t('viewGithub')} →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;