import React from 'react';
import { Linkedin, Twitter, Youtube, Github } from 'lucide-react';

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
      twitter: 'https://x.com/andreabelli',
      github: 'https://github.com/andreabcontarini',
    },
  };

  const links = socialLinks[person];

  return (
    <div className="flex gap-4 mt-4 justify-center">
      {person === 'riccardo' ? (
        <>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={links.youtube}
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
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </>
      )}
    </div>
  );
}

export default SocialLinks; 