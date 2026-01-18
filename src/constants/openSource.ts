export interface OpenSourceContribution {
  id: number;
  project: string;
  organization: string;
  type: "Bug Fix" | "Feature" | "Documentation";
  prNumber: string;
  status: "Merged" | "Open" | "Closed";
  description: string;
  impact: string;
  technologies: string[];
  stars: number;
  url: string;
  year: string;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: 1,
    project: "react-native-gifted-charts",
    organization: "Abhinandan-Kushwaha",
    type: "Bug Fix",
    prNumber: "#1206",
    status: "Merged",
    description: "Default lineGradient to false for areaChart ",
    impact: "Fixed Line chart coloring issue #1080",
    technologies: ["JavaScript", "React Native", "Bug Fix"],
    stars: 1,
    url: "https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts",
    year: "2026"
  },
//   {
//     id: 2,
//     project: "TensorFlow",
//     organization: "Google",
//     type: "Feature",
//     prNumber: "#54321",
//     status: "Merged",
//     description: "Added support for new activation functions in neural networks",
//     impact: "Enhanced ML model flexibility",
//     technologies: ["Python", "C++", "ML"],
//     stars: 175000,
//     url: "https://github.com/tensorflow/tensorflow",
//     year: "2024"
//   },
//   {
//     id: 3,
//     project: "VS Code",
//     organization: "Microsoft",
//     type: "Documentation",
//     prNumber: "#98765",
//     status: "Merged",
//     description: "Improved API documentation with interactive examples",
//     impact: "Better developer experience",
//     technologies: ["TypeScript", "Markdown"],
//     stars: 150000,
//     url: "https://github.com/microsoft/vscode",
//     year: "2023"
//   }
];