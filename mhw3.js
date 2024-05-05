function onScroll(){
    const header = document.querySelector('header');
    const scrollContainer = document.querySelector('.scroll-header-container');
    if (window.scrollY > header.offsetHeight){
        scrollContainer.classList.remove('hidden');        
    }
    else{
        scrollContainer.classList.add("hidden");
    }
}

function closeSectionsFooter(){
    if (window.innerWidth < 768){
        const subsections = document.querySelectorAll('.link-footer-container');
        for (let subsection of subsections){
            subsection.classList.add('hidden');
        }
    }
}

function menuClick(event){
    event.preventDefault();
    const item = event.currentTarget;
    const header = document.querySelector('header');
    let nuovoURL = null;
    let subheader = document.querySelector('.header-text-description .subheader')
    if (item.dataset.menuCategory === 'Sport'){
        nuovoURL = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltf72c772c545eac44/6540fe9e20567d001b090c64/7_Amsterdam_Cruijff_stadium_a_mobile.jpg?auto=webp&quality=60';
        header.style.backgroundImage = "url('" + nuovoURL + "')";
        subheader.textContent = 'Approfitta dell\'accesso privato alla Johan Cruijff Arena'
    }
    if (item.dataset.menuCategory === 'Food'){
        nuovoURL = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltf1a15f5256d7bf0d/6540ff840970dd001bd15522/6_Rome.jpg?auto=webp&quality=60';
        header.style.backgroundImage = "url('" + nuovoURL + "')";
        subheader.textContent = 'Riscopri le tradizioni culinarie italiane a Roma'
    }
    if (item.dataset.menuCategory === 'Culture'){
        nuovoURL = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltd0ca1069566c7d75/65425bfa2149b10407ad83fd/11_Amsterdam_bike.jpg?auto=webp&quality=60';
        header.style.backgroundImage = "url('" + nuovoURL + "')";
        subheader.textContent = 'Esplora Amsterdam in modo autentico'
    }
    if (item.dataset.menuCategory === 'Nature'){
        nuovoURL = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89f86751d709a4d6/6543969b36795e040703e1e6/3_Teide_desktop.jpg?auto=webp&quality=60';
        header.style.backgroundImage = "url('" + nuovoURL + "')";
        subheader.textContent = 'Ammira il tramonto e osserva le stelle al Parco Nazionale del Teide'
    }
}

function likeMouseOn(event){
    const like = event.currentTarget;
    let textDescription = like.parentNode.querySelector('.like-text');
    if (!textDescription) {
        textDescription = document.createElement('div');
        textDescription.classList.add('like-text');
        like.parentNode.appendChild(textDescription);
    }
    if (like.classList.contains('liked')){
        textDescription.textContent = 'Rimuovi dai preferiti';
    }
    else{
        textDescription.textContent = 'Aggiungi ai preferiti';
    }
}

function likeMouseLeave(event){
    const like = event.currentTarget;
    const textDescription = like.parentNode.querySelector('.like-text');
    if(textDescription){
        textDescription.remove();
    }

}

function likeClick(event){
    const like = event.currentTarget;
    let textDescription = like.parentNode.querySelector('.like-text');
    if (like.classList.contains('liked')){
        like.classList.remove('liked');
        like.src = 'heart.png';
        if (textDescription){
            textDescription.textContent = 'Aggiungi ai preferiti'
        }
    }
    else {
        like.classList.add('liked');
        like.src = 'heart.svg';
        if (textDescription){
            textDescription.textContent = 'Rimuovi dai preferiti'
        }
    }
    event.preventDefault();
    event.stopPropagation();
}

function footerSectionClick(event){
    if (window.innerWidth < 768){
        const section = event.currentTarget;
        const index = parseInt(section.dataset.secIndex);
        const subsections = document.querySelectorAll('.link-footer-container');
        for (let subsection of subsections){
            if (parseInt(subsection.dataset.childIndex) === index){
                subsection.classList.toggle('hidden');
            }
        }
    }

}

function profileIconOn(event){
    if (window.innerWidth > 768) {
        const profileIcon = event.currentTarget;
        const profileMenu = profileIcon.querySelector('.profile-menu');
        if (profileMenu.classList.contains('hidden')){
            profileMenu.classList.remove('hidden');
        }
    }


}

function profileIconLeave(event){
    if (window.innerWidth > 768) {
        const profileIcon = event.currentTarget;
        const profileMenu = profileIcon.querySelector('.profile-menu');
        if (!profileMenu.classList.contains('hidden')){
            profileMenu.classList.add('hidden');
        }
    }

}

