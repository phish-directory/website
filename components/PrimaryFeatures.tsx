import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import groq from 'groq'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export interface Feature {
  name: string
  description: string
  icon: string
}

export interface PrimaryFeatures {
  title: string
  subtitle: string
  description: string
  features: Feature[]
  image: {
    asset: {
      _ref: string
    }
  }
}
// Define a mapping of icon names to actual icon components
const iconMap: { [key: string]: React.ComponentType<any> } = {
  CloudArrowUpIcon: CloudArrowUpIcon,
  LockClosedIcon: LockClosedIcon,
  ServerIcon: ServerIcon,
}

const featuresQuery = groq`
*[_type == "primaryFeatures"][0]{
  title,
  subtitle,
  description,
  features,
  image
  
}`

export default async function PrimaryFeaturesComponent() {
  const data: PrimaryFeatures = await client.fetch(featuresQuery)
  console.log('Fetched primary features data:', data)

  if (!data) {
    return <div>No features data available</div>
  }

  return (
    <div className="bg-viking-950 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-viking-400 text-base font-semibold leading-7">
                {data.subtitle}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {data.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {data.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {data.features && data.features.map((feature: Feature) => {
                  const Icon = iconMap[feature.icon as string] // Cast feature.icon as string
                  if (!Icon) return null; // Add a type guard to check if Icon exists
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        {Icon && (
                          <Icon
                            aria-hidden="true"
                            className="text-viking-500 absolute left-1 top-1 h-5 w-5"
                          />
                        )}
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          {data.image && (
            <Image
              alt="Product screenshot"
              src={urlFor(data.image).url()}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          )}
        </div>
      </div>
    </div>
  )
}
