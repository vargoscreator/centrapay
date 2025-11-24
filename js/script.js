gsap.registerPlugin(ScrollTrigger);

const contactLogo = document.querySelectorAll('.contact__logo img');
gsap.from(contactLogo, {
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.contact__logo',
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

const headertLogo = document.querySelectorAll('.header__logo img');
gsap.from(headertLogo, {
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.header__logo',
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

contactLogo.forEach((img, i) => {
    const direction = i % 2 === 0 ? 1 : -1;
    const amplitude = 5 + Math.random() * 5;
    const duration = 2 + Math.random() * 1.5;

    gsap.to(img, {
        y: `+=${amplitude * direction}`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const splitTextIntoLetters = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return;
        const text = el.textContent.trim();
        el.innerHTML = text
            .split("")
            .map(char => `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`)
            .join("");
    };

    document.querySelectorAll(".hero__title span").forEach(span => {
        const letters = span.textContent.trim().split("");
        span.innerHTML = letters.map(l => `<span class="letter">${l}</span>`).join("");
    });

    splitTextIntoLetters(".services__title");
    splitTextIntoLetters(".contact__title");
    splitTextIntoLetters(".contact__info-adress");

    gsap.fromTo(".hero__animated", 
        { scale: 0.5, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    );

    const tlHero = gsap.timeline({ delay: 0.3 });
    tlHero.fromTo(".hero__title .letter", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.05, stagger: 0.03, ease: "power2.out" }
    );
    tlHero.fromTo(".hero__name span", 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: "power3.out" }, "-=0.4"
    );
    tlHero.fromTo(".hero__descr", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4"
    );
    tlHero.fromTo(".hero__more", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4"
    );
    tlHero.fromTo(".hero__btn", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.4"
    );

    gsap.utils.toArray(".services__title .letter").forEach((letter, i) => {
        gsap.from(letter, {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".services",
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            delay: i * 0.05
        });
    });

    gsap.from(".services__info-time, .services__info-descr", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".services",
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });

    document.querySelectorAll(".services__item").forEach((item, index) => {
        const line   = item.querySelector(".services__item-line");
        const title  = item.querySelector(".services__item-title");
        const descr  = item.querySelector(".services__item-descr");

        if (line) {
            gsap.from(line, {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        if (title) {
            gsap.from(title, {
                opacity: 0, y: 30, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" },
                delay: 0.2
            });
        }

        if (descr) {
            gsap.from(descr, {
                opacity: 0, y: -20, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" },
                delay: 0.3
            });
        }
    });

    gsap.from(".whywe__line", { scaleX: 0, transformOrigin: "left center", duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".whywe", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".whywe__title", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".whywe", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".whywe__descr", { y: 30, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".whywe", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".whywe__info-item", { x: -40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".whywe", start: "top 80%", toggleActions: "play none none reverse" }
    });

    document.querySelectorAll(".whywe__item").forEach(item => {
        gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
    });

    const numCounter = { val: 30 };
    gsap.to(numCounter, {
        val: 37,
        duration: 2.5,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".whywe__num",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        onUpdate: () => {
            document.querySelector(".whywe__num").textContent = Math.round(numCounter.val);
        }
    });

    gsap.to(".started__line", {
        scaleX: 1,
        duration: 0.9,
        ease: "power3.out",
        transformOrigin: "left center",
        scrollTrigger: {
            trigger: ".started",
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(".started__title", { y: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: ".started", start: "top 70%", toggleActions: "play none none reverse" }
    });

    gsap.from(".started__item-num", { x: -40, opacity: 0, stagger: 0.15, duration: 0.7,
        scrollTrigger: { trigger: ".started", start: "top 20%", toggleActions: "play none none reverse" }
    });

    document.querySelectorAll(".started__item").forEach(item => {
        const line  = item.querySelector(".started__item-line");
        const title = item.querySelector(".started__item-title");
        const descr = item.querySelector(".started__item-descr");

        if (line)  gsap.from(line,  { scaleX: 0, transformOrigin: "left center", duration: 0.8, scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none reverse" }});
        if (title) gsap.from(title, { y: 30, opacity: 0, duration: 0.7, delay: 0.2, scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none reverse" }});
        if (descr) gsap.from(descr, { y: -20, opacity: 0, duration: 0.7, delay: 0.3, scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none reverse" }});
    });

    gsap.from(".credentials__line", { scaleX: 0, transformOrigin: "left center",  duration: 1,
        scrollTrigger: { trigger: ".credentials", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".credentials__title", { y: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: ".credentials", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".credentials__name span", { x: -40, opacity: 0, stagger: 0.15, duration: 0.7,
        scrollTrigger: { trigger: ".credentials", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".credentials__info", { y: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: ".credentials", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".credentials",
            start: "top 75%",
            toggleActions: "play none none reverse",
        }
    })
    .fromTo(".credentials__info span:nth-of-type(1)", 
        { width: 0 }, 
        { width: "100%", duration: 0.6, ease: "power3.out" }
    )

    .fromTo(".credentials__info span:nth-of-type(2)", 
        { height: 0 }, 
        { height: "100%", duration: 0.6, ease: "power3.out" },
        0.6
    )

    .fromTo(".credentials__info span:nth-of-type(3)", 
        { width: 0 }, 
        { width: "100%", duration: 0.6, ease: "power3.out" },
        1.2
    )

    .fromTo(".credentials__info span:nth-of-type(4)", 
        { height: 0 }, 
        { height: "100%", duration: 0.6, ease: "power3.out" },
        1.8
    );

    gsap.from(".credentials__bottom p", { y: 30, opacity: 0, stagger: 0.2, duration: 0.7,
        scrollTrigger: { trigger: ".credentials__bottom", start: "top 85%", toggleActions: "play none none reverse" }
    });

    gsap.from(".faq__line", { scaleX: 0, transformOrigin: "right center", duration: 1,
        scrollTrigger: { trigger: ".faq", start: "top 80%", toggleActions: "play none none reverse" }
    });

    gsap.from(".faq__title", { y: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: ".faq", start: "top 80%", toggleActions: "play none none reverse" }
    });

    document.querySelectorAll(".faq__item").forEach((item, i) => {
        gsap.from(item, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 95%",
                toggleActions: "play none none reverse"
            },
            delay: i * 0.1
        });
    });

    if (document.querySelector(".contact")) {

    const splitTextForContact = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return;
        
        const fullText = el.textContent.trim();
        
        el.innerHTML = fullText
            .split("")
            .map(letter => {
                const content = letter === ' ' ? '&nbsp;' : letter;
                return `<span class="letter">${content}</span>`;
            })
            .join("");
    };
    splitTextForContact(".contact__info-adress"); 
        
        const splitTitle = () => {
            const title = document.querySelector(".contact__title");
            if (!title || title.dataset.split) return;
            title.dataset.split = "true";

            title.innerHTML = title.textContent
                .split("")
                .map(char => `<span class="letter">${char === " " ? "&nbsp;" : char}</span>`)
                .join("");
        };

        splitTitle();

        const tlContact = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                start: "top 80%",
                toggleActions: "play none none reverse"
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
            "<"
        );

        tlContact.fromTo(
            ".contact__right-line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.7, ease: "power3.out" },
            "-=0.5"
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
    
    gsap.from(".pagecontent__title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".pagecontent__title",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
    
    gsap.utils.toArray(".pagecontent__content").forEach(p => {
        gsap.from(p, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: p,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            delay: 0.2
        });
    });
    
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
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

const upBtn = document.querySelector('.upbtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    upBtn.classList.add('active');
  } else {
    upBtn.classList.remove('active');
  }
});
upBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
