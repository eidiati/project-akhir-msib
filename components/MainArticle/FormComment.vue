<template>
  <h4 class="mb-3">Leave a comment</h4>

  <form
    class="contact-form p-4 rounded bg-color-grey mb-5"
    action="php/contact-form.php"
    method="POST"
  >
    <div class="p-2">
      <div class="row">
        <div class="form-group col-lg-6">
          <label class="form-label required font-weight-bold text-dark"
            >Full Name</label
          >
          <input
            type="text"
            value=""
            data-msg-required="Please enter your name."
            maxlength="100"
            class="form-control"
            name="name"
            required
          />
        </div>
        <div class="form-group col-lg-6">
          <label class="form-label required font-weight-bold text-dark"
            >Email Address</label
          >
          <input
            type="email"
            value=""
            data-msg-required="Please enter your email address."
            data-msg-email="Please enter a valid email address."
            maxlength="100"
            class="form-control"
            name="email"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="form-group col">
          <label class="form-label required font-weight-bold text-dark"
            >Comment</label
          >
          <textarea
            maxlength="5000"
            data-msg-required="Please enter your message."
            rows="8"
            class="form-control"
            name="message"
            required
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="form-group col mb-0">
          <input
            type="submit"
            value="Post Comment"
            class="btn btn-primary btn-modern"
            data-loading-text="Loading..."
          />
        </div>
      </div>
    </div>
  </form>
</template>
