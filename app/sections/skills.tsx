import Image from "next/image";
import { makeBadge, ValidationError } from "badge-maker";

export default function Skills() {
  const format = {
    label: "build",
    message: "passed",
    color: "green",
  };
  return (
    <div className="skills-section">
      <summary>
        <b>🛠️ Skills</b>
      </summary>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <img
          alt="Javascript"
          src="https://img.shields.io/static/v1?label=&message=React&color=33302E&logo=react&logoColor=61DAFB"
        />
        <img
          alt="HTML"
          src="https://img.shields.io/static/v1?label=&message=HTML&color=33302E&logo=html5&logoColor=orange"
        />
        <img
          alt="Javascript"
          src="https://img.shields.io/static/v1?label=&message=Node.js&color=33302E&logo=node.js&logoColor=339933"
        />
        <img
          alt="TypeScript"
          src="https://img.shields.io/static/v1?label=&message=TypeScript&color=33302E&logo=typescript&logoColor=3178C6"
        />
      </div>
    </div>
  );
}
