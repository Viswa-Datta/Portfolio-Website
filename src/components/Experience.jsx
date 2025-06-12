export default function Experience() {
  const items = [
    {
      company: 'AWS Cloud Foundations Internship',
      location: 'Remote / Vijayawada',
      role: 'Cloud Intern',
      period: 'Oct 2021 – Dec 2021'
    },
    {
      company: 'Blue Prism RPA Internship',
      location: 'Remote / Vijayawada',
      role: 'RPA Trainee',
      period: 'Mar 2022 – May 2022'
    },
    
  ];
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">Work Experience</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Hands‑on experience across cloud, RPA, and full‑stack product development.
        </p>

        <ul className="space-y-6">
          {items.map(item => (
            <li key={item.company} className="flex flex-col md:flex-row md:justify-between bg-white shadow rounded-xl p-6">
              <div>
                <h3 className="font-bold text-lg">{item.company}</h3>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="font-medium">{item.role}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
