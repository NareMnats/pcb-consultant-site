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
        "Evaluate technologies and identify critical components (e.g. microcontrollers, sensors) which align with product functional and performance requirements. Once part selections are made, the system block diagram can be refined.",
      bullets: [
        {
          heading: "Trade-Off Analyses",
          text: "Select components balancing electrical performance, power consumption, cost, and availability at major distributors (e.g. Digikey, Mouser)",
        },
        {
          heading: "Interface Compatibility",
          text: "Validate that the selected parts can communicate with one another including protocols and logic-level alignment",
        },
        {
          heading: "Power Analysis",
          text: "Finalize power tree and use component datasheets to calculate current consumption per voltage rail and total power consumption",
        },
        {
          heading: "CAD Library & Part Integration",
          text: "Ensure all selected components are implementation-ready with validated symbols, footprints, pin mapping and 3D models",
        },
      ],
    },
  },
  {
    title: "Schematic Design",
    details: {
      intro:
        "Translate validated system architecture into complete electrical implementation. Schematic design is performed in Altium Designer.",
      bullets: [
        {
          heading: "Circuit Design",
          text: "Develop power, digital, analog, and mixed-signal circuits, interface implementation and component sizing",
        },
        {
          heading: "Analysis & Simulation",
          text: "Perform SPICE simulation and engineering analysis of critical circuits to validate performance and reduce design risk",
        },
        {
          heading: "Schematic Capture",
          text: "Create schematics in Altium Designer, implementing designed circuit blocks with selected components",
        },
        {
          heading: "Design Review & Verification",
          text: "Run Electrical Rules Checks (ERCs), connectivity verification, and schematic reviews to identify issues prior to PCB layout",
        },
      ],
    },
  },
  {
    title: "PCB Layout",
    details: {
      intro:
        "Convert validated schematics into a physical, manufacturable printed circuit board layout. PCB layout is performed in Altium Designer.",
      bullets: [
        {
          heading: "Board Floorplanning",
          text: "Define board stack-up, board outline, component placement strategy based on functional partitioning and mechanical drawings (connectors, mounting)",
        },
        {
          heading: "Board Layout",
          text: "Route signals (copper tracks/planes) optimizing design for manufacturability to meet fabrication and assembly capabilities of the selected PCB manufacturer",
        },
        {
          heading: "Design Review",
          text: "Run Design Rules Checks (DRCs), connectivity verification, and final review of component placement and routing prior to release",
        },
        {
          heading: "Production Release",
          text: "Generate and review fabrication/assembly outputs (Gerbers, drill files, BOM, pick-and-place, STEP models) and provide support during fabrication and initial build",
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
