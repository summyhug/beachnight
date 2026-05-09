import type { Dict } from "../types";

export const id: Dict = {
  nav: { home: "Beranda", about: "Tentang", join: "Ikut", language: "Bahasa" },
  hero: {
    title: "Tak ada dunia tanpa",
    join: "Ikut Beachnight",
    learnMore: "Pelajari lebih lanjut",
    noWithout: (region, beach, _deTickerLead) => `Tak ada ${region} tanpa ${beach}.`,
  },
  home: {
    statsHeading: "Beachnight dalam angka",
    statThreatenedHeadline: "Separuh",
    statThreatened: "pantai di dunia bisa hilang menjelang tahun 2100.",
    statCoastlineHeadline: "Setiap",
    statCoastlineCountries: "pesisir diundang.",
    statOneNightHeadline: "1 malam",
    statOneNight: "untuk menyelamatkan pantai kita.",
    whatTitle: "Apa itu Beachnight",
    whatP1:
      "Pantai kita adalah tempat yang luar biasa — ruang ajaib antara darat dan air. Tempat kebahagiaan, kesenangan, dan ketenangan. Bagi banyak orang, mata pencaharian pun bergantung pada sebuah pantai.",
    whatP2:
      "Namun, seperti keadaan saat ini, tempat-tempat istimewa ini akan lenyap satu per satu seiring naiknya permukaan laut. Meski kita sadar akan dampak perubahan iklim, sulit membayangkan hidup di dunia di mana sebagian besar atau semua pantai telah hilang.",
    whatP3: "",
    whatP4:
      "Beachnight ingin menciptakan momen yang membeku dalam waktu — momen persatuan bagi mereka yang tinggal di garis pantai di seluruh dunia; momen ketika kita menerangi pantai-pantai dunia. Menghargai keindahannya, berterima kasih atas kebahagiaan yang diberikan, dan merayakan malam bersama dengan sukacita.",
    whatP5:
      "Tentu Beachnight juga seruan untuk bertindak — menggerakkan orang di mana pun agar berkontribusi menurunkan emisi gas rumah kaca secara besar-besaran dan menyelamatkan sebanyak mungkin pantai.",
    whenLabel: "Kapan Beachnight",
    whenDateTbd: "Tanggal akan diumumkan",
    whenTimeLabel: "Tepat sebelum matahari terbenam",
    whenTimeNote:
      "Sesuai waktu matahari terbenam lokal di pantai Anda — datang saat masih terang, lalu nyalakan pesisir ketika langit mulai gelap.",
    register: "Daftar untuk ikut",
    readStory: "Baca cerita lengkap",
  },
  about: {
    title: "Tentang Beachnight",
    missionTitle: "Misi kami",
    missionP1:
      "Pantai kita adalah tempat yang luar biasa — ruang ajaib antara darat dan air. Tempat kebahagiaan, kesenangan, dan ketenangan. Bagi banyak orang, mata pencaharian pun bergantung pada sebuah pantai.",
    missionP2:
      "Namun, seperti keadaan saat ini, tempat-tempat istimewa ini akan lenyap satu per satu seiring naiknya permukaan laut. Meski kita sadar akan dampak perubahan iklim, sulit membayangkan hidup di dunia di mana sebagian besar atau semua pantai telah hilang.",
    missionP3: "",
    missionP4:
      "Beachnight ingin menciptakan momen yang membeku dalam waktu — momen persatuan bagi mereka yang tinggal di garis pantai di seluruh dunia; momen ketika kita menerangi pantai-pantai dunia. Menghargai keindahannya, berterima kasih atas kebahagiaan yang diberikan, dan merayakan malam bersama dengan sukacita.",
    missionP5:
      "Tentu Beachnight juga seruan untuk bertindak — menggerakkan orang di mana pun agar berkontribusi menurunkan emisi gas rumah kaca secara besar-besaran dan menyelamatkan sebanyak mungkin pantai.",
    missionP6: "",
    participateTitle: "Bagaimana cara ikut?",
    participate1:
      "Beachnight sangat sederhana: datanglah ke pantai sebelum matahari terbenam. Bawa sesuatu untuk menerangi — lilin, obor (jika hukum setempat dan keselamatan mengizinkan), lentera, atau cukup ponsel Anda. ",
    participate2BeforeLink:
      "Kapan acaranya? Begitu ada tanggal Beachnight, kami akan mengumumkannya di sini beberapa minggu sebelumnya. Anda juga bisa ",
    participate2LinkText: "mendaftar di sini",
    participate2AfterLink: " dan kami akan memberi tahu Anda lebih awal.",
    participate3:
      "Sementara itu? Ceritakan Beachnight kepada rekan kerja, teman, dan keluarga serta ajak mereka mendaftar juga.",
    aboutMeTitle: "Tentang saya",
    aboutMe:
      "Saya Thomas, orang biasa dari Austria, negara kecil tanpa laut di Eropa. 🙂 Saya prihatin akan masa depan pantai dunia dan ingin berkontribusi menyelamatkannya.",
  },
  join: {
    title: "Ikut Beachnight",
    subtitle: "Daftar untuk acara berikutnya. Individu dan kelompok dipersilakan.",
    dateNote:
      "Kapan acaranya? Begitu ada tanggal Beachnight, kami akan mengumumkannya di sini beberapa minggu sebelumnya. Anda juga bisa mendaftar di sini dan kami akan memberi tahu Anda lebih awal.",
    success: "Terima kasih — Anda terdaftar. Kami akan menghubungi Anda melalui email yang Anda berikan.",
    fullName: "Nama lengkap",
    email: "Email",
    beach: "Pantai Anda",
    location: "Tempat Anda berada",
    beachPlaceholder: "Pantai atau garis pantai",
    locationPlaceholder: "Kota, negara",
    submit: "Kirim",
    submitting: "Mengirim…",
  },
  footer: {
    tagline: "Satu malam. Setiap pantai. Satu isyarat.",
    quickLinks: "Tautan cepat",
    updatesBlurb:
      "Tidak ada milis. Gunakan {join} — itulah satu-satunya cara kami mengirim pembaruan.",
    updatesLinkLabel: "halaman pendaftaran",
    shareTitle: "Bagikan malam ini",
    shareText:
      "Saat memposting foto atau video, gunakan #{tag1} dan #{tag2} agar kami dapat menemukan cerita Anda.",
    aiVideoNote:
      "Video pratinjau acara dibuat dengan AI untuk membayangkan seperti apa Beachnight.",
  },
};