function closeModalView(event){
    document.body.classList.remove('no-scroll');
    event.currentTarget.closest('.auth-modal-view').classList.add('hidden');
}


function openLoginView(event){
    event.preventDefault();
    document.body.classList.add('no-scroll');
    const loginView = document.querySelector('.auth-modal-view');
    loginView.style.top = window.scrollY +'px';
    loginView.classList.remove('hidden');
}

function clickOnInput(event){
    inputContainer = event.currentTarget.parentNode.parentNode;
    inputContainer.classList.add('clicked');
}

function clickOffInput(event){
    inputContainer = event.currentTarget.parentNode.parentNode;
    inputContainer.classList.remove('clicked');
}

function overButton(event){
    event.currentTarget.classList.add('button-hover')
}

function leaveButton(event){
    event.currentTarget.classList.remove('button-hover')
}

function onResponse(response){
    return response.json();
}

function onError(error){
    console.log('Abbiamo un Error: ' + error);
}

function emValResult(json){
    if (json.is_valid_format.value){
        const valid = json.deliverability;
        if(valid!=='UNDELIVERABLE'){
            const emailPage = document.querySelector('.auth-modal-view[data-ref="email-register"]');
            emailPage.classList.add('hidden');
            const loginPage = document.querySelector('.auth-modal-view[data-ref="login"]');
            loginPage.classList.remove('hidden');
            document.querySelector('#email-inserted').value = json.email;
            return;
        }
    }
    document.querySelector('.input-error').classList.remove('hidden');

}

function emailValidation(event){
    event.preventDefault();
    const apiKey = "5f21991d80774d7c9bedb053c946498c";
    const email = document.querySelector('#email-input').value;
    let url = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey;
    url = url + '&email=' + email;

    fetch(url,
        {
            method: 'GET'
        })
    .then(onResponse, onError)
    .then(emValResult);

}


window.addEventListener('scroll', onScroll);
window.addEventListener('load', closeSectionsFooter);

const scrollMenuItem = document.querySelectorAll('.themes-menu-item');
for (let item of scrollMenuItem){
    item.addEventListener('click',menuClick);
}

const likeIcons = document.querySelectorAll('.bch-single-block .like-icon');
for (let like of likeIcons){
    like.addEventListener('mouseenter', likeMouseOn)
    like.addEventListener('mouseleave', likeMouseLeave)
    like.addEventListener('click', likeClick);
}

const footerSections = document.querySelectorAll('.title-footer-section');
for (let section of footerSections){

    section.addEventListener('click', footerSectionClick);
}

const profileIcon = document.querySelector('.menu_item[data-menu-link="Profile"]');
profileIcon.addEventListener('mouseenter', profileIconOn)
profileIcon.addEventListener('mouseleave', profileIconLeave)

const loginLink = document.querySelector(".profile-menu .pr-link[data-id=login]")
loginLink.addEventListener('click', openLoginView);

const closeIcons = document.querySelectorAll('.auth-modal-view .icon-menu');
for(let closeIcon of closeIcons){
    closeIcon.addEventListener('click', closeModalView);
}


const inputBoxes = document.querySelectorAll('.c-input-style');
for (let inputBox of inputBoxes){
    inputBox.addEventListener('focus', clickOnInput);
    inputBox.addEventListener('blur', clickOffInput);
}


const loginSocialButton = document.querySelectorAll('.modal-view-auth-button')
for (let button of loginSocialButton){
    button.addEventListener('mouseover', overButton);
    button.addEventListener('mouseleave', leaveButton);
}

const formEmail = document.querySelector('form[data-ref="email-register"]');
formEmail.addEventListener('submit', emailValidation);



function searchEvent(event){
    event.preventDefault();
}


const headerTextResearch = document.querySelector('#search_input');
headerTextResearch.addEventListener('submit', searchEvent);

const SpotifyClientID = '5681de9803d84b51be93150901a39d86';
const SpotifyClientSecret= 'b3a970be4ebe4e49a97f4371bbdcd8bb';

function msToSec(millisecondi){
    var minuti = Math.floor(millisecondi / 60000);
    var secondi = ((millisecondi % 60000) / 1000).toFixed(0);
    secondi = (secondi < 10 ? '0' : '') + secondi;
    return minuti + ":" + secondi;
}


