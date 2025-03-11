const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

document.addEventListener('DOMContentLoaded', function () {
	const swiperMainBanner = new Swiper('.swiper.main-banner', {
		direction: 'horizontal',
		// loop: true,

		pagination: {
			el: '.main-banner-wrapper .swiper-pagination',
			dynamicBullets: true,
			dynamicMainBullets: 4,
			clickable: true,
		},

		navigation: {
			nextEl: '.main-banner-wrapper .swiper-button-next-custom',
			prevEl: '.main-banner-wrapper .swiper-button-prev-custom',
			// disabledClass: 'disabled',
			// navigationDisabledClass: 'disabled',
		},
		allowTouchMove: true,
		grabCursor: true,
		// allowSlideNext: false,
	});

	const swiperMainNav = new Swiper('.swiper.slider-nav', {
		direction: 'horizontal',
		loop: true,
		allowTouchMove: true,
		// grabCursor: true,
		// allowSlideNext: false,
		breakpointsBase: 'window',
		autoplay: {
			delay: 4000,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
				loop: true,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 10,
				loop: true,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 10,
				loop: true,
			},
			992: {
				slidesPerView: 7,
				spaceBetween: 10,
				loop: true,
			},
			1100: {
				slidesPerView: 9,
				loop: true,
				spaceBetween: 20,
			},
		},
	});

	const swiperMainPartner = new Swiper('.swiper.slider-partner', {
		direction: 'horizontal',
		loop: true,
		allowTouchMove: true,
		autoplay: {
			delay: 4000,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 12,
			},
			1400: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
		},
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const passwordInputs = document.querySelectorAll('.floating-label-content .password-input');
	const togglePasswordIcons = document.querySelectorAll('.password-icon');

	togglePasswordIcons.forEach((icon, index) => {
		icon.addEventListener('click', function () {
			const passwordInput = passwordInputs[index];
			const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
			passwordInput.setAttribute('type', type);

			if (type === 'password') {
				this.classList.remove('bi-eye');
				this.classList.add('bi-eye-slash');
			} else {
				this.classList.remove('bi-eye-slash');
				this.classList.add('bi-eye');
			}
		});
	});
});

const pendingCheckContainer = document.querySelectorAll('.pending-check-block');

pendingCheckContainer.forEach((container) => {
     let checkbox = container.querySelector('.agree-delete-check');
     let button = container.querySelector('.delete-agree-btn');

     function agreeCheckIsTrue(checkBox) {
          if (checkBox.checked) {
               return true;
          } else {
               return false;
          }
     }

     if (checkbox) {
          if (agreeCheckIsTrue(checkbox)) {
               button.disabled = false;
          } else {
               button.disabled = true;
          }
          checkbox.addEventListener('change', () => {
               if (agreeCheckIsTrue(checkbox)) {
                    button.disabled = false;
               } else {
                    button.disabled = true;
               }
          });
     }
});

document.addEventListener('DOMContentLoaded', () => {
	const radioGroupsSideNav = document.querySelectorAll('.side-nav-step .radio-group-step');
	const radioGroupsModal = document.querySelectorAll('.modal .radio-group-step');

	function toggleGroupProcess(radioGroups) {
		for (let i = 1; i < radioGroups.length; i++) {
			toggleGroupDisabled(radioGroups[i], true);
		}

		radioGroups.forEach((group, index) => {
			const radios = group.querySelectorAll("input[type='radio']");
			radios.forEach((radio) => {
				radio.addEventListener('change', () => {
					if (radio.checked && index < radioGroups.length - 1) {
						toggleGroupDisabled(radioGroups[index + 1], false);
					}
				});
			});
		});
	}

	function toggleGroupDisabled(group, isDisabled) {
		const radios = group.querySelectorAll("input[type='radio']");
		radios.forEach((radio) => {
			radio.disabled = isDisabled;
		});
	}

	toggleGroupProcess(radioGroupsSideNav);
	toggleGroupProcess(radioGroupsModal);
});

document.addEventListener('DOMContentLoaded', function () {
     const radioButtons = document.querySelectorAll('input[name="tabRadio"]');

     const tabPanes = document.querySelectorAll('.tab-pane');

     radioButtons.forEach((radio) => {
          radio.addEventListener('change', () => {
               tabPanes.forEach((pane) =>
                    pane.classList.remove('active', 'show')
               );

               const targetPane = document.querySelector(
                    radio.getAttribute('data-bs-target')
               );

               if (targetPane) {
                    targetPane.classList.add('active', 'show');
               }
          });
     });
});

const phoneInputs = document.querySelectorAll('.phone');

if (phoneInputs) {
     phoneInputs.forEach((input) => {
          let mask;
          input.addEventListener('focus', function () {
               if (!mask) {
                    mask = IMask(input, {
                         mask: '+{375}(00)000-00-00',
                         lazy: false,
                         blocks: {
                              375: {
                                   mask: '375',
                                   immutable: true,
                              },

                              '00': {
                                   mask: '00',
                              },
                              '000': {
                                   mask: '000',
                              },
                              '00': {
                                   mask: '00',
                              },
                         },
                    });
               }
          });
     });

     phoneInputs.forEach((input) => {
          input.addEventListener('blur', function () {
               if (mask && !input.value) {
                    mask.destroy();
                    mask = null;
               }
          });
     });
}
