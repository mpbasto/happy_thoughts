import Image from 'next/image'

import { urlFor } from '../lib/sanity.image'
import type { Author } from '../lib/sanity.queries'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlFor(picture).height(96).width(96).fit('crop').url()
              : 'https://cdn.sanity.io/images/96tcnw0k/production/721948d2dec91bb6e88ba351487a36d51cc67143-64x64.png'
          }
          className="rounded-full"
          height={96}
          width={96}
          // TODO: add alternative text to avatar image schema
          alt=""
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

