var audio = document.createElement("audio")
document.body.appendChild(audio);
audio.src = "./Møme & Assassin's Creed - Ezio's Family (Møme Remix).mp3"
const Menu_Btn = document.getElementById('Menu_Btn');

document.body.addEventListener("mousemove", function () {
    audio.play()
})

document.getElementById('Get_Started_Btn').onclick = function () {
    document.getElementById('Get_Started').style.display = 'none';
    Menu_Btn.style.display = 'block';
}

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