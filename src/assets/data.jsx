import React from 'react';
import myLogo from './logo1.png';
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
  const cache2 = {};
  function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
  }
  // hero 
  function importAll2(r) {
    r.keys().forEach((key) => (cache2[key] = r(key)));
  }
  // Note from the docs -> Warning: The arguments passed to require.context must be literals!
  importAll(require.context("../assets/ECR", false, /\.(png|jpe?g|svg)$/));
  importAll2(require.context("../assets/hero", false, /\.(png|jpe?g|svg)$/));
  export const projects = Object.entries(cache).map(module => module[1]);
  export const heroPics = Object.entries(cache2).map(module => module[1]);
  // uses eg 
//   {projects.map((image,index) => (
//     <img  key={index.toString()} style={{width: 100}} src={image} />
// ))}

// project eg files
export const projectsEg = [left, middle, right];
  
export  const chooseUs = [
    {
      id: "01",
      title: "Ancienneté et Références",
      detail:
        "Le nombre important des projets réalisés selon les rêves de nos client font de l'E.C.R sarl un choix de premier plan dans le choix pour vos projets.",
    },
    {
      id: "02",
      title: 'Devis et prix',
      detail:
        "Le cout du projet étant un des éléments clés pour reussir son projet ECR fait de son mieux pour satisfaire ses clients à un prix descent",
    },
    {
      id: "03",
      title: 'Fiabilité',
      detail:
      "L'entreprise Etude Conception et  Réalisation sarl est un entreprise reconnu et enregistré à l'Etat Congolais, imatriculée : CD/BKV/RCCM/22-B-00113",
    },
    {
      id: "04",
      title: 'Satisfaction',
      detail:
      "La performance et l'ingeniosité de notre équipe rendent adequates les attentes du client et les réalisation du projet. le gout d'un travail bien fait."
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
   