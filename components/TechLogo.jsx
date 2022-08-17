import {
  SiNetlify,
  SiVercel,
  SiNextdotjs,
  SiSupabase,
  SiPostgresql,
  SiTailwindcss,
  SiReact,
  SiMaterialui,
} from "react-icons/si";

function TechLogo({ name }) {
  if (name === "next") return <SiNextdotjs size={30} />;
  if (name === "vercel") return <SiVercel size={30} />;
  if (name === "supabse") return <SiSupabase size={30} />;
  if (name === "netlify") return <SiNetlify size={30} />;
  if (name === "postgresql") return <SiPostgresql size={30} />;
  if (name === "tailwind") return <SiTailwindcss size={30} />;
  if (name === "react") return <SiReact size={30} />;
  if (name === "materialui") return <SiMaterialui size={30} />;
  return <span>{name}</span>;
}

export default TechLogo;
