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
        "This stage defines the foundation of the entire project. Clear, well-structured requirements significantly reduce iteration cycles and downstream redesign effort.",
      bullets: [
        { heading: "Product use cases and operating environment" },
        { heading: "End-user and system-level expectations" },
        { heading: "Electrical performance specifications" },
        {
          heading:
            "Design constraints, including mechanical, power, cost, and manufacturing considerations",
        },
        { heading: "Performance targets including measurable acceptance criteria" },
      ],
    },
  },
  {
    title: "System Architecture",
    details: {
      intro:
        "With requirements defined, I develop a high-level system architecture that models the product's hardware structure.",
      bullets: [
        { heading: "System block diagram definition" },
        { heading: "Partitioning of subsystems and functional blocks" },
        { heading: "Microcontroller/System-on-Chip selection considerations" },
        { heading: "Interface planning" },
      ],
    },
  },
  {
    title: "Component Selection",
    details: {
      intro:
        "Once the architecture is defined, I refine the design through detailed component selection and trade-off analysis.",
      bullets: [
        { heading: "Technology research and trade-off evaluation" },
        {
          heading:
            "Selection of key ICs based on performance, cost, availability, and lifecycle",
        },
        { heading: "Interface selection and compatibility checks across system blocks" },
        { heading: "Power budget review and optimization" },
      ],
    },
  },
  {
    title: "Schematic Design",
    details: {
      intro:
        "I perform full schematic design and capture using Altium Designer. Where applicable, I use circuit-level SPICE simulation to validate key circuit stages prior to implementation.",
      bullets: [
        { heading: "Component symbol and footprint definition" },
        { heading: "Complete circuit implementation based on system architecture" },
        { heading: "Power, digital, and mixed-signal circuit integration" },
        { heading: "Interface and subsystem connectivity design" },
        { heading: "Pre-layout design review and verification" },
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
        },
        { heading: "Board floorplanning and stack-up definition" },
        {
          heading:
            "Constraint-driven layout for manufacturability and reliable assembly",
        },
        {
          heading:
            "Signal and power-aware layout practices to support system performance requirements",
        },
        {
          heading:
            "PCB manufacturer and assembly constraint review before fabrication",
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
        { heading: "Low-level driver development for selected components" },
        { heading: "Peripheral configuration and interface validation" },
        {
          heading:
            "Board test routines for sensors, power rails, and communication links",
        },
        { heading: "Prototype firmware to support bring-up and early system testing" },
      ],
    },
  },
  {
    title: "Bring-Up & Debug",
    details: {
      intro:
        "After prototype boards are assembled, I support first power-on, measurement, and issue resolution.",
      bullets: [
        { heading: "Initial power-up checks and current-limit validation" },
        { heading: "Power rail, clock, reset, and boot-sequence verification" },
        {
          heading:
            "Interface probing with oscilloscopes, logic analyzers, and test firmware",
        },
        { heading: "Hardware issue isolation and corrective action recommendations" },
      ],
    },
  },
  {
    title: "System Test & Validation",
    details: {
      intro:
        "I validate the assembled system against its requirements and expected operating conditions.",
      bullets: [
        { heading: "Functional test planning based on defined acceptance criteria" },
        { heading: "Electrical and firmware behavior validation" },
        { heading: "Environmental and operating-condition checks where applicable" },
        { heading: "Test result documentation and revision recommendations" },
      ],
    },
  },
];

export default services;
