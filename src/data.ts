/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Info, MapPin, Users, HeartHandshake, Eye, Award, Flower, History as HistoryIcon } from 'lucide-react';
import { Official, Sitio, TouristSpot, NewsTopic, FAQItem } from './types';

export const officials: Official[] = [
  {
    name: "Hon. Maria J. Cabañog",
    position: "Punong Barangay",
    roleDescription: "Overall head of the Barangay administration, guiding social and economic welfare initiatives."
  },
  {
    name: "Hon. Marilyn C. Cabañog",
    position: "Barangay Kagawad",
    roleDescription: "Committee Chairperson on Health, Sanitation and Social Services."
  },
  {
    name: "Hon. Jesus E. Ludoc",
    position: "Barangay Kagawad",
    roleDescription: "Committee Chairperson on Agriculture, Livelihood and Cooperative Projects."
  },
  {
    name: "Hon. Eduardo Cabañog",
    position: "Barangay Kagawad",
    roleDescription: "Committee Chairperson on Peace & Order and Public Safety."
  },
  {
    name: "Hon. Edgar E. Diano",
    position: "Barangay Kagawad",
    roleDescription: "Committee Chairperson on Infrastructure and Public Works."
  },
  {
    name: "Hon. Patricio E. Cabañog",
    position: "Barangay Kagawad",
    roleDescription: "Committee Chairperson on Environment, Natural Resources, and Forestry."
  },
  {
    name: "Hon. Rito J. Dinalo",
    position: "Barangay Kagawad",
    roleDescription: "Committee Chairperson on Finance, Appropriations, and Ways & Means."
  },
  {
    name: "Hon. Jessie Christine C. Añero",
    position: "Barangay Kagawad",
    roleDescription: "Committee Chairperson on Education, Tourism, Gender & Development."
  },
  {
    name: "Hon. Almar S. Cadalin",
    position: "SK Chairman",
    roleDescription: "Lead representation of youth development and sports cultivation programs."
  },
  {
    name: "Lucia O. Lano",
    position: "Barangay Secretary",
    roleDescription: "Official records, certifications, board resolutions, and archive administration."
  },
  {
    name: "Rufinita D. Matus",
    position: "Barangay Treasurer",
    roleDescription: "Financial accounts custodian, budget disbursements, and local tax declarations."
  }
];

export const sitios: Sitio[] = [
  {
    name: "Sitio Balani",
    description: "Famous for its lush farming ridges and peaceful, hardworking agricultural community.",
    livelihood: "Corn farming and vegetable cultivation."
  },
  {
    name: "Sitio Babao",
    description: "An elevated plateau with sweeping highland views of Ginatilan's mountains and coast.",
    livelihood: "Livestock breeding and root crops."
  },
  {
    name: "Sitio Sang Ulog",
    description: "Nestled along natural creeks with fertile, organic volcanic soils.",
    livelihood: "Abaca raising and tree farming."
  },
  {
    name: "Sitio Bag-ong Lungsod",
    description: "The main central residential sitio surrounding the Barangay administrative center.",
    livelihood: "Small-scale trade, handicrafts, and services."
  }
];

export const touristSpots: TouristSpot[] = [
  {
    name: "Balani Highland Terraces",
    image: "/src/assets/images/hero_farming_terrace_1781397614002.jpg",
    description: "Breathtaking highland agricultural terraces on mountain ridges where locals craft sustainable vertical farming setups.",
    highlight: "Panoramic Highland Views"
  },
  {
    name: "Anahaw Rich Forest Paths",
    image: "/src/assets/images/hero_anahaw_leaves_1781397600337.jpg",
    description: "Natural forests rich with native Anahaw palm leaves (the national leaf of the Philippines) which gave Barangay Anao its historic name.",
    highlight: "Protected Native Biodiversity"
  },
  {
    name: "Anao Natural springs",
    image: "/src/assets/images/spot_water_spring_1781397629855.jpg",
    description: "Hidden under thick forest foliage, these sweet-water springs supply fresh, icy mountain waters to adjacent farmland settlements.",
    highlight: "Untouched Freshwater Sanctuary"
  },
  {
    name: "Traditional Leaf Handcrafts",
    image: "/src/assets/images/spot_anahaw_craft_1781397645875.jpg",
    description: "A community center showcasing local artisans transforming sun-dried Anahaw leaves into woven 'paypay' fans, storage baskets, and rustic roofing sheets.",
    highlight: "Indigenous Weaving Legacy"
  }
];

