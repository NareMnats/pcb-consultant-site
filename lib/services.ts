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
        "Development of lightweight firmware architecture and test code can begin during PCB fabrication. MCU evaluation kits and breakout boards enable early code development and validation, reducing risk and accelerating system bring-up.",
      bullets: [
        {
          heading: "Firmware Architecture",
          text: "Define firmware structure and execution flow (e.g. state machines, flowcharts)",
        },
        {
          heading: "System Initialization",
          text: "Configure the microcontroller, clocks, and peripherals drivers required for system operation",
        },
        {
          heading: "Interface Development",
          text: "Develop and validate communication interfaces (e.g. SPI, I2C, UART, GPIO) using evaluation hardware",
        },
        {
          heading: "Test Firmware",
          text: "Develop firmware to test application logic and hardware subsystems using either bare metal or Hardware Abstraction Layer (HAL) code",
        },
      ],
    },
  },
  {
    title: "Bring-Up & Debug",
    details: {
      intro:
        "Validate prototype hardware through systematic testing and debugging to identify and resolve design issues. This phase verifies correct subsystem operation and establishes a stable platform for system test and validation.",
      bullets: [
        {
          heading: "Initial Inspection",
          text: "Perform physical verification of assembled boards including component placement, orientation, solder quality, mechanical fit checks, and detection of shorts using a DMM prior to power-up",
        },
        {
          heading: "System Power-Up",
          text: "Apply power and verify voltage rails with DMM, power sequencing, regulator stability, current draw, and overall power consumption",
        },
        {
          heading: "Peripheral Bring-Up",
          text: "Flash test firmware to boot the system, initialize peripherals, verify clock signals, validate GPIO functionality, and confirm basic system operation. Use lab equipment (e.g. oscilloscope, logic analyzer, DMM) to validate communication interfaces, signal timing, signal integrity, and logic-level behavior",
        },
        {
          heading: "Hardware & Firmware Debug",
          text: "Troubleshoot hardware and firmware issues and resolve design flaws. Step through firmware execution using a debugger probe to verify system behavior, and execution flow",
        },
      ],
    },
  },
  {
    title: "System Test & Validation",
    details: {
      intro:
        "Following subsystem verification, perform system-level validation of hardware and firmware functionality to ensure the EVT build meets product objectives and requirements.",
      bullets: [
        {
          heading: "Functional Verification",
          text: "Execute system firmware to validate full system operation, including application logic, high-level behavior, and integration of individual firmware modules.",
        },
        {
          heading: "Requirements Validation",
          text: "Execute defined test cases from the verification and validation plan to confirm system behavior against specified requirements and acceptance criteria.",
        },
        {
          heading: "Design Sign-Off",
          text: "Perform final engineering review of hardware and firmware performance to confirm readiness for EVT completion and transition to DVT or production prototyping.",
        },
        {
          heading: "Handoff Documentation",
          text: "Compile final design package including test results, known issues, design notes, firmware revisions, and recommendations for DVT transition and future iterations.",
        },
      ],
    },
  },
];

export default services;
