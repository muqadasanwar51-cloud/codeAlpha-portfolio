// ======================================================
// MUQADAS ANWAR - PORTFOLIO JAVASCRIPT
// ======================================================


// ======================================================
// 1. WAIT UNTIL PAGE IS LOADED
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // ==================================================
    // 2. STICKY HEADER SHADOW
    // ==================================================

    const header = document.querySelector("header");

    if (header) {

        function headerShadow() {

            if (window.scrollY > 20) {

                header.style.boxShadow =
                    "0 10px 30px rgba(0, 0, 0, 0.12)";

            } else {

                header.style.boxShadow =
                    "0 5px 25px rgba(0, 0, 0, 0.08)";
            }
        }

        window.addEventListener("scroll", headerShadow);

        // Run once when page loads
        headerShadow();
    }


    // ==================================================
    // 3. ACTIVE NAVIGATION
    // ==================================================

    const navLinks = document.querySelectorAll(".nav-links a");

    if (navLinks.length > 0) {

        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";

        navLinks.forEach(function (link) {

            const linkPage =
                link.getAttribute("href");

            // Remove previous active class
            link.classList.remove("active");

            // Add active class to current page
            if (linkPage === currentPage) {

                link.classList.add("active");
            }

        });
    }


    // ==================================================
    // 4. SMOOTH SCROLL
    // ==================================================

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            // Ignore empty "#"
            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    // ==================================================
    // 5. FADE-IN ANIMATION FOR CARDS
    // ==================================================

    const animatedElements =
        document.querySelectorAll(
            ".skill-card, " +
            ".project-card, " +
            ".info-card, " +
            ".resume-card, " +
            ".contact-form, " +
            ".contact-info"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(entry.target);
                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        animatedElements.forEach(function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(40px)";

            element.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            observer.observe(element);
        });

    } else {

        // Fallback for old browsers

        animatedElements.forEach(function (element) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        });
    }


    // ==================================================
    // 6. TYPING EFFECT - HOME PAGE
    // ==================================================

    const typing =
        document.querySelector(".typing");

    if (typing) {

        const text =
            "Frontend Developer | UI/UX Designer";

        let index = 0;

        // Clear existing text
        typing.textContent = "";

        function typeText() {

            if (index < text.length) {

                typing.textContent +=
                    text.charAt(index);

                index++;

                setTimeout(typeText, 80);

            }
        }

        typeText();
    }


    // ==================================================
    // 7. GITHUB PROFILE LINK
    // ==================================================

    const githubURL =
        "https://github.com/muqadasanwar51-cloud";

    const githubLinks =
        document.querySelectorAll(
            ".footer-social a[aria-label='GitHub'], " +
            ".footer-social a .fa-github"
        );

    githubLinks.forEach(function (element) {

        let link = element;

        // If icon was selected, get parent <a>
        if (element.tagName === "I") {
            link = element.closest("a");
        }

        if (link) {

            link.href = githubURL;

            link.target = "_blank";

            link.rel = "noopener noreferrer";
        }

    });


   // ==================================================
// 8. LINKEDIN PROFILE LINK
// ==================================================

const linkedinURL =
    "https://www.linkedin.com/in/muqadas-rajpoot-ab2488291";

const linkedinLinks =
    document.querySelectorAll(".footer-social a");

linkedinLinks.forEach(function (link) {

    const icon = link.querySelector(".fa-linkedin-in");

    if (icon) {

        link.setAttribute("href", linkedinURL);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");

    }

});

    // ==================================================
    // 9. EMAIL FUNCTIONALITY
    // ==================================================

    const email =
        "muqadasanwar51@gmail.com";

    const emailLinks =
        document.querySelectorAll(
            'a[href="mailto:muqadasanwar51@gmail.com"], ' +
            ".email-link, " +
            ".contact-email"
        );

    emailLinks.forEach(function (link) {

        link.href =
            "mailto:" + email;

    });


    // ==================================================
    // 10. GITHUB BUTTONS ON PROJECTS PAGE
    // ==================================================

    const projectGithubButtons =
        document.querySelectorAll(
            ".project-buttons .github-btn"
        );

    projectGithubButtons.forEach(function (button) {

        // Only set profile if no specific GitHub URL
        // has already been provided.
        if (
            !button.getAttribute("href") ||
            button.getAttribute("href") === "#"
        ) {

            button.href =
                githubURL;
        }

        button.target = "_blank";

        button.rel =
            "noopener noreferrer";
    });


    // ==================================================
    // 11. VIEW DESIGN BUTTONS
    // ==================================================

    const designButtons =
        document.querySelectorAll(
            ".project-buttons .design-btn"
        );

    designButtons.forEach(function (button) {

        const href =
            button.getAttribute("href");

        // If a real link exists, open it normally
        if (
            href &&
            href !== "#"
        ) {

            button.target = "_blank";

            button.rel =
                "noopener noreferrer";
        }

    });


    // ==================================================
    // 12. EXTERNAL LINKS
    // ==================================================

    const externalLinks =
        document.querySelectorAll(
            'a[href^="http://"], a[href^="https://"]'
        );

    externalLinks.forEach(function (link) {

        link.target = "_blank";

        link.rel =
            "noopener noreferrer";
    });

