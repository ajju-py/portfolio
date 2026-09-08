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
    role: 'Entry-Level Software Engineer',
    subRole: 'Linux / Red Hat / Automation / Containers / Networking',
    headline: 'Software Engineer building with Linux, automation, containers & infrastructure.',
    summary:
      'B.Tech Computer Science student with a strong Red Hat/Linux foundation and hands-on experience in automation, scripting, containerization, networking, and systems troubleshooting.',
    aboutLong:
      'I am an engineering student and systems enthusiast bridging the gap between low-level infrastructure and modern software engineering. With a solid foundation from Red Hat Enterprise Linux certification (RHCSA) and cloud-native container development, I focus on building reliable, automated, and secure software environments. From hardening RHEL servers with custom SELinux policies and Firewalld rules to automating deployments with Bash and developing networked applications, I bring disciplined engineering practices and curious problem-solving to every challenge.',
    location: 'Chhatrapati Sambhaji Nagar, Maharashtra, India',
    email: 'ajaytandale8983@gmail.com',
    phone: '+91 7755985578',
    status: 'Open to Software Engineering Opportunities',
    githubUrl: 'https://github.com/ajju-py',
    linkedinUrl: 'https://www.linkedin.com/in/ajay-tandale-8030b8231',
    resumeUrl: '/Ajay_Tandale_Resume.pdf',
    verificationId: '260-010-335',
  },

  skillsBento: [
    {
      id: 'linux-systems',
      category: 'SYSTEMS',
      title: 'Linux & RHEL Systems',
      subtitle: 'Core OS Administration & Security',
      size: 'large', // 2 col span
      description:
        'Certified administration of Red Hat Enterprise Linux 9.x. Deep experience configuring systemd units, LVM storage pools, SELinux policies, Firewalld network filters, and secure SSH tunnels.',
      technologies: [
        'RHEL 9.x',
        'SELinux Enforcement',
        'Firewalld',
        'SSH Key Hardening',
        'LVM & Storage',
        'Systemd Services',
        'User & Group ACLs',
        'Cron Job Scheduling',
      ],
      terminalSnippet: 'systemctl status firewalld --no-pager\ngetenforce # Enforcing\nlvdisplay /dev/rhel/root',
    },
    {
      id: 'automation',
      category: 'AUTOMATION',
      title: 'Automation & Scripting',
      subtitle: 'Bash, Python & Configuration',
      size: 'medium',
      description:
        'Writing modular Bash automation scripts for server provisioning, user onboarding, log rotation, and permission audits. Building foundational Python scripts for file parsing and system automation.',
      technologies: [
        'Bash Shell Scripting',
        'Python Scripting',
        'Ansible Playbooks',
        'Automated Auditing',
        'Task Scheduling',
      ],
      terminalSnippet: '#!/usr/bin/env bash\nansible-playbook -i hosts site.yml --check',
    },
    {
      id: 'containers',
      category: 'CONTAINERS',
      title: 'Containers & Cloud-Native',
      subtitle: 'Podman & Microservices Deployment',
      size: 'medium',
      description:
        'Red Hat certified in cloud-native applications. Hands-on experience building, running, and orchestrating rootless containers with Podman, managing image registries, persistent volumes, and bridge networks.',
      technologies: [
        'Podman (DO188 Certified)',
        'Docker Containers',
        'Rootless Namespaces',
        'Container Volumes & Mounts',
        'Port Forwarding',
        'OpenShift Concepts',
      ],
      terminalSnippet: 'podman run -d --name web -p 8080:80 --security-opt label=disable nginx:alpine',
    },
    {
      id: 'networking',
      category: 'NETWORKING',
      title: 'Networking & Protocols',
      subtitle: 'Layer 2–7 Traffic & Analysis',
      size: 'medium',
      description:
        'Strong practical knowledge of networking fundamentals: TCP/IP suite, DNS resolution, DHCP leasing, HTTP/HTTPS client-server flows, routing tables, and deep packet inspection using Wireshark.',
      technologies: [
        'TCP/IP & UDP',
        'Wireshark Packet Analysis',
        'DNS / DHCP',
        'HTTP / HTTPS',
        'Routing & Switching',
        'VLAN Fundamentals',
      ],
      terminalSnippet: 'ip -brief addr show\nwireshark -k -i eth0 -f "tcp port 443"',
    },
    {
      id: 'software-engineering',
      category: 'ENGINEERING',
      title: 'Software Engineering',
      subtitle: 'Algorithms & Application Architecture',
      size: 'large',
      description:
        'Developing software solutions with emphasis on clean code, structured problem-solving, algorithm fundamentals, database queries, and modular full-stack application logic.',
      technologies: [
        'Data Structures & Algorithms',
        'Problem Solving',
        'Python & C Fundamentals',
        'SQL Queries & Schemas',
        'System Troubleshooting',
        'Debugging & Diagnostics',
      ],
      terminalSnippet: 'git status\npytest tests/ -v\nexplain analyze select * from orders;',
    },
    {
      id: 'version-control',
      category: 'DEV TOOLS',
      title: 'Version Control & Workflow',
      subtitle: 'Git & Collaborative Repositories',
      size: 'small',
      description:
        'Disciplined version control workflows utilizing Git and GitHub for tracking code revisions, branching strategies, and open-source infrastructure documentation.',
      technologies: ['Git', 'GitHub', 'Branch Management', 'Markdown Docs'],
      terminalSnippet: 'git commit -m "feat: infrastructure as code setup"',
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
      skills: [
        'RHEL 9 Management',
        'SELinux Enforcement',
        'Firewalld Security',
        'Storage & LVM Partitioning',
        'Systemd Unit Files',
        'User/Group Security',
      ],
      description:
        'Demonstrated core system administration skills across Red Hat Enterprise Linux environments, including system configuration, storage partitioning, user account security, and operating running systems.',
    },
    {
      id: 'rhc-cloud-native',
      title: 'Red Hat Certified Developer in Cloud-native Applications',
      issuer: 'Red Hat (DO188)',
      year: '2026',
      certId: '260-010-335',
      verifyUrl: 'https://www.credly.com/badges/ce5b4a3c-3f7e-4494-93aa-a2e4c380456e',
      type: 'certification',
      highlight: true,
      skills: [
        'Podman Rootless Engine',
        'Container Networking',
        'Persistent Volumes',
        'Multi-Container Deployments',
        'OpenShift Basics',
      ],
      description:
        'Certified in building, testing, and running containerized software applications using Podman and Red Hat cloud-native tooling for modern scalable architectures.',
    },
    {
      id: 'infosys-networking',
      title: 'Networking and Web Technology',
      issuer: 'Infosys Springboard',
      year: '2025',
      type: 'certification',
      highlight: false,
      skills: ['TCP/IP Stack', 'Web Protocol Architectures', 'HTTP/HTTPS Handshakes', 'Network Topologies'],
      description:
        'Completed comprehensive curriculum covering computer networks, web application communication protocols, OSI layering, and modern web infrastructure models.',
    },
    {
      id: 'rhce-training',
      title: 'RHCE Training (Ansible Automation)',
      issuer: 'Red Hat Academy Curriculum',
      year: '2025–2026',
      type: 'training',
      highlight: false,
      skills: ['Ansible Playbooks', 'System Roles', 'Multi-Host Orchestration', 'Configuration as Code'],
      description:
        'Structured training covering Ansible orchestration, automated RHEL administration, tasks delegation, Jinja2 templates, and scalable infrastructure management.',
    },
    {
      id: 'csc-cybersecurity',
      title: 'Cybersecurity Professional Basic',
      issuer: 'CSC Academy',
      year: '2020',
      type: 'certification',
      highlight: false,
      skills: ['Cybersecurity Hygiene', 'Threat Vectors', 'Network Defense Principles'],
      description:
        'Foundational credential covering principles of information security, defensive network configurations, and risk mitigation methodologies.',
    },
  ],

  projects: [
    {
      id: 'linux-server-automation',
      title: 'Linux Server Configuration & Automation',
      subtitle: 'RHCSA Production Lab & Hardening Framework',
      badge: 'Infrastructure & Security',
      category: 'Infrastructure',
      summary:
        'Hardened RHEL 9.x server environment featuring custom SELinux policies, strict Firewalld zoning, SSH key-only authentication, and automated user auditing scripts.',
      description:
        'Designed and provisioned a secure, enterprise-grade Red Hat Enterprise Linux 9 environment. Configured automated user lifecycle management and periodic permission auditing scripts using Bash, reduced the attack surface by shutting down non-essential daemons, and verified network defense using firewalld and SELinux boolean policies.',
      highlights: [
        'Enforced strict SELinux targeted policy and configured booleans for web/system daemons',
        'Crafted granular Firewalld rules isolating management ports from public-facing services',
        'Implemented zero-password SSH key-based authentication with disabled root direct logins',
        'Engineered Bash scripts for batch user onboarding, home directory permission auditing, and crontab log sweeps',
      ],
      technologies: ['RHEL 9.x', 'Linux', 'Bash', 'SELinux', 'Firewalld', 'SSH', 'Systemd'],
      repoUrl: 'https://github.com/ajju-py/REDHAT-RHCSA-EX200',
      details: {
        problem:
          'Default OS installations often leave legacy daemons running, permissive firewall policies, and unmonitored user accounts that expose systems to unauthorized access.',
        architecture:
          'RHEL 9.x standalone and virtualized nodes segmented via virtual network bridges, secured with custom firewalld zones, systemd drop-in configurations, and automated cron monitoring jobs.',
        keyDeliverables: [
          'Hardened sshd_config restricting authentication to ED25519/RSA keys',
          'Bash audit script checking world-writable directories and SUID binaries',
          'LVM storage allocation with dedicated mount options (nodev, nosuid) on sensitive partitions',
        ],
        securityHardening: [
          'Enforcing SELinux mode verified across all running services',
          'Firewalld drop zone applied to all non-whitelisted external traffic',
          'Systemd timer configured for daily security log rotations',
        ],
      },
    },
    {
      id: 'virtual-mandi',
      title: 'Virtual Mandi: Agricultural Commerce Platform',
      subtitle: 'Direct Farmer-to-Buyer Digital Marketplace',
      badge: 'Software Architecture',
      category: 'Software',
      summary:
        'Academic digital marketplace designed to connect local agricultural producers directly with buyers, eliminating middlemen through structured inventory pricing and transaction workflows.',
      description:
        'Engineered an academic application that streamlines commodity transactions for farmers. Conducted thorough requirements analysis, planned modular database schemas, implemented transparent pricing algorithms, and established end-to-end transaction logic with order lifecycle tracking.',
      highlights: [
        'Designed direct commodity listing architecture with real-time unit pricing and quantity limits',
        'Structured transactional workflow connecting buyer bidding directly to seller confirmation',
        'Engineered clean data schemas to maintain commodity provenance, harvest dates, and seller identity',
        'Conducted structured debugging and testing passes ensuring transactional integrity',
      ],
      technologies: ['Python', 'SQL', 'Application Architecture', 'Data Modeling', 'Testing & Debugging'],
      repoUrl: 'https://github.com/ajju-py/Mandal',
      details: {
        problem:
          'Traditional agricultural supply chains introduce multi-tier broker markups that erode farmers profits and increase consumer prices.',
        architecture:
          'Tiered application model with separated presentation layer, transactional business logic engine, and relational schema storing listings, order states, and participant profiles.',
        keyDeliverables: [
          'Commodity listing module with dynamic categorisation and localized price indexing',
          'Direct transaction workflow with state machine tracking orders from draft to fulfillment',
          'Search and filter pipeline for buyers to locate produce by region and quantity',
        ],
      },
    },
    {
      id: 'esp32-wireless-security-lab',
      title: 'Wireless Security & Protocol Analysis Lab',
      subtitle: 'Controlled ESP32 802.11 Research Environment',
      badge: 'Networking & Lab Research',
      category: 'Networking',
      summary:
        'Controlled hardware laboratory prototype analyzing IEEE 802.11 management frame vulnerabilities, de-authentication packet dynamics, and defensive protocol mitigations.',
      description:
        'Constructed an educational wireless protocol testbed using an ESP32 microcontroller in an isolated laboratory setting. Analyzed how unencrypted 802.11 de-authentication management frames can disrupt client association and evaluated practical mitigations including Protected Management Frames (802.11w / WPA3).',
      highlights: [
        'Programmed ESP32 micro-controller to capture and analyze 802.11 beacon and management frames',
        'Monitored wireless packet streams in Wireshark in monitor mode to observe client handshake cycles',
        'Documented vulnerability vectors of legacy WPA2 deauth attacks and verified 802.11w PMF protection',
        'Strictly operated within controlled private testbed for educational and defensive research purposes',
      ],
      technologies: ['ESP32', 'Wi-Fi 802.11', 'Networking', 'Wireshark', 'Packet Inspection', 'Protocol Security'],
      details: {
        problem:
          'Legacy WPA2 Wi-Fi networks transmit management frames unencrypted, leaving devices vulnerable to spoofed de-authentication frames that sever active network connections.',
        architecture:
          'Controlled isolated radio environment: ESP32 transceiver node, dedicated non-broadcast AP, and packet sniffer laptop running Wireshark to trace frame sequences.',
        keyDeliverables: [
          'Packet capture logs detailing 802.11 management frame headers and reason codes',
          'Technical report detailing transition mechanisms from WPA2 to WPA3 Protected Management Frames',
          'Defensive hardening guidelines for campus and enterprise Wi-Fi deployments',
        ],
        securityHardening: [
          'Recommended 802.11w (PMF) enforcement across wireless AP configurations',
          'WPA3-Enterprise configuration recommendations for high-density environments',
        ],
      },
    },
    {
      id: 'containerized-cloud-native-lab',
      title: 'Multi-Tier Containerized Deployment',
      subtitle: 'DO188 Cloud-Native Podman Lab',
      badge: 'Containers & Cloud-Native',
      category: 'Containers',
      summary:
        'Rootless container deployment utilizing Podman, persistent storage volumes, user namespace isolation, and custom internal bridge networks.',
      description:
        'Deployed and managed multi-container application workloads using Red Hat DO188 standards. Established decoupled database and web service tiers, created isolated internal network bridges with DNS resolution, and configured persistent host directory volumes with correct SELinux container labels (`:Z`).',
      highlights: [
        'Configured rootless Podman execution preventing root escalation vulnerabilities',
        'Implemented persistent storage volumes with proper container SELinux file contexts',
        'Configured user-defined container networks enabling internal service discovery by container name',
        'Packaged container startup definitions using systemd for automated boot recovery',
      ],
      technologies: ['Podman', 'Docker', 'Linux Namespaces', 'SELinux Contexts', 'Systemd Quadlets', 'Networking'],
      repoUrl: 'https://github.com/ajju-py',
      details: {
        problem:
          'Running containers with default root privileges and unmanaged persistent data introduces significant security risks and data persistence failures upon restart.',
        architecture:
          'Multi-tier decoupled architecture: Application container, relational database container, attached host-isolated volumes, and internal bridged subnet with no public DB exposure.',
        keyDeliverables: [
          'Container configuration scripts with SELinux label flags (`:Z`)',
          'Systemd unit files for rootless container lifecycle management',
          'Healthcheck scripts verifying service connectivity across container boundaries',
        ],
      },
    },
  ] as Project[],

  education: [
    {
      institution: 'Maharashtra Institute of Technology',
      degree: 'B.Tech in Computer Science',
      period: 'September 2024 – July 2027',
      location: 'Chhatrapati Sambhaji Nagar, Maharashtra',
      status: 'Expected',
      focus: 'Operating Systems, Computer Networks, Data Structures, Database Systems & Cloud Computing',
    },
    {
      institution: 'Marathwada Institute of Technology Engineering College',
      degree: 'Diploma in Computer Engineering',
      period: 'December 2020 – July 2023',
      location: 'Satara, Chhatrapati Sambhaji Nagar',
      status: 'Completed',
      focus: 'Computer Architecture, C Programming, Object Oriented Concepts, Computer Hardware & Networking',
    },
    {
      institution: "Saint Xavier's High School",
      degree: 'Secondary School Certificate (SSC)',
      period: '2010 – 2020',
      location: 'Chhatrapati Sambhaji Nagar',
      status: 'Completed',
      focus: 'Mathematics, Physical Sciences & General Academics',
    },
  ],

  achievements: [
    {
      title: '1st Rank — Technical Quiz',
      organization: 'Diploma in Computer Engineering',
      description:
        'Awarded 1st place in the inter-departmental technical quiz competition, demonstrating quick problem-solving and deep technical knowledge in computer hardware and programming.',
      icon: 'trophy',
    },
    {
      title: 'Active Volunteer — Red Hat Academy Day',
      organization: 'MIT Red Hat Academy (August 2025)',
      description:
        'Successfully volunteered and assisted peers in hands-on Linux & DevOps workshop sessions during the annual RHA Day event.',
      icon: 'award',
    },
  ],

  timeline: [
    {
      year: '2020 – 2023',
      title: 'Diploma in Computer Engineering',
      role: 'Foundational Systems & Hardware',
      type: 'education',
      description:
        'Completed 3-year polytechnic diploma. Gained rigorous grounding in C programming, operating systems, digital electronics, and computer architecture. Secured 1st rank in technical competition.',
      tags: ['C Programming', 'Computer Architecture', 'Operating Systems', 'Networking'],
    },
    {
      year: '2024 – Present',
      title: 'B.Tech in Computer Science',
      role: 'Advanced Computing & Infrastructure',
      type: 'education',
      description:
        'Pursuing Bachelor of Technology with intensive focus on distributed systems, enterprise Linux, containerization, and modern software engineering.',
      tags: ['B.Tech CS', 'RHEL 9', 'Data Structures', 'Database Systems'],
    },
    {
      year: '2025',
      title: 'Networking & DevOps Immersion',
      role: 'Infosys Springboard & RHA Workshop',
      type: 'milestone',
      description:
        'Completed Networking and Web Technology curriculum via Infosys Springboard. Actively participated and volunteered in Red Hat Academy Day Linux & DevOps hands-on workshop.',
      tags: ['TCP/IP', 'Web Technology', 'DevOps Workshop', 'Hands-on Labs'],
    },
    {
      year: '2026',
      title: 'Dual Red Hat Certified Professional',
      role: 'RHCSA & Cloud-Native Developer (DO188)',
      type: 'certification',
      description:
        'Earned official Red Hat Certified System Administrator (RHCSA) and Red Hat Certified Developer in Cloud-native Applications credentials under Red Hat Certification ID 260-010-335.',
      tags: ['RHCSA', 'DO188 Podman', 'RHEL 9', 'Credly Verified', 'Cert ID: 260-010-335'],
    },
    {
      year: 'Present',
      title: 'Software Engineering & Cloud Automation',
      role: 'Continuous Growth & System Building',
      type: 'milestone',
      description:
        'Deepening software engineering craft, automation workflows with Python and Bash, containerized application design, and preparing for high-impact engineering roles.',
      tags: ['Software Engineering', 'Ansible Automation', 'Cloud-Native', 'Containers'],
    },
  ],

  currentFocus: [
    {
      title: 'Linux System Internals & Kernel Tuning',
      description:
        'Deepening understanding of Linux process scheduling, memory namespaces, cgroups v2, and system diagnostics with perf, strace, and journalctl.',
      icon: 'terminal',
    },
    {
      title: 'Automation & Infrastructure-as-Code',
      description:
        'Expanding Bash and Ansible playbooks for repeatable server configuration, configuration consistency, and automated verification suites.',
      icon: 'cpu',
    },
    {
      title: 'Container Architectures & Cloud-Native',
      description:
        'Advancing multi-container patterns using Podman and container orchestration basics, ensuring security-first rootless runtime environments.',
      icon: 'box',
    },
    {
      title: 'Backend Software Engineering',
      description:
        'Building scalable service logic and RESTful endpoints using Python, solidifying data structure efficiency and reliable database interactions.',
      icon: 'code',
    },
  ],
};
