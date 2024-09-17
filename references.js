function references() {
	const domain = "MoneyWaveOfficial.com";
	const prodName = "Money Wave";
	const mainProduct = "The " + prodName;
	const US1Suffix = "Accelerator";
	const US1ProdName = prodName + " " + US1Suffix;
	const US1Product = mainProduct + " " + US1Suffix;
	const supportEmail = "support@" + domain;
	const expert = "Dr. Winters";
	const expertEmail = "DrWinters@" + domain;
	const expertEmailLink = "mailto:" + expertEmail;
	
	if (document.title=="Product Name") document.title=mainProduct;
	
	var list = document.getElementsByClassName("refGroupName");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = mainProduct; }
	list = document.getElementsByClassName("refUS1");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = US1Product; }
	list = document.getElementsByClassName("refSupport");
	for (var i=0; i<list.length; i++) {
		if (!!list[i].href) {
		  list[i].href = "mailto:" + supportEmail;
		}
		if (!!list[i].innerHTML && list[i].innerHTML.indexOf("@") >0) {
			list[i].innerHTML = supportEmail;
		}
	}
	list = document.getElementsByClassName("refDomain");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = domain; }
	
	var list = document.getElementsByClassName("theProdName");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = mainProduct; }
	list = document.getElementsByClassName("prodName");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = prodName; }
	list = document.getElementsByClassName("US1ProdName");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = US1ProdName; }
	list = document.getElementsByClassName("US1Suffix");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = US1Suffix; }

	list = document.getElementsByClassName("theUS1ProdName");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = US1Product; }
	
	list = document.getElementsByClassName("expert");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = expert; }
	list = document.getElementsByClassName("expertEmail");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = expertEmail; }
	
	list = document.getElementsByClassName("expertEmailLink");
	for (var i=0; i<list.length; i++) { list[i].href = expertEmailLink; }
		
	const refLeft =	`
	<ul class="ref-list">
			<li><div class="refnum">1.</div> Family income, parental education and brain structure in 
			children and adolescents - PubMed. (2015, May 1). PubMed. <br>https://doi.org/10.1038/nn.3983</li>
			
			<li><div class="refnum">2.</div> The Neuroscience of Socioeconomic Inequality - PubMed. (2020, December 1). 
			PubMed. https://doi.org/10.1016/j.cobeha.2020.05.007</li>
			
			<li><div class="refnum">3.</div> Associations among average parental educational attainment, maternal stress, 
			and infant screen exposure at 6 months of age - PubMed. (2021, November 1). PubMed. https://doi.org/10.1016/j.infbeh.2021.101644</li> 
			 
			<li><div class="refnum">4.</div> Neural correlates of socioeconomic status in the developing human brain - 
			PubMed. (2012, July 1). PubMed. <br>https://doi.org/10.1111/j.1467-7687.2012.01147.x</li> 
			
			<li><div class="refnum">5.</div> Socioeconomic status and structural brain development - PubMed. (2014, September 4). 
			PubMed. <br>https://doi.org/10.3389/fnins.2014.00276</li>
			
			<li><div class="refnum">6.</div> Socioeconomic disparities in neurocognitive development in the first two years of life - 
			PubMed. (2015, July 1). PubMed. <br>https://doi.org/10.1002/dev.21303</li> 
			
			<li><div class="refnum">7.</div> Socioeconomic Status, Subjective Social Status, and Perceived Stress: 
			Associations with Stress Physiology and Executive Functioning - PubMed. (2015, January 1). PubMed. https://doi.org/10.1080/08964289.2015.1024604</li>
			
	</ul>
	`;
		
	const refRight =	`
	<ul class="ref-list">                   
			
			<li><div class="refnum">8.</div> Associations among family socioeconomic status, EEG power at birth, and 
			cognitive skills during infancy - PubMed. (2016, June 1). PubMed. <br>https://doi.org/10.1016/j.dcn.2016.03.004</li> 
				
			<li><div class="refnum">9.</div> Socioeconomic status, white matter, and executive function in children - 
			PubMed. (2016, August 2). PubMed. <br>https://doi.org/10.1002/brb3.531</li>  
			 
			<li><div class="refnum">10.</div> Age-Related Differences in Cortical Thickness Vary by Socioeconomic Status - PubMed. 
			(2016, September 19). PubMed. <br>https://doi.org/10.1371/journal.pone.0162511</li> 
				
			<li><div class="refnum">11.</div> Wealth, Poverty, and the Brain: A Q&A With Kimberly Noble. (2023, May 1). 
			Psychology Today. <br>https://www.psychologytoday.com/intl/blog/brainstorm/201704/wealth-poverty-and-the-brain-qa-kimberly-noble</li>  
			 
			<li><div class="refnum">12.</div> Dopamine promotes head direction plasticity during orienting movements - PubMed. 
			(2022, December 1). PubMed. <br>https://doi.org/10.1038/s41586-022-05485-4</li> 
				
			<li><div class="refnum">13.</div> Neuroplasticity within and between Functional Brain Networks in Mental 
			Training Based on Long-Term Meditation - PubMed. (2021, August 18). PubMed. https://doi.org/10.3390/brainsci11081086</li>  
			
			<li><div class="refnum">14.</div> Romeo, R. R., Segaran, J., Leonard, J. A., Robinson, S. T., West, 
			M. R., Mackey, A. P., Yendiki, A., Rowe, M. L., & Gabrieli, J. D. (2018, September 5). 
			Language Exposure Relates to Structural Neural Connectivity in Childhood. Journal of 
			Neuroscience. <br>https://doi.org/10.1523/JNEUROSCI.0484-18.2018</li> 

			
	</ul>
	`;
	
	list = document.getElementsByClassName("ref-lft");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = refLeft };
	list = document.getElementsByClassName("vsls2lft");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = refLeft };
	
	list = document.getElementsByClassName("ref-rgt");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = refRight };
	list = document.getElementsByClassName("vsls2rgt");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = refRight };
	
	const testis = `
	<div class="s25bx">
		<img src="images/up1-lftquote.png" alt="" class="s25bx-lftqt">
			
			<div class="show-767">
					<div class="s25bximgbx-mob">                
							<img src="images/s25bximg1.png" alt="" class="s25bximg1-mob">
							<p class="bdfont s25bxtxt"><span>-Emma,</span> <br>Former Nurse In Santa Ana, CA</p>
					</div>
			</div>
			
			<img src="images/s25bximg1.png" alt="" class="s25bximg1 hide-767">
			
		<p class="bdfont3 bold"><i>“$4K/mo in passive income, I don’t need to work&nbsp;anymore..”</i></p>
			
			<p class="bdfont mar4"><i>“My family was cursed. That’s what everyone said. My little 
			house had been for sale for months with no buyers. And 
			I couldn’t take my job anymore. After the first 3 days of 
			listening to the Money Wave, I don’t know why, but I quit my job. It just felt right. 
			The next day I got an offer on my house 10% above the asking price. Then I won $16,000 
			at the tracks in a week. I bought a rental property and am earning an extra $3K-$4K/mo in 
			passive income.. I don’t need to work anymore. I’m taking the trip to Egypt and Greece I’ve 
			always wanted. I feel so lucky. I broke my family curse and I’m sharing this with my&nbsp;family now.”</i></p>
			
			<p class="bdfont s25bxtxt hide-767"><span>-Emma,</span> Former Nurse In Santa Ana, CA</p>
			
			<img src="images/up1-rgtquote.png" alt="" class="s25bx-rgtqt">
	</div>
	
	<div class="s25bx">
		<img src="images/up1-lftquote.png" alt="" class="s25bx-lftqt">
			
			<div class="show-767">
					<div class="s25bximgbx-mob">                
							<img src="images/s25bximg2.png" alt="" class="s25bximg1-mob">
							<p class="bdfont s25bxtxt s25bxtxt2"><span>-Michael,</span><br> Former Policeman Turned Home Business Owner In Stuart, Florida </p>
					</div>
			</div>
			
			<img src="images/s25bximg2.png" alt="" class="s25bximg1 hide-767">
			
		<p class="bdfont3 bold"><i>“4 new clients in 5 days.. I’m going on&nbsp;TV..”</i></p>
			
			<p class="bdfont mar4"><i>“I started listening to the Money Wave and for the past 5 days, 
			I&nbsp;got 4 new clients. That’s ONE client a day. I used to have 
			1&nbsp;client a month so this has been such a crazy journey! I’ve 
			become friends with several wealthy people from Palm Beach 
			and one of them has offered to put me on TV to promote my new business.”</i></p>
			
			<p class="bdfont s25bxtxt hide-767"><span>-Michael,</span> Former Policeman Turned Home Business Owner In Stuart, Florida </p>
			
			<img src="images/up1-rgtquote.png" alt="" class="s25bx-rgtqt">
	</div>
	
	<div class="s25bx">
		<img src="images/up1-lftquote.png" alt="" class="s25bx-lftqt">
			
			<div class="show-767">
					<div class="s25bximgbx-mob">                
							<img src="images/s25bximg3.png" alt="" class="s25bximg1-mob">
							<p class="bdfont s25bxtxt"><span>-Monica,</span> <br>Artist In Manhattan, New&nbsp;York</p>
					</div>
			</div>
			
			<img src="images/s25bximg3.png" alt="" class="s25bximg1 hide-767">
			
		<p class="bdfont3 bold"><i>“Sold more art than I can imagine, living in my dream penthouse..”</i></p>
			
			<p class="bdfont mar4"><i>“Since discovering the Money Wave, I manifested my dream 
			life! New penthouse, multiple 6 figures, and more! I went from 
			buried in debt, paycheck to paycheck in a cramped studio apt, 
			with no&nbsp;one paying attention to my artwork. This year I have sold more art than I can imagine, 
			my income is now 20x what it used to be, and my penthouse overlooks the skyline. I’ve lost 18&nbsp;lbs and I bought my dream Tesla. 
			I love life now, and I wish the best for you.”</i></p>
			
			<p class="bdfont s25bxtxt hide-767"><span>-Monica,</span> Artist In Manhattan, New York</p>
			
			<img src="images/up1-rgtquote.png" alt="" class="s25bx-rgtqt">
	</div>
	`;
	
	list = document.getElementsByClassName("testiquotes");
	for (var i=0; i<list.length; i++) { list[i].innerHTML = testis };
}
references();
