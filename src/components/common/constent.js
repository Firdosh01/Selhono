import blogImg1 from "../../assets/BlogImg1.png";
import blogImg2 from "../../assets/BlogImg2.png";
import blogImg3 from "../../assets/BlogImg3.png";

export const navigation = [
  {
    id: 1,
    link: "Home",
    path: "/",
  },
  {
    id: 2,
    link: "Pages",
    path: "/pages",
  },
  {
    id: 3,
    link: "Services",
    path: "/services",
  },
  {
    id: 4,
    link: "Project",
    path: "/our-project/",
  },
  {
    id: 5,
    link: "Blog",
    path: "/blog/",
  },
  {
    id: 6,
    link: "Contact",
    path: "/contact-us/",
  },
];

export const Blogs = [
  {
    id: 1,
    img: blogImg1,
    tag: "Kitchan Design",
    heading: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022 ",
  },
  {
    id: 2,
    img: blogImg2,
    tag: "Living Design",
    heading: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 November,2023  ",
  },
  {
    id: 3,
    img: blogImg3,
    tag: "Interior Design",
    heading: "Best For Any Office & Business Interior Solution",
    date: "4 December,2023 ",
  },
];


export const FooterLinks = [
  {
    title: "Pages",
    links: [
      { title: "About Us", link: "/about" },
      { title: "Our Projects", link: "/our-projects/" },
      { title: "Our Team", link: "/our-team/" },
      { title: "Contact Us", link: "/contact-us/" },
      { title: "Services", link: "/services" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Kitchan", link: "/Kitchan/" },
      { title: "Living Area", link: "/living-area/" },
      { title: "Bathroom", link: "/bathroom/" },
      { title: "Dinning Hall", link: "/dinning-hall/" },
      { title: "Bedroom", link: "/Bedroom/" },
    ],
  },
];
