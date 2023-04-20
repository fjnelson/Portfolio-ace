import React from "react";
import "./pages.css";

export default function Recommendations() {
  const testimonials = [
    {
      name: "Jesse Moore",
      title: "Cybersecurity Leader | IT Consulting",
      content:
        "John is an easy-going and has a positive attitude, which makes him very approachable co-worker. I can trust him to assist to solve problems with his laser like focus with details,analysis, and creativity in a crisis.",
    },
    {
      name: "Brian Howe",
      title: "Business Technology Consultant and Solutions Engineer",
      content:
        "I worked with John at Opus interactive for only a brief period of time. He was the first person I met when I started. John is the glue that holds everything together. He's driven to not just meet client expectations, but exceed them every time. John plays an important role at Opus. So often I see businesses close a deal, get a check and move on. John picks up at the end of a sale and continues to nurture the customer client relationship in a way that really stands out. If I were starting a business tomorrow, John is someone I would poach to come work with me. John is calm, down to earth, always willing to step in where others dropped the ball, and he does so quietly, modestly. Staff love him, customers love him and you couldn't ask for a nicer guy to work with. It was a pleasure, John. Keep up the good work.",
    },
    {
      name: "Zac Shedd",
      title: "Tech enthusiast who loves the outdoors and all things dogs.",
      content:
        "John is always ready to lend a helping hand. His projects have been clean and precise with a driven purpose. He would make an excellent addition to any team. Highly recommended.",
    },
    {
      name: "Sharmaine Pineda",
      title: "Web Development and Healthcare",
      content:
        "John has outstanding leadership abilities. He took the initiative to lead our team, ensuring that all team members were on the same page and tasks were completed on time. His ability to coordinate tasks and communicate effectively with team members was instrumental in achieving the project goals.  John's keen eye for detail ensured that every element of the project was meticulously crafted, resulting in a polished and professional finished product. His exceptional work ethic, attention to detail, and proactive problem-solving skills make him an invaluable asset to any team.",
    },
    {
      name: "Peter Ataras",
      title: "--",
      content:
        "John and I were class mates in our full stack web development program. John took charge of his education and took advantage of every opportunity to further dissect and understand the code. He was happy to share his code in class and work with our peers as we all continued to learn the material. His dedication to excel is readily apparent not only in his code, but also in his positive attitude. If I was ever stuck on a challenge I knew John would be a great person to help guide me through my challenge.  During our time together John proved himself to be a very smart and driven developer. John constantly builds on his knowledge and surprises me with new and different ways to approach a challenge. He is a valued team member that I hope to work with again in the future.",
    },
    {
      name: "Sarah Hopper",
      title:
        "Pursuing a new career path and looking forward to a new chapter in my professional journey.",
      content:
        "I had the pleasure of being a classmate of John’s during an intensive coding “bootcamp.” As a highly condensed, material-dense course focused on learning by doing and troubleshooting, John demonstrated that he is a highly capable problem-solver and budding programmer/web developer.  Given how intense a challenge the course was, I especially appreciated John’s positive attitude and sense of humor, which was often a much needed boost to morale. He helped foster a supportive sense of community and camaraderie in the cohort. John is a joy to work with on a team and would be an excellent addition to any organization.",
    },
    {
      name: "Nick Morris",
      title: "Full Stack Engineer",
      content:
        "Throughout the 6 month long course, John was a mentor, a developer, and a friend who was everyone's go to person for collaboration. I worked with John with our project Meet-IO which turned out to be a fantastic project and something I know we are both proud of. For any future project I want to pursue, John will always be someone I will consider collaborating with.",
    },
  ];

  return (
    <div>
      <h1 className="testimonial-header">Testimonials</h1>
      <aside>
        <h2 className="LOR-header">Letters of Recommendation</h2>
        <ul className="LOR-link">
          <a href="/lor-1">Jack Gustafson, VP, Commercial SBU</a>
        </ul>
        <ul className="LOR-link">
          <a href="/lor-2">Jennifer Malone, Sr. Director, Commercial Enterprise IT</a>
        </ul>
      </aside>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <h2 className="testimonial-name">{testimonial.name}</h2>
              <p className="testimonial-title">{testimonial.title}</p>
              <p className="testimonial-text">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
