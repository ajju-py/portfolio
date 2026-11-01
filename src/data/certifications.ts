export interface Certification {
  id: string;
  name: string;
  code: string;
  issuer: string;
  badgeImage: string;
  fallbackImage: string;
  credentialUrl: string;
  issued: string;
  expires: string | null;
  featured: boolean;
  category: "certification" | "course";
  description: string;
  skills: string[];
}

export const verifiedCertifications: Certification[] = [
  {
    id: "28f19df6-9298-4d3e-9577-1bd36601ead7",
    name: "Red Hat Certified System Administrator (RHCSA)",
    code: "EX200",
    issuer: "Red Hat",
    badgeImage: "https://images.credly.com/images/572de0ba-2c59-4816-a59d-b0e1687e45ee/image.png",
    fallbackImage: "/images/badges/rhcsa.png",
    credentialUrl: "https://www.credly.com/badges/28f19df6-9298-4d3e-9577-1bd36601ead7",
    issued: "January 21, 2026",
    expires: "August 13, 2029",
    featured: true,
    category: "certification",
    description:
      "Core system administration skills required in Red Hat Enterprise Linux environments. Earned after successfully passing the EX200 exam. Verifies proficiency in storage configuration, systemd services, SELinux enforcement, user management, and security administration.",
    skills: [
      "Linux",
      "RHCSA",
      "Red Hat Enterprise Linux",
      "System Administration",
      "Storage & LVM",
      "SELinux",
      "systemd",
      "firewalld",
    ],
  },
  {
    id: "ce5b4a3c-3f7e-4494-93aa-a2e4c380456e",
    name: "Red Hat Certified Developer in Cloud-native Applications",
    code: "DO188",
    issuer: "Red Hat",
    badgeImage: "https://images.credly.com/images/3101e76a-194b-491f-9e68-ce33ed7119e2/blob",
    fallbackImage: "/images/badges/do188.png",
    credentialUrl: "https://www.credly.com/badges/ce5b4a3c-3f7e-4494-93aa-a2e4c380456e",
    issued: "August 13, 2026",
    expires: "August 13, 2029",
    featured: true,
    category: "certification",
    description:
      "Demonstrated practical proficiency in container technologies and Podman: managing containerized services, deploying multi-container application stacks, container networking, and creating custom container images. Earned after passing the EX188 exam.",
    skills: [
      "Containers",
      "Podman",
      "Kubernetes",
      "Red Hat OpenShift",
      "Container Registries",
      "Container Storage",
      "Cloud-Native Architecture",
    ],
  },
  {
    id: "infosys-springboard-networking-2025",
    name: "Networking and Web Technology",
    code: "INFOSYS-NET",
    issuer: "Infosys Springboard",
    badgeImage: "https://images.credly.com/images/745b7433-8c95-4978-87ed-a5b280fcb1aa/blob",
    fallbackImage: "/images/tech/networking.svg",
    credentialUrl: "#",
    issued: "2025",
    expires: null,
    featured: true,
    category: "certification",
    description:
      "Comprehensive certification covering TCP/IP networking architecture, OSI model, routing, DNS, HTTP/HTTPS security, socket communications, and web technology infrastructure.",
    skills: [
      "Networking",
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "Routing & Subnetting",
      "Web Architecture",
    ],
  },
  {
    id: "b73a5211-d430-4520-a37c-ee11848d22aa",
    name: "Red Hat OpenShift Development I: Introduction to Containers with Podman (DO188 - RHA) - Ver. 4.18",
    code: "DO188-RHA",
    issuer: "Red Hat Academy",
    badgeImage: "https://images.credly.com/images/969cb130-43cd-48d4-904c-a74d2070aade/blob",
    fallbackImage: "/images/badges/do188.png",
    credentialUrl: "https://www.credly.com/badges/b73a5211-d430-4520-a37c-ee11848d22aa",
    issued: "July 16, 2026",
    expires: null,
    featured: false,
    category: "course",
    description:
      "Verifies curriculum completion for Red Hat OpenShift Development I (DO188) via Red Hat Academy: container architecture, Podman CLI, rootless containers, multi-container deployments, and image troubleshooting.",
    skills: [
      "Podman",
      "Containers",
      "DevOps",
      "OpenShift",
      "Multi-container Stacks",
    ],
  },
  {
    id: "2c0ff63c-a15a-43ca-a9b7-3c66b2b477da",
    name: "Red Hat System Administration II (RH134 - RHA) - Ver. 9.3",
    code: "RH134",
    issuer: "Red Hat Academy",
    badgeImage: "https://images.credly.com/images/95cf22a9-209f-4832-b5d8-6341cfd7f20d/blob",
    fallbackImage: "/images/badges/rh134.png",
    credentialUrl: "https://www.credly.com/badges/2c0ff63c-a15a-43ca-a9b7-3c66b2b477da",
    issued: "November 03, 2025",
    expires: null,
    featured: false,
    category: "course",
    description:
      "Verifies mastery of advanced Linux administration concepts through Red Hat Academy: automated installations, storage volumes (LVM), network security, firewalld, SELinux enforcement, and troubleshooting.",
    skills: [
      "Linux",
      "RHCSA",
      "Red Hat Enterprise Linux",
      "LVM Storage",
      "SELinux",
      "firewalld",
    ],
  },
  {
    id: "c51ea975-2570-456b-81e4-d72ce298a892",
    name: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
    code: "RH124",
    issuer: "Red Hat Academy",
    badgeImage: "https://images.credly.com/images/1bc718d9-6aae-4b20-81f9-a19b4982a026/blob",
    fallbackImage: "/images/badges/rh124.png",
    credentialUrl: "https://www.credly.com/badges/c51ea975-2570-456b-81e4-d72ce298a892",
    issued: "September 25, 2025",
    expires: null,
    featured: false,
    category: "course",
    description:
      "Verifies core Linux administration competencies through Red Hat Academy: command line execution, file permissions, user administration, system processes, and service control with systemd.",
    skills: [
      "Linux",
      "Red Hat Enterprise Linux",
      "Bash CLI",
      "File Permissions",
      "systemd",
    ],
  },
  {
    id: "2aac067b-6036-4398-ab0c-6ce61f6c01da",
    name: "Introduction to Red Hat OpenShift Applications (DO101 - RHA) - Ver. 4.6",
    code: "DO101",
    issuer: "Red Hat Academy",
    badgeImage: "https://images.credly.com/images/25ba2767-ac7b-49cf-9f2f-864bd1a552f4/blob",
    fallbackImage: "/images/badges/do101.png",
    credentialUrl: "https://www.credly.com/badges/2aac067b-6036-4398-ab0c-6ce61f6c01da",
    issued: "January 07, 2026",
    expires: null,
    featured: false,
    category: "course",
    description:
      "Verifies completion of the Introduction to Red Hat OpenShift Applications course: cloud-native application deployment, container scaling, pod management, and cluster interaction.",
    skills: [
      "OpenShift",
      "Kubernetes",
      "Cloud Deployment",
      "Pod Scaling",
    ],
  },
];

export const credlyProfileUrl = "https://www.credly.com/users/ajay-tandale";
