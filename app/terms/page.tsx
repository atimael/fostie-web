export default function Terms() {
  return (
    <section className="flex h-full w-full max-w-screen-xl flex-col items-center">
      <section className="motion-preset-blur-up motion-delay-250 h-full w-full">
        <h1 className="text-7xl font-bold text-orange-50 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-50 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By downloading, installing, or using Fostie, you agree to be bound
              by these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-50 mb-4">
              License
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Subject to your compliance with these Terms, we grant you a
              limited, non-exclusive, non-transferable license to use Fostie for
              your personal or commercial use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-50 mb-4">
              Restrictions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
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
            <h2 className="text-xl font-semibold text-orange-50 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fostie is provided "as is" without warranty of any kind. We do not
              guarantee that the application will be error-free or
              uninterrupted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-50 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In no event shall we be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of your
              use of Fostie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-50 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@fostie.com"
                className="relative whitespace-nowrap text-orange-50 
                font-medium outline-none 
                transition duration-200 after:pointer-events-none 
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-[0.125rem]
                 after:bg-pink-400 after:transition after:duration-200 after:content-[''] hover:text-pink-400 hover:after:translate-y-px"
              >
                Contact us
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-50 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting on this page.
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}
