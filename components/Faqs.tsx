import groq from 'groq'
import { client } from '@/sanity/lib/client'



interface Faq {
  id: string;
  question: string;
  answer: string;
}

interface FaqsModule {
  title: string;
  faqs: Faq[];
}


const faqsQuery = groq`
*[_type == "faqsModule"][0]{
  title,
  faqs[]{
    question,
    answer
  }
}`
export default async function Faqs() {


  const data = await client.fetch<FaqsModule>(faqsQuery)

  return (
    <div className="bg-viking-950">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
          {data.title}
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {data.faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-white lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-white">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
