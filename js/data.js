"use strict";

const COMMUNITIES = [
  { n: "Kikuyu", r: "Central", c: "#53a66b", t: "Farmers of the Mount Kenya foothills",
    b: "The Kikuyu, also known as Agikuyu, have a long history in the central highlands around Mount Kenya. Farming has been important in many Kikuyu communities. The Mau Mau movement originated among the Kikuyu and was central to the struggle against British colonial rule." },
  { n: "Luhya", r: "Western", c: "#d9ad56", t: "Many sub-groups, one drumbeat",
    b: "Luhya is a collective name for several related communities in western Kenya, including the Bukusu and Maragoli. The region is known for isukuti drumming (source pending), as well as farming and diverse local customs." },
  { n: "Kalenjin", r: "Rift Valley", c: "#c87942", t: "Highland runners",
    b: "Kalenjin refers to a group of related communities in Kenya's Rift Valley region, including the Nandi, Kipsigis, Tugen, Keiyo and Marakwet. Kalenjin athletes have gained international recognition in middle- and long-distance running (source pending)." },
  { n: "Luo", r: "Nyanza", c: "#398a83", t: "People of the lake",
    b: "The Luo community has a strong historical connection to the Lake Victoria region. Fishing, oral storytelling and music have played important roles in many Luo communities. Benga is a musical style associated with the wider region (source pending)." },
  { n: "Kamba", r: "Eastern", c: "#c87942", t: "Traders and carvers",
    b: "The Kamba, also known as Akamba, have historical roots in the Ukambani region of eastern Kenya. Trade, farming and woodcarving are among the activities associated with Kamba communities (source pending)." },
  { n: "Kisii", r: "Nyanza", c: "#e04a4c", t: "Soapstone country",
    b: "The Kisii, also known as Abagusii, are mainly associated with the highland areas of southwestern Kenya. The Tabaka area is known for soapstone sculptures and decorative objects (source pending)." },
  { n: "Meru", r: "Central", c: "#53a66b", t: "Elders who decide",
    b: "The Meru communities are associated with the eastern slopes of Mount Kenya. Their history includes farming, local systems of leadership and community decision-making. Njuri Ncheke is a traditional council associated with the Meru (source pending)." },
  { n: "Mijikenda", r: "Coast", c: "#398a83", t: "Nine groups, sacred forests",
    b: "Mijikenda refers to nine related communities along the Kenyan coast. Kaya forests hold important cultural and historical meaning for these communities. The Giriama are one of the Mijikenda groups, and Mekatilili wa Menza is remembered for her resistance to colonial rule (source pending)." },
  { n: "Swahili", r: "Coast", c: "#6c9ed0", t: "Ocean traders and poets",
    b: "Swahili identity and culture are closely connected to the Kenyan coast and the wider Indian Ocean region. Coastal towns developed through long histories of trade and cultural exchange (source pending). Kiswahili is Kenya's national language." },
  { n: "Maasai", r: "Rift Valley", c: "#e04a4c", t: "Cattle, colour and beadwork",
    b: "The Maasai are a pastoralist community found in Kenya and Tanzania. Cattle have an important place in many Maasai traditions and social life. Beadwork, clothing and dance are widely recognised elements of Maasai cultural expression (source pending)." },
  { n: "Turkana", r: "Northern", c: "#d9ad56", t: "Lake and desert herders",
    b: "The Turkana community is mainly associated with northwestern Kenya, including the area around Lake Turkana. Pastoralism has been important in many Turkana communities (source pending)." },
  { n: "Somali", r: "Northern", c: "#53a66b", t: "Camel herders and traders",
    b: "Somali communities in Kenya are mainly associated with the northeastern region. Pastoralism, trade, poetry and oral traditions are important parts of Somali cultural life (source pending)." }
];

// v: 1 = verified against a source on sources.html (s = source number). No v = source pending.
const CULTURE = [
  { h: "Harambee", p: "Harambee is a Swahili word commonly translated as pulling together. It is associated with cooperation and collective effort, particularly in community projects and fundraising." },
  { h: "Official languages", v: 1, s: 5, p: "Kiswahili is Kenya's national language, and Kiswahili and English are the official languages. The State must also promote indigenous languages and Kenyan Sign Language (Constitution, Article 7)." },
  { h: "Sheng", p: "Sheng, a changing urban way of speaking that draws from several languages, is widely used, especially among young people." },
  { h: "Culture in the Constitution", v: 1, s: 5, p: "Article 11 recognises culture as the foundation of the nation and requires the State to promote cultural expression, including literature, the arts and traditional celebrations." },
  { h: "Food", p: "Kenyan food reflects regional ingredients and traditions. Ugali, sukuma wiki, nyama choma, chapati, githeri and coastal dishes are enjoyed in different parts of the country." },
  { h: "Music", p: "Kenya has many musical traditions, from benga and taarab to gospel, hip-hop, gengetone and contemporary Afro-pop." },
  { h: "Running", p: "Kenya is internationally recognised for its distance runners, with athletes from different parts of the country succeeding in track events and road races." },
  { h: "Mobile money", p: "Mobile money has changed how many Kenyans send, receive and manage money. M-Pesa launched in Kenya in 2007." }
];
