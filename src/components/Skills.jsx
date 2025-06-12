export default function Skills() {
  const skills = [
    {
      title: 'Backend',
      desc: 'Designing robust REST APIs and microservices.',
      tools: ['Spring Boot', 'Node.js', 'JWT']
    },
    {
      title: 'Frontend',
      desc: 'Building responsive, accessible UIs.',
      tools: ['React', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'DevOps & Cloud',
      desc: 'Containerization and cloud deployments.',
      tools: ['Docker', 'AWS', 'GitHub Actions']
    },
  ];
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">Professional Skills</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Tools and technologies I use to craft high‑quality software.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {skills.map(card => (
            <div key={card.title} className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center text-white text-3xl mb-6">
                {card.title[0]}
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <ul className="text-primary space-y-1">
                {card.tools.map(t => <li key={t}>→ {t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