export const newsTopics: NewsTopic[] = [
  {
    id: "news-3",
    date: "2026-06-10",
    tag: "Agriculture",
    title: "Organic Fertilizer & Sustainable Agriculture Workshop for Anao Farmers",
    excerpt: "Barangay Anao, in collaboration with the Ginatilan Municipal Agriculture Office, conducted a 2-day training on creating natural organic compost for local farmers.",
    content: "Our farmers gathered at the Barangay Multi-purpose Hall to learn modern organic techniques. The community continues to prioritize natural soil renewal to protect the surrounding ecosystems, preserving our natural heritage of land cultivation."
  },
  {
    id: "news-2",
    date: "2026-06-03",
    tag: "Community",
    title: "Anahaw Preservation and Eco-Tourism Pathway Initiative Approved",
    excerpt: "The Barangay Council signed an ordinance declaring the Sitio Sang Ulog forest path a native flora sanctuary to protect wild Anahaw plant populations.",
    content: "The initiative ensures that the harvesting of Anahaw palm leaves for local handicrafts remains strictly sustainable. An educational trail is set to open next season showcase local biodiversity for visitors."
  },
  {
    id: "news-1",
    date: "2026-05-24",
    tag: "Health",
    title: "Sitio Babao Health Caravan and Immunization Drive Completed",
    excerpt: "Barangay health workers hiked to Sitio Babao to deliver critical diagnostic checkups, seasonal vaccines, and pediatric nutrition guidance.",
    content: "Under the leadership of Hon. Maria J. Cabañog, Barangay Anao guarantees medical support reaches our highest highland sitos directly, ensuring that geographical barriers do not prevent access to care."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "How did Barangay Anao get its name?",
    answer: "Historically, the area was teeming with beautiful, fan-shaped 'Anahaw' palm plants. Early villagers referred to the location as such, which slowly contracted into 'Barangay Anao' over generations."
  },
  {
    question: "What is the primary industry in Barangay Anao?",
    answer: "Agriculture is our heart. Most families engage in sustainable small-scale upland farming, cultivating white corn, vegetables, root crops, and weaving traditional handicrafts from Anahaw leaves."
  },
  {
    question: "Where is the Barangay Office located?",
    answer: "Our Barangay Hall is situated in Sitio Bag-ong Lungsod, Barangay Anao, Ginatilan, Cebu, and is open Monday through Friday, from 8:00 AM to 5:00 PM."
  }
];

