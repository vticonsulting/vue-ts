<template>
  <form class="hic-report">
    <table class="hic-table">
      <thead>
        <tr>
          <th colspan="4" class="table-header">TEXAS HOME INSPECTION CHECKLIST</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td colspan="4">
            <table>
              <tr>
                <td class="text-center" colspan="4">
                  Type of inspection:
                  <input
                    id="inspection-type-initial"
                    v-model="inspectionTypeInitial"
                    type="radio"
                    name="inspectionType"
                  />
                  <label for="inspection-type-initial">Initial</label>

                  <input
                    id="inspection-type-subsequent"
                    v-model="inspectionTypeSubsequent"
                    type="radio"
                    name="inspectionType"
                  />
                  <label for="inspection-type-subsequent">Subsequent</label>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td colspan="4">
            <table>
              <tr>
                <td style="width: 292px;">
                  <label for="insured-name">Insured Name:</label>
                  <input id="insured-name" v-model="insuredName" type="text" name="insuredName" />
                </td>
                <td style="width: 188px;">
                  <label for="claim-number">Claim #:</label>
                  <input id="claim-number" v-model="claimNumber" type="text" name="claimNumber" />
                </td>
                <td style="width: 102px;">
                  <label for="loss-date">Date of Loss:</label>
                  <input id="loss-date" v-model="lossDate" type="text" name="lossDate" />
                </td>
                <td style="width: 142px;">
                  <label for="inspection-date">Date of Inspection:</label>
                  <input
                    id="inspection-date"
                    v-model="inspectionDate"
                    type="text"
                    name="inspectionDate"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td colspan="4">
            <table>
              <tr>
                <td style="width: 360px;">
                  <label for="loss-location">Loss Location:</label>
                  <input id="loss-location" v-model="lossLocation" type="text" name="lossLocation" />
                </td>
                <td style="width: 144px;">
                  <label for="city">City:</label>
                  <input id="city" v-model="city" type="text" name="city" />
                </td>
                <td style="width: 78px;">
                  <label for="state">State:</label>
                  <input id="state" v-model="state" type="text" name="state" />
                </td>
                <td style="width: 142px;">
                  <label for="postal-code">ZIP Code:</label>
                  <input id="postal-code" v-model="postalCode" type="text" name="postalCode" />
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td colspan="4">
            <table>
              <tr>
                <td style="width: 490px;">
                  <label for>Email Address:</label>
                  <input id v-model="emailAddress" type="text" name="emailAddress" />
                </td>
                <td style="width: 234px;" class="text-center">
                  <label style="display: block;">Insured on premises for inspection:</label>
                  <input id type="radio" name="insuredOnPremises" value="yes" />
                  Yes
                  <input id type="radio" name="insuredOnPremises" value="no" />
                  No
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script lang="ts">
import { reactive, defineComponent, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      inspectionTypeInitial: '',
      inspectionTypeSubsequent: '',
      insuredName: 'Victor Tolbert',
      claimNumber: '5456443XD',
      lossDate: '',
      inspectionDate: '',
      lossLocation: '',
      city: '',
      state: '',
      postalCode: '',
      emailAddress: '',
    })

    return {
      ...toRefs(state),
    }
  },
})

</script>

<style lang="scss">
$color-blue: rgb(191, 219, 254);
$color-blue-light: rgb(191, 219, 254, 0.5);
$color-gray: #ccc;
$color-black: #000;

html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

.hic-report {
  font-family: Arial, sans-serif;
  font-size: 11px;
}

.hic-table {
  width: 724px;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
  border: 1px solid $color-black;

  .table-header {
    text-align: center;
  }

  th,
  td {
    padding: 0;
    vertical-align: middle;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    td {
      border-top: 1px solid $color-black;
      border-left: 1px solid $color-black;
    }
  }
}

input[type="text"] {
  width: 100%;
  padding: 0 0.25rem;
  font-family: monospace;
  font-size: 0.8rem;
  line-height: 1.5rem;
  text-align: left;
  background-color: $color-blue-light;

  border: none;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0;

  appearance: none;
}

input[type="text"]:focus {
  background-color: $color-blue;
  outline: none;
}
</style>
