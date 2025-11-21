import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  )
}