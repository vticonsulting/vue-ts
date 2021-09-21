<route lang="yaml">
meta:
  layout: default
</route>
<template>
  <form class="form">
    <table class="border table">
      <thead>
        <tr>
          <th class="table-header" colspan="4">
            TEXAS HOME INSPECTION CHECKLIST
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center" colspan="4">
            Type of inspection:
            <input id="inspection-type-initial" type="radio" name="inspectionType">
            <label for="inspection-type-initial">Initial</label>

            <input id="inspection-type-subsequent" type="radio" name="inspectionType">
            <label for="inspection-type-subsequent">Subsequent</label>
          </td>
        </tr>
        <tr>
          <td>
            <label for="insured-name">Insured Name:</label>
            <input id="insured-name" type="text" name="insuredName">
          </td>
          <td>
            <label for="claim-number">
              Claim #:
            </label>
            <input id="claim-number" type="text" name="claimNumber">
          </td>
          <td>
            <label for="loss-date">
              Date of Loss:
            </label>
            <input id="loss-date" type="text" name="">
          </td>
          <td>
            <label for="inspection-date">
              Date of Inspection:
            </label>
            <input id="inspection-date" type="text" name="">
          </td>
        </tr>
        <tr>
          <td>
            <label for="loss-location">
              Loss Location:
            </label>
            <input id="loss-location" type="text" name="">
          </td>
          <td>
            <label for="">
              City:
            </label>
            <input id="" type="text" name="">
          </td>
          <td>
            <label for="">
              State:
            </label>
            <input id="" type="text" name="">
          </td>
          <td>
            <label for="">
              ZIP Code:
            </label>
            <input id="" type="text" name="">
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label for="">Email Address:</label>
            <input id="" type="text" name="">
          </td>
          <td class="text-center" colspan="2">
            <label style="display: block;">Insured on premises for inspection:</label>
            <input id="" type="radio" name="">
            Yes
            <input id="" type="radio" name="">
            No
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <label for="" style="display: block;">Any others present? (If yes list name and role, e.g., “John
              Smith, Contractor”):</label>
            <input id="" type="text" name="">
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      Please complete the interior and exterior checklists, indicating “Yes” if the item/area has damage then use
      the “Notes” section to describe any pre-existing or non-related damage. Indicate “No” if there is no damage
      to the item/area. Mark “N/A” if the area does not exist.
    </p>

    <table class="border table">
      <thead>
        <tr>
          <th class="table-header" colspan="6">
            EXTERIOR
          </th>
        </tr>
        <tr>
          <th></th>
          <th colspan="3">Inspection Damage</th>
          <th rowspan="2">Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th>Area/Item</th>
          <th>Yes</th>
          <th>No</th>
          <th>N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Roof</td>
          <td class="text-center"><input id="" type="radio" name="roof"> </td>
          <td class="text-center"><input id="" type="radio" name="roof"></td>
          <td class="text-center"><input id="" type="radio" name="roof"></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Siding (if “Yes” indicate elevation)</td>
          <td class="text-center"><input id="" type="radio" name="siding"> </td>
          <td class="text-center"><input id="" type="radio" name="siding"></td>
          <td class="text-center"><input id="" type="radio" name="siding"></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Gutters/Downspouts</td>
          <td class="text-center"><input id="" type="radio" name="gutters"> </td>
          <td class="text-center"><input id="" type="radio" name="gutters"></td>
          <td class="text-center"><input id="" type="radio" name="gutters"></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Windows</td>
          <td class="text-center"><input id="" type="radio" name="windows"> </td>
          <td class="text-center"><input id="" type="radio" name="windows"></td>
          <td class="text-center"><input id="" type="radio" name="windows"></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Screens</td>
          <td class="text-center"><input id="" type="radio" name="screens"> </td>
          <td class="text-center"><input id="" type="radio" name="screens"></td>
          <td class="text-center"><input id="" type="radio" name="screens"></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Doors</td>
          <td class="text-center"><input id="" type="radio" name="doors"> </td>
          <td class="text-center"><input id="" type="radio" name="doors"></td>
          <td class="text-center"><input id="" type="radio" name="doors"></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Patio</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Patio Covering</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Garage</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Carport</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Pool Enclosure</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>A/C Unit</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Deck</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Shed/Outbuilding</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Fence</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Mailbox</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td colspan="5" class="text-center"><input id="" type="checkbox" name="">Check here if the
            inspection area/item list is
            continued below in “Additional Entries” section.</td>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 table">
      <thead>
        <tr>
          <th class="table-header" colspan="5">
            INTERIOR
          </th>
        </tr>
        <tr>
          <th colspan="5">
            <table class="w-full">
              <tr>
                <td class="font-normal text-left borderless">
                  The customer/representative refused inspection of all or part of the interior
                  property at this time,
                  confirming that there is no interior damage due to the reported loss except as
                  specified below (Sign
                  below, page 3).
                </td>
                <td class="font-normal text-left borderless">
                  The customer/representative refused inspection of all or part of the interior
                  property at this time,
                  confirming that there is
                  no new or additional interior damage due to the reported loss since the last
                  inspection except as specified
                  below (Sign
                  below, page 3).
                </td>
              </tr>
            </table>
          </th>
        </tr>
        <tr>
          <th></th>
          <th colspan="3">Inspection Damage</th>
          <th rowspan="2">Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th>Area/Item</th>
          <th>Yes</th>
          <th>No</th>
          <th>N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Living Room</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Family Room</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Dining Room</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Kitchen</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Breakfast Area</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Pantry</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Foyer</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Game Room</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Office/Study</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Hall</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Hall Closet</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Utility Room</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Garage</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Attic</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Crawlspace</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Basement</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Master Bedrm</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>MBR Closet</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Bedroom 2</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>BR2 Closet</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Bedroom 3</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>BR3 Closet</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Bedroom 4</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>BR4 Closet</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Master Bath</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Bathroom 2</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Bathroom 3</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td>Contents</td>
          <td class="text-center"><input id="" type="radio" name=""> </td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td class="text-center"><input id="" type="radio" name=""></td>
          <td><input id="" type="text" name=""></td>
        </tr>
        <tr>
          <td colspan="5" class="text-center"><input id="" type="checkbox" name="">Check here if the inspection area/item list is continued below in “Additional Entries” section.</td>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 border table">
      <thead>
        <tr>
          <th class="table-header" colspan="7">
            ADDITIONAL ENTRIES
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <th colspan="3">Inspection Damage</th>
          <th colspan="2">Location</th>
          <th rowspan="2">Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th>Area/Item</th>
          <th>Yes</th>
          <th>No</th>
          <th>N/A</th>
          <th>INT</th>
          <th>EXT</th>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 border table">
      <thead>
        <tr>
          <th class="table-header" colspan="7">
            SIGNATURES
          </th>
        </tr>
      </thead>
    </table>

    <table class="mt-4 border table">
      <thead>
        <tr>
          <th class="table-header" colspan="7">
            COPY PROVIDED TO CUSTOMER
          </th>
        </tr>
      </thead>
    </table>
  </form>
</template>

<style lang="scss">
$blue: rgb(191, 219, 254);
$light-blue: rgb(191, 219, 254, 0.5);
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

.form {
  max-width: 48rem;
  font-family: sans-serif;
  font-size: 12px;
}

table {
  width: 100%;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
}

th,
td {
  padding: 0.25rem;
  vertical-align: middle;
  border: 1px solid black;

  /* padding: 0.25rem .5rem; */

  /* background-color: #BFD3ED; */
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

input[type="text"] {
  width: 100%;
  padding: 0 0.25rem;
  font-family: monospace;
  font-size: 0.8rem;
  line-height: 1.5rem;
  text-align: left;
  background-color: #fff;

  /* background-color: #BFD3ED; */
  border: none;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0;

  appearance: none;
}

input[type="text"]:focus {
  background-color: $light-blue;
  outline: none;
}

.w-full {
  width: 100%;
}

.borderless {
  border: none;
}

.font-normal {
  font-weight: 400;
}

.mt-4 {
  margin-top: 1rem;
}

.table-header {
  background-color: $blue;
}
</style>
