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
      <div className="space-y-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="relative"
          >
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
                className="group grid min-h-[112px] cursor-pointer grid-cols-1 items-stretch overflow-hidden rounded-lg border border-white/10 bg-neutral-950 text-left shadow-xl shadow-black/30 transition-all duration-200 hover:border-[#3dbe42] hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#3dbe42]/40 sm:mx-auto sm:min-h-[156px] sm:w-fit sm:grid-cols-[minmax(8rem,15rem)_minmax(0,max-content)] sm:justify-start"
              >
                <div
                  aria-hidden="true"
                  className="hidden bg-[radial-gradient(circle_at_center,rgba(61,190,66,0.12),transparent_62%)] sm:block"
                />

                <div className="flex flex-col justify-center border-white/10 px-5 py-5 sm:border-l sm:px-10 sm:py-6">
                  <h4 className="text-xl font-medium text-white sm:text-2xl">
                    {service.title}
                  </h4>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-400 sm:mt-4">
                    {service.summary}
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
