// 3D Skills Keyboard Configuration: 24 keys (4 rows of 6 keys)
export enum SkillNames {
  // Row 1: Core Linux & Containers
  LINUX = "linux",
  RHEL = "rhel",
  FEDORA = "fedora",
  OPENSHIFT = "openshift",
  PODMAN = "podman",
  DOCKER = "docker",

  // Row 2: Cloud, IaC & Automation
  AWS = "aws",
  TERRAFORM = "terraform",
  ANSIBLE = "ansible",
  PYTHON = "python",
  BASH = "bash",
  GIT = "git",

  // Row 3: Security, Web & Platform
  GITHUB = "github",
  NGINX = "nginx",
  MARIADB = "mariadb",
  SELINUX = "selinux",
  NETWORKING = "networking",
  CICD = "cicd",

  // Row 4: Enterprise Linux Subsystems & Cloud Core
  SYSTEMD = "systemd",
  FIREWALLD = "firewalld",
  LVM = "lvm",
  SSH = "ssh",
  CLOUDWATCH = "cloudwatch",
  S3 = "s3",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  keyboardIcon?: string;
  keyboardColor?: string;
  shortcut?: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  // Row 1
  [SkillNames.LINUX]: {
    id: 1,
    name: "linux",
    label: "Linux",
    shortDescription: "Tux-powered Linux operating system, kernel, permissions, and shell environment.",
    color: "#f5ba24",
    icon: "/images/tech/linux.svg",
    keyboardIcon: "/assets/keyboard/logos/linux.svg",
    keyboardColor: "#2b2e35",
    shortcut: "Digit1",
  },
  [SkillNames.RHEL]: {
    id: 2,
    name: "rhel",
    label: "Red Hat (RHEL)",
    shortDescription: "Red Hat Enterprise Linux 9, RHCSA standards, and enterprise package lifecycle.",
    color: "#ee0000",
    icon: "/images/tech/rhel.svg",
    keyboardIcon: "/assets/keyboard/logos/rhel.svg",
    keyboardColor: "#b30000",
    shortcut: "Digit2",
  },
  [SkillNames.FEDORA]: {
    id: 3,
    name: "fedora",
    label: "Fedora",
    shortDescription: "Upstream community innovation, leading-edge Linux workstation and server features.",
    color: "#294172",
    icon: "/images/tech/fedora.svg",
    keyboardIcon: "/assets/keyboard/logos/fedora.svg",
    keyboardColor: "#1d2e52",
    shortcut: "Digit3",
  },
  [SkillNames.OPENSHIFT]: {
    id: 4,
    name: "openshift",
    label: "OpenShift",
    shortDescription: "Enterprise Kubernetes platform, containerized applications, and DO188 workflows.",
    color: "#ee0000",
    icon: "/images/tech/openshift.svg",
    keyboardIcon: "/assets/keyboard/logos/openshift.svg",
    keyboardColor: "#c21313",
    shortcut: "Digit4",
  },
  [SkillNames.PODMAN]: {
    id: 5,
    name: "podman",
    label: "Podman",
    shortDescription: "Daemonless, rootless container execution and native systemd Quadlet orchestration.",
    color: "#892ca0",
    icon: "/images/tech/podman.svg",
    keyboardIcon: "/assets/keyboard/logos/podman.svg",
    keyboardColor: "#691f7c",
    shortcut: "Digit5",
  },
  [SkillNames.DOCKER]: {
    id: 6,
    name: "docker",
    label: "Docker",
    shortDescription: "Multi-stage container builds, image layer caching, and docker-compose stacks.",
    color: "#2496ed",
    icon: "/images/tech/docker.svg",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#0072b2",
    shortcut: "Digit6",
  },

