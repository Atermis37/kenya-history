"use strict";

const COMMUNITIES = [
  { n: "Kikuyu", r: "Central", c: "#53a66b", t: "Farmers of the Mount Kenya foothills",
    b: "The Kikuyu, also known as Agikuyu, have a long history in the central highlands around Mount Kenya. Farming has been important in many Kikuyu communities. In their oral histories the Kikuyu trace their ancestors to a migration from northeast of Mount Kenya, probably under way in the fifteenth century. The Mau Mau movement originated among the Kikuyu and was central to the struggle against British colonial rule.", src: [3, 16] },
  { n: "Luhya", r: "Western", c: "#d9ad56", t: "Many sub-groups, one drumbeat",
    b: "Luhya is a collective name for several related communities in western Kenya, including the Bukusu and Maragoli. The region is known for isukuti drumming (source pending), as well as farming and diverse local customs." },
  { n: "Kalenjin", r: "Rift Valley", c: "#c87942", t: "Highland runners",
    b: "Kalenjin refers to a group of related communities in Kenya's Rift Valley region, including the Nandi, Kipsigis, Tugen, Keiyo and Marakwet. The Kalenjin are classed among the Highland Nilotes, who expanded across the Rift Valley around the middle of the last millennium. Kalenjin athletes have gained international recognition in middle- and long-distance running (source pending).", src: [16] },
  { n: "Luo", r: "Nyanza", c: "#398a83", t: "People of the lake",
    b: "The Luo community has a strong historical connection to the Lake Victoria region. The Luo are the only River-Lake Nilotic people in Kenya and are traditionally known for fishing in Lake Victoria. Benga, a fusion of Luo rhythms with Congolese influences, became a national sensation in the 1970s. Oral storytelling is also important in many Luo communities (source pending).", src: [16, 19] },
  { n: "Kamba", r: "Eastern", c: "#c87942", t: "Traders and carvers",
    b: "The Kamba, also known as Akamba, have historical roots in the Ukambani region of eastern Kenya. Kamba ancestors are placed near Mount Kilimanjaro around the fifteenth century, before they reached the Mbooni Hills. Trade, farming and woodcarving are among the activities associated with Kamba communities (source pending).", src: [16] },
  { n: "Kisii", r: "Nyanza", c: "#e04a4c", t: "Soapstone country",
    b: "The Kisii, also known as Abagusii, are mainly associated with the highland areas of southwestern Kenya. The Tabaka area is known for soapstone sculptures and decorative objects (source pending)." },
  { n: "Meru", r: "Central", c: "#53a66b", t: "Elders who decide",
    b: "The Meru communities are associated with the eastern slopes of Mount Kenya. Their history includes farming, local systems of leadership and community decision-making. Njuri Ncheke is a traditional council associated with the Meru (source pending)." },
  { n: "Mijikenda", r: "Coast", c: "#398a83", t: "Nine groups, sacred forests",
    b: "Mijikenda refers to nine related communities along the Kenyan coast, and the Giriama are one of them (source pending). The kaya fungo was the ritual centre of the Giriama. Mekatilili wa Menza led Giriama resistance to British colonial rule in the early 1910s.", src: [12] },
  { n: "Swahili", r: "Coast", c: "#6c9ed0", t: "Ocean traders and poets",
    b: "Swahili identity and culture are closely connected to the Kenyan coast and the wider Indian Ocean region. UNESCO describes Gedi as one of the most important Swahili cities on the coast between the 10th and 17th centuries, and Lamu Old Town as the oldest and best-preserved Swahili settlement in East Africa. Kiswahili is Kenya's national language.", src: [9, 10, 5] },
  { n: "Maasai", r: "Rift Valley", c: "#e04a4c", t: "Cattle, colour and beadwork",
    b: "The Maasai are a pastoralist community found in Kenya and Tanzania. Cattle have an important place in many Maasai traditions and social life. The Maasai are classed among the Plains Nilotes. Beadwork, clothing and dance are widely recognised elements of Maasai cultural expression (source pending).", src: [16] },
  { n: "Turkana", r: "Northern", c: "#d9ad56", t: "Lake and desert herders",
    b: "The Turkana community is mainly associated with northwestern Kenya, including the area around Lake Turkana. The Turkana are classed among the Plains Nilotes. Pastoralism has been important in many Turkana communities (source pending).", src: [16] },
  { n: "Somali", r: "Northern", c: "#53a66b", t: "Camel herders and traders",
    b: "Somali communities in Kenya are mainly associated with the northeastern region. Somali speakers belong to the Cushitic language family, and Somali clans eventually ranged over most of northeastern Kenya. Pastoralism, trade, poetry and oral traditions are important parts of Somali cultural life (source pending).", src: [16] }
];

// v: 1 = verified against a source on sources.html (s = source number). No v = source pending.
const CULTURE = [
  { h: "Harambee", p: "Harambee is a Swahili word commonly translated as pulling together. It is associated with cooperation and collective effort, particularly in community projects and fundraising." },
  { h: "Official languages", v: 1, s: 5, p: "Kiswahili is Kenya's national language, and Kiswahili and English are the official languages. The State must also promote indigenous languages and Kenyan Sign Language (Constitution, Article 7)." },
  { h: "Sheng", v: 1, s: 18, p: "Sheng is a Swahili-based urban youth vernacular that emerged in Nairobi's Eastlands, with most scholars placing its origins in the 1960s and 1970s. It draws on English and other Kenyan languages, spread through music, and is no longer limited to young people or to Nairobi." },
  { h: "Culture in the Constitution", v: 1, s: 5, p: "Article 11 recognises culture as the foundation of the nation and requires the State to promote cultural expression, including literature, the arts and traditional celebrations." },
  { h: "Food", p: "Kenyan food reflects regional ingredients and traditions. Ugali, sukuma wiki, nyama choma, chapati, githeri and coastal dishes are enjoyed in different parts of the country." },
  { h: "Music", v: 1, s: 19, p: "Benga, a fusion of traditional Luo rhythms with Congolese influences, became a national sensation in the 1970s. Earlier pioneers such as Fadhili William and Daudi Kabaka recorded in the 1950s and 1960s, including the song Malaika. Newer urban styles include genge, kapuka and gengetone." },
  { h: "Running", p: "Kenya is internationally recognised for its distance runners, with athletes from different parts of the country succeeding in track events and road races." },
  { h: "Mobile money", v: 1, s: 8, p: "M-Pesa, a mobile money service run by Safaricom, launched officially on 6 March 2007. By 2017 it had more than 25 million customers, according to Safaricom." }
];
