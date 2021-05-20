<template>
  <div id="contact" class="contact">
    <h1 v-scrollanimation>CONTACT ME</h1>
    <p v-scrollanimation>
      If you’d like to chat about a project please fill in the form below or
      contact me through my social media accounts.
    </p>
    <form
      v-scrollanimation
      name="send-mgs"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div class="inp">
        <input type="hidden" name="form-name" value="ask-question" />
        <input type="email" name="email" required placeholder="Email" />
        <input type="text" name="subject" required placeholder="Subject" />
      </div>
      <textarea
        name="text"
        placeholder="Description"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input type="submit" value="SEND" />
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";
.contact {
  @include section-style($firstColor, 20, 0);
  padding-bottom: 50px;
  h1 {
    @include style-headlines(0);
    @include animate-scroll(0.5s, 0.2s, scale(0.2), scale(1), 1);
  }
  p {
    position: relative;
    font-size: 18px;
    font-weight: 100;
    width: -moz-fit-content;
    width: 500px;
    max-width: 80%;
    margin: auto;
    padding-bottom: 20px;
    @include animate-scroll(0.4s, 0.3s, scale(0.2), scale(1), 1);
  }
  form {
    @include animate-scroll(0.5s, 0.2s, scale(0.2), scale(1), 1);
    display: flex;
    flex-direction: column;
    place-items: center;
    .inp * {
      font-size: 1.2em;
      font-weight: 500;
      letter-spacing: 0.2em;
      width: 300px;
      height: 50px;
      outline: none;
      border: none;
      padding: 30px;
      border-radius: 10px;
      box-sizing: border-box;
      margin: 20px;
    }
    input[type="submit"] {
      transition: all 0.3s cubic-bezier(0.92, 0.26, 0.4, 0.96);
      font-size: 1.5em;
      font-weight: 500;
      letter-spacing: 0.5em;
      padding-top: 5px;
      width: 300px;
      max-width: 80%;
      color: #4cb887;
      height: 50px;
      outline: none;
      border: none;
      border-radius: 10px;
      box-sizing: border-box;
      margin: 20px;
      background-color: #fff;
      &:hover {
        color: #fff;
        background-color: #4cb887;
        transform: scale(1.2);
      }
    }
    textarea {
      @include media-gte-sm {
        font-size: 1.2em;
        font-weight: 500;
        letter-spacing: 0.2em;
        width: 650px;
        max-width: 80%;
        height: 200px;
        outline: none;
        border: none;
        padding: 30px;
        border-radius: 10px;
        box-sizing: border-box;
      }
      @include media-gte-lg {
        height: auto;
      }
    }
  }
}
</style>
