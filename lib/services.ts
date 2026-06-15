export type ServiceBullet = {
  heading: string;
  text?: string;
};

export type ServiceDetails = {
  intro: string;
  bullets: ServiceBullet[];
};

export type Service = {
  title: string;
  details: ServiceDetails;
  image?: string;
  description?: string;
};

const services: Service[] = [
  {
    title: "Requirements Definition",
    details: {
      intro:
        "Establish clear, measurable system requirements that define what is being built, how it will operate, and how success will be evaluated. Strong requirements at this stage improve downstream design decisions, reducing the risk of project delays and costly redesigns.",
      bullets: [
        {
          heading: "Operational Scope",
          text: "Outline product use cases and operating environments",
        },
        {
          heading: "Technical Specifications",
          text: "Detail system-level requirements and electrical specifications",
        },
        {
          heading: "Design Limitations",
          text: "Define physical, power, cost, and manufacturing constraints",
        },
        {
          heading: "Acceptance Criteria",
          text: "Set performance targets with measurable success metrics",
        },
      ],
    },
  },
  {
    title: "System Architecture",
    details: {
      intro:
        "Translate system requirements into a high-level architecture that identifies major hardware blocks and defines how they are organized and communicate within the system.",
      bullets: [
        {
          heading: "Block Diagram",
          text: "Develop a system block diagram and group functional blocks into subsystems",
        },
        {
          heading: "Power Architecture",
          text: "Define high-level power tree, power regulation topologies and consumption estimates",
        },
        {
          heading: "Interconnect Strategy",
          text: "Define system interfaces including connectors, communication protocols, and board-to-board interconnects",
        },
        {
          heading: "Form Factor",
          text: "Plan board shape, size, number of boards (e.g. single vs. multi-board designs)",
        },
      ],
    },
  },
  {
    title: "Component Selection",
    details: {
      intro:
        "Once the architecture is defined, I refine the design through detailed component selection and trade-off analysis.",
      bullets: [
        {
          heading: "Technology research and trade-off evaluation",
          text: "compare available approaches against performance, schedule, cost, and risk.",
        },
        {
          heading:
            "Selection of key ICs based on performance, cost, availability, and lifecycle",
          text: "choose components that fit the design goals and are practical to source.",
        },
        {
          heading: "Interface selection and compatibility checks across system blocks",
          text: "confirm voltage levels, timing, protocols, and integration assumptions early.",
        },
        {
          heading: "Power budget review and optimization",
          text: "estimate consumption and refine the power architecture before schematic capture.",
        },
      ],
    },
  },
  {
    title: "Schematic Design",
    details: {
      intro:
        "I perform full schematic design and capture using Altium Designer. Where applicable, I use circuit-level SPICE simulation to validate key circuit stages prior to implementation.",
      bullets: [
        {
          heading: "Component symbol and footprint definition",
          text: "create or verify library parts so schematic and layout data stay aligned.",
        },
        {
          heading: "Complete circuit implementation based on system architecture",
          text: "translate the architecture into detailed, reviewable electrical design.",
        },
        {
          heading: "Power, digital, and mixed-signal circuit integration",
          text: "connect regulators, processors, sensors, and analog stages with system behavior in mind.",
        },
        {
          heading: "Interface and subsystem connectivity design",
          text: "define signal paths, protection, connectors, and configuration details.",
        },
        {
          heading: "Pre-layout design review and verification",
          text: "catch electrical and integration issues before they become board-level problems.",
        },
      ],
    },
  },
  {
    title: "PCB Layout",
    details: {
      intro:
        "With the schematic completed and approved, PCB layout begins. This is performed for low to moderate complexity designs, typically up to about 6-layer boards.",
      bullets: [
        {
          heading:
            "Collaboration with mechanical teams to define board outlines, enclosure constraints, connector placement, and mounting requirements",
          text: "align the PCB with the physical product before placement begins.",
        },
        {
          heading: "Board floorplanning and stack-up definition",
          text: "organize components, layers, and routing strategy around power and signal needs.",
        },
        {
          heading:
            "Constraint-driven layout for manufacturability and reliable assembly",
          text: "apply rules that support fabrication, assembly, and long-term reliability.",
        },
        {
          heading:
            "Signal and power-aware layout practices to support system performance requirements",
          text: "route critical nets, returns, and power distribution with measurement goals in mind.",
        },
        {
          heading:
            "PCB manufacturer and assembly constraint review before fabrication",
          text: "check the finished layout against supplier capabilities before release.",
        },
      ],
    },
  },
  {
    title: "Firmware Development",
    details: {
      intro:
        "I develop firmware needed to exercise, validate, and support the hardware design through prototype development.",
      bullets: [
        {
          heading: "Low-level driver development for selected components",
          text: "bring up the basic software needed to talk to key devices on the board.",
        },
        {
          heading: "Peripheral configuration and interface validation",
          text: "exercise buses, pins, timers, ADCs, PWMs, and communication links.",
        },
        {
          heading:
            "Board test routines for sensors, power rails, and communication links",
          text: "create firmware hooks that make hardware behavior visible during testing.",
        },
        {
          heading: "Prototype firmware to support bring-up and early system testing",
          text: "provide enough functionality to evaluate the board as a system.",
        },
      ],
    },
  },
  {
    title: "Bring-Up & Debug",
    details: {
      intro:
        "After prototype boards are assembled, I support first power-on, measurement, and issue resolution.",
      bullets: [
        {
          heading: "Initial power-up checks and current-limit validation",
          text: "power the board carefully while watching for shorts, excess current, and rail issues.",
        },
        {
          heading: "Power rail, clock, reset, and boot-sequence verification",
          text: "confirm the fundamentals needed before deeper firmware and interface testing.",
        },
        {
          heading:
            "Interface probing with oscilloscopes, logic analyzers, and test firmware",
          text: "measure real signals and compare behavior against design intent.",
        },
        {
          heading: "Hardware issue isolation and corrective action recommendations",
          text: "separate assembly, layout, component, and firmware causes so fixes are targeted.",
        },
      ],
    },
  },
  {
    title: "System Test & Validation",
    details: {
      intro:
        "I validate the assembled system against its requirements and expected operating conditions.",
      bullets: [
        {
          heading: "Functional test planning based on defined acceptance criteria",
          text: "turn requirements into practical tests that confirm the prototype is meeting goals.",
        },
        {
          heading: "Electrical and firmware behavior validation",
          text: "verify that measured hardware behavior and embedded software work together.",
        },
        {
          heading: "Environmental and operating-condition checks where applicable",
          text: "exercise the design across relevant supply, load, temperature, and usage conditions.",
        },
        {
          heading: "Test result documentation and revision recommendations",
          text: "capture findings clearly so the next revision or pilot build has direction.",
        },
      ],
    },
  },
];

export default services;
