import { ArrowRightIcon } from '@heroicons/react/20/solid'
import WelcomeHome from "../images/building-01.svg"

const features = [
  {
    name: 'Online BoQ platform:',
    description:
      'Provide a comprehensive understanding of the raw materials required and associated costs to a person who is not familiar with the construction',
    icon: ArrowRightIcon,
  },
  {
    name: 'Easy to use:',
    description: ' Empower the client who is lacking knowledge in building construction to accurately compare and estimate prices and determine the quantity of raw materials based on the BoQ provided by the contractors',
    icon: ArrowRightIcon,
  },
  {
    name: 'Consolting Platform:',
    description: 'Allows the clients to connect with and engage with qualified professionals, such as Quantity Surveyors, Civil Engineers, and Architects',
    icon: ArrowRightIcon,
  },
]

export default function Info() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Who we are?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">BoQ master</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a dynamic and dedicated team that specializes in delivering
            accurate and comprehensive Bills of Quantities. With our expertise
            and attention to detail, we ensure precise cost estimation and
            resource allocation for construction projects.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={WelcomeHome}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
