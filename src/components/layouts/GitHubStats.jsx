import React from "react";

export default function GithubStats() {
    // Año actual y años anteriores para el selector

    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-3 text-start">GitHub Stats</h2>
        <div className=" p-10 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=CamiloCuenca&show_icons=true&theme=tokyonight&hide_title=true"
              alt="GitHub Stats"
              className="w-100 h-32 rounded-xl "
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=CamiloCuenca&layout=compact&theme=tokyonight&hide_title=true"
              alt="Top Languages"
              className="w-100 h-32 rounded-xl "
            />
          </div>
          
        </div>
      </div>
    );
  }
