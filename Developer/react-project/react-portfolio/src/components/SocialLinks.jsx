import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                Github <GitHubIcon fontSize='large'/>
                </>
            ),
            href: 'https://github.com/asagoon',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                LinkedIn <LinkedInIcon fontSize='large'/>
                </>
            ),
            href: 'https://www.linkedin.com/in/yuta-asai-677225273',
            
        },
        {
            id: 3,
            child: (
                <>
                Resume <DescriptionIcon fontSize='large'/>
                </>
            ),
            href: '/public/Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 ml-[-100px] hover:ml-[-1px] px-3 
                hover:rounded-md duration-200 bg-indigo-300 ${style}`}>
                <a 
                href={href} 
                className='flex justify-between items-center w-full h-14 text-gray-900 text-xl'
                download={download}
                target='_blank'
                >
                    {child}
                    
                </a>
            </li>
            ))}
            
        </ul>
        
    </div>
  )
}

export default SocialLinks