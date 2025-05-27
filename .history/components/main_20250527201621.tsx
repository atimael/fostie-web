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
                href="mailto:hello@fostie.com"
                // className="group relative text-[#1a1a1a] text-lg font-medium transition-colors  hover:text-pink-400"
                className="relative whitespace-nowrap font-medium outline-none transition duration-200 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-[0.125rem] after:bg-teal-400 after:transition after:duration-200 after:content-[''] hover:text-teal-400 after:hover:translate-y-px"
              >
                Contact us
                {/* <span className="w-full h-[2px] bg-pink-400 transition-transform absolute bottom-0 left-0 translate-y-0 group-hover:translate-y-1"></span> */}
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
