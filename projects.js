const monCoinCadeau = {
    id: "moncoincadeau",
    title: "Mon Coin Cadeau",
    description: "Site de liste d'envies avec session utilisateur, commentaires, partage sur réseaux sociaux.",
    illustration: ['./images/mon-coin-cadeau/illustration1.png', './images/mon-coin-cadeau/illustration2.jpg', './images/mon-coin-cadeau/illustration3.png', './images/mon-coin-cadeau/illustration4.png', './images/mon-coin-cadeau/illustration5.png', './images/mon-coin-cadeau/illustration6.png']
};

const siteClaire = {
    id: "siteclaire",
    title: "Claire Parisienne",
    description: "Ce site de photographe, réalisé avec un backend en PHP, permet d'afficher des albums photos dynamiquement. Cliquer sur l’une des photos ouvre une pop-up permettant de faire défiler les photos de l'album auquel elle appartient. Le site est aussi doté d'un formulaire qui permettra aux utilisateurs de contacter la propriétaire.",
    illustration: ['./images/site-claire/illustration1.png', './images/site-claire/illustration2.png', './images/site-claire/illustration3.png', './images/site-claire/illustration4.png']
};

const siteCathy = {
    id: "sitecathy",
    title: "Cathy Lourenço, psychologue",
    description: "Ce projet, réalisé pour une psychologue qui souhaite un site à la fois coloré et sobre, classique et chaleureux, dispose d'un formulaire de contact grâce auquel elle recevra par email le message et les coordonnées des utilisateurs souhaitant prendre rendez-vous.",
    illustration: ['./images/site-cathy/illustration1.png', './images/site-cathy/illustration2.png', './images/site-cathy/illustration3.png', './images/site-cathy/illustration4.png', './images/site-cathy/illustration5.png', './images/site-cathy/illustration6.png']
};

const aPenLife = {
    id: "apenlife",
    title: "A Pen's Life",
    description: "Voici un petit projet humoristique mais non moins fonctionnel, réalisé dans le cadre de ma formation de Développeuse PHP à la Wild Code School : le portfolio d’un stylo bic. Avec un frontend CSS/JS et un petit formulaire traité en PHP, des fois que quelqu’un veuille contacter Pen pour une mission ! Images générées par IA",
    illustration: ['./images/a-pen-life/illustration1.jpg', './images/a-pen-life/illustration2.jpg', './images/a-pen-life/illustration3.jpg', './images/a-pen-life/illustration4.jpg', './images/a-pen-life/illustration5.jpg', './images/a-pen-life/illustration6.jpg', './images/a-pen-life/illustration7.jpg']
};

const projects = [monCoinCadeau, siteClaire, siteCathy, aPenLife];
let currentImg;
let maxIndex;

// Display project elements (title, description, illustration)

window.onload = (event) => {
    const project = window.location.search.substring(1).replaceAll('-', '');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const illustrations = document.getElementsByClassName('illustration-project');

    for(let i=0; i<projects.length; i++) {
        if (project === projects[i].id) {
            title.textContent = projects[i].title;
            description.textContent = projects[i].description;
            illustrations[0].setAttribute('style', 'background-image: url(' + projects[i].illustration[0] + ')');
            illustrations[1].setAttribute('style', 'background-image: url(' + projects[i].illustration[1] + ')');
            currentImg = projects[i].illustration[1];
            console.log("current Img = " + currentImg);
        }
    }
}

console.log(currentImg);

// Carrousel illustration

function goToPreviousImg() {
    if (currentIndexImg == 0) {
        currentIndexImg--;
        document.getElementById('diapo').style.backgroundImage = 'url(' + currentAlbum[currentIndexImg] + ')';
    } else {
        illustrations[0].setAttribute('style', 'background-image: url(' + projects[i].illustration[0] + ')');
    }
}

function goToNextImg() {
    if (currentIndexImg < maxIndex) {
        currentIndexImg++;
        document.getElementById('diapo').style.backgroundImage = 'url(' + currentAlbum[currentIndexImg] + ')';
    } else {
        document.getElementById('diapo').style.backgroundImage = 'url(' + currentAlbum[0] + ')';
        currentIndexImg = 0;
    }
}