  // Row 2
  [SkillNames.AWS]: {
    id: 7,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure: S3 private origins, CloudFront OAC, IAM policies, and CloudWatch.",
    color: "#ff9900",
    icon: "/images/tech/aws.svg",
    keyboardIcon: "/assets/keyboard/logos/aws.svg",
    keyboardColor: "#ff9208",
    shortcut: "KeyQ",
  },
  [SkillNames.TERRAFORM]: {
    id: 8,
    name: "terraform",
    label: "Terraform",
    shortDescription: "Infrastructure as Code, modular configurations, remote state, and repeatable deployments.",
    color: "#844fba",
    icon: "/images/tech/terraform.svg",
    keyboardIcon: "/assets/keyboard/logos/terraform.svg",
    keyboardColor: "#613396",
    shortcut: "KeyW",
  },
  [SkillNames.ANSIBLE]: {
    id: 9,
    name: "ansible",
    label: "Ansible",
    shortDescription: "Idempotent configuration management, playbooks, multi-node automation, and Vault.",
    color: "#ffffff",
    icon: "/images/tech/ansible.svg",
    keyboardIcon: "/assets/keyboard/logos/ansible.svg",
    keyboardColor: "#1e293b",
    shortcut: "KeyE",
  },
  [SkillNames.PYTHON]: {
    id: 10,
    name: "python",
    label: "Python",
    shortDescription: "Infrastructure scripting, automation tools, data validation, and backend APIs.",
    color: "#3776ab",
    icon: "/images/tech/python.svg",
    keyboardIcon: "/assets/keyboard/logos/python.svg",
    keyboardColor: "#22567c",
    shortcut: "KeyR",
  },
  [SkillNames.BASH]: {
    id: 11,
    name: "bash",
    label: "Bash",
    shortDescription: "POSIX shell scripting, automated system administration, pipes, and text filtering.",
    color: "#4eaa25",
    icon: "/images/tech/bash.svg",
    keyboardIcon: "/assets/keyboard/logos/bash.svg",
    keyboardColor: "#2f6916",
    shortcut: "KeyT",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control, branch management, merge strategies, and commit hygiene.",
    color: "#f05032",
    icon: "/images/tech/git.svg",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#c43419",
    shortcut: "KeyY",
  },

  // Row 3
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Source collaboration, repository management, GitHub Actions, and releases.",
    color: "#ffffff",
    icon: "/images/tech/github.svg",
    keyboardIcon: "/assets/keyboard/logos/github.svg",
    keyboardColor: "#24292e",
    shortcut: "KeyA",
  },
  [SkillNames.NGINX]: {
    id: 14,
    name: "nginx",
    label: "Nginx",
    shortDescription: "High-performance reverse proxy, SSL/TLS termination, and web server configuration.",
    color: "#009639",
    icon: "/images/tech/nginx.svg",
    keyboardIcon: "/assets/keyboard/logos/nginx.svg",
    keyboardColor: "#007a2e",
    shortcut: "KeyS",
  },
  [SkillNames.MARIADB]: {
    id: 15,
    name: "mariadb",
    label: "MariaDB",
    shortDescription: "Relational database administration, SQL querying, user privilege control, and backups.",
    color: "#003545",
    icon: "/images/tech/mariadb.svg",
    keyboardIcon: "/assets/keyboard/logos/mariadb.svg",
    keyboardColor: "#084759",
    shortcut: "KeyD",
  },
  [SkillNames.SELINUX]: {
    id: 16,
    name: "selinux",
    label: "SELinux",
    shortDescription: "Mandatory Access Control, targeted policy enforcement, booleans, and context relabeling.",
    color: "#eab308",
    icon: "/images/tech/selinux.svg",
    keyboardIcon: "/assets/keyboard/logos/selinux.svg",
    keyboardColor: "#a16207",
    shortcut: "KeyF",
  },
  [SkillNames.NETWORKING]: {
    id: 17,
    name: "networking",
    label: "Networking",
    shortDescription: "TCP/IP architecture, DNS resolution, subnetting, routing tables, and HTTP/HTTPS protocols.",
    color: "#0284c7",
    icon: "/images/tech/networking.svg",
    keyboardIcon: "/assets/keyboard/logos/networking.svg",
    keyboardColor: "#0369a1",
    shortcut: "KeyG",
  },
  [SkillNames.CICD]: {
    id: 18,
    name: "cicd",
    label: "CI/CD",
    shortDescription: "Continuous integration pipelines, automated linting, test suites, and delivery stages.",
    color: "#10b981",
    icon: "/images/tech/cicd.svg",
    keyboardIcon: "/assets/keyboard/logos/cicd.svg",
    keyboardColor: "#047857",
    shortcut: "KeyH",
  },

  // Row 4
  [SkillNames.SYSTEMD]: {
    id: 19,
    name: "systemd",
    label: "systemd",
    shortDescription: "Linux service unit creation, timer automation, journalctl auditing, and target states.",
    color: "#ef4444",
    icon: "/images/tech/systemd.svg",
    keyboardIcon: "/assets/keyboard/logos/systemd.svg",
    keyboardColor: "#b91c1c",
    shortcut: "KeyZ",
  },
  [SkillNames.FIREWALLD]: {
    id: 20,
    name: "firewalld",
    label: "firewalld",
    shortDescription: "Dynamic firewall management, network zone isolation, and port forwarding rules.",
    color: "#f97316",
    icon: "/images/tech/firewalld.svg",
    keyboardIcon: "/assets/keyboard/logos/firewalld.svg",
    keyboardColor: "#c2410c",
    shortcut: "KeyX",
  },
  [SkillNames.LVM]: {
    id: 21,
    name: "lvm",
    label: "LVM Storage",
    shortDescription: "Logical Volume Management: dynamic volume resizing, volume groups, and persistent mounting.",
    color: "#38bdf8",
    icon: "/images/tech/lvm.svg",
    keyboardIcon: "/assets/keyboard/logos/lvm.svg",
    keyboardColor: "#0284c7",
    shortcut: "KeyC",
  },
  [SkillNames.SSH]: {
    id: 22,
    name: "ssh",
    label: "SSH Security",
    shortDescription: "OpenSSH cryptographic key-based authentication, config profiles, and server hardening.",
    color: "#94a3b8",
    icon: "/images/tech/ssh.svg",
    keyboardIcon: "/assets/keyboard/logos/ssh.svg",
    keyboardColor: "#334155",
    shortcut: "KeyV",
  },
  [SkillNames.CLOUDWATCH]: {
    id: 23,
    name: "cloudwatch",
    label: "CloudWatch",
    shortDescription: "AWS metric monitoring, synthetic alarms, infrastructure logs, and latency dashboards.",
    color: "#e11d48",
    icon: "/images/tech/cloudwatch.svg",
    keyboardIcon: "/assets/keyboard/logos/cloudwatch.svg",
    keyboardColor: "#be123c",
    shortcut: "KeyB",
  },
  [SkillNames.S3]: {
    id: 24,
    name: "s3",
    label: "Amazon S3",
    shortDescription: "Object storage architecture, bucket policies, encryption at rest, and lifecycle rules.",
    color: "#16a34a",
    icon: "/images/tech/s3.svg",
    keyboardIcon: "/assets/keyboard/logos/s3.svg",
    keyboardColor: "#15803d",
    shortcut: "KeyN",
  },
};

