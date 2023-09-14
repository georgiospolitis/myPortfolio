import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Junior Frontend Developer",
      icon: web,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Frontend Developer",
      company_name: "Devio (E-Commerce & ERP Solutions), Alexandria, Greece",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2023 - Present",
      points: [
        "Develop and maintain responsive web applications using HTML, CSS, Angular, and other modern web technologies",
        "Collaborate closely with cross-functional teams to gather requirements and implement user-friendly interfaces that meet project objectives",
        "Utilize version control tools such as GitLab and SourceTree to manage codebase and streamline collaboration",
        "Demonstrate strong problem-solving skills, effectively debugging and resolving issues to deliver high-quality solutions",
        "Work within the Visual Studio development environment to ensure efficient coding practices and adherence to project timelines."
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "Self-Employed",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2020 - Present",
      points: [
        "Utilize my spare time to explore and practice graphic design, focusing on creating visually captivating and aesthetically pleasing designs.",
      ],
    },
    {
      title: "Waiter",
      company_name: "Olive Bistro Wine Bar, Alexandria, Greece",
      icon: shopify,
      iconBg: "#383E56",
      date: "Oct 2018 - Nov 2021",
      points: [
        "Provided exceptional customer service by ensuring a positive dining experience for guests.",
        "Oversaw daily operations, including table assignments, seating arrangements, and coordination with the kitchen staff to ensure timely and accurate order delivery.",
        "Demonstrated strong leadership skills by effectively delegating tasks, managing conflicts, and maintaining a high standard of service.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Diavlos",
      description:
        "As a Junior Frontend Developer at Devio, I have successfully contributed to this Angular project, maintenance and executed assigned tasks with precision. The DIAVLOS service concerns the live digital transmission via the Internet of lectures, seminars, artistic events and other events held or hosted by important cultural institutions - e.g. Music Majors, Museums, Conference Centres, etc. - as well as by educational and research institutions, primarily to all members of the country's research and academic community.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "sourcetree",
          color: "blue-text-gradient",
        },
        {
          name: "visualstudiocode",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://diavlos.devio.gr/",
    },
    {
      name: "Rock & Wood",
      description:
        "In May 2023 I started building a home rental website for a friend of mine. The website was build with wordpress, with the free version of elementor builder and various other plugins.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "elementor",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "http://gpolitis.epizy.com/",
    },
    {
      name: "Metis",
      description:
        "I am excited to showcase my latest project, Metis, a lifelong learning center built on WordPress. As a developer, I have utilized the free version of Elementor and other plugins to craft a captivating and user-friendly website. One of the key highlights of Metis is its integration with the cutting-edge Google Analytics GA4. By implementing this advanced analytics solution, I have enabled the capture and analysis of valuable data on user behavior, acquisition, and demographics. This data-driven approach allows for strategic insights and informed decision-making, ultimately enhancing the learning experience for our users.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "googleanalytics",
          color: "green-text-gradient",
        },
        {
          name: "elementor",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };