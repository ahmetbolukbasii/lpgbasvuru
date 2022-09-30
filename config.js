const config = {
  TOKEN: "", //Glitchde Kullanacak iseniz .env Dosyasına Tokeni Yazın!

  prefix: "/",
  guild: "943211792044290069", //Sunucu ID Yazın
  channel: "1023640178595741706", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "989831043274113024", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "1023156902844182649" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["994527772741476362"], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "994527772741476362", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "Hey Tebrikler Yetkili Oldun! <@&994527772741476362>", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "Üzgünüm Başvurun Bu Seferlik Reddedildi!", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
    timeout: 20000 //Başvurusu Reddedilen Birisi Nekadar Süre Sonra Başvuru Yapa Bilsin? 1000=1 Saniye (Milisaniye Türünden Yazın)
  },

  embed: {
    title: " Yetkili Başvurularımız Aktif!", //Başvuru Mesajı Başlık Kısmında Yazmasını İstediğiniz Şey
    color: "RED", //Embed Rengi, Örnek: BLUE,RED,YELLOW,GREEN Olarak veya Direkt #ff00ff Gibi Renk Kodu Yazın
    description: "Başvurmak İçin Başvur Butonuna Basıp Formu Tam Doldurup Göndermen Yeterli. Senide Aramızda Görmekten Mutluluk Duyarız!"  //Başvuru Mesajı Açıklama Kısmında Yazmasını İstediğiniz Şey
  },

  sorular: ["İsim Ve Yaşın Kaç?", "Günde Kaç Saat Aktifsin?", "Kod Bilgin Nedir? Yok/Orta/Yüksek/Baya İyi", "Neden Save Ekibine Katılmak  İstiyorsun?", "Neden Burası?", "Bir Savede Ortalama Kaç Tır Yapabilirsin?"] //Sorulacak Sorular
};

module.exports = config;
