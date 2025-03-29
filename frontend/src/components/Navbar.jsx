import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { syncAction } from '@/actions/userActions'
async function navbar() {
    const user = await currentUser()
    console.log("In the navbar")
    if (user) {
        const result = await syncAction();
        if (result.success) {
            console.log("user in table")
        }
        console.log(result.message)
    }
  return (
      <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex items-center justify-between">
              <Link href="/" className="text-white text-lg font-bold">
                  ChefMind
              </Link>
              <div className="flex items-center space-x-4">
                  <Link href="/recipes" className="text-gray-300 hover:text-white">
                      Recipes
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white">
                      About
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                      Contact
                  </Link>
              </div>
          </div>
      </nav>
  )
}

export default navbar


