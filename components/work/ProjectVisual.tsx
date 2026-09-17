import Image from "next/image";
import { ContainerBackdrop, IndiaBackdrop, TempleBackdrop } from "./Backdrops";
import PhoneFrame from "./mockups/PhoneFrame";
import { IcdDashboard, ShastriJiScreen, YojanaAIScreen } from "./mockups/Screens";

type Props = {
  slug: string;
  title: string;
  annotation: string[];
  image?: string;
};

function Backdrop({ slug }: { slug: string }) {
  const className = "absolute inset-0 h-full w-full text-ink";
  if (slug === "shastriji") return <TempleBackdrop className={className} />;
  if (slug === "yojanaai") return <IndiaBackdrop className={className} />;
  return <ContainerBackdrop className={className} />;
}

function Device({ slug }: { slug: string }) {
  if (slug === "shastriji")
    return (
      <PhoneFrame>
        <ShastriJiScreen />
      </PhoneFrame>
    );
  if (slug === "yojanaai")
    return (
      <PhoneFrame>
        <YojanaAIScreen />
      </PhoneFrame>
    );
  return (
    <div className="h-[228px] w-full max-w-[264px]">
      <IcdDashboard />
    </div>
  );
}

export default function ProjectVisual({ slug, title, annotation, image }: Props) {
  const [lead, ...rest] = annotation;
  const leadIsMetric = lead.includes("%");

  return (
    <div className="relative mt-6 flex min-h-[248px] flex-1 items-end justify-center overflow-hidden border-t border-hair bg-paper-2/50 px-4 pb-5 pt-9">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.18]">
        <Backdrop slug={slug} />
      </div>

      {/* The metric annotation needs clear paper beside the dashboard. */}
      <div
        className={`relative z-10 flex w-full ${leadIsMetric ? "justify-start pl-1" : "justify-center"}`}
      >
        {image ? (
          <Image
            src={image}
            alt={`${title} product interface`}
            width={420}
            height={760}
            loading="lazy"
            className="h-auto w-full max-w-[200px] border border-ink/25 shadow-[0_3px_18px_rgba(23,26,26,0.12)]"
          />
        ) : (
          <Device slug={slug} />
        )}
      </div>

      <div className="absolute bottom-4 right-4 z-20 text-right">
        {leadIsMetric ? (
          <>
            <span className="block font-display text-2xl font-extrabold leading-none tracking-display text-copper">
              {lead}
            </span>
            {rest.map((line) => (
              <span key={line} className="mono-micro block leading-[1.5] text-ink-2">
                {line}
              </span>
            ))}
          </>
        ) : (
          annotation.map((line) => (
            <span key={line} className="mono-micro block leading-[1.5]">
              {line}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
