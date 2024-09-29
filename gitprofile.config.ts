// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Talib8335', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitportfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['Talib8335/Talib8335'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
    
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mohammad Talib',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'in/talibnetwork',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://talib8335.github.io/',
    phone: '8700705503',
    email: 'mdtalib8335@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1kt1NGNQEMoDNQp8-UuVElTpw4hJarAHl/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Html',
    'Css',
    'JavaScript',
    'JQuery',
    'PHP',
    'Bootstrap',
    'Antd',
    'Tailwind',
    'React.js',
    'Node.js',
    'Express.js',
    'Next.js',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Redis',
    'Kubernetes',
    'Graphana',
    'Promotheus'
    ,
  ],
  experiences: [
    {
      company: 'NITK',
      position: 'Teaching Assistance at NITK',
      from: 'September 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'IGCE',
      position: 'Lead Event Management Team',
      from: 'Sep 2019',
      to: 'March 2020',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Advanced Diploma in Software Engineering',
      body: '',
      year: 'April 2020',
      link: '',
    },
    {
      name: 'Programming and Data Structures Deep Dive in C++',
      body: '',
      year: 'January 2020',
      link: '',
    },
    {
      name: 'Workshop Training in Web Technologies',
      body: '',
      year: 'September 2019',
      link: '',
    },

  ],
  educations: [
    {
      institution: 'National Institute of Technology Surathkal, Karnataka',
      degree: 'Master of Technology (M.TECH)',
      from: '2023',
      to: '2025',
      },
    {
      institution: 'Indo Global College Of Engeering, Chandigarh',
      degree: 'Bachelor of Technology (B.TECH)',
      from: '2017',
      to: '2021',
    },
    {
      institution: 'Vikash The Concept School Sason, Sambalpur',
      degree: 'Senior Secondary (CBSE)',
      from: '2015',
      to: '2017',
    },
    {
      institution: 'DAV Public School, MCL Basundhara Area',
      degree: 'Secondary (CBSE)',
      from: '2013',
      to: '2015',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
 
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
