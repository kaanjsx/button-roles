const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "button",
async execute(client, message, args) {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({content: 'Yapamazsın', ephemeral: true});
    const embed = new MessageEmbed()
    .setColor("#2F3136")
    .setFooter(`${message.guild.name} role menu!`)
    .setThumbnail(message.guild.iconURL())
    .setDescription(' **Discord Updates** (<#964098858105831454>) \n **Events Announcement ** (<#964098888988524595>)  \n **YouTube Subscriber** (<#964098917912412200>)');
    let btn = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Discord Updates")
    .setCustomId("roles1")
    .setEmoji('889965764688363621');
    let btn1 = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Events Ping")
    .setCustomId("roles2")
    .setEmoji('889965765028106300');
    let btn2 = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("YouTube Subscriber")
    .setCustomId("roles3")
    .setEmoji('889965765472710786');

    const row = new MessageActionRow() 
    .addComponents([btn, btn1,btn2]);
    message.channel.send({components: [row], embeds: [embed] });
  }
}