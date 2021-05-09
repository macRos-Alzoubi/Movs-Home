let age = prompt("who old are you?")
while(age < 16){
    age = prompt('You entered an invalid input your age must be 16 or greater.');
}

alert('Welcome To Your Home Of Movies');

// Assigning movies description from the internet
let theExpendables2 = `The Expendables 2 is a 2012 American action film directed by Simon West, written by Richard Wenk and Sylvester Stallone and based on a story by Ken Kaufman, David Agosto and Wenk. Brian Tyler returned to score the film. It is the sequel to the 2010 action film The Expendables, and stars Sylvester Stallone, Jason Statham, Jet Li, Dolph Lundgren, Chuck Norris, Terry Crews, Randy Couture, Liam Hemsworth, Jean-Claude Van Damme, Bruce Willis, and Arnold Schwarzenegger. The story follows the mercenary group known as "the Expendables" as they undertake a seemingly simple mission which evolves into a quest for revenge against rival mercenary Jean Vilain, who murdered one of their own and threatens the world with a deadly weapon. It is the second installment in The Expendables trilogy.`

let Click = `Click is a 2006 American comedy film directed by Frank Coraci, written by Steve Koren and Mark O'Keefe, and produced by Adam Sandler, who also stars in the lead role. The film co-stars Kate Beckinsale as his wife Donna and Christopher Walken as Morty, an eccentric stranger. Sandler plays Michael Newman, an overworked architect who neglects his family when he acquires a magical universal remote from Morty that enables him to control reality.
Filming began in late 2005 and was finished by early 2006. The film was released in the United States on June 23, 2006, by Columbia Pictures. The film was made on a budget of $82.5 million, and grossed $240.7 million. Despite having mixed reviews from critics, it received a nomination for Best Makeup at the 79th Academy Awards making this the only Sandler film as of 2021 to be nominated for an Academy Award.`

let Jumanji = `Jumanji: Welcome to the Jungle is a 2017 American fantasy adventure comedy film directed by Jake Kasdan, co-written by Chris McKenna, Erik Sommers, Scott Rosenberg, and Jeff Pinkner, and starring Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Nick Jonas, and Bobby Cannavale. It is the third installment of the Jumanji franchise, after Zathura: A Space Adventure (2005), and it is a direct sequel to Jumanji (1995), which was based on the 1981 children's book of the same name by Chris Van Allsburg. The story focuses on a group of teenagers who come across Jumanji—now transformed into a video game—twenty-one years after the events of the 1995 film. They find themselves trapped in the game as a set of adult avatars, seeking to complete a quest alongside another player who has been trapped since 1996.
`

let  Tenet = `Tenet is a 2020 science fiction action-thriller film written and directed by Christopher Nolan, who produced it with Emma Thomas. A co-production between the United Kingdom and United States, it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh. The film follows a secret agent who learns to manipulate the flow of time to prevent an attack from the future that threatens to annihilate the present world.`

let Nobody = `Nobody is a 2021 American action thriller film directed by Ilya Naishuller and written by Derek Kolstad. The film stars Bob Odenkirk, Connie Nielsen, Aleksei Serebryakov, RZA, Michael Ironside, Colin Salmon, and Christopher Lloyd, and follows a man who, while following clues regarding his recent home invasion, helps an underaged girl being harassed by a group of men, only to become the target of a vengeful drug lord. Odenkirk and David Leitch are among the film's producers.`

let Braveheart = `Braveheart is a 1995 American epic historical fiction war film directed and co-produced by Mel Gibson, who portrays William Wallace, a late-13th-century Scottish warrior. The film depicts the life of Wallace leading the Scots in the First War of Scottish Independence against King Edward I of England. The film also stars Sophie Marceau, Patrick McGoohan and Catherine McCormack. The story is inspired by Blind Harry's 15th century epic poem The Actes and Deidis of the Illustre and Vallyeant Campioun Schir William Wallace and was adapted for the screen by Randall Wallace.`


