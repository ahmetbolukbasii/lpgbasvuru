const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın ❌`); 
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor('FFA500') 
.setTimestamp()
.setTitle("")
.setThumbnail('')
.setImage('https://cdn.discordapp.com/attachments/1001083454370365470/1025091821203882046/unknown.png')
.setFooter('Developed By Ahmet Bölükbaşı', 'https://cdn.discordapp.com/attachments/997837137472921644/1009185565851254894/lpg-photoaidcom-cropped.png')



    .setDescription(`
────────────────────────────────────────
    
**Bir yandan seçkin sokak yarışçıları arasında kendinize yer edinmeye çalışırken, bir yandan da görevi kötüye kullanan polis kuvvetlerine karşı geleceğiniz heyecan verici bir yarış deneyimi.**

**Deluxe Edition içerikleri:**

**1 Başlangıç Arabası — K.S Edition Mitsubishi Lancer Evolution X Başlangıç Arabası, başlarken oyuncu garajında mevcut.**

**İlerlediğinizde açılan 3 ekstra K.S Edition arabası**

**4 özel karakter kıyafeti — Karakter özelleştirmede mevcut, değiştirilebilir ve hem erkek hem de kadın avatarlara uyar.**

**REP ve BANK takviyesi**

**%5 daha fazla REP ödülü**

**%5 daha fazla BANK ödülü**

**İndirim 11 Ekimde Son Buluyor** **-95**

────────────────────────────────────────





             `) 
         

message.channel.send('  <a:lpgok:1019955754628816967>  ', mhelp)
  
  
.then; const sembed = new Discord.MessageEmbed()




}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["partners"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'partners', 
    description: '@everyone',
    usage: ''
  };