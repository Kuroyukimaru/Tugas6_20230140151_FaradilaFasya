// === Video ===

// Menangkap elemen video
const videoElement = document.getElementById("video");

// Flag untuk memeriksa apakah pesan konfirmasi sudah muncul
let confirmationShown = false;

// Menambahkan event listener untuk event 'play'
videoElement.addEventListener("play", function(event) {
    // Cek apakah konfirmasi sudah ditampilkan
    if (!confirmationShown) {
        // Hentikan video yang sedang diputar
        videoElement.pause();
        
        // Tampilkan pesan peringatan
        const userConfirmed = confirm("⚠️ Peringatan: Video ini mengandung adegan berdarah dan kekerasan. Apakah Anda berusia 18 tahun ke atas dan siap menonton?");
        
        if (userConfirmed) {
            // Jika pengguna setuju, mulai putar video lagi
            videoElement.play();
        } else {
            // Jika pengguna menolak, beri pesan dan video tidak diputar
            alert("Video tidak akan diputar. Terima kasih telah mengonfirmasi.");
        }

        // Set flag agar konfirmasi hanya ditampilkan sekali
        confirmationShown = true;
    }

});

// === Untuk YouTube iframe ===

// Fungsi ini dipanggil ketika YouTube API siap
function onYouTubeIframeAPIReady() {
    // Tangkap iframe YouTube dan buat instance player YouTube
    const youtubeIframe = document.getElementById('youtube-player');
    
    const youtubePlayer = new YT.Player(youtubeIframe, {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Fungsi ketika player siap
function onPlayerReady(event) {
    // Membuat overlay transparan di atas iframe
    const youtubeOverlay = document.createElement('div');
    youtubeOverlay.style.position = 'absolute';
    youtubeOverlay.style.top = '0';
    youtubeOverlay.style.left = '0';
    youtubeOverlay.style.width = '100%';
    youtubeOverlay.style.height = '100%';
    youtubeOverlay.style.cursor = 'pointer';
    youtubeOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // transparan

    // Menempelkan overlay ke iframe container
    const iframeContainer = document.querySelector('.iframe-container');
    iframeContainer.style.position = 'relative';
    iframeContainer.appendChild(youtubeOverlay);

    // Menampilkan pesan konfirmasi saat overlay di klik
    youtubeOverlay.addEventListener('click', function () {
        const userConfirmed = confirm("⚠️ Peringatan: Video ini mengandung Spoiler. Apakah Anda ingin melanjutkan?");
        
        if (userConfirmed) {
            youtubeOverlay.remove(); // Menghapus overlay
            event.target.playVideo(); // Memulai pemutaran video YouTube
        } else {
            alert("Video tidak akan diputar. Terima kasih telah mengonfirmasi.");
        }
    });
}


// === Untuk Audio ===

// Tangkap elemen audio
const audioElement = document.querySelector('audio');

// Flag untuk memeriksa apakah pesan konfirmasi sudah muncul untuk audio
let audioConfirmationShown = false;

// Menambahkan event listener untuk event 'play' pada audio
audioElement.addEventListener("play", function(event) {
    // Cek apakah konfirmasi sudah ditampilkan
    if (!audioConfirmationShown) {
        // Hentikan audio yang sedang diputar
        audioElement.pause();
        
        // Tampilkan pesan peringatan
        const userConfirmed = confirm("⚠️ Peringatan: ini Lagu Ending Pengepungan di Bukit Duri");
        
        if (userConfirmed) {
            // Jika pengguna setuju, mulai putar audio lagi
            audioElement.play();
        } else {
            // Jika pengguna menolak, beri pesan dan audio tidak diputar
            alert("Audio tidak akan diputar. Terima kasih telah mengonfirmasi.");
        }

        // Set flag agar konfirmasi hanya ditampilkan sekali
        audioConfirmationShown = true;
    }
});

// Tangkap elemen gambar
const foto1 = document.querySelector('.gambar[src="Foto 1.jpeg"]');
const foto2 = document.querySelector('.gambar[src="Foto2.jpeg"]');

// Flag untuk memeriksa apakah pesan konfirmasi sudah muncul untuk foto
let foto1ConfirmationShown = false;
let foto2ConfirmationShown = false;

// Menambahkan event listener untuk foto 1
foto1.addEventListener("click", function() {
    if (!foto1ConfirmationShown) {
        // Tampilkan pesan konfirmasi
        const userConfirmed = confirm("⚠️ Ini poster film Pengepungan di Bukit Duri");

        // Set flag agar konfirmasi hanya ditampilkan sekali untuk Foto 1
        foto1ConfirmationShown = true;
    }
});

// Menambahkan event listener untuk foto 2
foto2.addEventListener("click", function() {
    if (!foto2ConfirmationShown) {
        // Tampilkan pesan konfirmasi
        const userConfirmed = confirm("⚠️ Ini poster film Pengepungan di Bukit Duri");

        // Set flag agar konfirmasi hanya ditampilkan sekali untuk Foto 2
        foto2ConfirmationShown = true;
    }
});
