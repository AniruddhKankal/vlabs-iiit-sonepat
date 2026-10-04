import { type EceComponentKind } from "@/labs/previews/EceComponentViewer";

export type ComponentData = {
  slug: string;
  name: string;
  kind: EceComponentKind;
  tagline: string;
  description: string[];
  specs: { label: string; value: string }[];
  tips: string[];
};

export const COMPONENTS_DATA: Record<string, ComponentData> = {
  breadboard: {
    slug: "breadboard",
    name: "Solderless Breadboard",
    kind: "breadboard",
    tagline: "The foundation for prototyping electronic circuits.",
    description: [
      "A breadboard is a reusable prototyping board that lets you connect electronic components without soldering.",
      "Its internal metal contacts connect groups of holes together, allowing components and jumper wires to be connected quickly while building and testing circuits.",
    ],
    specs: [
      { label: "Type", value: "Solderless" },
      { label: "Construction", value: "Plastic body with metal contacts" },
      { label: "Pitch", value: "0.1 inch (2.54 mm)" },
      { label: "Use", value: "Circuit Prototyping" },
    ],
    tips: [
      "Connect the power supply to the power rails before building the circuit.",
      "Use the center gap to place DIP ICs.",
      "Keep wiring short and organized for easier debugging.",
    ],
  },

  resistor: {
    slug: "resistor",
    name: "Resistor",
    kind: "resistor",
    tagline: "Control and limit the flow of electrical current.",
    description: [
      "A resistor is a passive electronic component that opposes the flow of electric current.",
      "Resistors are commonly used to limit current, divide voltage, bias components, and protect devices such as LEDs.",
    ],
    specs: [
      { label: "Type", value: "Through-hole (Axial)" },
      { label: "Power Rating", value: "1/4 Watt" },
      { label: "Tolerance", value: "±5%" },
      { label: "Polarity", value: "None" },
    ],
    tips: [
      "Resistors are non-polarized and can be connected in either direction.",
      "Use a current-limiting resistor when connecting an LED.",
      "Use the color bands to determine the resistance value.",
    ],
  },

  capacitor: {
    slug: "capacitor",
    name: "Capacitor",
    kind: "capacitor",
    tagline: "Store and release electrical energy.",
    description: [
      "A capacitor is a passive component that stores electrical energy in an electric field.",
      "Capacitors are commonly used for filtering, smoothing power supplies, coupling signals, and creating timing circuits.",
    ],
    specs: [
      { label: "Type", value: "Electrolytic / Ceramic" },
      { label: "Unit", value: "Farad (F)" },
      { label: "Typical Range", value: "pF to µF" },
      { label: "Polarity", value: "Depends on type" },
    ],
    tips: [
      "Check polarity before connecting an electrolytic capacitor.",
      "The negative terminal is usually marked with a stripe.",
      "Never exceed the capacitor's rated voltage.",
    ],
  },

  led: {
    slug: "led",
    name: "Light Emitting Diode",
    kind: "led",
    tagline: "Turn electrical energy into visible light.",
    description: [
      "An LED is a semiconductor diode that emits light when current flows through it in the forward direction.",
      "LEDs are widely used as visual indicators and are commonly connected with a resistor to limit the current.",
    ],
    specs: [
      { label: "Type", value: "5mm Through-hole" },
      { label: "Forward Voltage", value: "~2V (varies by color)" },
      { label: "Typical Current", value: "20mA" },
      { label: "Polarity", value: "Anode (+) / Cathode (-)" },
    ],
    tips: [
      "The longer leg is usually the anode.",
      "The shorter leg and flat edge indicate the cathode.",
      "Always use a current-limiting resistor with an LED.",
    ],
  },

  potentiometer: {
    slug: "potentiometer",
    name: "Potentiometer",
    kind: "potentiometer",
    tagline: "Adjust resistance with a simple rotary control.",
    description: [
      "A potentiometer is a three-terminal variable resistor whose resistance can be adjusted by rotating its shaft.",
      "It is commonly used as a variable voltage divider for controlling voltage, brightness, speed, and other circuit parameters.",
    ],
    specs: [
      { label: "Type", value: "Rotary Variable Resistor" },
      { label: "Terminals", value: "3" },
      { label: "Function", value: "Variable Resistance" },
      { label: "Control", value: "Rotary" },
    ],
    tips: [
      "The middle terminal is the wiper.",
      "The two outer terminals provide the full resistance range.",
      "Use the wiper as the output when using it as a voltage divider.",
    ],
  },

  "push-button": {
    slug: "push-button",
    name: "Push Button",
    kind: "push-button",
    tagline: "A simple momentary input for electronic circuits.",
    description: [
      "A push button is a momentary switch that changes its electrical state while it is being pressed.",
      "It is commonly used as a digital input for microcontrollers, counters, logic circuits, and interactive electronics.",
    ],
    specs: [
      { label: "Type", value: "Momentary Push Button" },
      { label: "Operation", value: "Normally Open" },
      { label: "Function", value: "Momentary Input" },
      { label: "Mounting", value: "Through-hole" },
    ],
    tips: [
      "Use a pull-up or pull-down resistor to prevent floating inputs.",
      "Place the button across the breadboard center gap when appropriate.",
      "Mechanical buttons can produce contact bounce.",
    ],
  },

  switch: {
    slug: "switch",
    name: "Switch",
    kind: "switch",
    tagline: "Manually control the flow of current or signals.",
    description: [
      "A switch is an electromechanical component used to open or close an electrical circuit.",
      "It allows a user to manually control power or signals and is commonly used as an input in electronic circuits.",
    ],
    specs: [
      { label: "Type", value: "Toggle Switch" },
      { label: "Function", value: "Open / Close Circuit" },
      { label: "Operation", value: "Manual" },
      { label: "Use", value: "Circuit Control" },
    ],
    tips: [
      "Check the switch terminal configuration before wiring.",
      "Use pull-up or pull-down resistors for digital inputs when required.",
      "Do not exceed the switch's rated voltage or current.",
    ],
  },

  battery: {
    slug: "battery",
    name: "Battery",
    kind: "battery",
    tagline: "A portable source of electrical energy.",
    description: [
      "A battery converts stored chemical energy into electrical energy and provides a portable source of DC power.",
      "Batteries are commonly used to power electronic circuits when an external power supply is not available.",
    ],
    specs: [
      { label: "Type", value: "DC Battery" },
      { label: "Output", value: "DC Voltage" },
      { label: "Polarity", value: "Positive / Negative" },
      { label: "Use", value: "Portable Power" },
    ],
    tips: [
      "Always identify the positive and negative terminals.",
      "Never short-circuit a battery.",
      "Check the battery voltage before connecting it to a circuit.",
    ],
  },

  "dc-jack": {
    slug: "dc-jack",
    name: "DC Power Jack",
    kind: "dc-jack",
    tagline: "A convenient connection point for DC power.",
    description: [
      "A DC power jack is a connector used to supply DC power from an external adapter to an electronic circuit.",
      "It provides a convenient interface between a power adapter and the circuit's power input.",
    ],
    specs: [
      { label: "Type", value: "DC Barrel Jack" },
      { label: "Connection", value: "DC Adapter" },
      { label: "Terminals", value: "Positive / Negative" },
      { label: "Use", value: "Power Input" },
    ],
    tips: [
      "Verify the polarity of the connected adapter.",
      "Make sure the adapter voltage matches the circuit requirements.",
      "Do not exceed the connector's rated current.",
    ],
  },

  "dc-power-supply": {
    slug: "dc-power-supply",
    name: "DC Power Supply",
    kind: "dc-power-supply",
    tagline: "Provides controlled DC power for electronic circuits.",
    description: [
      "A DC power supply provides a controlled source of direct current for powering electronic circuits and experiments.",
      "Its voltage and current controls allow the power delivered to a circuit to be adjusted according to the experiment requirements.",
    ],
    specs: [
      { label: "Type", value: "Adjustable DC Supply" },
      { label: "Output", value: "DC Voltage" },
      { label: "Controls", value: "Voltage / Current" },
      { label: "Use", value: "Circuit Power" },
    ],
    tips: [
      "Set the required voltage before connecting the circuit.",
      "Check the circuit's maximum operating voltage.",
      "Turn the supply off before changing circuit connections.",
    ],
  },

  "ic-meter": {
    slug: "ic-meter",
    name: "IC Meter",
    kind: "ic-meter",
    tagline: "Test and verify integrated circuits.",
    description: [
      "An IC meter is a laboratory testing instrument used to check and verify integrated circuits.",
      "It can help identify faulty ICs and verify their operation during digital electronics experiments.",
    ],
    specs: [
      { label: "Type", value: "Digital IC Tester" },
      { label: "Function", value: "IC Testing" },
      { label: "Interface", value: "IC Socket / Pins" },
      { label: "Use", value: "Digital Electronics Lab" },
    ],
    tips: [
      "Verify the IC orientation before inserting it.",
      "Make sure the IC supply voltage is correct.",
      "Never insert or remove an IC while the tester is powered.",
    ],
  },

  "mcu-trainer": {
    slug: "mcu-trainer",
    name: "Microcontroller Trainer",
    kind: "mcu-trainer",
    tagline: "A platform for learning and experimenting with microcontrollers.",
    description: [
      "A microcontroller trainer is a development and learning platform that combines a microcontroller with commonly used peripherals and interfaces.",
      "It allows students to experiment with GPIO, LEDs, buttons, displays, communication interfaces, and other embedded-system concepts.",
    ],
    specs: [
      { label: "Type", value: "Microcontroller Training Board" },
      { label: "Interface", value: "GPIO / Communication" },
      { label: "Peripherals", value: "LEDs, Buttons, Headers" },
      { label: "Use", value: "Embedded Systems" },
    ],
    tips: [
      "Check the board's operating voltage before connecting components.",
      "Use the correct GPIO pins for each peripheral.",
      "Avoid connecting two output pins directly together.",
    ],
  },

  "xor-gate": {
    slug: "xor-gate",
    name: "XOR Gate",
    kind: "xor-gate",
    tagline: "Outputs HIGH when its inputs are different.",
    description: [
      "An XOR (Exclusive OR) gate is a digital logic gate that produces a HIGH output when its inputs are different.",
      "It is commonly used in adders, parity circuits, comparators, and other digital logic applications.",
    ],
    specs: [
      { label: "Logic Function", value: "Exclusive OR" },
      { label: "Inputs", value: "2" },
      { label: "Output", value: "1" },
      { label: "Typical IC", value: "74LS86 / 74HC86" },
    ],
    tips: [
      "The output is HIGH only when exactly one input is HIGH.",
      "Connect the IC's VCC and GND pins before using the gate.",
      "Do not leave unused logic inputs floating.",
    ],
  },

  "and-gate": {
    slug: "and-gate",
    name: "AND Gate",
    kind: "and-gate",
    tagline: "Outputs HIGH only when all inputs are HIGH.",
    description: [
      "An AND gate is a fundamental digital logic gate whose output becomes HIGH only when all of its inputs are HIGH.",
      "AND gates are used extensively in control logic, decision-making circuits, arithmetic circuits, and digital systems.",
    ],
    specs: [
      { label: "Logic Function", value: "AND" },
      { label: "Inputs", value: "2" },
      { label: "Output", value: "1" },
      { label: "Typical IC", value: "74LS08 / 74HC08" },
    ],
    tips: [
      "The output is HIGH only when every input is HIGH.",
      "Connect the IC's VCC and GND pins before using the gate.",
      "Do not leave unused logic inputs floating.",
    ],
  },
};