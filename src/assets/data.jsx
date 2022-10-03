import React from 'react';
import myLogo from './logo1.png';
import heroImage from './images/background.jpg';
import heroImage2 from './images/ECR/hero.jpg';
import heroImage3 from './images/ECR/hero2.png';
import etude from '../assets/dimension/etude.jpeg';
import cons from '../assets/dimension/con.jpg';
import realisation from '../assets/dimension/realisation.jpg';
import left from '../assets/projects/left.jpg'
import right from '../assets/projects/right.jpg'
import middle from '../assets/projects/paroisse.jpg'

import profil from './images/testimonials/profile.jpg';
// import presentation from './videos/test.mp4'

import {
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
  } from 'react-icons/fa';

export const logo  = myLogo;
// export const video  = presentation;

export const leftLinks = [
  {
    id: 1,
    url: '/about',
    text: 'APROPOS',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/project',
    text: 'PROJET',
    icon: <FaUserFriends />,
  },

];

export const hero = {
      devise: "Réalisez proprement  votre projet de rêve avec une nouvelle expérience.",
      about_info: "ECR sarl est une société spécialisée dans le génie civil : construction de bâtiments  complets, construction d’autres ouvrages de génie civil, commerce de gros d’autres équipements industriels et fournitures diverses.",
      image:heroImage2,
      image2:heroImage3,
      client:20,
      projet:50,
      button_label: "BUILD YOUR PROJET",

    };

export const rightLinks = [
  {
    id: 1,
    url: '/features',
    text: 'PROJECTION',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/resources',
    text: 'RESSOURCES',
    icon: <FaUserFriends />,
  },

];
  

export const dimension = [
  {
    id: 1,
    title: 'Etude',
    image: etude,
  },
  {
    id: 2,
    title: 'Conception',
    image: cons,
  },
  {
    id: 3,
    title: 'Réalisation',
    image: realisation,
  },
];
  

const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFacebook />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <FaTwitter />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <FaLinkedin />,
    },
  
  ];
  
  // projects images 
  const cache = {};
  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }
  // Note from the docs -> Warning: The arguments passed to require.context must be literals!
  importAll(require.context("../assets/ECR", false, /\.(png|jpe?g|svg)$/));
  export const projects = Object.entries(cache).map(module => module[1]);
  // uses eg 
//   {projects.map((image,index) => (
//     <img  key={index.toString()} style={{width: 100}} src={image} />
// ))}

// project eg files
export const projectsEg = [left, middle, right];
  
export  const chooseUs = [
    {
      id: "01",
      title: 'Titre 1',
      detail:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: "02",
      title: 'Titre 2',
      detail:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: "03",
      title: 'Titre 3',
      detail:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: "04",
      title: 'Titre 4',
      detail:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
  ];
  


  export  const testimonials = [
    {
      id: 1,
      organisation: 'entreprise 1',
      person: "Axel Murhula",
      function: "PGB",
      profile: profil ,
      testimonial:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      organisation: 'entreprise 1',
      person: "Axel Murhula",
      function: "PGB",
      profile: profil,
      testimonial:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: 3,
      organisation: 'entreprise 1',
      person: "Axel Murhula",
      function: "PGB",
      profile: profil,
      testimonial:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    },
    {
      id: 4,
      organisation: 'entreprise 1',
      person: "Axel Murhula",
      function: "PGB",
      profile: profil,
      testimonial:
        ' lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.',
    }
  ];
  

  export const FAQBase = [
    {
      id: 1,
      question: 'Quel est le prix de votre service',
      answer: "tout depends de ce qu'on vas utiliser, tout depends de ce qu'on vas utiliser lorem ipsum dolor sit amet, consectetur adipiscing elit essere  nonumy euismod tempor  invid id tempor invid id tempor invid ",
    },
    {
      id: 2,
      question: 'Quel est le prix de votre service',
      answer: "tout depends de ce qu'on vas utiliser, tout depends de ce qu'on vas utiliser lorem ipsum dolor sit amet, consectetur adipiscing elit essere  nonumy euismod tempor  invid id tempor invid id tempor invid ",

    },
    {
      id: 3,
      question: 'Quel est le prix de votre service',
      answer: "tout depends de ce qu'on vas utiliser, tout depends de ce qu'on vas utiliser lorem ipsum dolor sit amet, consectetur adipiscing elit essere  nonumy euismod tempor  invid id tempor invid id tempor invid ",
     
    },
    {
      id: 4,
      question: 'Quel est le prix de votre service',
      answer: "tout depends de ce qu'on vas utiliser, tout depends de ce qu'on vas utiliser lorem ipsum dolor sit amet, consectetur adipiscing elit essere  nonumy euismod tempor  invid id tempor invid id tempor invid ",
     
    },
  
  ];

  export const contact ={
    title: "Qu'est  ce que tu attends? Parles nous de ton projet!",
    button_label: "Constactez-nous",
  }

  export const footer =
    {
      ecr:{
        logo:myLogo,
        adresse: "Av Nyamugo, Q. Nyamugo, ....",
        mail: "matabaro@gmail.com",
        socials: social,
      },
      features: [
        "GRH",
        "Plans Groupes",
        "Et autres"
      ],
      solutions: [
        "financiere",
        "invention",
        "etc"
      ],
      ressources: [
        "statequi",
        "guides",
        "conception"
      ],
    }
   