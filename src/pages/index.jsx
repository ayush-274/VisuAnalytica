// src/pages/index.jsx
import ThemeToggle from "../components/ThemeToggle";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">InsightEase</h1>
        <div className="flex items-center gap-4">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</a>
          <a href="/register" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">Register</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Analyze & Visualize Your Data — No Code Needed
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Upload your dataset and turn it into insights with our intelligent, user-friendly platform.
        </p>
        <div className="flex gap-4">
          <a href="/upload" className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700">Upload Data</a>
          <a href="/demo" className="px-6 py-3 border border-blue-600 text-blue-600 text-lg rounded hover:bg-blue-600 hover:text-white">Try Demo</a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-8 bg-gray-50 dark:bg-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-12">Key Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "📊", title: "No-Code Visualizations", desc: "Generate interactive charts and dashboards in seconds." },
            { icon: "🧠", title: "Machine Learning", desc: "Train and test models like Decision Trees, SVMs, and more." },
            { icon: "📈", title: "Smart Insights", desc: "Get AI-generated statistical summaries instantly." },
            { icon: "🗃️", title: "Saved Workspaces", desc: "Resume previous analysis anytime with saved sessions." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-100 dark:bg-gray-800">
        © {new Date().getFullYear()} InsightEase. All rights reserved.
      </footer>
    </div>
  );
}
