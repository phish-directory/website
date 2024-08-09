import Image from 'next/image'
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import groq from 'groq'
import { client } from '@/sanity/lib/client'

export interface SecondaryFeature {
  _key: string
  name: string
  description: string
  icon: string
  href?: string
}

export interface SecondaryFeatures {
  title: string
  subtitle: string
  description: string
  features: SecondaryFeature[]
}

// Define a mapping of icon names to actual icon components
const iconMap: { [key: string]: React.ComponentType<any> } = {
  ArrowPathIcon: ArrowPathIcon,
  CloudArrowUpIcon: CloudArrowUpIcon,
  LockClosedIcon: LockClosedIcon,
}

const featuresQuery = groq`
*[_type == "secondaryFeatures"][0]{
  title,
  subtitle,
  description,
  features,
}`

export default async function SecondaryFeaturesComponent() {
  const data: SecondaryFeatures = await client.fetch(featuresQuery)
  console.log('Fetched secondary features data:', data)

  if (!data) {
    return <div>No features data available</div>
  }

  return (
    <div className="bg-viking-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-viking-400 text-base font-semibold leading-7">
            {data.subtitle}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {data.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {data.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {data.features.map((feature: SecondaryFeature) => {
              const Icon = iconMap[feature.icon || '']
              return (
                <div key={feature._key} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    {Icon && (
                      <Icon
                        aria-hidden="true"
                        className="text-viking-400 h-5 w-5 flex-none"
                      />
                    )}
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    {feature.href && (
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-viking-400 text-sm font-semibold leading-6"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    )}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}
