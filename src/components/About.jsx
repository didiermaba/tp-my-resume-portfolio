import React from 'react';

const About = () => {

  const com1 = {parag : "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." };

  const job = { res : "UI/UX Designer &amp; Web Developer" };

  const com2 = { res :" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua."};

  const infos = [
    {  info : "birthday", res : "1 May 1985"},
    {  info : "site", res : "www.example.com"},
    {  info : "phone", res : "01234567890"},
    {  info : "city", res : "New York, USA"}
    
];

  const infos2 = [
    {info : "age", res : "30 ans"},
    {info : "Degree", res : "Master"},
    {info : "email", res : "email@example.com"},
    {info : "Freelance", res : "Available"},
    
  ];

 const com3 = { parag : "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium  dolor incidunt officia tempore. Et eius omnis.Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores."}

    return (
        <div>
            <section id="about" className="about">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      <h2>About</h2>
      <p>{com1.parag}</p>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <img src="src/assets/img/profile-img.jpg" className="img-fluid" alt=""/>
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content">
        <h3>{job.res}.</h3>
        <p className="fst-italic">
         {com2.res}
        </p>
        <div className="row">
              {infos.map((item) => (
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>{item.info}:</strong> <span>{item.res}</span></li>             
            </ul>
          </div>
              ))}

              {infos2.map((item) => (
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>{item.info}:</strong> <span>{item.res}</span></li>
             
            </ul>
          </div>
            ))}
        </div>
        <p>
         {com3.parag}
        </p>
      </div>
    </div>

  </div>
</section>
        </div>
    );
};

export default About;