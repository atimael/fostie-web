export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By downloading, installing, or using Fostie, you agree to be
                bound by these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                License
              </h2>
              <p className="text-gray-700 mb-4">
                Subject to your compliance with these Terms, we grant you a
                limited, non-exclusive, non-transferable license to use Fostie
                for your personal or commercial use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Restrictions
              </h2>
              <p className="text-gray-700 mb-4">You may not:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Reverse engineer, decompile, or disassemble the application
                </li>
                <li>Remove or modify any copyright notices</li>
                <li>
                  Use the application for any illegal or unauthorized purpose
                </li>
                <li>
                  Distribute or make the application available to third parties
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-700 mb-4">
                Fostie is provided "as is" without warranty of any kind. We do
                not guarantee that the application will be error-free or
                uninterrupted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                In no event shall we be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of your
                use of Fostie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="text-gray-700">
                <a
                  href="mailto:test@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  test@gmail.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting on this
                page.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
