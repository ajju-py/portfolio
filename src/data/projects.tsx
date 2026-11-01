import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
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
            Visit Live Demo
            <ArrowUpRight className="ml-2 w-4 h-4" />
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
          <Button variant={"outline"} size={"sm"}>
            GitHub Repository
            <ArrowUpRight className="ml-2 w-4 h-4" />
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

const PROJECT_SKILLS = {
  aws: {
    title: "AWS Cloud",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/aws.svg" title="AWS" />,
  },
  terraform: {
    title: "Terraform",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/terraform.svg" title="Terraform" />,
  },
  s3: {
    title: "Amazon S3",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/s3.svg" title="Amazon S3" />,
  },
  cloudfront: {
    title: "CloudFront (OAC)",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/aws.svg" title="CloudFront" />,
  },
  cloudwatch: {
    title: "Amazon CloudWatch",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/cloudwatch.svg" title="CloudWatch" />,
  },
  iam: {
    title: "AWS IAM",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/aws.svg" title="IAM" />,
  },
  ansible: {
    title: "Ansible",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/ansible.svg" title="Ansible" />,
  },
  rhel: {
    title: "Red Hat Enterprise Linux",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/rhel.svg" title="RHEL" />,
  },
  linux: {
    title: "Linux Administration",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/linux.svg" title="Linux" />,
  },
  podman: {
    title: "Podman",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/podman.svg" title="Podman" />,
  },
  docker: brand("Docker", "docker-mono.svg"),
  selinux: {
    title: "SELinux",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/selinux.svg" title="SELinux" />,
  },
  lvm: {
    title: "LVM Storage",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/lvm.svg" title="LVM" />,
  },
  firewalld: {
    title: "firewalld",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/firewalld.svg" title="firewalld" />,
  },
  systemd: {
    title: "systemd",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/systemd.svg" title="systemd" />,
  },
  bash: {
    title: "Bash Scripting",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/bash.svg" title="Bash" />,
  },
  ssh: {
    title: "SSH Security",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/ssh.svg" title="SSH" />,
  },
  python: brand("Python", "python-mono.svg"),
  git: brand("Git", "git-mono.svg"),
  github: brand("GitHub", "github-mono.svg"),
  nginx: {
    title: "Nginx",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/nginx.svg" title="Nginx" />,
  },
  mariadb: {
    title: "MariaDB",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/mariadb.svg" title="MariaDB" />,
  },
  iot: {
    title: "ESP32 & IoT",
    bg: "black",
    fg: "white",
    icon: <MaskIcon src="/images/tech/networking.svg" title="IoT" />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "aws-hosting",
    category: "Cloud Infrastructure as Code",
    title: "AWS Secure Static Website Hosting using Terraform",
    src: "/assets/projects-screenshots/aws-hosting/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.cloudfront,
        PROJECT_SKILLS.s3,
      ],
      backend: [
        PROJECT_SKILLS.terraform,
        PROJECT_SKILLS.iam,
        PROJECT_SKILLS.cloudwatch,
        PROJECT_SKILLS.git,
      ],
    },
    live: "https://ajaytandale.in",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Enterprise AWS Cloud Infrastructure Provisioned via Terraform
          </TypographyP>
          <TypographyP className="font-mono">
            Designed and deployed a highly secure, automated static web hosting architecture on AWS.
            All underlying cloud resources—including encrypted S3 origin buckets, Amazon CloudFront distribution,
            Origin Access Control (OAC), least-privilege IAM policies, and CloudWatch telemetry—are managed
            declaratively with Terraform modules.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Technical Engineering Highlights</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Infrastructure as Code: Automated 100% of cloud resource provisioning using modular Terraform variables and outputs.</li>
            <li>Security &amp; Encryption: Enforced AES-256 S3 bucket encryption, bucket versioning, and CloudFront Origin Access Control (OAC).</li>
            <li>Content Delivery: Edge-cached HTTPS distribution globally via CloudFront with optimized TTL caching policies.</li>
            <li>Observability: Real-time traffic metrics, cache hit ratios, and alarm thresholds configured via Amazon CloudWatch.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "ansible-infra",
    category: "Infrastructure Automation & Configuration",
    title: "Enterprise Linux Infrastructure Automation using Ansible",
    src: "/assets/projects-screenshots/ansible-infra/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.nginx,
        PROJECT_SKILLS.mariadb,
      ],
      backend: [
        PROJECT_SKILLS.rhel,
        PROJECT_SKILLS.ansible,
        PROJECT_SKILLS.podman,
        PROJECT_SKILLS.selinux,
        PROJECT_SKILLS.lvm,
        PROJECT_SKILLS.firewalld,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automated Multi-Server Linux Configuration Management
          </TypographyP>
          <TypographyP className="font-mono">
            Enterprise automation pipeline orchestrating Red Hat Enterprise Linux nodes through idempotent Ansible
            playbooks and reusable roles. Automates the full server lifecycle including user creation, SSH hardening,
            SELinux policy enforcement, LVM storage formatting, and deployment of Nginx reverse proxies and MariaDB servers.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Technical Engineering Highlights</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Idempotent Playbooks: Modular roles handling base hardening, storage, networking, and service daemon configurations.</li>
            <li>Security &amp; Hardening: Enforces SELinux booleans, firewalld zone bindings, and rootless Podman container execution.</li>
            <li>Secrets Governance: Protected sensitive service credentials and keys using encrypted Ansible Vault.</li>
            <li>Storage Automation: Automated Logical Volume Manager (LVM) volume group creation and persistent fstab mount points.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "rhcsa",
    category: "Linux & SysAdmin Lab",
    title: "Linux Server Configuration & Automation (RHCSA Lab)",
    src: "/assets/projects-screenshots/rhcsa/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.rhel,
      ],
      backend: [
        PROJECT_SKILLS.bash,
        PROJECT_SKILLS.selinux,
        PROJECT_SKILLS.firewalld,
        PROJECT_SKILLS.ssh,
        PROJECT_SKILLS.systemd,
      ],
    },
    github: "https://github.com/ajju-py/REDHAT-RHCSA-EX200",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Red Hat Enterprise Linux Hardening &amp; Administration Repository
          </TypographyP>
          <TypographyP className="font-mono">
            Production-grade hands-on repository aligned with Red Hat Certified System Administrator
            (RHCSA EX200) standards on RHEL 9.3. Focuses on least-privilege system configuration, custom
            firewalld rules, SELinux targeted policy enforcement, systemd service control, and Bash automation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Technical Engineering Highlights</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Storage Architecture: LVM volume groups, logical volume expansion, and filesystem mounting (XFS/ext4).</li>
            <li>Mandatory Access Control: SELinux context resolution (chcon, restorecon), port labeling, and policy booleans.</li>
            <li>Security Posture: SSH key authentication, disabling legacy protocols, and custom firewalld zone configurations.</li>
            <li>Audit Automation: Automated Bash scripts for recurring user privilege verification and journalctl log analysis.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "linuxops",
    category: "System Validation & Diagnostics",
    title: "LinuxOps – Linux Infrastructure Validation and Automation",
    src: "/assets/projects-screenshots/linuxops/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.rhel,
      ],
      backend: [
        PROJECT_SKILLS.bash,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.systemd,
        PROJECT_SKILLS.ssh,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automated Linux Health Validation &amp; Configuration Auditing
          </TypographyP>
          <TypographyP className="font-mono">
            A lightweight system diagnostics and infrastructure verification tool engineered in Bash and Python.
            Designed to conduct comprehensive health checks on Linux hosts, evaluating disk partition thresholds,
            active systemd services, open network listening ports, and anomalous authentication entries.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Technical Engineering Highlights</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Configuration Verification: Compares running server states against desired baseline security profiles.</li>
            <li>Resource Threshold Alarms: Evaluates disk inode capacity, swap pressure, and high-memory processes.</li>
            <li>Log Audit Pipelines: Extracts authentication failures and privilege escalations from secure and audit logs.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "floci",
    category: "Local Cloud Sandbox & Containers",
    title: "Floci – Local AWS Cloud Infrastructure Lab",
    src: "/assets/projects-screenshots/floci/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.podman,
      ],
      backend: [
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.terraform,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.bash,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Isolated Local Cloud Testing &amp; IaC Emulation Environment
          </TypographyP>
          <TypographyP className="font-mono">
            A developer testbed leveraging containerized cloud emulation to prototype AWS architectures locally.
            Allows validating Terraform infrastructure definitions (S3 buckets, IAM roles, and CloudWatch metrics)
            with complete functional parity without incurring cloud costs or requiring active internet connectivity.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Technical Engineering Highlights</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Zero-Cost Prototyping: Emulates core AWS APIs locally inside Docker/Podman containers.</li>
            <li>IaC Validation: Enables rapid terraform plan and apply validation loops prior to production deployment.</li>
            <li>Scripted Teardown: Automated Bash scripts for single-command spin-up and tear-down of test architectures.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "energy-meter",
    category: "Embedded IoT & Telemetry",
    title: "Smart Energy Meter with Theft Detection using ESP32",
    src: "/assets/projects-screenshots/energy-meter/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.iot,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.bash,
      ],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            IoT Current Telemetry &amp; Power Anomaly Detection
          </TypographyP>
          <TypographyP className="font-mono">
            An embedded systems IoT application running on an ESP32 microcontroller, interfacing with current and voltage
            sensors to continuously calculate power consumption and detect power theft or unauthorized line tapping
            in real time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Technical Engineering Highlights</TypographyH3>
          <ul className="list-disc list-inside font-mono space-y-2 text-sm text-muted-foreground">
            <li>Hardware Interfacing: Sampled real-time analog sensor data using ESP32 ADC and calibrated voltage transformers.</li>
            <li>Anomaly Algorithms: Computed root-mean-square (RMS) current to identify unmetered circuit draw or bypass.</li>
            <li>Telemetry Streaming: Transmitted instantaneous readings and theft trigger alerts to centralized cloud endpoints.</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
