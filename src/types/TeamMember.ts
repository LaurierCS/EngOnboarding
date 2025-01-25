export interface TeamMember {
  name: string;
  role: string;
  funFact?: string;
  githubUsername?: string;
  cardStyle?: {
    background?: string;
    border?: string;
    text?: string;
  };
} 