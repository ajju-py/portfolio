import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Live Deployment
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            GitHub Repository
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const customBrand = (title: string, iconPath: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={iconPath}
      alt={title}
      className="w-4 h-4 object-contain inline-block filter invert dark:invert-0"
    />
  ),
});

export const PROJECT_SKILLS = {
  aws: customBrand("AWS", "/images/tech/aws.svg"),
  terraform: customBrand("Terraform", "/images/tech/terraform.svg"),
  ansible: customBrand("Ansible", "/images/tech/ansible.svg"),
  linux: brand("Linux", "linux-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  podman: customBrand("Podman", "/images/tech/podman.svg"),
  nginx: brand("Nginx", "nginx-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  bash: customBrand("Bash", "/images/tech/bash.svg"),
  git: brand("Git", "git-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  rhel: customBrand("RHEL", "/images/tech/rhel.svg"),
  selinux: customBrand("SELinux", "/images/tech/selinux.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "aws-hosting",
    category: "Cloud Infrastructure & IaC",
    title: "AWS Secure Static Website Hosting using Terraform",
    src: "/assets/projects-screenshots/aws-hosting/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.aws, PROJECT_SKILLS.cloudflare],
      backend: [PROJECT_SKILLS.terraform, PROJECT_SKILLS.bash, PROJECT_SKILLS.git],
    },
    live: "",
    content: (
      <div>
        <TypographyH3 className="my-4 mt-8">Architecture & Infrastructure as Code</TypographyH3>
        <TypographyP className="font-mono text-muted-foreground">
          Production-grade, highly available static website infrastructure provisioned declaratively on Amazon Web Services using Terraform. The architecture enforces HTTPS encryption, global edge distribution, least-privilege IAM policies, and automated observability.
        </TypographyP>
        {/* Infrastructure as Code Architecture */}
        <TypographyH3 className="my-4 mt-8">Key Engineering Highlights</TypographyH3>
        <ul className="list-disc list-inside space-y-2 font-mono text-sm text-muted-foreground">
          <li>Automated provisioning of private S3 origin buckets with public access completely blocked.</li>
          <li>CloudFront Origin Access Control (OAC) enforcing encrypted TLS 1.3 delivery worldwide.</li>
          <li>Strict IAM bucket policies restricting object retrieval strictly to CloudFront distribution ARNs.</li>
          <li>Automated custom error response routing for Next.js App Router client-side navigation.</li>
          <li>CloudWatch alarms monitoring distribution 4xx/5xx error rates and edge latency metrics.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "ansible-infra",
    category: "Configuration Management & Automation",
    title: "Enterprise Linux Infrastructure Automation using Ansible",
    src: "/assets/projects-screenshots/ansible-infra/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.linux, PROJECT_SKILLS.rhel],
      backend: [PROJECT_SKILLS.ansible, PROJECT_SKILLS.podman, PROJECT_SKILLS.selinux, PROJECT_SKILLS.bash],
    },
    live: "",
    content: (
      <div>
        <TypographyH3 className="my-4 mt-8">Enterprise Configuration & Compliance</TypographyH3>
        <TypographyP className="font-mono text-muted-foreground">
          Comprehensive enterprise automation suite leveraging Ansible roles and playbooks to enforce standard operating environments across multi-node Red Hat Enterprise Linux servers.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Key Engineering Highlights</TypographyH3>
        <ul className="list-disc list-inside space-y-2 font-mono text-sm text-muted-foreground">
          <li>Automated LVM storage provisioning with dynamic logical volume resizing and persistent mount configurations.</li>
          <li>SELinux boolean automation, targeted file context relabeling, and firewalld service zone orchestration.</li>
          <li>Rootless Podman container lifecycle orchestration generating native systemd quadlets.</li>
          <li>Idempotent playbooks with automated syntax linting, dry-run check modes, and vault-encrypted secrets.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "rhcsa",
    category: "Enterprise Linux Administration",
    title: "Linux Server Configuration and Automation (RHCSA Lab)",
    src: "/assets/projects-screenshots/rhcsa/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.linux, PROJECT_SKILLS.rhel],
      backend: [PROJECT_SKILLS.bash, PROJECT_SKILLS.selinux, PROJECT_SKILLS.git],
    },
    github: "https://github.com/ajju-py/REDHAT-RHCSA-EX200",
    live: "",
    content: (
      <div>
        <TypographyH3 className="my-4 mt-8">Red Hat Enterprise Linux Server Lab</TypographyH3>
        <TypographyP className="font-mono text-muted-foreground">
          Hands-on enterprise system administration repository documenting comprehensive configuration scripts, security hardening policies, and service automation aligned with Red Hat Certified System Administrator (RHCSA EX200) standards.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/ajju-py/REDHAT-RHCSA-EX200" />
        <TypographyH3 className="my-4 mt-8">Key Engineering Highlights</TypographyH3>
        <ul className="list-disc list-inside space-y-2 font-mono text-sm text-muted-foreground">
          <li>Systemd unit service creation, multi-user boot target management, and journalctl log auditing.</li>
          <li>User, group, and POSIX Access Control List (ACL) security permission hierarchies.</li>
          <li>Persistent storage management with Stratis, VDO data reduction, and automated fstab mounting.</li>
          <li>SELinux port labeling, troubleshooting auditd AVC denials, and SSH key-based authentication enforcement.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "linuxops",
    category: "DevOps & Systems Validation",
    title: "LinuxOps – Linux Infrastructure Validation and Automation",
    src: "/assets/projects-screenshots/linuxops/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.linux, PROJECT_SKILLS.rhel],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.bash, PROJECT_SKILLS.docker],
    },
    live: "",
    content: (
      <div>
        <TypographyH3 className="my-4 mt-8">Automated Infrastructure Health & Compliance</TypographyH3>
        <TypographyP className="font-mono text-muted-foreground">
          DevOps toolchain designed to validate Linux system state, compliance configurations, and network connectivity across heterogeneous infrastructure before deployment into staging environments.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Key Engineering Highlights</TypographyH3>
        <ul className="list-disc list-inside space-y-2 font-mono text-sm text-muted-foreground">
          <li>Automated validation of network interfaces, DNS resolution, and firewall port availability.</li>
          <li>Disk health, memory threshold monitoring, and automated log rotation verification.</li>
          <li>Python and Bash verification test runners returning structured JSON reports for CI/CD pipelines.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "floci",
    category: "Cloud Emulation & Testing",
    title: "Floci – Local AWS Cloud Infrastructure Lab",
    src: "/assets/projects-screenshots/floci/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.aws, PROJECT_SKILLS.docker],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.terraform, PROJECT_SKILLS.bash],
    },
    live: "",
    content: (
      <div>
        <TypographyH3 className="my-4 mt-8">Local Cloud Simulation & Rapid Prototyping</TypographyH3>
        <TypographyP className="font-mono text-muted-foreground">
          Containerized local cloud development environment enabling rapid prototyping and integration testing of AWS Cloud architectures without incurring cloud provider billing or network egress costs.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Key Engineering Highlights</TypographyH3>
        <ul className="list-disc list-inside space-y-2 font-mono text-sm text-muted-foreground">
          <li>Local emulation of core AWS services including S3 bucket APIs, IAM mock policies, and CloudWatch events.</li>
          <li>Terraform provider redirection targeting local containerized endpoints for immediate dry-run validations.</li>
          <li>Optimized container footprint running seamlessly in local development setups.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "energy-meter",
    category: "IoT & Systems Engineering",
    title: "Smart Energy Meter with Theft Detection using ESP32",
    src: "/assets/projects-screenshots/energy-meter/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.linux],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.git],
    },
    live: "",
    content: (
      <div>
        <TypographyH3 className="my-4 mt-8">Real-time Telemetry & Edge Detection</TypographyH3>
        <TypographyP className="font-mono text-muted-foreground">
          Hardware and cloud-connected telemetry prototype engineered during diploma studies utilizing an ESP32 microcontroller and current sensor arrays to detect power line tampering and illegal current bypass.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Key Engineering Highlights</TypographyH3>
        <ul className="list-disc list-inside space-y-2 font-mono text-sm text-muted-foreground">
          <li>Differential current monitoring between incoming and outgoing phases for immediate tampering alerts.</li>
          <li>Real-time telemetry transmission via HTTP/MQTT protocols to cloud monitoring endpoints.</li>
          <li>1st Rank award recipient in technical innovation exhibition.</li>
        </ul>
      </div>
    ),
  },
];

export default projects;
