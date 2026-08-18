/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}



<!-- http://kritikuok.lt/250/nelieciamieji-intouchables-2011-filmas apie filmus -->



		tooltips[43]=["http://t0.gstatic.com/images?q=tbn:ANd9GcROAi9MD_3BHmUnCJXmIoNbduO2I8YsQhvhzGp_U2Vha9XxgQcTlQ", "<b>Atskirtis</b><br/>(<i>The Divide</i>) 2011<br/><b>&#381;anras:</b> Siaubo, Trileriai<br/><b>Vaidina:</b> Lauren German, Michael Biehn,<br/> Milo Ventimiglia, Courtney B. Vance, Ashton Holmes,<br/> Rosanna Arquette, Iv&#225;n Gonz&#225;lez, Michael Eklund�<br/><b>Re&#382;isierius:</b> Xavier Gens.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 52 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[42]=["http://t0.gstatic.com/images?q=tbn:ANd9GcRgDaFNPe62ytGFrG8mDEMcwuyZFFArCd02EHkJmXMgldHeuP_4", "<b>Jauna Pilnamet&#279;</b><br/>(<i>Young Adult</i>) 2011<br/><b>&#381;anras:</b> Dramos, Komedijos<br/><b>Vaidina:</b> Charlize Theron, Patton Oswalt,<br/> Patrick Wilson, Elizabeth Reaser, Collette Wolfe,<br/> Jill Eikenberry, Richard Bekins, Mary Beth Hurt�<br/><b>Re&#382;isierius:</b> Jason Reitman.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 34 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[41]=["https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcQsTrauXMVvlEd0711dSfhnDH0BUPaUtU0viV4K0X41J0KtGObqeg", "<b>Tadas Blinda - Legenda gimsta</b> 2011<br/><b>&#381;anras:</b> Nuotikiai<br/><b>Vaidina:</b> Mantas Jankavi&#269;ius, Dainius Kazlauskas,<br/> Agn&#279; Ditkovskyt&#279;, Mykolas Vild&#382;i&#363;nas, Andrius Kaniava �<br/><b>Re&#382;isierius:</b> Donatas Ulvydas.<br/><b>&#352;alis:</b> Lietuva<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 50 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[40]=["http://t0.gstatic.com/images?q=tbn:ANd9GcRSDS9knXpNtMQrq9hAqkOvdAJfpda50pqKIbF0UzA2qYeKrMIQFw", "<b>Mergina Su Drakono Tatuiruote</b><br/>(<i>The Girl With The Dragon Tattoo</i>) 2011<br/><b>&#381;anras:</b> Dramos, Kriminaliniai, Mistiniai, Trileriai<br/><b>Vaidina:</b> Daniel Craig, Rooney Mara,<br/> Christopher Plummer, Stellan Skarsg&#229;rd, Steven Berkoff,<br/> Robin Wright, Yorick van Wageningen, Joely Richardson�<br/><b>Re&#382;isierius:</b> David Fincher.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 2 val. 38 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[39]=["http://t0.gstatic.com/images?q=tbn:ANd9GcSUVeK82msUjDyiB-7hN964ZdozO60tik7xHKOLPEbl1iwhIu1vCA", "<b>Misija Ne&#303;manoma 4: &#352;m&#279;klos Protokolas</b><br/>(<i>Mission Impossible 4: Ghost Protocol</i>) 2011<br/><b>&#381;anras:</b> Nuotyki&#371;, Trileriai, Veiksmo<br/><b>Vaidina:</b> Tom Cruise, Jeremy Renner,<br/> Simon Pegg, Paula Patton, Michael Nyqvist,<br/> Vladimir Mashkov, Samuli Edelmann, Ivan Shvedoff�<br/><b>Re&#382;isierius:</b> Brad Bird.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 2 val. 13 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[38]=["http://t1.gstatic.com/images?q=tbn:ANd9GcQUUDU1oLRyNnOAxe6EZPetJmLYhRVka6xYpHsSx8XVc9Xz1nBk", "<b>Melori Kein. Prarasta Kontrol&#279;</b><br/>(<i>Haywire</i>) 2011<br/><b>&#381;anras:</b> Trileriai, Veiksmo<br/><b>Vaidina:</b> Gina Carano, Michael Angarano,<br/> Channing Tatum, Debby Lynn Ross, Michael Douglas,<br/> Antonio Banderas, Ewan McGregor, Julian Alcaraz...<br/><b>Re&#382;isierius:</b> Steven Soderbergh.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 33 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[37]=["https://encrypted-tbn3.google.com/images?q=tbn:ANd9GcQbEmYI77LYlJylCmDvRJ2A_zF5JVOeG_XCl5NtjUitXzNu6L-y", "<b>Apokalipto</b> <br/>(<i>Apocalypto</i>) 2006<br/><b>&#381;anras:</b> Dramos, Nuotyki&#371;, Veiksmo<br/><b>Vaidina:</b> Rudy Youngblood, Dalia Hern&#225;ndez,<br/> Jonathan Brewer, Morris Birdyellowhead, Carlos Emilio B&#225;ez,<br/> Amilcar Ram&#237;rez, Israel Contreras, Israel R&#237;os�<br/><b>Re&#382;isierius:</b> Mel Gibson.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 2 val. 19 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[36]=["https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcSDKmrhgNjP2wlJjnGVrwWQ9phpoFV0l7rj4q2mUyeHpD7U_obhYQ", "<b>Tamsiausia Valanda</b> <br/>(<i>The Darkest Hour</i>) 2011<br/><b>&#381;anras:</b> Siaubo, Trileriai, Veiksmo<br/><b>Vaidina:</b> Emile Hirsch, Olivia Thirlby,<br/> Max Minghella, Rachael Taylor, Joel Kinnaman,<br/> Veronika Ozerova, Dato Bakhtadze, Yuriy Kutsenko�<br/><b>Re&#382;isierius:</b> Chris Gorak.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 29 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[35]=["https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcR9f1YeweNZxQVXWGlT2ayAjWbrce6EOk9xRFfZURdDiuSV5o-pVg", "<b>Londono Bulvaras</b> <br/>(<i>London Boulevard</i>) 2010<br/><b>&#381;anras:</b> Dramos, Kriminaliniai<br/><b>Vaidina:</b> Colin Farrell, Keira Knightley,<br/> David Thewlis, Anna Friel, Ben Chaplin,<br/> Ray Winstone, Eddie Marsan, Sanjeev Bhaskar�<br/><b>Re&#382;isierius:</b> William Monahan.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 43 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[34]=["https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcR9f1YeweNZxQVXWGlT2ayAjWbrce6EOk9xRFfZURdDiuSV5o-pVg", "<b>Londono Bulvaras</b> <br/>(<i>London Boulevard</i>) 2010<br/><b>&#381;anras:</b> Dramos, Kriminaliniai<br/><b>Vaidina:</b> Colin Farrell, Keira Knightley,<br/> David Thewlis, Anna Friel, Ben Chaplin,<br/> Ray Winstone, Eddie Marsan, Sanjeev Bhaskar�<br/><b>Re&#382;isierius:</b> William Monahan.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 43 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[33]=["https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcShQGw9S0rYhtIY7xt42Kgw5_S9DAqNA2n9E34aQps1ZXLsh94d2w", "<b>Tamsos Baikeris: Ker&#353;to Demonas</b> <br/>(<i>Ghost Rider: Spirit of Vengeance</i>) 2012<br/><b>&#381;anras:</b> Fantastiniai, Trileriai, Veiksmo<br/><b>Vaidina:</b> Nicolas Cage, Violante Placido,<br/> Ciar&#225;n Hinds, Idris Elba, Johnny Whitworth,<br/> Fergus Riordan, Spencer Wilding, Sorin Tofan�<br/><b>Re&#382;isierius:</b> Mark Neveldine, Brian Taylor.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 35 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[32]=["http://t0.gstatic.com/images?q=tbn:ANd9GcR5ymNzH_smxWi9HzKiPXRQelHz1y8G-5P1rDroK75cj_NUospU", "<b>Nakties &#302;kaitas</b> <br/>(<i>Collateral</i>) 2004<br/><b>&#381;anras:</b> Dramos, Kriminaliniai, Trileriai<br/><b>Vaidina:</b> Tom Cruise, Jamie Foxx,<br/> Jada Pinkett Smith, Mark Ruffalo, Peter Berg,<br/> Bruce McGill, Irma P. Hall, Barry Shabaka Henley�<br/><b>Re&#382;isierius:</b> Michael Mann.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 2 val. 00 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[27]=["https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcSl1fHRX2CFAuJI9nywDbjlbnKUbo4Q8nBEhQvEnTA7QVX-oe4xvA", "<b>Supermenas: sugr&#303;&#382;imas</b> <br/>(<i>Superman Returns</i>) 2006<br/><b>&#381;anras:</b> Fantastiniai,  Nuotyki&#371;, Veiksmo<br/><b>Vaidina:</b> Brandon Routh, Kate Bosworth,<br/> Kevin Spacey, James Marsden, Parker Posey.�<br/><b>Re&#382;isierius:</b> Bryan Singer.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 2 val. 34 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[31]=["http://img-hn.24hstatic.com/upload/1-2012/images/2012-01-27/1327673434_Defendor.jpg", "<b>Gyn&#279;jas</b> (<i>Defendor</i>) 2009<br/><b>&#381;anras:</b> Komedija, Kriminalinis<br/><b>Vaidina:</b> Woody Harrelson, Elias Koteas,<br/> Michael Kelly, Sandra Oh, Kat Dennings�<br/><b>Re&#382;isierius:</b> Peter Stebbings.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 41 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[30]=["https://encrypted-tbn3.google.com/images?q=tbn:ANd9GcTWslODHzvBWOYD61Rj_ZRqUUQEE_U1djVbbWjKGQ_mQUbkFm1w", "<b>Gele&#382;in&#279; Ledi</b> <br/>(<i>The Iron Lady</i>) 2011<br/><b>&#381;anras:</b> Drama<br/><b>Vaidina:</b> Meryl Streep, Jim Broadbent,<br/> Susan Brown, Alice da Cunha, Phoebe Waller-Bridge,<br/> Iain Glen, Alexandra Roach, Victoria Bewick�<br/><b>Re&#382;isierius:</b> Phyllida Lloyd.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 45 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[29]=["https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcSAPw_ONR15MLSGZhyQDeqIS-AKa7ta0ajWW-aizX9Xxx_JpuzP5A", "<b>Meil&#279;s Priesaika</b> <br/>(<i>The Vow</i>) 2012<br/><b>&#381;anras:</b> Dramos, Romantiniai<br/><b>Vaidina:</b> Rachel McAdams, Channing Tatum,<br/> Jessica Lange, Sam Neill, Jessica McNamee,<br/> Wendy Crewson, Tatiana Maslany, Lucas Bryant�<br/><b>Re&#382;isierius:</b> Michael Sucsy.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 44 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[28]=["https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcQlD0A0AYEB-XMoYAgw8wdNsq4NZq30jhOqmXal3c4jhkfJ7pBeMg", "<b>Tobulas Jausmas</b> <br/>(<i>Perfect Sense</i>) 2011<br/><b>&#381;anras:</b> Dramos, Romantiniai<br/><b>Vaidina:</b> Eva Green, Ewan McGregor,<br/> Connie Nielsen, Stephen Dillane, Ewen Bremner,<br/> Denis Lawson, Alastair Mackenzie, Liz Strange�<br/><b>Re&#382;isierius:</b> David Mackenzie.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 32 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[26]=["http://t2.gstatic.com/images?q=tbn:ANd9GcR4Z_p78allx_4yNwsu56DDJ9qky-u2Yq9ooMx_dZSJZqLQmWkB", "<b>Parve&#382;k Mane &#352;i&#261;nakt Namo</b> <br/>(<i>Take Me Home Tonight</i>) 2011<br/><b>&#381;anras:</b> Dramos, Komedijos, Romantiniai<br/><b>Vaidina:</b> Topher Grace, Anna Faris,<br/> Dan Fogler, Teresa Palmer, Chris Pratt,<br/> Michael Biehn, Jeanie Hackett, Lucy Punch�<br/><b>Re&#382;isierius:</b> Michael Dowse.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 37 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[25]=["http://t0.gstatic.com/images?q=tbn:ANd9GcRDFOEV-WGH4aqGDM47u6uhv3FPNAb-MXx5QBe2q2eWeqeiqVCP", "<b>Kaip Beprotis</b> (<i>Like Crazy</i>) 2011<br/><b>&#381;anras:</b> Dramos, Romantiniai<br/><b>Vaidina:</b> Anton Yelchin, Felicity Jones,<br/> Jennifer Lawrence, Charlie Bewley, Alex Kingston,<br/> Oliver Muirhead, Finola Hughes, Chris Messina�<br/><b>Re&#382;isierius:</b> Drake Doremus.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 30 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[24]=["http://t3.gstatic.com/images?q=tbn:ANd9GcSbsEfmqQ4OfCZjZlt_VyBeaYVHcFlyHPHN6Pym6rqOycNFaS3P", "<b>Mir&#281;</b> (<i>The Dead</i>) 2010<br/><b>&#381;anras:</b> Siaubo, Trileris<br/><b>Vaidina:</b> Rob Freeman, Prince David Oseia,<br/> David Dontoh, Elizabeth Akingbade�<br/><b>Re&#382;isierius:</b> Howard J. Ford, Jonathan Ford.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 44 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[23]=["http://t3.gstatic.com/images?q=tbn:ANd9GcRoTC6cOXSf84hNt2XtnVglQNt5QCJjsB42oTC1twf-8iKkF9PAjQ", "<b>Eglut&#279;s 2</b> (<i>���� 2</i>) 2011<br/><b>&#381;anras:</b> Komedijos<br/><b>Vaidina:</b> Evgeniya Abramova, Olga Aksyonova-Kavalay,<br/> Irina Arkhipova, Dato Bakhtadze, Pavel Barshak,<br/> Sergey Bezrukov, Vera Brezhneva, Anna Chipovskaya�<br/><b>Re&#382;isierius:</b> Aleksandr Baranov, Timur Bekmambetov.<br/><b>&#352;alis:</b> Rusija<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 36 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[22]=["http://t2.gstatic.com/images?q=tbn:ANd9GcQxNyItSATnkKy8ZoZeg8-XE7jNJEW93FmmVpUdDl0IJLgwxov7", "<b>Sala</b> (<i>The Island</i>) 2005<br/><b>&#381;anras:</b> Trileriai, Veiksmo, Fantastiniai<br/><b>Vaidina:</b> Ewan McGregor, Scarlett Johansson,<br/> Djimon Hounsou, Sean Bean, Steve Buscemi,<br/> Michael Clarke Duncan, Ethan Phillips, Brian Stepanek�<br/><b>Re&#382;isierius:</b> Michael Bay.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 2 val. 16 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[21]=["http://t2.gstatic.com/images?q=tbn:ANd9GcTx8qGRj5LMoPFOgm9oK9_QplFtijCbttWi9d9te9o4Y8r_Cs5m", "<b>D&#382;ekas Ir D&#382;il&#279;</b> <br/>(<i>Jack And Jill</i>) 2011<br/><b>&#381;anras:</b> Komedijos<br/><b>Vaidina:</b> Adam Sandler, Al Pacino,<br/> Katie Holmes, Elodie Tougne, Rohan Chand,<br/> Eugenio Derbez, David Spade, Nick Swardson�<br/><b>Re&#382;isierius:</b> Dennis Dugan.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 31 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[20]=["http://t0.gstatic.com/images?q=tbn:ANd9GcTU8m6ZGlwLaTidhKrWgEqaP4jrUpzzFTsJqIx_W1fBladQEMRZ", "<b>&#302;sibrovimas</b> (<i>Trespass</i>) 2012<br/><b>&#381;anras:</b> Dramos, Kriminaliniai, Trileriai<br/><b>Vaidina:</b> Nicolas Cage, Nicole Kidman,<br/> Ben Mendelsohn, Liana Liberato, Cam Gigandet,<br/> Jordana Spiro, Dash Mihok, Emily Meade�<br/><b>Re&#382;isierius:</b> Joel Schumacher.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 31 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[19]=["https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcSFufGNPNl4TbLx4umUS2Sh7ouECymmSgK080TRR-mRYFedChlH", "<b>Kitas pasaulis 4: Pabudimas</b><br/> (<i>Underworld: Awakening</i>) 2012<br/><b>&#381;anras:</b> Fantastiniai, Siaubo, Veiksmo<br/><b>Vaidina:</b> Kate Beckinsale, Stephen Rea,<br/> Michael Ealy, Theo James, India Eisley,<br/> Sandrine Holt, Charles Dance�<br/><b>Re&#382;isierius:</b> M&#229;ns M&#229;rlind, Bj&#246;rn Stein.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 28 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[18]=["http://t2.gstatic.com/images?q=tbn:ANd9GcQ6ufmLKhmhl510rN4N7GZiXJqPmW8TANJGKTk68OjABvDptdEb", "<b>Nu&#382;udym&#371; s&#261;ra&#353;as</b> (<i>The Hit List</i>) 2011<br/><b>&#381;anras:</b> Trileriai, Veiksmo<br/><b>Vaidina:</b> Cuba Gooding Jr., Cole Hauser,<br/> Jonathan LaPaglia, Ginny Weirick, Drew Waters,<br/> Sean Cook�<br/><b>Re&#382;isierius:</b> William Kaufman.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 30 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[17]=["http://t3.gstatic.com/images?q=tbn:ANd9GcTAXisBH3K59Tx8r2gZjpDg4aVmXVEGATr83oqOnzZO6CrXbtGXsw", "<b>Vagi&#353;iai</b> (<i>Snatch</i>) 2000<br/><b>&#381;anras:</b> Kriminaliniai, Trileriai, Veiksmo<br/><b>Vaidina:</b> Benicio Del Toro, Dennis Farina,<br/> Vinnie Jones, Brad Pitt, Rade Serbedzija,<br/> Jason Statham�<br/><b>Re&#382;isierius:</b> Guy Ritchie.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 44 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[16]=["http://t2.gstatic.com/images?q=tbn:ANd9GcQcwig1bjO1YLwlUHa6pkj_k7zX0bSi16XUxWlk3p811bXtdbOz", "<b>Operacija �Kard&#382;uv&#279;�</b> (<i>Swordfish</i>) 2001<br/><b>&#381;anras:</b> Kriminaliniai, Trileriai, Veiksmo<br/><b>Vaidina:</b> John Travolta, Hugh Jackman,<br/> Halle Berry, Don Cheadle, Sam Shepard,<br/> Vinnie Jones, Drea de Matteo�<br/><b>Re&#382;isierius:</b> Dominic Sena.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 39 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[15]=["http://t3.gstatic.com/images?q=tbn:ANd9GcTRp4MPaNNcc9AeBDtcKogllgHsEkLx8HwslZTyo-iIFVXiSZeMpQ", "<b>Pasiut&#281; &#353;unys</b> (<i>Reservoir Dogs</i>) 1992<br/><b>&#381;anras:</b> Kriminaliniai, Trileriai<br/><b>Vaidina:</b> Harvey Keitel, Tim Roth,<br/> Michael Madsen, Chris Penn, Steve Buscemi,<br/> Lawrence Tierney�<br/><b>Re&#382;isierius:</b> Quentin Tarantino.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 39 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[14]=["http://t3.gstatic.com/images?q=tbn:ANd9GcQqAZSuozQFVIsdFfRsQFlySeCzJInpYc9S0dkQpvDl8LV9oU6U", "<b>Alvinas Ir Burundukai 3</b><br/> (<i>Alvin and the Chipmunks 3: Chipwrecked</i>) 2011<br/><b>&#381;anras:</b> Animaciniai, Fantastiniai, Komedijos<br/><b>Vaidina:</b> Jason Lee, David Cross,<br/> Jenny Slate, Justin Long, Matthew Gray Gubler�<br/><b>Re&#382;isierius:</b> Mike Mitchell.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 27 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[13]=["http://t1.gstatic.com/images?q=tbn:ANd9GcSBmtHiW0AdlqqUXRi_eOULkwxJJJHhU9-gPAYRTC05MQQnDmNwiw", "<b>Linksmosios P&#279;dut&#279;s 2</b><br/> (<i>Happy Feet 2</i>) 2011<br/><b>&#381;anras:</b> Animaciniai, Komedijos<br/><b>Vaidina:</b> Carlos Alazraqui, Lombardo Boyar,<br/> Jeffrey Garcia, Johnny A. Sanchez, Sof&#237;a Vergara�<br/><b>Re&#382;isierius:</b> George Miller.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 40 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[12]=["http://t1.gstatic.com/images?q=tbn:ANd9GcSg4uUoaOEtY2VixWOdzSYIq1y5GjvJnD_M2NrkP1BbxVH9cpRdAA", "<b>Karantinas 2: Terminalas</b><br/> (<i>Quarantine 2: Terminal</i>) 2011<br/><b>&#381;anras:</b> Mistiniai, Siaubo, Trileriai<br/><b>Vaidina:</b> Mercedes Mas&#246;hn, Josh Cooke,<br/> Mattie Liptak, Ignacio Serricchio, Noree Victoria,<br/> Bre Blair�<br/><b>Re&#382;isierius:</b> John Pogue.<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 26 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[11]=["http://t3.gstatic.com/images?q=tbn:ANd9GcRpM_uAQ0_gk2P2ddzV6OLUqHVhFVOWXayh5izZSnwaXybimcUD", "<b>Pamokslininkas su kulkosvaid&#382;iu</b><br/> (<i>Machine Gun Preacher</i>) 2011<br/><b>&#381;anras:</b> Veiksmo, Biografinis, Kriminalinis, Drama<br/><b>Vaidina:</b> Gerard Butler, Michelle Monaghan,<br/> Michael Shannon, Madeline Carroll, Kathy Baker �<br/><b>Re&#382;isierius:</b> Marc Forster<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 31 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[10]=["http://dc537.4shared.com/img/rC9QEv2e/s7/0.5251262512992827/tarnybinis_romanas.jpeg", "<b>Tarnybinis romanas. dabartiniai laikai</b><br/> (<i>��������� ����� - ���� �����</i>) 2011<br/><b>&#381;anras:</b> Komedija / Romantinis<br/><b>Vaidina:</b> Svetlana Chod&#269;enkova, Vladimiras Zelenskis,<br/> Maratas Ba&#353;arovas, Anastasija Zavorotniuk, Pavelas Volia,<br/> Dmitrijus Chrustaliovas, Timuras Rodrigesas<br/><b>Re&#382;isierius:</b> Sarik Andreasjan<br/><b>&#352;alis:</b> Rusija<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 31 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[9]=["http://t2.gstatic.com/images?q=tbn:ANd9GcQJRnRJZ2tdpvgL-oA2IVv2Hm4_Ss3-OQMwcSyCCCCMsFWjfihprw", "<b>Tintino nuotykiai</b><br/> (<i>The Adventures of Tintin</i>) 2011<br/><b>&#381;anras:</b> Animacinis, Veiksmo, Nuotyki&#371;<br/><b>Vaidina:</b> Daniel Craig, Simon Pegg,<br/> Jamie Bell, Cary Elwes, Andy Serkis �<br/><b>Re&#382;isierius:</b> Steven Spielberg<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 46 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[8]=["http://t3.gstatic.com/images?q=tbn:ANd9GcSns38gnOJ-ZkuXtBWxKx5hEJlcszan1WSq43YfUObomxW44jIbCw", "<b>Valgyk, melskis, myl&#279;k</b> (<i>Eat Pray Love</i>) 2010<br/><b>&#381;anras:</b> Drama, Romantinis<br/><b>Vaidina:</b> Julia Roberts,<br/> I. Gusti Ayu Puspawati, Hadi Subiyanto, Billy Crudup<br/><b>Re&#382;isierius:</b> Ryan Murphy<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 27 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[7]=["http://t1.gstatic.com/images?q=tbn:ANd9GcRc_oj_HzwxVf86ARTjqNjKiBg_NT_UUSi2q5OcYHS-ywd-RZP9", "<b>Paskutinis egzorcizmas</b> (<i>The Last Exorcism</i>) 2010<br/><b>&#381;anras:</b> Siaubo, Drama, Trileris<br/><b>Vaidina:</b> Patrick Fabian, Ashley Bell,<br/> Iris Bahr, Louis Herthum, Caleb Jones<br/><b>Re&#382;isierius:</b> Daniel Stamm<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 27 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]


		tooltips[6]=["https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcS358B8EuTw8WeE4nGnkd61s_wrU75_q4tvXVf8op0ha7_exNvA", "<b>Romo Dienora&#353;tis</b> (<i>The Rum Diary</i>) 2011<br/><b>&#381;anras:</b> Komedija<br/><b>Vaidina:</b> Johnny Depp, Aaron Eckhart, Michael Rispoli,<br/> Amber Heard, Richard Jenkins, Giovanni Ribisi,<br/> Amaury Nolasco...<br/><b>Re&#382;isierius:</b> Bruce Robinson<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 2 val. 03 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]



		tooltips[5]=["https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcTHPsD0acWCVWIbeNvyJqqyRUWvPXh4lEANV7IRVgkTxVYomKiAhQ", "<b>Sekmadieniai pas Tifan&#303;</b> (<i>Sundays at Tiffany's</i>)<br/><b>&#381;anras:</b> Romantinis / Drama<br/><b>Vaidina:</b> Alyssa Milano, Eric Winter,<br/> Ivan Sergei, Kristin Booth, Stockard Channing<br/><b>Re&#382;isierius:</b> Mark Piznarski<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 28 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[4]=["https://encrypted-tbn3.google.com/images?q=tbn:ANd9GcT68egbadlm6T6Nn5Ar0m9OJ8wg7t6Wirf7SnB3f5tBkWNgMEF38Q", "<b>Kita &#382;em&#279;</b> (<i>Another Earth</i>)<br/><b>&#381;anras:</b> Drama<br/><b>Vaidina:</b> Brit Marling, William Mapother,<br/> Matthew-Lee Erlbach, Robin Taylor<br/><b>Re&#382;isierius:</b> Mike Cahill<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 32 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]


		tooltips[3]=["https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcTysWEHKpHdtDksC4siqywn3DsQTdfagzaCGCKAlPrEkKLwypTFlA", "<b>I&#353;davik&#279; (The Whistleblower)</b><br/><b>&#381;anras:</b> Drama<br/><b>Vaidina:</b> Rachel Weisz, Monica Bellucci,<br/> Vanessa Redgrave<br/><b>Re&#382;isierius:</b> Larysa Kondracki<br/><b>&#352;alis:</b> Vokietija / Kanada<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 40 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]


		tooltips[0]=["http://t0.gstatic.com/images?q=tbn:ANd9GcTFPrxEt-tVdZK1MjptPLq_wNeYhPZRLdLAsCPy6pbuEiD7WYCV", "<b>Nelie&#269;iamieji</b> (<i>Intouchables</i>)<br/><b>&#381;anras:</b> Drama / Komedija<br/><b>Vaidina:</b> Fran&#231;ois Cluzet, Omar Sy, Anne Le Ny,<br/> Audrey Fleurot<br/><b>Re&#382;isierius:</b> Olivier Nakache, Eric Toledano <br/><b>&#352;alis:</b> Pranc&#363;zija<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 52 min.", {background:"#d6d6d6", color:"black", border:"2px ridge darkblue"}]

		tooltips[1]=["http://t3.gstatic.com/images?q=tbn:ANd9GcSMo7lVcrqpoJYB7mfaXDzfAexfoQnDKWRh_gH1puZc141dVJZQ", "<b>Paveld&#279;tojai</b> (<i>The Descendants</i>)<br/><b>&#381;anras:</b> Komedija / Drama<br/><b>Vaidina:</b> George Clooney, Judy Greer,<br/> Matthew Lillard, Nick Krause, Beau Bridges<br/><b>Re&#382;isierius:</b> Alexander Payne<br/><b>&#352;alis:</b> JAV<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 55 min.", {background:"#d6d6d6", color:"black", border:"3px ridge darkblue"}]

		tooltips[2]=["http://t0.gstatic.com/images?q=tbn:ANd9GcSHmq83nPe0qvGftlYH8ScxU0RzsclO2V5cfvbegtaTzwdYEx3lBA", "<b>Moteris juodais drabu&#382;iais</b> (<i>The Woman In Black</i>)<br/><b>Re&#382;isierius: </b>James Watkins<br/><b>Aktoriai:</b> Daniel Radcliffe, Emma Shorey, Molly Harmon,<br/> Sophie Stuckey, Daniel Radcliffe, Misha Handley,<br/> Jessica Raine, Roger Allam, Lucy May Barker...<br/><b>&#381;anras:</b> Drama, Siaubo, Trileris<br/><b>Metai:</b> 2012<br/><b>Kalba:</b> <img src=lit.png border=no><br/><b>Trukm&#279;:</b> 1 val. 35 min.", {background:"#d6d6d6", color:"black", border:"3px ridge darkblue"}]

		





		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")