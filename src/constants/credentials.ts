export interface EducationItem {
  degree: string;
  score: string;
  institution: string;
  year: string;
  highlight?: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  year: string;
  certificateUrl?: string;
  certificateId?: string;
  isAward?: boolean;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "MCA",
    score: "CGPA: 9.19/10",
    institution: "CET",
    year: "2022–2024",
  },
  {
    degree: "BSc Computer Science",
    score: "92.02%",
    institution: "University",
    year: "2019–2022",
    highlight: "University First Rank",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
{
    title: "Microsoft Azure Fundamentals AZ 900",
    issuer: "Microsoft",
    year: "2026",
    certificateUrl: "https://learn.microsoft.com/en-us/users/sarikaks-9948/credentials/9f0e3354c72198ac?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    certificateId: "9F0E3354C72198AC",
  },
  {
    title: "Microsoft Azure AI",
    issuer: "Microsoft",
    year: "2024",
    certificateUrl: "https://learn.microsoft.com/en-us/users/sarikaks-9948/credentials/9f0e3354c72198ac?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    certificateId: "6D1A4882D17308LK",
  },
  {
    title: "UGC-NET (Computer Science)",
    year: "2024",
    certificateUrl: "https://drive.google.com/file/d/1OUtFxN_ezbt6Rr9vEJ1zIvtL1Q12KUBu/view",
    certificateId: "240510315503",
  },
  {
    title: "GATE (CS / DS)",
    year: "2024",
  },
  {
    title: "AWS AI Practitioner",
    issuer: "AWS",
    year: "2024",
  },
  {
    title: "IBM Cybersecurity",
    issuer: "IBM",
    year: "2023",
  },
  {
    title: "Extra Mile Award – TATA ELXSI",
    year: "2023",
    certificateUrl: "https://drive.google.com/file/d/1y2SBGwXJ2WM7V8cvqL2Vh71_w5_LqXVx/view",
    isAward: true,
  },
];
