import Link from 'next/link'
import { useRouter } from "next/router";

const LinkPage = () => {
  const { query } = useRouter()

  console.log(query);

  return (
    <main>
      <Link href='/link?abc=123' prefetch={false}>
        <a>
          link
        </a>
      </Link>
    </main>
  )
}

export default LinkPage
