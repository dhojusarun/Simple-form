import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-3xl">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 transition-colors duration-300">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">About This App</h1>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p className="text-base sm:text-lg leading-relaxed">
            This Todo application is developed using <span className="font-semibold text-purple-600 dark:text-purple-400">React</span> and{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript</span>.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            It demonstrates modern web development practices including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
            <li>Component-based architecture</li>
            <li>State management with React hooks</li>
            <li>Page routing with React Router</li>
            <li>Responsive design with TailwindCSS</li>
            <li>TypeScript for type safety</li>
            <li>Dark/Light theme support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
