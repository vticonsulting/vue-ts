<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const { t } = useI18n()

    const schema = Yup.object().shape({
      email_addr: Yup.string().email().required().label('Email Address'),
      acc_pazzword: Yup.string().min(5).required().label('Your Password'),
    })

    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2))
    }

    return {
      onSubmit,
      schema,
      t,
    }
  },
}
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mt-4">
      <label for="email" class="block text-sm font-medium text-gray-700">{{ t('your_email') }}</label>
      <div>
        <Field
          id="email_addr"
          name="email_addr"
          type="email"
          class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
      </div>
      <ErrorMessage id="email-error" name="email_addr" class="mt-2 text-sm text-danger" />
    </div>

    <div class="mt-4">
      <label for="password" class="block text-sm font-medium text-gray-700">{{ t('your_password') }}</label>
      <div>
        <Field
          id="password"
          name="acc_pazzword"
          type="password"
          class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
      </div>
      <ErrorMessage id="password-error" name="acc_pazzword" class="mt-2 text-sm text-danger" />
    </div>

    <div class="mt-8">
      <button
        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >{{ t('submit') }}</button>
    </div>
  </Form>
</template>
