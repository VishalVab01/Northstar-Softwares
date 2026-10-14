import Image from "next/image";

const tools = [
  { name: "Wix Studio", src: "/tech/wix-studio.webp", width: 720, height: 120 },
  { name: "Notion", src: "/tech/notion.webp", width: 348, height: 120 },
  { name: "Figma", src: "/tech/figma.webp", width: 433, height: 120 },
  { name: "Adobe", src: "/tech/adobe.webp", width: 455, height: 120 },
  { name: "Claude", src: "/tech/claude.svg", width: 573, height: 125 },
  { name: "Framer", src: "/tech/framer.svg", width: 201, height: 54 },
  { name: "Blender", src: "/tech/blender.webp", width: 447, height: 120 },
  { name: "Google Analytics", src: "/tech/analytics.webp", width: 489, height: 120 },
];

export default function ToolStrip() {
  return (
    <section className="tool-strip" aria-label="Illustrative tools and platforms">
      <div className="tool-logos">
        {tools.map((tool) => (
          <div className="tool-logo" key={tool.name}>
            <Image
              src={tool.src}
              alt={tool.name}
              width={tool.width}
              height={tool.height}
              sizes="(max-width: 700px) 38vw, (max-width: 1100px) 20vw, 14vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
