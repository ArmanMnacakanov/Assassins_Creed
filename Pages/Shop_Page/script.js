
const Menu_Btn = document.getElementById('Menu_Btn');


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
        img: './Games_Img/1.jpg',
        name: 'Assassins Creed',
        price: '$12.00',
        description: `Operating system: XP, Vista, 7, 8, 10 <br>
        Processor: Intel Dual Core 2.6 GHz Intel® Pentium D or AMD Athlon <br>
        RAM: 1 GB (XP) / 2 GB (Vista / 7) <br>
        Video Card: DirectX® 10.0 video card or DirectX 9.0 compatible <br>
        Free hard disk space: 7 GB`,
        download: "https://itorrents-igruha.org/?do=download&id=27328",
        gallery: [
            './Games_Img/Game_1_Img/1.jpg',
            './Games_Img/Game_1_Img/2.jpg',
            './Games_Img/Game_1_Img/3.jpg',
            './Games_Img/Game_1_Img/4.jpg',
            './Games_Img/Game_1_Img/5.jpg',
            './Games_Img/Game_1_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/2.jpg',
        name: 'Assassins Creed 2',
        price: '$16.00',
        description: `Operating system: XP / Vista / 7 / 8 / 10 (32-64-bit)<br>
        Processor: Intel Core 2 Duo 2.8 GHz or AMD Athlon X2 Dual-Core 5200+<br>
        RAM: 2 GB<br>
        Video card: Nvidia Geforce 9800 or Radeon HD 4750<br>
        Free hard disk space: 5.5 GB`,
        download: '/torrents/download.php?id=40003800135',
        gallery: [
            './Games_Img/Game_2_Img/1.jpg',
            './Games_Img/Game_2_Img/2.jpg',
            './Games_Img/Game_2_Img/3.jpg',
            './Games_Img/Game_2_Img/4.jpg',
            './Games_Img/Game_2_Img/5.jpg',
            './Games_Img/Game_2_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/3.jpg',
        name: 'Assassins Creed Brotherhood',
        price: '$20.00',
        description: `
        Operating system: XP (32-Bit), Vista, 7, Windows 8<br>
        Processor: Intel Core® 2 Duo 1.8 GHZ or AMD Athlon X2 64 2.4GHZ<br>
        RAM: 2 GB<br>
        Video card: 256 MB DirectX® 9.0-compliant card with Shader Model 3.0<br>
        Free hard disk space: 6.5 GB`,
        gallery: [
            './Games_Img/Game_3_Img/1.jpg',
            './Games_Img/Game_3_Img/2.jpg',
            './Games_Img/Game_3_Img/3.jpg',
            './Games_Img/Game_3_Img/4.jpg',
            './Games_Img/Game_3_Img/5.jpg',
            './Games_Img/Game_3_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/4.jpg',
        name: 'Assassins Creed Revelations',
        price: '$22.00',
        description: `
        OS: Windows XP or later<br>
        Processor: Core 2 Duo 1.8 GHz / Athlon X2 64 2.4 GHz<br>
        RAM: 2 GB<br>
        Video card: Radeon HD 2600 Pro / GeForce 7900 GS | 256 MB VRAM<br>
        Disk space: 7 G`,
        gallery: [
            './Games_Img/Game_4_Img/1.jpg',
            './Games_Img/Game_4_Img/2.jpg',
            './Games_Img/Game_4_Img/3.jpg',
            './Games_Img/Game_4_Img/4.jpg',
            './Games_Img/Game_4_Img/5.jpg',
            './Games_Img/Game_4_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/5.jpg',
        name: 'Assassins Creed 3 ',
        price: '$25.00',
        description: `
        OS: Windows Vista, 7, 8, 10<br>
        Processor: Intel® Core™2 Duo E8200 or AMD Athlon™ II X4 620<br>
        RAM: 2 GB RAM<br>
        Video card: with 512 MB video memory, compatible<>br>
        Disk space: 15.3 GB`,
        gallery: [
            './Games_Img/Game_5_Img/1.jpg',
            './Games_Img/Game_5_Img/2.jpg',
            './Games_Img/Game_5_Img/3.jpg',
            './Games_Img/Game_5_Img/4.jpg',
            './Games_Img/Game_5_Img/5.jpg',
            './Games_Img/Game_5_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/6.jpg',
        name: 'Assassins Creed Liberation',
        price: '$25.00',
        description: `
        OS:Windows: Vista, 7, 8, 10 (32/64-bit)<br>
        Processor: Intel Core i3 2105 3.1 GHz / AMD Phenom 2 X4 955 3.2GHz<br>
        RAM: 2 GB<br>
        Video card: 512 Mb - 1024 Mb / nVIDIA GeForce / ATI Radeon<br>
        Disk space: 3 Gb`,
        gallery: [
            './Games_Img/Game_6_Img/1.jpg',
            './Games_Img/Game_6_Img/2.jpg',
            './Games_Img/Game_6_Img/3.jpg',
            './Games_Img/Game_6_Img/4.jpg',
            './Games_Img/Game_6_Img/5.jpg',
            './Games_Img/Game_6_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/7.jpg',
        name: 'Assassins Creed Black Flag',
        price: '$29.99',
        description: `
        OS: Windows Vista, 7, 8, 10<br>
        Processor: Intel Core2Quad Q8400 @ 2.6 GHz or AMD<br>
        RAM: 2 GB RAM<br>
        Video card: Nvidia Geforce GTX 260 or AMD Radeon HD 4870<br>
        Disk space: 17.3 GB`,
        gallery: [
            './Games_Img/Game_7_Img/1.jpg',
            './Games_Img/Game_7_Img/2.jpg',
            './Games_Img/Game_7_Img/3.jpg',
            './Games_Img/Game_7_Img/4.jpg',
            './Games_Img/Game_7_Img/5.jpg',
            './Games_Img/Game_7_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/8.jpg',
        name: 'Assassins Creed Freedom Cry ',
        price: '$29.99',
        description: `
        OS:Windows Vista SP2 / 7 / 8 / 10 (both 32/64bit versions)<br>
        Processor: Intel Core2Quad Q8400 @ 2.6 GHz or AMD Athlon II X4 620 @ 2.6 GHz<br>
        RAM: 2 GB<br>
        Video card: Nvidia Geforce GTX 260 or AMD Radeon HD 4870 (512MB VRAM with shader Model 4.0 or higher)<br>
        Sound card: DirectX® 9.0c compatible sound device<br>
        Free hard disk space: 7.5 GB`,
        gallery: [
            './Games_Img/Game_8_Img/1.jpg',
            './Games_Img/Game_8_Img/2.jpg',
            './Games_Img/Game_8_Img/3.jpg',
            './Games_Img/Game_8_Img/4.jpg',
            './Games_Img/Game_8_Img/5.jpg',
            './Games_Img/Game_8_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/9.jpg',
        name: 'Assassins Creed Rogue',
        price: '$29.99',
        description: `
        OS:Windows 7 SP1 or Windows 8/8.1 (64 bit)<br>
        Processor: Intel Core2Quad Q6600 @ 2.4 GHz or AMD Athlon II X4 620<br>
        Video card: nVidia GeForce GTS450 or AMD Radeon HD5670<br>
        RAM: 2 GB<br>
        Audio device: DirectX 9.0c compatible audio device<br>
        Hard disk space: 11 GB`,
        gallery: [
            './Games_Img/Game_9_Img/1.jpg',
            './Games_Img/Game_9_Img/2.jpg',
            './Games_Img/Game_9_Img/3.jpg',
            './Games_Img/Game_9_Img/4.jpg',
            './Games_Img/Game_9_Img/5.jpg',
            './Games_Img/Game_9_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/10.jpg',
        name: 'Assassins Creed Unity',
        price: '$45.65',
        description: `
        OS:Windows 7 SP1, 8/8.1, 10 (64-bit)<br>
        Processor: Intel Core i5-2500K @ 3.3 GHz or AMD FX-8350 @ 4.0 GHz<br>
        RAM: 6 GB<br>
        Video card: NVIDIA GeForce GTX 680 or AMD Radeon HD 7970 (2 GB VRAM)<br>
        Sound card: DirectX® 9.0c compatible sound device<br>
        Free hard disk space: 40 GB`,
        gallery: [
            './Games_Img/Game_10_Img/1.jpg',
            './Games_Img/Game_10_Img/2.jpg',
            './Games_Img/Game_10_Img/3.jpg',
            './Games_Img/Game_10_Img/4.jpg',
            './Games_Img/Game_10_Img/5.jpg',
            './Games_Img/Game_10_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/11.jpg',
        name: 'Assassins Creed Unity DLC',
        price: '$45.65',
        description: `
        OS:Windows 7 SP1, 8/8.1, 10 (64-bit)<br>
        Processor: Intel Core i5-2500K @ 3.3 GHz or AMD FX-8350 @ 4.0 GHz<br>
        RAM: 6 GB<br>
        Video card: NVIDIA GeForce GTX 680 or AMD Radeon HD 7970 (2 GB VRAM)<br>
        Sound card: DirectX® 9.0c compatible sound device<br>
        Free hard disk space: 40 GB`,
        gallery: [
            './Games_Img/Game_10_DLC_Img/1.webp',
            './Games_Img/Game_10_DLC_Img/2.jpg',
            './Games_Img/Game_10_DLC_Img/3.jpg',
            './Games_Img/Game_10_DLC_Img/4.jpg',
            './Games_Img/Game_10_DLC_Img/5.jpg',
            './Games_Img/Game_10_DLC_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/12.jpg',
        name: 'Assassins Creed Syndicate',
        price: '$29.99',
        description: `
        OS: Windows 7/8.1/10 (64-bit versions only)<br>
        Processor: Intel Core i5-2500K @ 3.3 GHz or AMD FX-8350 @ 4.0 GHz<br>
        RAM: 6 GB<br>
        Video card: NVIDIA GeForce GTX 660 / AMD Radeon R9 270 (2GB VRAM with Shader Model 5.0)<br>
        Sound card: DirectX Compatible Sound Card with latest drivers<br>
        Free hard disk space: 63 GB`,
        gallery: [
            './Games_Img/Game_11_Img/1.jpg',
            './Games_Img/Game_11_Img/2.jpg',
            './Games_Img/Game_11_Img/3.jpg',
            './Games_Img/Game_11_Img/4.jpg',
            './Games_Img/Game_11_Img/5.jpg',
            './Games_Img/Game_11_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/13.jpg',
        name: 'Assassins Creed Syndicate DLC',
        price: '$32.25',
        description: `
        OS: Windows 7/8.1/10 (64-bit versions only)<br>
        Processor: Intel Core i5-2500K @ 3.3 GHz or AMD FX-8350 @ 4.0 GHz<br>
        RAM: 6 GB<br>
        Video card: NVIDIA GeForce GTX 660 / AMD Radeon R9 270 (2GB VRAM with Shader Model 5.0)<br>
        Sound card: DirectX Compatible Sound Card with latest drivers<br>
        Free hard disk space: 63 GB`,
        gallery: [
            './Games_Img/Game_11_DLC_Img/1.jpg',
            './Games_Img/Game_11_DLC_Img/2.webp',
            './Games_Img/Game_11_DLC_Img/3.jpg',
            './Games_Img/Game_11_DLC_Img/4.webp',
            './Games_Img/Game_11_DLC_Img/5.jpg',
            './Games_Img/Game_11_DLC_Img/6.webp'
        ]
    },
    {
        img: './Games_Img/14.jpg',
        name: 'Assassins Creed Syndicate DLC',
        price: '$32.25',
        description: `
        OS: Windows 7/8.1/10 (64-bit versions only)<br>
        Processor: Intel Core i5-2500K @ 3.3 GHz or AMD FX-8350 @ 4.0 GHz<br>
        RAM: 6 GB<br>
        Video card: NVIDIA GeForce GTX 660 / AMD Radeon R9 270 (2GB VRAM with Shader Model 5.0)<br>
        Sound card: DirectX Compatible Sound Card with latest drivers<br>
        Free hard disk space: 63 GB`,
        gallery: [
            './Games_Img/Game_11_DLC_Img/7.avif',
            './Games_Img/Game_11_DLC_Img/8.jpg',
            './Games_Img/Game_11_DLC_Img/9.jpg',
            './Games_Img/Game_11_DLC_Img/10.jpg',
            './Games_Img/Game_11_DLC_Img/11.jpg',
            './Games_Img/Game_11_DLC_Img/12.jpg'
        ]
    },
    {
        img: './Games_Img/15.png',
        name: 'Assassins Creed Odyssey',
        price: '$49.99',
        description: `
        OS: Windows 7, 8, 10 (64-bit only)<br>
        Processor: AMD FX 6300, Intel Core i5 2400 or better<br>
        RAM: 8 GB<br>
        Video card: Radeon R9 285, GeForce GTX 660 or better<br>
        DirectX: Versions 11<br>
        Disk space: 110 GB`,
        gallery: [
            './Games_Img/Game_12_Img/1.jpg',
            './Games_Img/Game_12_Img/2.jpg',
            './Games_Img/Game_12_Img/3.jpg',
            './Games_Img/Game_12_Img/4.jpg',
            './Games_Img/Game_12_Img/5.jpg',
            './Games_Img/Game_12_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/16.png',
        name: 'Assassins Creed Odyssey DLC ',
        price: '$52.00',
        description: `
        OS: Windows Vista, 7, 8, 10<br>
        Processor: Intel® Core™2 Duo E8200 or AMD Athlon™ II X4 620<br>
        RAM: 2 GB RAM<br>
        Video card: with 512 MB video memory, compatible<>br>
        Disk space: 15.3 GB`,
        gallery: [
            './Games_Img/Game_12_Img/7.webp',
            './Games_Img/Game_12_Img/8.webp',
            './Games_Img/Game_12_Img/9.jpg',
            './Games_Img/Game_12_Img/10.jpg',
            './Games_Img/Game_12_Img/11.jpg',
            './Games_Img/Game_12_Img/12.avif'
        ]
    },
    {
        img: './Games_Img/17.jpg',
        name: 'Assassins Creed Origins',
        price: '$59.00',
        description: `
        OS: Windows 7 SP1, 8, 10 (64-bit)<br>
        Processor: Intel Core i5-2400s @ 2.5 GHz or AMD FX-6350 @ 3.9 GHz<br>
        RAM: 6 GB RAM<br>
        Video card: NVIDIA GeForce GTX 660 or AMD R9 270 (2048 MB)<br>
        Disk space: 75 GB`,
        gallery: [
            './Games_Img/Game_13_Img/1.jpg',
            './Games_Img/Game_13_Img/2.jpg',
            './Games_Img/Game_13_Img/3.jpg',
            './Games_Img/Game_13_Img/4.jpg',
            './Games_Img/Game_13_Img/5.jpg',
            './Games_Img/Game_13_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/18.png',
        name: 'Assassins Creed Origins DLC',
        price: '59.99',
        description: `
        OS: Windows 7 SP1, 8, 10 (64-bit)<br>
        Processor: Intel Core i5-2400s @ 2.5 GHz or AMD FX-6350 @ 3.9 GHz<br>
        RAM: 6 GB RAM<br>
        Video card: NVIDIA GeForce GTX 660 or AMD R9 270 (2048 MB)<br>
        Disk space: 75 GB`,
        gallery: [
            './Games_Img/Game_13_Img/7.jpg',
            './Games_Img/Game_13_Img/8.jpg',
            './Games_Img/Game_13_Img/9.webp',
            './Games_Img/Game_13_Img/10.jpg',
            './Games_Img/Game_13_Img/11.webp',
            './Games_Img/Game_13_Img/12.jpg'
        ]
    },
    {
        img: './Games_Img/19.jpg',
        name: 'Assassins Creed Valhalla',
        price: '$30.00',
        description: `
        OS: Windows 10 (64-bit)<br>
        Processor: Ryzen R3 1200 / Core i5-4460<br>
        RAM: 8 GB<br>
        Video card: Radeon R9 380 / GeForce GTX 960<br>
        DirectX: 12<br>
        Disk space: 145 GB + 35 GB for installation`,
        gallery: [
            './Games_Img/Game_14_Img/1.jpg',
            './Games_Img/Game_14_Img/2.jpg',
            './Games_Img/Game_14_Img/3.jpg',
            './Games_Img/Game_14_Img/4.jpg',
            './Games_Img/Game_14_Img/5.jpg',
            './Games_Img/Game_14_Img/6.jpg'
        ]
    },
    {
        img: './Games_Img/20.png',
        name: 'Assassins Creed Valhalla DLC',
        price: '$42.00',
        description: `
        OS: Windows 10 (64-bit)<br>
        Processor: Ryzen R3 1200 / Core i5-4460<br>
        RAM: 8 GB<br>
        Video card: Radeon R9 380 / GeForce GTX 960<br>
        DirectX: 12<br>
        Disk space: 145 GB + 35 GB for installation`,
        gallery: [
            './Games_Img/Game_14_Img/7.webp',
            './Games_Img/Game_14_Img/8.webp',
            './Games_Img/Game_14_Img/9.jpg',
            './Games_Img/Game_14_Img/10.jpg',
            './Games_Img/Game_14_Img/11.jpg',
            './Games_Img/Game_14_Img/12.jpg'
        ]
    },
]


function displayGallery(game) {
    var Gallery_Box = document.createElement('div');
    Gallery_Box.classList.add('Gallery_Box');

    game.gallery.forEach(function (imageSrc) {
        var Gallery_Img = document.createElement('img');
        Gallery_Img.src = imageSrc;
        Gallery_Box.appendChild(Gallery_Img);
    });

    return Gallery_Box;
}

Games.forEach((item) => {
    var Games_Box = document.getElementById('Games_Box')
    var Game = document.createElement('div');
    var Game_Img_Box = document.createElement('div');
    Game_Img_Box.classList.add('Game_Img_Box')
    var Game_Img = document.createElement('img');
    var Game_Name_Box = document.createElement('div');
    var Game_Name = document.createElement('h4');
    var Game_Price_Box = document.createElement('div');
    var Game_Price = document.createElement('span');
    Game_Price.innerHTML = item.price;
    Game_Price_Box.appendChild(Game_Price);
    Game_Name.innerHTML = item.name;
    Game_Name_Box.appendChild(Game_Name);
    Game.classList.add('Game');
    Game_Img.src = item.img;
    Game_Img_Box.appendChild(Game_Img)
    Game.appendChild(Game_Img_Box);
    Game.appendChild(Game_Name_Box);
    Game.appendChild(Game_Price_Box)
    Games_Box.appendChild(Game);


    var Game_Description_Box = document.createElement('div'); // Перенесли создание сюда
    Game_Description_Box.classList.add('Game_Description_Box');
    var Game_Description = document.createElement('p');
    Game_Description.innerHTML = item.description;
    Game_Description_Box.appendChild(Game_Description);
    Game_Description_Box.style.display = 'none';
    Game.appendChild(Game_Description_Box);

    var Close_Btn = document.createElement('button');
    Close_Btn.classList.add('Close_Btn');
    Close_Btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    Close_Btn.style.display = 'none';
    Game.appendChild(Close_Btn);

    Game.onclick = function (event) {
        if (event.target === Game) {
            Game.classList.add('active');
            Game_Description_Box.style.display = 'block';
            // Download_Box.style.display = 'block';
            Close_Btn.style.display = 'block';
            var Gallery_Box = displayGallery(item);
            Gallery_Box.style.display = 'block'
            Game_Description.innerHTML = item.description;
            var Gallery_Box = displayGallery(item);
            Game.appendChild(Gallery_Box);
        }
    }

    Close_Btn.addEventListener('click', function () {
        Game.classList.remove('active');
        Game_Description_Box.style.display = 'none';
        Close_Btn.style.display = 'none';
        Gallery_Box.style.display = 'none'
        // Очищаем содержимое Game_Description_Box
        Game_Description.innerHTML = '';
    });

})
