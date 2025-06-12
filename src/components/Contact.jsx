import face from '@/images/face.jpg'; // Adjust the path as necessary

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <img src={face} alt="" className="w-20 h-20 mx-auto rounded-full mb-4" />
        <h2 className="text-4xl font-extrabold mb-6">Contact Me</h2>
        <form
          className="space-y-6"
          onSubmit={e => { e.preventDefault(); alert('Thanks!'); }}
        >
          <input type="email" placeholder="Enter your email" className="w-full border-b py-3 focus:outline-none" required/>
          <input type="tel" placeholder="Enter your phone number" className="w-full border-b py-3 focus:outline-none"/>
          <textarea rows="3" placeholder="Enter your message" className="w-full border-b py-3 focus:outline-none" required/>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-full hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
        <footer className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Viswa Datta Gudapati. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
