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
      // Swal.fire({
        
      //   showCloseButton: true,
      //   // showCancelButton: true,
      //   focusConfirm: false,
      //   confirmButtonText: `
      //     <i class="fa fa-thumbs-up"></i> Great!
      //   `,
      //   confirmButtonAriaLabel: "Thumbs up, great!",
      //   cancelButtonText: `
      //     <i class="fa fa-thumbs-down"></i>
      //   `,
      //   cancelButtonAriaLabel: "Thumbs down"
      // });
    });

    