export default function Experience() {
  const items = [
    {
      company: 'Infinitas Staffing',
      location: 'Corpus Christi, TX',
      role: 'Software Developer (Contract)',
      period: 'Mar 2026 – Present',
      description:
        'Develop R-based ecological modeling workflows, prepare biological, environmental, and spatial datasets using terra and ArcGIS, create CF-compliant NetCDF products, maintain R packages, and build interactive R Shiny applications.'
    },
    {
      company: 'Fusion IT Tek INC',
      location: 'Dallas, TX',
      role: 'Software Developer Intern',
      period: 'Aug 2025 – Mar 2026',
      description:
        'Developed Python data-ingestion and validation workflows using FastAPI and Flask, built React interfaces for internal data tools, created automated tests, maintained Git-based code history, and documented user workflows.'
    },
    {
      company: 'ACL Digital',
      location: 'India',
      role: 'Backend Software Engineer',
      period: 'Jan 2021 – May 2023',
      description:
        'Developed Java and Spring Boot microservices with Kafka-based processing, optimized SQL and PL/SQL across PostgreSQL, MySQL, and Oracle, built React dashboards, and automated CI/CD workflows using Jenkins.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Work Experience
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Over 3 years of experience developing scientific and enterprise
          applications using R, Python, Java, Spring Boot, spatial data,
          cloud technologies, and interactive web tools.
        </p>

        <ul className="space-y-6">
          {items.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="flex flex-col md:flex-row md:justify-between bg-white shadow-lg rounded-xl p-8 border-l-4 border-blue-600 transition-transform hover:scale-[1.01]"
            >
              <div className="md:w-2/3">
                <h3 className="font-bold text-xl text-gray-900">
                  {item.company}
                </h3>

                <p className="text-blue-600 font-semibold mb-2">
                  {item.role}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 md:mt-0 md:text-right flex flex-col justify-center">
                <p className="font-bold text-gray-800">{item.period}</p>
                <p className="text-sm text-gray-500 italic">
                  {item.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
