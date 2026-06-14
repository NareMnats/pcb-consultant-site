export type ServiceDetail = string | string[];

export type Service = {
  title: string;
  details: ServiceDetail[];
  image?: string;
  description?: string;
};

const services: Service[] = [
  {
    title: "Requirements Definition",
    details: [
      "This stage defines the foundation of the entire project. Clear, well-structured requirements significantly reduce iteration cycles and downstream redesign effort.",
      "I work with you to define:",
      [
        "Product use cases and operating environment",
        "End-user and system-level expectations",
        "Electrical performance specifications",
        "Design constraints, including mechanical, power, cost, and manufacturing considerations",
        "Performance targets including measurable acceptance criteria",
      ],
      "Strong requirements at this stage help ensure a smooth transition into architecture and implementation.",
    ],
  },
  {
    title: "System Architecture",
    details: [
      "With requirements defined, I develop a high-level system architecture that models the product’s hardware structure.",
      "This includes:",
      [
        "System block diagram definition",
        "Partitioning of subsystems and functional blocks",
        "Microcontroller/System-on-Chip selection considerations",
        "Interface planning",
      ],
      "The goal is to establish a system foundation for prototype development giving an idea of how the different pieces will connect and communicate.",
    ],
  },
  {
    title: "Component Selection",
    details: [
      "Once the architecture is defined, I refine the design through detailed component selection and trade-off analysis.",
      "This process includes:",
      [
        "Technology research and trade-off evaluation",
        "Selection of key ICs based on performance, cost, availability, and lifecycle",
        "Interface selection and compatibility checks across system blocks",
        "Power budget review and optimization",
      ],
      "This step ensures the design is technically balanced, manufacturable, and aligned with system-level requirements before schematic and PCB implementation.",
    ],
  },
  {
    title: "Schematic Design",
    details: [
      "I perform full schematic design and capture using Altium Designer. Where applicable, I use circuit-level SPICE simulation to validate key circuit stages prior to implementation.",
      "This process includes:",
      [
        "Component symbol and footprint definition",
        "Complete circuit implementation based on system architecture",
        "Power, digital, and mixed-signal circuit integration",
        "Interface and subsystem connectivity design",
        "Pre-layout design review and verification",
      ],
      "All designs are prepared with PCB layout, manufacturing, and EVT testing in mind.",
    ],
  },
  {
    title: "PCB Layout",
    details: [
      "With the schematic completed and approved, PCB layout begins. This is performed for low to moderate complexity designs (typically up to ~6-layer boards)",
      "This process includes:",
      [
        "Collaboration with mechanical teams to define board outlines, enclosure constraints, connector placement, and mounting requirements (DXF-based integration)",
        "Board floorplanning and stack-up definition",
        "Constraint-driven layout for manufacturability and reliable assembly (DFM)",
        "Signal and power-aware layout practices to support system performance requirements",
        "All designs are reviewed and optimized to align with PCB manufacturer capabilities and assembly constraints.",
      ],
      "The goal is a smooth transition from design to physical hardware with minimal fabrication or integration issues.",
    ],
  },
  {
    title: "Firmware Development",
    details: [
      "I develop firmware needed to exercise, validate, and support the hardware design through prototype development.",
      "This process includes:",
      [
        "Low-level driver development for selected components",
        "Peripheral configuration and interface validation",
        "Board test routines for sensors, power rails, and communication links",
        "Prototype firmware to support bring-up and early system testing",
      ],
      "The goal is firmware that makes the hardware observable, testable, and ready for system-level integration.",
    ],
  },
  {
    title: "Bring-Up & Debug",
    details: [
      "After prototype boards are assembled, I support first power-on, measurement, and issue resolution.",
      "This process includes:",
      [
        "Initial power-up checks and current-limit validation",
        "Power rail, clock, reset, and boot-sequence verification",
        "Interface probing with oscilloscopes, logic analyzers, and test firmware",
        "Hardware issue isolation and corrective action recommendations",
      ],
      "The goal is to quickly separate layout, assembly, component, and firmware issues so the prototype can move forward.",
    ],
  },
  {
    title: "System Test & Validation",
    details: [
      "I validate the assembled system against its requirements and expected operating conditions.",
      "This process includes:",
      [
        "Functional test planning based on defined acceptance criteria",
        "Electrical and firmware behavior validation",
        "Environmental and operating-condition checks where applicable",
        "Test result documentation and revision recommendations",
      ],
      "The goal is a clear validation picture before the design moves into revision, pilot build, or production planning.",
    ],
  },
];

export default services;
