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
        showCloseButton: true,
        height: 1700,
        width:1200,
        confirmButtonText: `close`,
        confirmButtonColor: "#6df3f6",
      });
    });

    