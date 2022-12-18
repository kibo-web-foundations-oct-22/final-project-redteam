// JS for the content gallery

// constants 
const htmlBody = document.querySelector('body');
const gallery= document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const popup2 = document.getElementById('popup2');
const imageIndexes = [
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];

const images ={1:"Pirates Of The Caribbean", 2:"Inception", 3:"Sully", 4:"The Shawshank Redemption", 5:"Incidious",6:"Thor",7:"Shutter Island",8: "Spilt", 9: "Game of Thrones", 10 :"Dunkirk", 11:"Baby Driver",12:"The Notebook", 13: "Catch me if you can", 14: "Die Hard", 15: "Maleficent",16 :"Dark Knight", 17: "The Great Gatsby", 18 : "Dr Do Little", 19 : "San Andreas", 20: "Ocean's Eleven", 21:'Definitely Maybe', 22:"Now you see me",23 : "The Devil Wears Prada", 24: "Mr and Mrs Smith", 25: "Shark Tale", 26: "Rush Hour",27: "The Hobbit",28:"Suicide Squad",29:"John Wick",30:"The Lord of The Rings", 31:"The Bourne Lagacy ", 32:"The Bourne Ultimatum", 33: "Titanic", 34 :"Nikita"}


const selectedIndex = null;

/* itierate through indexes
  create image elements
  append the image elements to div with id 'gallery'*/
imageIndexes.forEach(i => {
  const box = document.createElement("div");
  box.id = "placeHere";
  const image = document.createElement('img');
  image.src = `./movies/${i}.jpeg`;  
  image.alt = `images.${i}`;
  image.style.margin ="auto"
  image.style.justifyContent = "center"
  image.classList.add('galleryImg');
  

  //determine when an element is clicked 
  //show a pop up
  image.addEventListener('click', () => {
    popup.style.transform ='translateY(0)';
    selectedImage.src = `/movies/${i}.jpeg`;
    selectedImage.alt = 'fictional character';    
    popup2.innerHTML = moviePlot[i];
    
  })
  const image_description = document.createElement('span');
  image_description.style = "caption"
  image_description.innerHTML= images[i];
  image_description.classList.add('galleryImgDescription');
  box.appendChild(image);
  box.appendChild(image_description);
  
  gallery.appendChild(box);
  
  
  
});

//exit popup
popup.addEventListener('click', () => {  
  selectedImage.src = ` `;
  selectedImage.alt = ` `;
  popup.style.transform = `translateY(-100%)`;
});

