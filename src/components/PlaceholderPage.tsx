interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-gdgc-beige to-white">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black font-manrope mb-8">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl lg:text-2xl text-gray-700 font-manrope mb-8 leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="bg-white/80 border-2 border-black rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-black font-manrope mb-4">
              Coming Soon!
            </h2>
            <p className="text-lg text-gray-600 font-manrope">
              This page is currently under development. Please check back later or continue prompting to help us build out this section.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
