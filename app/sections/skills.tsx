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
      <summary className="mb-5">
        <b>🛠️ Skills</b>
      </summary>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <img
          alt="Javascript"
          src="https://img.shields.io/static/v1?label=&message=JavaScript&color=33302E&logo=javascript&logoColor=F7DF1E"
        />
        <img
          alt="HTML"
          src="https://img.shields.io/static/v1?label=&message=HTML&color=33302E&logo=html5&logoColor=orange"
        />
        <img
          alt="CSS"
          src="https://img.shields.io/static/v1?label=&message=CSS&color=33302E&logo=css3&logoColor=blue"
        />
        <img
          alt="TypeScript"
          src="https://img.shields.io/static/v1?label=&message=TypeScript&color=33302E&logo=typescript&logoColor=3178C6"
        />
        <img
          alt="React"
          src="https://img.shields.io/static/v1?label=&message=React&color=33302E&logo=react&logoColor=61DAFB"
        />
        <img
          alt="Angular"
          src="https://img.shields.io/static/v1?label=&message=Angular&color=33302E&logo=angular&logoColor=DD0031"
        />
        <img
          alt="Java"
          src="https://img.shields.io/static/v1?label=&message=Java&color=33302E&logo=java&logoColor=007396"
        />
        <img
          alt="Spring"
          src="https://img.shields.io/static/v1?label=&message=Spring&color=33302E&logo=spring&logoColor=6DB33F"
        />
        <img
          alt="Node"
          src="https://img.shields.io/static/v1?label=&message=Node.js&color=33302E&logo=node.js&logoColor=339933"
        />
        <img
          alt="Express"
          src="https://img.shields.io/static/v1?label=&message=Express&color=33302E&logo=express&logoColor=black"
        />
        <img
          alt="Tailwind"
          src="https://img.shields.io/static/v1?label=&message=Tailwind&color=33302E&logo=tailwindcss&logoColor=38B2AC"
        />
        {/* sass */}
        <img
          alt="SASS"
          src="https://img.shields.io/static/v1?label=&message=SASS&color=33302E&logo=sass&logoColor=CC6699"
        />
        {/* less */}
        <img
          alt="LESS"
          src="https://img.shields.io/static/v1?label=&message=LESS&color=33302E&logo=less&logoColor=blue"
        />
        {/* markdown */}
        <img
          alt="Markdown"
          src="https://img.shields.io/static/v1?label=&message=Markdown&color=33302E&logo=markdown&logoColor=white"
        />
        {/* Swift */}
        <img
          alt="Swift"
          src="https://img.shields.io/static/v1?label=&message=Swift&color=33302E&logo=swift&logoColor=white" />
        {/* Android */}
        <img
          alt="Android"
          src="https://img.shields.io/static/v1?label=&message=Android&color=33302E&logo=android&logoColor=white"/>
        {/* Firebase */}
        <img
          alt="Firebase"
          src="https://img.shields.io/static/v1?label=&message=Firebase&color=33302E&logo=firebase&logoColor=FFCA28"/>
        {/* MongoDB */}
        <img
          alt="MongoDB"
          src="https://img.shields.io/static/v1?label=&message=MongoDB&color=33302E&logo=mongodb&logoColor=47A248"/>
        {/* MySQL */}
        <img
          alt="MySQL"
          src="https://img.shields.io/static/v1?label=&message=MySQL&color=33302E&logo=mysql&logoColor=white"/>
        {/* PostgreSQL */}
        <img
          alt="PostgreSQL"
          src="https://img.shields.io/static/v1?label=&message=PostgreSQL&color=33302E&logo=postgresql&logoColor=white"/>
        {/* Git */}
        <img
          alt="Git"
          src="https://img.shields.io/static/v1?label=&message=Git&color=33302E&logo=git&logoColor=F05032"/>
        {/* GitHub */}
        <img
          alt="GitHub"
          src="https://img.shields.io/static/v1?label=&message=GitHub&color=33302E&logo=github&logoColor=white"/>
        {/* JSON */}
        <img
          alt="JSON"
          src="https://img.shields.io/static/v1?label=&message=JSON&color=33302E&logo=json&logoColor=white"/>
        {/* XML */}
        <img
          alt="XML"
          src="https://img.shields.io/static/v1?label=&message=XML&color=33302E&logo=xml&logoColor=white"/>
        {/* YAML */}
        <img
          alt="YAML"
          src="https://img.shields.io/static/v1?label=&message=YAML&color=33302E&logo=yaml&logoColor=white"/>
        {/* Docker */}
        <img
          alt="Docker"
          src="https://img.shields.io/static/v1?label=&message=Docker&color=33302E&logo=docker&logoColor=2496ED"/>
        {/* Kubernetes */}
        <img
          alt="Kubernetes"
          src="https://img.shields.io/static/v1?label=&message=Kubernetes&color=33302E&logo=kubernetes&logoColor=white"/>
        {/* AWS */}
        <img
          alt="AWS"
          src="https://img.shields.io/static/v1?label=&message=AWS&color=33302E&logo=amazon-aws&logoColor=white"/>
        {/* Azure */}
        <img
          alt="Azure"
          src="https://img.shields.io/static/v1?label=&message=Azure&color=33302E&logo=microsoft-azure&logoColor=white"/>
        {/* Google Cloud */}
        <img
          alt="Google Cloud"
          src="https://img.shields.io/static/v1?label=&message=Google%20Cloud&color=33302E&logo=google-cloud&logoColor=white"/>
        {/* Heroku */}
        <img
          alt="Heroku"
          src="https://img.shields.io/static/v1?label=&message=Heroku&color=33302E&logo=heroku&logoColor=430098"/>
        {/* Netlify */}
        <img
          alt="Netlify"
          src="https://img.shields.io/static/v1?label=&message=Netlify&color=33302E&logo=netlify&logoColor=00C7B7"/>
        {/* Vercel */}
        <img
          alt="Vercel"
          src="https://img.shields.io/static/v1?label=&message=Vercel&color=33302E&logo=vercel&logoColor=black"/>
        {/* NPM */}
        <img
          alt="NPM"
          src="https://img.shields.io/static/v1?label=&message=NPM&color=33302E&logo=npm&logoColor=red"/>
        {/* Yarn */}
        <img
          alt="Yarn"
          src="https://img.shields.io/static/v1?label=&message=Yarn&color=33302E&logo=yarn&logoColor=white"/>
        {/* Webpack */}
        <img
          alt="Webpack"
          src="https://img.shields.io/static/v1?label=&message=Webpack&color=33302E&logo=webpack&logoColor=8DD6F9"/>
        {/* Babel */}
        <img
          alt="Babel"
          src="https://img.shields.io/static/v1?label=&message=Babel&color=33302E&logo=babel&logoColor=F9DC3E"/>
        {/* ESLint */}
        <img
          alt="ESLint"
          src="https://img.shields.io/static/v1?label=&message=ESLint&color=33302E&logo=eslint&logoColor=white"/>
        {/* Prettier */}
        <img
          alt="Prettier"
          src="https://img.shields.io/static/v1?label=&message=Prettier&color=33302E&logo=prettier&logoColor=F7B93E"/>
        {/* Jest */}
        <img
          alt="Jest"
          src="https://img.shields.io/static/v1?label=&message=Jest&color=33302E&logo=jest&logoColor=C21325"/>
      </div>
    </div>
  );
}
