let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});


let tiles = Array.from(document.querySelectorAll('.tile'));
let currentTileIndex = 0;

function showTile(index) {
    tiles.forEach((tile, i) => {
        if (i === index) {
            tile.classList.add('active');
        } else {
            tile.classList.remove('active');
        }
    });
}

document.getElementById('arrow-right').addEventListener('click', () => {
    currentTileIndex = (currentTileIndex + 1) % tiles.length;
    showTile(currentTileIndex);
});

document.getElementById('arrow-left').addEventListener('click', () => {
    currentTileIndex = (currentTileIndex - 1 + tiles.length) % tiles.length;
    showTile(currentTileIndex);
});

showTile(currentTileIndex);