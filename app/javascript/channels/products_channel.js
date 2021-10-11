import consumer from "./consumer";

consumer.subscriptions.create("ProductsChannel", {
  received(data) {
    document.getElementById("reviews").innerHTML += review(
      data.rating,
      data.comment
    );
  },
});

let review = (rating, comment) => {
  return `
    <div class="md:col-span-2">
      <div class="w-32">
        <div class="flex text-xl space-x-1">
          ${[0, 1, 2, 3, 4].map((index) => star(rating, index)).join("")}
        </div>
      </div>
    </div>
    <p class="md:col-span-6">
      <span class="font-bold">${rating}</span>
      <span class="text-gray-500">, ${comment}</span>
    </p>
  `;
};

let star = (rating, index) => {
  return `
    <svg width="26" height="26" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class=${
      rating > index ? "text-yellow-400" : "text-gray-200"
    }>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.895 11.321c-.235-.674-.806-1.171-1.509-1.274l-8.07-1.245-3.602-7.733C16.377.44 15.732 0 15 0s-1.377.44-1.713 1.07L9.684 8.801 1.57 10.047c-.66.102-1.23.6-1.465 1.274a1.81 1.81 0 00.44 1.904l5.887 6.02-1.406 8.567c-.102.703.205 1.406.762 1.846.337.234.703.336 1.113.336.293 0 .6-.073.908-.234L15 25.776l7.191 3.984c.308.161.615.234.908.234.41 0 .776-.102 1.113-.336.557-.44.864-1.143.762-1.846l-1.406-8.568 5.887-6.019a1.81 1.81 0 00.44-1.904z"
          fill="currentColor"
        />
        <path
          class=${!(index + 1 - rating === 0.5) ? "hidden" : "text-gray-200"}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.3862 10.047C29.0892 10.1495 29.6603 10.6474 29.8947 11.3211C30.129 11.9802 29.9679 12.7271 29.4553 13.2251L23.5677 19.2445L24.9737 27.8122C25.0762 28.5152 24.7687 29.2182 24.2121 29.6576C23.8753 29.8919 23.5092 29.9944 23.0991 29.9944C22.8062 29.9944 22.4986 29.9212 22.191 29.7601L15 25.7764V0C15.7323 0 16.3767 0.439371 16.7135 1.06914L20.3164 8.80207L28.3862 10.047Z"
          fill="currentColor"
        />
    </svg>
  `;
};
