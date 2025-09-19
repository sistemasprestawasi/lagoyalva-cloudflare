export interface Project {
  id: string;
  name: string;
  client: string;
  category: string;
  status: string;
  description: string;
  logo: string;
  rating: number;
  location: string;
  benefits: string[];
  contact: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Parque Real",
    client: "LagoyAlva",
    category: "Terrenos",
    status: "Disponible",
    description:
      "Lotes con título de propiedad independizados en Carabayllo. Obras culminadas y facilidades de financiamiento con bonos y descuentos especiales.",
    logo: "https://res.cloudinary.com/dohuz9aym/image/upload/v1756998001/parque_bjvcpw.png",
    rating: 5,
    location: "Carabayllo, Lima",
    benefits: [
      "Lotes independizados con título de propiedad",
      "Obras culminadas",
      "Financiamiento directo 15 a 35 años",
      "Cuotas desde S/. 550",
      "Bonos y descuentos hasta S/. 10,000",
    ],
    contact: "Consulta con el asesor que compartió la información",
    images: [
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445560/PARQUE_REAL_BROCHURE_page-0001_huzqdg.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445615/PARQUE_REAL_BROCHURE_page-0002_epb0iq.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445671/PARQUE_REAL_BROCHURE_page-0003_gqgzox.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445702/PARQUE_REAL_BROCHURE_page-0004_awz6ec.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445726/PARQUE_REAL_BROCHURE_page-0005_zwdl78.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445748/PARQUE_REAL_BROCHURE_page-0006_vdezmx.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445776/PARQUE_REAL_BROCHURE_page-0007_vfhpvq.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445797/PARQUE_REAL_BROCHURE_page-0008_ru0xld.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757445817/PARQUE_REAL_BROCHURE_page-0009_sg86uz.jpg",
    ],
  },
  {
    id: "2",
    name: "CIUDAD DE DIOS",
    client: "LagoyAlva",
    category: "Residencial",
    status: "Disponible",
    contact: "vvdvf",
    location: "fsddfsdg",
    benefits: [
      "Lotes independizados con título de propiedad",
      "Obras culminadas",
      "Financiamiento directo 15 a 35 años",
      "Cuotas desde S/. 550",
      "Bonos y descuentos hasta S/. 10,000",
    ],

    description:
      "Proyecto residencial ubicado en la IV Etapa Polifap, Chiclayo. Departamentos con distribución simétrica, áreas sociales amplias y dúplex con espacios funcionales. Entrega inmediata.",
    logo: "https://res.cloudinary.com/dohuz9aym/image/upload/v1756941171/aliado-4_uekdee.png",

    rating: 4,
    images: [
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757446075/BROCHURE_CIUDAD_DE_DIOS_2025_page-0001_emi6c7.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757446103/BROCHURE_CIUDAD_DE_DIOS_2025_page-0002_qgpzqv.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757446125/BROCHURE_CIUDAD_DE_DIOS_2025_page-0003_tgffjo.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757446161/BROCHURE_CIUDAD_DE_DIOS_2025_page-0004_wldj4x.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757446187/BROCHURE_CIUDAD_DE_DIOS_2025_page-0005_zj9g0c.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757446187/BROCHURE_CIUDAD_DE_DIOS_2025_page-0005_zj9g0c.jpg",
      "https://res.cloudinary.com/dohuz9aym/image/upload/v1757446233/BROCHURE_CIUDAD_DE_DIOS_2025_page-0007_tb6dfj.jpg",
    ],
  },
];
