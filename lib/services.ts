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
    title: "Fabrication",
    details: [
      "I support the transition from design to manufacturing by preparing fabrication-ready files and assisting with PCB build coordination.",
      "This process includes:",
      [
        "Generating and reviewing fabrication and assembly packages (Gerbers, BOM, pick-and-place)",
        "Supporting PCB order placement with your chosen manufacturer",
        "Assisting with build-related questions during initial fabrication",
      ],
      "The goal is to ensure a smooth handoff from design to first hardware build with minimal fabrication issues.",
    ],
  },
  {
    title: "Test Firmware",
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
    title: "Bring-Up & Debug",
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
    title: "Prototype Testing",
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
    title: "Placeholder Service",
    details: [
      "Placeholder details for an additional workflow step.",
      "This content can be replaced with the final service description later.",
    ],
  },
];

export default services;
