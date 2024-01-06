AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Azure Fundamentals Cloud Skill Challenge",
    cardImage: "assets/images/education-page/1.jpg",
    moocLink: "assets/images/education-page/1.jpg"
  },
  {
    title: "Power Platform Fundamentals-Cloud Skills Challenge",
    cardImage: "assets/images/education-page/2.jpg",
    moocLink: "assets/images/education-page/2.jpg",
  },
  {
    title: "Power Automate Fundamentals-Cloud Skills Challenge",
    cardImage: "assets/images/education-page/3.jpg",
    moocLink: "assets/images/education-page/3.jpg",
  },
  {
    title: "Innovating with Data and Google Cloud",
    cardImage: "assets/images/education-page/4.jpg",
    moocLink: "assets/images/education-page/4.jpg",
  },
  {
    title: "Infrastructure and Application Modernization with Google Cloud",
    cardImage: "assets/images/education-page/5.jpg",
    moocLink: "assets/images/education-page/5.jpg",
  },
  {
    title: "DATASPRINT",
    cardImage: "assets/images/education-page/6.jpg",
    moocLink: "assets/images/education-page/6.jpg",
  },
  {
    title: "React Bootcamp",
    cardImage: "assets/images/education-page/7.png",
    moocLink: "assets/images/education-page/7.png",
  },
  {
    title: "TechMinds Challenge",
    cardImage: "assets/images/education-page/8.jpg",
    moocLink: "assets/images/education-page/8.jpg",
  },
  {
    title: "Cloud Practitioner Essentials course",
    cardImage: "assets/images/education-page/9.jpg",
    moocLink:
      "assets/images/education-page/9.jpg",
  },
  {
    title: "Cloud Skill Challenge",
    cardImage: "assets/images/education-page/10.jpg",
    moocLink: "assets/images/education-page/10.jpg",
  },
  {
    title: "Understanding Google Cloud Security and Operations",
    cardImage: "assets/images/education-page/11.jpg",
    moocLink: "assets/images/education-page/11.jpg",
  },
  {
    title: "Digital Transformation with Google Cloud",
    cardImage: "assets/images/education-page/12.jpg",
    moocLink:
      "assets/images/education-page/12.jpg",
  },
];



let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showSkills();
});

function showSkills() {
  setInterval(function () {
    if (currentItem === skills.length) {
      currentItem = 0;
    }
    const item = skills[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);



const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
