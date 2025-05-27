export default function Header() {
  return (
    <header className="justify-between flex items-center  py-6 px-6">
      <div>
        {/* <Image src="/logo.png" alt="Fostie" width={100} height={100} /> */}
        <h1 className="text-4xl font-bold text-center">Fostie</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 hover:cursor-pointer bg-orange-50/5 px-5 py-4 rounded-2xl group">
          <div>
            <svg
              className="h-6 w-6 fill-current group-hover:scale-125 transition"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"></path>
            </svg>
          </div>
          <span className="text-lg font-bold">Mac App Store</span>
        </div>
      </div>
    </header>
  );
}
