import { Zap, Shield, BarChart } from 'lucide-react'

const features = [
  {
    name: 'Lightning Fast',
    description:
      'Experience blazing-fast performance with our optimized solutions. Quick loading times and responsive interfaces guaranteed.',
    icon: Zap,
  },
  {
    name: 'Secure by Design',
    description:
      'Built with security in mind. Your data is protected with industry-leading encryption and security practices.',
    icon: Shield,
  },
  {
    name: 'Detailed Analytics',
    description:
      'Make data-driven decisions with our comprehensive analytics suite. Track, measure, and improve your business metrics.',
    icon: BarChart,
  },
]

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features that set us apart
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform comes packed with all the tools you need to succeed in today's competitive market.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection