import React from 'react';

const Facts = () => {

  const content = [
    { pix: "bi-emoji-smile", nbr: 232, name: "Happy Clients" },
    { pix: "bi-journal-richtext", nbr: 521, name: "Projects" },
    { pix: "bi-headset", nbr: 1463, name: "Hours Of Support" },
    { pix: "bi-award", nbr: 25, name: "Awards" },
  ];
    return (
        <div>
            <section id="facts" className="facts">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      <h2>Facts</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <div className="row">
    {content.map((item, index) => ( 
      <div key={index} className="col-lg-3 col-md-6">
        <div className="count-box">
          <i className={`bi ${item.pix}`}></i>
          <span data-purecounter-start="0" data-purecounter-end={item.nbr} data-purecounter-duration="1" className="purecounter"></span>
          <p>{item.name}</p>
        </div>
      </div>
           ))}
      {/* <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
        <div className="count-box">
          <i className="bi bi-journal-richtext"></i>
          <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
          <p>Projects</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div className="count-box">
          <i className="bi bi-headset"></i>
          <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
          <p>Hours Of Support</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div className="count-box">
          <i className="bi bi-award"></i>
          <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="purecounter"></span>
          <p>Awards</p>
        </div>
      </div> */}

    </div>

  </div>
</section>
        </div>
    );
};

export default Facts;