function onJson_playlist(json){
    const spotifyView = document.querySelector('.spotifyView-container');
    const headerPlaylist = spotifyView.querySelector('.header-playlist');

    const playlistImg = headerPlaylist.querySelector('.playlist-img');
    playlistImg.src = json.images[0].url;

    const playlistDescription = headerPlaylist.querySelector('.playlist-title-des')

    const title = playlistDescription.querySelector('.playlist-title');
    title.textContent = json.name;

    const description = playlistDescription.querySelector('.playlist-des');
    description.textContent = json.description;

    const playlistInfo = playlistDescription.querySelector('.playlist-info');
    const infoText = playlistInfo.querySelector('.playlist-info-text');
    const numFollowers = json.followers.total;
    const numSongs = json.tracks.total;
    infoText.textContent= numFollowers + ' followers, ' + numSongs + ' tracce';
    let i=1;
    const songsContainerBig = spotifyView.querySelector('.background-songs');
    const songsContainerMedium = songsContainerBig.querySelector('.song-container');

    for (let song of json.tracks.items){
        const songContainer = document.createElement('div');
        songContainer.classList.add('spec-song-container');

        const songNum = document.createElement('span');
        songNum.classList.add('song_num');
        songNum.textContent = i;
        i++;

        const songDescription = document.createElement('div');
        songDescription.classList.add('spec-song-des');

        const albumImg = document.createElement('img');
        albumImg.classList.add('album-img');
        albumImg.src = song.track.album.images[0].url;

        const songTitleArtistContainer = document.createElement('div');
        songTitleArtistContainer.classList.add('spec-song-title-artist');

        const songTitle = document.createElement('span');
        songTitle.classList.add('spec-song-title');
        songTitle.textContent = song.track.name;

        const songArtist = document.createElement('span');
        songArtist.classList.add('spec-song-artist');
        for (let artist of song.track.artists){
            nameString = artist.name + (artist === song.track.artists[song.track.artists.length - 1] ? '':', ');
            songArtist.textContent += nameString; 
        }

        const albumSong = document.createElement('span');
        albumSong.classList.add('spec-song-album');
        albumSong.textContent = song.track.album.name;

        const songDuration = document.createElement('span');
        songDuration.classList.add('spec-song-duration');
        const duration = msToSec(song.track.duration_ms);
        songDuration.textContent = duration;

        songsContainerMedium.appendChild(songContainer);
        songContainer.appendChild(songNum);
        songContainer.appendChild(songDescription);
        songDescription.appendChild(albumImg);
        songDescription.appendChild(songTitleArtistContainer);
        songTitleArtistContainer.appendChild(songTitle);
        songTitleArtistContainer.appendChild(songArtist);
        songContainer.appendChild(albumSong);
        songContainer.appendChild(songDuration);


    }

    spotifyView.classList.remove('hidden');
}

function onTokenJson(json){
    const token =json.access_token;
    const playlistID = '37i9dQZF1DX4MNIYb0mgSO';
    const url = 'https://api.spotify.com/v1/playlists/'+playlistID+'?&fields=description%2Cimages%28url%2C+height%29%2Cname%2C%2Cfollowers%28total%29%2Ctracks%28total%2Citems%28track%28artists%28name%29%2Cname%2Cduration_ms%2Curi%2Calbum%28name%2Cimages%29%29%29%29'
    fetch(url,{
        headers: {
            'Authorization':'Bearer ' + token
        }
    }).then(onResponse, onError).then(onJson_playlist)
    return;
}


function searchSongs(event){
    event.preventDefault();
    url = 'https://accounts.spotify.com/api/token';
    options = {
        method: 'POST',
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(SpotifyClientID + ':' + SpotifyClientSecret)
        },
        body: 'grant_type=client_credentials'
    };
    fetch(url, options).then(onResponse, onError).then(onTokenJson);
    
}

const songResearch = document.querySelector('.search-button-cs');
songResearch.addEventListener('mouseenter', overButton);
songResearch.addEventListener('mouseleave', leaveButton);
songResearch.addEventListener('click', searchSongs);

function closeViewSpotify(){
    const spotifyView = document.querySelector(".spotifyView-container");
    spotifyView.classList.add('hidden');
    return
}

const spotifyClose = document.querySelector(".close-spotify");
spotifyClose.addEventListener('click', closeViewSpotify);
spotifyClose.addEventListener('mouseenter', overButton);
spotifyClose.addEventListener('mouseleave', leaveButton);


