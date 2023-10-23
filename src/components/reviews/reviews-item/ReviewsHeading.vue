<template>
  <div class="reviews-heading">
    <ReviewsAvatar />
    <div class="reviews-heading__content">
      <span class="reviews-heading__autor">{{ author }}</span>
      <StarRating :rating="rating" />
    </div>
  </div>
</template>

<script>
import StarRating from "../../StarRating.vue";
import ReviewsAvatar from "./ReviewsAvatar.vue";

export default {
  name: "ReviewsHeading",
  components: {
    StarRating,
    ReviewsAvatar,
  },
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
