<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import FormPlanPicker from './FormPlanPicker.vue'
import FormUserDetails from './FormUserDetails.vue'
import FormAddress from './FormAddress.vue'
import FormReviewOrder from './FormReviewOrder.vue'
import { postFormToDB } from '~/api'

export default {
  name: 'FormWizard',
  components: {
    FormPlanPicker,
    FormUserDetails,
    FormAddress,
    FormReviewOrder,
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      currentStepNumber: 1,
      asyncState: null,
      steps: [
        'FormPlanPicker',
        'FormUserDetails',
        'FormAddress',
        'FormReviewOrder',
      ],
      form: {
        plan: null,
        email: null,
        name: null,
        password: null,
        address: null,
        recipient: null,
        chocolate: false,
        otherTreat: false,
      },
    }
  },
  validations() {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required, email }, // Matches this.contact.email
      },
    }
  },
  computed: {
    isLastStep() {
      return this.currentStepNumber === this.length
    },
    wizardInProgress() {
      return this.currentStepNumber <= this.length
    },
    length() {
      return this.steps.length
    },
    currentStep() {
      return this.steps[this.currentStepNumber - 1]
    },
    progress() {
      return this.currentStepNumber / this.length * 100
    },
  },
  methods: {
    updateAsyncState(state) {
      this.asyncState = state
    },
    submitOrder() {
      this.asyncState = 'pending'
      postFormToDB(this.form)
        .then(() => {
          console.log('form submitted', this.form)
          this.asyncState = 'success'
          this.currentStepNumber++
        })
    },
    nextButtonAction() {
      this.$refs.currentStep.submit()
        .then((stepData) => {
          Object.assign(this.form, stepData)
          if (this.isLastStep)
            this.submitOrder()

          else
            this.goNext()
        })
        .catch(error => console.log(error))
    },
    goBack() {
      this.currentStepNumber--
    },
    goNext() {
      this.currentStepNumber++
    },
  },
}
</script>

<template>
  <div>
    <div v-if="wizardInProgress" v-show="asyncState !== 'pending'">
      <keep-alive>
        <component
          :is="currentStep"
          ref="currentStep"
          :wizard-data="form"
          @updateAsyncState="updateAsyncState"
        ></component>
      </keep-alive>

      <div class="progress-bar">
        <div :style="`width: ${progress}%;`"></div>
      </div>

      <!-- Actions -->
      <div class="buttons">
        <button v-if="currentStepNumber > 1" class="btn-outlined" @click="goBack">Back</button>

        <button class="btn" @click="nextButtonAction">{{ isLastStep ? 'Complete Order' : 'Next' }}</button>
      </div>
    </div>

    <div v-else>
      <h1 class="title">Thank you!</h1>
      <h2 class="subtitle">We look forward to shipping you your first box!</h2>

      <p class="text-center">
        <a href="https://vueschool.io" target="_blank" class="btn">Go somewhere cool!</a>
      </p>
    </div>

    <div v-if="asyncState === 'pending'" class="loading-wrapper">
      <div class="loader">
        <!-- <img src="/spinner.svg" alt /> -->
        <p>Please wait, we're hitting our servers!</p>
      </div>
    </div>
  </div>
</template>

<style>
.plans {
  padding: 0 40px;
  margin-bottom: 40px;
}

.plans .plan {
  position: relative;
  flex-pack: justify;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transition: all 0.3s ease;
  box-pack: justify;
}

.plans .plan,
.plans .plan > .weight {
  display: box;
  display: flexbox;
  display: flex;
}

.plans .plan > .weight {
  flex-align: center;
  flex-pack: center;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100px;
  font-size: 1.875rem;
  font-weight: 500;
  color: #136268;
  background-color: #7dacaf;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  box-align: center;
  box-pack: center;
}

.plans .plan > .description {
  width: 60%;
  padding: 1rem;
}

.plans .plan > .description .title {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 700;
  color: #3d4852;
}

.plans .plan > .description .description {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: #8795a1;
}

.plans .plan > .price {
  display: box;
  display: flexbox;
  display: flex;
  width: 20%;
  padding-top: 1.5rem;
  font-family: Crimson Text, serif;
  font-weight: 600;
  color: #09848d;
}

.plans .plan > .price .dollar-sign {
  font-size: 24px;
  font-weight: 700;
}

.plans .plan > .price .number {
  font-size: 72px;
  line-height: 0.5;
}

.plans .active-plan,
.plans .plan:hover {
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
}

.plans .active-plan::after,
.plans .plan:hover::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  content: "";
  border-color: #7dacaf;
  border-width: 2px;
  border-radius: 0.25rem;
}

form.form {
  padding: 0.8rem 4rem;
}

.form-group,
form.form {
  display: box;
  display: flexbox;
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
}

.form-group {
  flex-align: center;
  flex-pack: end;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 0.5rem 2rem;
  box-align: center;
  box-pack: end;
}

.form-group .form-label {
  width: 20%;
  margin-right: 2rem;
  font-weight: 500;
  color: #5c6162;
  text-align: right;
}

.form-group .form-control {
  flex-grow: 1;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  color: #5c6162;
  background-color: #f4f7f7;
  border-radius: 0.25rem;
  box-flex: 1;
  flex-positive: 1;
}

.form-group .form-control::input-placeholder {
  font-weight: 400;
}

.form-group .form-control:input-placeholder,
.form-group .form-control::input-placeholder {
  font-weight: 400;
}

.form-group .form-control::placeholder {
  font-weight: 400;
}

.form-group .form-control:focus {
  background-color: #fff;
  outline: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.summary {
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
}

.summary h3 {
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  color: #5c6162;
}

.summary .description,
.summary h3 {
  font-weight: 500;
  letter-spacing: 0.05em;
}

.summary .description {
  width: 66.66667%;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #8795a1;
}

.summary hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.summary .options {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.summary .options .option {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #5c6162;
  letter-spacing: 0.05em;
}

.summary .options .option input {
  margin-right: 0.5rem;
  margin-left: 1rem;
}

.summary .address {
  display: box;
  display: flexbox;
  display: flex;
}

.error {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #e3342f;
  color: tomato;
  text-align: right;
}

.loading-wrapper {
  margin-top: 4rem;
}

.loading-wrapper,
.loading-wrapper .loader {
  display: box;
  display: flexbox;
  display: flex;
}

.loading-wrapper .loader {
  flex-align: center;
  flex-wrap: wrap;
  flex-wrap: wrap;
  flex-pack: center;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  font-size: 1.25rem;
  color: #5c6162;
  border-color: #09848d;
  border-width: 2px;
  border-radius: 0.5rem;
  box-align: center;
  box-pack: center;
}

.loading-wrapper .loader p {
  margin-right: 1rem;
}

.info {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #5c6162;
  text-align: right;
}
</style>
