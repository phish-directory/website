export default function CallToAction() {
  return (
    <div className="bg-viking-700">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your security
            <br />
            Start using our API today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-viking-200">
            Want to learn more about our API? Check out our documentation to get
            started. Interested in intergrating your api into our system? Got
            Questions? Email us at{' '}
            <a
              href="mailto:team@phish.directory"
              className="text-viking-200 hover:text-viking-100"
            >
              team@phish.directory
            </a>
            .
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://api.phish.directory/docs/#/User/post_user_signup"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-viking-600 shadow-sm hover:bg-viking-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a
              href="https://api.phish.directory/docs"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
