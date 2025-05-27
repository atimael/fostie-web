export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen  flex flex-col">
      {/* Header */}
      <header className=" shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Fostie
          </h1>
          <p className="text-lg text-gray-600 text-center mt-2">
            macOS Application
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Support</h2>

          <div className=" rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Need help with Fostie? We're here to assist you.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Contact Support
                </h3>
                <a
                  href="mailto:test@gmail.com"
                  className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                >
                  test@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 space-y-2">
            <p>
              For technical support, feature requests, or general inquiries,
              please contact us at the email address above.
            </p>
            <p>We typically respond within 24-48 hours during business days.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className=" border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <div className="text-sm text-gray-600">
              <p>&copy; {currentYear} Fostie. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="mailto:test@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="text-xs text-gray-500 pt-4 border-t border-gray-100">
              <p>
                Fostie is a macOS application. macOS is a trademark of Apple
                Inc.
              </p>
              <p className="mt-1">
                This application is not affiliated with, endorsed by, or
                sponsored by Apple Inc.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
