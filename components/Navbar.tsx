import Link from "next/link";

export default function NavbarComponent(): JSX.Element {
  return (
    <header>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Armaan's Pokedex</span>
              <img
                className="sm:h-10 w-auto h-8"
                src="/Pokedex.png"
                alt=""
              />
            </Link>
          </div>
          <div className="ml-10 space-x-8">
            <Link
              href={"/contact-us"}
              className="inline-block py-2 text-base font-regular text-gray-900"
            >
              Contact us
            </Link>
            <Link
              href={"https://support.kreativeusa.com/hyperlink"}
              className="inline-block py-2 text-base font-regular text-gray-900"
            >
              Get support
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}