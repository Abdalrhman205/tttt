
// start
document.addEventListener("DOMContentLoaded", function () {
  var link1 = document.getElementById("skill");
  var targetElement1 = document.getElementById("skill1");
  link1.addEventListener("click", function (event) {
    event.preventDefault();
    targetElement1.scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("Achievements");
  var targetElement = document.getElementById("Achievements1");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var link2 = document.getElementById("resume");
  var targetElement2 = document.getElementById("resume1");
  link2.addEventListener("click", function (event) {
    event.preventDefault();
    targetElement2.scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var link3 = document.getElementById("about");
  var targetElement3 = document.getElementById("about1");
  link3.addEventListener("click", function (event) {
    event.preventDefault();
    targetElement3.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// End

// Web project page
function showProjectDetails(
  title,
  description,
  footer,
  imageUrl,
  extraImages = []
) {
  let extraImagesHTML = "";
  if (extraImages.length > 0) {
    extraImagesHTML = "<h4 style='margin-top:15px;'>Additional Images</h4>";
    extraImages.forEach((img) => {
      extraImagesHTML += `<img src="${img}" alt="Extra Image" style="max-width:100%;margin-top:5px;border-radius:8px;">`;
    });
  }
  Swal.fire({
    html: `
        <img src="${imageUrl}" alt="${title}" style="max-width:100%;margin-bottom:15px;border-radius:8px;">
        <h2 style="margin-bottom:10px;">${title}</h2>
        <p style="font-size:16px;">${description}</p>
        ${extraImagesHTML}
      `,
    footer: footer,
    width: 600,
    confirmButtonText: "Close",
  });
}

// end Web project page

// Certificate page
function showCertificateDetails(
  title,
  description,
  footer,
  imageUrl,
  extraImages = []
) {
  let extraImagesHTML = "";

  if (extraImages.length > 0) {
    extraImagesHTML =
      "<h4 style='margin-top:15px;'>Event / Activity Photos</h4>";
    extraImages.forEach((img) => {
      extraImagesHTML += `<img src="${img}" alt="Extra Photo" style="max-width:100%;margin-top:5px;border-radius:8px;">`;
    });
  }

  Swal.fire({
    html: `
      <img src="${imageUrl}" alt="${title}" style="max-width:100%;margin-bottom:15px;border-radius:8px;">
      <h2 style="margin-bottom:10px;">${title}</h2>
      <p style="font-size:16px;">${description}</p>
      <a href="${imageUrl}" download style="display:inline-block;margin-top:10px;color:#007bff;text-decoration:underline;">Download Certificate</a>
      ${extraImagesHTML}
    `,
    footer: footer,
    width: 600,
    confirmButtonText: "Close",
  });
}
// end Certificate page

