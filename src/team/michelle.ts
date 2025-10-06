import { TeamMember } from "../types/TeamMember";

export const michelle: TeamMember = {
  name: "Michelle Chala",
  role: "VP of internal + Software Engineer",
  funFact: "I want to learn everything ever... And I am a clementine ambassador 🍊",
  githubUsername: "submarinejuice",
  cardStyle: {
    background: [
      "relative overflow-hidden",
      "bg-[linear-gradient(135deg,#000,#190000_30%,#7f1d1d_70%,#000)]",
      "[background-size:200%_200%]",
      "[background-position:0%_50%]",
      "transition-[background-position,box-shadow,transform] duration-700 ease-out",
      "hover:[background-position:100%_50%]",
      "hover:scale-[1.02]",
      "hover:ring-4 hover:ring-offset-2 hover:ring-orange-500/50 hover:ring-offset-slate-900",
      "hover:shadow-[0_0_20px_#f97316,0_0_45px_#ef4444]",
      "after:content-[''] after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none",
      "after:[background:radial-gradient(120%_60%_at_20%_-10%,rgba(249,115,22,0.12),transparent_60%)]",
      "after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-700"
    ].join(" "),
    border: "border border-red-800/60 hover:border-orange-300/60",
    text: "text-rose-100",
  },
};
