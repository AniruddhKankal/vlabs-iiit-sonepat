import { type EceComponentKind } from "@/labs/previews/EceComponentViewer";

export type ComponentData = {
  slug: string;
  name: string;
  kind: EceComponentKind;

  /** Short one-line explanation shown near the component name. */
  tagline: string;

  /** Main educational explanation. */
  description: string[];

  /** Simple mental model that helps students understand the component. */
  intuition: string;

  /** Common situations where the component is used. */
  usedFor: string[];

  /** Important specifications shown in the component information panel. */
  specs: { label: string; value: string }[];

  /** Practical advice for using the component in a lab. */
  tips: string[];

  /** Common mistakes students should avoid. */
  commonMistakes: string[];
};

export const COMPONENTS_DATA: Record<string, ComponentData> = {
  breadboard: {
    slug: "breadboard",
    name: "Solderless Breadboard",
    kind: "breadboard",

    tagline: "Build and test circuits without soldering.",

    description: [
      "A breadboard is a reusable prototyping board that lets you build electronic circuits without permanently soldering components together.",
      "Inside the breadboard, groups of holes are electrically connected through metal contacts. This allows components and jumper wires to be connected, removed, and rearranged quickly while experimenting with a circuit.",
    ],

    intuition:
      "Think of a breadboard as a temporary circuit-building workspace where the holes are already electrically connected in groups.",

    usedFor: [
      "Building prototype circuits",
      "Testing electronic components",
      "Digital logic experiments",
      "Microcontroller projects",
      "Laboratory experiments",
    ],

    specs: [
      { label: "Type", value: "Solderless" },
      { label: "Construction", value: "Plastic body with metal contacts" },
      { label: "Pitch", value: "0.1 inch (2.54 mm)" },
      { label: "Use", value: "Circuit Prototyping" },
    ],

    tips: [
      "Connect the power supply to the power rails before building the circuit.",
      "Use the center gap to place DIP ICs so their pins remain electrically separated.",
      "Keep jumper wires short and organized to make debugging easier.",
      "Check the internal connection pattern before assuming two holes are connected.",
    ],

    commonMistakes: [
      "Assuming every hole on the breadboard is electrically connected.",
      "Accidentally connecting power and ground through the same row.",
      "Placing a DIP IC incorrectly across the center gap.",
      "Creating loose connections with poorly inserted jumper wires.",
    ],
  },

  resistor: {
    slug: "resistor",
    name: "Resistor",
    kind: "resistor",

    tagline: "Control current and divide voltage in almost every circuit.",

    description: [
      "A resistor is a passive electronic component that opposes the flow of electric current.",
      "It is one of the most commonly used components in electronics and is used for current limiting, voltage division, biasing, pull-up and pull-down circuits, and protecting components such as LEDs.",
    ],

    intuition:
      "Think of a resistor as a controlled obstacle for current. For the same voltage, a higher resistance allows less current to flow.",

    usedFor: [
      "Limiting LED current",
      "Voltage divider circuits",
      "Pull-up and pull-down circuits",
      "Transistor biasing",
      "Signal conditioning",
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
      "Check both resistance value and power rating when selecting a resistor.",
    ],

    commonMistakes: [
      "Reading the resistor color code incorrectly.",
      "Using an incorrect resistance value for an LED or other component.",
      "Exceeding the resistor's power rating.",
      "Assuming the resistor has a positive and negative terminal.",
    ],
  },

  capacitor: {
    slug: "capacitor",
    name: "Capacitor",
    kind: "capacitor",

    tagline: "Store electrical energy and smooth changing signals.",

    description: [
      "A capacitor is a passive component that stores electrical energy in an electric field.",
      "Capacitors are commonly used for filtering and smoothing power supplies, coupling signals between circuit stages, suppressing noise, and creating timing circuits.",
    ],

    intuition:
      "Think of a capacitor as a tiny electrical storage tank. It can charge up, hold energy, and release that energy when the circuit needs it.",

    usedFor: [
      "Power supply filtering",
      "Noise reduction",
      "Signal coupling",
      "Timing circuits",
      "Energy storage",
    ],

    specs: [
      { label: "Type", value: "Electrolytic / Ceramic" },
      { label: "Unit", value: "Farad (F)" },
      { label: "Typical Range", value: "pF to µF" },
      { label: "Polarity", value: "Depends on type" },
    ],

    tips: [
      "Check polarity before connecting an electrolytic capacitor.",
      "The negative terminal of an electrolytic capacitor is usually marked with a stripe.",
      "Never exceed the capacitor's rated voltage.",
      "Ceramic capacitors are generally non-polarized.",
    ],

    commonMistakes: [
      "Connecting an electrolytic capacitor backwards.",
      "Applying a voltage higher than its rated voltage.",
      "Confusing capacitance units such as pF, nF, and µF.",
      "Assuming every capacitor is polarized.",
    ],
  },

  led: {
    slug: "led",
    name: "Light Emitting Diode",
    kind: "led",

    tagline: "Turn electrical energy into visible light.",

    description: [
      "An LED is a semiconductor diode that emits light when current flows through it in the forward direction.",
      "LEDs are widely used as visual indicators and are commonly connected with a resistor to limit the current and prevent damage.",
    ],

    intuition:
      "An LED behaves like a one-way valve for current that produces light when current flows through it in the correct direction.",

    usedFor: [
      "Power indicators",
      "Status indicators",
      "Digital logic indicators",
      "Display systems",
      "Lighting applications",
    ],

    specs: [
      { label: "Type", value: "5mm Through-hole" },
      { label: "Forward Voltage", value: "~2V (varies by color)" },
      { label: "Typical Current", value: "20mA" },
      { label: "Polarity", value: "Anode (+) / Cathode (-)" },
    ],

    tips: [
      "The longer leg is usually the anode.",
      "The shorter leg and flat edge usually indicate the cathode.",
      "Always use a current-limiting resistor with an LED.",
      "Check the LED's forward voltage when designing the circuit.",
    ],

    commonMistakes: [
      "Connecting the LED backwards.",
      "Connecting an LED directly to a power supply without a current-limiting resistor.",
      "Exceeding the LED's maximum forward current.",
      "Assuming every LED has the same forward voltage.",
    ],
  },

  potentiometer: {
    slug: "potentiometer",
    name: "Potentiometer",
    kind: "potentiometer",

    tagline: "Adjust resistance or voltage with a simple rotary control.",

    description: [
      "A potentiometer is a three-terminal variable resistor whose resistance can be adjusted by rotating its shaft.",
      "It is commonly used as a variable voltage divider for controlling voltage, brightness, speed, and other circuit parameters.",
    ],

    intuition:
      "A potentiometer works like a movable electrical tap. Rotating the knob changes where that tap sits along the resistance track.",

    usedFor: [
      "Variable voltage control",
      "LED brightness control",
      "Audio volume control",
      "Sensor adjustment",
      "Analog input experiments",
    ],

    specs: [
      { label: "Type", value: "Rotary Variable Resistor" },
      { label: "Terminals", value: "3" },
      { label: "Function", value: "Variable Resistance / Voltage Division" },
      { label: "Control", value: "Rotary" },
    ],

    tips: [
      "The middle terminal is the wiper.",
      "The two outer terminals provide the full resistance range.",
      "Use the wiper as the output when using the potentiometer as a voltage divider.",
      "Swapping the outer terminals reverses the direction of adjustment.",
    ],

    commonMistakes: [
      "Confusing the wiper with an outer terminal.",
      "Using the potentiometer as a variable resistor without connecting the correct terminals.",
      "Exceeding the potentiometer's power rating.",
      "Assuming the center terminal is always ground.",
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

    intuition:
      "A push button is simply a temporary electrical connection. Press it and the contacts change state; release it and they return to their original state.",

    usedFor: [
      "Digital inputs",
      "Microcontroller projects",
      "Reset controls",
      "Counters",
      "User interaction",
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
      "Check the internal connection between the button terminals before wiring it.",
    ],

    commonMistakes: [
      "Leaving the input floating without a pull-up or pull-down.",
      "Placing the button incorrectly on the breadboard.",
      "Ignoring switch bounce in timing-sensitive applications.",
      "Assuming all four visible pins are electrically independent.",
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

    intuition:
      "A switch is a controllable break in a circuit. When closed, current can flow; when open, the circuit is interrupted.",

    usedFor: [
      "Power control",
      "Digital inputs",
      "Mode selection",
      "Circuit enable / disable",
      "Manual control",
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
      "Turn off the power before changing high-current connections.",
    ],

    commonMistakes: [
      "Connecting the wrong switch terminals.",
      "Exceeding the switch's voltage or current rating.",
      "Leaving a digital input floating.",
      "Using a switch where a momentary push button is actually required.",
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

    intuition:
      "A battery acts as an energy source that creates a potential difference between its positive and negative terminals, allowing current to flow through a connected circuit.",

    usedFor: [
      "Portable circuits",
      "Embedded systems",
      "Prototype power",
      "Low-voltage experiments",
      "Backup power",
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
      "Make sure the battery voltage is suitable for the circuit.",
    ],

    commonMistakes: [
      "Reversing the battery polarity.",
      "Short-circuiting the battery terminals.",
      "Connecting a battery with an unsuitable voltage.",
      "Connecting batteries incorrectly in series or parallel.",
    ],
  },

  "dc-jack": {
    slug: "dc-jack",
    name: "DC Power Jack",
    kind: "dc-jack",

    tagline: "A convenient connection point for external DC power.",

    description: [
      "A DC power jack is a connector used to supply DC power from an external adapter to an electronic circuit.",
      "It provides a convenient interface between a power adapter and the circuit's power input, commonly using a center-positive barrel connector.",
    ],

    intuition:
      "A DC jack is simply the circuit's entry point for power from an external DC adapter.",

    usedFor: [
      "External power input",
      "Development boards",
      "Laboratory circuits",
      "Embedded systems",
      "Prototype power connections",
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
      "Check the barrel plug dimensions before connecting an adapter.",
    ],

    commonMistakes: [
      "Using an adapter with the wrong voltage.",
      "Reversing the power polarity.",
      "Using an incompatible barrel plug.",
      "Exceeding the connector's current rating.",
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

    intuition:
      "Think of a bench power supply as a controllable battery. You choose how much voltage is available and set a current limit to protect the circuit.",

    usedFor: [
      "Laboratory experiments",
      "Circuit testing",
      "Prototype development",
      "Powering electronic boards",
      "Troubleshooting circuits",
    ],

    specs: [
      { label: "Type", value: "Adjustable DC Supply" },
      { label: "Output", value: "DC Voltage" },
      { label: "Controls", value: "Voltage / Current" },
      { label: "Use", value: "Circuit Power" },
    ],

    tips: [
      "Set the required voltage before connecting the circuit.",
      "Set an appropriate current limit to protect the circuit.",
      "Check the circuit's maximum operating voltage.",
      "Turn the supply off before changing circuit connections.",
    ],

    commonMistakes: [
      "Setting the output voltage too high.",
      "Ignoring the current limit.",
      "Reversing the power connections.",
      "Changing circuit wiring while the supply is powered.",
    ],
  },

  "ic-meter": {
    slug: "ic-meter",
    name: "IC Tester",
    kind: "ic-meter",

    tagline: "Quickly test and verify digital integrated circuits.",

    description: [
      "An IC tester is a laboratory instrument used to check and verify the operation of integrated circuits.",
      "It can help identify faulty ICs and verify their logic behavior during digital electronics experiments.",
    ],

    intuition:
      "An IC tester applies known input conditions to an integrated circuit and checks whether its outputs behave as expected.",

    usedFor: [
      "Testing logic ICs",
      "Identifying faulty ICs",
      "Digital electronics experiments",
      "Verifying logic gates",
      "Laboratory troubleshooting",
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
      "Confirm that the tester supports the specific IC family.",
      "Never insert or remove an IC while the tester is powered.",
    ],

    commonMistakes: [
      "Inserting the IC in the wrong orientation.",
      "Testing an unsupported IC.",
      "Using an incorrect supply voltage.",
      "Inserting or removing the IC while power is applied.",
    ],
  },

  "mcu-trainer": {
    slug: "mcu-trainer",
    name: "Microcontroller Trainer",
    kind: "mcu-trainer",

    tagline: "A hands-on platform for learning embedded systems.",

    description: [
      "A microcontroller trainer is a development and learning platform that combines a microcontroller with commonly used peripherals and interfaces.",
      "It allows students to experiment with GPIO, LEDs, buttons, displays, communication interfaces, timers, and other embedded-system concepts without building every supporting circuit from scratch.",
    ],

    intuition:
      "Think of a microcontroller trainer as a ready-to-use embedded systems laboratory packed into a single development board.",

    usedFor: [
      "GPIO experiments",
      "Embedded systems labs",
      "LED and button interfacing",
      "Display experiments",
      "Serial communication",
      "Microcontroller programming",
    ],

    specs: [
      { label: "Type", value: "Microcontroller Training Board" },
      { label: "Interface", value: "GPIO / Communication" },
      { label: "Peripherals", value: "LEDs, Buttons, Headers" },
      { label: "Use", value: "Embedded Systems" },
    ],

    tips: [
      "Check the board's operating voltage before connecting external components.",
      "Use the correct GPIO pins for each peripheral.",
      "Check the pinout before connecting signals.",
      "Avoid connecting two output pins directly together.",
      "Disconnect power before changing complex external connections.",
    ],

    commonMistakes: [
      "Applying the wrong voltage to the board.",
      "Connecting a peripheral to the wrong GPIO pin.",
      "Configuring an input pin as an output incorrectly.",
      "Connecting two output signals directly together.",
    ],
  },

  "xor-gate": {
    slug: "xor-gate",
    name: "XOR Gate",
    kind: "xor-gate",

    tagline: "Outputs HIGH when its inputs are different.",

    description: [
      "An XOR (Exclusive OR) gate is a digital logic gate that produces a HIGH output when its inputs are different.",
      "It is commonly used in adders, parity circuits, comparators, error detection, and other digital logic applications.",
    ],

    intuition:
      "XOR means 'one or the other, but not both.' With two inputs, the output is HIGH only when exactly one input is HIGH.",

    usedFor: [
      "Half adders",
      "Full adders",
      "Parity generation",
      "Parity checking",
      "Digital comparators",
      "Error detection",
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
      "Use a truth table to verify the expected output.",
    ],

    commonMistakes: [
      "Confusing XOR with OR.",
      "Leaving unused IC inputs floating.",
      "Forgetting to connect VCC and GND.",
      "Expecting the output to remain HIGH when both inputs are HIGH.",
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

    intuition:
      "Think of an AND gate as a system where every condition must be satisfied. If even one input is LOW, the output becomes LOW.",

    usedFor: [
      "Control logic",
      "Decision-making circuits",
      "Enable signals",
      "Arithmetic circuits",
      "Digital systems",
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
      "Use a truth table when debugging logic circuits.",
    ],

    commonMistakes: [
      "Confusing AND with OR.",
      "Forgetting to power the IC.",
      "Leaving unused logic inputs floating.",
      "Assuming the output is HIGH when only one input is HIGH.",
    ],
  },
};