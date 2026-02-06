const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const emoji = document.getElementById('emoji');
const question = document.getElementById('question');
const videoSection = document.getElementById('videoSection');
const myVideo = document.getElementById('myVideo');

const imagePaths = [
    'pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 
    'pic4.jpeg', 'pic5.jpeg', 'pic6.jpeg', 
    'pic7.jpeg', 'pic8.jpeg', 'pic9.jpeg'
];

function createFallingElement(content, color) {
    const el = document.createElement('div');
    el.classList.add('falling-element');
    el.innerHTML = content;
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = Math.random() * 15 + 15 + 'px';
    el.style.animationDuration = Math.random() * 2 + 3 + 's';
    if(color) el.style.color = color;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}
setInterval(() => createFallingElement('❤️', '#ff4d6d'), 400);

function moveNoButton() {
    emoji.innerText = '😭'; 
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.max(20, Math.floor(Math.random() * maxX)) + 'px';
    noBtn.style.top = Math.max(20, Math.floor(Math.random() * maxY)) + 'px';
}
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoButton(); });

function showFloatingPictures() {
    const positions = [
        {top: '15%', left: '20%'}, {top: '15%', right: '20%'}, 
        {bottom: '30%', left: '30%'}, {bottom: '30%', right: '30%'},
        {top: '40%', left: '14%'}, {top: '40%', right: '14%'}, 
        {top: '16%', left: '35%'}, {top: '16%', right: '35%'}, 
        {bottom: '15%', left: '50%', transform: 'translateX(-50%)'}
    ];

    imagePaths.forEach((path, index) => {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = path;
            img.classList.add('floating-pic');
            Object.assign(img.style, positions[index]);
            document.body.appendChild(img);
            
            setTimeout(() => img.classList.add('show'), 50);
        }, index * 400); 
    });
}

yesBtn.addEventListener('click', () => {
    emoji.innerText = '🥰';
    question.innerHTML = "love you kanmani! 😘";
    document.getElementById('btnGroup').style.display = 'none';
    
    videoSection.style.display = 'block';
    myVideo.play();

    showFloatingPictures();

    setInterval(() => createFallingElement('🌸', '#ffb7c5'), 300);

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

});
