(async () => {
	switch (command) {
		case 'owner': case 'creator': {
       //         let ty = await shizu.sendContact(m.chat, global.owner, m)
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;SamPandey.;;;'
                    + 'FN:SamPandey.\n' // full name
                    + 'ORG:SamPandey001;\n' // the organization of the contact
                    + 'item1.TEL;type=CELL;type=VOICE;waid=919628516236:919628516236\n' // WhatsApp ID + phone number
                    + 'item1.X-ABLabel:Secktor Bot Owner\n'
                    + 'item2.EMAIL;type=INTERNET: samp63141@gmail.com\n'
                    + 'item2.X-ABLabel:Email\n'
                    + 'item3.URL:https://github.com/SamPandey001/Secktor-Md\n'
                    + 'item3.X-ABLabel:Github\n'
                    + 'item4.ADR:;;INDIA;;;;\n'
                    + 'item4.X-ABLabel:Region\n'
                    + 'item5.X-ABLabel:Enjoyโค๏ธ\n'
                    + 'END:VCARD'
                Void.sendMessage(citel.chat, { contacts: { displayName: 'SamPandey001', contacts: [{ vcard }] } }, { quoted: citel })
            }
            break
		case "p":
		case "profile":
			if (querie === "help") {
				return citel.reply(`*โCommand:* ${command}\n*๐งฉCategory:* General\n*๐ ๏ธUsage:* ${
              prefix + command
            } reply/taq user\n\n*๐Description:* Shows profile of tagged/replied user `);
			}
			var bio = await Void.fetchStatus(citel.sender);
			var bioo = bio.status;
			////console.log(bio)
			const adn = isAdmins ? "True" : "False";
			try {
				pfp = await Void.profilePictureUrl(citel.sender, "image");
			}
			catch (e) {
				pfp = picsecktor;
			}
			const profile = `
 ๐ป๐๐ ${pushname} ๐ท๐๐๐๐๐๐,๐ป๐๐๐ ๐๐  ๐ฆ๐๐ข๐ ๐ถ๐ข๐ก๐ ๐๐๐๐๐๐๐.
๐ค ๐ผ๐บ๐ฌ๐น๐ต๐จ๐ด๐ฌ  : ${pushname}
โก ๐ฉ๐ฐ๐ถ  :  ${bioo}
๐ช ๐ฎ๐น๐ถ๐ผ๐ท :  ${groupName}
๐ ๐จ๐ซ๐ด๐ฐ๐ต: ${adn}

*Powered by ${LangG.title}*
`;
			const buttonsd = [
				{
					buttonId: `${prefix}alive`,
					buttonText: {
						displayText: "Alive",
					},
					type: 1,
          },
				{
					buttonId: `${prefix}help`,
					buttonText: {
						displayText: " Help",
					},
					type: 1,
          },
        ];
			let buttonMessage = {
				image: {
					url: pfp,
				},
				caption: profile,
				footer: LangG.footer,
				buttons: buttonsd,
				headerType: 4,
			};
			Void.sendMessage(citel.chat, buttonMessage, {
				quoted: citel,
			});
			break;
	}
})()
