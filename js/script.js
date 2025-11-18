gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    const words = document.querySelectorAll(".hero__title span");
    words.forEach(word => {
        const letters = word.textContent.trim().split("");
        word.innerHTML = letters
            .map(letter => `<span class="letter">${letter}</span>`)
            .join("");
    });

    gsap.fromTo(
      ".hero__animated",
      { scale: 0.5, opacity: 1 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    );

    const tlHero = gsap.timeline({ delay: 0.2 });

    tlHero.fromTo(
        ".hero__title .letter",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.03, duration: 0.05, ease: "power2.out" }
    );

    tlHero.fromTo(
        ".hero__name span",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.25, ease: "power3.out" },
        "-=0.1"
    );

    tlHero.fromTo(
        ".hero__descr",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.1"
    );

    tlHero.fromTo(
        ".hero__more",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.1"
    );

    tlHero.fromTo(
        ".hero__btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.1"
    );

    const serviceTitle = document.querySelector(".services__title");
    if (serviceTitle) {
        const titleText = serviceTitle.textContent.trim();
        serviceTitle.innerHTML = titleText
            .split("")
            .map(char => `<span class="letter">${char}</span>`)
            .join("");

        const tlServicesInfo = gsap.timeline({
            scrollTrigger: {
                trigger: ".services",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        tlServicesInfo.fromTo(
            ".services__title .letter",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
        );

        tlServicesInfo.fromTo(
            ".services__info-time",
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.1"
        );

        tlServicesInfo.fromTo(
            ".services__info-descr",
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.1"
        );
    }

    const itemsServices = document.querySelectorAll(".services__item");
    if (itemsServices.length) {
        const tlServicesItems = gsap.timeline({
            scrollTrigger: {
                trigger: ".services__block",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        itemsServices.forEach(item => {
            tlServicesItems.fromTo(
                item.querySelector(".services__item-line"),
                { scaleX: 0, transformOrigin: "left center" },
                { scaleX: 1, duration: 0.15, ease: "power3.out" }
            );
        });

        itemsServices.forEach(item => {
            tlServicesItems.fromTo(
                item.querySelector(".services__item-title"),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
            );

            tlServicesItems.fromTo(
                item.querySelector(".services__item-descr"),
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
                "-=0.5"
            );
        });
    }

    if (document.querySelector(".whywe")) {
        const tlWhywe = gsap.timeline({
            scrollTrigger: {
                trigger: ".whywe",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        tlWhywe.fromTo(
            ".whywe__line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.7, ease: "power3.out" }
        );

        tlWhywe.fromTo(
            ".whywe__title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
        );

        tlWhywe.fromTo(
            ".whywe__descr",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.2 },
            "-=0.3"
        );

        tlWhywe.fromTo(
            ".whywe__info-item",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.2 },
            "-=0.6"
        );

        const itemsWhywe = document.querySelectorAll(".whywe__item");
        itemsWhywe.forEach(item => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });

        const num = { val: 30 };
        gsap.to(num, {
            val: 37,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".whywe__num",
                start: "top 50%",
                toggleActions: "play reverse play reverse",
            },
            onUpdate: () => {
                document.querySelector(".whywe__num").textContent = Math.floor(num.val);
            }
        });
    }

    if (document.querySelector(".started")) {
        const tlStarted = gsap.timeline({
            scrollTrigger: {
                trigger: ".started",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        tlStarted.fromTo(
            ".started__line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.7, ease: "power3.out" }
        );

        tlStarted.fromTo(
            ".started__title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
        );

        tlStarted.fromTo(
            ".started__item-num",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.2 },
            "-=0.3"
        );

        const itemsStarted = document.querySelectorAll(".started__item");
        itemsStarted.forEach(item => {
            tlStarted.fromTo(
                item.querySelector(".started__item-line"),
                { scaleX: 0, transformOrigin: "left center" },
                { scaleX: 1, duration: 0.5, ease: "power3.out" }
            );

            tlStarted.fromTo(
                item.querySelector(".started__item-title"),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
                "-=0.4"
            );

            tlStarted.fromTo(
                item.querySelector(".started__item-descr"),
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
                "-=0.4"
            );
        });
    }

    if (document.querySelector(".credentials")) {
        const tlCredentials = gsap.timeline({
            scrollTrigger: {
                trigger: ".credentials",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        tlCredentials.fromTo(
            ".credentials__line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.7, ease: "power3.out" }
        );

        tlCredentials.fromTo(
            ".credentials__title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
        );

        tlCredentials.fromTo(
            ".credentials__name span",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.2 },
            "-=0.3"
        );

        tlCredentials.fromTo(
            ".credentials__info",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
        );

        tlCredentials.fromTo(
            ".credentials__info span:nth-of-type(1)",
            { width: 0 },
            { width: "100%", duration: 0.4, ease: "power3.out" }
        )
        .fromTo(
            ".credentials__info span:nth-of-type(2)",
            { height: 0 },
            { height: "100%", duration: 0.4, ease: "power3.out" }
        )
        .fromTo(
            ".credentials__info span:nth-of-type(3)",
            { width: 0 },
            { width: "100%", duration: 0.4, ease: "power3.out" }
        )
        .fromTo(
            ".credentials__info span:nth-of-type(4)",
            { height: 0 },
            { height: "100%", duration: 0.4, ease: "power3.out" }
        );

        tlCredentials.fromTo(
            ".credentials__bottom p",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.3 }
        );
    }

    if (document.querySelector(".faq")) {
        const tlFaq = gsap.timeline({
            scrollTrigger: {
                trigger: ".faq",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        tlFaq.fromTo(
            ".faq__line",
            { scaleX: 0, transformOrigin: "right center" },
            { scaleX: 1, duration: 0.7, ease: "power3.out" }
        );

        tlFaq.fromTo(
            ".faq__title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
        );

        gsap.utils.toArray(".faq__item").forEach((item, i) => {
        gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    });

    }

    if (document.querySelector(".contact")) {
        const splitText = (selector) => {
            const el = document.querySelector(selector);
            if (!el) return;
            el.innerHTML = el.textContent
                .split("")
                .map(letter => `<span class="letter">${letter}</span>`)
                .join("");
        };

        splitText(".contact__title");
        splitText(".contact__info-adress");

        const tlContact = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        });

        tlContact.fromTo(
            ".contact__line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.7, ease: "power3.out" }
        );

        tlContact.fromTo(
            ".contact__title .letter",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.03, duration: 0.05, ease: "power2.out" },
            "-=0.3"
        );

        tlContact.fromTo(
            ".contact__menu li",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, stagger: 0.2, duration: 0.5, ease: "power3.out" },
            "-=0.4"
        );

        tlContact.fromTo(
            ".contact__logo",
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4"
        );

        tlContact.fromTo(
            ".contact__info-write",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.4"
        );

        tlContact.fromTo(
            ".contact__info-adress .letter",
            { opacity: 0 },
            { opacity: 1, stagger: 0.01, duration: 0.02, ease: "power1.out" },
            "-=0.4"
        );

        tlContact.fromTo(
            ".contact__right-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=1.0"
        );

        tlContact.fromTo(
            ".contact__right-line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.7, ease: "power3.out" },
            "-=0.8"
        );

        tlContact.fromTo(
            ".contact__right-descr",
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.6"
        );

        tlContact.fromTo(
            ".contact__right-btn",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.5"
        );
    }
});



document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".pagecontent__title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".pagecontent__title",
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        }
    });
    gsap.utils.toArray(".pagecontent__content").forEach((p, i) => {
        gsap.from(p, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: p,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            },
            delay: 0.2
        });
    });
});

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});



