import './App.css'
import { teamMembers } from './team'
import githubIcon from './assets/github.svg'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 py-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-4 sm:mb-6">
            LCS Team Directory
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Welcome to our team directory!
          </p>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            New members: Create a new file in the team directory to add yourself!
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8 gap-x-4 place-items-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 sm:p-8 w-[280px] sm:w-[260px] md:w-[280px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)] border border-white/10 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {member.name}
              </h2>
              <p className="text-slate-600 text-lg font-medium mb-8">{member.role}</p>

              {member.funFact && (
                <div className="border-t border-slate-100 pt-6 mb-6">
                  <p className="text-slate-700 leading-relaxed">
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Fun fact:{' '}
                    </span>
                    {member.funFact}
                  </p>
                </div>
              )}

              {member.githubUsername && (
                <div className="border-t border-slate-100 pt-6">
                  <a
                    href={`https://github.com/${member.githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <img src={githubIcon} alt="GitHub" className="w-5 h-5 mr-2" />
                    @{member.githubUsername}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
