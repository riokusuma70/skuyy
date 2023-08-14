<!-- <template>
	
	 <section  class="max-w-2xl m-auto">

 	</section>

</template>


	
<script setup lang="ts">
 </script> -->



<!-- <template>
	
	 <section  class="relative" data-te-carousel-init data-te-ride="carousel">
		<div
    class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>

 
  <div
    class="relative w-full h-screen w-screen bg-slate-800 overflow-hidden after:clear-both after:block after:content-['']">
   
    <div
      class="relative float-left -mr-[100%] h-full w-full overflow-hidden object-cover object-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style="backface-visibility: hidden">
      <img
        src="/images/about1.jpg"
        class="h-full w-full overflow-hidden object-cover object-center"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 class="text-xl">First slide label</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
    
	<div
      class="relative float-left -mr-[100%] h-full w-full overflow-hidden object-cover object-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style="backface-visibility: hidden">
      <img
        src="/images/about2.jpg"
        class="h-full w-full overflow-hidden object-cover object-center"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 class="text-xl">First slide label</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
   
	<div
      class="relative float-left -mr-[100%] h-full w-full overflow-hidden object-cover object-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style="backface-visibility: hidden">
      <img
        src="/images/about3.jpg"
        class="h-full w-full overflow-hidden object-cover object-center"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 class="text-xl">First slide label</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
  </div>

  
  <button
    class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>

  <button
    class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
	</section>
</template>


	
<script setup lang="ts">
 </script> -->



<template>
	 <section  class=" relative w-full h-screen w-screen bg-slate-800 bg-[url('/public/images/gallery4.jpg')] bg-cover bg-center bg-no-repeat md:bg-[50%_25%]">
		
	 <div class="relative w-full h-screen w-screen overflow-hidden  md:h-screen md:w-screen">
					
					<Swiper class="h-full w-full" :modules="[SwiperAutoplay, SwiperEffectFade]" :slidesPerView="1" :loop="true" effect="fade" :autoplay="{ delay: 2000, disableOnInteraction: true }">
						<SwiperSlide v-for="slide in 5" :key="slide" data-te-carousel-active data-te-carousel-item>
	
							<img class="h-full w-full overflow-hidden object-cover object-center" :src="`/images/about${slide}.jpg`" :alt="`Bride Image ${slide}`" loading="lazy" />
							<div class="flex h-full flex-col-reverse items-end justify-end gap-x-24 gap-y-10 pt-8 md:mx-auto md:max-w-2xl md:flex-row md:justify-center md:gap-y-0 md:pt-0 lg:max-w-full">		
								
              <p class="absolute bottom-5 max-w-xs space-y-6 text-center font-serif text-xl text-gray-100 md:text-4xl">
                
                <a class="text-sm font-semibold uppercase tracking-widest font-serif text-4xl text-yellow-300/90 md:text-4xl">
                  Ivan <p>&</p> Virginia
                </a>
              </p>
              
              
              <div class="space-y-6 text-center md:space-y-14 lg:space-y-10">
									<h1 class="font-serif text-xl text-gray-100 md:text-4xl">Pernikahan</h1>
									<h2 class="text-sm font-semibold uppercase tracking-widest font-body text-4xl text-yellow-300/90 md:text-7xl">Ivan & Virginia</h2>
								</div>
							</div>
						</SwiperSlide>
						
					</Swiper>
				</div> 
	
			 <!-- <div class="flex h-full flex-col-reverse items-end justify-end gap-x-24 gap-y-10 pt-8 md:mx-auto md:max-w-2xl md:flex-row md:justify-center md:gap-y-0 md:pt-0 lg:max-w-full">		
				
				<div class="space-y-6 text-center md:space-y-14 lg:space-y-10">
					<h1 class="font-serif text-xl text-gray-100 md:text-4xl">Pernikahan</h1>
					<h2 class="text-sm font-semibold uppercase tracking-widest font-body text-4xl text-yellow-300/90 md:text-7xl">Ivan & Virginia</h2>
				</div>
				  <div class="flex flex-col items-center justify-center gap-y-8 text-center md:gap-y-14 lg:gap-y-16">
					<h2 class="text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-gray-100 md:text-xl">Pernikahan</h2>
					<h2 class="font-body text-4xl text-yellow-800 dark:text-yellow-300/90 md:text-6xl lg:text-7xl">Ivan & Virgin</h2>
					<h2 class="text-sm font-semibold uppercase tracking-widest text-slate-600 dark:text-gray-100 md:text-xl">20 Agustus 2023</h2>
				</div> 
			 </div>  -->
		</section>
	</template>
	
	<script setup lang="ts"></script>