document.addEventListener("DOMContentLoaded", () => {
  const popupButtons = document.querySelectorAll("[data-popup-open]");
  const popups = document.querySelectorAll(".popup");

  popupButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-popup-open");
      const popup = document.querySelector(`.popup[data-popup="${target}"]`);
      if (popup) {
        popup.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  popups.forEach(popup => {
    const inner = popup.querySelector(".popup__inner");
    const closeBtn = popup.querySelector(".popup__close");

    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
      document.body.style.overflow = "";
    });

    popup.addEventListener("click", (e) => {
      if (!inner.contains(e.target)) {
        popup.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });
});


$(document).ready(function () {
    $('.faq__item-title').on('click', function () {
        let parent = $(this).closest('.faq__item');
        let content = parent.find('.faq__item-content');
        if (parent.hasClass('active')) {
            parent.removeClass('active');
            content.stop(true, true).slideUp(300);
        } else {
            $('.faq__item.active').removeClass('active')
                .find('.faq__item-content').slideUp(300);

            parent.addClass('active');
            content.stop(true, true).slideDown(300);
        }
    });
});


const selects = document.querySelectorAll(".custom-select");
selects.forEach((select) => {
  const trigger = select.querySelector(".custom-select-selected");
  const options = select.querySelectorAll(".custom-select-option");
  const span = trigger.querySelector("span");
  trigger.addEventListener("click", () => {
    selects.forEach((s) => s !== select && s.classList.remove("active"));
    select.classList.toggle("active");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");
      span.textContent = option.textContent;
      select.classList.remove("active");
    });
  });
  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove("active");
    }
  });
});






