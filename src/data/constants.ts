// 3D Skills Keyboard Configuration: 24 keys (4 rows of 6 keys)
export enum SkillNames {
  // Row 1: Core Linux & Containers
  LINUX = "linux",
  RHEL = "rhel",
  RHCSA = "rhcsa",
  OPENSHIFT = "openshift",
  PODMAN = "podman",
  DOCKER = "docker",

  // Row 2: Cloud, IaC & Scripting
  AWS = "aws",
  TERRAFORM = "terraform",
  ANSIBLE = "ansible",
  PYTHON = "python",
  BASH = "bash",
  GIT = "git",

  // Row 3: Infrastructure, Web & Security
  GITHUB = "github",
  NGINX = "nginx",
  MARIADB = "mariadb",
  SELINUX = "selinux",
  NETWORKING = "networking",
  CICD = "cicd",

  // Row 4: Enterprise Linux Subsystems & Cloud Services
  SYSTEMD = "systemd",
  FIREWALLD = "firewalld",
  LVM = "lvm",
  SSH = "ssh",
  CLOUDWATCH = "cloudwatch",
  S3 = "s3",
}

export type SkillCategory = "linux" | "cloud" | "automation" | "containers" | "networking" | "development";

export type Skill = {
  id: number;
  name: string;
  label: string;
  category: SkillCategory;
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
    label: "Linux Administration",
    category: "linux",
    shortDescription: "RHEL & Fedora system administration, user & permission hierarchy, journalctl logging.",
    color: "#f5ba24",
    icon: "/images/tech/linux.svg",
    keyboardIcon: "/assets/keyboard/logos/linux.svg",
    keyboardColor: "#2b2e35",
    shortcut: "Digit1",
  },
  [SkillNames.RHEL]: {
    id: 2,
    name: "rhel",
    label: "Red Hat Enterprise Linux",
    category: "linux",
    shortDescription: "RHEL 9.x enterprise server management, package lifecycle, security baselines.",
    color: "#ee0000",
    icon: "/images/tech/rhel.svg",
    keyboardIcon: "/assets/keyboard/logos/rhel.svg",
    keyboardColor: "#b30000",
    shortcut: "Digit2",
  },
  [SkillNames.RHCSA]: {
    id: 3,
    name: "rhcsa",
    label: "RHCSA (EX200)",
    category: "linux",
    shortDescription: "Red Hat Certified System Administrator credential — storage, systemd, SELinux, and firewalld.",
    color: "#ee0000",
    icon: "/images/tech/rhcsa.svg",
    keyboardIcon: "/assets/keyboard/logos/rhcsa.svg",
    keyboardColor: "#cc0000",
    shortcut: "Digit3",
  },
  [SkillNames.OPENSHIFT]: {
    id: 4,
    name: "openshift",
    label: "Red Hat OpenShift",
    category: "containers",
    shortDescription: "Enterprise Kubernetes platform, containerized application lifecycle, and DO101/DO188 lab workflows.",
    color: "#ee0000",
    icon: "/images/tech/openshift.svg",
    keyboardIcon: "/assets/keyboard/logos/openshift.svg",
    keyboardColor: "#bf1313",
    shortcut: "Digit4",
  },
  [SkillNames.PODMAN]: {
    id: 5,
    name: "podman",
    label: "Podman",
    category: "containers",
    shortDescription: "Daemonless, rootless container engine, pod generation, and multi-container deployment.",
    color: "#892ca0",
    icon: "/images/tech/podman.svg",
    keyboardIcon: "/assets/keyboard/logos/podman.svg",
    keyboardColor: "#7a2290",
    shortcut: "Digit5",
  },
  [SkillNames.DOCKER]: {
    id: 6,
    name: "docker",
    label: "Docker",
    category: "containers",
    shortDescription: "Multi-stage container builds, network isolation, bind mounts, and container registries.",
    color: "#2496ed",
    icon: "/images/tech/docker.png",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#0284c7",
    shortcut: "Digit6",
  },

  // Row 2
  [SkillNames.AWS]: {
    id: 7,
    name: "aws",
    label: "AWS Cloud",
    category: "cloud",
    shortDescription: "Core cloud architecture: Amazon S3, CloudFront, IAM least privilege, and CloudWatch.",
    color: "#ff9900",
    icon: "/images/tech/aws.svg",
    keyboardIcon: "/assets/keyboard/logos/aws.svg",
    keyboardColor: "#d97706",
    shortcut: "KeyQ",
  },
  [SkillNames.TERRAFORM]: {
    id: 8,
    name: "terraform",
    label: "Terraform (IaC)",
    category: "automation",
    shortDescription: "Declarative infrastructure provisioning, modular architectures, state management.",
    color: "#844fba",
    icon: "/images/tech/terraform.svg",
    keyboardIcon: "/assets/keyboard/logos/terraform.svg",
    keyboardColor: "#6d28d9",
    shortcut: "KeyW",
  },
  [SkillNames.ANSIBLE]: {
    id: 9,
    name: "ansible",
    label: "Ansible Automation",
    category: "automation",
    shortDescription: "Idempotent configuration management, playbooks, roles, inventory, and Ansible Vault.",
    color: "#5bbdbf",
    icon: "/images/tech/ansible.svg",
    keyboardIcon: "/assets/keyboard/logos/ansible.svg",
    keyboardColor: "#1f2937",
    shortcut: "KeyE",
  },
  [SkillNames.PYTHON]: {
    id: 10,
    name: "python",
    label: "Python",
    category: "development",
    shortDescription: "Infrastructure automation scripts, system audit tooling, and data manipulation.",
    color: "#3776ab",
    icon: "/images/tech/python.svg",
    keyboardIcon: "/assets/keyboard/logos/python.svg",
    keyboardColor: "#2563eb",
    shortcut: "KeyR",
  },
  [SkillNames.BASH]: {
    id: 11,
    name: "bash",
    label: "Bash Scripting",
    category: "automation",
    shortDescription: "CLI automation, log parsing, automated user auditing, and maintenance scripts.",
    color: "#4eaa25",
    icon: "/images/tech/bash.svg",
    keyboardIcon: "/assets/keyboard/logos/bash.svg",
    keyboardColor: "#15803d",
    shortcut: "KeyT",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git Version Control",
    category: "development",
    shortDescription: "Branching strategies, history rewriting, atomic commits, and repository governance.",
    color: "#f05032",
    icon: "/images/tech/git.png",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#dc2626",
    shortcut: "KeyY",
  },

  // Row 3
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    category: "development",
    shortDescription: "Collaboration platform, repository security, issues, releases, and CI triggers.",
    color: "#ffffff",
    icon: "/assets/keyboard/logos/github.svg",
    keyboardIcon: "/assets/keyboard/logos/github.svg",
    keyboardColor: "#1e293b",
    shortcut: "KeyA",
  },
  [SkillNames.NGINX]: {
    id: 14,
    name: "nginx",
    label: "Nginx Web Server",
    category: "networking",
    shortDescription: "High-performance reverse proxying, TLS termination, load balancing, and header rules.",
    color: "#009639",
    icon: "/assets/keyboard/logos/nginx.svg",
    keyboardIcon: "/assets/keyboard/logos/nginx.svg",
    keyboardColor: "#059669",
    shortcut: "KeyS",
  },
  [SkillNames.MARIADB]: {
    id: 15,
    name: "mariadb",
    label: "MariaDB / SQL",
    category: "development",
    shortDescription: "Relational database server management, user privileges, backup automation, and queries.",
    color: "#003545",
    icon: "/images/tech/mariadb.svg",
    keyboardIcon: "/assets/keyboard/logos/mariadb.svg",
    keyboardColor: "#0f766e",
    shortcut: "KeyD",
  },
  [SkillNames.SELINUX]: {
    id: 16,
    name: "selinux",
    label: "SELinux Security",
    category: "linux",
    shortDescription: "Mandatory Access Control, targeted policy enforcement, context troubleshooting with restorecon.",
    color: "#f5ba24",
    icon: "/images/tech/selinux.svg",
    keyboardIcon: "/assets/keyboard/logos/selinux.svg",
    keyboardColor: "#854d0e",
    shortcut: "KeyF",
  },
  [SkillNames.NETWORKING]: {
    id: 17,
    name: "networking",
    label: "TCP/IP & Networking",
    category: "networking",
    shortDescription: "Subnetting, routing, DNS resolution, SSH tunneling, HTTP/HTTPS protocols, Wireshark.",
    color: "#38bdf8",
    icon: "/images/tech/networking.svg",
    keyboardIcon: "/assets/keyboard/logos/networking.svg",
    keyboardColor: "#0369a1",
    shortcut: "KeyG",
  },
  [SkillNames.CICD]: {
    id: 18,
    name: "cicd",
    label: "CI/CD Automation",
    category: "automation",
    shortDescription: "Continuous integration workflows, automated testing, container builds, and deployment pipelines.",
    color: "#6366f1",
    icon: "/images/tech/cicd.svg",
    keyboardIcon: "/assets/keyboard/logos/cicd.svg",
    keyboardColor: "#4338ca",
    shortcut: "KeyH",
  },

  // Row 4
  [SkillNames.SYSTEMD]: {
    id: 19,
    name: "systemd",
    label: "systemd Service Control",
    category: "linux",
    shortDescription: "Service unit files, target configurations, socket activation, and journalctl analysis.",
    color: "#22c55e",
    icon: "/images/tech/systemd.svg",
    keyboardIcon: "/assets/keyboard/logos/systemd.svg",
    keyboardColor: "#15803d",
    shortcut: "KeyZ",
  },
  [SkillNames.FIREWALLD]: {
    id: 20,
    name: "firewalld",
    label: "firewalld & Security",
    category: "linux",
    shortDescription: "Network zone management, rich rules, service permissions, and port protection.",
    color: "#f97316",
    icon: "/images/tech/firewalld.svg",
    keyboardIcon: "/assets/keyboard/logos/firewalld.svg",
    keyboardColor: "#c2410c",
    shortcut: "KeyX",
  },
  [SkillNames.LVM]: {
    id: 21,
    name: "lvm",
    label: "LVM Storage Management",
    category: "linux",
    shortDescription: "Physical volumes, volume groups, dynamic logical volume resizing, and XFS/ext4 filesystems.",
    color: "#a855f7",
    icon: "/images/tech/lvm.svg",
    keyboardIcon: "/assets/keyboard/logos/lvm.svg",
    keyboardColor: "#7e22ce",
    shortcut: "KeyC",
  },
  [SkillNames.SSH]: {
    id: 22,
    name: "ssh",
    label: "SSH Hardening",
    category: "networking",
    shortDescription: "Key-based authentication, config hardening, port restrictions, and secure tunneling.",
    color: "#22d3ee",
    icon: "/images/tech/ssh.svg",
    keyboardIcon: "/assets/keyboard/logos/ssh.svg",
    keyboardColor: "#0e7490",
    shortcut: "KeyV",
  },
  [SkillNames.CLOUDWATCH]: {
    id: 23,
    name: "cloudwatch",
    label: "Amazon CloudWatch",
    category: "cloud",
    shortDescription: "Metrics collection, alarm thresholds, log auditing, and infrastructure observability.",
    color: "#f59e0b",
    icon: "/images/tech/cloudwatch.svg",
    keyboardIcon: "/assets/keyboard/logos/cloudwatch.svg",
    keyboardColor: "#b45309",
    shortcut: "KeyB",
  },
  [SkillNames.S3]: {
    id: 24,
    name: "s3",
    label: "Amazon S3 & Storage",
    category: "cloud",
    shortDescription: "Encrypted object storage, versioning, Origin Access Control (OAC), lifecycle policies.",
    color: "#e11d48",
    icon: "/images/tech/s3.svg",
    keyboardIcon: "/assets/keyboard/logos/s3.svg",
    keyboardColor: "#9f1239",
    shortcut: "KeyN",
  },
};

