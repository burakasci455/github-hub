import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";

export type ArtworkCategory = "portre" | "naturmort" | "figur";

export type Artwork = {
  slug: string;
  title: string;
  year: string;
  category: ArtworkCategory;
  description: string;
  image: string;
  aspect: "tall" | "wide" | "square";
};

export const artworks: Artwork[] = [
  {
    slug: "sukunet",
    title: "Sükûnet",
    year: "2024",
    category: "portre",
    description: "Karakalem, 30×40 cm. Cream paper üzerine.",
    image: art1,
    aspect: "tall",
  },
  {
    slug: "uc-armut",
    title: "Üç Armut",
    year: "2024",
    category: "naturmort",
    description: "Karakalem, 40×30 cm. Form ve ışık etüdü.",
    image: art2,
    aspect: "wide",
  },
  {
    slug: "zamanin-izleri",
    title: "Zamanın İzleri",
    year: "2023",
    category: "portre",
    description: "Karakalem, 35×50 cm. Yaş ve doku çalışması.",
    image: art3,
    aspect: "tall",
  },
  {
    slug: "drapaj",
    title: "Drapaj",
    year: "2023",
    category: "figur",
    description: "Karakalem, 30×40 cm. Klasik kumaş etüdü.",
    image: art4,
    aspect: "tall",
  },
  {
    slug: "gul",
    title: "Gül",
    year: "2024",
    category: "naturmort",
    description: "Karakalem, 25×25 cm. Botanik çalışma.",
    image: art5,
    aspect: "square",
  },
  {
    slug: "merak",
    title: "Merak",
    year: "2024",
    category: "portre",
    description: "Karakalem, 30×40 cm. Çocuk portresi.",
    image: art6,
    aspect: "tall",
  },
];

export const ETSY_URL = "#";
export const INSTAGRAM_URL = "https://instagram.com/ahmetfarukart";