// ==================================================
// CONTACT FORM - WEB3FORMS
// ==================================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            // ==============================
            // GET FORM VALUES
            // ==============================

            const name =
                document
                    .getElementById("contactName")
                    .value
                    .trim();


            const senderEmail =
                document
                    .getElementById("contactEmail")
                    .value
                    .trim();


            const subject =
                document
                    .getElementById("contactSubject")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("contactMessage")
                    .value
                    .trim();


            const sendButton =
                document.getElementById("sendButton");


            // ==============================
            // VALIDATION
            // ==============================

            if (!name) {

                alert("Please enter your name.");

                document
                    .getElementById("contactName")
                    .focus();

                return;
            }


            if (!senderEmail) {

                alert("Please enter your email.");

                document
                    .getElementById("contactEmail")
                    .focus();

                return;
            }


            if (!subject) {

                alert("Please enter a subject.");

                document
                    .getElementById("contactSubject")
                    .focus();

                return;
            }


            if (!message) {

                alert("Please enter your message.");

                document
                    .getElementById("contactMessage")
                    .focus();

                return;
            }


            // ==============================
            // SHOW SENDING
            // ==============================

            sendButton.disabled = true;

            sendButton.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Sending...';


            // ==============================
            // FORM DATA
            // ==============================

            const formData =
                new FormData(contactForm);


            // ==============================
            // SEND TO WEB3FORMS
            // ==============================

            try {

                const response =
                    await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",
                            body: formData
                        }
                    );


                const result =
                    await response.json();


                // ==============================
                // SUCCESS
                // ==============================

                if (result.success) {

                    alert(
                        "Your message has been sent successfully!"
                    );


                    contactForm.reset();

                }


                // ==============================
                // ERROR
                // ==============================

                else {

                    console.error(
                        "Web3Forms Error:",
                        result
                    );


                    alert(
                        "Message could not be sent. " +
                        "Please check your Web3Forms access key."
                    );

                }


            } catch (error) {

                console.error(
                    "Web3Forms Error:",
                    error
                );


                alert(
                    "Something went wrong. " +
                    "Please check your internet connection and try again."
                );

            }


            // ==============================
            // RESET BUTTON
            // ==============================

            sendButton.disabled = false;

            sendButton.innerHTML =
                '<i class="fas fa-paper-plane"></i> Send Message';

        }
    );

}


    // ==================================================
    // 14. DOWNLOAD CV BUTTON
    // ==================================================

    const cvButtons =
        document.querySelectorAll(
            ".download-cv, " +
            ".cv-btn, " +
            'a[href="resume.html"]'
        );

    cvButtons.forEach(function (button) {

        const href =
            button.getAttribute("href");

        // Don't change Resume navigation.
        // Only add functionality to buttons
        // specifically meant for downloading CV.
        if (
            button.classList.contains("download-cv") ||
            button.classList.contains("cv-btn")
        ) {

            button.addEventListener(
                "click",
                function (event) {

                    const cvFile =
                        "resume/Muqadas_Anwar_CV.pdf";

                    // If your CV has this filename,
                    // the browser will download it.
                    const downloadLink =
                        document.createElement("a");

                    downloadLink.href =
                        cvFile;

                    downloadLink.download =
                        "Muqadas_Anwar_CV.pdf";

                    document.body.appendChild(
                        downloadLink
                    );

                    downloadLink.click();

                    document.body.removeChild(
                        downloadLink
                    );

                }
            );
        }

    });


    // ==================================================
    // 15. CURRENT YEAR IN FOOTER
    // ==================================================

    const footerBottom =
        document.querySelector(".footer-bottom");

    if (footerBottom) {

        const year =
            new Date().getFullYear();

        footerBottom.innerHTML =
            "© " +
            year +
            " Muqadas Anwar. All Rights Reserved.";
    }


    // ==================================================
    // 16. SCROLL TO TOP BUTTON
    // ==================================================

    const scrollTopButton =
        document.querySelector(".scroll-top");

    if (scrollTopButton) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    scrollTopButton.classList.add(
                        "show"
                    );

                } else {

                    scrollTopButton.classList.remove(
                        "show"
                    );
                }

            }
        );


        scrollTopButton.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }


    // ==================================================
    // 17. MOBILE NAVIGATION
    // ==================================================

    const navbar =
        document.querySelector(".navbar");

    const nav =
        document.querySelector(".nav-links");

    const menuButton =
        document.querySelector(".menu-toggle");


    if (
        navbar &&
        nav &&
        menuButton
    ) {

        menuButton.addEventListener(
            "click",
            function () {

                nav.classList.toggle("show");

                menuButton.classList.toggle("active");
            }
        );


        // Close menu when a link is clicked
        nav.querySelectorAll("a").forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        nav.classList.remove(
                            "show"
                        );

                        menuButton.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );
    }


    // ==================================================
    // 18. PROJECT CARD HOVER
    // ==================================================

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );

    projectCards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.zIndex = "2";
            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.zIndex = "1";
            }
        );

    });


    // ==================================================
    // 19. PROTECT AGAINST EMPTY # LINKS
    // ==================================================

    const emptyLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );

    emptyLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    });


    // ==================================================
    // 20. PAGE LOADED
    // ==================================================

    console.log(
        "Muqadas Anwar Portfolio loaded successfully."
    );

});