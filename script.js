// 1.) DECLARE ALL DATA THAT NEEDS TO BE USED 
let jordan = {
  favoriteSongs: [
    "ABC",
    "TaylorSwift",
    "Birthday Song"
  ],
  favoriteColors: [
    "Blue",
    "Black",
    "grey"
  ],
  favoriteImg: "https://static.miraheze.org/greatcharacterswiki/thumb/5/5c/Mouse.png/640px-Mouse.png",
};

// ----------------------{{{Queries}}}
  
let screen = document.querySelector('.screen')
let body = document.querySelector('body')
 // ---------------------------------------------------------------------------
//  ​ 2.)Create Functions
    // const showSongs = () => {}
       // const showColors = () => {};

    // const showImgs = () => {};
    // -------------------------------------{FIRST WAY: Make Seperate Funcs() for each Piece of Data}
// -------------------------------------{2ND WAY: One Func() to Grab ANY data and perform the same task}
const addToScreen = (input) => {
    screen.innerHTML = input
};

 const addImage = ()=> {
    // 1. Create the actual Element
    let pic = document.createElement('img')
    // 2.Refer to the ele by name and add an Attribute
    pic.setAttribute('src', jordan.favoriteImg  )
    // 3.Add a class
    pic.setAttribute('class', 'mickey')

    // FinalStep: Add NewlyCreated Image to Screen
    screen.append(pic)

  }
const addColor = (input) => {
body.style.backgroundColor = input
}

// 3. Call / Invoke Functions