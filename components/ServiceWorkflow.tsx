import type { Service } from "@/lib/services";

type ServiceWorkflowProps = {
  services: Service[];
  onSelect: (service: Service) => void;
};

export default function ServiceWorkflow({
  services,
  onSelect,
}: ServiceWorkflowProps) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute bottom-10 left-7 top-10 hidden w-px bg-[#3dbe42]/70 sm:block" />

      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="relative grid gap-4 sm:grid-cols-[3.5rem_1fr] sm:gap-8"
          >
            <div className="relative hidden min-h-[104px] self-start items-center justify-center sm:flex">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#3dbe42] bg-black text-lg font-semibold text-white shadow-[0_0_24px_rgba(61,190,66,0.22)]">
                {index + 1}
              </span>
            </div>

            <div>
              <article
                role="button"
                tabIndex={0}
                aria-label={`Open ${service.title} details`}
                onClick={() => onSelect(service)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    onSelect(service);
                    event.preventDefault();
                  }
                }}
                className="group flex min-h-[104px] cursor-pointer items-center gap-5 rounded-lg border border-white/10 bg-neutral-950 px-6 py-6 text-left shadow-xl shadow-black/30 transition-all duration-200 hover:border-[#3dbe42] hover:bg-[#3dbe42] focus:outline-none focus:ring-2 focus:ring-[#3dbe42]/40 sm:px-8"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#3dbe42] bg-black text-sm font-semibold text-white sm:hidden">
                  {index + 1}
                </span>

                <span className="text-2xl font-medium transition-colors duration-200 group-hover:text-black">
                  {service.title}
                </span>
              </article>

              {index < services.length - 1 && (
                <div
                  aria-hidden="true"
                  className="flex h-8 items-center justify-center text-[#3dbe42]"
                >
                  <span className="h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#3dbe42]" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
