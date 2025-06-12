export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src="src/images/about.jpg"
             alt="About" className="rounded-lg shadow-lg"/>
        <div>
          <h2 className="text-4xl font-extrabold mb-4">About me</h2>
          <p className="text-gray-600 mb-4">
            Software engineer with a passion for solving real‑world problems, cloud architectures, and AI‑driven products.
            I love turning complex challenges into elegant, scalable solutions.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <span className="text-3xl font-bold text-primary">5+</span>
              <p className="text-xs uppercase tracking-widest text-gray-500">Completed Projects</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-primary">2</span>
              <p className="text-xs uppercase tracking-widest text-gray-500">Years in Software</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
