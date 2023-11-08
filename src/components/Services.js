import { ArrowPathIcon, FingerPrintIcon,DocumentTextIcon, UserCircleIcon, BanknotesIcon, WindowIcon, CalculatorIcon, HandRaisedIcon,DocumentIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'BoQ Tool',
    description:
      'Streamlining construction projects with accurate and comprehensive Bill of Quantities. Simplifying cost estimation and project planning for better efficiency.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Meet Professionals',
    description:
      'Connecting minds, unlocking opportunities. Embrace a world of knowledge with professionals from diverse domains.',
    icon: UserCircleIcon,
  },
  {
    name: 'Current Material Pricess',
    description:
      'Discover our updated BoQ website, where you can access real-time material prices, helping you stay informed and make cost-efficient decisions for your projects.',
    icon: BanknotesIcon,
  },
  {
    name: 'Our Designs',
    description:
      'Explore our exquisite designs, where creativity meets functionality. Elevate your space with our carefully curated selection, tailored to inspire and delight.',
    icon: WindowIcon,
  },
  {
    name: 'Single unit cost calculation',
    description:
      'Efficiency at its finest! Our BoQ website simplifies cost calculations with single-unit precision, saving you time and money on construction projects.',
    icon: CalculatorIcon,
  },
  {
    name: 'Help Center',
    description:
      'Find answers to your questions and get the support you need at our comprehensive Help Center. We are here to assist you every step of the way.',
    icon: DocumentIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Build faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to plan your dream
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          BoQ providing a detailed fact of quantities, specifications, and costs of materials needed for a project.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
