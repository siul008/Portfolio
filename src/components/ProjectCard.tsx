import React from 'react';
import { useTranslation } from 'react-i18next';
import { Splide, SplideSlide } from '@splidejs/react-splide';


interface ProjectCardProps {
  title: string;
  technologies: string;
  tags: string[];
  description: string;
  githubLink: string;
  image?: string; // Optional image for the project
  images?: string[];
  link? : boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  technologies,
  tags,
  description,
  githubLink,
  image,
  images,
  link = true,
}) => {
      const { t } = useTranslation();

      const renderImageSection = () => {
        const fallbackImage = 'https://via.placeholder.com/600x400';
        const imgArray = images && images.length > 0 ? images : image ? [image] : [fallbackImage];
    
        if (imgArray.length > 1) {
          return (
            <div className="project-image-carousel">
              <Splide
                options={{
                  type: 'fade',
                  perPage: 1,
                  arrows: true,
                  pagination: true,
                  pauseOnHover: true,
                  drag: true,
                }}
              >
                {imgArray.map((src, i) => (
                  <SplideSlide key={i}>
                    <div
                      className="project-image"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          );
        }
    
        return (
          <div
            className="project-image"
            style={{ backgroundImage: `url(${imgArray[0]})` }}
          />
        );
      };
    


  return (
    <div className="project-card">
        {renderImageSection()}
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
        {link && (
        <a
          href={`https://github.com/siul008/${githubLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          {t('viewGithub')} →
        </a>
      )}
      </div>
    </div>
  );
};

export default ProjectCard;