const config = {
  title: "Ajay Tandale | Cloud Engineer | Linux | AWS | DevOps",
  description: {
    long: "Explore the portfolio of Ajay Tandale, a Computer Science student and aspiring Cloud Engineer focused on Linux Administration, Red Hat Enterprise Linux, AWS, Terraform, Ansible, Podman, Docker, and Cybersecurity. Building secure, scalable infrastructure through automation.",
    short:
      "Ajay Tandale — Cloud Engineer, Linux, AWS, Terraform, Ansible & DevOps.",
  },
  keywords: [
    "Ajay Tandale",
    "Ajay Raju Tandale",
    "Cloud Engineer",
    "Linux Engineer",
    "DevOps Engineer",
    "RHCSA",
    "DO188",
    "Red Hat Enterprise Linux",
    "RHEL 9",
    "AWS",
    "Amazon S3",
    "CloudFront",
    "Terraform",
    "Ansible",
    "Podman",
    "Docker",
    "OpenShift",
    "Infrastructure as Code",
    "SELinux",
    "firewalld",
    "LVM",
    "systemd",
    "Bash Scripting",
    "Python",
    "Portfolio",
    "Maharashtra Institute of Technology",
  ],
  author: "Ajay Tandale",
  fullName: "Ajay Raju Tandale",
  email: "ajaytandale8983@gmail.com",
  site: "https://ajaytandale.in",

  // for github stars button
  githubUsername: "ajju-py",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/ajay-tandale-8030b8231/",
    github: "https://github.com/ajju-py",
    instagram: "https://www.instagram.com/ajju.py/",
    credly: "https://www.credly.com/users/ajay-tandale",
    email: "mailto:ajaytandale8983@gmail.com",
  },
};

export { config };
