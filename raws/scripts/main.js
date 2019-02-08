import Vue from 'vue';

(function(){
	document.getElementById('open-place-order-modal').onclick = function(event){
		event.preventDefault();
		document.getElementById('quotation-request-modal').style.display = "table";
		setTimeout(function(){
			document.getElementById('quotation-request-modal').classList.add('opened');
		}, 10);
	}

	step = 0;

	Vue.component('todo-item', {
		props: ['todo'],
		template: '<li v-bind:data-active="todo.active" @click="move(todo.id)" v-bind:data-step="todo.step"><i v-bind:class="todo.icon"></i>{{ todo.text }}</li>',
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

	var quotation_steps = new Vue({
		el: '#request-quotation',
		data: {
			currentStep: 0,
			quotationSteps: [
				{ id: 0, text: 'Get started', step: 'bounty-creation', active: true, icon: 'fas fa-play', shortDesc: 'You can place an order for the services that you want using our website. You just need to follow some simple steps. Please be accurate about the services that you want. You just need to follow some simple steps. Please be accurate about the services that you want. You just need to follow some simple steps. Please be accurate about the services that you want. You just need to follow some simple steps. Please be accurate about the services that you want accurate about.',
					fields: [
						{
							'id': 0,
							'name': 'project-name',
							'type': 'text',
							'label': 'Project name'
						},
						{
							'id': 1,
							'name': 'project-website',
							'type': 'text',
							'label': 'Project website'
						},
						{
							'id': 2,
							'name': 'contact-name',
							'type': 'text',
							'label': 'Contact name'
						},
						{
							'id': 3,
							'name': 'contact-email',
							'type': 'email',
							'label': 'Contact Email'
						},
						{
							'id': 4,
							'name': 'short-description',
							'type': 'textarea',
							'label': 'Short Description'
						}
					]
				},
				{ id: 1, text: 'Press Release', step: 'press-release', active: false, icon: 'far fa-newspaper', shortDesc: 'The quantitative research - which is positioned as the brand commisioned study, is delivered to journalists ( international, national, local and blockchain trade ) through a service of targeted press releases, highlighting the finding and including further qualitative insights from the brand management team. Further, pres releases are developed for significant milestones, business activities and funding rounds.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'checkbox',
							'label': 'Press release on 200+ news websites'
						},
						{
							'id': 1,
							'name': 'press-release-name',
							'type': 'checkbox',
							'label': 'Press release on 650+ news websites'
						},
						{
							'id': 2,
							'name': 'press-release-name',
							'type': 'checkbox',
							'label': 'Press release on 2000+ news websites'
						},
						{
							'id': 3,
							'name': 'press-release-name',
							'type': 'checkbox',
							'label': 'Premium publication'
						}
					]
				},
				{ id: 2, text: 'Bounty creation', step: 'bounty-creation', active: false, icon: 'fas fa-magic', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer iaculis eros vitae lorem dapibus, a iaculis purus cursus. Sed luctus, nulla vel iaculis sodales, enim nisl imperdiet dui, eget gravida turpis mi nec metus. Sed fermentum placerat lorem, quis dapibus nisl facilisis sed. Pellentesque ac sodales ex, at rutrum risus. Curabitur eu pretium purus, in sodales nibh. Ut non ante enim.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					] },
				{ id: 3, text: 'Bounty management', step: 'bounty-management', active: false, icon: 'fas fa-users', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer iaculis eros vitae lorem dapibus, a iaculis purus cursus. Sed luctus, nulla vel iaculis sodales, enim nisl imperdiet dui, eget gravida turpis mi nec metus. Sed fermentum placerat lorem, quis dapibus nisl facilisis sed. Pellentesque ac sodales ex, at rutrum risus. Curabitur eu pretium purus, in sodales nibh. Ut non ante enim.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					] },
				{ id: 4, text: 'Facebook', step: 'facebook', active: false, icon: 'fab fa-facebook-f', shortDesc: 'As forever, Facebook is the number one place we prefer for marketing a project to soacial users. Facebook groups, pages, and many other options give us an excellent platform to reach and convince your potential customers and investors.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					] },
				{ id: 5, text: 'Twitter', step: 'twitter', active: false, icon: 'fab fa-twitter', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer iaculis eros vitae lorem dapibus, a iaculis purus cursus. Sed luctus, nulla vel iaculis sodales, enim nisl imperdiet dui, eget gravida turpis mi nec metus. Sed fermentum placerat lorem, quis dapibus nisl facilisis sed. Pellentesque ac sodales ex, at rutrum risus. Curabitur eu pretium purus, in sodales nibh. Ut non ante enim.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					] },
				{ id: 6, text: 'Reddit', step: 'reddit', active: false, icon: 'fab fa-reddit-alien', shortDesc: 'It is a community-based content marketing platform that supports us to find the right audience for your particular project. Creating and promoting sub reddit for your project and talking about your coin with interested customers are some of the ways that work here.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					] },
				{ id: 7, text: 'Telegram', step: 'discord', active: false, icon: 'fab fa-telegram-plane', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer iaculis eros vitae lorem dapibus, a iaculis purus cursus. Sed luctus, nulla vel iaculis sodales, enim nisl imperdiet dui, eget gravida turpis mi nec metus. Sed fermentum placerat lorem, quis dapibus nisl facilisis sed. Pellentesque ac sodales ex, at rutrum risus. Curabitur eu pretium purus, in sodales nibh. Ut non ante enim.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					] },
				{ id: 8, text: 'Discord', step: 'discord', active: false, icon: 'fab fa-discord', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer iaculis eros vitae lorem dapibus, a iaculis purus cursus. Sed luctus, nulla vel iaculis sodales, enim nisl imperdiet dui, eget gravida turpis mi nec metus. Sed fermentum placerat lorem, quis dapibus nisl facilisis sed. Pellentesque ac sodales ex, at rutrum risus. Curabitur eu pretium purus, in sodales nibh. Ut non ante enim.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					] },
				{ id: 9, text: 'Bitcoin Talk', step: 'bitcoin-talk', active: false, icon: 'fab fa-bitcoin', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer iaculis eros vitae lorem dapibus, a iaculis purus cursus. Sed luctus, nulla vel iaculis sodales, enim nisl imperdiet dui, eget gravida turpis mi nec metus. Sed fermentum placerat lorem, quis dapibus nisl facilisis sed. Pellentesque ac sodales ex, at rutrum risus. Curabitur eu pretium purus, in sodales nibh. Ut non ante enim.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					] },
				{ id: 10, text: 'Payment', step: 'payment', active: false, icon: 'far fa-credit-card', shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget pellentesque nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer iaculis eros vitae lorem dapibus, a iaculis purus cursus. Sed luctus, nulla vel iaculis sodales, enim nisl imperdiet dui, eget gravida turpis mi nec metus. Sed fermentum placerat lorem, quis dapibus nisl facilisis sed. Pellentesque ac sodales ex, at rutrum risus. Curabitur eu pretium purus, in sodales nibh. Ut non ante enim.',
					fields: [
						{
							'id': 0,
							'name': 'press-release-name',
							'type': 'text',
							'label': 'Press release name'
						}
					]
				}
			],
			price: 0,
			prev: false,
			next: true
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
						target.classList.remove('changing');
					}, 250);
					console.log(ref.$data.currentStep);
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
			}
		}
	})
})();

for (close_button of document.getElementsByClassName('close-modal-button')){
	close_button.onclick = function(event){
		modal_box = this.parentNode.parentNode.parentNode.parentNode.parentNode;
		modal_box.classList.remove('opened');
		setTimeout(function(){
			modal_box.style.display = "none";
		}, 500);
	}
}