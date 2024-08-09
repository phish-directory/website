import Image from 'next/image'
import groq from 'groq'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const heroQuery = groq`
*[_type == "heroModule"][0]{
  backgroundImage,
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA
}`

export default async function Hero() {
  try {
    const hero: HeroModule = await client.fetch(heroQuery)
    console.log('Fetched hero data:', hero)  // Logging the fetched data

    if (!hero) {
      return <div>No hero data available</div> // Fallback UI
    }

    return (
      <div className="bg-gray-900">
        <div className="relative isolate overflow-hidden pt-14">
          {hero.backgroundImage && (
            <Image
              alt="Background Image"
              src={urlFor(hero.backgroundImage).url()}
              className="absolute inset-0 -z-10 h-full w-full object-fit"
              width={1920}
              height={1080}
              priority
            />
          )}
          <div className="absolute inset-0 -z-10 bg-dust-950 opacity-70" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-viking-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {hero.badge && (
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  {hero.badge.text}{' '}
                  {hero.badge.link && (
                    <a href={hero.badge.link.url} className="font-semibold text-white">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {hero.badge.link.text} <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            )}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {hero.description}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {hero.primaryCTA && (
                  <a
                    href={hero.primaryCTA.url || '#'}
                    className="rounded-md bg-viking-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-viking-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viking-400"
                  >
                    {hero.primaryCTA.text || 'Get started'}
                  </a>
                )}
                {hero.secondaryCTA && (
                  <a
                    href={hero.secondaryCTA.url || '#'}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    {hero.secondaryCTA.text || 'Learn more'} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-dust-200 to-viking-950 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return <div>Error loading hero data</div>
  }
}

export type HeroModule = {
  _type: 'heroModule'
  backgroundImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
    }
  }
  badge?: {
    text?: string
    link?: {
      text?: string
      url?: string
    }
  }
  title?: string
  description?: string
  primaryCTA?: {
    text?: string
    url?: string
  }
  secondaryCTA?: {
    text?: string
    url?: string
  }
}
