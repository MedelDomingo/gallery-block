document
  .querySelectorAll("#cards-block .cards-list__wrapper a")
  .forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log(link);
    });
  });

// We check check all the a tags under card-list__wrapper and get the href link to log it on the browser
