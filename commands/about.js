const { asyncHandler } = require("./_helper");
const Discord = require("discord.js");
const { helpMessage } = require("../helpers/messageHelper");

exports.command = 'about';
exports.describe = 'Get details about QL Bot';
exports.builder = (yargs) => {
  return yargs
    .option('h', {
      alias: 'help',
      demandOption: false,
      describe: 'Show Help'
    })
};

exports.handler = asyncHandler(async (argv) => {
  if (argv.h) {
    return helpMessage(
      'about',
      'Used to get the details about the QL Bot.',
      '`!ql about`',
      [],
      [
        '`!ql about` Get details for the QL Bot'
      ]
    );
  }

  return new Discord.RichEmbed()
    .setTitle('About QL Bot')
    .setDescription('QL Bot is one of many community tools made by ThunderSoap')
    .addField('Contributing','If you would like to contribute please reach out to ThunderSoap on the [Questland public discord](https://discord.com/invite/questland)', false)
    .addField('Bug Reporting', 'If you find a bug please report it to ThunderSoap on the [Questland public discord](https://discord.com/invite/questland)', false)
    .addField('Other ThunderSoap Community projects',[
      '[ThunderSoap\'s YouTube Questland Guides](https://www.youtube.com/channel/UCLHjCEBoRj-PGCPvmWzQXMQ) - This is a channel for YouTube content to help everyone learn about Questland',
      '[Questland Handbook](https://questland-handbook.cfapps.io/) - This is a community guide website designed to help everyone learn about Questland',
      '[Public Questland API](https://questland-public-api.cfapps.io/swagger-ui.html) - This is a public API for Questland that developer can make QL tools with. Please reach out to ThunderSoap before hitting it with anything too crazy :grin:'
    ], false)
});