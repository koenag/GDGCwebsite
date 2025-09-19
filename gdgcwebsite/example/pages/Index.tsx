import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-google-red via-google-yellow to-google-blue">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-google-red/70 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-google-yellow/70 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-google-blue/70 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-google-green/70 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-white font-manrope drop-shadow-lg">
            GDGC
          </h1>
          <p className="text-3xl sm:text-4xl lg:text-5xl text-white font-manrope font-normal mt-4 drop-shadow-md">
            Google Developer Group on Campus
          </p>
          <p className="text-4xl sm:text-5xl lg:text-6xl text-white font-manrope font-bold mt-2 drop-shadow-md">
            UCSC's Student Chapter
          </p>
          
          <Button 
            className="mt-12 bg-white/90 text-black hover:bg-white border-2 border-black rounded-full px-8 py-4 text-2xl font-manrope font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            Join Us →
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gdgc-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/751713843175665d56785fd30c74b62d88022f3b?width=1615"
                  alt="GDGC students working together"
                  className="w-full h-96 object-cover rounded-full border-4 border-black shadow-2xl"
                />
              </div>
            </div>
            
            {/* Right: About text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl lg:text-7xl font-bold text-black font-manrope mb-8">
                About
              </h2>
              <p className="text-xl lg:text-2xl text-black font-manrope leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24">
            {/* Workshops */}
            <div className="relative group">
              <div className="absolute inset-0 bg-google-blue/80 rounded-none"></div>
              <div className="relative bg-gdgc-beige rounded-full w-72 h-72 mx-auto flex items-center justify-center border-4 border-black shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/08c48b00559e2420e05d3197182d6e5995c3884d?width=532"
                  alt="Workshops"
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-white font-manrope text-center drop-shadow-lg stroke-black">
                  Workshops
                </h3>
                <p className="text-white text-center mt-2 px-4 font-manrope drop-shadow-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="relative group">
              <div className="absolute inset-0 bg-google-yellow/80 rounded-none"></div>
              <div className="relative bg-gdgc-beige rounded-full w-72 h-72 mx-auto flex items-center justify-center border-4 border-black shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/215863feb7a869b8a6c14ac677f21ca4179464c5?width=532"
                  alt="Projects"
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-white font-manrope text-center drop-shadow-lg stroke-black">
                  Projects
                </h3>
                <p className="text-white text-center mt-2 px-4 font-manrope drop-shadow-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="relative group">
              <div className="absolute inset-0 bg-google-red/80 rounded-none"></div>
              <div className="relative bg-gdgc-beige rounded-full w-72 h-72 mx-auto flex items-center justify-center border-4 border-black shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cc3cef2d351da6497aed6f764f785494ddde99d8?width=532"
                  alt="Socials"
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-white font-manrope text-center drop-shadow-lg stroke-black">
                  Socials
                </h3>
                <p className="text-white text-center mt-2 px-4 font-manrope drop-shadow-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
              </div>
            </div>

            {/* Internships */}
            <div className="relative group">
              <div className="absolute inset-0 bg-google-green/80 rounded-none"></div>
              <div className="relative bg-gdgc-beige rounded-full w-72 h-72 mx-auto flex items-center justify-center border-4 border-black shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/662247a11099648709ee13c43446e9b76ba799f3?width=532"
                  alt="Internships"
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-white font-manrope text-center drop-shadow-lg stroke-black">
                  Internships
                </h3>
                <p className="text-white text-center mt-2 px-4 font-manrope drop-shadow-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-80 bg-google-red/70 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-96 bg-google-yellow/70 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-72 h-72 bg-google-blue/70 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-40 w-88 h-64 bg-google-green/70 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl lg:text-8xl font-bold text-black text-center font-manrope mb-16">
            Our Sponsors
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[...Array(10)].map((_, index) => (
              <div 
                key={index}
                className="bg-gray-200/90 border-4 border-black rounded-3xl h-32 lg:h-40 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="text-2xl lg:text-4xl font-bold text-black font-manrope">
                  Sponsor
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl lg:text-8xl font-bold text-black text-center font-manrope mb-16">
            Upcoming Events
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d2ddc1d4f9d5f7656814867bac2647b67c5cea3b?width=2074"
              alt="Google Calendar showing upcoming GDGC events"
              className="w-full h-auto rounded-lg shadow-xl border-2 border-gray-200"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
