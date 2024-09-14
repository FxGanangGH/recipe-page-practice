<template>
  <div class="size-full bg-stone-100 flex items-center justify-center desktop:py-36">
    <div class="size-full max-w-screen-sm bg-white desktop:rounded-2xl desktop:p-8">
      <img
        class="desktop:rounded-xl desktop:mb-5"
        src="/src/assets/images/image-omelette.jpeg"
      />
      <div class="flex flex-col gap-y-10 p-8 desktop:p-0">
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col gap-y-5">
            <h1 class="font-young-serif text-4xl capitalize">simple omelette recipe</h1>
            <p class="font-outfit">
              An easy and quick dish, perfect for any meal. This classic omellete combines
              beaten eggs cooked to perfection, optionally filled with your choice of
              cheese, vegetables, or meats.
            </p>
            <div class="bg-rose-50 p-5 desktop:rounded-xl">
              <h2 class="font-outfit text-xl font-bold text-rose-800">
                Preparation time
              </h2>
              <ul class="ml-1">
                <li class="bullet flex font-outfit text-lg">
                  <span
                    ><span class="font-bold">Total</span>: Approximately 10 minutes</span
                  >
                </li>
                <li class="bullet flex font-outfit text-lg">
                  <span><span class="font-bold">Preparation</span>: 5 minutes</span>
                </li>
                <li class="bullet flex font-outfit text-lg">
                  <span><span class="font-bold">Cooking</span>: 5 minutes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-y-5 border-b border-gray-300 pb-8">
          <h2 class="font-young-serif text-3xl capitalize text-brown-800">ingredients</h2>
          <ul class="ml-2 desktop:flex desktop:flex-col desktop:gap-y-5">
            <li class="bullet flex font-outfit leading-6 desktop:text-lg">
              2-3 large eggs
            </li>
            <li class="bullet flex font-outfit leading-6 desktop:text-lg">
              Salt, to taste
            </li>
            <li class="bullet flex font-outfit leading-6 desktop:text-lg">
              Pepper, to taste
            </li>
            <li class="bullet flex font-outfit leading-6 desktop:text-lg">
              1 tablespoon of butter or oil
            </li>
            <li class="bullet flex font-outfit leading-6 desktop:text-lg">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-y-5 border-b border-gray-300 pb-8">
          <h2 class="font-young-serif text-3xl capitalize text-brown-800">instruction</h2>
          <ol
            class="ml-7 list-decimal list-outside marker:text-stone-800 marker:font-outfit marker:font-bold"
          >
            <li class="font-outfit pl-4">
              <span class="font-bold">Beat the eggs</span>: In a bowl, beat the eggs with
              a pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li class="font-outfit pl-4">
              <span class="font-bold">Heat the pan</span>: Place a non-stick frying pan
              over medium heat and add butter or oil.
            </li>
            <li class="font-outfit pl-4">
              <span class="font-bold">Cook the omelette</span>: Once the butter is melted
              and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat
              the surface.
            </li>
            <li class="font-outfit pl-4">
              <span class="font-bold">Add fillings (optional)</span>: When the eggs begin
              to set at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li class="font-outfit pl-4">
              <span class="font-bold">Fold and serve</span>: As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let it cook for
              another minute, then slide it onto a plate.
            </li>
            <li class="font-outfit pl-4">
              <span class="font-bold">Enjoy</span>: Serve hot, with additional salt and
              pepper if needed.
            </li>
          </ol>
        </div>
        <div class="flex flex-col gap-y-5 pb-8">
          <h2 class="font-young-serif text-3xl capitalize text-brown-800">nutrition</h2>
          <p class="font-outfit">
            The table below shows nutritional values per serving without the additional
            fillings.
          </p>
          <ul class="ml-2">
            <li class="flex py-2 border-b border-gray-300 font-outfit leading-6">
              <span class="w-1/2 capitalize font-outfit pl-5">calories</span>
              <span class="w-1/2 capitalize font-outfit pl-5 text-stone-800 font-bold"
                >277kcal</span
              >
            </li>
            <li class="flex py-2 border-b border-gray-300 font-outfit leading-6">
              <span class="w-1/2 capitalize font-outfit pl-5">carbs</span>
              <span class="w-1/2 capitalize font-outfit pl-5 text-stone-800 font-bold"
                >0g</span
              >
            </li>
            <li class="flex py-2 border-b border-gray-300 font-outfit leading-6">
              <span class="w-1/2 capitalize font-outfit pl-5">protein</span>
              <span class="w-1/2 capitalize font-outfit pl-5 text-stone-800 font-bold"
                >20g</span
              >
            </li>
            <li class="flex py-2 border-b border-gray-300 font-outfit leading-6">
              <span class="w-1/2 capitalize font-outfit pl-5">fat</span>
              <span class="w-1/2 capitalize font-outfit pl-5 text-stone-800 font-bold"
                >22g</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped>
.bullet::before {
  content: "\2022";
  font-size: 1.5rem;
  color: #7b284f;
  margin-right: 30px;
  align-self: center;
}
</style>
