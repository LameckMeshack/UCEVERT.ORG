// $(".navTrigger").click(function () {
//   $(this).toggleClass("active");
//   console.log("Clicked menu");
//   $("#mainListDiv").toggleClass("show_list");
//   $("#mainListDiv").fadeIn();
// });
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `..nav, .home,
            .about__data, .about,
            .time-container, .team-page-section,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__section`,
  {
    interval: 200,
  }
);
