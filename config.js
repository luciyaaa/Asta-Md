const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""
global.email ="luciferdevilyt007@gmail.com"
global.location="Kolkata,india"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "india/kolkata";
global.github=process.env.GITHUB|| "https://github.com/luciyaaa/Asta-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaPGtgsj3QEwEjpBXT4Rv0z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjgsupBXT4Rv0z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/JMsAFRD.jpeg" ;
global.caption = process.env.CAPTION || global.caption || "Luciya-md 2024" 
global.BUTTONS = process.env.BUTTONS || process.env.MENU_BTN || "1";


global.devs = "2348039607375"
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "916307965352";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916307965352";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'
global.flush = process.env.FLUSH   || "false"; 
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" 
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/mHEqQgr.jpg,https://i.imgur.com/lSdca7B.jpg,https://i.imgur.com/XakNh3r.jpg,https://i.imgur.com/UslG8eB.jpg,https://i.imgur.com/0OQxTyt.jpg,https://i.imgur.com/MJCmdiA.jpg,https://i.imgur.com/K7zFZl2.jpg"
global.waPresence= process.env.WAPRESENCE ||  "online" ;


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348039607375";


global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "916307965352";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "916307965352";

global.api_smd = "https://api-amd.onrender.com"
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BXMFVBcll2R0tMN0hqMUZlcWlubjJRSzZlaEtnWjFpT3A3M01VK3JIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSC9GWGNRMzdHajQ2elhQbEZIdEI5Z2VJN2c1SzhzS3RNemI3Um5rNTREZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSVcwSk1UNFp2T094Vi95WEszZC83YVJxLzBSczJwUldITlp2amRMWVZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtaDQveEo1R2h0NXQrZ2pUT2tTQURxcEJ6cHU0MXg2bUNuVHNoSEdmaUhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOV28zUGNJRXB2QUV5dlNHOUp6aEtXMjhXNjdPd1lENWowRk1kN2FHM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRGai9rR28xTzZ1dDIzVUxsbGxkUEZoaDU3Rk95aHZqWVJzUVIzb3FLMDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FtYzRRekRDKzEwM3N1NFM5dlo5UWFpN2k4UU92Umx6V0lSR1hXVHVuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTVTYlEvYXJzZ2Q0UUIySUtJRkxjRkZmcjNhQ240SE1KSjQyR0ZOK2Qyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlqTFordnB5TmswdUN2bk11SHY1TTVvUW5ZakFwTStrd0RLTlRINTZIQ0FzVnpCNTBrc1dOYTV6NjgxSXNNWDZLV3VZbzJVU1o4Njd4UVBkQ3NwWkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6ImhPVFJRdjAyMGh2VkVPd0pxZ0dmVDNna2xkcEJ1RWtOT1FIMklhRkpUTjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Iktqdkx3d1VDUms2YjNOLW9fenJ3MVEiLCJwaG9uZUlkIjoiMGNlZDQ1N2EtN2U4ZC00YzliLTljMGQtMjQzMzA4NzE4N2U3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklUWm13bjF2M1pDVDJNeW9YbVppdTVET3QxST0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmZCekdsc2RCWUdiS2xYekNBRTJjeWpyaDNBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTW16OVJnUXFPTzlzZ1lZQnlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTFRBeVg2bmoyMHFRbm5Eazk1eWE4dk5kdU9vYTk4MmI5SURDQTc3VFhoUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiY2VQQWRkeHJVT1J0NmxIdXB3Tk9QWkF4SkJTV29Qa2RheFRvdTVTZVJTK1Y2ZGtUK3RWUEtpWTFjaENyb0NkSis3eFVLY0NUdXlyaENjSDBGajdPQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImFrbEREaFhnWFlzQklRRUN2Qm0zSmNUOTlLYjVzNHBwT3BBd1d6dmQwckhKUXQvdEtJNkNUSVRvMDNOeEVjc1hoRWw1am1IbUpwZjVXQnNYWmdvdUNnPT0ifSwibWUiOnsiaWQiOiI2Mjg3NzM4ODY0NjM3OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuS6l8mi4bSPypzhtIDJtCDCsifigbDDl82cw5cifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjI4NzczODg2NDYzNzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTMHdNbCtwNDl0S2tKNXc1UGVjbXZMelhianFHdmZObS9TQXdnTyswMTRVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2NDgyNDc2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUM5cCJ9"


module.exports = {

  menu: process.env.MENU || "v1", 

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.0",
  caption : global.caption || "Luciya-md 2024" , 
 
  author : process.env.PACK_AUTHER|| "Luciya",
  packname: process.env.PACK_NAME || "Lucifer_devil",
  botname : process.env.BOT_NAME  || "Luciya-md",
  ownername:process.env.OWNER_NAME|| "Luciya",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "main"  ).toUpperCase(),
};
global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated" // Don't Touch
global.isMongodb = false; // Don't Touch Else Bot Won't Work
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
