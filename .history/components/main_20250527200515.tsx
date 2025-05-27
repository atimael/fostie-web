export default function Main() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className=" bg-orange-50 rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-[#1a1a1a] mb-6">
            Need help with Fostie? We're here to assist you.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Contact Support
              </h3>
              <a
                href="mailto:test@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-lg font-medium transition-colors"
              >
                hello@fostie.com
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
          <p>
            For technical support, feature requests, or general inquiries,
            please contact us at the email address above.
          </p>
          <p>We typically respond within 24-48 hours during business days.</p>
        </div>
      </div>
    </div>
  );
}
