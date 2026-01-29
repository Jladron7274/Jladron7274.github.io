export const siteConfig = {
  name: "Jorge Ladron de Guevara",
  title: "Cybersecurity Student | Texas A&M University",
  description:
    "Security+ certified student focused on SOC operations, phishing analysis, ICS/OT security, and network security. Seeking an internship or entry-level full-time cybersecurity role to build hands-on experience and contribute to strengthening organizational defenses.",

  accentColor: "#1d4ed8",

  social: {
    email: "jladron7274@tamu.edu",
    linkedin: "https://www.linkedin.com/in/jorgeldg7274/",
    twitter: "",
    github: "https://github.com/Jladron7274"
  },

  aboutMe:
    "Security+ certified student focused on SOC operations, phishing analysis, ICS/OT security, and network security. Seeking an internship or entry-level full-time cybersecurity role to build hands-on experience and contribute to strengthening organizational defenses.",

  skills: [
    // Programming
    "Python", "C", "Assembly",
    // Security & Platforms
    "Linux", "Wazuh", "Splunk", "Network Fundamentals", "Wireshark",
    // Domains
    "Network Security", "Incident Response", "Phishing Investigation", "ICS/OT Security",
    // Other
    "Bilingual: Spanish"
  ],

  // Show your most relevant security work as "projects"
  projects: [
    {
      name: "SOC Automation Lab",
      description:
        "Deployed a simulated SOC with Wazuh SIEM, TheHive, and Cortex. Automated alert ingestion, enrichment, and case creation to reduce manual triage time and streamline incident response.",
      link: "", // add a repo/readme link later if you want
      skills: ["Wazuh", "TheHive", "Cortex", "Ubuntu", "Automation"]
    },
    {
      name: "ICS/OT Cybersecurity Research",
      description:
        "Built an IoT-enabled Click PLC testbed and simulated DoS attacks with a Raspberry Pi running Linux to assess network resilience and develop defensive methods for industrial environments.",
      link: "",
      skills: ["Click PLC", "Raspberry Pi", "Linux", "Wireshark"]
    },
    {
      name: "Phishing Email Analysis",
      description:
        "Investigated phishing emails (LetsDefend) by analyzing headers and bodies, extracting malicious URLs, and identifying IOCs with forensic tools to improve detection accuracy.",
      link: "",
      skills: ["Email Header Analysis", "VirusTotal", "Threat Intel"]
    }
  ],

  // Use this section to highlight certifications or leadership instead of software jobs
  experience: [
  {
    company: "CompTIA",
    title: "CompTIA Security+ (SY0-701)",
    dateRange: "June 2025",
    bullets: [
      "Validates core cybersecurity skills: risk management, threat analysis, network/system security, and incident response."
    ],
  },
  {
    company: "Texas A&M University",
    title: "Lean Six Sigma — Yellow Belt",
    dateRange: "December 2024",
    bullets: [
      "Process improvement and statistics coursework; applied problem-solving and efficiency methods."
    ],
  },
],

  education: [
    {
      school: "Texas A&M University — College Station, TX",
      degree: "B.S. in Electronic Systems Engineering Technology (Minor: Cybersecurity)",
      dateRange: "Graduation date: Spring 2026",
      achievements: [
        "GPA: 3.16",
      ]
    }
  ]
};

