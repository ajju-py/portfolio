export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  certId?: string;
  verifyUrl?: string;
  type: 'certification' | 'training';
  highlight?: boolean;
  skills: string[];
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: 'Infrastructure' | 'Software' | 'Networking' | 'Containers';
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  repoUrl?: string;
  details: {
    problem: string;
    architecture: string;
    keyDeliverables: string[];
    securityHardening?: string[];
  };
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: 'Expected' | 'Completed';
  focus: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  role: string;
  type: 'education' | 'certification' | 'milestone';
  description: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Ajay Tandale',
    shortName: 'AJAY.T',
    role: 'Aspiring Cloud & Linux Engineer',
    subRole: 'AWS • Red Hat Linux • Podman • Ansible • Cloud Security',
    headline: 'Building reliable infrastructure with Linux, containers, automation and cloud technologies.',
    summary:
      'B.Tech Computer Science student and Red Hat certified professional focused on Linux administration, container workflows, infrastructure automation, and practical cloud engineering. Building hands-on labs to turn concepts into repeatable, verifiable skills.',
    aboutLong:
      'I am a Computer Science engineering student preparing for cloud engineering and Linux infrastructure roles. My foundation is in Red Hat Enterprise Linux, container development with Podman, networking, and automation. I have earned Red Hat RHCSA and DO188 credentials and am developing AWS skills through a local AWS-compatible lab, AWS CLI, Terraform, and Python/Boto3. I value reproducible labs, readable documentation, least-privilege design, and validating every change instead of relying on assumptions.',
    location: 'Chhatrapati Sambhaji Nagar, Maharashtra, India',
    email: 'ajaytandale8983@gmail.com',
    phone: '+91 7755985578',
    status: 'Open to Cloud / Linux / DevOps Internships',
    githubUrl: 'https://github.com/ajju-py',
    linkedinUrl: 'https://www.linkedin.com/in/ajay-tandale-8030b8231',
    resumeUrl: '/Ajay_Tandale_Resume.pdf',
    verificationId: '260-010-335',
  },

  skillsBento: [
    {
      id: 'linux-systems',
      category: 'LINUX',
      title: 'Linux & Red Hat',
      subtitle: 'System administration and troubleshooting',
      size: 'large',
      description:
        'RHCSA-certified foundation in Linux administration, user and group management, permissions, storage, systemd, scheduled tasks, networking, logs, SELinux, and firewall configuration.',
      technologies: [
        'Red Hat Enterprise Linux',
        'Fedora',
        'SELinux',
        'firewalld',
        'LVM & Storage',
        'systemd',
        'journalctl',
        'SSH',
      ],
      terminalSnippet: 'systemctl --failed\ngetenforce\njournalctl -p warning -b',
    },
    {
      id: 'cloud',
      category: 'CLOUD',
      title: 'AWS & Cloud Fundamentals',
      subtitle: 'CLI-driven practice and infrastructure as code',
      size: 'medium',
      description:
        'Developing cloud engineering skills through hands-on AWS CLI practice, S3 workflows in a local AWS-compatible emulator, Terraform fundamentals, and Python/Boto3 experiments. This is a learning lab, not a claim of production AWS experience.',
      technologies: [
        'AWS CLI',
        'Amazon S3',
        'IAM Concepts',
        'Terraform',
        'Boto3',
        'Cloud Fundamentals',
      ],
      terminalSnippet: 'aws --endpoint-url=http://localhost:4566 s3 ls\nterraform validate',
    },
    {
      id: 'containers',
      category: 'CONTAINERS',
      title: 'Containers & Cloud-Native',
      subtitle: 'Podman, images, storage and networking',
      size: 'medium',
      description:
        'Red Hat DO188-certified container development foundation: building and running containers, working with registries, networks and persistent storage, and understanding containerized application workflows.',
      technologies: [
        'Podman',
        'Docker Fundamentals',
        'Container Registries',
        'Volumes',
        'Container Networking',
        'OpenShift Concepts',
      ],
      terminalSnippet: 'podman images\npodman ps -a\npodman inspect <container>',
    },
    {
      id: 'automation',
      category: 'AUTOMATION',
      title: 'Automation & Infrastructure as Code',
      subtitle: 'Repeatable configuration and workflows',
      size: 'medium',
      description:
        'Building foundational skills in Bash, Python and Ansible to reduce repetitive administration work, document repeatable setup steps, and explore declarative infrastructure management with Terraform.',
      technologies: [
        'Bash',
        'Python',
        'Ansible Fundamentals',
        'Terraform',
        'Git',
        'PowerShell Basics',
      ],
      terminalSnippet: 'ansible-playbook --syntax-check site.yml\nterraform fmt -check',
    },
    {
      id: 'networking',
      category: 'NETWORKING',
      title: 'Networking & Troubleshooting',
      subtitle: 'Understanding connectivity from host to service',
      size: 'medium',
      description:
        'Foundational practice with IP addressing, routing, DNS, DHCP, TCP/IP, HTTP/HTTPS and practical connectivity troubleshooting using command-line diagnostics.',
      technologies: [
        'TCP/IP',
        'DNS / DHCP',
        'HTTP / HTTPS',
        'Routing',
        'iproute2',
        'ss',
        'curl',
      ],
      terminalSnippet: 'ip -brief addr\nip route\nss -tulpn\ncurl -I https://example.com',
    },
    {
      id: 'dev-tools',
      category: 'DEV TOOLS',
      title: 'Developer Workflow',
      subtitle: 'Version control, documentation and debugging',
      size: 'small',
      description:
        'Using Git and GitHub to version code, track changes, maintain project documentation, and work through implementation and debugging tasks.',
      technologies: ['Git', 'GitHub', 'Markdown', 'Debugging'],
      terminalSnippet: 'git status\ngit log --oneline -5\ngit diff',
    },
  ],

  certifications: [
    {
      id: 'rhcsa',
      title: 'Red Hat Certified System Administrator (RHCSA)',
      issuer: 'Red Hat',
      year: '2026',
      certId: '260-010-335',
      verifyUrl: 'https://www.credly.com/badges/b00aaf92-ea21-4884-8fce-379d5082876b',
      type: 'certification',
      highlight: true,
      skills: ['Linux administration', 'Storage', 'Users and permissions', 'systemd', 'SELinux', 'Networking'],
      description:
        'Demonstrates foundational Red Hat Enterprise Linux administration skills across system configuration, storage, user accounts, services, and system troubleshooting.',
    },
    {
      id: 'do188',
      title: 'Red Hat Certified Developer in Cloud-native Applications (EX188 / DO188)',
      issuer: 'Red Hat',
      year: '2026',
      verifyUrl: 'https://www.credly.com/badges/ce5b4a3c-3f7e-4494-93aa-a2e4c380456e',
      type: 'certification',
      highlight: true,
      skills: ['Podman', 'Container images', 'Container networking', 'Volumes', 'Cloud-native basics'],
      description:
        'Demonstrates skills associated with building, running, and managing containerized applications using Podman and Red Hat cloud-native tooling.',
    },
    {
      id: 'infosys-networking',
      title: 'Networking and Web Technology',
      issuer: 'Infosys Springboard',
      year: '2025',
      type: 'certification',
      highlight: false,
      skills: ['TCP/IP', 'Web protocols', 'Network architecture'],
      description:
        'Completed coursework covering computer networks, web communication protocols, and network architecture fundamentals.',
    },
  ],

  projects: [
    {
      id: 'aws-local-lab',
      title: 'AWS CLI & Terraform Practice Lab',
      subtitle: 'Local AWS-compatible cloud engineering environment',
      badge: 'Cloud Engineering Lab',
      category: 'Infrastructure',
      summary:
        'A repeatable learning environment using an AWS-compatible local emulator, AWS CLI, Terraform and Python/Boto3 to practice core cloud workflows without representing local tests as production AWS deployments.',
      description:
        'Configured a local AWS-compatible emulator in a WSL2-based Linux development environment and verified communication with the AWS CLI. Created and inspected a practice S3 bucket and began building a workflow for experimenting with cloud resource lifecycle and infrastructure as code.',
      highlights: [
        'Verified the local emulator health endpoint and AWS CLI connectivity',
        'Created an S3 practice bucket through a local endpoint using the AWS CLI',
        'Used Terraform and Boto3 as learning tools for repeatable infrastructure workflows',
        'Documented emulator limitations, including IAM enforcement and Lambda runtime constraints',
      ],
      technologies: ['AWS CLI', 'Amazon S3 API', 'Terraform', 'Python', 'Boto3', 'WSL2', 'Podman'],
      repoUrl: 'https://github.com/ajju-py',
      details: {
        problem:
          'Cloud service experimentation can create costs and make it harder to repeat early exercises safely. A local lab supports practice of CLI syntax and resource workflows before moving to a real cloud account.',
        architecture:
          'Windows development host with WSL2 Linux, a Podman-hosted AWS-compatible emulator exposing a local endpoint, AWS CLI, Terraform and Python/Boto3 clients.',
        keyDeliverables: [
          'Local emulator health and service connectivity checks',
          'S3 bucket creation and inspection through endpoint-aware AWS CLI commands',
          'A documented starting point for Terraform and Boto3 exercises',
        ],
        securityHardening: [
          'Clearly distinguish local-emulator behavior from actual AWS service behavior',
          'Avoid placing cloud credentials in source control',
          'Validate resource state and clean up practice resources after each exercise',
        ],
      },
    },
    {
      id: 'linux-automation-lab',
      title: 'Linux Administration & RHCSA Practice',
      subtitle: 'Repeatable system administration scenarios',
      badge: 'Linux Systems',
      category: 'Infrastructure',
      summary:
        'A practical collection of Linux administration learning scenarios aligned with RHCSA topics, focusing on storage, services, access control, scheduled tasks and troubleshooting.',
      description:
        'Built hands-on practice around Red Hat Enterprise Linux administration tasks and exam-style scenarios. The goal is to understand each command, verify the final system state, and document the process rather than relying on copy-pasted commands.',
      highlights: [
        'Practiced systemd service management, logs and boot troubleshooting',
        'Worked with users, groups, permissions, storage and filesystem concepts',
        'Studied SELinux, firewall configuration, cron and systemd timers',
        'Maintained an organized public repository for notes and practice materials',
      ],
      technologies: ['RHEL', 'Linux', 'systemd', 'SELinux', 'firewalld', 'Bash', 'Git'],
      repoUrl: 'https://github.com/ajju-py/REDHAT-RHCSA-EX200',
      details: {
        problem:
          'Linux administration skills require repeatable practice and verification across multiple system configuration areas.',
        architecture:
          'Linux virtual or local lab machines configured through shell commands, with state checks, logs and repository documentation used to validate each exercise.',
        keyDeliverables: [
          'Exam-style administration scenarios and command notes',
          'Service, storage, permissions and networking verification steps',
          'Version-controlled learning notes and lab materials',
        ],
      },
    },
    {
      id: 'building-passport',
      title: 'Building Passport — Building Information Management',
      subtitle: 'Role-based building information platform',
      badge: 'Full-Stack Engineering',
      category: 'Software',
      summary:
        'A web platform prototype for organizing building information and supporting distinct workflows for property owners, engineers, administrators and public users.',
      description:
        'Contributed to the implementation of a Building Information Management platform with a public-facing product site, dashboard-oriented flows, and authentication workflows. This project demonstrates experience working with application structure and frontend/backend integration alongside infrastructure-focused learning.',
      highlights: [
        'Implemented role-aware application workflows for owners, engineers, administrators and public users',
        'Worked with authentication flows using password hashing and signed tokens',
        'Built the application on a modern React/Next.js stack',
        'Documented local database setup requirements and development behavior',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'JWT', 'MongoDB'],
      repoUrl: 'https://github.com/ajju-py/Building-passport-Ghar-ki-pehchan',
      details: {
        problem:
          'Building-related information can be fragmented across documents and stakeholders, making it difficult to access consistent records and role-appropriate workflows.',
        architecture:
          'Web application with a Next.js user interface, application route handlers, role-aware authentication, and a MongoDB-backed data layer when the database service is available.',
        keyDeliverables: [
          'Public product website and application navigation',
          'Authentication and role-specific dashboard foundations',
          'Development documentation for environment and database setup',
        ],
      },
    },
    {
      id: 'virtual-mandi',
      title: 'Virtual Mandi — Agricultural Marketplace',
      subtitle: 'Digital marketplace concept for agricultural commerce',
      badge: 'Academic Project',
      category: 'Software',
      summary:
        'An academic marketplace concept intended to connect agricultural producers and buyers through digital listings and a structured transaction flow.',
      description:
        'Worked on the Virtual Mandi concept with a focus on using digital workflows to make agricultural products easier to discover and compare. The project is presented as a prototype/academic initiative and not as a production marketplace.',
      highlights: [
        'Explored producer-to-buyer product listing workflows',
        'Considered pricing, quantities and listing information as structured data',
        'Used the project to practice application planning and problem decomposition',
      ],
      technologies: ['Application Design', 'Data Modeling', 'Web Development'],
      repoUrl: 'https://github.com/ajju-py/Mandal',
      details: {
        problem:
          'Small producers may have limited direct digital access to prospective buyers and transparent product discovery.',
        architecture:
          'Prototype marketplace concept organized around product listings, producer information, buyer discovery and transaction stages.',
        keyDeliverables: [
          'Marketplace concept and user workflows',
          'Product listing and filtering requirements',
          'Initial application structure and documentation',
        ],
      },
    },
  ] as Project[],

  education: [
    {
      institution: 'Maharashtra Institute of Technology',
      degree: 'B.Tech in Computer Science',
      period: '2024 – 2027 (Expected)',
      location: 'Chhatrapati Sambhaji Nagar, Maharashtra, India',
      status: 'Expected',
      focus: 'Operating Systems, Computer Networks, Data Structures, Databases and Cloud Computing',
    },
    {
      institution: 'Marathwada Institute of Technology Engineering College',
      degree: 'Diploma in Computer Engineering',
      period: '2020 – 2023',
      location: 'Chhatrapati Sambhaji Nagar, Maharashtra, India',
      status: 'Completed',
      focus: 'Computer Architecture, C Programming, Object-Oriented Concepts, Hardware and Networking',
    },
  ],

  achievements: [
    {
      title: '1st Rank — Technical Quiz',
      organization: 'Diploma in Computer Engineering',
      description:
        'Earned first rank in a technical quiz competition, demonstrating knowledge of computer hardware and programming fundamentals.',
      icon: 'trophy',
    },
    {
      title: 'Volunteer — Red Hat Academy Day',
      organization: 'MIT Red Hat Academy',
      description:
        'Volunteered during a Red Hat Academy event and assisted peers during Linux and DevOps workshop activities.',
      icon: 'award',
    },
  ],

  timeline: [
    {
      year: '2020 – 2023',
      title: 'Diploma in Computer Engineering',
      role: 'Computer Systems Foundations',
      type: 'education',
      description:
        'Completed diploma-level study covering programming, operating systems, computer architecture, hardware and networking.',
      tags: ['C Programming', 'Operating Systems', 'Hardware', 'Networking'],
    },
    {
      year: '2024 – Present',
      title: 'B.Tech in Computer Science',
      role: 'Computer Science & Infrastructure',
      type: 'education',
      description:
        'Pursuing a B.Tech degree while developing practical Linux administration, container, networking and cloud engineering skills.',
      tags: ['B.Tech CSE', 'Linux', 'Containers', 'Cloud'],
    },
    {
      year: '2025',
      title: 'Networking and Web Technology',
      role: 'Infosys Springboard',
      type: 'milestone',
      description:
        'Completed learning in networking and web technologies and participated in Red Hat Academy workshop activities.',
      tags: ['TCP/IP', 'HTTP/HTTPS', 'Networking', 'DevOps'],
    },
    {
      year: '2026',
      title: 'Red Hat Certifications',
      role: 'RHCSA and DO188 / EX188',
      type: 'certification',
      description:
        'Earned Red Hat credentials in Linux system administration and cloud-native container application development.',
      tags: ['RHCSA', 'DO188', 'Podman', 'Red Hat'],
    },
    {
      year: 'Present',
      title: 'Cloud Engineering Practice',
      role: 'AWS, Terraform and Automation Labs',
      type: 'milestone',
      description:
        'Developing foundational AWS and infrastructure-as-code skills using documented exercises and a local AWS-compatible emulator.',
      tags: ['AWS CLI', 'Terraform', 'Boto3', 'Linux'],
    },
  ],

  currentFocus: [
    {
      title: 'AWS Core Services',
      description:
        'Learning core cloud concepts and practicing CLI workflows around identity, object storage, compute and networking.',
      icon: 'terminal',
    },
    {
      title: 'Infrastructure as Code',
      description:
        'Practicing Terraform fundamentals to describe, validate and manage infrastructure in repeatable workflows.',
      icon: 'cpu',
    },
    {
      title: 'Linux & Container Operations',
      description:
        'Strengthening Linux troubleshooting, Podman workflows, systemd integration, storage, networking and access control.',
      icon: 'box',
    },
    {
      title: 'Automation & Cloud Security',
      description:
        'Building Bash, Python and Ansible skills while studying least privilege, secrets hygiene and configuration validation.',
      icon: 'code',
    },
  ],
};
