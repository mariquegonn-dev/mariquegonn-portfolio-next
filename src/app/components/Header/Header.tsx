import Link from 'next/link'

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="bg-[#28293D] fixed left-0 right-0 z-[1000] border-b-[1px] border-[#2d2e42]">
      <div className="mx-auto max-w-7xl flex justify-between items-center p-10">
        <Link
          href="/"
          className="text-white-primary text-xl font-semibold tracking-wider hover:text-purple-primary transition-colors duration-300"
        >
          MARIQUEGONN
        </Link>
        {children}
      </div>
    </header>
  )
}
