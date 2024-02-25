window.onload = function () {


    var count = 0;
    Menu_Btn.onclick = function () {
        if (count % 2 == 0) {
            Menu_Btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            document.querySelector('.Menu_Box').style.transform = 'scale(1)';
            document.querySelector('.Menu_Box').style.opacity = '1'
        } else {
            Menu_Btn.innerHTML = '<i class="fa-solid fa-bars"></i>'
            document.querySelector('.Menu_Box').style.transform = 'scale(0)';
            document.querySelector('.Menu_Box').style.opacity = '0'
        }
        count++
    }

    var Games = [
        {
            id: 1,
            img: 'https://images3.alphacoders.com/275/2759.jpg',
            description: `Assassin's Creed (from English - "Assassin's Creed") is a computer game in the action-adventure genre,
            developed by Ubisoft Montreal and published by Ubisoft. The game was first presented at the X '05 exhibition held by Microsoft.
             At E3 2006, the game was officially announced for the PlayStation 3 under the name Assassin's Creed. Later, 
             Ubisoft also announced the game would be released on Xbox 360 and Windows. The console version went on sale in November 2007, 
             the PC version went on sale on April 8, 2008. The game was developed 
            by people who participated in the creation of Prince of Persia: The Sands of Time. The game's music was composed by Jesper Kyd.`,
            trailer: "https://www.youtube.com/embed/RjQ6ZtyXoA0"
        },
        {
            id: 2,
            img: 'https://images3.alphacoders.com/275/2759.jpg',
            description: `Assassin’s Creed II (IPA: [əˈsæsɪns ˈkɹiːd tu]; Russian. Assassin’s Creed 2) is a computer game in the action-adventure genre,
             a continuation of the game Assassin’s Creed from Ubisoft. The official announcement took place on April 16, 2009 in Game Informer magazine.
              As part of the story campaign, Desmond Miles, the main character of the storyline in the present time experiences the memories of 
              his distant ancestor - Ezio Auditore, a young Florentine aristocrat[2]. The player will visit Italy during the 
              Renaissance (the events of the game take place from 1476 to 1499) and will meet outstanding people of that time - for example, the Medici couple, 
            Leonardo da Vinci and Niccolò Machiavelli, and the hero’s enemies will include Rodrigo Borgia, Francesco Pazzi and Girolamo Savonarola.`,
            trailer: "https://www.youtube.com/embed/mb7Xzl2-lr0"
        },
        {
            id: 3,
            img: 'https://r4.wallpaperflare.com/wallpaper/575/318/511/assassin-s-creed-ii-video-games-assassin-s-creed-assassin-s-creed-brotherhood-wallpaper-1910d88d513a9d8b6677481f5061c66d.jpg',
            description: `Assassin's Creed: Brotherhood (from English - "Assassin's Creed: Brotherhood", 
            in the Russian localization Assassin's Creed: Brotherhood of Blood) is a computer game in the genre of action-adventure 
            and stealth action with a third-person view, developed by Ubisoft Montreal for Windows platforms ,
             Xbox 360 and PlayStation 3. The game was published by the French company Ubisoft on November 19, 
             2010 for consoles, and a version for Windows was released on March 17, 2011[2]. It is the third game in the Assassin's Creed series.`,
            trailer: "https://www.youtube.com/embed/zzNs4-kRLaE"
        },
        {
            id: 4,
            img: 'https://wallpaperswide.com/download/assassins_creed___revelations-wallpaper-1920x1080.jpg',
            description: `Assassin's Creed: Revelations (Russian Assassin's Creed: Revelations,
             in Russian localization Assassin's Creed: Revelations) is a computer game in the action-adventure genre,
              developed by Ubisoft Montreal studio together with Ubisoft divisions in Annecy, Bucharest, Quebec , 
              Kiev, Malmo and Singapore. The game was published by Ubisoft on the PlayStation 3 and Xbox 360 and Microsoft Windows game consoles.
               The fourth game in the Assassin's Creed series and the third, final part of the story about the life of Ezio Auditore da Firenze, 
               begun in the game Assassin's Creed II.`,
            trailer: "https://www.youtube.com/embed/8-Ixo7QXw_E"
        },
        {
            id: 5,
            img: './Games_Img/5.jpg',
            description: `Assassin's Creed III (Russian: Assassin's Creed 3)
             is a computer game from the Assassin's Creed series in the action-adventure genre, 
             developed by Ubisoft Montreal for the PlayStation 3, Xbox 360, Wii U, and Windows platforms. 
             The game features a new protagonist[9] and a new setting[10]. The game was released on PlayStation 3 and Xbox 360 consoles on October 31, 
             2012, the Windows version was released on November 21, 2012, and for Wii U on November 30, 2012 along with the release of the console[11].
              The updated version was released on March 29, 2019 on PlayStation 4, Xbox One, Windows and May 21, 2019 on Nintendo Switch.`,
            trailer: "https://www.youtube.com/embed/-pUhraVG7Ow"
        },
        {
            id: 6,
            img: 'https://r4.wallpaperflare.com/wallpaper/28/632/980…er-wallpaper-3f3cb22f5dc965d8d7ade2d494a3f0a0.jpg',
            description: `Assassin's Creed III: Liberation is a 2012 action-adventure video game developed by Ubisoft Sofia and published
             by Ubisoft Entertainment. Part of the Assassin's Creed series, it is a spin-off to Assassin's Creed III, and was originally 
             released for the PlayStation Vita on October 30, 2012, in North America,[9] with a worldwide launch the following day`,
            trailer: "https://www.youtube.com/embed/qJs7z0Wi0CQ"
        },
        {
            id: 7,
            img: '	https://w.forfun.com/fetch/6f/6f133eb2969d86e0d17cf597ef86eb2a.jpeg',
            description: `Assassin's Creed IV: Black Flag (Russian: Assassin's Creed 4: Black Flag, 
            in Russian localization Assassin's Creed IV: Black Flag) is a computer game in the action-adventure genre, 
            developed by Ubisoft Montreal and published by Ubisoft. It is the sixth main game in the Assassin's Creed series. 
            The game was released on October 29, 2013 in versions for PlayStation 3, Xbox 360, Wii U. 
            The Windows version was released on November 21, 2013. On Playstation 4 and Xbox One on November 15,
             2013 and November 22, 2013, respectively[7]. Nintendo Switch version released on December 6, 2019`,
            trailer: "https://www.youtube.com/embed/OwVe4ZNeQZk"
        },
        {
            id: 8,
            img: 'https://wallpapercave.com/wp/wp2802598.jpg',
            description: `Assassin's Creed Freedom Cry is an action-adventure video game developed by
             Ubisoft Quebec and published by Ubisoft. Set in the French colony of Saint-Domingue (present-day Haiti) between 1735 and 1737,
              Freedom Cry follows Adéwalé, a prominent supporting character from the 2013 title Assassin's Creed IV: Black Flag. 
              While attempting to disrupt Templar activities in the Caribbean Sea on behalf of their rival organization, 
              the Brotherhood of Assassins, Adéwalé finds himself shipwrecked in Saint-Domingue, where he comes face-to-face with some of the most brutal slavery practices in the West Indies.`,
            trailer: "https://www.youtube.com/embed/trA1pawo6QE"
        },
        {
            id: 9,
            img: './Games_Img/9.webp',
            description: `Assassin's Creed Rogue (Russian: Assassin's Creed: Rogue, in Russian localization Assassin's Creed Rogue)
             is a computer game from the Assassin's Creed series in the action-adventure genre with stealth action elements, 
             which was developed by Ubisoft for the PlayStation 3 and Xbox 360 platforms[4] . 
             The version of the game for personal computers was released on March 10, 2015[5].
              The release of the updated version for the PlayStation 4 and Xbox One platforms was also officially announced, 
              which took place on March 20, 2018. The release of the version for Nintendo Switch took place on December 6, 2019.`,
            trailer: "https://www.youtube.com/embed/eSjCeWcCtjY"
        },
        {
            id: 10,
            img: './Games_Img/10.jpg',
            description: `Assassin's Creed Unity (from English - "Assassin's Creed: Unity", in the Russian localization Assassin's Creed Unity)
             is a computer game from the Assassin's Creed series in the action-adventure genre, developed by Ubisoft for the PC, 
             PlayStation 4 and Xbox One platforms[4 ].The game takes place in Paris in the 18th century.
              The developers introduced players to a new assassin of Austrian-French origin named Arno Victor Dorian[4].
               The game also added a co-op mode for up to 4 people`,
            trailer: "https://www.youtube.com/embed/xzCEdSKMkdU"
        },
        {
            id: 11,
            img: './Games_Img/11.jpg',
            description: `Assassin's Creed Syndicate (Russian Assassin's Creed: Syndicate, in Russian localization - Assassin's Creed Syndicate) 
            is a computer game in the action-adventure genre, the ninth in the Assassin's Creed series, developed by Ubisoft Quebec and published by Ubisoft.
             The game was released on October 23, 2015 on the PlayStation 4 and Xbox One platforms and on November 19, 2015 on PC (Windows)[7].
              The game takes place during the Industrial Revolution in Victorian London in 1868`,
            trailer: "https://www.youtube.com/embed/WTBbwgsyxvg"
        },
        {
            id: 12,
            img: './Games_Img/12.jpg',
            description: `Assassin's Creed Odyssey places an even greater emphasis on role-playing than previous games in the series.
             The game features an interactive dialogue system, non-linear quests, different endings and the ability to romance characters of any gender, 
             regardless of the player's gender. The player can choose the gender of their character. Unlike Assassin's Creed Syndicate, 
             you cannot switch between characters; the choice is made only once at the beginning of the game.
              It is also cosmetic in nature and will not affect the plot or gameplay in any way.`,
            trailer: "https://www.youtube.com/embed/s_SJZSAtLBA"
        },
        {
            id: 13,
            img: './Games_Img/13.jpg',
            description: `Assassin's Creed Origins (in Russian localization Assassin's Creed Origins) 
            is a computer game in the action/RPG genre, developed by Ubisoft Montreal and published by Ubisoft.
             It is the tenth game in the game series of the same name. The game was released on October 27,
              2017 on Windows, PlayStation 4 and Xbox One platforms. The game takes place in Hellenistic Egypt during the reign of Cleopatra.
               The main character is Bayek, a Medjay who protects his people from threats. The open world allows players to roam freely throughout Egypt.
                The game is played from a third-person perspective and can be explored on foot, on horseback, on camel or by boat`,
            trailer: "https://www.youtube.com/embed/kGq7ZCth7QY"
        },
        {
            id: 14,
            img: './Games_Img/14.jpg',
            description: `Assassin's Creed Valhalla (Russian: Assassin's Creed Valhalla, 
            in Russian localization - Assassin's Creed Valhalla) is a computer game in the action/RPG genre,
             developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth game in the Assassin's Creed series. 
             The game was released on Windows, PlayStation 4, Xbox One and Xbox Series X/S platforms on November 10, 2020[2],
              and on PlayStation 5 on November 12, 2020`,
            trailer: "https://www.youtube.com/embed/-GvDTvLRe3k"
        },
        {
            id: 15,
            img: './Games_Img/15.jpg',
            description: `Assassin's Creed Mirage is an upcoming action-adventure video game developed by Ubisoft Bordeaux and published by Ubisoft. 
            It is the thirteenth major installment in the Assassin's Creed series and the successor to Assassin's Creed Valhalla. 
            The game will take place in Baghdad in the ninth century, and the player controls Basim ibn Ishaq, 
            a thief who then becomes a Master Assassin in the Brotherhood of Assassins, who fight for peace and freedom against the Templar Order,
             who seek peace through control. 1]. Previously appeared in Assassin's Creed Valhalla. 
             The game is similar to the first part of the Assassin's Creed series, and according to the description, it focuses on stealth, 
             parkour and assassinations.`,
            trailer: "https://www.youtube.com/embed/x55lAlFtXmw"
        }
    ]

    Games.forEach((item) => {
        var Games_Container = document.getElementById('Games_Container');
        var Game = document.createElement('div');
        Game.classList.add('Game')
        var Game_Img_Box = document.createElement('div');
        Game_Img_Box.classList.add('Image_Box')
        var Game_Img = document.createElement('img');
        Game_Img.style.objectPosition = 'top'
        Game_Img.src = item.img;
        var Game_Description_Box = document.createElement('div');
        var Game_Descripton = document.createElement('p');
        var Game_Info_Box = document.createElement('div');
        var Game_Trailer_Box = document.createElement('div');
        var Game_Trailer = document.createElement('iframe');
        Game_Trailer.src = item.trailer
        Game_Trailer_Box.appendChild(Game_Trailer);
        Game_Info_Box.classList.add('Game_Info_Box');
        Game_Info_Box.appendChild(Game_Description_Box);
        Game_Info_Box.appendChild(Game_Trailer_Box);
        Game_Descripton.innerHTML = item.description;
        Game_Description_Box.appendChild(Game_Descripton);
        Game_Img_Box.appendChild(Game_Img);
        Game.appendChild(Game_Img_Box);
        Game.appendChild(Game_Info_Box)
        Games_Container.appendChild(Game);
    })
}