let setAttribute = function(nodeObject, attribute, attributeValue){
    nodeObject.setAttribute(attribute, attributeValue);
}

let addClass = function(nodeObject, className){
    nodeObject.classList.add(className);
}

let appendChild = function(parentNodeObject, childObject){
    parentNodeObject.appendChild(childObject);
}


let setStarRating = function(starImgObject){
    //Adding class to the star object
    addClass(starImgObject, 'rate-star');
    //Setting the 'src' attribute for the star object
    setAttribute(starImgObject, 'src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/512px-Star_icon_stylized.svg.png');
}

//  Geting element from the DOM
let movCard = document.querySelectorAll('.mov-card'),
 movInfo = document.querySelector('.mov-info'),
 movInfoContainer = document.createElement('div'),
 movInfoClose = document.createElement('div'),
 movInfoImage = document.createElement('img'),
 movInfoText = document.createElement('p'),
 starsContainer = document.createElement('div');

 // Appending element inside of the parent element container
appendChild(movInfoContainer, movInfoImage);
appendChild(movInfoContainer, movInfoText);
appendChild(movInfo, movInfoContainer);
appendChild(movInfo, movInfoClose);
appendChild(movInfo, starsContainer);

// adding eventListener for each moive card
movCard.forEach(card =>{
    card.addEventListener('click', function(e){
        
        // selecting the img element
        let targetElement = null;
        if(e.target.classList.contains('mov-card__img'))
            targetElement = e.target;
        else
            // selecting img element if other selected
            targetElement = e.target.parentElement.firstElementChild;

        // Seting the src attrebute to the new img tag
        setAttribute(movInfoImage,'src', targetElement.getAttribute('src'));
        
        // Attaching styling classes to elements
        addClass(movInfo, 'displayed');
        addClass(movInfoContainer, 'movInfocontainer');
        addClass(movInfoImage, 'mov-info__img');
        addClass(movInfoText, 'mov-info__text');
        addClass(starsContainer, 'stars-container');
        addClass(movInfoClose, 'mov-info__close');

        // prompt to the user how many star he/she rate the movie
        let movRateStars = prompt('How do you rate the movie by stars? (1 -5)');
        if( movRateStars > 5) movRateStars = 5;
        else if( movRateStars < 1) movRateStars = 1; 

        for(let i = 0; i < movRateStars; i++){
            //Create stars imgs
            let starRate = document.createElement('img');
            //Seting starRate class name and src attribute
            setStarRating(starRate);
            //Adding star to the DOM
            appendChild(starsContainer, starRate);
        }


        // Geting the movie title
        let movTitle = targetElement.nextElementSibling;
        // showing the movie img and some info based on the movie title
        if(movTitle.textContent.toLocaleLowerCase() === 'expendables 2'){
            movInfoText.textContent = '';
            movInfoText.appendChild(document.createTextNode(theExpendables2));
        } else if(movTitle.textContent.toLocaleLowerCase() === 'click'){
            movInfoText.textContent = '';
            movInfoText.appendChild(document.createTextNode(Click));
        } else if(movTitle.textContent.toLocaleLowerCase() === 'jumanji'){
            movInfoText.textContent = '';
            movInfoText.appendChild(document.createTextNode(Jumanji));
        } else if(movTitle.textContent.toLocaleLowerCase() === 'tenet'){
            movInfoText.textContent = '';
            movInfoText.appendChild(document.createTextNode(Tenet));
        } else if(movTitle.textContent.toLocaleLowerCase() === 'nobody'){
            movInfoText.textContent = '';
            movInfoText.appendChild(document.createTextNode(Nobody));
        } else{
            movInfoText.textContent = '';
            movInfoText.appendChild(document.createTextNode(Braveheart));
        }

    });

})


// Closing the movie info popup handler
document.addEventListener('click', function(e){
    if(e.target.classList.contains('mov-info__close')){
        // close the popup window
        movInfo.classList.remove('displayed');
        // remove all stars
        starsContainer.innerHTML = '';
    }
});