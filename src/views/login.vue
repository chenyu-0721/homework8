<script setup></script>

<template>
  <nav class="container container_text navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"
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
              <a href="/login" class="navbar_span">log in</a>
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

  <div
    class="container mtb-80 d-flex flex-column flex-md-row align-items-center"
  >
    <div class="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
      <img
        class="img-fluid"
        style="max-width: 100%; height: auto"
        src="https://github.com/hexschool/webLayoutTraining1st/blob/master/perfume-week6/login1.jpg?raw=true"
        alt="Login Image"
      />
    </div>
    <div class="col-12 col-md-6 d-flex flex-column align-items-center">
      <form class="w-75 w-md-50">
        <h1 class="fw-bold fs-1">Log in</h1>
        <div class="mb-3 mt-3">
          <label for="email" class="form-label fs-4">帳號</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="example@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label fs-4">密碼</label>
          <input
            type="password"
            class="form-control"
            id="password"
            aria-describedby="emailHelp"
            placeholder="Password"
          />
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <a href="#" class="forgot fs-5">忘記密碼</a>
          <div>
            <button type="button" class="btn btn-primary me-2">註冊</button>
            <button type="submit" class="btn btn-secondary">登入</button>
          </div>
        </div>
      </form>
    </div>
  </div>

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

<style>
.mtb-80 {
  margin-top: 80px;
  margin-bottom: 80px;
}

.forgot {
  font: normal normal medium 16px/24px PingFang TC;
  letter-spacing: 0px;
  color: #916000 !important;
  opacity: 1;
}

.container {
  max-width: 1200px;
}

.img-fluid {
  max-width: 730px;
  height: 730px !important;
}

@media (max-width: 768px) {
  .img-fluid {
    width: 100%;
    height: 220px !important;
  }
}

.btn-primary {
  background-color: white !important;
  color: #916000 !important;
  border-color: #916000 !important;
}

.btn-secondary {
  background-color: #916000 !important;
  border-color: #ffffff !important;
}
</style>
