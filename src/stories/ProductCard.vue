<template>
  <div :class="classes">
    <a href="#">
      <figure class="card-image">
        <img src="/src/assets/product-image.jpeg" alt="">
      </figure>
      <div class="card-content">
        <div class="card-content__info">
          <div class="card-content__title">NIKE AJ1 Retro High White University Blue NIKE AJ1 Retro High White University Blue</div>
          <div class="card-content__price">
            <div class="card-content__price-after">
            Rp912.170
            </div> 
            <div class="card-content__price-wrap">
              <span class="card-content__price-before">
                Rp1.099.000
              </span> 
              <span class="card-content__price-discount">
                17%
              </span>
            </div>
          </div>
          <div class="card-content__btn">
            <button type="button" class="card__button_add disabled" v-if="type === 'disabled'">Out Of Stock</button>
            <button type="button" class="card__button_add" v-else>Add to bag</button>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import './product-card.css';
import { reactive, computed } from 'vue';

export default {
  name: 'product-card',

  props: {
    type: {
      type: String,
      validator: function (value) {
        return ['default', 'disabled'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ['default', 'small'].indexOf(value) !== -1;
      },
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`card ${props.size || ''}`]: true,
      }))
    }
  },
};
</script>
