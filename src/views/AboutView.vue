<template>
  <div class="about">
    <Navbar />
    <div class="body">
      <div class="container">
        <div class="mx-2 mt-4">
          <div class="my-4 pt-3 pb-1 px-2 bg-success-subtle rounded shadow">
            <ul>
              <li>
                <p>Hello👋🏻, my name is <a class="text-success fw-bold text-decoration-none"
                    href="https://twitter.com/QuenieSalbiyah"> Quenie!</a></p>
              </li>
              <li>
                <p>I've created this website to practise my knowledge of <a href="https://github.com/Queniex/Basic-Vue"
                    class="text-success fw-bold text-decoration-none">Vue.js</a>
                  Although I'm still newbie, I find it enjoyable
                  to explore Vue.</p>
              </li>
              <li>
                <p>I learned from this fantastic <a class="text-success fw-bold text-decoration-none"
                    href="https://youtube.com/playlist?list=PLIan8aHxsPj3a7oLHb2a8pw8IHBq45WYu">Youtube video</a></p>
              </li>
              <li>
                <p>If you have any advice or comments about this website, I would greatly appreciate it
                  ( feel free to <a class="text-success fw-bold text-decoration-none"
                    href="https://twitter.com/QuenieSalbiyah">DM me</a> ).</p>
              </li>
              <li>
                <p>I've also uploaded this project on <a href="https://github.com/Queniex/Culinary-Haven"
                    class="text-success fw-bold text-decoration-none">Github.</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AboutView",
  components: {
    Navbar,
    Footer
  },
};
</script>