document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".popup__form");

  forms.forEach(form => {
    const inputs = form.querySelectorAll("input, textarea");
    const checkbox = form.querySelector('input[name="agreed"]');
    const customSelects = form.querySelectorAll(".custom-select[data-required]");
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        clearError(input);
      });
    });
    form.querySelectorAll('input[name="name"]').forEach(input => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
        clearError(input);
      });
    });

    form.querySelectorAll('input[name="phone"]').forEach(input => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "").slice(0, 15);
        clearError(input);
      });
    });

    customSelects.forEach(select => {
      const selectedSpan = select.querySelector(".custom-select-selected span");
      const hiddenInput = select.querySelector('input[type="hidden"]');

      select.querySelectorAll(".custom-select-option").forEach(option => {
        option.addEventListener("click", () => {
          const value = option.textContent.trim();
          selectedSpan.textContent = value;
          if (hiddenInput) hiddenInput.value = value;
          select.classList.add("selected");
          clearError(select);
        });
      });
    });
    if (checkbox) {
      checkbox.addEventListener("change", () => {
        const block = checkbox.closest(".popup__form-agree");
        if (block) block.classList.toggle("error", !checkbox.checked);
      });
    }
    form.addEventListener("submit", e => {
      e.preventDefault();
      let isValid = true;
      form.querySelectorAll(".popup__form-error.active").forEach(el => el.classList.remove("active"));
      form.querySelectorAll(".popup__form-block.error").forEach(el => el.classList.remove("error"));
      if (checkbox?.closest(".popup__form-agree")) {
        checkbox.closest(".popup__form-agree").classList.remove("error");
      }

      inputs.forEach(input => {
        if (input.type === "checkbox") return;

        const value = input.value.trim();
        const block = input.closest(".popup__form-block") || input.closest(".popup__form-agree");
        const error = block?.querySelector(".popup__form-error");

        if (input.hasAttribute("required") && !value) {
          showError(block, error);
          isValid = false;
          return;
        }

        if (input.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          showError(block, error);
          isValid = false;
        }

        if (input.type === "tel" && value && (value.length < 6 || value.length > 15)) {
          showError(block, error);
          isValid = false;
        }
      });
      customSelects.forEach(select => {
        const selectedText = select.querySelector(".custom-select-selected span").textContent.trim();
        const placeholder = select.querySelector(".custom-select-selected span").dataset.placeholder || "Service Requested";
        const block = select.closest(".popup__form-block");
        const error = block?.querySelector(".popup__form-error");

        if (selectedText === placeholder || !select.classList.contains("selected")) {
          showError(block, error);
          isValid = false;
        }
      });
      if (checkbox && !checkbox.checked) {
        checkbox.closest(".popup__form-agree").classList.add("error");
        isValid = false;
      }

      if (isValid) {
        alert("Форма успешно отправлена!");
        console.log("Form data:", Object.fromEntries(new FormData(form)));
      }
    });
  });

  function clearError(el) {
    const block = el.closest(".popup__form-block") || el.closest(".popup__form-agree");
    const error = block?.querySelector(".popup__form-error");
    if (error) error.classList.remove("active");
    if (block) block.classList.remove("error");
  }

  function showError(block, errorEl) {
    if (block) block.classList.add("error");
    if (errorEl) errorEl.classList.add("active");
  }
});




document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu ul');
    const closeButton = document.querySelector('.header__menu-close');
    if (burger) {
        burger.addEventListener('click', () => {
            header.classList.toggle('show-menu');
        });
    }
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            header.classList.remove('show-menu');
        });
    }
    document.addEventListener('click', (event) => {
        const isClickInsideHeader = header.contains(event.target);
        const isClickOnBurger = burger && burger.contains(event.target);
        if (header.classList.contains('show-menu') && !isClickInsideHeader) {
            header.classList.remove('show-menu');
        }
        if (menu && menu.contains(event.target) && event.target.tagName === 'A') {
            header.classList.remove('show-menu');
        }
    });
});



function scrollToHash(offset = 0) {
    if (!window.location.hash) return;
    const hash = window.location.hash;
    const target = document.querySelector(hash);
    if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
}
window.addEventListener('load', () => scrollToHash(0));