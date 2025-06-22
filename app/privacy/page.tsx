export default function Privacy() {
  return (
    <section className="motion-preset-blur-up motion-delay-250">
      <h1 className="text-7xl font-bold text-orange-50 mb-8">Privacy Policy</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-50 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Fostie is designed with privacy in mind. We do not collect, store,
            or transmit any personal information from users of our macOS
            application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-50 mb-4">
            Data Storage
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            All data processed by Fostie remains locally on your device. We do
            not have access to any information you input or generate while using
            the application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-50 mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Fostie does not integrate with any third-party services that would
            have access to your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-orange-50 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
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
            Changes to This Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </section>
  );
}
