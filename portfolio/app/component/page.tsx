import Image from "next/image";
import redimage from "../public/image/red.jpeg";

export default function Component() {
  const training = [
    {
      years: "2025",
      title: "ICT Assistance",
      company: "Moi Teaching and Referral Hospital",
    },
    {
      years: "2026 - Present",
      title: "ICT Assistance",
      company: "African Academy of Science",
    },
  ];

  const education = [
    {
      year: "2022-2025",
      education: "Diploma in Information Communication Technology",
      school: "Eldoret National Polytechnic",
    },
    {
      year: "2016-2020",
      education: "Kenya Certificate of Secondary Education",
      school: "Itoleka Girls Secondary School",
    },
    {
      year: "2022",
      education: "Certificate in Computer Packages",
      school: "Mount Zion",
    },
  ];

  const project = [
    {
      name: "Portfolio Website",
      tech: ["React"],
      status: "In Progress",
    },
    {
      name: "Landing Page",
      tech: ["Next.js"],
      status: "In Progress",
    },
    {
      name: "E-Commerce UI",
      tech: ["React"],
      status: "In Progress",
    },
    {
      name: "Admin Dashboard",
      tech: ["Next.js"],
      status: "In Progress",
    }

  ];

  return (
    <main className="min-h-screen bg-gray-400 flex justify-center py-10 px-4">
      <div className="w-full max-w-xl bg-gray-300 shadow-xl flex">


        <aside className="w-1/3 p-4 shadow-lg bg-gray-600">
          <div className="relative w-20 h-20 item-center mx-auto rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/image/red.jpeg"
              alt="redimage"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden:block font-sm  justify-between p-2 bg-gray-400  ">

            <h2 className="mt-3 font-sm text-sm font-bold">CONTACT</h2>
            <p className="text-sm font-sm item-left">📞0745200020</p>
            <p className="text-sm font-sm item-left gap-0">email</p>
            <p className="text-sm item-left">📍 Nairobi, Kenya</p>
          </div>

          <h2 className="mt-5 font-bold">SKILLS</h2>
          <ul className="text-sm text-left space-y-1">
            <li> Computer Hardware & Software Troubleshooting</li>
            <li> Network Setup & Basic Configuration (LAN/WAN)</li>
            <li> Microsoft Office 365 (Word, Excel, PowerPoint, Outlook)</li>
            <li> Database Basics (MySQL, SQL Queries)</li>
            <li> Web Development (HTML, CSS, JavaScript ,nextjs ,react)</li>
            <li>IT Support & Help Desk Assistance</li>
            <li> Cybersecurity Awareness & Basic Protection Practices</li>
            <li> System Installation & Maintenance </li>
            <li> File Management, Backup & Recovery </li>
            <li>Cloud Basics (Google Drive, OneDrive, Introduction to AWS)</li>
            <li> Networking Fundamentals (IP Addressing, DNS, DHCP)</li>
            <li> Basic Programming Concepts</li>
            <li> Technical Documentation & Reporting </li>
            <li>roblem Solving & Customer Support Skills</li>
            <li>Teamwork & Communication in IT Environment</li>
            <li> Hardware Setup (Printers, Routers, PCs)</li>
            <li>nextjs, react</li>
          </ul>

        </aside>


        <section className="w-2/3 p-8">

          <h1 className="text-3xl text-sm font-bold">Philomena Vivi</h1>
          <p className="text-gray-600">Front-End Developer</p>


          <h2 className="mt-5 font-bold text-xl">Training</h2>
          {training.map((job, index) => (
            <div key={index} className="mt-2">
              <p className="font-semibold">{job.years}</p>
              <p>{job.title}</p>
              <p className="text-gray-600">{job.company}</p>
            </div>
          ))}


          <h2 className="mt-6 font-bold text-xl">Education</h2>
          {education.map((item, index) => (
            <div key={index} className="mt-3">
              <p className="font-semibold">{item.year}</p>
              <p>{item.education}</p>
              <p className="text-black-600 text-sm">{item.school}</p>
            </div>
          ))}


          <h2 className="mt-6 font-bold text-xl">Projects</h2>

          <div className="mt-3 space-y-3">
            {project.map((proj, index) => (
              <div key={index} className="p-3 bg-gray text-black rounded shadow">
                <p className="font-semibold">{proj.name}</p>
                <p className="text-sm text-gray-600">
                  Tech: {proj.tech.join(", ")}
                </p>
                <p className="text-sm">{proj.status}</p>
              </div>
            ))}
          </div>

        </section>
      </div>
    </main>
  );
}