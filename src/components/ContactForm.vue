<template>

    <form ref="contactForm" action="https://formspree.io/f/xeqnpkog" method="POST" class="reveal">

        <div>
            <div class="formField">
                <input v-model="contactName" autocomplete="off" type="input" class="formInput" placeholder="Name" name="name" id='name' required="required" />
                <label for="name" class="formLabel">Nom</label>
            </div>
            <div class="formField">
                <input v-model="contactMail" autocomplete="off" type="email" class="formInput" placeholder="Email" name="email" id='email' required="required" />
                <label for="email" class="formLabel">Email</label>
            </div>
        </div>

        <div class="formTextarea">
            <textarea v-model="contactMessage" autocomplete="off" name="message" id="message" minlength="30" rows="5" placeholder="Message" required="required"></textarea>
            <label for="message" class="formLabel">Message</label>
        </div>

        <div class="submitField">
            <button :disabled="disabledContactSubmit" class="styledButton">
                <span>Envoyer</span>
            </button>
        </div>
    </form>

</template>

<script>
export default{
    name: 'contact-form',
    data() {
        return {
            contactName: "",
            contactMail: "",
            contactMessage: "",
        }
    },
    computed: {
        disabledContactSubmit(){
            return this.contactName.length>1 && this.contactMail.length>1 && this.contactMessage.length>1 ? false : true
        }
    }
}
</script>

<style lang="scss">
    $black: #1a1a1a;
    $darkGrey: #1a2f47;
    $blue: #00adb5;
    $white: #EEEEEE;

    form{
      width: 60%;
      margin: 15vh auto 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .formLabel {
        position: absolute;
        top: -5px;
        display: block;
        transition: 0.2s;
        color: $white;
      }

      .formInput, textarea {
        width: 100%;
        border: 0;
        border-bottom: 2px solid $white;
        outline: 0;
        color: $white;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s, background-color 0.2s;

        &::placeholder {
          color: transparent;
        }
        &:placeholder-shown ~ .formLabel {
          cursor: text;
          top: 20px;
        }
        &:not(:placeholder-shown){
          border-color: $blue;
        }
        &:not(:placeholder-shown) ~ .formLabel{
          color: $blue
        }
      }
      .formInput:focus, textarea:focus {
          padding-bottom: 6px;
          border-width: 3px;
          border-color: $blue;
          
          ~ .formLabel {
            position: absolute;
            top: -15px;
            display: block;
            transition: 0.2s;
            color: $blue;
            font-size: 1.3rem;
          }
        }

      // inputs
      &>div:not(:last-child){
        display: flex;
        justify-content: space-between;
        width: 100%;

        .formField {
          position: relative;
          padding: 15px 0 0;
          margin-top: 10px;
          width: 40%;
        }
      }

      // textarea
      div.formTextarea{
        position: relative;
        padding: 15px 0 0;
        margin: 50px auto 0 auto;
        width: 70%;
      }

      // submit button
      .submitField{
        margin-top: 50px;
      }
    }

</style>