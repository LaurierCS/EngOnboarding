import "./App.css";
import { teamMembers } from "./team";
import { TeamMember } from "./types/TeamMember";
import githubIcon from "./assets/github.svg";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-900">
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 py-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4 sm:mb-6">
            LCS Team Directory
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Welcome to our team directory!
          </p>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            New members: Create a new file in the team directory to add
            yourself!
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8 gap-x-4 place-items-center">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 w-[280px] sm:w-[260px] md:w-[280px] min-h-[320px] flex flex-col shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] ${
                member.cardStyle?.background || "bg-slate-800"
              } ${member.cardStyle?.border || "border border-slate-700"}`}
            >
              <h2
                className={`text-2xl font-bold mb-3 ${
                  member.cardStyle?.text || "text-slate-100"
                }`}
              >
                {member.name}
              </h2>
              <p
                className={`text-lg font-medium mb-8 ${
                  member.cardStyle?.text || "text-slate-400"
                }`}
              >
                {member.role}
              </p>

              {member.funFact && (
                <div className="border-t border-slate-700 pt-6 mb-6">
                  <p className="font-semibold text-blue-400 mb-2">Fun fact:</p>
                  <p
                    className={`leading-relaxed line-clamp-3 ${
                      member.cardStyle?.text || "text-slate-300"
                    }`}
                  >
                    {member.funFact}
                  </p>
                </div>
              )}

              {member.githubUsername && (
                <div className="border-t border-slate-700 pt-6 mt-auto">
                  <a
                    href={`https://github.com/${member.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${
                      member.cardStyle?.text || "text-slate-400"
                    } hover:text-blue-400 transition-colors duration-200`}
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      className="w-5 h-5 mr-2 opacity-75"
                    />
                    @{member.githubUsername}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
