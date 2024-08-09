import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

export const revalidate = 1

export interface Stat {
  number: any
  label: string
}

export interface StatsModule {
  stats: Stat[]
  title: string
  description: string
  subDescription: string

  
}


const statQuery = groq`
  *[_type == "statsModule"][0]{
    "stats": stats[]{
      "number": number,
      "label": label,
      "_key": _key
    },
    title,
    description,
    subDescription
  }
`


export default async function StatsSection() {

  const data: StatsModule = await client.fetch(statQuery)
  console.log('Fetched stats data:', data)

  if (!data) {
    return <div>No stats data available</div>
  }

  return (
    <div className="bg-viking-950 py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our mission</h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-white">
            {data.description}
            </p>
            <p className="mt-10 max-w-xl text-base leading-7 text-white">
            {data.subDescription}
            </p>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {data.stats.map((stat) => (
                <div key={data.title} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-viking-400">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-viking-400">{stat.number}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
