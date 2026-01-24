export default function Experience() {
  const items = [
    {
      company: 'State of Nevada',
      location: 'Remote (Contract)',
      role: 'Java Full Stack Developer',
      period: 'Jul 2025 – Present',
      description: 'Designing scalable full-stack applications using Java 17, Spring Boot, and React.js to modernize digital infrastructure.'
    },
    {
      company: 'Accenture',
      location: 'Bengaluru / Hyderabad, India',
      role: 'Software Engineer (Java Developer)',
      period: 'Jan 2021 – Jul 2023',
      description: 'Developed high-volume Spring Boot microservices and optimized PostgreSQL database performance for global clients.'
    },
    {
      company: 'Aadya Informatics',
      location: 'Hyderabad, India',
      role: 'Junior Software Engineer',
      period: 'Aug 2019 – Dec 2020',
      description: 'Built RESTful web services and enterprise portal modules using Java 8, Spring MVC, and MySQL.'
    },
    {
      company: 'Blue Prism RPA Internship',
      location: 'Vijayawada, India',
      role: 'RPA Trainee',
      period: 'Mar 2022 – May 2022',
      description: 'Designed automation flows and built 3+ RPA bots to streamline business operations.'
    },
    {
      company: 'AWS Cloud Foundations Internship',
      location: 'Vijayawada, India',
      role: 'Cloud Intern',
      period: 'Oct 2021 – Dec 2021',
      description: 'Gained hands-on experience with AWS EC2, S3, and IAM for cloud infrastructure deployment.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">Work Experience</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Over 4 years of experience specializing in Java/Spring Boot development, cloud-native architecture, and full‑stack solutions.
        </p>

        <ul className="space-y-6">
          {items.map(item => (
            <li key={`${item.company}-${item.period}`} className="flex flex-col md:flex-row md:justify-between bg-white shadow-lg rounded-xl p-8 border-l-4 border-blue-600 transition-transform hover:scale-[1.01]">
              <div className="md:w-2/3">
                <h3 className="font-bold text-xl text-gray-900">{item.company}</h3>
                <p className="text-blue-600 font-semibold mb-2">{item.role}</p>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right flex flex-col justify-center">
                <p className="font-bold text-gray-800">{item.period}</p>
                <p className="text-sm text-gray-500 italic">{item.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
