import React from 'react'

export default function NotFound() {
  return (
          <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div class="text-center">
                <p class="text-5xl font-bold text-red-600">404</p>
                <h1 class="mt-4 text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                  Page not found
                </h1>
                <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
              </div>
            </main>
  )
}
