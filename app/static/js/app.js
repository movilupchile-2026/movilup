document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const mobileButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  /*
   * ============================================================
   * HEADER / NAVBAR
   * ============================================================
   */

  const updateHeader = () => {
    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add("bg-[#071016]/95");
      header.classList.add("shadow-2xl");
    } else {
      header.classList.remove("bg-[#071016]/95");
      header.classList.remove("shadow-2xl");
    }
  };

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });


  /*
   * ============================================================
   * MENÚ MOBILE
   * ============================================================
   */

  if (mobileButton && mobileMenu) {

    mobileButton.addEventListener("click", () => {

      const isOpen =
        mobileButton.getAttribute("aria-expanded") === "true";

      mobileButton.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      mobileMenu.classList.toggle(
        "hidden",
        isOpen
      );
    });


    /*
     * Cerrar menú cuando se selecciona un enlace
     */

    const mobileLinks =
      mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mobileButton.setAttribute(
          "aria-expanded",
          "false"
        );

        mobileMenu.classList.add("hidden");

      });

    });

  }


  /*
   * ============================================================
   * IMPORTANTE
   * ============================================================
   *
   * NO agregar aquí lógica para:
   *
   * - quote-form
   * - cotización
   * - WhatsApp
   * - cálculo de precios
   * - adelanto 30%
   * - saldo 70%
   *
   * Todo eso pertenece exclusivamente a:
   *
   * templates/quotes/request.html
   *
   * Esto evita que app.js sobrescriba el mensaje generado
   * por el cotizador.
   *
   * ============================================================
   */

});