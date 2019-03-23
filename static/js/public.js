(function(){
	document.getElementById('open-place-order-modal').onclick = function(event){
		event.preventDefault();
		document.getElementById('quotation-request-modal').style.display = "table";
		setTimeout(function(){
			document.getElementById('quotation-request-modal').classList.add('opened');
			document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
		}, 10);
	}

	document.getElementById('buy-using-bitcoin-button').onclick = function(event){
		event.preventDefault();
		document.getElementById('buy-using-bitcoin').style.display = "table";
		setTimeout(function(){
			document.getElementById('buy-using-bitcoin').classList.add('opened');
			document.getElementsByTagName("BODY")[0].style.overflowY = 'hidden';
		}, 10);
	}

	step = 0;

	Vue.component('todo-item', {
		props: ['todo'],
		template: '<li v-bind:data-active="todo.active" @click="move(todo.id)" v-bind:data-step="todo.step"><i v-bind:class="todo.icon"></i><p>{{ todo.text }}</p></li>',
		methods: {
			move: function(id) {
				target = document.getElementById('quotation-request-modal-right');
				target.classList.add('changing');
				setTimeout(function(){
					quotation_steps.$data.quotationSteps[quotation_steps.$data.currentStep].active = false;
					quotation_steps.$data.currentStep = id;
					quotation_steps.$data.quotationSteps[quotation_steps.$data.currentStep].active = true;
					if (id == 0) {
						quotation_steps.$data.prev = false;
					}
					else{
						quotation_steps.$data.prev = true;
					}
					target.classList.remove('changing');
				}, 250);
			}
		}
	});

	var services_section = new Vue({
		el: '#services-section',
		data: {
			services: [
				{
					'id': 0,
					'icon': 'images/email.png',
					'title': 'Raise funds',
					'text': 'Our services are focussed to get you desired reach to the audience that might be interested in investing. With a good product and our services you can raise what you have aimed for.'
				},
				{
					'id': 1,
					'icon': 'images/web.png',
					'title': 'Paid Campaigns',
					'text': 'Get paid campaigns on various Crypto related websites, other ad platforms to increase the traffic and conversion on your website. We offer the best prices for banner ads, sponsored articles, and many other services.'
				},
				{
					'id': 2,
					'icon': 'images/package.png',
					'title': 'Get Visibility',
					'text': 'With over 300 Websites having more than a million traffic and over 1500 websites that publish our stories in 30 different languages, you can get the reach you have always wanted for yourself'
				},
				{
					'id': 3,
					'icon': 'images/diamond.png',
					'title': 'Customised Solution<',
					'text': 'We at Crypto Press work with you throughout your journey. We understand your product, research and find a customised solution for you.'
				}
			]
		}
	});

	console.log("Loaded website");

	var quotation_steps = new Vue({
		el: '#request-quotation',
		data: {
			currentStep: 0,
			social_medias_selected: [],
			values: [],
			project_name: "",
			project_website: "",
			contact_name: "",
			contact_email: "",
			short_description: "",
			project_name: "",
			price: 0,
			prev: false,
			next: true,
			transaction_id: "",
			quotationSteps: [
				{ id: 0, text: 'Get started', step: 'bounty-creation', active: true, icon: 'fas fa-play', shortDesc: 'You can place an order for the services that you want using our website. You just need to follow some simple steps. Please be accurate about the services that you want. You just need to follow some simple steps. Please be accurate about the services that you want. You just need to follow some simple steps. Please be accurate about the services that you want. You just need to follow some simple steps. Please be accurate about the services that you want accurate about.',
					fields: [
						{
							'id': 0, 'name': 'project-name', 'model': 'project_name', 'type': 'text', 'label': 'Project name',
						},
						{
							'id': 1, 'name': 'project-website', 'model': 'project_website', 'type': 'text', 'label': 'Project website'
						},
						{
							'id': 2, 'name': 'contact-name', 'model': 'contact_name', 'type': 'text', 'label': 'Contact name'
						},
						{
							'id': 3, 'name': 'contact-email', 'model': 'contact_email', 'type': 'email', 'label': 'Contact Email'
						},
						{
							'id': 4, 'name': 'short-description', 'model': 'short_description', 'type': 'textarea', 'label': 'Short Description'
						}
					]
				},
				{ id: 1, text: 'Press Release', step: 'press-release', active: false, icon: 'far fa-newspaper', shortDesc: 'The quantitative research - which is positioned as the brand commisioned study, is delivered to journalists ( international, national, local and blockchain trade ) through a service of targeted press releases, highlighting the finding and including further qualitative insights from the brand management team. Further, pres releases are developed for significant milestones, business activities and funding rounds.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-200',
							'type': 'checkbox',
							'label': 'Press release on 200+ news websites',
							'model': 'press_release_200',
							'price': 2
						},
						{
							'id': 1,
							'name': 'press-release-650',
							'type': 'checkbox',
							'label': 'Press release on 650+ news websites',
							'model': 'press_release_650',
							'price': 3
						},
						{
							'id': 2,
							'name': 'press-release-1800',
							'type': 'checkbox',
							'label': 'Press release on 1800+ news websites',
							'model': 'press_release_1800',
							'price': 5
						}
					]
				},
				{ id: 2, text: 'Bounty creation', step: 'bounty-creation', active: false, icon: 'fas fa-magic', shortDesc: 'Having a good ICO rating is critical to your success, and having a large dedicated couumunity is essential to a high rating. A blockchain bounty program is just the thing you need to expand your community to a wide array of hard wotking crypto enthusuasts, who want your project to succeed to success as much as you do. Crypto investors will see that you not only have a high ICO rating, but that you excel at building momentum for your product, and gathering a large number of followers. Listing your bounty campaign on bounty campaign listing websites is equally important, which will be included in the package.',
					fields: [
						{
							'id': 0,
							'name': 'bounty-creation',
							'type': 'checkbox',
							'label': 'Include bounty creation service',
							'price': 2
						}
					] },
				{ id: 3, text: 'Bounty management', step: 'bounty-management', active: false, icon: 'fas fa-users', shortDesc: 'Creating a bounty is not a much big task, but managing a bounty takes much more than what it seems. Filtering and managing hundreds of bounty hunters that are working simultaneously to get the bounties you offer needs regularly checking the replies and new posts in the ann thread for your bounty. We can take complete care of your bounty campaign, with regular updates delivered to you.',
					fields: [
						{
							'id': 0,
							'name': 'bounty-management',
							'type': 'checkbox',
							'label': 'Include bounty management service',
							'price': 6
						}
					] },
				{ id: 4, text: 'Facebook', step: 'facebook', active: false, icon: 'fab fa-facebook-f', shortDesc: 'As forever, Facebook is the number one place we prefer for marketing a project to soacial users. Facebook groups, pages, and many other options give us an excellent platform to reach and convince your potential customers and investors.',
					fields: [
						{
							'id': 0,
							'name': 'facebook_accept',
							'value': 'facebook',
							'type': 'checkbox',
							'label': 'Include Facebook marketing service',
							'price': 4
						}
					] },
				{ id: 5, text: 'Twitter', step: 'twitter', active: false, icon: 'fab fa-twitter', shortDesc: 'In addition to a large user base, Twitter has tremendous analytical capability, and gives advertisers access to mounds of useful data. A tweet can be analyzed not only in terms of likes and retweets, but by total engagement. In addition to providing useful tools, Twitter has a thriving crypto community. Twitter advertisements can be effective. But they’re bound by the 140 character limit. We plan posts related to your Token in the best Crypto twitter pages, and introduce numerous people about your token.',
					fields: [
						{
							'id': 0,
							'name': 'twitter-accept',
							'type': 'checkbox',
							'label': 'Include Twitter marketing service',
							'price': 5
						}
					] },
				{ id: 6, text: 'Reddit', step: 'reddit', active: false, icon: 'fab fa-reddit-alien', shortDesc: 'It is a community-based content marketing platform that supports us to find the right audience for your particular project. Creating and promoting sub reddit for your project and talking about your coin with interested customers are some of the ways that work here.',
					fields: [
						{
							'id': 0,
							'name': 'reddit-accept',
							'type': 'checkbox',
							'label': 'Include reddit marketing service',
							'price': 5
						}
					] },
				{ id: 7, text: 'Telegram', step: 'telegram', active: false, icon: 'fab fa-telegram-plane', shortDesc: 'When it comes to marketing an ICO Telegram is a vital tool, however, most companies fail to overlook some important points that make marketing on Telegram a successful strategy. Telegram allows you to invite users to your group from other groups or channels you are a part of. However for this to be effective, some considerations need to be in place, for example, constant monitoring and welcoming users/answering their questions like “who the hell invited me here” or “why did I end up in this group” is a must. We can invite members from other groups of same niche,',
					fields: [
						{
							'id': 0,
							'name': 'telegram-accept',
							'type': 'checkbox',
							'label': 'Include reddit marketing service',
							'price': 3
						}
					]
				},
				{ id: 8, text: 'Bitcoin Talk', step: 'bitcoin-talk', active: false, icon: 'fab fa-bitcoin', shortDesc: 'A BitcoinTalk announcement (known as an ANN post) thread has become a necessary component of any Initial Coin Offering (ICO). Trustworthy ICO listings have a thread about the company and about the coin on this message board. Mantaining a meaningful and high quality discussion is essential to gain exposure to ICO seeking audience exploring BitcoinTalk for investment opportunities. ',
					fields: [
						{
							'id': 0,
							'name': 'bitcoin-talk-accept',
							'type': 'checkbox',
							'label': 'Include Bitcoin Talk thread service',
							'price': 5
							}
					] },
				{ id: 9, text: 'Payment', step: 'payment', active: false, icon: 'far fa-credit-card', shortDesc: 'We accept payments in Bitcoin and Ethereum. Please pay the decided amount to the below addresses',
					fields: [
						{
							'id': 0, 'name': 'transaction_id', 'model': 'transaction_id', 'type': 'text', 'label': 'Transaction ID',
						}
					]
				}
			]
		},
		methods: {
			moveNext: function(event) {
				ref = this;
				if (ref.$data.currentStep < ref.$data.quotationSteps.length - 1){
					target = document.getElementById('quotation-request-modal-right');
					target.classList.add('changing');
					setTimeout(function(){
						ref.$data.currentStep += 1;
						ref.$data.quotationSteps[ref.$data.currentStep].active = true;
						ref.$data.quotationSteps[ref.$data.currentStep - 1].active = false;
						if (ref.$data.currentStep > 0) {
							ref.$data.prev = true;
						}
						if (ref.$data.currentStep == ref.$data.quotationSteps.length) {
							ref.$data.next = false;
						}
						target.classList.remove('changing');
					}, 250);
				}
			},
			moveBack: function(event) {
				ref = this;
				if (ref.$data.currentStep > 0){
					target = document.getElementById('quotation-request-modal-right');
					target.classList.add('changing');
					setTimeout(function(){
						ref.$data.currentStep -= 1;
						if (ref.$data.currentStep == 0) {
							ref.$data.prev = false;
						}
						ref.$data.quotationSteps[ref.$data.currentStep].active = true;
						ref.$data.quotationSteps[ref.$data.currentStep + 1].active = false;	
						target.classList.remove('changing');
					}, 250);
				}
			},
			changeCheck: function(event) {
				ref = this;
				setTimeout(function(){
					data = ref.$data.social_medias_selected;
					values_jso = ref.$data.quotationSteps;
					ref.$data.price = 0;
					for (i=0;i<data.length;i++){
						if (data[i] == 'press-release-200'){
							ref.$data.price = ref.$data.price + 2;
						}
						else if (data[i] == 'press-release-650'){
							ref.$data.price = ref.$data.price + 3;
						}
						else if (data[i] == 'press-release-1800'){
							ref.$data.price = ref.$data.price + 5;
						}
						else if (data[i] == 'bounty-creation'){
							ref.$data.price = ref.$data.price + 2;
						}
						else if (data[i] == 'bounty-management'){
							ref.$data.price = ref.$data.price + 6;
						}
						else if (data[i] == 'facebook_accept'){
							ref.$data.price = ref.$data.price + 4;
						}
						else if (data[i] == 'twitter-accept'){
							ref.$data.price = ref.$data.price + 5;
						}
						else if (data[i] == 'reddit-accept'){
							ref.$data.price = ref.$data.price + 5;
						}
						else if (data[i] == 'telegram-accept'){
							ref.$data.price = ref.$data.price + 3;
						}
						else if (data[i] == 'bitcoin-talk-accept'){
							ref.$data.price = ref.$data.price + 5;
						}
					}
				}, 10);
			},
			submitForm: function(){
				ref = this;
				axios.post('/submit-form', {
					project_name: ref.$data.project_name,
					project_website: ref.$data.project_website,
					contact_email: ref.$data.contact_email,
					contact_name: ref.$data.contact_name,
					short_description: ref.$data.short_description,
					transaction_id: ref.$data.transaction_id,
					fields: ref.$data.social_medias_selected
				})
				.then(function (response) {
					 document.getElementsByClassName('close-modal-button')[0].click();
					 setTimeout(function(){
					 	document.getElementById('submitted-form').style.display = "table";
					 })
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}
	})
}
)();

document.getElementById('buy-btc').onclick = function(event) {
	
}

document.getElementById('close-quotation-success').onclick = function(event){
	document.getElementById('submitted-form').style.display = "none";
}


for (close_button of document.getElementsByClassName('close-modal-button')){
	close_button.onclick = function(event){
		modal_box = this.parentNode.parentNode.parentNode.parentNode.parentNode;
		modal_box.classList.remove('opened');
		setTimeout(function(){
			modal_box.style.display = "none";
			document.getElementsByTagName("BODY")[0].style.overflowY = 'auto';
			for (package_field of document.getElementsByClassName('package-field')){
				package_field.value = "";
			}
		}, 500);
	}
}

for (scroll_to of document.getElementsByClassName('scroll-to')){
	scroll_to.onclick = function(event) {
		event.preventDefault();
		window.scrollTo(0, document.getElementById(this.dataset.scrollTarget).getBoundingClientRect().top - 20);
	}
}

document.getElementById('scroll-to-top').onclick = function(event) {
	window.scrollTo(0, 0);
}

document.getElementById('buy-bitcoin').onclick = function(event) {

}

window.onscroll = function(event) {
	top = document.documentElement.scrollTop;
	if (document.documentElement.scrollTop < 1){
		document.getElementById('scroll-to-top').classList.add('hidden');
	}
	else{
		document.getElementById('scroll-to-top').classList.remove('hidden');		
	}
}

document.getElementById('buy-bitcoin').onclick = function(event) {
	filled = true;
	for (package_field of document.getElementsByClassName('package-field')){
		if (package_field.value == "") {
			filled = false;
		}
	}
	if (filled) {
		document.getElementById('package-submit-error').style.display = "none";
		document.getElementById('buy-preloader').style.display = 'block';

		package_project_name = document.getElementById('package-project-name').value;
		package_token_symbol = document.getElementById('package-token-symbol').value;
		package_website = document.getElementById('package-project-website').value;
		package_telegram_username = document.getElementById('package-telegram-username').value;
		package_facebook = document.getElementById('package-facebook').value;
		package_twitter = document.getElementById('package-twitter').value;
		package_telegram = document.getElementById('package-telegram').value;
		package_linkedin = document.getElementById('package-linkedin').value;
		package_reddit = document.getElementById('package-reddit').value;
		package_youtube = document.getElementById('package-youtube').value;

		axios.post('/package-request', {
			project_name: package_project_name,
			token_symbol: package_token_symbol,
			website: package_website,
			telegram_contact: package_telegram_username,
			facebook: package_facebook,
			twitter: package_twitter,
			telegram: package_telegram,
			linkedin: package_linkedin,
			reddit: package_reddit,
			youtube: package_youtube,
			number: 24
		})
		.then(function (response) {
			document.getElementById('buy-preloader').style.display = 'none';
			if (response.data.status) {
				document.getElementById('buy-package-box').style.display = 'table';
				document.getElementById('buy-package-success').innerHTML = "Your response has been succesfully saved. We will shortly contact <span>" + response.data.telegram_contact + "</span> from <span>" + response.data.project_name + "</span>.";
				setTimeout(function() {
					document.getElementById('buy-package-box').classList.add('showing');
				}, 10);
			}
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	else {
		document.getElementById('package-submit-error').style.display = "block";
	}
}

document.getElementById('cancel-package-payment').onclick = function(event) {
	document.getElementById('buy-package-box').classList.remove('showing');
	setTimeout(function() {
		document.getElementById('buy-package-box').style.display = 'none';
	}, 510);
}

particlesJS("banner-particles", {"particles":{"number":{"value":6,"density":{"enable":true,"value_area":800}},"color":{"value":"#888888"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":20,"height":20}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":90.75197878771135,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});