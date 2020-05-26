<template>
<div class="request-a-callback-form">
 <transition name="fade" mode="out-in">
  <div v-if="sent">
   <p>Thanks for contacting us, we will get back to you shortly...</p>
  </div>
 </transition>
 <form v-on:submit="sendForm">
  <input type="text" v-model="ContactForm.name" placeholder="Your Name">
  <input type="text" v-model="ContactForm.email" placeholder="Email Address">
  <input type="text" v-model="ContactForm.phone" placeholder="Phone Number">
  <input type="text" v-model="ContactForm.subject" placeholder="Subject">
  <textarea v-model="ContactForm.message" rows="8" cols="80" class="form-control">
  </textarea>
  <br>
  <button data-text="submit" type="submit" class="btn btn-primary">Submit</button>
 </form>
</div>
</template>
        <script>
        export default {
          data() {
            return {
              sent: false,
              ContactForm: {
                name : '',
                email: '',
                phone: '',
                subject: '',
                message: ''
              }
            }
          },
          methods: {
            sendForm(e) {
              e.preventDefault()
              console.log(this.ContactForm)
              this.$axios.post('api/mailserver.php',
              querystring.stringify(this.ContactForm)).then(res => {
                this.sent = true
              })
            }
          }
        }
        </script>
