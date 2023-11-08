// components/Footer.tsx
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4">
      <div className="flex flex-col items-center md:flex-row md:justify-around md:items-center md:gap-4">
        <div className="flex flex-col items-center">
          <EmailIcon className="text-white" />
          <a href="mailto:seuemail@example.com" className="ml-2">
            linecode@gmail.com
          </a>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <div className="flex justify-center md:justify-end mt-2 space-x-4">
            <a href="https://github.com/seugithub" className="text-white">
              <GitHubIcon />
            </a>
            <a href="https://instagram.com/seuinstagram" className="text-white">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com/in/seulinkedin" className="text-white">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
