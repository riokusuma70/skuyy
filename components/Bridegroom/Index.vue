<template>
	<section class="bg-cover bg-no-repeat text-center w-[screen] h-[screen]" style="background-image: url('/images/2.jpg')" id="bride">
		<div class="py-12 md:py-24" data-aos="zoom-in" data-aos-duration="750">
			<h2 class="font-body font-serif text-5xl text-yellow-800 dark:text-yellow-300/90 md:text-7xl">Pengantin</h2>
			<h3 class="mx-auto font-serif mt-5 max-w-xs text-sm font-semibold text-slate-600 dark:text-black-100 md:max-w-full">Allah SWT telah mengatur kehidupan makhluknya berpasang-pasangan. maka dari itu perkenankanlah kami mempersatukan putra-putri kami:</h3>
		</div>
		<div class="mx-auto font-serif dark:text-brown-200 flex max-w-2xl flex-col items-center justify-evenly gap-y-10 md:flex-row md:gap-y-0 lg:max-w-full">
			<BridegroomProfile name="Briptu Ivan Andhika Dani Anwar, S.H." instagramURL="https://www.instagram.com/ivanandhika/">
				<template #family>Putra pertama dari Bapak M. Anwar B Rusmana & Ibu Umi Sunariyati</template>
				<template #image>
					<img
						class="h-60 w-60 rounded-full border-4 border-yellow-800 object-cover shadow-2xl dark:border-yellow-300/90 lg:h-96 lg:w-96"
						src="/images/ivan.jpeg"
						alt="Bride Image"
						loading="lazy"
						dataAos="fade-down"
						data-aos-duration="1000"
					/>
				</template>
				<template #social="{ icon }">
					<FontAwesomeIcon :icon="['fab', icon]" size="lg" inverse />
				</template>
			</BridegroomProfile>
			<span class="text-slate:600 font-serif font-body text-5xl dark:text-brown-200 md:-mt-52 md:text-7xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">&</span>
			<BridegroomProfile name="Virginia Khofifah Akhmad" instagramURL="https://www.instagram.com/virgin.akhmad/">
				<template #family>Putri pertama dari Bapak Akhmad Dimyati & Ibu Eni Susanti</template>
				<template #image>
					<img
						class="h-60 w-60 rounded-full border-4 border-yellow-800 object-cover shadow-2xl dark:border-yellow-300/90 lg:h-96 lg:w-96"
						src="/images/virgin.jpeg"
						alt="Bride Image"
						loading="lazy"
						dataAos="fade-down"
						data-aos-duration="1000"
					/>
				</template>
				<template #social="{ icon }">
					<FontAwesomeIcon :icon="['fab', icon]" size="lg" inverse />
				</template>
			</BridegroomProfile>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
