<template>
  <nav class="container container_text navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" image="#"
        ><img
          class="navbar_img"
          src="https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/d%E2%80%99Perfume.png?raw=true"
      /></a>
      <button
        class="navbar-toggler navbar-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a image="#" class="nav-link" aria-current="page">
              <i class="bi bi-shop navbar_icon"></i>
              <a href="#" class="navbar_span">Product</a>
            </a>
          </li>
          <li class="nav-item">
            <a image="#" class="nav-link" aria-current="page">
              <i class="bi bi-person-fill navbar_icon"></i>
              <a href="login" class="navbar_span">log in</a>
            </a>
          </li>
          <li class="nav-item">
            <a image="#" class="nav-link" aria-current="page">
              <i class="bi bi-heart navbar_icon"></i>
              <a href="#" class="navbar_span">Wishlist</a>
            </a>
          </li>
          <li class="nav-item">
            <a image="#" class="nav-link" aria-current="page">
              <i class="bi bi-cart navbar_icon"></i>
              <a href="#" class="navbar_span">Cart(3)</a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div>
    <div class="album">
      <div class="container_bg">
        <div class="d-flex flex-wrap navbar2_bg">
          <ul class="container navbar2_container nav nav-pills">
            <li class="nav-item">
              <a image="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">CHANEL</span>
              </a>
            </li>
            <li class="nav-item">
              <a image="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">Jo Malone</span>
              </a>
            </li>
            <li class="nav-item">
              <a image="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">Curology</span>
              </a>
            </li>
            <li class="nav-item">
              <a image="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">Dior</span>
              </a>
            </li>
            <li class="nav-item">
              <a image="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">Chloe</span>
              </a>
            </li>
            <li class="nav-item">
              <a image="#" class="nav-link" aria-current="page">
                <span class="navbar2_span">ZARA</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="album py-5" v-if="isLoading">
    <div class="container">
      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3">
        <div class="col" v-for="index in 8" :key="index">
          <div class="card">
            <div
              style="width: auto; height: 250px; background-color: #ccc"
            ></div>

            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="album py-5" v-else>
    <div class="container">
      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3">
        <div class="col" v-for="product in perfumeList" :key="product.id">
          <div class="card">
            <a>
              <img :src="product.image" class="card-img-top" alt="" />
            </a>
            <div class="card-body">
              <span class="card-title">{{ product.title }}</span>
              <br />
              <span class="card-categoryr">{{ product.category }}</span>
              <br />
              <span class="card-price">NT\${{ product.price }}</span>
              <span class="card-price ms-2 card-span-text"
                ><del>NT\${{ product.origin_price }}</del></span
              >
              <br />
              <i class="bi bi-heart-fill"></i>
              <i class="bi bi-cart-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="subscription">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3 class="fs-1 fw-bold c_gray mb-4">
            記得<br />訂閱以獲取更多資訊！
          </h3>
          <div class="input d-flex">
            <input
              class="email-input"
              type="text"
              placeholder="Your email address"
            />
            <a
              class="subscription-btn text-white w-100 d-flex justify-content-center align-items-center"
              image="javascript:;"
              >Subscribe</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <div>
    <div class="container-footer">
      <div class="container">
        <footer
          class="d-flex flex-wrap justify-content-between align-items-center"
        >
          <div class="col-md-4 d-flex align-items-center">
            <a
              image="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                class="navbar_img"
                src="https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/d%E2%80%99Perfumewhite.png?raw=true"
              />
            </a>
          </div>

          <ul class="nav col-md-4 justify-content-center list-unstyled d-flex">
            <li class="ms-3"><a image="#" class="footer-li">Product</a></li>
            <li class="ms-3"><a image="#" class="footer-li">Blog</a></li>
            <li class="ms-3"><a image="#" class="footer-li">Contact</a></li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
//
const perfumeList = [
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index1.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index2.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index4.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index4.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index5.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index6.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index7.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index8.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index9.jpg?raw=true',
  },
  {
    title: 'Poppy & Barley',
    category: 'Jo Malone',
    price: 'NT$1,380',
    origin_price: 'NT$1,580',
    image:
      'https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/index10.jpg?raw=true',
  },
]

const perfume = ref([])
const isLoading = ref(true)

onMounted(() => {
  axios
    .get('https://perfume-express-pty3.onrender.com/posts')
    .then((response) => {
      perfume.value = response.data.data
      isLoading.value = false
    })
    .catch((error) => {
      console.error('An error occurred:', error)
    })
})
</script>
