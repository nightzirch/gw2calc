var dungeons = [
	{"name": "Ascalonian Catacombs", "shortname": "ac", "currency": "Ascalonian Tears", "currencyImg": "Ascalonian_Tear.png", "currencyImgFilled": "Ascalonian_Tear_Filled.png", "paths": 3, "items": [{"name":"Ascalonian Protector Greaves","icon":"https://render.guildwars2.com/file/5E650761FF084271B42D4E602133F3B1DAC222CE/61396.png","cost":180},{"name":"Ascalonian Protector Breastplate","icon":"https://render.guildwars2.com/file/CFD098CF23ABF154B7D36F45ECED479D7CAC9BE6/61397.png","cost":330},{"name":"Ascalonian Protector Gauntlets","icon":"https://render.guildwars2.com/file/491CE3267F18D90B0ED073AC0508A4F5479624B6/61398.png","cost":180},{"name":"Ascalonian Protector Helm","icon":"https://render.guildwars2.com/file/EAB6471506CAC64D36E4BFA908B151592D037B50/61399.png","cost":180},{"name":"Ascalonian Protector Legguards","icon":"https://render.guildwars2.com/file/09227726C3B2A1960B051256D0BD29C60EE79CE5/61400.png","cost":300},{"name":"Ascalonian Protector Pauldrons","icon":"https://render.guildwars2.com/file/2BED3729A93091A01AD0D00EE24F0D471EEA5EA8/61401.png","cost":210},{"name":"Ascalonian Sentry Boots","icon":"https://render.guildwars2.com/file/FE1F26AA52C659CE713ADD40276720456CAA6724/61434.png","cost":180},{"name":"Ascalonian Sentry Chestguard","icon":"https://render.guildwars2.com/file/7B270309EF250E96CFAA1C1C069340966090E112/61435.png","cost":330},{"name":"Ascalonian Sentry Gloves","icon":"https://render.guildwars2.com/file/196B920F414C09F6C46C24C33668FAA592F0AD52/61436.png","cost":180},{"name":"Ascalonian Sentry Hat","icon":"https://render.guildwars2.com/file/F159D87DF06C394A29ABC8C5B52E7E28583297BE/61437.png","cost":180},{"name":"Ascalonian Sentry Leggings","icon":"https://render.guildwars2.com/file/1501A00707030CE065CA1B2596E00F4BD44A0FA1/61438.png","cost":300},{"name":"Ascalonian Sentry Shoulderguards","icon":"https://render.guildwars2.com/file/7210E8960327D1B90F5D55111B6EE0F8953BB29F/61439.png","cost":210},{"name":"Ascalonian Performer Shoes","icon":"https://render.guildwars2.com/file/A6E016D02DE965CDE833E6B203B4AA0315A41DC6/61125.png","cost":180},{"name":"Ascalonian Performer Vestments","icon":"https://render.guildwars2.com/file/08050E1CE0EA68022EA049FD1243F0AD902F9CC3/61126.png","cost":330},{"name":"Ascalonian Performer Gloves","icon":"https://render.guildwars2.com/file/22903D73A8606F50965101C41C040146D4D5FB1C/61127.png","cost":180},{"name":"Ascalonian Performer Mask","icon":"https://render.guildwars2.com/file/BA3D945BF34892CE4FFD9A5C513716A7FD0C3CF5/61128.png","cost":180},{"name":"Ascalonian Performer Pants","icon":"https://render.guildwars2.com/file/E405DA27EAD63BC4AAF6735A9744E8CAB67C17BE/61129.png","cost":300},{"name":"Ascalonian Performer Mantle","icon":"https://render.guildwars2.com/file/649F0FE6CFEBBD17B5073F501A0F12499C807E19/61186.png","cost":210},{"name":"Royal Ascalonian Axe","icon":"https://render.guildwars2.com/file/F8137EED7A379A5136FB073A657F2E0BF6D37F36/65001.png","cost":300},{"name":"Royal Ascalonian Dagger","icon":"https://render.guildwars2.com/file/4C07483237DB3E009B06BEFEA55B965BDA03DA4B/65072.png","cost":300},{"name":"Royal Ascalonian Focus","icon":"https://render.guildwars2.com/file/34DAF952DBD64D38DAF47A9AE37F3339D735AFBA/65098.png","cost":210},{"name":"Royal Ascalonian Greatsword","icon":"https://render.guildwars2.com/file/345615454204DE6DBFC31B0A00C9DB3B1FB5CA3E/65159.png","cost":390},{"name":"Royal Ascalonian Hammer","icon":"https://render.guildwars2.com/file/095DDCC8F40478F8BC2B740B5DD23ACA766D0DD5/65174.png","cost":390},{"name":"Royal Ascalonian Harpoon","icon":"https://render.guildwars2.com/file/9F5B6BEB75B75F47AB32EAC1D213099B08E6024D/455724.png","cost":390},{"name":"Royal Ascalonian Longbow","icon":"https://render.guildwars2.com/file/1877AC29CE28DD09067E37087B0A0358500AFF93/65051.png","cost":390},{"name":"Royal Ascalonian Mace","icon":"https://render.guildwars2.com/file/3191FCB207D0F1DF46F76FFE223E57F30E1EE91C/65255.png","cost":300},{"name":"Royal Ascalonian Pistol","icon":"https://render.guildwars2.com/file/FEBCAAA81106724E251B04D92C589839C11FEC1E/65293.png","cost":300},{"name":"Royal Ascalonian Rifle","icon":"https://render.guildwars2.com/file/3EC20FFFEE59241C32A807F7945260F43507545B/65314.png","cost":390},{"name":"Royal Ascalonian Scepter","icon":"https://render.guildwars2.com/file/65B265C6A6C00AEA6D2936C0D7EB64732F31B669/62001.png","cost":300},{"name":"Royal Ascalonian Shield","icon":"https://render.guildwars2.com/file/971ACCB1EA206610914757F7051D4322C7362448/65379.png","cost":210},{"name":"Royal Ascalonian Short Bow","icon":"https://render.guildwars2.com/file/F616037C2623ECE40732A9C2225DAF6059939C9B/65060.png","cost":390},{"name":"Royal Ascalonian Speargun","icon":"https://render.guildwars2.com/file/0B03D929D43C1EC14A6549487C06C22BA7937604/223645.png","cost":390},{"name":"Royal Ascalonian Staff","icon":"https://render.guildwars2.com/file/75103C3F0FB83DF4FC4761A5A7E74609F9AE2D73/65441.png","cost":390},{"name":"Royal Ascalonian Sword","icon":"https://render.guildwars2.com/file/AD33666253A04E970C771F90B006CD703F61E30C/65449.png","cost":300},{"name":"Royal Ascalonian Torch","icon":"https://render.guildwars2.com/file/034F0FB7A567B659FA3DB0C812E7A4A80B055C75/65493.png","cost":210},{"name":"Royal Ascalonian Trident","icon":"https://render.guildwars2.com/file/2B1E7E6B11AB5F0CB0AAD8B59E12A897195C0DE4/67399.png","cost":390},{"name":"Royal Ascalonian Warhorn","icon":"https://render.guildwars2.com/file/919DF01A730D301F6C9F36261BBFEB651F55283E/65567.png","cost":210}]},
	{"name": "Caudecus's Manor", "shortname": "cm", "currency": "Seals of Beetletun", "currencyImg": "Seal_of_Beetletun.png", "currencyImgFilled": "Seal_of_Beetletun_Filled.png", "paths": 3, "items": [{"name":"Council Guard Greaves","icon":"https://render.guildwars2.com/file/EC0F95071DF6CC9D0508942DC2044579337FC3B9/61550.png","cost":180},{"name":"Council Guard Breastplate","icon":"https://render.guildwars2.com/file/D19EBF4E5555E9130B44054F5DC2F574CAF0BCFF/61551.png","cost":330},{"name":"Council Guard Gauntlets","icon":"https://render.guildwars2.com/file/DE95FD0C57387F6C35A10203D66621927707A5FE/61552.png","cost":180},{"name":"Council Guard Helm","icon":"https://render.guildwars2.com/file/2CDF649A43DA546E77494441981831DD045BACEE/61553.png","cost":180},{"name":"Council Guard Legguards","icon":"https://render.guildwars2.com/file/C3BE10016C0A9F2EB108FF1255F3509E0A4CFA40/61554.png","cost":300},{"name":"Council Guard Pauldrons","icon":"https://render.guildwars2.com/file/79D0152FEF26654D2F5C7B60D6156602325AEAE0/61555.png","cost":210},{"name":"Council Watch Boots","icon":"https://render.guildwars2.com/file/37432E02980B007FA80DEC0FF774E16E5DD360D4/61450.png","cost":180},{"name":"Council Watch Chestguard","icon":"https://render.guildwars2.com/file/E3053EDDB4FFD6B031CE6B6A043153C7256C031E/61451.png","cost":330},{"name":"Council Watch Gloves","icon":"https://render.guildwars2.com/file/BEEDF1F44EEF0C1CB47E080244045F2C4A0473BC/61452.png","cost":180},{"name":"Council Watch Faceguard","icon":"https://render.guildwars2.com/file/64BBC992256511E52659766262020C07E843E2F4/61453.png","cost":180},{"name":"Council Watch Leggings","icon":"https://render.guildwars2.com/file/CB36E7FEFD57553505F6CCB92F150B011FF03592/61454.png","cost":300},{"name":"Council Watch Shoulderguards","icon":"https://render.guildwars2.com/file/F205E23735DCF5B92F78C5D90CDCB06AD6E70912/339738.png","cost":210},{"name":"Council Ministry Shoes","icon":"https://render.guildwars2.com/file/974DADA2AEC9F352710B6D035A0F0DBDF55737FD/61478.png","cost":180},{"name":"Council Ministry Vestments","icon":"https://render.guildwars2.com/file/2A0409C449C453B412CDA90F27D30780D4B3EC07/61479.png","cost":330},{"name":"Council Ministry Gloves","icon":"https://render.guildwars2.com/file/626D9A0F9A3B5D0D2050DCD0CB0FB93EA15201ED/61480.png","cost":180},{"name":"Council Ministry Circlet","icon":"https://render.guildwars2.com/file/A2B4B43668D49D60F519E9432F4F6BEAA23E49C9/61481.png","cost":180},{"name":"Council Ministry Hose","icon":"https://render.guildwars2.com/file/52F1E26298E9434F9E00C9D1B95EE3D2A8A1E144/61482.png","cost":300},{"name":"Council Ministry Mantle","icon":"https://render.guildwars2.com/file/9241772C4A32C530E156ED56A7752D0505EF73BC/61483.png","cost":210},{"name":"Golden Wing Axe","icon":"https://render.guildwars2.com/file/0375E5C44BAE02FA186D064EB0DBE02A526A7129/455674.png","cost":300},{"name":"Golden Wing Dagger","icon":"https://render.guildwars2.com/file/BBA49C26F50E2E052BD390CD5F7BA8E5A7B3A547/455701.png","cost":300},{"name":"Golden Wing Focus","icon":"https://render.guildwars2.com/file/04C10EE27B4706764C44B0089E7D01A0621D0EAB/455705.png","cost":210},{"name":"Golden Wing Greatsword","icon":"https://render.guildwars2.com/file/56BBDC63C707441D6E490BD396213A44012EDC75/455712.png","cost":390},{"name":"Golden Wing Hammer","icon":"https://render.guildwars2.com/file/34C22012C81DA8D60AB36746A8A4F5DD52F6B27F/455714.png","cost":390},{"name":"Golden Wing Harpoon","icon":"https://render.guildwars2.com/file/0432BBD6A0B87805372C61652BE66E2DB819BCE0/455721.png","cost":390},{"name":"Golden Wing Longbow","icon":"https://render.guildwars2.com/file/51A9CE65A79650CB6AFC36071B5E0D0941D61707/455685.png","cost":390},{"name":"Golden Wing Mace","icon":"https://render.guildwars2.com/file/DDEDC8EBF2AE78E2D7F271491ED6FB37CE04ED67/455725.png","cost":300},{"name":"Golden Wing Pistol","icon":"https://render.guildwars2.com/file/D2B6F14470E8245ED942F43D560F1E80222B05F6/455732.png","cost":300},{"name":"Golden Wing Rifle","icon":"https://render.guildwars2.com/file/031F0C31EFC0083E3002486C5F45F42920BA6DC3/455742.png","cost":390},{"name":"Golden Wing Scepter","icon":"https://render.guildwars2.com/file/770E3EDF02AF666CFE23CCF716B121BECAE1E104/455745.png","cost":300},{"name":"Golden Wing Shield","icon":"https://render.guildwars2.com/file/729B2A96CDC6FDC2DF14E001EF3CBC0123C35CA7/455749.png","cost":210},{"name":"Golden Wing Short Bow","icon":"https://render.guildwars2.com/file/A42B9CD9980903052608CA236A98CD761E7D97B3/455690.png","cost":390},{"name":"Golden Wing Speargun","icon":"https://render.guildwars2.com/file/031F0C31EFC0083E3002486C5F45F42920BA6DC3/455742.png","cost":390},{"name":"Golden Wing Staff","icon":"https://render.guildwars2.com/file/A433922CC0573EC106F034C695F41EA60564CE19/455758.png","cost":390},{"name":"Golden Wing Sword","icon":"https://render.guildwars2.com/file/11AB0EDEE60F52AC7CDE939A0A9B7B71569E04D0/455766.png","cost":300},{"name":"Golden Wing Torch","icon":"https://render.guildwars2.com/file/620A9130AAA0B6AB299A40FFF4583EBB660D560D/455771.png","cost":210},{"name":"Golden Wing Trident","icon":"https://render.guildwars2.com/file/A433922CC0573EC106F034C695F41EA60564CE19/455758.png","cost":390},{"name":"Golden Wing Warhorn","icon":"https://render.guildwars2.com/file/306FAFF64AA8AA0FB36433093704C62E25567617/455780.png","cost":210}]},
	{"name": "Twilight Arbor", "shortname": "ta", "currency": "Deadly Blooms", "currencyImg": "Deadly_Bloom.png", "currencyImgFilled": "Deadly_Bloom_Filled.png", "paths": 2, "items": [{"name":"Nightmare Court Greaves","icon":"https://render.guildwars2.com/file/076077FB59F7AA1833A5C69555CC9502522A7DD5/218942.png","cost":180},{"name":"Nightmare Court Breastplate","icon":"https://render.guildwars2.com/file/73CF0605CE3703D83869A07549F71C0D65050CE5/218943.png","cost":330},{"name":"Nightmare Court Gauntlets","icon":"https://render.guildwars2.com/file/E1FD1274F0C00F149154D1E327BCBF1841FE340A/218944.png","cost":180},{"name":"Nightmare Court Helmet","icon":"https://render.guildwars2.com/file/B2F4071080AAF4B1193FD3483F1720DCA2EE69DA/218945.png","cost":180},{"name":"Nightmare Court Legguards","icon":"https://render.guildwars2.com/file/3C9B7D0A17730AD49AB795CEC54B60A9B6CAE2C3/218946.png","cost":300},{"name":"Nightmare Court Pauldrons","icon":"https://render.guildwars2.com/file/70052D3A33EE7F65C72A5DC3BF6505406F047B6A/218947.png","cost":210},{"name":"Nightmare Court Footwraps","icon":"https://render.guildwars2.com/file/F0A638FAB1B15AFC175A55B30405CE027EA8CCB4/61472.png","cost":180},{"name":"Nightmare Court Robes","icon":"https://render.guildwars2.com/file/C85173317408B504993BDC08CD2473C327DE2C62/61473.png","cost":330},{"name":"Nightmare Court Gloves","icon":"https://render.guildwars2.com/file/34A506B9EB2B1F1E0DB49ECA0368D0A86242C4A0/61474.png","cost":180},{"name":"Nightmare Court Regalia","icon":"https://render.guildwars2.com/file/3FC9C0679BE565140BD0230F5512221598C8EB76/61475.png","cost":180},{"name":"Nightmare Court Sarong","icon":"https://render.guildwars2.com/file/EB75DEA69AD92A9D1B17F97C20650FC6B0F14C06/61476.png","cost":300},{"name":"Nightmare Court Mantle","icon":"https://render.guildwars2.com/file/D7509905AD3B9EE00359B041BC3DA29F08D215C7/61477.png","cost":210},{"name":"Nightmare Court Boots","icon":"https://render.guildwars2.com/file/A82817D5CD355D1624BBF206AB082CBD02E56655/493119.png","cost":180},{"name":"Nightmare Court Guise","icon":"https://render.guildwars2.com/file/B4653BDD366024DCEAA09F2C3DF269BCD1DA04CA/493120.png","cost":330},{"name":"Nightmare Court Armguards","icon":"https://render.guildwars2.com/file/FFF60937755238F661C8511A7297C31E26B17611/493121.png","cost":180},{"name":"Nightmare Court Faceguard","icon":"https://render.guildwars2.com/file/CC4368E21B3005A4291640C4B007A2D0482470EE/493122.png","cost":180},{"name":"Nightmare Court Leggings","icon":"https://render.guildwars2.com/file/F06B2C3271BE39A7D1B90446A26057324612167F/493123.png","cost":300},{"name":"Nightmare Court Collar","icon":"https://render.guildwars2.com/file/FFC3C975B33A99092B97ED6321F273B7F2A64A69/493124.png","cost":210},{"name":"Nightmare Axe","icon":"https://render.guildwars2.com/file/A94FECED32192CA9E6F402119BAA380975392C22/455675.png","cost":300},{"name":"Nightmare Blade","icon":"https://render.guildwars2.com/file/0D0B39B322EE4C020C0F98EAD4A964F9D37DF3CE/455764.png","cost":300},{"name":"Nightmare Dagger","icon":"https://render.guildwars2.com/file/2CFF660E6CCC17A1057D5A6A684270C760411069/455700.png","cost":300},{"name":"Nightmare Focus","icon":"https://render.guildwars2.com/file/76F47DEC044145F672447B5D6B11D87ABCDDFA03/455707.png","cost":210},{"name":"Nightmare Harpoon","icon":"https://render.guildwars2.com/file/05BE3230B2035E66799A2CBC2FCF5C3903BAABC9/780028.png","cost":390},{"name":"Nightmare Greatsword","icon":"https://render.guildwars2.com/file/15199EE341CE451A04CF10B6DA020F1B07FED255/643210.png","cost":390},{"name":"Nightmare Harpoon Gun","icon":"https://render.guildwars2.com/file/0F75F8BA5E042257B6261641943C6970D14ADB5C/455737.png","cost":390},{"name":"Nightmare Long Bow","icon":"https://render.guildwars2.com/file/CE3777D0115E2A6D683C570359B758DD28E8E6EF/455680.png","cost":390},{"name":"Nightmare Mace","icon":"https://render.guildwars2.com/file/68E9726566AA0A4A72A1A730AFAE09062D90D9FC/455729.png","cost":300},{"name":"Nightmare Pistol","icon":"https://render.guildwars2.com/file/C3160528583C5CD14805C0F9EB0A93255C76FBF2/455731.png","cost":300},{"name":"Nightmare Rifle","icon":"https://render.guildwars2.com/file/0F75F8BA5E042257B6261641943C6970D14ADB5C/455737.png","cost":390},{"name":"Nightmare Scepter","icon":"https://render.guildwars2.com/file/D37892A0CB73CBE72F5103D80C97A676C7BCDEA8/455743.png","cost":300},{"name":"Nightmare Shield","icon":"https://render.guildwars2.com/file/AD625C9DDB7992FE2B38950276F2F92F927B0B35/455754.png","cost":210},{"name":"Nightmare Short Bow","icon":"https://render.guildwars2.com/file/679D44019ECED8B71765A61BA0E6D16CA238FBAE/455689.png","cost":390},{"name":"Nightmare Staff","icon":"https://render.guildwars2.com/file/C0A84D6060A305C15905C8CE9904A49A61B30F0A/455759.png","cost":390},{"name":"Nightmare Torch","icon":"https://render.guildwars2.com/file/CC21F1030C9D560D65FA6CAC5F0AEC31E12B1C00/455769.png","cost":210},{"name":"Nightmare Trident","icon":"https://render.guildwars2.com/file/C0A84D6060A305C15905C8CE9904A49A61B30F0A/455759.png","cost":390},{"name":"Nightmare Warhammer","icon":"https://render.guildwars2.com/file/FD5CBA19BFEE71F87D1B3A08AD01B8170A6E2907/455717.png","cost":390},{"name":"Nightmare Warhorn","icon":"https://render.guildwars2.com/file/0CB505F796CCE5C20827E1ECBD0D912D3A0E0B00/455784.png","cost":210}]},
	{"name": "Sorrow's Embrace", "shortname": "se", "currency": "Manifestos of the Moletariate", "currencyImg": "Manifesto_of_the_Moletariate.png", "currencyImgFilled": "Manifesto_of_the_Moletariate_Filled.png", "paths": 3, "items": [{"name":"Forgeman Greaves","icon":"https://render.guildwars2.com/file/B043CF17DD049520CA9BAF651A6E9C4D5C2F0868/61532.png","cost":180},{"name":"Forgeman Breastplate","icon":"https://render.guildwars2.com/file/F5090F79FACD730771557D359DBA24DDF10594F8/61533.png","cost":330},{"name":"Forgeman Gauntlets","icon":"https://render.guildwars2.com/file/DD2DDDF92269CEA1F0E9F0A5371075F205E67AE6/61534.png","cost":180},{"name":"Forgeman Helmet","icon":"https://render.guildwars2.com/file/19FA3117A556B1522A7CF9F31C0563A7B2159A04/61535.png","cost":180},{"name":"Forgeman Tassets","icon":"https://render.guildwars2.com/file/FA4ED6BCA10846A9480FBC9D07527E1E7F7E021F/61536.png","cost":300},{"name":"Forgeman Pauldrons","icon":"https://render.guildwars2.com/file/0497B954D6EDB85EC5229093170064F7090DC10D/61537.png","cost":210},{"name":"Forgeman Boots","icon":"https://render.guildwars2.com/file/6249D3AF5FB3229B423570BA65B4CADDC353DFCC/61460.png","cost":180},{"name":"Forgeman Jacket","icon":"https://render.guildwars2.com/file/713D1DEF9730A180200061DA456C9A98BE484EB5/61461.png","cost":330},{"name":"Forgeman Gloves","icon":"https://render.guildwars2.com/file/9CF8A352630DF177955E035209EAD17106DC082A/61462.png","cost":180},{"name":"Forgeman Headguard","icon":"https://render.guildwars2.com/file/1C38E00847D0AFB822330140EC18BEA0F866CCB5/61463.png","cost":180},{"name":"Forgeman Breeches","icon":"https://render.guildwars2.com/file/6C90CD95292C940E18D223672BDDE7800C5561C0/61464.png","cost":300},{"name":"Forgeman Shoulders","icon":"https://render.guildwars2.com/file/7CBFF204E12D683407E564DD5A0E1C2A16BFFF35/61465.png","cost":210},{"name":"Forgeman Shoes","icon":"https://render.guildwars2.com/file/E02EF3AF992432D7003439C90E3F9013E6EC4FF4/61484.png","cost":180},{"name":"Forgeman Raiment","icon":"https://render.guildwars2.com/file/9C499DE410191B0F270FBA0A0A93CF417B4AE516/61485.png","cost":330},{"name":"Forgeman Wristguards","icon":"https://render.guildwars2.com/file/2DDCF4BF659A0DFD6E9F109D7E5F9B0C4256FEEF/61486.png","cost":180},{"name":"Forgeman Mask","icon":"https://render.guildwars2.com/file/F5F373AF2C9D0A4D50B81C620D2A37DD38A99803/61487.png","cost":180},{"name":"Forgeman Leggings","icon":"https://render.guildwars2.com/file/AA5CC91E38D89B6D3535D5256F3818242C995301/61488.png","cost":300},{"name":"Forgeman Mantle","icon":"https://render.guildwars2.com/file/1CD771E26EF70E493D00E20CA4D6D694AC630267/61489.png","cost":210},{"name":"Dark Asuran Axe","icon":"https://render.guildwars2.com/file/050094C90F23BF3652D0515D6D1E55D8A398B2FF/455676.png","cost":300},{"name":"Dark Asuran Dagger","icon":"https://render.guildwars2.com/file/26B8E239199AD96859BEAF019F35012DC7FB5FE3/455697.png","cost":300},{"name":"Dark Asuran Focus","icon":"https://render.guildwars2.com/file/07655EE433453FD32FBCCA0B9BC9A467A5E10E80/455703.png","cost":210},{"name":"Dark Asuran Greatsword","icon":"https://render.guildwars2.com/file/A0C8A163ACDAAF3657E3D666B60EF9E1AD27E2F0/455709.png","cost":390},{"name":"Dark Asuran Hammer","icon":"https://render.guildwars2.com/file/1BD56E11A0350D930E1E611EC212F2AC6C7404EF/455718.png","cost":390},{"name":"Dark Asuran Harpoon","icon":"https://render.guildwars2.com/file/BF38209801E9C242060B651475E31330ED09A59E/455722.png","cost":390},{"name":"Dark Asuran Longbow","icon":"https://render.guildwars2.com/file/5AAE4AAE4357BC714B3DC040A6ACFE01B0AD079C/455684.png","cost":390},{"name":"Dark Asuran Mace","icon":"https://render.guildwars2.com/file/716A0C0413B21707A24B43DFCC3D309162A10CF0/455727.png","cost":300},{"name":"Dark Asuran Pistol","icon":"https://render.guildwars2.com/file/AF32DEAAE7BBCCD6DE3D6558AFB6D47F1B1C696E/455736.png","cost":300},{"name":"Dark Asuran Rifle","icon":"https://render.guildwars2.com/file/020A253B2513E8A2504A350F2D4BADBA4936BE6D/455741.png","cost":390},{"name":"Dark Asuran Scepter","icon":"https://render.guildwars2.com/file/272EC300DD1AB5E37E0B78684C4A6699DC440F1B/455747.png","cost":300},{"name":"Dark Asuran Shield","icon":"https://render.guildwars2.com/file/222F72EDEC31ACB7BC439499F4DD4AA4A94A6C48/65373.png","cost":210},{"name":"Dark Asuran Short Bow","icon":"https://render.guildwars2.com/file/160DFA0BC2EAE369446AD0F800A3F666F10C4CA4/455694.png","cost":390},{"name":"Dark Asuran Speargun","icon":"https://render.guildwars2.com/file/17FB67137D75CC0AFE07FDB61FAE37FA4AF7C5DB/455756.png","cost":390},{"name":"Dark Asuran Staff","icon":"https://render.guildwars2.com/file/099049C600217D31D4245DDCF03F654D04462C4A/455763.png","cost":390},{"name":"Dark Asuran Sword","icon":"https://render.guildwars2.com/file/021FC36C436AAF1DFF47E1CEC72CA17D39B845B2/455768.png","cost":300},{"name":"Dark Asuran Torch","icon":"https://render.guildwars2.com/file/273FE82CE34E2A3FA0502BF675B40EA56F483FAF/455772.png","cost":210},{"name":"Dark Asuran Trident","icon":"https://render.guildwars2.com/file/ABFD2BDA9102220FE25D34FE6695529B02FC991F/455777.png","cost":390},{"name":"Dark Asuran Warhorn","icon":"https://render.guildwars2.com/file/0C3F5401F750350CE376FCC73AC30DB47E2C05D3/455779.png","cost":210}]},
	{"name": "Citadel of Flame", "shortname": "cof", "currency": "Flame Legion Charr Carvings", "currencyImg": "Flame_Legion_Charr_Carving.png", "currencyImgFilled": "Flame_Legion_Charr_Carving_Filled.png", "paths": 3, "items": [{"name":"Flame Legion Greaves","icon":"https://render.guildwars2.com/file/49010C7BA06B9D6CA5499F084ED402D21AE8B15B/61538.png","cost":180},{"name":"Flame Legion Breastplate","icon":"https://render.guildwars2.com/file/D02D186E147DC0149BC97760D0A20F1BD0999B01/61539.png","cost":330},{"name":"Flame Legion Gauntlets","icon":"https://render.guildwars2.com/file/959CF0700F49EC08C5532F5530461AAEBF36289B/61540.png","cost":180},{"name":"Flame Legion Helm","icon":"https://render.guildwars2.com/file/06C27CEEC9DFEC06E492C6C64D92FD5CD3730B96/61541.png","cost":180},{"name":"Flame Legion Legguards","icon":"https://render.guildwars2.com/file/4B959630DE0F2F71E612B9BB6C340C639B047204/61542.png","cost":300},{"name":"Flame Legion Pauldrons","icon":"https://render.guildwars2.com/file/97F74520931805F36880246D517E97E105D2E132/61543.png","cost":210},{"name":"Flame Legion Boots","icon":"https://render.guildwars2.com/file/9E0D2D4BC8F204DD3D25DCA6AB1C9C3739CC3A17/61586.png","cost":180},{"name":"Flame Legion Coat","icon":"https://render.guildwars2.com/file/27555C5B271911561559ECE8F1E8B33012E75A58/61587.png","cost":330},{"name":"Flame Legion Gloves","icon":"https://render.guildwars2.com/file/52549E1A3A677F0B7FB15D2BDB4558A39F0B9FF1/61588.png","cost":180},{"name":"Flame Legion Helm","icon":"https://render.guildwars2.com/file/709A030CA0F96E922C3F4BE30E0CDFB7D84AA21A/61589.png","cost":180},{"name":"Flame Legion Leggings","icon":"https://render.guildwars2.com/file/24097B175F0A5319E4B305481D3E311ACFCC2136/61590.png","cost":300},{"name":"Flame Legion Shoulders","icon":"https://render.guildwars2.com/file/5FF158730A271820FE3CBDB4067717989070273F/61591.png","cost":210},{"name":"Flame Legion Shoes","icon":"https://render.guildwars2.com/file/B34D360D6EE798C1031417C6FF4514ECC9D34A4B/61490.png","cost":180},{"name":"Flame Legion Vestments","icon":"https://render.guildwars2.com/file/0CFEDAB873789E91A30257CB0FACD20E0ECD91CB/61491.png","cost":330},{"name":"Flame Legion Wraps","icon":"https://render.guildwars2.com/file/17642A791FEC340E13F2B8BAF93DDBE619E303A4/61492.png","cost":180},{"name":"Flame Legion Mask","icon":"https://render.guildwars2.com/file/414502B004E8F863D54880ADE21658B970460119/61493.png","cost":180},{"name":"Flame Legion Pants","icon":"https://render.guildwars2.com/file/F8C93BB06B0F2CDA6E4860E3EC2D03B84AA3D7B1/61494.png","cost":300},{"name":"Flame Legion Epaulets","icon":"https://render.guildwars2.com/file/5DF6DE05EAC501DD4D0CE5D15EB923730171E53A/61495.png","cost":210},{"name":"Molten Aegis","icon":"https://render.guildwars2.com/file/9E58F45F02C76F2FE6153290E3CB03B4A0EBAE03/455750.png","cost":210},{"name":"Molten Axe","icon":"https://render.guildwars2.com/file/3E1B370819B902691C41B8E11D5C6426A11972D3/455673.png","cost":300},{"name":"Molten Beacon","icon":"https://render.guildwars2.com/file/3A77B50E3591904E0345E66904194622A00CC0B6/455770.png","cost":210},{"name":"Molten Dagger","icon":"https://render.guildwars2.com/file/ACEF63CBA0C602083A60141403947309BE80F5F0/455698.png","cost":300},{"name":"Molten Greatsword","icon":"https://render.guildwars2.com/file/451A5376B7EA460C7CF1056AAFFE5B2E6B9DF33D/455710.png","cost":390},{"name":"Molten Harpoon","icon":"https://render.guildwars2.com/file/C6033F33317DD872F7DEDD05D065D6204FB5B40A/455720.png","cost":390},{"name":"Molten Harpoon Gun","icon":"https://render.guildwars2.com/file/C55A7C26A9190256EE4E1D59E0B8B71FE2D61D1A/455757.png","cost":390},{"name":"Molten Longbow","icon":"https://render.guildwars2.com/file/0451EBB35DB454967FC200B5040376C44690D99D/455681.png","cost":390},{"name":"Molten Shortbow","icon":"https://render.guildwars2.com/file/010CFAF514283EED1CF0735FDB047F6A6C096FE8/455687.png","cost":390},{"name":"Molten Mace","icon":"https://render.guildwars2.com/file/F2C696B009C65A3127DCE320A4917863E5585D40/455726.png","cost":300},{"name":"Molten Maul","icon":"https://render.guildwars2.com/file/C5C3A0A63416C4697FDB5B99FF6F28E29075C5B7/455719.png","cost":390},{"name":"Molten Pistol","icon":"https://render.guildwars2.com/file/53AAC3CDECA54C7D3B7B0A445169409A6A6C0BCF/455734.png","cost":300},{"name":"Molten Rifle","icon":"https://render.guildwars2.com/file/6D45AA53E112932723FE4CDF1646F36CE2CBCE5C/455739.png","cost":390},{"name":"Molten Scepter","icon":"https://render.guildwars2.com/file/794238CAF1C031F735E13A9744FCD56705E72CC1/455746.png","cost":390},{"name":"Molten Staff","icon":"https://render.guildwars2.com/file/0FA6D4EA19B5B55F6172552D12D909A87E400992/455762.png","cost":390},{"name":"Molten Sword","icon":"https://render.guildwars2.com/file/677E05786A23D40E1141A56F03BB462FCDC01213/455765.png","cost":300},{"name":"Molten Symbol","icon":"https://render.guildwars2.com/file/E05293D8DBAE3E253055A9AC572859E428AC01E4/455706.png","cost":210},{"name":"Molten Trident","icon":"https://render.guildwars2.com/file/DF6A09AC34AF6978B7D128551AA36C5499634CFA/455775.png","cost":390},{"name":"Molten Warhorn","icon":"https://render.guildwars2.com/file/FF780B7A2934A4C3A716B8A69EA6B32AC3631677/455781.png","cost":210}]},
	{"name": "Honor of the Waves", "shortname": "hotw", "currency": "Symbols of Koda", "currencyImg": "Symbol_of_Koda.png", "currencyImgFilled": "Symbol_of_Koda_Filled.png", "paths": 3, "items": [{"name":"Paws of Koda","icon":"https://render.guildwars2.com/file/CE05252E16F093C178A5BADC4A6767BAE1FF04CD/218948.png","cost":180},{"name":"Brawn of Koda","icon":"https://render.guildwars2.com/file/D5CC32F132D4097578AB6E565BA4119C7DF30B80/218949.png","cost":330},{"name":"Claws of Koda","icon":"https://render.guildwars2.com/file/AC08B72B60F223F6AF18DF2F96919617057C1C5C/218950.png","cost":180},{"name":"Head of Koda","icon":"https://render.guildwars2.com/file/2B284AB50F0F6A6BDFCA9BA8A53CC00BF3069364/218951.png","cost":180},{"name":"Body of Koda","icon":"https://render.guildwars2.com/file/5B3D97ACE0B564D69B7B020AE94016D49E01EEFC/218952.png","cost":300},{"name":"Burden of Koda","icon":"https://render.guildwars2.com/file/8039E9D27EB629A1093BC348575401FE04C8FBE3/218953.png","cost":210},{"name":"Tracks of Koda","icon":"https://render.guildwars2.com/file/2F533D06C713015C61314BD1D10FC06374EDA898/61598.png","cost":180},{"name":"Heart of Koda","icon":"https://render.guildwars2.com/file/FF0D6304442A7CDC2AF7037FD416092CCB1738AF/61599.png","cost":330},{"name":"Force of Koda","icon":"https://render.guildwars2.com/file/1CCE3AFB921252016320E49FC4F236D3AC7119F1/61600.png","cost":180},{"name":"Visage of Koda","icon":"https://render.guildwars2.com/file/F7450E7221080C37CEB54FF8CBBCAB3CA02AC7CC/61601.png","cost":180},{"name":"Stride of Koda","icon":"https://render.guildwars2.com/file/DF0EEEC70A5848C6B5ABCFA6B6B6213CB7A5F534/61602.png","cost":300},{"name":"Duty of Koda","icon":"https://render.guildwars2.com/file/E3080912CB4BD0E96A4BB6E2315EF3C2D669716F/61603.png","cost":210},{"name":"Path of Koda","icon":"https://render.guildwars2.com/file/D838370BBD1FA4C60D5A10B00F4D9C02485A31CA/61502.png","cost":180},{"name":"Soul of Koda","icon":"https://render.guildwars2.com/file/B50A52060E06014029D9D25579BDB2C1FE5B4DDB/61503.png","cost":330},{"name":"Arms of Koda","icon":"https://render.guildwars2.com/file/A603BD2025D07004B6A4E7DD9CFB7C2407DF3F35/61504.png","cost":180},{"name":"Mind of Koda","icon":"https://render.guildwars2.com/file/22F84152D8C7487D430E02B231A394F7DB3A289A/61505.png","cost":180},{"name":"Way of Koda","icon":"https://render.guildwars2.com/file/C428C3CB33F7BDE66DD3050A4E751E9F986D4A4B/61506.png","cost":300},{"name":"Mantle of Koda","icon":"https://render.guildwars2.com/file/30B8013480391597AAD80CA7A2BF992B0E67FD71/61507.png","cost":210},{"name":"Kodan Axe","icon":"https://render.guildwars2.com/file/1CC5C62DFC2AB400137EF600C7723C5FC3EA3629/455677.png","cost":300},{"name":"Kodan Long Bow","icon":"https://render.guildwars2.com/file/65CFBD6C01C0510A0341D665E1E934FEB5797398/455682.png","cost":390},{"name":"Kodan Short Bow","icon":"https://render.guildwars2.com/file/3D1FEA0D54271348633AD906BC74E538FB954A58/455693.png","cost":390},{"name":"Kodan Dagger","icon":"https://render.guildwars2.com/file/939756F5BBB980A3134FB36A6764025FCCFD2A08/455699.png","cost":300},{"name":"Kodan Focus","icon":"https://render.guildwars2.com/file/79A22CBD7DE614CEA594E6C05E0FDEA3120B0C9E/455704.png","cost":210},{"name":"Kodan Greatsword","icon":"https://render.guildwars2.com/file/4EE0D35521554D0E0F4448C8E8503C01F1586AA7/455708.png","cost":390},{"name":"Kodan Guard","icon":"https://render.guildwars2.com/file/D634C53ADFD23B37A1F8C862C3F091FF0BE914F1/455752.png","cost":210},{"name":"Kodan Harpoon","icon":"https://render.guildwars2.com/file/2E0C06AB7B4F7270DB6A4355C24E24F27F0704BF/455723.png","cost":390},{"name":"Kodan Harpoon Gun","icon":"https://render.guildwars2.com/file/D1CD7E45B4E766FA55250B1E9F2D49B6DB5E60EB/455755.png","cost":390},{"name":"Kodan Mace","icon":"https://render.guildwars2.com/file/181376AD4C9945C3F23455351FB478337CB6B4D8/455728.png","cost":300},{"name":"Kodan Pistol","icon":"https://render.guildwars2.com/file/97D9F452EAD438C99CDB066E425A5808C81728A9/455733.png","cost":300},{"name":"Kodan Rifle","icon":"https://render.guildwars2.com/file/3477BB927223D877F30916AB0991F72780CFBFA2/455740.png","cost":390},{"name":"Kodan Scepter","icon":"https://render.guildwars2.com/file/D2647545BFE52104589574FBB74D555A38D3DE6C/455744.png","cost":300},{"name":"Kodan Staff","icon":"https://render.guildwars2.com/file/2C219DF651AD4ABCB7EC2D6E79DC1E222F01B6F3/455760.png","cost":390},{"name":"Kodan Sword","icon":"https://render.guildwars2.com/file/4835CA21F31760923EC53AB40BF3BF54F5A7B597/455767.png","cost":300},{"name":"Kodan Torch","icon":"https://render.guildwars2.com/file/423BC1E33192549CB106B640B9F4C8CCDBFD70E6/455774.png","cost":210},{"name":"Kodan Trident","icon":"https://render.guildwars2.com/file/04D901CA57EDE3199243E1EAF4674155BBE3E5AB/455776.png","cost":390},{"name":"Kodan Warhammer","icon":"https://render.guildwars2.com/file/13EEA601DE29902F1F24B1990651563054659B2F/455715.png","cost":390},{"name":"Kodan Warhorn","icon":"https://render.guildwars2.com/file/48A1CEB210D7C5BD04E9EE34CBF7DA625A076F55/455778.png","cost":210}]},
	{"name": "Crucible of Eternity", "shortname": "coe", "currency": "Knowledge Crystals", "currencyImg": "Knowledge_Crystal.png", "currencyImgFilled": "Knowledge_Crystal_Filled.png", "paths": 3, "items": [{"name":"Inquest Greaves","icon":"https://render.guildwars2.com/file/A56F400724470E2CA756A59E35E4BCA6CCAE57EF/61568.png","cost":180},{"name":"Inquest Breastplate","icon":"https://render.guildwars2.com/file/6DAB0CCD0655F72536F6035A0C24CA050A05EF78/61569.png","cost":330},{"name":"Inquest Gauntlets","icon":"https://render.guildwars2.com/file/325E0E11791B347B00F735F976F321453AC55222/61570.png","cost":180},{"name":"Inquest Helm","icon":"https://render.guildwars2.com/file/1397C542B0FF693969DE10160D33781470EEEDC3/61571.png","cost":180},{"name":"Inquest Legguards","icon":"https://render.guildwars2.com/file/CF0215E5637107D09875DA0B7222D77468A49E0D/61572.png","cost":300},{"name":"Inquest Pauldrons","icon":"https://render.guildwars2.com/file/6C4BDC42FDF9C76045DD1E7D0C2F11C8A96D94C9/61573.png","cost":210},{"name":"Inquest Boots","icon":"https://render.guildwars2.com/file/B3053E2B50C26452AE9199099C6B301D3E92F53C/61592.png","cost":180},{"name":"Inquest Guise","icon":"https://render.guildwars2.com/file/7BBB2CED0FAC2E0DD9B214907EE93AF55DDB0DFE/61593.png","cost":330},{"name":"Inquest Bracers","icon":"https://render.guildwars2.com/file/EE3B1CBAF6F951F893141655C520F75CEB2C139A/61594.png","cost":180},{"name":"Inquest Hood","icon":"https://render.guildwars2.com/file/0D2A7B04AF62163E9E016D536B16B680EEDFA67F/61595.png","cost":180},{"name":"Inquest Leggings","icon":"https://render.guildwars2.com/file/4AF421CF7970101C76F8C6DADE716ABA51776D3A/61596.png","cost":300},{"name":"Inquest Shoulders","icon":"https://render.guildwars2.com/file/224635CFB132342B78BC0B19B373E9620FDEE792/61597.png","cost":210},{"name":"Inquest Shoes","icon":"https://render.guildwars2.com/file/422F58C7C20EC93ADE94C4FDE30A259A1D0DEB6E/61496.png","cost":180},{"name":"Inquest Vest","icon":"https://render.guildwars2.com/file/D2FD60DEF52FA741D25F9A3495800A097C95D76F/61497.png","cost":330},{"name":"Inquest Wraps","icon":"https://render.guildwars2.com/file/C072C2FDDE6DD1C4A193D4BA460FE367E7E5A0E3/61498.png","cost":180},{"name":"Inquest Circlets","icon":"https://render.guildwars2.com/file/B0E176B6E90E47BFD456D80CC4CAB4E064662A1F/61499.png","cost":180},{"name":"Inquest Breeches","icon":"https://render.guildwars2.com/file/33FE4D2C050C75DB6473070A3DD6C3A75113F93D/61500.png","cost":300},{"name":"Inquest Mantle","icon":"https://render.guildwars2.com/file/F2573A67D67D1C0EA8D4F86B090476C15080A05C/61501.png","cost":210},{"name":"Inquest Axe","icon":"https://render.guildwars2.com/file/A5FF6780B93B0BBC1D0EAD5B4B52C92F5069C726/780020.png","cost":300},{"name":"Inquest Dagger","icon":"https://render.guildwars2.com/file/F12558439EE6F4349C035130DB9AAF0761B50690/780023.png","cost":300},{"name":"Inquest Focus","icon":"https://render.guildwars2.com/file/0F11CE21EFF40F7ED1E0FD2A74F759EC73B4CC59/780024.png","cost":210},{"name":"Inquest Greatsword","icon":"https://render.guildwars2.com/file/F96304D1576A1D39C2EF2798FD4980DFFB9495AA/780025.png","cost":390},{"name":"Inquest Hammer","icon":"https://render.guildwars2.com/file/15321EC5E5FE084A32CBA807046E966DC0694FBC/780026.png","cost":390},{"name":"Inquest Harpoon","icon":"https://render.guildwars2.com/file/D1422CA6EE72077A044A06B7FCE093540177ABBD/780027.png","cost":390},{"name":"Inquest Longbow","icon":"https://render.guildwars2.com/file/2475E09AC8D69E93FB019A74F074CB49A4BE8068/780021.png","cost":390},{"name":"Inquest Mace","icon":"https://render.guildwars2.com/file/16AAE7056E41D8B7CD58224E2B004A044209DDE1/780029.png","cost":300},{"name":"Inquest Pistol","icon":"https://render.guildwars2.com/file/5C7034DBFCAF5A9432BDC12799A9569C7277D403/780030.png","cost":300},{"name":"Inquest Rifle","icon":"https://render.guildwars2.com/file/BA5D92220B62CEEC2123A2202201B1086A07AAB7/780031.png","cost":390},{"name":"Inquest Scepter","icon":"https://render.guildwars2.com/file/159509FB76A22CB70F4719CEB312D803C171AAE7/780032.png","cost":300},{"name":"Inquest Shield","icon":"https://render.guildwars2.com/file/C8C2F1150CA55813CD593D726FF0094CF808EE6C/780033.png","cost":210},{"name":"Inquest Short Bow","icon":"https://render.guildwars2.com/file/A2349108B75B9E621EE54C7850DED2625559DD0A/780022.png","cost":390},{"name":"Inquest Speargun","icon":"https://render.guildwars2.com/file/43DC20DBE27CB5556539C75BA4E862A440A49D0C/780034.png","cost":390},{"name":"Inquest Staff","icon":"https://render.guildwars2.com/file/BD3DCAB742DDF7241BBD5C321B03CF95C04B991E/780035.png","cost":390},{"name":"Inquest Sword","icon":"https://render.guildwars2.com/file/19FA0DD9013426277FF73E963AFC2415F15DBFF7/780036.png","cost":300},{"name":"Inquest Torch","icon":"https://render.guildwars2.com/file/67055AC4585D2358F97453085120956711745358/780037.png","cost":210},{"name":"Inquest Trident","icon":"https://render.guildwars2.com/file/00E1995BCCD3B60CEEE0D2915802EF2433410E7A/780038.png","cost":390},{"name":"Inquest Warhorn","icon":"https://render.guildwars2.com/file/94BEC421FDDFDD9815EC79582B2BB67FD8010A15/780039.png","cost":210}]},
	{"name": "The Ruined City of Arah", "shortname": "arah", "currency": "Shards of Zhaitan", "currencyImg": "Shard_of_Zhaitan.png", "currencyImgFilled": "Shard_of_Zhaitan_Filled.png", "paths": 4, "items": [{"name":"Grasping Dead Greaves","icon":"https://render.guildwars2.com/file/F56D03B19508DF394EB89879F44ED7B60CB99457/61580.png","cost":180},{"name":"Grasping Dead Breastplate","icon":"https://render.guildwars2.com/file/76030FEBC990CFAAD71FEF4B0906490212DFCFBD/61581.png","cost":330},{"name":"Grasping Dead Gauntlets","icon":"https://render.guildwars2.com/file/934B627911CD12965E6CA0C2429707590A3D2E28/61582.png","cost":180},{"name":"Grasping Dead Visage","icon":"https://render.guildwars2.com/file/BF557494056A14A8F2D1F920062101C3AAFB7ED5/61583.png","cost":180},{"name":"Grasping Dead Legguards","icon":"https://render.guildwars2.com/file/CCF1BA34D7B89B0C665FC5E9E217CEA3975EA702/61584.png","cost":300},{"name":"Grasping Dead Pauldrons","icon":"https://render.guildwars2.com/file/A17FA732622409F01BF89F2ABBA79F080EB3A67F/61585.png","cost":210},{"name":"Accursed Treads","icon":"https://render.guildwars2.com/file/B40A56C29F0647F40276B9283C7DD40267F01805/61604.png","cost":180},{"name":"Accursed Guise","icon":"https://render.guildwars2.com/file/6576D7DA067D5C9315B014BD3C65BF05F85D59D5/61605.png","cost":330},{"name":"Accursed Vambraces","icon":"https://render.guildwars2.com/file/3E11F7FCD80347A01E3123BCCB0A0A1E9FC6F05B/61606.png","cost":180},{"name":"Accursed Visage","icon":"https://render.guildwars2.com/file/3A374E613FC970BFD27F329F1380D06F96E2914F/61607.png","cost":180},{"name":"Accursed Leggings","icon":"https://render.guildwars2.com/file/9D0804BBF23E0F341E5667E2D80A69E11B2BB211/61608.png","cost":300},{"name":"Accursed Shoulders","icon":"https://render.guildwars2.com/file/47732EABA9B8B1CC79FD0129CFC24126039A7901/61609.png","cost":210},{"name":"Walkers of the Lich","icon":"https://render.guildwars2.com/file/9CEECE92E72406180733C8D86DE90F9B14A39F6B/61514.png","cost":180},{"name":"Vestments of the Lich","icon":"https://render.guildwars2.com/file/F6C068B7655D9CF62FCA5FD40D13B69D4E268025/61515.png","cost":330},{"name":"Wrappings of the Lich","icon":"https://render.guildwars2.com/file/DA47E832D936E04411C342C0072C6293AACC5D3C/61516.png","cost":180},{"name":"Gaze of the Lich","icon":"https://render.guildwars2.com/file/AE2E5FF3E0AD3DE4453C2D910ACEE00FC0E3C948/61517.png","cost":180},{"name":"Trappings of the Lich","icon":"https://render.guildwars2.com/file/BD101E715E4225C05B00D4071DA83DE90835E01F/61518.png","cost":300},{"name":"Mantle of the Lich","icon":"https://render.guildwars2.com/file/482B1E2D9064C1D33C355A39704CDEF31C4E1B0C/61519.png","cost":210},{"name":"Axe of the Dragon's Deep","icon":"https://render.guildwars2.com/file/C0021C6D93DBE6556856381A12F1F2496FD708A1/455678.png","cost":300},{"name":"Dagger of the Dragon's Deep","icon":"https://render.guildwars2.com/file/0924EE33B669B1E711D70E7C5037D280704126FE/455696.png","cost":300},{"name":"Focus of the Dragon's Deep","icon":"https://render.guildwars2.com/file/FCE8A6497D1F30E7F427D14EE11E39AA589E9B99/648120.png","cost":210},{"name":"Greatsword of the Dragon's Deep","icon":"https://render.guildwars2.com/file/A4F8A366AA44079AB7D79B5BD17E05EA68B63A7D/648121.png","cost":390},{"name":"Hammer of the Dragon's Deep","icon":"https://render.guildwars2.com/file/77FBD12D9BC39454F7327CF3B1011CF43863F87A/455716.png","cost":390},{"name":"Harpoon of the Dragon's Deep","icon":"https://render.guildwars2.com/file/43D82F0C4D0B0B5D75AE650DC75D37F5137B13E0/648122.png","cost":390},{"name":"Longbow of the Dragon's Deep","icon":"https://render.guildwars2.com/file/647A0F77BD00D609EF75F93FE6CBD9B990ACA245/455686.png","cost":390},{"name":"Mace of the Dragon's Deep","icon":"https://render.guildwars2.com/file/D1F9E06FF39A1648BA285720D83D0190C67C58BB/455730.png","cost":300},{"name":"Pistol of the Dragon's Deep","icon":"https://render.guildwars2.com/file/795CF4ABA4014350DCE8634317EAA42E32970035/455735.png","cost":300},{"name":"Rifle of the Dragon's Deep","icon":"https://render.guildwars2.com/file/43412246D395EABDC334151C9C038091CDB9C0D7/455738.png","cost":390},{"name":"Scepter of the Dragon's Deep","icon":"https://render.guildwars2.com/file/360E271C03BD03D856AB7DD33C06534DE662374F/455748.png","cost":300},{"name":"Shield of the Dragon's Deep","icon":"https://render.guildwars2.com/file/6BFB096CC6F27DD493AD091C436F6D970FE7F6D4/455751.png","cost":210},{"name":"Short Bow of the Dragon's Deep","icon":"https://render.guildwars2.com/file/C6DC9AFF029F544AE77DDEF2A89F95FF14C24374/455688.png","cost":390},{"name":"Speargun of the Dragon's Deep","icon":"https://render.guildwars2.com/file/43412246D395EABDC334151C9C038091CDB9C0D7/455738.png","cost":390},{"name":"Staff of the Dragon's Deep","icon":"https://render.guildwars2.com/file/766CD61C4F61AA61C0A71374460BC07F6DF56CE8/455761.png","cost":390},{"name":"Sword of the Dragon's Deep","icon":"https://render.guildwars2.com/file/EE5262D0BE434953255DE3A75AE6EBFF322FFDD9/455713.png","cost":300},{"name":"Torch of the Dragon's Deep","icon":"https://render.guildwars2.com/file/78CAAFFDECB398007BE89D01A0A6CF3E57B3D0A5/455773.png","cost":210},{"name":"Trident of the Dragon's Deep","icon":"https://render.guildwars2.com/file/766CD61C4F61AA61C0A71374460BC07F6DF56CE8/455761.png","cost":390},{"name":"Warhorn of the Dragon's Deep","icon":"https://render.guildwars2.com/file/CD0A2DDEAFCD01416FA8189842AE3E7D0F539B07/455782.png","cost":210}]}
];