export interface TechnicalSkillCategory {
  title: string;
  badge: string;
  skills: string[];
}

export const TECHNICAL_SKILL_CATEGORIES: TechnicalSkillCategory[] = [
  {
    title: "Cloud (AWS)",
    badge: "AWS Infrastructure",
    skills: [
      "AWS Fundamentals",
      "Amazon S3",
      "Amazon CloudFront",
      "Origin Access Control (OAC)",
      "AWS IAM (Policies & Least Privilege)",
      "Amazon CloudWatch",
      "S3 Encryption & Versioning",
      "HTTPS Security",
    ],
  },
  {
    title: "Infrastructure as Code & Automation",
    badge: "IaC & CI/CD",
    skills: [
      "Terraform (Variables, Outputs, Modules)",
      "Ansible (Playbooks, Roles, Inventory)",
      "Ansible Vault",
      "YAML",
      "Bash Scripting",
      "Python",
    ],
  },
  {
    title: "Linux & Enterprise Systems",
    badge: "RHEL & Systems",
    skills: [
      "Red Hat Enterprise Linux (RHEL 9.x)",
      "Linux Administration",
      "SELinux Enforcing",
      "firewalld",
      "SSH Key Hardening",
      "Logical Volume Manager (LVM)",
      "Filesystem Management (XFS/ext4)",
      "systemd Services & Timers",
      "User & Permission Management",
    ],
  },
  {
    title: "Containers & Orchestration",
    badge: "Containers",
    skills: [
      "Docker",
      "Podman (Rootless Containers)",
      "Red Hat OpenShift (Hands-on Lab Exposure)",
      "Container Networking & Storage",
      "Container Registries",
    ],
  },
  {
    title: "Networking & Protocols",
    badge: "Networking",
    skills: [
      "TCP/IP Fundamentals",
      "Subnetting & Routing",
      "SSH & Tunneling",
      "HTTP/HTTPS Protocols",
      "DNS Configuration",
      "Wireshark Traffic Analysis",
    ],
  },
  {
    title: "Development & Version Control",
    badge: "Development",
    skills: [
      "Python",
      "SQL (Working Knowledge)",
      "Git & Branching",
      "GitHub",
      "GitHub Actions (CI/CD, Exploratory)",
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Maharashtra Institute of Technology",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    period: "Sept 2024 – July 2027 (Expected)",
    description: "Focusing on Cloud Architecture, Operating Systems, Linux Administration, Distributed Systems, Containerization, and Information Security.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Marathwada Institute of Technology Engineering College",
    location: "Satara / Chhatrapati Sambhajinagar, Maharashtra, India",
    period: "Dec 2020 – July 2023",
    description: "Core computer science fundamentals, data structures, algorithms, computer networks, and practical systems engineering.",
  },
];

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "rhcsa",
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat (EX200)",
    year: "2026",
    description: "Demonstrated professional core system administration competence in Red Hat Enterprise Linux environments.",
  },
  {
    id: "do188",
    title: "Red Hat Certified Developer in Cloud-native Applications (DO188)",
    issuer: "Red Hat (EX188)",
    year: "2026",
    description: "Demonstrated practical proficiency in container technologies, Podman, and cloud-native application deployment.",
  },
  {
    id: "quiz-rank-1",
    title: "Secured 1st Rank in Technical Quiz",
    issuer: "Diploma in Computer Engineering",
    year: "2022",
    description: "Awarded First Rank across all engineering batches for computer systems, networking, and programming problem solving.",
  },
];

export const themeDisclaimers = {
  light: [
    "Switching to light theme...",
    "High-contrast day mode activated.",
  ],
  dark: [
    "Welcome to the developer terminal dark mode.",
    "Dark theme active — optimal for terminal and cloud console auditing.",
  ],
};