// Complete multi-lingual vocabulary dictionaries for pixel perfect translations
export const translations = {
  en: {
    title: "Barangay Anao",
    subtitle: "BARANGAY GOVERNMENT OF ANAO",
    association: "Municipality of Ginatilan, Province of Cebu, Philippines",
    navHome: "Home",
    navAbout: "About Anao",
    navAdmin: "Administration",
    navSpots: "Upland Spots",
    navContact: "Access & Contact",
    heroHeading1: "Welcome to Barangay Anao",
    heroSub1: "A tranquil highland sanctuary known for its rich farming ridges and pure mountain breeze.",
    heroHeading2: "The Splendor of Anahaw Leaves",
    heroSub2: "Honoring our namesake plant (the national leaf of the Philippines) which populates our green forests.",
    heroHeading3: "Bounteous Highland Agriculture",
    heroSub3: "A resilient farming community cultivating fertile soil with devotion and ecological respect.",
    quickInfo: "Quick Information",
    location: "Location",
    locationVal: "Ginatilan, Cebu, Philippines",
    area: "Land Area",
    areaVal: "467 hectares",
    population: "Population",
    populationVal: "798 residents (approx.)",
    livelihood: "Main Livelihood",
    livelihoodVal: "Upland Farming & Forest Weaving",
    sitiosTitle: "Sub-villages (Sitios)",
    sitiosSubtitle: "The four distinct settlements of Barangay Anao",
    vision: "Our Vision",
    visionText: "A barangay government unit committed to social transformation, environmental sustainability, and cultural preservation while improving the welfare of its people.",
    mission: "Our Mission",
    missionText: "To deliver high-impact basic services at the grassroots level and improve the living conditions of residents, especially farmers, women, and children.",
    history: "Brief History of Anao",
    historyText1: "Barangay Anao originated from the word “Anahaw”, a sturdy native palm plant abundant in the area. Over time, the local pronunciation naturally evolved, and the name was shortened to Anao.",
    historyText2: "Nestled high up in the rugged, lush mountains of the Municipality of Ginatilan, Cebu, this upland paradise serves as a testament to the coexistence of progressive community leadership and ecological conservation, serving as the green cradle of the region.",
    adminTitle: "Barangay Administration",
    adminSubtitle: "Dedicated public servant officers steering Anao towards sustainability and cooperation",
    secretary: "Barangay Secretary",
    treasurer: "Barangay Treasurer",
    spotsHeader: "Upland Attractions",
    spotsSub: "Explore the scenic topography and native cultural artifacts of Anao",
    contactTitle: "Contact & Local Access",
    contactSub: "Feel free to reach out or visit our administrative hall",
    address: "Office Address",
    addressVal: "Barangay Anao Office, Sitio Bag-ong Lungsod, Barangay Anao, Ginatilan, Cebu, 6028, Philippines",
    phone: "Municipal Office Phone",
    email: "Municipal Registry Email",
    latestNews: "Latest News & Community Updates",
    readMore: "View Details",
    close: "Close",
    contactForm: "Inquiry Form",
    senderName: "Full Name",
    senderEmail: "Email Address",
    senderInquiry: "Message or Inquiry",
    submit: "Send Message",
    successMsg: "Thank you! Your message has been sent to the Barangay Secretariat.",
    backToTop: "Return to Top of Page",
    traditionTitle: "Traditional Heritage",
    traditionSub: "PRESERVING CULTURE • HARVESTING LIFE",
    langSelect: "Select Language",
    allRightsReserved: "Barangay Government of Anao. Inspired by Jinja Honcho."
  },
  ceb: {
    title: "Barangay Anao",
    subtitle: "GUBYERNO SA BARANGAY ANAO",
    association: "Lungsod sa Ginatilan, Lalawigan sa Sugbo, Pilipinas",
    navHome: "Unang Panid",
    navAbout: "Bahin sa Anao",
    navAdmin: "Mga Opisyal",
    navSpots: "Katulokan sa Bukid",
    navContact: "Kontak ug Lokasyon",
    heroHeading1: "Maayong Pag-abot sa Barangay Anao",
    heroSub1: "Usa ka malinawon nga dapit sa kabukiran nga nailhan sa iyang tabunok nga yuta ug presko nga hangin.",
    heroHeading2: "Ang Katahom sa Dahon sa Anahaw",
    heroSub2: "Nagpasidungog sa tanom diin gikan ang ngalan sa barangay nga abunda kaayo sa among kalasangan.",
    heroHeading3: "Mabungahong Panguma sa Bukid",
    heroSub3: "Usa ka madaginuton nga komunidad nga nag-atiman sa yuta nga adunay pagtahod sa kalikopan.",
    quickInfo: "Dali nga Impormasyon",
    location: "Lokasyon",
    locationVal: "Ginatilan, Sugbo, Pilipinas",
    area: "Gidak-on sa Yuta",
    areaVal: "467 ka ektarya",
    population: "Populasyon",
    populationVal: "Gibana-bana nga 798 ka lumulupyo",
    livelihood: "Pangunang Pangabuhian",
    livelihoodVal: "Panguma ug Paghablon sa Dahon",
    sitiosTitle: "Mga Sitio",
    sitiosSubtitle: "Ang upat ka nagkalain-laing dapit sa Barangay Anao",
    vision: "Panglantaw (Vision)",
    visionText: "Usa ka panggamhanan sa barangay nga madasigon sa kausaban sa katilingban, pagpanalipod sa kalikopan, ug pagpreserbar sa kultura samtang nagpalambo sa kaayohan sa mga tawo.",
    mission: "Tahas (Mission)",
    missionText: "Sa paghatag og nindot nga serbisyo publiko sa katawhan ug pagpalambo sa kahimtang sa kinabuhi sa mga residente, ilabi na ang mga mag-uuma, kababayen-an, ug kabataan.",
    history: "Mubo nga Kasaysayan sa Anao",
    historyText1: "Naggikan ang Barangay Anao sa pulong 'Anahaw', usa ka lig-on nga dahon sa palmera nga abunda kaayo niining dapita kaniadto. Sa paglabay sa panahon, ang paglitok niini nahimong 'Anao'.",
    historyText2: "Nahimutang sa ibabaw nga bahin sa bukid sa Ginatilan, Sugbo, kining nindot nga barangay nagsilbing ehemplo sa malungtarong pagmando diin ang kalambuan sa katilingban ug pagpanalipod sa kalikopan nagkahiusa ug nag-uban.",
    adminTitle: "Panggamhanan sa Barangay",
    adminSubtitle: "Madasigon nga mga opisyal nga naggiya sa Anao ngadto sa malungtaron ug mabulokong ugma",
    secretary: "Barangay Sekretarya",
    treasurer: "Barangay Tesorera",
    spotsHeader: "Mga Nindot Suroy-suroyan",
    spotsSub: "Suhira ang nindot nga kabukiran ug mga kulturang lokal sa Anao",
    contactTitle: "Kontak ug Pag-access",
    contactSub: "Kontaka kami o bisitaha ang among Barangay Hall sa bisan unsang seryosong tuyo",
    address: "Adres sa Opisina",
    addressVal: "Barangay Hall sa Anao, Sitio Bag-ong Lungsod, Barangay Anao, Ginatilan, Sugbo, 6028, Pilipinas",
    phone: "Telepono sa Munisipyo",
    email: "Email sa Munisipyo",
    latestNews: "Kabag-ohan ug Balita sa Komunidad",
    readMore: "Tan-awa ang Detalye",
    close: "Isira",
    contactForm: "Metodo sa Pagpadalag Inkwiri",
    senderName: "Tibuok Ngalan",
    senderEmail: "Adres sa Email",
    senderInquiry: "Mensahe o Pangutana",
    submit: "Ipadala ang Mensahe",
    successMsg: "Salamat! Nadawat na sa Sekretarya sa Barangay ang imong mensahe.",
    backToTop: "Balik sa Ibabaw sa Panid",
    traditionTitle: "Lokal nga Kabilin",
    traditionSub: "PAGPRESERBAR SA KULTURA • PAG-ANI SA KINABUHI",
    langSelect: "Pilia ang Pinulongan",
    allRightsReserved: "Kagamhanan sa Barangay Anao. Gihulma gikan sa Jinja Honcho."
  }
};
