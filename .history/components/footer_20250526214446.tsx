export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>&copy; {currentYear} Fostie. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="mailto:test@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
            <p>
              Fostie is a macOS application. macOS is a trademark of Apple Inc.
            </p>
            <p className="mt-1">
              This application is not affiliated with, endorsed by, or sponsored
              by Apple Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