const randomClickFunction = function (){
  const colors = 
    ["#e8e8e8", "#faebd7","#f0ffff","#fff8dc","#a9a9a9","#bc8f8f","#008080"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  htmlBody.style.backgroundColor = randomColor ;

  console.log('The user clicked and set the color to' + randomColor )
}

htmlBody.onclick = randomClickFunction

const moviePlot = {
  1:'The checkered past of Capt. Jack Sparrow (Johnny Depp) catches up to him when he encounters Angelica (Penélope Cruz), a beautiful pirate that Jack once loved then left. Angelica forces him to accompany her to the Queen Anne\'s Revenge, the ship of the notorious Blackbeard (Ian McShane). Accompanied by a zombie crew, the trio sets sail to find the legendary Fountain of Youth. However, Jack\'s rival, Barbossa (Geoffrey Rush), also seeks the fountain, as does a ship from Spain.',
  2:'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people\'s dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone\'s mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb\'s every move.',
  3:'On Jan. 15, 2009, Capt. Chesley "Sully" Sullenberger (Tom Hanks) tries to make an emergency landing in New York\'s Hudson River after US Airways Flight 1549 strikes a flock of geese. Miraculously, all of the 155 passengers and crew survive the harrowing ordeal, and Sullenberger becomes a national hero in the eyes of the public and the media. Despite the accolades, the famed pilot now faces an investigation that threatens to destroy his career and reputation.',
  4:'Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn\'t commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.',
  5:"Soon after their showdown with evil spirits that possessed their son, the Lamberts, Renai (Rose Byrne) and Josh (Patrick Wilson), are ready for their lives to return to normal. However, something still is seriously off, especially with Josh, who -- unbeknown to Renai -- is possessed too. In order to free Josh's soul and finally defeat the malevolent forces around them, Lorraine Lambert (Barbara Hershey) and her ghost-hunting friends investigate the past to save her family's future.",
  6:"Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
  7:"In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he thinks he's been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open. As a hurricane cuts off communication with the mainland, more dangerous criminals escape in the confusion, and the puzzling, improbable clues multiply, Teddy begins to doubt everything - his memory, his partner, even his own sanity.",
  8: "Though Kevin (James McAvoy) has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher (Betty Buckley), there remains one still submerged who is set to materialize and dominate all of the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him -- as well as everyone around him -- as the walls between his compartments shatter.",
  9: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia. In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms.As characters choose between fulfilling their duties and helping those they love, they must reconsider the value of honor. That is to say, they must weigh their personal sense of virtue against the public perception of their virtue.",
  10: "In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk. Under air and ground cover from British and French forces, troops were slowly and methodically evacuated from the beach using every serviceable naval and civilian vessel that could be found. At the end of this heroic mission, 330,000 French, British, Belgian and Dutch soldiers were safely evacuated.",
  11: "Baby, a music-loving orphan also happens to be the prodigiously talented go-to getaway driver for heist mastermind Doc. With the perfect soundtrack picked out for each and every job, Baby ensures Doc's violent, bank-robbing cronies - including Buddy, Bats and Darling - get in and out of Dodge before it's too late. He's not in it for the long haul though, hoping to nail one last job before riding off into the sunset with beautiful diner waitress Debora. Easier said than done.",
  12: "In 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling) and rich girl Allie (Rachel McAdams) are desperately in love. But her parents don't approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair. In the interim, Allie becomes involved with another man (James Marsden). But when Noah returns to their small town years later, on the cusp of Allie's marriage, it soon becomes clear that their romance is anything but over.",
  13: "Frank Abagnale, Jr. (Leonardo DiCaprio) worked as a doctor, a lawyer, and as a co-pilot for a major airline -- all before his 18th birthday. A master of deception, he was also a brilliant forger, whose skill gave him his first real claim to fame: At the age of 17, Frank Abagnale, Jr. became the most successful bank robber in the history of the U.S. FBI Agent Carl Hanratty (Tom Hanks) makes it his prime mission to capture Frank and bring him to justice, but Frank is always one step ahead of him.",
  14: "New York City policeman John McClane (Bruce Willis) is visiting his estranged wife (Bonnie Bedelia) and two daughters on Christmas Eve. He joins her at a holiday party in the headquarters of the Japanese-owned business she works for. But the festivities are interrupted by a group of terrorists who take over the exclusive high-rise, and everyone in it. Very soon McClane realizes that there's no one to save the hostages -- but him.",
  15: "As a beautiful young woman of pure heart, Maleficent (Angelina Jolie) has an idyllic life in a forest kingdom. When an invading army threatens the land, Maleficent rises up to become its fiercest protector. However, a terrible betrayal hardens her heart and twists her into a creature bent on revenge. She engages in an epic battle with the invading king's successor, then curses his newborn daughter, Aurora -- realizing only later that the child holds the key to peace in the kingdom.",
  16: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
  17: "In 1929 New York, bond-seller Nick Carraway, in a sanitarium for depression and alcoholism, is persuaded by his doctor to write a therapeutic account of what put him there. Nick's journal describes how, seven years earlier, he had moved to a tiny house on Long Island adjoining the sumptuous mansion owned by enigmatic neighbour, the fabulously wealthy Jay Gatsby. After attending one of Gatsby's legendary parties Nick is asked by Gatsby to arrange a meeting with his cousin Daisy, now married to the brutish. philandering Tom Buchanan, who was Gatsby's true love prior to war service. As Nick complies he comes to see that Gatsby, once a poor boy, has recreated himself as a fascinating millionaire purely to win Daisy back but the events of a drunken afternoon conspire to bring about an ending which is anything but happy.",
  18: "Dr. John Dolittle lives in solitude behind the high walls of his lush manor in 19th-century England. His only companionship comes from an array of exotic animals that he speaks to on a daily basis. But when young Queen Victoria becomes gravely ill, the eccentric doctor and his furry friends embark on an epic adventure to a mythical island to find the cure.",
  19: "A seemingly ideal day turns disastrous when California's notorious San Andreas fault triggers a devastating, magnitude 9 earthquake, the largest in recorded history. As the Earth cracks open and buildings start to crumble, Ray Gaines (Dwayne Johnson), an LAFD search-and-rescue helicopter pilot, must navigate the destruction from Los Angeles to San Francisco to bring his estranged wife (Carla Gugino) and their only daughter (Alexandra Daddario) to safety.",
  20: "Dapper Danny Ocean (George Clooney) is a man of action. Less than 24 hours into his parole from a New Jersey penitentiary, the wry, charismatic thief is already rolling out his next plan. Following three rules: Don't hurt anybody, don't steal from anyone who doesn't deserve it, and play the game like you've got nothing to lose. Danny orchestrates the most sophisticated, elaborate casino heist in history.",
  21: "Will Hayes (Ryan Reynolds), a thirtysomething Manhattanite, is in the middle of divorce proceedings when his young daughter (Abigail Breslin) asks him about his life before marriage, including how he met and fell in love with her mother. Will flashes back to 1992 and recounts his romances with three women, changing their names so that his daughter must guess which one became his wife.",
  22: "Charismatic magician Atlas (Jesse Eisenberg) leads a team of talented illusionists called the Four Horsemen. Atlas and his comrades mesmerize audiences with a pair of amazing magic shows that drain the bank accounts of the corrupt and funnel the money to audience members. A federal agent (Mark Ruffalo) and an Interpol detective (Mélanie Laurent) intend to rein in the Horsemen before their next caper, and they turn to Thaddeus (Morgan Freeman), a famous debunker, for help.",
  23: "Andy (Anne Hathaway) is a recent college graduate with big dreams. Upon landing a job at prestigious Runway magazine, she finds herself the assistant to diabolical editor Miranda Priestly (Meryl Streep). Andy questions her ability to survive her grim tour as Miranda's whipping girl without getting scorched.",
  24: "John (Brad Pitt) and Jane Smith (Angelina Jolie), a couple in a stagnating marriage, live a deceptively mundane existence. However, each has been hiding a secret from the other: they are assassins working for adversarial agencies. When they are both assigned to kill the same target, Benjamin Danz (Adam Brody), the truth comes to the surface. Finally free from their cover stories, they discover that they have been assigned to kill each other, sparking a series of explosive attacks.",
  25: "Underachiever Oscar (Will Smith) is a pint-sized fish with grand aspirations. When mob-connected great white shark Frankie (Michael Imperioli) is accidentally killed, Oscar concocts a story with Frankie's peace-loving brother Lenny (Jack Black) that it was he who murdered the shark. Suddenly hailed 'Sharkslayer' by his aquatic brethren, Oscar has bigger fish to fry when Frankie's father, mob boss Don Lino (Robert De Niro), dispatches his henchmen to track down his son's killer.",
  26: "When a Chinese diplomat's daughter is kidnapped in Los Angeles, he calls in Hong Kong Detective Inspector Lee (Jackie Chan) to assist the FBI with the case. But the FBI doesn't want anything to do with Lee, and they dump him off on the LAPD, who assign wisecracking Detective James Carter (Chris Tucker) to watch over him. Although Lee and Carter can't stand each other, they choose to work together to solve the case on their own when they figure out they've been ditched by both the FBI and police.",
  27: "Having reclaimed Erebor and vast treasure from the dragon Smaug, Thorin Oakenshield (Richard Armitage) sacrifices friendship and honor in seeking the Arkenstone, despite Smaug's fiery wrath and desperate attempts by the Hobbit Bilbo (Martin Freeman) to make him see reason. Meanwhile, Sauron sends legions of Orcs in a sneak attack upon the Lonely Mountain. As the fate of Middle Earth hangs in the balance, the races of Men, Elves and Dwarves must decide whether to unite and prevail -- or all die.",
  28: "A secret government agency, led by the ruthless, high-ranking official Amanda Waller, recruits some of the most dangerous, incarcerated villains on the planet to execute dangerous black ops missions and save the world from a potentially apocalyptic threat from a mysterious, supernatural entity. If anything goes wrong on this mission, the government will not be liable but rather can place the blame on the villains, who are inherently evil people. A small bomb is implanted in each member of the squad's neck with the capability of detonating any time one of the members tries to rebel or escape. It will be up to this assembled team of villains to prevail over the seemingly impossible events that will unfold before them, in what many deem to be a 'suicide mission'.",
  29: "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
  30: "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.",
  31: "When the actions of Jason Bourne spark a fire that threatens to burn down decades of research across a number of secret intelligence agencies, Eric Byer (Edward Norton), the man who built the programs, decides he must sacrifice one of them: Outcome. Aaron Cross (Jeremy Renner), one of Outcome's six agents, and research scientist Marta Shearing (Rachel Weisz) go on the run when Byer targets them for termination. But Cross proves to be a far deadlier target than Byer realizes.",
  32: "A former CIA assassin continues his quest to fill in memory gaps. When a `Guardian' reporter stumbles onto his trail, the man spies his chance to blow the Blackbriar black-ops brigade wide open. With some very powerful people intent on keeping their skeletons buried, he is in more danger than ever before, as his former paymasters send a series of elite killers after their reformed ex-colleague.",
  33: "James Cameron's 'Titanic' is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the 'ship of dreams' -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.",
  34: "Convicted felon Nikita (Anne Parillaud), instead of going to jail, is given a new identity and trained to be a secret police assassin controlled by the government. Her lonely life is warmed when she falls in love with a man who knows nothing of her mysterious life"
}