export type Experience = {
  id: number;
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [{ start: "2024", end: "Present" }],
    title: "Cloud & Linux Systems Engineering (Hands-on Labs)",
    company: "Red Hat Academy & Practical Infrastructure · Sambhajinagar",
    description: [
      "Configured and managed Red Hat Enterprise Linux (RHEL 9) environments, systemd services, SELinux enforcement, and LVM storage.",
      "Architected secure AWS cloud infrastructure utilizing Terraform (IaC), IAM least-privilege policies, S3, and CloudWatch.",
      "Engineered automated server deployment workflows with Ansible playbooks and rootless Podman containerization.",
      "Validated enterprise Linux security configurations, firewalld network rules, and automated system maintenance scripts.",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.RHEL,
      SkillNames.AWS,
      SkillNames.TERRAFORM,
      SkillNames.ANSIBLE,
      SkillNames.PODMAN,
      SkillNames.DOCKER,
      SkillNames.SELINUX,
    ],
  },
  {
    id: 2,
    periods: [{ start: "2024", end: "2027 (Expected)" }],
    title: "B.Tech in Computer Science",
    company: "Maharashtra Institute of Technology · Chhatrapati Sambhajinagar",
    description: [
      "Focused on Cloud Computing, Operating Systems, Linux Administration, Computer Networks, and Infrastructure Automation.",
      "Earned Red Hat Certified System Administrator (RHCSA EX200) certification (2026).",
      "Earned Red Hat Certified Developer in Cloud-native Applications (DO188) credential (2026).",
      "Completed Infosys Springboard certifications in Networking & Web Technology (2025).",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.OPENSHIFT,
      SkillNames.NETWORKING,
      SkillNames.GIT,
      SkillNames.PYTHON,
      SkillNames.BASH,
    ],
  },
  {
    id: 3,
    periods: [{ start: "2020", end: "2023" }],
    title: "Diploma in Computer Engineering",
    company: "Marathwada Institute of Technology Engineering College",
    description: [
      "Completed 3-year foundational computer engineering curriculum with First Class Distinction.",
      "Secured 1st Rank in State-level Technical Quiz Competition.",
      "Designed and deployed an ESP32 Smart Energy Meter with real-time automated theft detection and telemetry.",
    ],
    skills: [
      SkillNames.LINUX,
      SkillNames.GIT,
      SkillNames.NETWORKING,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
