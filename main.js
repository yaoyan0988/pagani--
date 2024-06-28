// //橫向測側欄
const navBar = document.querySelector("nav"),
      menuBtns = document.querySelectorAll(".fa-bars"),
      lists = document.querySelector(".lists");
    menuBtns.forEach((menuBtn) => {
      menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
      });
    });
    lists.addEventListener("click", () => {
      navBar.classList.remove("open");
    });

    $(document).ready(function() {
      Swal.fire({
        imageUrl: "img/新聞稿-02.png",
        height: 1700,
        width:1200,
        imageAlt: "A tall image"
      });
    });

    