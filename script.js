let data = [
    {
        id:1,
        imageurl: 'https://assets.sweat.com/html_body_blocks/images/010/024/178/original/MakeGymWorkoutsPartOfYourRoutineSWEAT_enf89e42d9f6346ab1accf553c8459f6a1.jpg?1625802808'   ,
        title: "image title 1" ,
        url:"https://google.com"

    },
    {
        id:1,
        imageurl: 'https://www.mensjournal.com/wp-content/uploads/2016/06/HIIT-1.jpg?w=900&quality=86&strip=all' ,
        title: "image title 2" ,
        url:"https://google.com"

    },
    {
        id:3,
        imageurl: 'https://media.istockphoto.com/photos/strength-active-and-fit-couple-exercising-training-or-doing-workout-picture-id1415176978?b=1&k=20&m=1415176978&s=170667a&w=0&h=vCuH_v9REbBnYsP1iBg3RPObIxg_I83G8HFp_smNTk0=' ,
        title: "image title 3" ,
        url:"https://google.com"

    },
    {
        id:4,
        imageurl: 'https://media.istockphoto.com/photos/shot-of-a-sporty-young-woman-exercising-with-dumbbells-in-a-gym-picture-id1370779226?b=1&k=20&m=1370779226&s=170667a&w=0&h=sl3DIwuwizJwJNibNTaC2JGnqcNQ2eRals8pwDNLZwQ=' ,
        title: "image title 4" ,
        url:"https://google.com"

    }
];

const arrowLeft = document.getElementById ("arrow-left");
const arrowright = document.getElementById ("arrow-right");
const slidercontent = document.getElementById ("slider-content");
let sliderindex= 0;


// ა ტეგი

function createatagslider (item) {
   const atagelement =document.createElement('a');
   atagelement.setAttribute('href', item.url);  
   atagelement.classList.add ('slide') ;

   return atagelement;
}


// სურათი


function createimagetagslider (item){
    const tagImage =document.createElement ('img');
    tagImage.setAttribute('src', item.imageurl);
    tagImage.setAttribute ('alt', item.title);

    return tagImage;

}


// სათაურის ტეგი

function createH2tagslider () {
  let tagtitle =document.createElement ('h2');
  tagtitle.innerText = item.title;
  tagtitle.classList.add('title');

  return tagtitle;
}

function setslide () {
    const slideitem = createatagslider(data[sliderindex]);
    const imagetag = createimagetagslider(data[sliderindex]);
    const h2tag = createH2tagslider(data[sliderindex]);

    slideitem.appendChild(imagetag);
    slideitem.appendChild(h2tag);
    slidercontent.appendChild(slideitem);
    console.log (slideitem);
}
setslide();

