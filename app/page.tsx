import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Trophy, Users, Clock } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import HeroAnimation from "@/components/hero-animation"
import { Button } from "@/components/ui/button"
import TimelineAnimation from "@/components/timeline-animation"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-10 py-10 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <Image src="/college_logo.png" alt="College Logo" width={40} height={40} className="object-contain z-50 relative text-right right-0" priority />
              <div className="inline-block rounded-lg bg-red-900/60 px-3 py-1 text-sm backdrop-blur-sm">
                Celebrating National Technology Day 2025
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                <span className="text-white">Hack</span>
                <span className="text-red-600">z://a</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-300">Intellect. Innovate. Implement</p>
              <p className="text-gray-400 max-w-md">
                Join the most exciting intercollege hackathon organized by IIIT Sonepat. Showcase your skills, network
                with peers, and win amazing prizes!
              </p>
              <div className="flex flex-col items-center sm:flex-row gap-4">
                <span className="font-bold text-2xl">Registrations Open!</span>
                <Link href="https://unstop.com/o/oH6XCJR?lb=U6LsRa6j" target="blank"><Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button></Link>
                {/* <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-950/30">
                  Learn More
                </Button> */}
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] w-full">
              {/* <Image src="/hackzilla-logo.png" alt="Hackzilla Logo" fill className="object-contain" priority /> */}
              <video
                src="/poster_video.mp4"
                className="object-contain w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gradient-to-b from-black to-red-950 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Offline Round Starts In</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>
          <CountdownTimer targetDate="2025-05-28T09:00:00" />
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Event Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-900/60 p-3 rounded-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Date & Time</h3>
                    <p className="text-gray-400">28th - 29th May 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-900/60 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Venue</h3>
                    <p className="text-gray-400">SBIT, IIIT Sonepat Transit Campus</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-900/60 p-3 rounded-lg">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Prize Pool</h3>
                    <p className="text-gray-400">Up to ₹50,000 Cash Prizes, Swags and Certificates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-900/60 p-3 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Participation</h3>
                    <p className="text-gray-400">Open to all college students</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/50 z-10"></div>
              <Image src="/gif.gif" alt="Hackathon Environment" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-16 bg-red-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Hackathon Themes</h2>
            <div className="h-1 w-20 bg-white mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Choose from these exciting themes to showcase your innovation and problem-solving skills
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-red-800 hover:border-red-500 transition-all hover:-translate-y-1"
              >
                <div className="text-red-500 mb-4">{theme.icon}</div>
                <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                <p className="text-gray-400">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <TimelineAnimation />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Event Timeline</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-800 to-red-600"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""} group`}>
                  <div className="w-1/2"></div>
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 shadow-lg group-hover:scale-125 transition-transform duration-300 shadow-red-600/50">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div
                    className={`w-1/2 p-4 rounded-lg bg-red-950/50 backdrop-blur-sm border border-red-900/50 
                      ${index % 2 === 0 ? "text-right mr-4" : "ml-4"} 
                      hover:bg-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <h3 className="font-bold text-red-300">{item.time}</h3>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* Sponsors */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Sponsors</h2>
            <div className="h-1 w-20 bg-red-600 mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Hackzilla is proudly sponsored by leading organizations committed to fostering innovation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white/10 p-6 rounded-lg flex items-center justify-center h-32">
              <Image alt="sponsor1" src="/sponsor1.webp" width={50} height={50}></Image>
              <p className="text-xl font-bold text-center">HSCSIT (DST), Haryana</p>
            </div>
            <div className="bg-white/10 p-3 rounded-lg items-center justify-center h-32">
              <p className="text-xl font-bold text-center">Platform Partner</p>
              <div className="w-full flex justify-center"><Image src="/UNSTOP_LOGO.png" alt="sponsor" width={200} height={30} className="object-fit"></Image></div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg items-center justify-center h-32">
              <p className="text-xl font-bold text-center">HackTour</p>
              <div className="w-full flex justify-center"><Image src="/HackTour.png" alt="sponsor" width={80} height={30} className="object-fit"></Image></div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg items-center justify-center h-32">
              <p className="text-xl font-bold text-center">GeeksForGeeks</p>
              <div className="w-full flex justify-center"><Image src="/gfg-logo.png" alt="sponsor" width={80} height={30} className="object-fit"></Image></div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg items-center justify-center h-32">
              <p className="text-xl font-bold text-center">xyz</p>
              <div className="w-full flex justify-center"><Image src="/xyz-logo.png" alt="sponsor" width={140} height={30} className="object-fit"></Image></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 bg-red-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h2>
            <div className="h-1 w-20 bg-white mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Have questions? Reach out to our team</p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedTestimonials testimonials={testimonials}/>
            {/* <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:border-red-500 hover:-translate-y-1">
              <p className="font-bold mb-2">Coordinator 1</p>
              <p className="text-gray-300">+91 9815975336</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:border-red-500 hover:-translate-y-1">
              <p className="font-bold mb-2">Coordinator 2</p>
              <p className="text-gray-300">+91 7905428300</p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg hover:border-red-500 hover:-translate-y-1">
              <p className="font-bold mb-2">Coordinator 3</p>
              <p className="text-gray-300">+91 8349680308</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-red-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">IIIT Sonepat Presents</p>
              <h2 className="text-2xl font-bold text-center">
                <span className="text-white">Hack</span>
                <span className="text-red-600">z://a</span>
              </h2>
            </div>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link> */}
              <Link href="https://www.instagram.com/hack.zillaiiits/" className="text-gray-400 hover:text-white" target="blank">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/posts/indian-institute-of-information-technology-iiit-sonepat_hackzilla-hackathon-unstop-activity-7326646790152146944-yD90/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYv_n4BNByNBpZgc58RYSB47OrTv0i_tuQ" className="text-gray-400 hover:text-white" target="blank">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Hackzilla - IIIT Sonepat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const themes = [
  {
    icon: <div className="text-3xl">🤖</div>,
    title: "AI & Machine Learning",
    description: "Build innovative solutions using artificial intelligence and machine learning algorithms.",
  },
  {
    icon: <div className="text-3xl">⛓️</div>,
    title: "Blockchain Technology",
    description: "Develop applications leveraging blockchain for security, transparency, and decentralization.",
  },
  {
    icon: <div className="text-3xl">🏥</div>,
    title: "Healthcare Innovation",
    description: "Create solutions that address challenges in healthcare delivery and patient care.",
  },
  {
    icon: <div className="text-3xl">🏙️</div>,
    title: "Smart Cities",
    description: "Design technologies to make urban environments more efficient, sustainable, and livable.",
  },
  {
    icon: <div className="text-3xl">🌱</div>,
    title: "Sustainable Development",
    description: "Build solutions that address environmental challenges and promote sustainability.",
  },
  {
    icon: <div className="text-3xl">💡</div>,
    title: "Open Innovation",
    description: "Choose your own problem statement and develop a creative solution.",
  },
]

const timeline = [
  {
    time: "8th May - 10:00 AM",
    event: "Registration Begins",
  },
  {
    time: "9th May - 9:00 AM",
    event: "Round 1 Begins",
  },
  {
    time: "16th May - 11:59 PM",
    event: "Registration Ends",
  },
  {
    time: "17th May - 11:59 PM",
    event: "Round 1 Ends",
  },
  {
    time: "20th May - 11:59 PM",
    event: "Shortlisted Participants Announced",
  },
  {
    time: "Day 1 (28 May) - 10:00 AM",
    event: "Opening Ceremony & Theme Announcement",
  },
  {
    time: "Day 1 - 12:00 PM",
    event: "Hackathon Begins",
  },
  {
    time: "Day 1 - 1:00 PM",
    event: "Lunch Break",
  },
  {
    time: "Day 1 - 4:00 PM",
    event: "1st Mentors Evaluation Round",
  },
  {
    time: "Day 1 - 8:00 PM",
    event: "Dinner",
  },
  {
    time: "Day 1 - 12:00 AM",
    event: "2nd Mentors Evaluation Round",
  },
  {
    time: "Day 2 (29 May) - 6:00 AM",
    event: "3rd Mentors Evaluation Round",
  },
  {
    time: "Day 2 - 8:00 AM",
    event: "Breakfast",
  },
  {
    time: "Day 2 - 8:30 AM",
    event: "Announcement of Top 10 Teams",
  },
  {
    time: "Day 2 - 9:00 AM",
    event: "Judges Round",
  },
  {
    time: "Day 2 - 9:30 AM",
    event: "Presentations Begin",
  },
  {
    time: "Day 2 - 12:00 PM",
    event: "Announcement of Winners",
  },
  {
    time: "Day 2 - 12:30 PM",
    event: "Award Ceremony & Closing",
  },
]

const testimonials = [
    {
      quote:
        "",
      name: "Shivansh Agrawal",
      designation: "shivansh.agrprof@gmail.com",
      src: "/1.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Lovish Singla",
      designation: "singlalovish26@gmail.com",
      src: "/2.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Kashish Nandwani",
      designation: "nandwanikashish14@gmail.com",
      src: "/3.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Aditya Kumar",
      designation: "aditya05yt@gmail.com",
      src: "/4.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Swati",
      designation: "swatipraj7087@gmail.com",
      src: "/5.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Prakhar Srivastava",
      designation: "prakharsrivastava0808@gmail.com",
      src: "/6.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Poshika Bhatnagar",
      designation: "poshikabhatnagar777@gmail.com",
      src: "/7.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Shubham Shoora",
      designation: "shoorashubham@gmail.com",
      src: "/8.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Aditya Joshi",
      designation: "adityaj2206@gmail.com",
      src: "/9.jpg",
    },
  ];