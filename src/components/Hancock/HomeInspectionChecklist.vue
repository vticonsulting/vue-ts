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
                <td class="text-center" style="height: 20px; border-left: none;" colspan="4">
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
                <td style="width: 292px; height: 34px; padding: 0 6px; border-left: none;">
                  <label for="insured-name">Insured Name:</label>
                  <input
                    id="insured-name"
                    v-model="insuredName"
                    style="height: 17px;"
                    type="text"
                    name="insuredName"
                  />
                </td>
                <td style="width: 188px; padding: 0 6px;">
                  <label for="claim-number">Claim #:</label>
                  <input
                    id="claim-number"
                    v-model="claimNumber"
                    style="height: 17px;"
                    type="text"
                    name="claimNumber"
                  />
                </td>
                <td style="width: 102px; padding: 0 7px;">
                  <label for="loss-date">Date of Loss:</label>
                  <input
                    id="loss-date"
                    v-model="lossDate"
                    style="height: 17px;"
                    type="text"
                    name="lossDate"
                  />
                </td>
                <td style="width: 142px; padding: 0 8px;">
                  <label for="inspection-date">Date of Inspection:</label>
                  <input
                    id="inspection-date"
                    v-model="inspectionDate"
                    style="height: 17px;"
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
                <td style="width: 360px; height: 17px; padding-left: 6px; border-left: none;">
                  <div class="flex items-center">
                    <label class="whitespace-nowrap" for="loss-location">Loss Location:</label>
                    <input
                      id="loss-location"
                      v-model="lossLocation"
                      style="height: 17px;"
                      type="text"
                      name="lossLocation"
                    />
                  </div>
                </td>
                <td style="width: 144px; padding: 0 7px;">
                  <div class="flex items-center">
                    <label for="city">City:</label>
                    <input id="city" v-model="city" style="height: 17px;" type="text" name="city" />
                  </div>
                </td>
                <td style="width: 78px; padding: 0 7px;">
                  <div class="flex items-center">
                    <label for="state">State:</label>
                    <input
                      id="state"
                      v-model="state"
                      style="height: 17px;"
                      type="text"
                      name="state"
                    />
                  </div>
                </td>
                <td style="width: 142px; padding: 0 7px;">
                  <div class="flex items-center">
                    <label class="whitespace-nowrap" for="postal-code">ZIP Code:</label>
                    <input
                      id="postal-code"
                      v-model="postalCode"
                      style="height: 17px;"
                      type="text"
                      name="postalCode"
                    />
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
                <td style="width: 490px; height: 34px; padding-left: 6px; border-left: none;">
                  <div class="flex items-start">
                    <label class="whitespace-nowrap" for>Email Address:</label>
                    <input
                      id
                      v-model="emailAddress"
                      style="height: 31px; font-size: 18px;"
                      type="text"
                      name="emailAddress"
                    />
                  </div>
                </td>
                <td style="width: 234px;" class="text-center">
                  <label style="display: block;">Insured on premises for inspection:</label>
                  <input
                    id="insured-on-premises-yes"
                    v-model="insuredOnPremises"
                    type="radio"
                    name="insuredOnPremises"
                    value="yes"
                  />
                  Yes
                  <input
                    id="insured-on-premises-no"
                    v-model="insuredOnPremises"
                    type="radio"
                    name="insuredOnPremises"
                    value="no"
                  />
                  No
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td colspan="4">
            <table>
              <tbody>
                <tr>
                  <td style="height: 33px; padding: 0 7px; border-left: none;">
                    <label
                      for="others-present"
                    >Any others present? (If yes list name and role, e.g., “John Smith, Contractor”):</label>
                    <input
                      id="others-present"
                      v-model="othersPresent"
                      style="height: 17px;"
                      type="text"
                      name="othersPresent"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

    <p style="height: 30px; padding-left: 4px; margin: 2px 0 0; line-height: 1.25;">
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
          <th colspan="3" class="text-center" style="width: 116px; height: 20px;">Inspection Damage</th>
          <th
            rowspan="2"
            style="padding-left: 3px;"
          >Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th style="width: 106px; height: 17px; padding-left: 3px;">Area/Item</th>
          <th class="text-center" style="width: 38px;">Yes</th>
          <th class="text-center" style="width: 38px;">No</th>
          <th class="text-center" style="width: 38px;">N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Roof</td>
          <td class="text-center">
            <input v-model="roof" value="yes" type="radio" name="roof" />
          </td>
          <td class="text-center">
            <input v-model="roof" value="no" type="radio" name="roof" />
          </td>
          <td class="text-center">
            <input v-model="roof" value="n/a" type="radio" name="roof" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="roofNote" type="text" name="roofNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">
            Siding (if “Yes”
            <br />indicate elevation)
          </td>
          <td class="text-center">
            <input v-model="siding" value="yes" type="radio" name="siding" />
          </td>
          <td class="text-center">
            <input v-model="siding" value="no" type="radio" name="siding" />
          </td>
          <td class="text-center">
            <input v-model="siding" value="n/a" type="radio" name="siding" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="sidingNote" type="text" name="sidingNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">
            Gutters/
            <br />Downspouts
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name="gutters" />
          </td>
          <td class="text-center align-middle">
            <input v-model="gutters" value="no" type="radio" name="gutters" />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="n/a" type="radio" name="gutters" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="guttersNote" type="text" name="guttersNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Windows</td>
          <td class="text-center">
            <input v-model="windows" value="yes" type="radio" name="windows" />
          </td>
          <td class="text-center">
            <input v-model="windows" value="no" type="radio" name="windows" />
          </td>
          <td class="text-center">
            <input v-model="windows" value="n/a" type="radio" name="windows" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="windowsNote" type="text" name="windowsNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Screens</td>
          <td class="text-center">
            <input v-model="screens" value="yes" type="radio" name="screens" />
          </td>
          <td class="text-center">
            <input v-model="screens" value="no" type="radio" name="screens" />
          </td>
          <td class="text-center">
            <input v-model="screens" value="n/a" type="radio" name="screens" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="screensNote" type="text" name="screensNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Doors</td>
          <td class="text-center">
            <input v-model="doors" value="yes" type="radio" name="doors" />
          </td>
          <td class="text-center">
            <input v-model="doors" value="no" type="radio" name="doors" />
          </td>
          <td class="text-center">
            <input v-model="doors" value="n/a" type="radio" name="doors" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="doorsNote" type="text" name="doorsNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Patio</td>
          <td class="text-center">
            <input v-model="patio" value="yes" type="radio" name="patio" />
          </td>
          <td class="text-center">
            <input v-model="patio" value="no" type="radio" name="patio" />
          </td>
          <td class="text-center">
            <input v-model="patio" value="n/a" type="radio" name="patio" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="patioNote" type="text" name="patioNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Patio Covering</td>
          <td class="text-center">
            <input v-model="patioCovering" value="yes" type="radio" name="patioCovering" />
          </td>
          <td class="text-center">
            <input v-model="patioCovering" value="no" type="radio" name="patioCovering" />
          </td>
          <td class="text-center">
            <input v-model="patioCovering" value="n/a" type="radio" name="patioCovering" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="patioCoveringNote" type="text" name="patioCoveringNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Garage</td>
          <td class="text-center">
            <input v-model="garageExterior" value="yes" type="radio" name="garageExterior" />
          </td>
          <td class="text-center">
            <input v-model="garageExterior" value="no" type="radio" name="garageExterior" />
          </td>
          <td class="text-center">
            <input v-model="garageExterior" value="n/a" type="radio" name="garageExterior" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="garageExteriorNote" type="text" name="garageExterior" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Carport</td>
          <td class="text-center">
            <input v-model="carport" value="yes" type="radio" name="carport" />
          </td>
          <td class="text-center">
            <input v-model="carport" value="no" type="radio" name="carport" />
          </td>
          <td class="text-center">
            <input v-model="carport" value="n/a" type="radio" name="carport" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="carportNote" type="text" name="carportNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Pool Enclosure</td>
          <td class="text-center">
            <input v-model="poolEnclosure" value="yes" type="radio" name="poolEnclosure" />
          </td>
          <td class="text-center">
            <input v-model="poolEnclosure" value="no" type="radio" name="poolEnclosure" />
          </td>
          <td class="text-center">
            <input v-model="poolEnclosure" value="n/a" type="radio" name="poolEnclosure" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="poolEnclosureNote" type="text" name="poolEnclosureNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">A/C Unit</td>
          <td class="text-center">
            <input v-model="acUnit" value="yes" type="radio" name="acUnit" />
          </td>
          <td class="text-center">
            <input v-model="acUnit" value="no" type="radio" name="acUnit" />
          </td>
          <td class="text-center">
            <input v-model="acUnit" value="n/a" type="radio" name="acUnit" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="acUnitNote" type="text" name="acUnitNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Deck</td>
          <td class="text-center">
            <input v-model="deck" value="yes" type="radio" name="deck" />
          </td>
          <td class="text-center">
            <input v-model="deck" value="no" type="radio" name="deck" />
          </td>
          <td class="text-center">
            <input v-model="deck" value="n/a" type="radio" name="deck" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="deckNote" type="text" name="deckNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Shed/Outbuilding</td>
          <td class="text-center">
            <input v-model="shed" value="yes" type="radio" name="shed" />
          </td>
          <td class="text-center">
            <input v-model="shed" value="no" type="radio" name="shed" />
          </td>
          <td class="text-center">
            <input v-model="shed" value="n/a" type="radio" name="shed" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="shedNote" type="text" name="shedNote" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Fence</td>
          <td class="text-center">
            <input v-model="fence" value="yes" type="radio" name="fence" />
          </td>
          <td class="text-center">
            <input v-model="fence" value="no" type="radio" name="fence" />
          </td>
          <td class="text-center">
            <input v-model="fence" value="n/a" type="radio" name="fence" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="fenceNote" type="text" name="fence" />
          </td>
        </tr>
        <tr>
          <td style="height: 17px; padding-left: 3px;">Mailbox</td>
          <td class="text-center">
            <input v-model="mailbox" value="yes" type="radio" name="mailbox" />
          </td>
          <td class="text-center">
            <input v-model="mailbox" value="no" type="radio" name="mailbox" />
          </td>
          <td class="text-center">
            <input v-model="mailbox" value="n/a" type="radio" name="mailbox" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="mailboxNote" type="text" name="mailboxNote" />
          </td>
        </tr>
        <tr>
          <td colspan="5" class="text-center">
            <div class="flex items-center justify-center">
              <input type="checkbox" name />
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
          <th colspan="5" class="text-left">
            <section class="flex items-start w-full italic">
              <div
                class="font-normal"
                style="width: 336px; padding-top: 4px; padding-right: 10px; padding-left: 38px; line-height: 1.5;"
              >
                The customer/representative refused inspection of all or part of the interior
                property at this time,
                confirming that there is no interior damage due to the reported loss except as
                specified below (Sign
                below, page 3).
              </div>
              <div
                class="font-normal"
                style=" width: 386px; height: 82px; padding-top: 4px; padding-right: 14px; padding-left: 42px; line-height: 1.5; border-left: 1px solid #000;"
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
          <th colspan="3" class="text-center" style="height: 20px;">Inspection Damage</th>
          <th rowspan="2">Notes (Include date and whether repairs were completed; please be concise)</th>
        </tr>
        <tr>
          <th style="width: 106px; height: 17px; padding-left: 3px;">Area/Item</th>
          <th class="text-center">Yes</th>
          <th class="text-center">No</th>
          <th class="text-center">N/A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Living Room</td>
          <td class="text-center">
            <input v-model="livingRoom" value="yes" type="radio" name="livingRoom" />
          </td>
          <td class="text-center">
            <input v-model="livingRoom" value="no" type="radio" name="livingRoom" />
          </td>
          <td class="text-center">
            <input v-model="livingRoom" value="n/a" type="radio" name="livingRoom" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="livingRoomNote" type="text" name="livingRoomNote" />
          </td>
        </tr>
        <tr>
          <td>Family Room</td>
          <td class="text-center">
            <input v-model="familyRoom" value="yes" type="radio" name="familyRoom" />
          </td>
          <td class="text-center">
            <input v-model="familyRoom" value="no" type="radio" name="familyRoom" />
          </td>
          <td class="text-center">
            <input v-model="familyRoom" value="n/a" type="radio" name="familyRoom" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="familyRoomNote" type="text" name="familyRoomNote" />
          </td>
        </tr>
        <tr>
          <td>Dining Room</td>
          <td class="text-center">
            <input v-model="diningRoom" value="yes" type="radio" name="diningRoom" />
          </td>
          <td class="text-center">
            <input v-model="diningRoom" value="no" type="radio" name="diningRoom" />
          </td>
          <td class="text-center">
            <input v-model="diningRoom" value="n/a" type="radio" name="diningRoom" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="diningRoomNote" type="text" name="diningRoomNote" />
          </td>
        </tr>
        <tr>
          <td>Kitchen</td>
          <td class="text-center">
            <input v-model="kitchen" value="yes" type="radio" name="kitchen" />
          </td>
          <td class="text-center">
            <input v-model="kitchen" value="no" type="radio" name="kitchen" />
          </td>
          <td class="text-center">
            <input v-model="kitchen" value="n/a" type="radio" name="kitchen" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="kitchenNote" type="text" name="kitchenNote" />
          </td>
        </tr>
        <tr>
          <td>Breakfast Area</td>
          <td class="text-center">
            <input v-model="breakfastArea" value="yes" type="radio" name="breakfastArea" />
          </td>
          <td class="text-center">
            <input v-model="breakfastArea" value="no" type="radio" name="breakfastArea" />
          </td>
          <td class="text-center">
            <input v-model="breakfastArea" value="n/a" type="radio" name="breakfastArea" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="breakfastAreaNote" type="text" name="breakfastAreaNote" />
          </td>
        </tr>
        <tr>
          <td>Pantry</td>
          <td class="text-center">
            <input v-model="pantry" value="yes" type="radio" name="pantry" />
          </td>
          <td class="text-center">
            <input v-model="pantry" value="no" type="radio" name="pantry" />
          </td>
          <td class="text-center">
            <input v-model="pantry" value="n/a" type="radio" name="pantry" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="pantryNote" type="text" name="pantryNote" />
          </td>
        </tr>
        <tr>
          <td>Foyer</td>
          <td class="text-center">
            <input v-model="foyer" value="yes" type="radio" name="foyer" />
          </td>
          <td class="text-center">
            <input v-model="foyer" value="no" type="radio" name="foyer" />
          </td>
          <td class="text-center">
            <input v-model="foyer" value="n/a" type="radio" name="foyer" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="foyerNote" type="text" name="foyerNote" />
          </td>
        </tr>
        <tr>
          <td>Game Room</td>
          <td class="text-center">
            <input v-model="gameRoom" value="yes" type="radio" name="gameRoom" />
          </td>
          <td class="text-center">
            <input v-model="gameRoom" value="no" type="radio" name="gameRoom" />
          </td>
          <td class="text-center">
            <input v-model="gameRoom" value="n/a" type="radio" name="gameRoom" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="gameRoomNote" type="text" name="gameRoomNote" />
          </td>
        </tr>
        <tr>
          <td>Office/Study</td>
          <td class="text-center">
            <input v-model="office" value="yes" type="radio" name="office" />
          </td>
          <td class="text-center">
            <input v-model="office" value="no" type="radio" name="office" />
          </td>
          <td class="text-center">
            <input v-model="office" value="n/a" type="radio" name="office" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="officeNote" type="text" name="officeNote" />
          </td>
        </tr>
        <tr>
          <td>Hall</td>
          <td class="text-center">
            <input v-model="hall" value="yes" type="radio" name="hall" />
          </td>
          <td class="text-center">
            <input v-model="hall" value="no" type="radio" name="hall" />
          </td>
          <td class="text-center">
            <input v-model="hall" value="n/a" type="radio" name="hall" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="hallNote" type="text" name="hallNote" />
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
            <input v-model="hallCloset" value="yes" type="radio" name="hallCloset" />
          </td>
          <td class="text-center">
            <input v-model="hallCloset" value="no" type="radio" name="hallCloset" />
          </td>
          <td class="text-center">
            <input v-model="hallCloset" value="n/a" type="radio" name="hallCloset" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="hallClosetNote" type="text" name="hallClosetNote" />
          </td>
        </tr>
        <tr>
          <td>Utility Room</td>
          <td class="text-center">
            <input v-model="utilityRoom" value="yes" type="radio" name="utilityRoom" />
          </td>
          <td class="text-center">
            <input v-model="utilityRoom" value="no" type="radio" name="utilityRoom" />
          </td>
          <td class="text-center">
            <input v-model="utilityRoom" value="n/a" type="radio" name="utilityRoom" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="utilityRoomNote" type="text" name="utilityRoomNote" />
          </td>
        </tr>
        <tr>
          <td>Garage</td>
          <td class="text-center">
            <input v-model="garageInterior" value="yes" type="radio" name="garageInterior" />
          </td>
          <td class="text-center">
            <input v-model="garageInterior" value="no" type="radio" name="garageInterior" />
          </td>
          <td class="text-center">
            <input v-model="garageInterior" value="n/a" type="radio" name="garageInterior" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="garageInteriorNote" type="text" name="garageInteriorNote" />
          </td>
        </tr>
        <tr>
          <td>Attic</td>
          <td class="text-center">
            <input v-model="attic" value="yes" type="radio" name="attic" />
          </td>
          <td class="text-center">
            <input v-model="attic" value="no" type="radio" name="attic" />
          </td>
          <td class="text-center">
            <input v-model="attic" value="n/a" type="radio" name="attic" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="atticNote" type="text" name="atticNote" />
          </td>
        </tr>
        <tr>
          <td>Crawlspace</td>
          <td class="text-center">
            <input v-model="crawlspace" value="yes" type="radio" name="crawlspace" />
          </td>
          <td class="text-center">
            <input v-model="crawlspace" value="no" type="radio" name="crawlspace" />
          </td>
          <td class="text-center">
            <input v-model="crawlspace" value="n/a" type="radio" name="crawlspace" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="crawlspaceNote" type="text" name="crawlspaceNote" />
          </td>
        </tr>
        <tr>
          <td>Basement</td>
          <td class="text-center">
            <input v-model="basement" value="yes" type="radio" name="basement" />
          </td>
          <td class="text-center">
            <input v-model="basement" value="no" type="radio" name="basement" />
          </td>
          <td class="text-center">
            <input v-model="basement" value="n/a" type="radio" name="basement" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="basementNote" type="text" name="basementNote" />
          </td>
        </tr>
        <tr>
          <td>Master Bedrm</td>
          <td class="text-center">
            <input v-model="masterBedroom" value="yes" type="radio" name="masterBedroom" />
          </td>
          <td class="text-center">
            <input v-model="masterBedroom" value="no" type="radio" name="masterBedroom" />
          </td>
          <td class="text-center">
            <input v-model="masterBedroom" value="n/a" type="radio" name="masterBedroom" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="masterBedroomNote" type="text" name="masterBedroomNote" />
          </td>
        </tr>
        <tr>
          <td>MBR Closet</td>
          <td class="text-center">
            <input
              v-model="masterBedroomCloset"
              value="yes"
              type="radio"
              name="masterBedroomCloset"
            />
          </td>
          <td class="text-center">
            <input v-model="masterBedroomCloset" value="no" type="radio" name="masterBedroomCloset" />
          </td>
          <td class="text-center">
            <input
              v-model="masterBedroomCloset"
              value="n/a"
              type="radio"
              name="masterBedroomCloset"
            />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="masterBedroomClosetNote" type="text" name="masterBedroomClosetNote" />
          </td>
        </tr>
        <tr>
          <td>Bedroom 2</td>
          <td class="text-center">
            <input v-model="bedroom2" value="yes" type="radio" name="bedroom2" />
          </td>
          <td class="text-center">
            <input v-model="bedroom2" value="no" type="radio" name="bedroom2" />
          </td>
          <td class="text-center">
            <input v-model="bedroom2" value="n/a" type="radio" name="bedroom2" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="bedroom2Note" type="text" name="bedroom2Note" />
          </td>
        </tr>
        <tr>
          <td>BR2 Closet</td>
          <td class="text-center">
            <input v-model="bedroom2Closet" value="yes" type="radio" name="bedroom2Closet" />
          </td>
          <td class="text-center">
            <input v-model="bedroom2Closet" value="no" type="radio" name="bedroom2Closet" />
          </td>
          <td class="text-center">
            <input v-model="bedroom2Closet" value="n/a" type="radio" name="bedroom2Closet" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="bedroom2ClosetNote" type="text" name="bedroom2ClosetNote" />
          </td>
        </tr>
        <tr>
          <td>Bedroom 3</td>
          <td class="text-center">
            <input v-model="bedroom3" value="yes" type="radio" name="bedroom3" />
          </td>
          <td class="text-center">
            <input v-model="bedroom3" value="no" type="radio" name="bedroom3" />
          </td>
          <td class="text-center">
            <input v-model="bedroom3" value="n/a" type="radio" name="bedroom3" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="bedroom3Note" type="text" name="bedroom3Note" />
          </td>
        </tr>
        <tr>
          <td>BR3 Closet</td>
          <td class="text-center">
            <input v-model="bedroom3Closet" value="yes" type="radio" name="bedroom3Closet" />
          </td>
          <td class="text-center">
            <input v-model="bedroom3Closet" value="no" type="radio" name="bedroom3Closet" />
          </td>
          <td class="text-center">
            <input v-model="bedroom3Closet" value="n/a" type="radio" name="bedroom3Closet" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="bedroom3ClosetNote" type="text" name="bedroom3ClosetNote" />
          </td>
        </tr>
        <tr>
          <td>Bedroom 4</td>
          <td class="text-center">
            <input v-model="bedroom4" value="yes" type="radio" name="bedroom4" />
          </td>
          <td class="text-center">
            <input v-model="bedroom4" value="no" type="radio" name="bedroom4" />
          </td>
          <td class="text-center">
            <input v-model="bedroom4" value="n/a" type="radio" name="bedroom4" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="bedroom4Note" type="text" name="bedroom4Note" />
          </td>
        </tr>
        <tr>
          <td>BR4 Closet</td>
          <td class="text-center">
            <input v-model="bedroom4Closet" value="yes" type="radio" name="bedroom4Closet" />
          </td>
          <td class="text-center">
            <input v-model="bedroom4Closet" value="no" type="radio" name="bedroom4Closet" />
          </td>
          <td class="text-center">
            <input v-model="bedroom4Closet" value="n/a" type="radio" name="bedroom4Closet" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="bedroom4ClosetNote" type="text" name="bedroom4ClosetNote" />
          </td>
        </tr>
        <tr>
          <td>Master Bath</td>
          <td class="text-center">
            <input v-model="masterBathroom" value="yes" type="radio" name="masterBathroom" />
          </td>
          <td class="text-center">
            <input v-model="masterBathroom" value="no" type="radio" name="masterBathroom" />
          </td>
          <td class="text-center">
            <input v-model="masterBathroom" value="n/a" type="radio" name="masterBathroom" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="masterBathroomNote" type="text" name="masterBathroomNote" />
          </td>
        </tr>
        <tr>
          <td>Bathroom 2</td>
          <td class="text-center">
            <input v-model="bathroom2" value="yes" type="radio" name="bathroom2" />
          </td>
          <td class="text-center">
            <input v-model="bathroom2" value="no" type="radio" name="bathroom2" />
          </td>
          <td class="text-center">
            <input v-model="bathroom2" value="yes" type="radio" name="bathroom2" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="bathroom2Note" type="text" name="bathroom2Note" />
          </td>
        </tr>
        <tr>
          <td>Bathroom 3</td>
          <td class="text-center">
            <input v-model="bathroom3" value="yes" type="radio" name="bathroom3" />
          </td>
          <td class="text-center">
            <input v-model="bathroom3" value="no" type="radio" name="bathroom3" />
          </td>
          <td class="text-center">
            <input v-model="bathroom3" value="n/a" type="radio" name="bathroom3" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="bathroom3Note" type="text" name="bathroom3Note" />
          </td>
        </tr>
        <tr>
          <td>Contents</td>
          <td class="text-center">
            <input v-model="contents" value="yes" type="radio" name="contents" />
          </td>
          <td class="text-center">
            <input v-model="contents" value="no" type="radio" name="contents" />
          </td>
          <td class="text-center">
            <input v-model="contents" value="n/a" type="radio" name="contents" />
          </td>
          <td style="height: 17px; padding: 0 6px;">
            <input v-model="contentsNote" type="text" name="contentsNote" />
          </td>
        </tr>
        <tr>
          <td colspan="5" class="text-center">
            <div class="flex items-center justify-center">
              <input type="checkbox" name />
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
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td style="padding: 0 6px;" class="text-center">
            <input v-model="gutterNote" type="text" name />
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

    <div class="pagebreak"></div>

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
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td class="text-center">
            <input v-model="gutters" value="yes" type="radio" name />
          </td>
          <td style="padding: 0 6px;" class="text-center">
            <input v-model="gutterNote" type="text" name />
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
          <td style="height: 19px;">
            <div class="flex items-center">
              <span>Interior Inspected:</span>
              <input
                v-model="interiorInspected"
                value="yes"
                style="margin-left: 42px;"
                type="radio"
                name="interiorInspected"
              />
              <label style="margin-left: 3px;">Yes</label>
              <input
                v-model="interiorInspected"
                value="no"
                style="margin-left: 27px;"
                type="radio"
                name="interiorInspected"
              />
              <label style="margin-left: 3px;">No</label>
              <input
                v-model="interiorInspected"
                value="refused"
                style="margin-left: 24px;"
                type="radio"
                name="interiorInspected"
              />
              <label style="margin-left: 2px;">Refused</label>
            </div>
          </td>
          <td colspan="2" style="width: 367px; padding-left: 3px;">
            <div class="flex items-center">
              <span style="margin-left: 3px;">Exterior Inspected:</span>
              <div class="flex items-center">
                <input
                  v-model="exteriorInspected"
                  value="yes"
                  style="margin-left: 39px;"
                  type="radio"
                  name="exteriorInspected"
                />
                <label style="margin-left: 2px;">Yes</label>
                <input
                  v-model="exteriorInspected"
                  value="no"
                  style="margin-left: 32px;"
                  type="radio"
                  name="exteriorInspected"
                />
                <label style="margin-left: 3px;">No</label>
                <input
                  v-model="exteriorInspected"
                  value="refused"
                  style="margin-left: 28px;"
                  type="radio"
                  name="exteriorInspected"
                />
                <label style="margin-left: 3px;">Refused</label>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">Insured/Representative Name (Print):</td>
          <td rowspan="2" class="align-top" style="width: 145px; padding: 0 6px;">
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
          <td rowspan="2" class="align-top" style="width: 145px; padding: 0 6px;">
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
          <td style="height: 19px; padding-right: 54px;">
            <div class="flex items-center justify-between">
              <span>A completed copy of this document was provided to the customer via:</span>
              <div class="flex items-center">
                <input
                  v-model="customerCopyProvided"
                  value="email"
                  type="radio"
                  name="customerCopyProvided"
                />
                <label style="margin-left: 2px;">email</label>
                <input
                  v-model="customerCopyProvided"
                  value="print"
                  style="margin-left: 12px;"
                  type="radio"
                  name="customerCopyProvided"
                />
                <label style="margin-left: 3px;">print</label>
                <input
                  v-model="customerCopyProvided"
                  value="both"
                  style="margin-left: 10px;"
                  type="radio"
                  name="customerCopyProvided"
                />
                <label style="margin-left: 3px;">both</label>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            class="font-bold"
            style="height: 19px; padding-right: 36px; background-color: #f1f1f1;"
          >
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

