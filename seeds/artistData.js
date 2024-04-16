const { Artist } = require("../models");

const artistData = [
  {
    name: "Cody Fry",
    image: "cody_fry.jpg",
    bio: 'Cody Fry is an American singer-songwriter, multi-instrumentalist, composer and producer based in Nashville, Tennessee. He gained national attention on the 14th season of American Idol making it to the top 48. He has released several solo albums since 2006. His work spans many genres including pop, orchestral pop, and soul. He is known for his orchestral pop compositions, including orchestral versions of covers. In 2021, he was nominated for a Grammy Award at the 64th edition in the category of Best Arrangement, Instrumental and Vocals for his cover of The Beatles\' "Eleanor Rigby."',
  },
  {
    name: "d4vd",
    image: "d4vd.jpg",
    bio: 'David Anthony Burke (born March 28, 2005), known professionally as D4vd (pronounced David, stylized in all lowercase), is an American singer and songwriter. He is a content creator for gaming and lifestyle brand 100 Thieves. He is best known for his songs "Romantic Homicide" and "Here with Me", both of which experienced international chart success.',
  },
  {
    name: "Peach Tree Rascals",
    image: "peach_tree_rascals.jpg",
    bio: 'Peach Tree Rascals are a music collective from San Jose, California. The group achieved fame with their song, "Mariposa," which went viral on TikTok. The group has been featured on New Music Friday and has received critical acclaim from Billboard, Pigeons and Planes, and MTV. The group is composed of singer-rappers Isaac Pech, Tarrek Abdel-Khaliq and Joseph Barros as well as producer and mixer Dominic “Dom” Pizano and creative director Jorge Olazaba.',
  },
  {
    name: "Billy Joel",
    image: "billy_joel.jpg",
    bio: 'William Martin Joel (born May 9, 1949) is an American singer, songwriter and pianist. Commonly nicknamed the "Piano Man" after his signature 1973 song of the same name, Joel has had a successful music career as a solo artist since the 1970s. From 1971 to 1993, he released twelve studio albums that spanned the genres of pop and rock music, and in 2001 released a one-off studio album of classical music compositions. Joel is one of the world\'s best-selling music artists and the fourth-best-selling solo artist in the United States, with over 160 million records sold worldwide.',
  },
  {
    name: "Queen",
    image: "queen.jpg",
    bio: "Queen are a British rock band formed in London in 1970 by Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), and Roger Taylor (drums, vocals), later joined by John Deacon (bass). Their earliest works were influenced by progressive rock, hard rock, and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.",
  },
  {
    name: "Bowling For Soup",
    image: "bowling_for_soup.jpg",
    bio: 'Bowling for Soup is an American rock band formed in Wichita Falls, Texas, in 1994. The band consists of Jaret Reddick (lead vocals, guitar), Chris Burney (guitar, backing vocals), Gary Wiseman (drums), and Rob Felicetti (bass guitar, backing vocals). The band is best known for its singles "Girl All the Bad Guys Want", "1985" (their version of the SR-71 song of the same name), "Almost" and "High School Never Ends". The band is also known for performing the theme song for the Disney Channel TV show Phineas and Ferb.',
  },
  {
    name: "ABBA",
    image: "abba.jpg",
    bio: "ABBA are a Swedish pop supergroup formed in Stockholm in 1972 by Agnetha Fältskog, Björn Ulvaeus, Benny Andersson, and Anni-Frid Lyngstad. The group's name is an acronym of the first letters of their first names arranged as a palindrome. They are one of the most popular and successful musical groups of all time, and are one of the best-selling music acts in the history of popular music.",
  },
  {
    name: "Lizzo",
    image: "lizzo.jpg",
    bio: "Melissa Viviane Jefferson (born April 27, 1988), known professionally as Lizzo, is an American rapper and singer. Born in Detroit, Michigan, she moved to Houston, Texas, with her family at the age of ten. After college, she moved to Minneapolis, Minnesota, where she began her recording career in hip hop music. Prior to signing with Nice Life Recording Company and Atlantic Records, Lizzo released two studio albums, Lizzobangers (2013) and Big Grrrl Small World (2015). Her first major-label extended play (EP), Coconut Oil, was released in 2016.",
  },
  {
    name: "Beyonce",
    image: "beyonce.jpg",
    bio: 'Beyoncé Giselle Knowles-Carter, born September 4, 1981, is an American singer, songwriter and businesswoman. Dubbed as "Queen Bey" and a prominent cultural figure of the 21st century, she has been recognized for her artistry and performances, with Rolling Stone naming her one of the greatest vocalists of all time.',
  },
  {
    name: "Joan Jett",
    image: "joan_jett.jpg",
    bio: 'Joan Jett (born Joan Marie Larkin, September 22, 1958) is an American rock singer, guitarist, songwriter, record producer, and actress. She is best known for her work as the frontwoman of her band Joan Jett and the Blackhearts, and for founding and performing with the Runaways, who recorded and released the hit song "Cherry Bomb". With the Blackhearts, Jett is known for her rendition of the song "I Love Rock \'n Roll" which was number-one on the Billboard Hot 100 for seven weeks in 1982. Jett\'s other notable songs include "Bad Reputation", "Light of Day", "I Hate Myself for Loving You" and her covers of "Crimson and Clover", "Do You Wanna Touch Me (Oh Yeah)" and "Dirty Deeds".',
  },
  {
    name: "Backstreet Boys",
    image: "backstreet_boys.jpg",
    bio: "The Backstreet Boys (often abbreviated as BSB) are an American vocal group consisting of Nick Carter, Howie Dorough, AJ McLean, and cousins Brian Littrell and Kevin Richardson. They were formed in 1993 in Orlando, Florida. The group rose to fame with their international debut album, Backstreet Boys (1996). In the following year, they released their second international album Backstreet's Back (1997), along with their self-titled U.S. debut album, Backstreet Boys (1997), which continued the group's success worldwide. They rose to superstardom with their third studio album Millennium (1999), anchored by the worldwide hit \"I Want It That Way\", and its follow-up album, Black & Blue (2000).",
  },
  {
    name: "Dido",
    image: "dido.jpg",
    bio: 'Florian Cloud de Bounevialle Armstrong (born 25 December 1971), known professionally as Dido, is an English singer and songwriter. She attained international success with her debut album No Angel (1999). Hit singles from the album include "Here with Me" and "Thank You". It sold over 21 million copies worldwide, and it won her several awards, including two Brit Awards; additionally, she won Best British Album and Best British Female as well as the MTV Europe Music Award for Best New Act.',
  },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
