import React from "react";

const Resume = () => {
  const com6 = {
    res: " Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  };

  const com7 = {
    res: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
  };

  const sumary = {
    fullname: "Brandon Johnson",
    com8: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
    tel: "(123) 456-7891",
    adress: "Portland par 127,Orlando, FL",
    email: "alice.barkley@example.com",
  };

  const education = [
    {
      degree: "Master of Fine Arts &amp; Graphic Design",
      year: "2015 - 2016",
      institute: "Rochester Institute of Technology, Rochester, NY",
      com9: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
    },
    {
      degree: "Bachelor of Fine Arts &amp; Graphic Design",
      year: "2010 - 2014",
      institute: "Rochester Institute of Technology, Rochester, NY",
      com9: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
    },
  ];

  const ProfExp = [
    {
      level: "Senior graphic design specialist",
      year: "2019 - Present",
      society: "Experion, New York, NY ",
      tasks: [
        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
      ],
    },
    {
      level: "Graphic design specialist",
      year: "2017 - 2018",
      society: "Stepping Stone Advertising, New York, NY ",
      tasks: [
        "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).",
        "Managed up to 5 projects or tasks at a given time while under pressure",
        "Recommended and consulted with clients on the most appropriate graphic design",
        "Created 4+ design presentations and proposals a month for clients and account managers",
      ],
    },
  ];
  return (
    <div>
      <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Resume</h2>
            <p>{com6.res}</p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>{sumary.fullname}</h4>
                <p>
                  <em>{com7.res}</em>
                </p>
                <ul>
                  <li>{sumary.adress}</li>
                  <li>{sumary.tel}</li>
                  <li>{sumary.email}</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              {education.map((item, index) => (
                <div key={index} class="resume-item">
                  <h4>{item.degree}</h4>
                  <h5>{item.year}</h5>
                  <p>
                    <em>{item.institute}</em>
                  </p>
                  <p>{item.com9}</p>
                </div>
              ))}
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              {ProfExp.map((item, index) => (
                <div key={index} class="resume-item">
                  <h4>{item.level}</h4>
                  <h5>{item.year}</h5>
                  <p>
                    <em>{item.society}</em>
                  </p>
                  <ul>
                    {item.tasks.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
