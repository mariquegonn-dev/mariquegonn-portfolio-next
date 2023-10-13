import Link from 'next/link'
import { SocialProps } from './types/socials-props'

export const Socials = ({ items }: SocialProps) => {
  return (
    <div className="fixed top-40 z-[1001] right-0">
      <ul className="flex flex-col gap-3 bg-gray-button py-4 px-2 rounded-[20px_0px_0px_20px] shadow-lg">
        {items.items.map((item, index) => (
          <li key={item.src}>
            <Link aria-label={item.alt} href={item.src} target="_blank">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
