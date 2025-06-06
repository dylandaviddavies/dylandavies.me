import occ from "../assets/images/occ.png";
import outcome from "../assets/images/outcome.png";
import theorbiscommunityofpractice from "../assets/images/theorbiscommunityofpractice.png";
import vstock from "../assets/images/vstock.png";
import dylandavies from "../assets/images/dylandavies.png";
import tamsin from "../assets/images/tamsinio.png";
import zuri from "../assets/images/zuricom.png";
import rbc from "../assets/images/rbc.png";
import rbcBorealis from "../assets/images/rbc-borealis.png";
import orbis from "../assets/images/orbis.png";
import design3 from "../assets/images/design3.png";
import type { Project } from "../models/Project";
import type { Experience } from "../models/Experience";

export const EXPERIENCES: Experience[] = [
  {
    name: "Sr. Full Stack Developer",
    company: "RBC Borealis",
    description: "Developing full stack web apps for RBC Borealis: RBC's flagship AI and data innovation initiative.",
    image: rbcBorealis,
    fromDate: "Apr 2024",
    toDate: "Present"
  },
  {
    name: "Sr. Full Stack Developer",
    company: "RBC Royal Bank",
    description: "Developed full stack web apps for Canada's largest bank.",
    image: rbc,
    fromDate: "Oct 2020",
    toDate: "Apr 2024"
  }, {
    name: "Full Stack Developer",
    company: "Orbis Communications",
    description: "Developed full stack web applications for one of the largest experiential learning providers in North America.",
    image: orbis,
    fromDate: "May 2016",
    toDate: "Oct 2020"
  }];

export const PROJECTS: Project[] = [
  {
    nature: "Professional",
    name: "Outcome Campus Connect",
    role: "Full Stack Developer",
    company: "Orbis Communications",
    description:
      "The free experiential learning and recruitment solution available to all post-secondary institutions, post-secondary students, and employers in Canada.",
    image: occ,
    actions: [{ text: "Visit Outcome Campus Connect", href: "https://outcomecampusconnect.ca" }]
  },
  {
    nature: "Professional",
    name: "Outcome",
    role: "Full Stack Developer",
    company: "Orbis Communications",
    description:
      "The experiential learning solution most trusted by 100+ North American post-secondary institutions.",
    image: outcome,
    actions: [{ text: "Learn more about Outcome", href: "https://orbiscommunications.com/outcome" }]
  },
  {
    nature: "Professional",
    name: "Orbis Community of Practice",
    role: "Frontend Developer",
    company: "Orbis Communications",
    description:
      "A venue to discuss and share best practices, find out about the latest product developments, and communicate ideas related to Orbis products.",
    image: theorbiscommunityofpractice,
    actions: [
      { text: "Learn more", href: "https://weareorbis.shorthandstories.com/Equal/index.html" }
    ]
  },
  {
    nature: "Personal",
    name: "vstock",
    description:
      "A stock analysis platform with a Vue, Sass, and TypeScript front-end connecting to a Java API.",
    image: vstock,
    actions: [
      {
        text: "Visit website",
        href: "https://dylandaviddavies.github.io/vstock"
      },
      {
        text: "View code",
        href: "https://github.com/dylandaviddavies/vstock"
      }
    ]
  },
  {
    nature: "Personal",
    name: "dylandavies.me",
    description: "My personal website.",
    image: dylandavies,
    actions: [
      {
        text: "View code",
        href: "https://github.com/dylandaviddavies/dylandavies.me"
      },
      {
        text: "View UI kit",
        href: "https://ui.dylandavies.me"
      }
    ]
  },
  {
    nature: "Personal",
    name: "tamsin.io",
    description: "A vector-heavy website mockup for a music streaming platform using Vue and Sass.",
    image: tamsin,
    actions: [
      {
        text: "Visit website",
        href: "https://dylandaviddavies.github.io/tamsin.io"
      },
      {
        text: "View code",
        href: "https://github.com/dylandaviddavies/tamsin.io"
      }
    ]
  },
  {
    nature: "Personal",
    name: "zuri.com",
    description: "A job posting board mockup using React and Sass.",
    image: zuri,
    actions: [
      {
        text: "Visit website",
        href: "https://dylandaviddavies.github.io/zuri.com"
      },
      {
        text: "View code",
        href: "https://github.com/dylandaviddavies/zuri.com"
      }
    ]
  },
  {
    nature: "Personal",
    name: "design3",
    description: "An illustration-heavy website mockup for a software company.",
    image: design3,
    actions: [
      {
        text: "Visit website",
        href: "https://dylandaviddavies.github.io/design3"
      },
      {
        text: "View code",
        href: "https://github.com/dylandaviddavies/design3"
      }
    ]
  }
];
