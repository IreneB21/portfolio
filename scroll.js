function scrollToBio() {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToProjects() {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToContact() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToLanding() {
    const landingSection = document.getElementById('landing-page');
    if (landingSection) {
        landingSection.scrollIntoView({ behavior: 'smooth' });
    }
}


