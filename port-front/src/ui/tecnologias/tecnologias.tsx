import Image from "next/image";

export default function Tecs() {
  return (
    <>
      <section className="flex flex-col w-screen overflow-hidden">
        <h3 className="sm:block text-center text-3xl mt-12">
          Las Tecnologías que manejo
        </h3>

      <div className="flex flex-wrap space-x-5 mt-3 justify-evenly">
      <a href="https://nestjs.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="icons-tecs/devicon--nestjs.svg"
            alt="NestJS"
            className="hover:scale-125 transition-all"
              width={70}
              height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="icons-tecs/devicon--typescript.svg"
            alt="TypeScript"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="icons-tecs/logos--javascript.svg"
            alt="JavaScript"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
          <Image
            src="icons-tecs/logos--nodejs-icon.svg"
            alt="NodeJS"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <Image
            src="icons-tecs/logos--react.svg"
            alt="React"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a href="https://typeorm.io/" target="_blank" rel="noopener noreferrer">
          <Image
            src="icons-tecs/logos--typeorm.svg"
            alt="TypeORM"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="icons-tecs/skill-icons--docker.svg"
            alt="Docker"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="icons-tecs/skill-icons--mongodb.svg"
            alt="MongoDB"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a
          href="https://www.postgresql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="icons-tecs/skill-icons--postgresql-dark.svg"
            alt="PostgreSQL"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="icons-tecs/vscode-icons--file-type-html.svg"
            alt="HTML"
            className="hover:scale-125 transition-all"
            width={70}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </a>
      </div>

      </section>
    </>
  );
}
