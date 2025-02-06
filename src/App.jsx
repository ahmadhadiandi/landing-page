import { useState } from 'react'
import { Menu, X, ArrowRight, Zap, Shield, BarChart } from 'lucide-react'

// Navbar Component
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Company', href: '#' },
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Logo</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="hidden sm:block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Sign In
            </button>
            
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
            <div className="pl-3 pr-4 py-3">
              <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Make your business grow with our solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your business with cutting-edge technology and expert support. 
            We help companies like yours achieve their full potential.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// Features Section Component
const FeaturesSection = () => {
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

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  )
}

export default App