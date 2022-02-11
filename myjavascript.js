const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

    const containerLeft = document.getElementsByClassName("container")[0];
    const containerRight = document.getElementsByClassName("container")[1];

    const nuovaImgNuovoDiv = document.createElement("img")
    nuovaImgNuovoDiv.src = items[0]
    const nuovoDiv = document.createElement("div")
    containerLeft.append(nuovoDiv)
    nuovoDiv.append(nuovaImgNuovoDiv)

for ( let i=0; i < items.length ; i++){
    const div = document.createElement("div")
    containerRight.append(div)
    const nuovaImg = document.createElement('img');
    nuovaImg.src = items[i];
    div.append(nuovaImg);   
}



