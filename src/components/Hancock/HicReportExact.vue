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
                <td class="text-center" style=" height: 20px; border-left: none;" colspan="4">
                  <div class="flex items-center justify-center">
                    <span>Type of inspection:</span>
                    <input
                      id="inspection-type-initial"
                      v-model="inspectionTypeInitial"
                      style="margin-left: 22px;"
                      type="radio"
                      name="inspectionType"
                    />
                    <label style="margin-left: 4px;" for="inspection-type-initial">Initial</label>
                    <input
                      id="inspection-type-subsequent"
                      v-model="inspectionTypeSubsequent"
                      style="margin-left: 40px;"
                      type="radio"
                      name="inspectionType"
                    />
                    <label style="margin-left: 6px;" for="inspection-type-subsequent">Subsequent</label>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td colspan="4">
            <table>
              <tr>
                <td style="width: 292px; padding-left: 6px; border-left: none;">
                  <label for="insured-name">Insured Name:</label>
                  <input id="insured-name" v-model="insuredName" type="text" name="insuredName" />
                </td>
                <td style="width: 188px; padding-left: 7px;">
                  <label for="claim-number">Claim #:</label>
                  <input id="claim-number" v-model="claimNumber" type="text" name="claimNumber" />
                </td>
                <td style="width: 102px; padding-left: 7px;">
                  <label for="loss-date">Date of Loss:</label>
                  <input id="loss-date" v-model="lossDate" type="text" name="lossDate" />
                </td>
                <td style="width: 142px; padding-left: 8px;">
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
                <td style="width: 360px; padding-left: 6px; border-left: none;">
                  <div class="flex items-center">
                    <label class="whitespace-nowrap" for="loss-location">Loss Location:</label>
                    <input
                      id="loss-location"
                      v-model="lossLocation"
                      type="text"
                      name="lossLocation"
                    />
                  </div>
                </td>
                <td style="width: 144px; padding-left: 7px;">
                  <div class="flex items-center">
                    <label for="city">City:</label>
                    <input id="city" v-model="city" type="text" name="city" />
                  </div>
                </td>
                <td style="width: 78px; padding-left: 7px;">
                  <div class="flex items-center">
                    <label for="state">State:</label>
                    <input id="state" v-model="state" type="text" name="state" />
                  </div>
                </td>
                <td style="width: 142px; padding-left: 7px;">
                  <div class="flex items-center">
                    <label class="whitespace-nowrap" for="postal-code">ZIP Code:</label>
                    <input id="postal-code" v-model="postalCode" type="text" name="postalCode" />
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td colspan="4">
            <table>
              <tr>
                <td style="width: 490px; padding-left: 6px; border-left: none;">
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

    <p style="margin: 0;">
      Please complete the interior and exterior checklists, indicating
      <b>“Yes”</b> if the item/area has damage then use the “Notes” section to describe any pre-existing or non-related damage. Indicate
      <b>“No”</b> if there is no damage to the item/area. Mark
      <b>“N/A”</b> if the area does not exist.
    </p>

    <table class="hic-table exterior">
      <thead>
        <tr>
          <th class="table-header" colspan="6">EXTERIOR</th>
        </tr>
        <tr>
          <th></th>
          <th colspan="3" class="text-center" style="width: 116px;">Inspection Damage</th>
          <th
            rowspan="2"
            style="padding-left: 3px;"
          >Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th style="width: 106px; padding-left: 3px;">Area/Item</th>
          <th class="text-center" style="width: 38px;">Yes</th>
          <th class="text-center" style="width: 38px;">No</th>
          <th class="text-center" style="width: 38px;">N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding-left: 3px;">Roof</td>
          <td class="text-center">
            <input id type="radio" name="roof" />
          </td>
          <td class="text-center">
            <input id type="radio" name="roof" />
          </td>
          <td class="text-center">
            <input id type="radio" name="roof" />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">
            Siding (if “Yes”
            <br />indicate elevation)
          </td>
          <td class="text-center">
            <input id type="radio" name="siding" />
          </td>
          <td class="text-center">
            <input id type="radio" name="siding" />
          </td>
          <td class="text-center">
            <input id type="radio" name="siding" />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Gutters/Downspouts</td>
          <td class="text-center">
            <input id type="radio" name="gutters" />
          </td>
          <td class="text-center align-middle">
            <input id type="radio" name="gutters" />
          </td>
          <td class="text-center">
            <input id type="radio" name="gutters" />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Windows</td>
          <td class="text-center">
            <input id type="radio" name="windows" />
          </td>
          <td class="text-center">
            <input id type="radio" name="windows" />
          </td>
          <td class="text-center">
            <input id type="radio" name="windows" />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Screens</td>
          <td class="text-center">
            <input id type="radio" name="screens" />
          </td>
          <td class="text-center">
            <input id type="radio" name="screens" />
          </td>
          <td class="text-center">
            <input id type="radio" name="screens" />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Doors</td>
          <td class="text-center">
            <input id type="radio" name="doors" />
          </td>
          <td class="text-center">
            <input id type="radio" name="doors" />
          </td>
          <td class="text-center">
            <input id type="radio" name="doors" />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Patio</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Patio Covering</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Garage</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Carport</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Pool Enclosure</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">A/C Unit</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Deck</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Shed/Outbuilding</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Fence</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td style="padding-left: 3px;">Mailbox</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td colspan="5" class="text-center">
            <div class="flex items-center justify-center">
              <input id type="checkbox" name />
              <span style="margin-left: 8px; font-style: italic;">
                Check here if the
                inspection area/item list is
                continued below in “Additional Entries” section.
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 hic-table interior">
      <thead>
        <tr>
          <th class="table-header" colspan="5">INTERIOR</th>
        </tr>
        <tr>
          <th colspan="5">
            <section class="flex items-start w-full italic divide-x divide-dark-600">
              <div
                class="font-normal"
                style="width: 336px; padding-top: 4px; padding-right: 10px; padding-left: 38px;"
              >
                The customer/representative refused inspection of all or part of the interior
                property at this time,
                confirming that there is no interior damage due to the reported loss except as
                specified below (Sign
                below, page 3).
              </div>
              <div
                class="font-normal"
                style=" width: 388px; height: 82px; padding-top: 4px; padding-right: 14px; padding-left: 42px; border-left: 1px solid #000;"
              >
                The customer/representative refused inspection of all or part of the interior
                property at this time,
                confirming that there is
                no new or additional interior damage due to the reported loss since the last
                inspection except as specified
                below (Sign
                below, page 3).
              </div>
            </section>
          </th>
        </tr>
        <tr>
          <th></th>
          <th colspan="3" class="text-center">Inspection Damage</th>
          <th rowspan="2">Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th style="width: 106px; padding-left: 3px;">Area/Item</th>
          <th class="text-center">Yes</th>
          <th class="text-center">No</th>
          <th class="text-center">N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Living Room</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Family Room</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Dining Room</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Kitchen</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Breakfast Area</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Pantry</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Foyer</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Game Room</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Office/Study</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Hall</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td colspan="5" style=" height: 20px; background-color: #f1f1f1;">
            <div class="flex items-center justify-between w-full">
              <span>Insured's/Rep's Initials:</span>
              <span>Claim #:</span>
              <span>Page 1 of 3</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 hic-table interior">
      <thead>
        <tr>
          <th class="table-header" colspan="5">INTERIOR (CONTINUED)</th>
        </tr>
        <tr>
          <th></th>
          <th colspan="3" class="text-center">Inspection Damage</th>
          <th rowspan="2">Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th style="width: 106px; padding-left: 3px;">Area/Item</th>
          <th class="text-center">Yes</th>
          <th class="text-center">No</th>
          <th class="text-center">N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hall Closet</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Utility Room</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Garage</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Attic</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Crawlspace</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Basement</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Master Bedrm</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>MBR Closet</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Bedroom 2</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>BR2 Closet</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Bedroom 3</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>BR3 Closet</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Bedroom 4</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>BR4 Closet</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Master Bath</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Bathroom 2</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Bathroom 3</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td>Contents</td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td>
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td colspan="5" class="text-center">
            <div class="flex items-center justify-center">
              <input id type="checkbox" name />
              <span style="margin-left: 8px; font-style: italic;">
                Check here if the
                inspection area/item list is
                continued below in “Additional Entries” section.
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 hic-table additional-entries">
      <thead>
        <tr>
          <th class="table-header" colspan="7">ADDITIONAL ENTRIES</th>
        </tr>
        <tr>
          <th></th>
          <th colspan="3" class="text-center" style="width: 99px;">
            Inspection
            <br />Damage
          </th>
          <th colspan="2" class="text-center" style="width: 70px;">Location</th>
          <th
            rowspan="2"
            class="text-center"
            style="padding-left: 3px;"
          >Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th style="width: 106px; padding-left: 3px;">Area/Item</th>
          <th class="text-center">Yes</th>
          <th class="text-center">No</th>
          <th class="text-center">N/A</th>
          <th class="text-center">INT</th>
          <th class="text-center">EXT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 19" :key="n">
          <td>
            <input type="text" />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="text" name />
          </td>
        </tr>
        <tr>
          <td colspan="7" style=" height: 20px; background-color: #f1f1f1;">
            <div class="flex items-center justify-between w-full">
              <span>Insured's/Rep's Initials:</span>
              <span>Claim #:</span>
              <span>Page 2 of 3</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 hic-table additional-entries">
      <thead>
        <tr>
          <th class="table-header" colspan="7">ADDITIONAL ENTRIES (CONTINUED)</th>
        </tr>
        <tr>
          <th></th>
          <th colspan="3" class="text-center" style="width: 99px;">
            Inspection
            <br />Damage
          </th>
          <th colspan="2" class="text-center" style="width: 70px;">Location</th>
          <th
            rowspan="2"
            class="text-center"
            style="padding-left: 3px;"
          >Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th style="width: 106px; padding-left: 3px;">Area/Item</th>
          <th class="text-center">Yes</th>
          <th class="text-center">No</th>
          <th class="text-center">N/A</th>
          <th class="text-center">INT</th>
          <th class="text-center">EXT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 14" :key="n">
          <td>
            <input type="text" />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="radio" name />
          </td>
          <td class="text-center">
            <input id type="text" name />
          </td>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 hic-table signatures">
      <thead>
        <tr>
          <th class="table-header" colspan="3">SIGNATURES</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            colspan="3"
          >An indication on this form that an item is or is not damaged, is not an indication or representation as to whether there is insurance coverage for that damage. All claims are subject to the terms of the insurance policy. All coverage determinations will be made by your Allstate Adjuster.</td>
        </tr>
        <tr>
          <td>
            Interior Inspected:
            <input id type="radio" name /> Yes
            <input id type="radio" name />No
            <input id type="radio" name /> Refused
          </td>
          <td colspan="2" style="width: 367px;">
            Exterior Inspected:
            <input id type="radio" name /> Yes
            <input id type="radio" name /> No
            <input id type="radio" name />Refused
          </td>
        </tr>
        <tr>
          <td colspan="2">Insured/Representative Name (Print):</td>
          <td rowspan="2" class="align-top" style="width: 145px;">
            <div class="flex flex-col">
              <label>Date:</label>
              <input type="text" />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">Insured/Representative Signature:</td>
        </tr>
        <tr>
          <td colspan="2">
            Printed Name of Person Completing
            <br />the Form for the Insurer:
          </td>
          <td rowspan="2" class="align-top" style="width: 145px;">
            <div class="flex flex-col">
              <label>Date:</label>
              <input type="text" />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            Signature of Person Completing
            <br />the Form for the Insurer:
          </td>
        </tr>
      </tbody>
    </table>

    <table class="mt-4 hic-table copy-provided-to-customer">
      <thead>
        <tr>
          <th class="table-header">COPY PROVIDED TO CUSTOMER</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="flex items-center justify-between">
              <span>A completed copy of this document was provided to the customer.</span>
              <div>
                <input id type="radio" name />
                <label>email</label>
                <input id type="radio" name />
                <label>print</label>
                <input id type="radio" name />
                <label>both</label>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style=" height: 20px; background-color: #f1f1f1;">
            <div class="flex items-center justify-between w-full">
              <span>Claim #:</span>
              <span>Page 3 of 3</span>
            </div>
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
@import "../../styles/hancock/variables";

$color-blue: rgb(191, 219, 254);
$color-blue-light: #f1f4ff;
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
  width: 724px;
  font-family: Arial, sans-serif;
  font-size: 11px;
}

.hic-table {
  width: 100%;
  padding: 0;
  margin: 0;
  border-collapse: collapse;
  border: 1px solid $color-black;

  .table-header {
    text-align: center;
    background-color: #c6d9f1;
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

.hic-table.exterior,
.hic-table.interior,
.hic-table.additional-entries,
.hic-table.signatures,
.hic-table.copy-provided-to-customer {
  th,
  td {
    border: 1px solid $color-black;
  }

  tbody th:first-child,
  tbody td:first-child {
    padding-left: 3px;
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
  background-color: $color-white;
  outline: none;
}
</style>
