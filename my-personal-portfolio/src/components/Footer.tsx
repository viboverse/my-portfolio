import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-old-gold-400/30 border-t bg-neutral-900 py-8">
      <div className="mx-auto max-w-6xl px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2025 Vibo. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/viboverse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vahab-afsharian/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-blue-400"
            >
              <SiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
