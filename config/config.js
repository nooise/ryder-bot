module.exports = {
  clientId: "1062423475005964418", // The id of the discord bot
  guildId: "1018602060712783894", // The id of the discord server
  mainColor: "2f3136", // The hex color of the embeds by default
  lang: "main", // If you want to set english please set "main"


  openTicketChannelId: "1061967157723938816", // The id of the channel where the message to create a ticket will be sent
  ticketTypes: [ // You have a limit of 25 types (the limit of Discord)
    {
      codeName: "Get help from Administrator", // The name need to be in lowercase
      name: "General Support", // The name that will be displayed in the ticket
      emoji: "<:huh:1058058279407865956>", // The emoji of the type (can be blank)
      color: "", // Can be a hex color or blank to use the main color
      categoryId: "1062100046683848865", // The category id where the tickets will be created
      customDescription: "Halo selamat datang di General Support. Ada yang bisa saya bantu?\n\n Anda membuat tiket ini dengan alasan: `REASON`\nTolong jelaskan secara rinci apa yang ingin dibantu!", // The custom description of the ticket type (set to blank to use the default description)
      askReason: true // If the bot should ask the reason of the ticket
    },
    {
      codeName: "Forum troubleshot can report in this ticket.", // The name need to be in lowercase
      name: "Forum Support", // The name that will be displayed in the ticket
      emoji: "<:CJ:1058058350090264576>", // The emoji of the type (can be blank)
      color: "", // Can be a hex color or blank to use the main color
      categoryId: "1062610587038785577", // The category id where the tickets will be created
      customDescription: "Please explain your report in detail. If you have any images, please attach them to your message.\n\nReason: REASON", // The custom description of the ticket type (set to blank to use the default description)
      askReason: false // If the bot should ask the reason of the ticket
    },
    {
      codeName: "Account troubleshot can report in this ticket.", // The name need to be in lowercase
      name: "Account Support", // The name that will be displayed in the ticket
      emoji: "<:huft:1058058416335101972>", // The emoji of the type (can be blank)
      color: "", // Can be a hex color or blank to use the main color
      categoryId: "1062100046683848865", // The category id where the tickets will be created
      customDescription: "Testing", // The custom description of the ticket type (set to blank to use the default description)
      askReason: false // If the bot should ask the reason of the ticket
    }
  ],
  ticketNameOption: "support-USERNAME", // Here is all parameter: USERNAME, USERID, TICKETCOUNT
  rolesWhoHaveAccessToTheTickets: [
    "1061967015079841833",
  ], // Roles who can access to the tickets
  pingRoleWhenOpened: true,
  roleToPingWhenOpenedId: "1061967015079841833", // The role to ping when a ticket is opened
  logs: true,
  logsChannelId: "1062100277685133383", // The id of the channel where the logs will be sent
  claimButton: true,
  whoCanCloseTicket: "STAFFONLY", // STAFFONLY (roles configured at "rolesWhoHaveAccessToTheTickets") or EVERYONE
  closeButton: true, // If false the ticket can be closed only by doing /closes
  askReasonWhenClosing: true, // If false the ticket will be closed without asking the reason
  maxTicketOpened: 1 // The number of tickets the user can open while another one is already open. Set to 0 to unlimited
}
