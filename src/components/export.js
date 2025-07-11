import prop1 from "../assets/images/prop1.webp";
import prop2 from "../assets/images/prop2.webp";
import prop3 from "../assets/images/prop3.webp";
import prop4 from "../assets/images/prop4.webp";
import prop5 from "../assets/images/prop5.webp";
import prop6 from "../assets/images/prop6.webp";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import { MdNoteAlt } from "react-icons/md";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

export const property = [
  {
    images: prop1,
    address: "6Downtown, Las Vegas",
    name: "Villa with Amazing View",
    price: "$ 213.23",
    about:
      "Experience luxury living with panoramic city views in this beautifully designed villa located in the heart of downtown Las Vegas.",
    bed: 4,
    bath: 3,
    area: "250 sq ft",
    owner: "Alice Adams",
  },
  {
    images: prop2,
    address: "Meadows Village, Las Vegas",
    name: "Townhouse for Sale",
    price: "$ 345.18",
    about:
      "Spacious and modern townhouse situated in a quiet neighborhood, perfect for families seeking comfort and convenience.",
    bed: 4,
    bath: 3,
    area: "450 sq ft",
    owner: "Drew Alice",
  },
  {
    images: prop3,
    address: "49 DC townhall alex",
    name: "Duplex Sea Facing for Rent",
    price: "$ 652.18",
    about:
      "Wake up to breathtaking sea views in this elegant duplex, offering open-plan living and modern finishes in a serene location.",
    bed: 4,
    bath: 3,
    area: "129 sq ft",
    owner: "Fursi Bam",
  },
  {
    images: prop4,
    address: "Underground street 20 texax",
    name: "Villa with Side View",
    price: "$ 876.13",
    about:
      "Stylish villa featuring a side garden view, spacious interiors, and high-end finishes—ideal for relaxed suburban living.",
    bed: 4,
    bath: 3,
    area: "453 sq ft",
    owner: "Neon Alice",
  },
  {
    images: prop5,
    address: "Rubari London Hills",
    name: "Awesome Villa for Rent",
    price: "$ 341.83",
    about:
      "Fully furnished villa nestled in the scenic hills of Rubari, offering peace, privacy, and beautiful hilltop sunsets.",
    bed: 4,
    bath: 3,
    area: "320 sq ft",
    owner: "Firari Alice",
  },
  {
    images: prop6,
    address: "Northean fersh alice",
    name: "Street Farm for Sale",
    price: "$ 675.23",
    about:
      "Charming farm property located in a peaceful rural area, perfect for agricultural use or countryside living with modern amenities.",
    bed: 4,
    bath: 3,
    area: "340 sq ft",
    owner: "Jordan Bram",
  },
];

export const service = [
  {
    icon: MdNoteAlt,
    title: "Sell your home",
    desc: "We sell your home at the best market price",
  },
  {
    icon: FaHome,
    title: "Home loans",
    desc: "We offer you free consultancy to get a loan",
  },
  {
    icon: GoLaw,
    title: "Legal services",
    desc: "Expert legal help for all related property items",
  },
  {
    icon: FaSearch,
    title: "Home inspection",
    desc: "We make sure you get what you were promised",
  },
  {
    icon: FaNotesMedical,
    title: "Evaluation",
    desc: "We offer you free evaluation to get a mortgage loan",
  },
  {
    icon: FaCameraRetro,
    title: "Photoshoot",
    desc: "We prepare your home visual presentation",
  },
];

export const client = [
  {
    image: client1,
    name: "Dana Gilmore",
    text: "Excellent team!",
    feedback:
      " Excellent Performance and SEO Friendly.What I love most about WP Estate is how fast it loads and how well it performs on both desktop and mobile. It’s also built with SEO in mind, which helped us rank better locally. We’ve seen a noticeable increase in traffic and inquiries since launching our site.",
  },
  {
    image: client2,
    name: "Ana Anderson",
    text: "Very good work",
    feedback:
      "Support That Truly Cares.I had a few technical questions while setting things up, and their customer support was incredibly responsive and helpful. They went above and beyond to ensure everything was running smoothly. Great product backed by a great team!",
  },
  {
    image: client3,
    name: "Albert adame",
    text: "Very well",
    feedback:
      "Highly Customizable and Beautiful! WP Estate exceeded my expectations. The design is modern, clean, and user-friendly. It allowed me to customize my real estate website exactly the way I wanted—without needing to touch much code. My clients love the experience, and the support team is top-notch!",
  },
  {
    image: client4,
    name: "Dana Gilmore",
    text: "Excellent team!",
    feedback:
      "Perfect for Real Estate Agents and Agencies. As a real estate agency owner, WP Estate helped us streamline listings, showcase properties with stunning galleries, and integrate Google Maps easily. The IDX/MLS compatibility was a huge bonus. It’s a must-have tool for any serious property business.",
  },
  {
    image: client5,
    name: "Alex gilmore",
    text: "Excellent team!",
    feedback:
      "The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client6,
    name: "Sivay Ashbi",
    text: "Excellent team!",
    feedback:
      "All-in-One Real Estate Solution.WP Estate has everything you need built right in—advanced property filters, user-friendly search, membership features, and beautiful listing layouts. It saved us from buying multiple plugins and gave our brand a professional look from day one. Highly recommended for both beginners and experienced developers.",
  },
];
