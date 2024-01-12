import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

function IssuesPage() {
  return (
    <div>
        <Button variant="solid"><Link href="/issues/new">New Issue Page</Link></Button>
    </div>
  )
}

export default IssuesPage