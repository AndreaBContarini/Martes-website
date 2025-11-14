import React from 'react';
import { Linkedin, Youtube, Github, Globe } from 'lucide-react';

interface SocialLinksProps {
  person: 'riccardo' | 'andrea';
}

function SocialLinks({ person }: SocialLinksProps) {
  const socialLinks = {
    riccardo: {
      linkedin: 'https://www.linkedin.com/in/riccardobellicontarini/',
      youtube: 'https://www.youtube.com/@riccardobellicontarini',
    },
    andrea: {
      linkedin: 'https://www.linkedin.com/in/andreabellicontarini/',
      github: 'https://github.com/andreabcontarini',
      website: 'https://andreabcontarini.netlify.app/',
    },
  };

  return (
    <div className="flex gap-4 mt-4 justify-center">
      {person === 'riccardo' ? (
        <>
          <a
            href={socialLinks.riccardo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={socialLinks.riccardo.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </>
      ) : (
        <>
          <a
            href={socialLinks.andrea.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={socialLinks.andrea.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={socialLinks.andrea.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="Sito Web Personale"
          >
            <Globe className="w-6 h-6" />
          </a>
        </>
      )}
    </div>
  );
}

export default SocialLinks; 