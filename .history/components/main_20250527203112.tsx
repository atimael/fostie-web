export default function Main() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className=" bg-orange-50/5 rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-[#1a1a1a] mb-6">
            Need help with Fostie? We're here to assist you.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:hello@fostie.com"
              className="relative whitespace-nowrap 
                font-medium outline-none 
                transition duration-200 after:pointer-events-none 
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-[0.125rem]
                 after:bg-pink-400 after:transition after:duration-200 after:content-[''] hover:text-pink-400 hover:after:translate-y-px"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