<script>
import { reactive, defineComponent, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      inspectionTypeInitial: '',
      inspectionTypeSubsequent: '',
      insuredName: 'Victor Tolbert',
      claimNumber: '5456443XD',
      lossDate: '11/4/2020',
      inspectionDate: '01/15/2021',
      lossLocation: '1547 Boulder Walk Drive',
      city: 'Atlanta',
      state: 'GA',
      postalCode: '30316',
      emailAddress: 'victor.tolbert@gmail.com',
      insuredOnPremises: '',
      othersPresent: '',
      roof: '',
      roofNote: '',
      siding: 'yes',
      sidingNote: 'This is a note for siding',
      gutters: 'no',
      guttersNote: '',
      windows: '',
      windowsNote: '',
      screens: '',
      screensNote: '',
      doors: '',
      doorsNote: '',
      patio: '',
      patioNote: '',
      patioCovering: '',
      patioCoveringNote: '',
      garageExterior: '',
      garageExteriorNote: '',
      carport: '',
      carportNote: '',
      poolEnclosure: '',
      poolEnclosureNote: '',
      acUnit: '',
      acUnitNote: '',
      deck: '',
      deckNote: '',
      shed: '',
      shedNote: '',
      fence: '',
      fenceNote: '',
      mailbox: '',
      mailboxNote: '',
      livingRoom: '',
      livingRoomNote: '',
      familyRoom: '',
      familyRoomNote: '',
      diningRoom: '',
      diningRoomNote: '',
      kitchen: '',
      kitchenNote: '',
      breakfastArea: '',
      breakfastAreaNote: '',
      pantry: '',
      pantryNote: '',
      foyer: '',
      foyerNote: '',
      gameRoom: '',
      gameRoomNote: '',
      office: '',
      officeNote: '',
      hall: '',
      hallNote: '',
      hallCloset: '',
      hallClosetNote: '',
      utilityRoom: '',
      utilityRoomNote: '',
      garageInterior: '',
      garageInteriorNote: '',
      attic: '',
      atticNote: '',
      crawlspace: '',
      crawlspaceNote: '',
      basement: '',
      basementNote: '',
      masterBedroom: '',
      masterBedroomNote: '',
      masterBedroomCloset: '',
      masterBedroomClosetNote: '',
      bedroom2: '',
      bedroom2Note: '',
      bedroom2Closet: '',
      bedroom2ClosetNote: '',
      bedroom3: '',
      bedroom3Note: '',
      bedroom3Closet: '',
      bedroom3ClosetNote: '',
      bedroom4: '',
      bedroom4Note: '',
      bedroom4Closet: '',
      bedroom4ClosetNote: '',
      masterBathroom: '',
      masterBathroomNote: '',
      bathroom2: '',
      bathroom2Note: '',
      bathroom3: '',
      bathroom3Note: '',
      contents: '',
      contentsNote: '',
      interiorInspected: '',
      exteriorInspected: '',
      customerCopyProvided: '',
    })

    return {
      ...toRefs(state),
    }
  },
})

</script>

<style lang="scss">
@import "./variables";

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

@media print {
  .pagebreak {
    page-break-before: always;
  } /* page-break-after works, as well */
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
    height: 17px;
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
  margin-top: 1px;
  margin-bottom: 1px;
  font-family: monospace;
  font-size: 0.8rem;
  line-height: 1;
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
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.italic {
  font-style: italic;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.align-middle {
  vertical-align: middle;
}
.w-full {
  width: 100%;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.borderless {
  border: none;
}

.font-normal {
  font-weight: 400;
}
.font-bold {
  font-weight: 600;
}
.mt-4 {
  margin-top: 1rem;
}
</style>
