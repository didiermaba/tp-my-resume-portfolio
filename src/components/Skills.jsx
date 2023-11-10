import React from 'react';

const Skills = () => {

  const com5 = { 
    res : "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." 
  } 

  const skill = [
    {skil : "HTML", val : "100%", ariaValuenow : "100"},
    {skil : "CSS", val : "90%", ariaValuenow : "90"},
    {skil : "JavaScript", val : "75%",  ariaValuenow : "75"}
  ]
  const skill2 = [
    {skil : "PHP", val : "80%",  ariaValuenow : "80"},
    {skil : "WordPress/CMS", val : "90%",  ariaValuenow : "90"},
    {skil : "Photoshop", val : "55%",  ariaValuenow : "55"}
  ]

    return (
        <div>
            <section id="skills" class="skills section-bg">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Skills</h2>
      <p>{com5.res}</p>
    </div>

    <div class="row skills-content">

      {skill.map((item, index) => (
      <div class="col-lg-6">

        <div key={index} class="progress">
          <span class="skill">{item.skil}<i class="val">{item.val}</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow={item.ariaValuenow} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

       
      </div>
      ))}

{skill2.map((item, index) => (
      <div class="col-lg-6">

        <div key={index} class="progress">
          <span class="skill">{item.skil} <i class="val">{item.val}</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow={item.ariaValuenow} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>
  ))}

    </div>

  </div>
</section>
        </div>
    );
};

export default Skills;