const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
name: "url-button",
async execute(client, message, args) {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({content: 'Yapamazsın', ephemeral: true});
    const embed = new MessageEmbed()
    .setColor("#2F3136")
    .setFooter(`${message.guild.name} url menu!`)
    .setDescription('Text Center');
    let btn = new MessageButton()
    .setStyle("LINK")
    .setURL("https://discord.gg/KCfCMKnFzK")
    .setLabel("Ghost")
    .setEmoji('940992751254765598');
    const row = new MessageActionRow() 
    .addComponents([btn]);
    message.channel.send({components: [row], embeds: [embed] });
  }
}