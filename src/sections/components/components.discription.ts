export const ComponentsDiscription = {
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

  diode: {
    slug: "diode",
    name: "1N4148 | 1N4007 Diode",
    kind: "diode",

    tagline: "A fast switching diode for controlling current direction.",

    description: [
      "The 1N4148 | 1N4007 is a small-signal switching diode designed to allow current to flow primarily in one direction.",
      "It is commonly used in fast switching, signal processing, protection, and digital circuits where a compact general-purpose diode is required.",
    ],

    intuition:
      "Think of a diode as a one-way valve for electrical current. The 1N4148 | 1N4007 is especially useful when that switching needs to happen quickly.",

    usedFor: [
      "Switching circuits",
      "Signal processing",
      "Logic circuits",
      "Protection circuits",
      "Clamping circuits",
    ],

    specs: [
      { label: "Type", value: "Small-Signal Switching Diode" },
      { label: "Package", value: "DO-35 Axial" },
      { label: "Polarity", value: "Anode / Cathode" },
      { label: "Part Number", value: "1N4148 | 1N4007" },
    ],

    tips: [
      "The band on the diode body identifies the cathode.",
      "Connect the diode in the correct direction for the intended current flow.",
      "Check the diode's forward voltage and maximum current for the circuit.",
      "Use a multimeter's diode-test mode to identify the diode and check its polarity.",
    ],

    commonMistakes: [
      "Reversing the diode polarity.",
      "Confusing the cathode band with the anode.",
      "Exceeding the diode's maximum current.",
      "Assuming every diode has the same electrical characteristics.",
    ],
  },

  zener: {
    slug: "zener",
    name: "1N4733A Zener Diode",
    kind: "zener-diode",

    tagline:
      "Maintain a relatively constant voltage when operated in reverse breakdown.",

    description: [
      "The 1N4733A is a Zener diode designed to operate in the reverse-breakdown region at a specified voltage.",
      "Zener diodes are commonly used for voltage regulation, reference voltages, and protecting circuits from excessive voltage.",
    ],

    intuition:
      "A normal diode mainly blocks reverse current, while a Zener diode is designed to safely conduct in reverse once its breakdown voltage is reached.",

    usedFor: [
      "Voltage regulation",
      "Voltage references",
      "Over-voltage protection",
      "Clamping circuits",
      "Signal limiting",
    ],

    specs: [
      { label: "Type", value: "Zener Diode" },
      { label: "Package", value: "DO-41 Axial" },
      { label: "Nominal Voltage", value: "≈5.1V" },
      { label: "Polarity", value: "Anode / Cathode" },
      { label: "Part Number", value: "1N4733A" },
    ],

    tips: [
      "The band identifies the cathode.",
      "A series resistor is normally required to limit Zener current.",
      "Operate the diode within its specified power rating.",
      "Check the circuit current before selecting a Zener resistor.",
    ],

    commonMistakes: [
      "Connecting the Zener without current limiting.",
      "Reversing the diode orientation.",
      "Exceeding the Zener's power rating.",
      "Assuming the Zener voltage remains perfectly constant at every current.",
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

  "dip-switch": {
    slug: "dip-switch",
    name: "DIP Switch, 2/4/6/8-Pole",
    kind: "dip-switch",
    tagline:
      "A compact set of individual switches used to configure digital circuits and select hardware options.",
    description: [
      "A DIP switch is a group of small manual switches packaged in a dual-in-line housing. Each switch can be independently turned ON or OFF.",
      "DIP switches are commonly used to provide configuration inputs to digital circuits, allowing users to select operating modes, addresses, options, or logic states without changing the circuit wiring.",
      "Available configurations include 2, 4, 6, or 8 individual switch poles, with each pole acting as an independent electrical switch.",
    ],
    intuition:
      "Think of a DIP switch like a row of tiny ON/OFF controls. Each switch represents one binary choice, so an 8-pole DIP switch can provide eight independent configuration bits.",
    usedFor: [
      "Setting configuration options in digital circuits",
      "Selecting operating modes",
      "Setting binary input values",
      "Hardware address selection",
      "Logic circuit experiments",
      "Microcontroller and embedded-system configuration",
      "Testing different combinations of digital inputs",
    ],
    specs: [
      { label: "Type", value: "DIP (Dual In-line Package) switch" },
      { label: "Available Poles", value: "2, 4, 6, or 8" },
      { label: "Operation", value: "Manual ON/OFF switching" },
      { label: "Switches", value: "Individually controlled poles" },
      { label: "Output", value: "Digital ON/OFF state" },
      { label: "Mounting", value: "Through-hole / PCB mounted" },
    ],
    tips: [
      "Check the ON marking on the switch body before deciding the switch state.",
      "Treat each pole as an independent switch unless the circuit specifically connects them together.",
      "Use appropriate pull-up or pull-down resistors when the DIP switch is connected to a digital input.",
      "Make sure the switch voltage and current ratings are suitable for the circuit.",
      "Avoid changing switch settings while the circuit is operating if the circuit is not designed for live configuration.",
      "For binary configuration, document which switch corresponds to which bit or function.",
    ],
    commonMistakes: [
      "Assuming all DIP switch poles are electrically connected together.",
      "Misreading the ON direction of the switch.",
      "Leaving a digital input floating without a pull-up or pull-down resistor.",
      "Confusing the physical switch number with its binary bit position.",
      "Exceeding the switch's voltage or current rating.",
      "Changing configuration switches without considering how the circuit responds to the new state.",
      "Assuming different DIP switch packages have identical pin layouts.",
    ],
  },

  bjt: {
    slug: "bjt",
    name: "BJT BC547",
    kind: "bjt",
    tagline:
      "An NPN transistor used for switching and amplifying electronic signals.",
    description: [
      "The BC547 is a general-purpose NPN bipolar junction transistor (BJT) commonly used in low-power electronic circuits.",
      "A BJT has three terminals: Collector, Base, and Emitter. A small current applied to the Base can control a larger current flowing between the Collector and Emitter.",
      "The BC547 is commonly available in a small TO-92 package and is widely used for switching, amplification, and basic transistor experiments.",
    ],
    intuition:
      "Think of a BJT like a current-controlled valve. A small current flowing into the Base controls a larger current flowing from the Collector to the Emitter.",
    usedFor: [
      "Electronic switching circuits",
      "Signal amplification",
      "Driving LEDs and other low-power loads",
      "Building transistor-based logic circuits",
      "Common-emitter amplifier experiments",
      "Learning transistor biasing and operation",
    ],
    specs: [
      { label: "Type", value: "NPN BJT" },
      { label: "Part Number", value: "BC547" },
      { label: "Package", value: "TO-92" },
      { label: "Terminals", value: "Collector, Base, Emitter" },
      { label: "Transistor Type", value: "Bipolar Junction Transistor" },
      { label: "Typical Use", value: "Switching and amplification" },
    ],
    tips: [
      "Identify the Collector, Base, and Emitter pins before connecting the transistor.",
      "Use a suitable resistor to limit the Base current.",
      "Check the transistor pinout because the physical pin arrangement can vary between transistor models.",
      "Avoid exceeding the transistor's maximum voltage and current ratings.",
      "For switching applications, provide sufficient Base current to turn the transistor on properly.",
      "Use the correct biasing conditions when using the transistor as an amplifier.",
    ],
    commonMistakes: [
      "Connecting the Collector, Base, and Emitter pins incorrectly.",
      "Connecting the Base directly to a power source without a current-limiting resistor.",
      "Exceeding the transistor's voltage or current ratings.",
      "Assuming every TO-92 transistor has the same pinout.",
      "Using incorrect biasing in an amplifier circuit.",
      "Expecting the transistor to behave like a simple switch without providing appropriate Base current.",
    ],
  },

  mosfet: {
    slug: "mosfet",
    name: "MOSFET 2N7000",
    kind: "mosfet",
    tagline:
      "An N-channel MOSFET used for electronic switching and low-power control applications.",
    description: [
      "The 2N7000 is a general-purpose N-channel enhancement-mode MOSFET commonly used for switching and low-power electronic applications.",
      "A MOSFET has three main terminals: Gate, Drain, and Source. The voltage applied to the Gate controls the current flowing between the Drain and Source.",
      "The 2N7000 is available in a compact TO-92 package and is useful for learning how voltage-controlled electronic switches work.",
    ],
    intuition:
      "Think of a MOSFET like an electrically controlled switch. The Gate controls whether current can flow between the Drain and Source, while ideally very little current flows into the Gate.",
    usedFor: [
      "Electronic switching circuits",
      "Controlling LEDs and small loads",
      "Microcontroller-controlled switching",
      "Low-power motor and relay control",
      "Digital logic interfacing",
      "Learning MOSFET switching and characteristics",
    ],
    specs: [
      { label: "Type", value: "N-channel MOSFET" },
      { label: "Part Number", value: "2N7000" },
      { label: "Package", value: "TO-92" },
      { label: "Terminals", value: "Gate, Drain, Source" },
      { label: "Mode", value: "Enhancement mode" },
      { label: "Typical Use", value: "Low-power switching" },
    ],
    tips: [
      "Identify the Gate, Drain, and Source pins before connecting the MOSFET.",
      "Check the datasheet because the pin arrangement can vary between different MOSFET packages and manufacturers.",
      "Use an appropriate Gate voltage to turn the MOSFET on.",
      "Do not exceed the MOSFET's maximum Drain-Source voltage or current ratings.",
      "Use a Gate resistor when appropriate to control switching transients.",
      "A pull-down resistor on the Gate can help keep the MOSFET switched off when the control signal is disconnected.",
    ],
    commonMistakes: [
      "Connecting the Gate, Drain, and Source pins incorrectly.",
      "Assuming the MOSFET is turned on simply because it is connected to a circuit.",
      "Applying an insufficient Gate voltage for the intended load current.",
      "Exceeding the MOSFET's voltage or current ratings.",
      "Leaving the Gate floating when a defined OFF state is required.",
      "Assuming every TO-92 MOSFET has the same pinout.",
    ],
  },

  "op-amp": {
    slug: "op-amp",
    name: "Op-Amp LM741",
    kind: "op-amp",
    tagline:
      "A general-purpose operational amplifier used for signal amplification and analog circuit processing.",
    description: [
      "The LM741 is a general-purpose operational amplifier (op-amp) commonly used in basic analog electronics experiments.",
      "An operational amplifier amplifies the voltage difference between its inverting and non-inverting inputs and produces an output voltage.",
      "The LM741 is available in an 8-pin DIP package and provides input, output, power supply, and offset-null connections for analog circuit applications.",
    ],
    intuition:
      "Think of an op-amp as a very sensitive voltage difference amplifier. It compares the voltage at its + and − inputs and changes its output to amplify the difference between them.",
    usedFor: [
      "Voltage amplification",
      "Inverting amplifier circuits",
      "Non-inverting amplifier circuits",
      "Voltage follower circuits",
      "Summing amplifier experiments",
      "Comparator and signal-processing experiments",
      "Basic analog electronics laboratories",
    ],
    specs: [
      { label: "Type", value: "Operational Amplifier" },
      { label: "Part Number", value: "LM741" },
      { label: "Package", value: "DIP-8" },
      { label: "Inputs", value: "Inverting (−) and Non-inverting (+)" },
      { label: "Output", value: "Single analog output" },
      { label: "Supply", value: "V+ and V− supply pins" },
      { label: "Additional Pins", value: "Offset-null and NC" },
    ],
    tips: [
      "Identify the pin numbers and orientation of the DIP-8 package before connecting the IC.",
      "Connect the appropriate positive and negative supply voltages before using the op-amp.",
      "Use the inverting and non-inverting inputs correctly for the desired amplifier configuration.",
      "Keep input voltages within the allowed operating range of the LM741.",
      "Use feedback components such as resistors to control the gain of amplifier circuits.",
      "Check the datasheet when selecting supply voltages and designing practical circuits.",
    ],
    commonMistakes: [
      "Connecting the DIP-8 IC with the wrong orientation.",
      "Confusing the inverting and non-inverting input pins.",
      "Forgetting to connect the power supply pins.",
      "Connecting the output directly to the power supply.",
      "Using an incorrect feedback resistor configuration.",
      "Applying input voltages outside the allowed operating range.",
      "Assuming the LM741 behaves like an ideal op-amp in every situation.",
    ],
  },

  "seven-segment": {
    slug: "seven-segment",
    name: "7-Segment Display",
    kind: "seven-segment",
    tagline:
      "A seven-LED display used to represent decimal digits and simple numeric values.",
    description: [
      "A 7-segment display is an electronic display made from seven individual LED segments arranged in the shape of the number 8.",
      "By turning different segments on or off, the display can represent decimal digits from 0 to 9 and several other characters.",
      "This component uses a common-cathode configuration, where the cathodes of all LED segments are connected together to a common ground connection.",
    ],
    intuition:
      "Think of a 7-segment display as seven tiny LEDs working together like a digital stencil. By choosing which segments are turned on, different numbers can be drawn.",
    usedFor: [
      "Displaying decimal numbers",
      "Digital counter circuits",
      "Clock and timer displays",
      "Seven-segment decoder experiments",
      "Microcontroller display projects",
      "Learning basic digital electronics",
    ],
    specs: [
      { label: "Type", value: "7-Segment LED Display" },
      { label: "Configuration", value: "Common Cathode" },
      { label: "Segments", value: "7 LED segments (a–g)" },
      { label: "Display", value: "Decimal digits 0–9" },
      { label: "Common Terminal", value: "Cathode / Ground" },
      { label: "Control", value: "Individual segment inputs" },
    ],
    tips: [
      "Connect the common cathode terminal to ground.",
      "Use a current-limiting resistor for each LED segment.",
      "Identify the segment pins before connecting the display.",
      "Turn on the required segments according to the digit you want to display.",
      "Check the datasheet because the pin arrangement can vary between display models.",
      "Avoid driving the LED segments above their rated current.",
    ],
    commonMistakes: [
      "Connecting a common-cathode display as if it were common-anode.",
      "Forgetting current-limiting resistors for the LED segments.",
      "Connecting the wrong segment pins.",
      "Assuming all 7-segment displays have the same pinout.",
      "Exceeding the maximum current of an individual LED segment.",
      "Connecting the common cathode to the positive supply instead of ground.",
    ],
  },

  "function-generator": {
    slug: "function-generator",
    name: "Function / Signal Generator",
    kind: "function-generator",
    tagline:
      "Generates controlled electrical waveforms such as sine, square, and triangular signals for circuit testing.",
    description: [
      "A function generator is an electronic instrument used to produce electrical signals with adjustable frequency, amplitude, and waveform.",
      "It can generate common waveforms such as sine, square, and triangular waves, which can be applied to electronic circuits as test or input signals.",
      "Function generators are commonly used together with oscilloscopes to observe how a circuit responds to different input signals.",
    ],
    intuition:
      "Think of a function generator as a controlled signal source. You choose the shape, frequency, and strength of the signal, and the generator produces that waveform for your circuit.",
    usedFor: [
      "Generating test signals for electronic circuits",
      "Testing amplifier circuits",
      "Studying frequency response",
      "Generating sine, square, and triangular waves",
      "Testing filters and oscillators",
      "Providing clock-like signals for digital circuits",
      "Laboratory experiments involving AC and time-varying signals",
    ],
    specs: [
      { label: "Type", value: "Function / Signal Generator" },
      { label: "Waveforms", value: "Sine, Square, Triangle" },
      { label: "Controls", value: "Frequency, Amplitude, Offset, Waveform" },
      { label: "Output", value: "Adjustable electrical signal" },
      { label: "Connection", value: "Output terminal / BNC" },
      { label: "Typical Use", value: "Circuit testing and signal generation" },
    ],
    tips: [
      "Select the required waveform before connecting the generator to the circuit.",
      "Set the output amplitude to a safe level before applying the signal.",
      "Choose an appropriate frequency for the circuit being tested.",
      "Check the DC offset when working with circuits that require a specific bias voltage.",
      "Use an oscilloscope to verify the actual waveform, amplitude, and frequency.",
      "Connect the signal generator ground correctly to the circuit ground.",
      "Avoid exceeding the input voltage limits of the circuit under test.",
    ],
    commonMistakes: [
      "Setting an excessively high output amplitude.",
      "Using the wrong waveform for the experiment.",
      "Forgetting to check the DC offset.",
      "Selecting an unsuitable frequency for the circuit.",
      "Connecting the generator output incorrectly.",
      "Ignoring the signal generator's output impedance.",
      "Assuming the displayed amplitude always matches the voltage actually seen by the load.",
      "Connecting the signal generator to a circuit without checking its input voltage limits.",
    ],
  },

  transformer: {
    slug: "transformer",
    name: "Step-Down Transformer (Centre-Tap)",
    kind: "transformer",
    tagline:
      "Reduces AC voltage and provides a centre-tapped secondary output for rectifier and power-supply circuits.",
    description: [
      "A step-down transformer is an electrical device that transfers AC electrical energy from one circuit to another while reducing the voltage.",
      "This transformer has a centre-tapped secondary winding, which provides two equal secondary voltage sections with a common centre connection.",
      "The transformer uses electromagnetic induction between the primary and secondary windings and provides electrical isolation between the input and output circuits.",
    ],
    intuition:
      "Think of a transformer like a gearbox for AC voltage. The winding ratio determines how much the voltage is stepped down, while the centre tap divides the secondary winding into two equal sections.",
    usedFor: [
      "Reducing AC mains voltage to a lower AC voltage",
      "Full-wave centre-tapped rectifier circuits",
      "Low-voltage power supply circuits",
      "AC-to-DC converter experiments",
      "Providing isolated AC power to electronic circuits",
      "Studying electromagnetic induction and transformer operation",
    ],
    specs: [
      { label: "Type", value: "Step-down transformer" },
      { label: "Secondary", value: "Centre-tapped" },
      { label: "Input", value: "AC voltage" },
      { label: "Output", value: "Reduced AC voltage" },
      { label: "Windings", value: "Primary and centre-tapped secondary" },
      { label: "Principle", value: "Mutual electromagnetic induction" },
      {
        label: "Isolation",
        value: "Electrical isolation between primary and secondary",
      },
    ],
    tips: [
      "Connect the primary winding only to the specified AC supply voltage.",
      "Identify the two ends and centre tap of the secondary winding before wiring the circuit.",
      "Use the centre tap correctly when building a full-wave centre-tapped rectifier.",
      "Do not exceed the transformer's rated voltage and current.",
      "Remember that the transformer is designed for AC operation and should not be connected directly to a DC source.",
      "Check the secondary voltage between each end and the centre tap separately.",
      "Keep the primary and secondary sides electrically isolated in the circuit.",
    ],
    commonMistakes: [
      "Connecting a transformer directly to a DC supply.",
      "Applying an incorrect or excessive voltage to the primary winding.",
      "Confusing the centre tap with one of the secondary winding ends.",
      "Using the wrong secondary terminals in a centre-tapped rectifier.",
      "Exceeding the rated secondary current.",
      "Assuming the secondary voltage is measured the same between every pair of terminals.",
      "Ignoring electrical isolation and incorrectly connecting primary and secondary grounds.",
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

  ammeter: {
    slug: "ammeter",
    name: "Analogue Ammeter",
    kind: "ammeter",
    tagline: "Measures electric current flowing through a circuit.",
    description: [
      "An ammeter is an electrical measuring instrument used to measure the current flowing through a circuit.",
      "This analogue milliammeter has a 0–100 mA range and displays the measured current using a pointer on a graduated scale.",
      "An ammeter must be connected in series with the component or branch whose current is being measured.",
    ],
    intuition:
      "Think of an ammeter like a current counter placed directly in the path of moving charge. Since the current has to pass through the meter, the ammeter is connected in series.",
    usedFor: [
      "Measuring current in electronic circuits",
      "Verifying calculated circuit current",
      "Studying Ohm's law",
      "Measuring current through resistors and other components",
      "Basic electrical and electronics laboratory experiments",
    ],
    specs: [
      { label: "Type", value: "Analogue milliammeter" },
      { label: "Measurement Range", value: "0–100 mA" },
      { label: "Unit", value: "mA" },
      { label: "Connection", value: "Series" },
      { label: "Display", value: "Analog pointer and scale" },
      { label: "Polarity", value: "Positive (+) and Negative (−) terminals" },
    ],
    tips: [
      "Always connect the ammeter in series with the circuit.",
      "Check the polarity before connecting the meter.",
      "Start with the highest available current range when the expected current is unknown.",
      "Do not exceed the rated current range of the meter.",
      "Make sure the pointer is at zero before taking a reading.",
    ],
    commonMistakes: [
      "Connecting the ammeter directly across a voltage source.",
      "Connecting the ammeter in parallel with a component.",
      "Reversing the polarity of the meter.",
      "Exceeding the 100 mA measurement range.",
      "Reading the wrong scale or viewing the pointer from an angle.",
    ],
  },

  voltmeter: {
    slug: "voltmeter",
    name: "Analogue Voltmeter",
    kind: "voltmeter",
    tagline:
      "Measures the potential difference (voltage) between two points in a circuit.",

    description: [
      "A voltmeter is an electrical measuring instrument used to measure the potential difference between two points in a circuit.",
      "This analogue voltmeter has a 0–15 V DC range and displays the measured voltage using a pointer on a graduated scale.",
      "A voltmeter is connected in parallel across the component or part of the circuit whose voltage is being measured.",
    ],
    intuition:
      "Think of a voltmeter like a pressure gauge for electricity. It compares the electrical potential at two points without becoming a major part of the current path, so it is connected in parallel.",
    usedFor: [
      "Measuring voltage across circuit components",
      "Verifying calculated voltage values",
      "Studying Ohm's law",
      "Measuring voltage drops across resistors and other components",
      "Checking DC supply voltages in electronic circuits",
      "Basic electrical and electronics laboratory experiments",
    ],
    specs: [
      {
        label: "Type",
        value: "Analogue DC voltmeter",
      },
      { label: "Measurement Range", value: "0–15 V DC" },
      { label: "Unit", value: "V" },
      { label: "Connection", value: "Parallel" },
      { label: "Display", value: "Analog pointer and scale" },
      { label: "Polarity", value: "Positive (+) and Negative (−) terminals" },
    ],
    tips: [
      "Always connect the voltmeter in parallel with the component or circuit section being measured.",
      "Check the polarity before connecting the meter.",
      "Start with the highest available voltage range when the expected voltage is unknown.",
      "Do not exceed the 15 V measurement range.",
      "Read the pointer carefully against the correct scale.",
      "Make sure the pointer is at zero before taking a reading.",
    ],
    commonMistakes: [
      "Connecting the voltmeter in series with the circuit.",
      "Short-circuiting the power source through the meter.",
      "Reversing the polarity of the meter.",
      "Exceeding the 15 V measurement range.",
      "Reading the wrong scale on the analogue dial.",
      "Viewing the pointer from an angle and getting an incorrect reading.",
    ],
  },

  "logic-analyser": {
    slug: "logic-analyser",
    name: "Logic Analyser",
    kind: "logic-analyser",
    tagline:
      "Captures and displays digital signals over time to help analyze logic states, timing, and communication protocols.",
    description: [
      "A logic analyser is an electronic test instrument used to observe multiple digital signals simultaneously.",
      "It samples the logic levels of connected signals and displays them as waveforms, making it easier to study timing relationships, state changes, and digital communication.",
      "Logic analysers are especially useful for debugging digital circuits and interfaces such as UART, SPI, and I²C.",
    ],
    intuition:
      "Think of a logic analyser as a multi-channel camera for digital signals. Instead of only showing whether a signal is HIGH or LOW at one moment, it records changes over time so you can inspect what happened.",
    usedFor: [
      "Debugging digital logic circuits",
      "Observing HIGH and LOW signal transitions",
      "Analyzing timing relationships between digital signals",
      "Debugging UART communication",
      "Analyzing SPI and I²C communication",
      "Checking clock and data signals",
      "Studying microcontroller and embedded-system behavior",
    ],
    specs: [
      { label: "Type", value: "Digital signal measurement instrument" },
      { label: "Inputs", value: "Multiple digital channels" },
      { label: "Signals", value: "Digital HIGH / LOW logic levels" },
      { label: "Display", value: "Digital waveforms versus time" },
      {
        label: "Analysis",
        value: "Timing, transitions, states, and protocols",
      },
      { label: "Common Protocols", value: "UART, SPI, I²C" },
    ],
    tips: [
      "Connect the logic analyser ground to the circuit ground.",
      "Connect each input channel to the correct digital signal before starting a capture.",
      "Choose a sampling rate high enough to reliably capture the fastest signal transitions.",
      "Label channels clearly so that clock, data, and control signals are easy to identify.",
      "Use protocol decoders when analyzing interfaces such as UART, SPI, or I²C.",
      "Make sure the input voltage levels are compatible with the logic analyser.",
      "Use an appropriate capture duration so the required portion of the signal is recorded.",
    ],
    commonMistakes: [
      "Forgetting to connect the analyser ground to the circuit ground.",
      "Connecting a channel to the wrong signal.",
      "Using a sampling rate that is too low for the signal being measured.",
      "Exceeding the input voltage limits of the logic analyser.",
      "Confusing digital logic levels with analog voltage measurements.",
      "Incorrectly assigning protocol decoder settings.",
      "Trying to analyze a signal without capturing enough time around the event of interest.",
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

  oscilloscope: {
    slug: "oscilloscope",
    name: "Oscilloscope / CRO",
    kind: "oscilloscope",
    tagline:
      "Displays electrical signals as waveforms so their voltage, timing, and shape can be analyzed.",
    description: [
      "An oscilloscope is an electronic measurement instrument used to observe how an electrical signal changes over time.",
      "A Cathode-Ray Oscilloscope (CRO) displays the input signal as a waveform, allowing characteristics such as voltage, time period, frequency, amplitude, and phase difference to be studied.",
      "Unlike a voltmeter, which mainly provides a voltage reading, an oscilloscope allows students to see the actual shape and behavior of a signal.",
    ],
    intuition:
      "Think of an oscilloscope as a camera for electrical signals. Instead of taking a picture of an object, it draws how voltage changes with time so you can see the signal's shape and behavior.",
    usedFor: [
      "Observing electrical waveforms",
      "Measuring signal amplitude and frequency",
      "Measuring time period and pulse width",
      "Studying sine, square, and triangular waves",
      "Comparing phase differences between signals",
      "Debugging analog and digital circuits",
      "Analyzing transient and time-varying signals",
    ],
    specs: [
      { label: "Type", value: "Digital Oscilloscope / CRO" },
      { label: "Display", value: "Voltage versus time waveform" },
      {
        label: "Measured Quantities",
        value: "Voltage, time, frequency, period, phase",
      },
      { label: "Inputs", value: "Probe / Channel inputs" },
      { label: "Horizontal Axis", value: "Time" },
      { label: "Vertical Axis", value: "Voltage" },
    ],
    tips: [
      "Connect the probe ground to the circuit ground before measuring a signal.",
      "Choose an appropriate volts-per-division setting for the signal amplitude.",
      "Adjust the time-per-division setting so several useful waveform cycles are visible.",
      "Use the oscilloscope's trigger controls to obtain a stable waveform.",
      "Use a suitable probe attenuation setting such as 1× or 10×.",
      "Avoid exceeding the maximum input voltage of the oscilloscope.",
      "Use measurement cursors or automatic measurements when precise readings are required.",
    ],
    commonMistakes: [
      "Connecting the oscilloscope probe incorrectly.",
      "Forgetting to connect the probe ground.",
      "Using an unsuitable volts-per-division setting.",
      "Using an unsuitable time-per-division setting.",
      "Ignoring the probe attenuation setting.",
      "Connecting the probe to a voltage beyond the oscilloscope's input rating.",
      "Confusing waveform amplitude with peak-to-peak voltage.",
      "Assuming a waveform is unstable when the trigger settings are incorrect.",
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
