import type { Service } from "@/lib/services";

type ServiceWorkflowProps = {
  services: Service[];
  onSelect: (service: Service) => void;
};

export default function ServiceWorkflow({
  services,
  onSelect,
}: ServiceWorkflowProps) {
  const placeholderText =
    "Brief supporting text for this service block will go here.";

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute bottom-[78px] left-7 top-[78px] hidden w-px bg-[#3dbe42]/70 sm:block" />

      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="relative grid gap-4 sm:grid-cols-[3.5rem_1fr] sm:gap-8"
          >
            <div className="relative hidden min-h-[156px] self-start items-center justify-center sm:flex">
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
                className="group grid min-h-[156px] cursor-pointer grid-cols-[auto_1fr] items-stretch overflow-hidden rounded-lg border border-white/10 bg-neutral-950 text-left shadow-xl shadow-black/30 transition-all duration-200 hover:border-[#3dbe42] hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#3dbe42]/40 sm:grid-cols-[minmax(8rem,15rem)_1fr]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#3dbe42] bg-black text-sm font-semibold text-white sm:hidden">
                  {index + 1}
                </span>

                <div
                  aria-hidden="true"
                  className="hidden bg-[radial-gradient(circle_at_center,rgba(61,190,66,0.12),transparent_62%)] sm:block"
                />

                <div className="flex flex-col justify-center border-white/10 px-6 py-6 sm:border-l sm:px-10">
                  <h4 className="text-2xl font-medium text-white">
                    {service.title}
                  </h4>

                  <p className="mt-4 max-w-md text-sm leading-6 text-neutral-400">
                    {placeholderText}
                  </p>
                </div>
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