$(document).ready(function() {
	// Activates knockout.js
	dungeoneer.vm = new DungeoneerModel();
	ko.applyBindings(dungeoneer.vm);
	
	// Activate listeners
	dungeoneer.listeners.all();
	
	// Hmmm... Where were we again?
	dungeoneer.storage.get();
});

var dungeoneer = {
	"vm": null,
	"newOrder": function(array, order) {
		var newItems = new Array();
		for(var i = 0; i < order.length; i++) {
			newItems.push(array[order[i]]);
		}

		return JSON.stringify(newItems);
	},
	"listeners": {
		"all": function() {
			dungeoneer.listeners.dungeonGear();
			dungeoneer.listeners.dungeonGearAll();
			dungeoneer.listeners.save();
			dungeoneer.listeners.delete();
		},
		"dungeonGear": function() {
			$(".dungeon-gear:not(.collect-all)").on("click", function() {
				// Find the cost of the item clicked and the tokensCollected
				var shortname = $(this).attr("data-shortname");
				var cost = parseInt($(this).attr("data-cost"));
				var collected = parseInt(dungeoneer.vm.tokensCollected[shortname]());

				if(!$(this).hasClass("collected")) {
					// If this does not have .collected
					$(this).addClass("collected");
					
					// Check if everything is collected
					var notCollected = $("#dungeon-gear-container-" + shortname + " .dungeon-gear:not(.collected):not(.collect-all)");
					if(notCollected.length == 0) {
						// Everything is collected. Time to make sure "Collect all" button is aware
						$("#dungeon-gear-container-" + shortname + " .dungeon-gear.collect-all").addClass("selected");
					}

					// Add cost to total
					dungeoneer.vm.tokensCollected[shortname](collected+cost);
				}
				else {
					// If this have .collected
					$(this).removeClass("collected");
					
					// Check if the Collect All button has .selected
					$(".dungeon." + shortname + " .dungeon-gear.collect-all").removeClass("selected");

					// Remove cost from total
					dungeoneer.vm.tokensCollected[shortname](collected-cost);
				}
			});
		},
		"dungeonGearAll": function() {
			$(".dungeon-gear.collect-all").on("click", function() {
				// Find the cost of the item clicked and the tokensCollected
				var shortname = $(this).attr("data-shortname");
				
				if(!$(this).hasClass("selected")) {
					// If not everything is collected
					$(".dungeon." + shortname + " .dungeon-gear:not(.collect-all):not(.collected)").trigger("click");
					
					$(this).addClass("selected");
				}
				else {
					// If this is selected and everything is collected
					$(".dungeon." + shortname + " .dungeon-gear:not(.collect-all)").trigger("click");
					
					$(this).removeClass("selected");
				}
				
			});
		},
		"save": function() {
			$(".btn-save").on("click", function() {
				// Call operator for storage
				dungeoneer.storage.set();
				
				// Set loading state
				dungeoneer.buttonLoading($(this), "Saved");
				
			});
		},
		"delete": function() {
			$(".btn-delete").on("click", function() {
				// Call operator for deletion
				dungeoneer.storage.clear();
				
				// Seset all tokens...
				dungeoneer.vm.tokens["ac"](0);
				dungeoneer.vm.tokens["cm"](0);
				dungeoneer.vm.tokens["ta"](0);
				dungeoneer.vm.tokens["se"](0);
				dungeoneer.vm.tokens["cof"](0);
				dungeoneer.vm.tokens["hotw"](0);
				dungeoneer.vm.tokens["coe"](0);
				dungeoneer.vm.tokens["arah"](0);
				
				// ...and all collected items
				$(".dungeon-gear.collected").trigger("click");
				
				// Set loading state
				dungeoneer.buttonLoading($(this), "Done");
			});
		}
	},
	"storage": {
		"set": function() {
			// How many tokens do we have?
			var tokens = {
				"ac": dungeoneer.vm.tokens["ac"](),
				"cm": dungeoneer.vm.tokens["cm"](),
				"ta": dungeoneer.vm.tokens["ta"](),
				"se": dungeoneer.vm.tokens["se"](),
				"cof": dungeoneer.vm.tokens["cof"](),
				"hotw": dungeoneer.vm.tokens["hotw"](),
				"coe": dungeoneer.vm.tokens["coe"](),
				"arah": dungeoneer.vm.tokens["arah"]()
			}
			
			// Which items have we collected?
			var collected = {
				"ac": [],
				"cm": [],
				"ta": [],
				"se": [],
				"cof": [],
				"hotw": [],
				"coe": [],
				"arah": []
			}
			
			var collectedItems = $(".dungeon-gear.collected");
			for (var i = 0; i < collectedItems.length; i++) {
				var item = $(collectedItems)[i];
				var dungeon = $(item).attr("data-shortname");
				var number = $(item).attr("data-gear-number");
				
				collected[dungeon].push(number);
			}
			
			// Stringify and save in localStorage
			localStorage.setItem("tokens", JSON.stringify(tokens));
			localStorage.setItem("collected", JSON.stringify(collected));
		},
		"get": function() {
			// First check if the data exists
			if(localStorage.getItem("tokens") != null && localStorage.getItem("collected") != null){
				// Get the values from localStorage
				var tokens = JSON.parse(localStorage.getItem("tokens"));
				var collected = JSON.parse(localStorage.getItem("collected"));

				// So, remind me again how many tokens we have?
				dungeoneer.vm.tokens["ac"](tokens["ac"]);
				dungeoneer.vm.tokens["cm"](tokens["cm"]);
				dungeoneer.vm.tokens["ta"](tokens["ta"]);
				dungeoneer.vm.tokens["se"](tokens["se"]);
				dungeoneer.vm.tokens["cof"](tokens["cof"]);
				dungeoneer.vm.tokens["hotw"](tokens["hotw"]);
				dungeoneer.vm.tokens["coe"](tokens["coe"]);
				dungeoneer.vm.tokens["arah"](tokens["arah"]);

				// Nice! What about the items?
				var dungeons = ["ac","cm","ta","se","cof","hotw","coe","arah"];
				for (var i = 0; i < dungeons.length; i++) {
					for (var y = 0; y < collected[dungeons[i]].length; y++) {
						$(".dungeon-gear-" + dungeons[i] + "[data-gear-number=" + collected[dungeons[i]][y] + "]").trigger("click");
					}
					
					// Check if everything is collected
					var notCollected = $(".dungeon-gear-"  + dungeons[i] + ":not(.collected)");
					if (notCollected.length == 0) {
						// If you have collected everything, let's hide the container
						$("#dungeon-gear-container-" + dungeons[i]).removeClass("in");
					}
				}
			}
		},
		"clear": function() {
			localStorage.removeItem("tokens");
			localStorage.removeItem("collected");
		}
	},
	"buttonLoading": function(btn, textFinished) {
		// Set loading state
		$(btn).button('loading');

		setTimeout(function() {
			btn[0].innerHTML = textFinished;
		},1);

		setTimeout(function() {
			$(btn).button('reset');
		},1000);
	}
}

var user = {
	"tokens": {
		"ac": null,
		"cm": null,
		"ta": null,
		"se": null,
		"cof": null,
		"hotw": null,
		"coe": null,
		"arah": null
	},
	"collected": {
		"ac": [],
		"cm": [],
		"ta": [],
		"se": [],
		"cof": [],
		"hotw": [],
		"coe": [],
		"arah": []
	}
}













