<template>
  <form id="claims-form" action="/Claims" class="wrapper small form" method="post" no-validate>
    <div class="form-section">
      <div class="w50">
        <div>
          <label class="required" for="CompanyName" aria-required="true">Carrier</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="CompanyName"
            data-valmsg-replace="true"
          ></span>
          <div
            id="CompanyName"
            class="dd-container"
            tabindex="0"
            autofocus="autofocus"
            style="width: 100%;"
          >
            <div class="dd-select" style="width: 100%; background: rgb(255, 255, 255);">
              <input
                class="dd-selected-value required"
                type="hidden"
                name="CompanyName"
                data-val-required="The Carrier field is required."
                data-val="true"
                value
                aria-required="true"
              />
              <a class="dd-selected">
                <label class="dd-selected-text">
                  Select
                  Carrier
                </label>
              </a>
              <span class="dd-pointer dd-pointer-down"></span>
            </div>Carrier List
          </div>
        </div>
        <div class="other-company-name" style="display: none;">
          <label
            class="required"
            for="OtherCompanyName"
            aria-required="true"
          >Please enter carrier name</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="OtherCompanyName"
            data-valmsg-replace="true"
          ></span>
          <input
            id="OtherCompanyName"
            class="required"
            data-val="true"
            data-val-maxlength="The Please enter carrier name cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            maxlength="50"
            name="OtherCompanyName"
            placeholder="Type other company name"
            type="text"
            value
            aria-required="true"
          />
        </div>
        <div>
          <label class="required" for="ClaimNumber" aria-required="true">Claim Number</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="ClaimNumber"
            data-valmsg-replace="true"
          ></span>
          <input
            id="ClaimNumber"
            class="required"
            data-val="true"
            data-val-maxlength="The Claim Number cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            data-val-required="The Claim Number field is required."
            maxlength="128"
            name="ClaimNumber"
            placeholder="Type claim number"
            type="text"
            value
            aria-required="true"
          />
        </div>
        <div>
          <label class="required" for="InsuredLastName" aria-required="true">Insured's Last Name</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="InsuredLastName"
            data-valmsg-replace="true"
          ></span>
          <input
            id="InsuredLastName"
            class="required"
            data-val="true"
            data-val-maxlength="The Insured's Last Name cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            data-val-required="The Insured's Last Name field is required."
            maxlength="128"
            name="InsuredLastName"
            placeholder="Type insured last name"
            type="text"
            value
            aria-required="true"
          />
        </div>
        <div>
          <label class="required" for="Phone" aria-required="true">Insured's Phone Number</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="Phone"
            data-valmsg-replace="true"
          ></span>
          <input
            id="Phone"
            class="mask_phone"
            data-val="true"
            data-val-maxlength="The Insured's Phone Number cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            data-val-regex="Should be a valid phone number"
            data-val-regex-pattern="^[^_]*$"
            name="Phone"
            placeholder="Type phone"
            type="text"
            value
          />
        </div>
      </div>
      <div class="w50">
        <div>
          <label class="required" for="StreetAddress" aria-required="true">Street Address</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="StreetAddress"
            data-valmsg-replace="true"
          ></span>
          <input
            id="StreetAddress"
            class="required"
            data-val="true"
            data-val-maxlength="The Street Address cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            data-val-required="The Street Address field is required."
            maxlength="50"
            name="StreetAddress"
            placeholder="Type street address"
            type="text"
            value
            aria-required="true"
          />
        </div>
        <div>
          <label for="Suite">Suite:</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="Suite"
            data-valmsg-replace="true"
          ></span>
          <input
            id="Suite"
            class
            data-val="true"
            data-val-maxlength="The Suite: cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            maxlength="50"
            name="Suite"
            placeholder="Type suite"
            type="text"
            value
          />
        </div>
        <div>
          <label class="required" for="City" aria-required="true">City</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="City"
            data-valmsg-replace="true"
          ></span>
          <input
            id="City"
            class="required"
            data-val="true"
            data-val-maxlength="The City cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            data-val-required="The City field is required."
            maxlength="50"
            name="City"
            placeholder="Type city"
            type="text"
            value
            aria-required="true"
          />
        </div>
        <div>
          <label class="required" for="StateID" aria-required="true">State</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="StateID"
            data-valmsg-replace="true"
          ></span>
          <div
            id="StateID"
            class="dd-container"
            tabindex="0"
            autofocus="autofocus"
            style="width: 100%;"
          >
            <div class="dd-select" style="width: 100%; background: rgb(255, 255, 255);">
              <input
                class="dd-selected-value required"
                type="hidden"
                name="StateID"
                data-val-required="The State field is required."
                data-val="true"
                value
                aria-required="true"
              />
              <a class="dd-selected">
                <label class="dd-selected-text">Select State</label>
              </a>
              <span class="dd-pointer dd-pointer-down"></span>
            </div>
            <ul class="dd-options dd-click-off-close" style="width: 100%;">
              <li>
                <a class="dd-option dd-option-selected">
                  <label class="dd-option-text">Select State</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="1" />
                  <label class="dd-option-text">AL</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="2" />
                  <label class="dd-option-text">AK</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="3" />
                  <label class="dd-option-text">AZ</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="4" />
                  <label class="dd-option-text">AR</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="5" />
                  <label class="dd-option-text">CA</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="6" />
                  <label class="dd-option-text">CO</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="7" />
                  <label class="dd-option-text">CT</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="8" />
                  <label class="dd-option-text">DE</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="9" />
                  <label class="dd-option-text">DC</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="10" />
                  <label class="dd-option-text">FL</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="11" />
                  <label class="dd-option-text">GA</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="12" />
                  <label class="dd-option-text">HI</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="13" />
                  <label class="dd-option-text">ID</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="14" />
                  <label class="dd-option-text">IL</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="15" />
                  <label class="dd-option-text">IN</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="16" />
                  <label class="dd-option-text">IA</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="17" />
                  <label class="dd-option-text">KS</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="18" />
                  <label class="dd-option-text">KY</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="19" />
                  <label class="dd-option-text">LA</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="20" />
                  <label class="dd-option-text">ME</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="21" />
                  <label class="dd-option-text">MD</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="22" />
                  <label class="dd-option-text">MA</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="23" />
                  <label class="dd-option-text">MI</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="24" />
                  <label class="dd-option-text">MN</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="25" />
                  <label class="dd-option-text">MS</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="26" />
                  <label class="dd-option-text">MO</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="27" />
                  <label class="dd-option-text">MT</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="28" />
                  <label class="dd-option-text">NE</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="29" />
                  <label class="dd-option-text">NV</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="30" />
                  <label class="dd-option-text">NH</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="31" />
                  <label class="dd-option-text">NJ</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="32" />
                  <label class="dd-option-text">NM</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="33" />
                  <label class="dd-option-text">NY</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="34" />
                  <label class="dd-option-text">NC</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="35" />
                  <label class="dd-option-text">ND</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="36" />
                  <label class="dd-option-text">OH</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="37" />
                  <label class="dd-option-text">OK</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="38" />
                  <label class="dd-option-text">OR</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="39" />
                  <label class="dd-option-text">PA</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="40" />
                  <label class="dd-option-text">RI</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="41" />
                  <label class="dd-option-text">SC</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="42" />
                  <label class="dd-option-text">SD</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="43" />
                  <label class="dd-option-text">TN</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="44" />
                  <label class="dd-option-text">TX</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="45" />
                  <label class="dd-option-text">UT</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="46" />
                  <label class="dd-option-text">VT</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="47" />
                  <label class="dd-option-text">VA</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="48" />
                  <label class="dd-option-text">WA</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="49" />
                  <label class="dd-option-text">WV</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="50" />
                  <label class="dd-option-text">WI</label>
                </a>
              </li>
              <li>
                <a class="dd-option">
                  <input class="dd-option-value" type="hidden" value="51" />
                  <label class="dd-option-text">WY</label>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <label class="required" for="PostalCode" aria-required="true">Zip</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="PostalCode"
            data-valmsg-replace="true"
          ></span>
          <input
            id="PostalCode"
            class="required"
            data-val="true"
            data-val-maxlength="The Zip cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            data-val-regex="Invalid Zip"
            data-val-regex-pattern="^\d{5}(-\d{4})?$"
            data-val-required="The Zip field is required."
            maxlength="50"
            name="PostalCode"
            placeholder="Type zip code"
            type="text"
            value
            aria-required="true"
          />
        </div>
        <div id="isAreaCoveredDiv" style="display: none;">
          <span id="isAreaCoveredLabel" class="note"></span>
        </div>
      </div>
    </div>
    <div id="serviceTypeConfigSection" class="form-section">
      <div class="w50">
        <div>
          <label class="required" for="SelectedServiceTypeIds" aria-required="true">Service Type(s)</label>
          <div id="loading-service-gif-error" style="display: none; margin-top: 25px;">
            <div style="width: 100%; text-align: center;">
              <span style="font-style: italic; color: #f11;">
                Error retrieving services. Please try
                again.
              </span>
            </div>
          </div>
          <span
            class="field-validation-valid error"
            data-valmsg-for="SelectedServiceTypeIds"
            data-valmsg-replace="true"
          ></span>

          <div id="serviceTypesWrapper" style="display: none;">
            <div
              id="ServiceTypeListView"
              data-role="listview"
              class="k-widget k-listview"
              role="listbox"
            ></div>

            <input id="SelectedServiceTypeIds" name="SelectedServiceTypeIds" type="hidden" value />
          </div>
          <div id="loading-service-gif" style="display: none; margin-top: 10px;">
            <div style="width: 100%; text-align: center;">Loading...</div>
            <div style="width: 100%; text-align: center;">
              <span style="font-style: italic;">Loading Service Types</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w50">
        <label class="required" for="CatastrophicEvent" aria-required="true">Catastrophe Event</label>
        <span
          class="field-validation-valid error"
          data-valmsg-for="CatastrophicEvent"
          data-valmsg-replace="true"
        ></span>
        <span class="sub-header">Is this claim due to a catastrophe weather event?</span>
        <div class="radio-options horizontal-align">
          <input
            id="claims-form-catastrophicevent-yes"
            name="CatastrophicEvent"
            type="radio"
            value="true"
          />
          <label for="claims-form-catastrophicevent-yes" class="radio-option-label">Yes</label>
          <input
            id="claims-form-catastrophicevent-no"
            checked="True"
            name="CatastrophicEvent"
            type="radio"
            value="false"
          />
          <label for="claims-form-catastrophicevent-no" class="radio-option-label">No</label>
          <input
            id="claims-form-catastrophicevent-unknown"
            name="CatastrophicEvent"
            type="radio"
            value
          />
          <label for="claims-form-catastrophicevent-unknown" class="radio-option-label">Unknown</label>
        </div>
        <label class="required" for="IsReinspect" aria-required="true">Re-Inspect</label>
        <span
          class="field-validation-valid error"
          data-valmsg-for="IsReinspect"
          data-valmsg-replace="true"
        ></span>
        <span class="sub-header">Is this claim a re-inspect?</span>
        <div class="radio-options horizontal-align">
          <input
            id="claims-form-reinspect-yes"
            data-val="true"
            data-val-required="The Re-Inspect field is required."
            name="IsReinspect"
            type="radio"
            value="true"
          />
          <label for="claims-form-reinspect-yes" class="radio-option-label">Yes</label>
          <input
            id="claims-form-reinspect-no"
            checked="True"
            name="IsReinspect"
            type="radio"
            value="false"
          />
          <label for="claims-form-reinspect-no" class="radio-option-label">No</label>
        </div>
        <div class="appointment-date-wrapper">
          <label class="required" for="AppointmentDate" aria-required="true">Appointment Date</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="AppointmentDate"
            data-valmsg-replace="true"
          ></span>
          <span class="k-widget k-datepicker k-header required" aria-required="true" style>
            <span class="k-picker-wrap k-state-default">
              <input
                id="AppointmentDate"
                class="required k-input"
                data-val="true"
                data-val-date="The field Appointment Date must be a date."
                name="AppointmentDate"
                placeholder="Choose appointment date"
                type="text"
                data-role="datepicker"
                role="combobox"
                aria-expanded="false"
                aria-owns="AppointmentDate_dateview"
                aria-disabled="false"
                readonly="readonly"
                aria-required="true"
                style="width: 100%;"
              />
              <span
                unselectable="on"
                class="k-select"
                role="button"
                aria-controls="AppointmentDate_dateview"
              >
                <span unselectable="on" class="k-icon k-i-calendar">select</span>
              </span>
            </span>
          </span>
        </div>
        <div
          class="today-warning"
          style="display: none;"
        >Please contact the office directly at 1-770-569-1669 for same day requests.</div>
        <div class="appointment-date-wrapper">
          <label class="required" for="StartTime" aria-required="true">Start Time</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="StartTime"
            data-valmsg-replace="true"
          ></span>
          <span class="k-widget k-timepicker k-header required" aria-required="true" style>
            <span class="k-picker-wrap k-state-default">
              <input
                id="StartTime"
                class="required k-input"
                name="StartTime"
                placeholder="Choose start time"
                type="text"
                data-role="timepicker"
                role="combobox"
                aria-expanded="false"
                aria-owns="StartTime_timeview"
                aria-disabled="false"
                readonly="readonly"
                aria-required="true"
                style="width: 100%;"
              />
              <span
                unselectable="on"
                class="k-select"
                role="button"
                aria-controls="StartTime_timeview"
              >
                <span unselectable="on" class="k-icon k-i-clock">select</span>
              </span>
            </span>
          </span>
        </div>
        <div class="appointment-date-wrapper">
          <label class="required" for="EndTime" aria-required="true">End Time</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="EndTime"
            data-valmsg-replace="true"
          ></span>
          <span class="k-widget k-timepicker k-header required" aria-required="true" style>
            <span class="k-picker-wrap k-state-default">
              <input
                id="EndTime"
                class="required k-input"
                name="EndTime"
                placeholder="Choose end time"
                type="text"
                data-role="timepicker"
                role="combobox"
                aria-expanded="false"
                aria-owns="EndTime_timeview"
                aria-disabled="false"
                readonly="readonly"
                aria-required="true"
                style="width: 100%;"
              />
              <span
                unselectable="on"
                class="k-select"
                role="button"
                aria-controls="EndTime_timeview"
              >
                <span unselectable="on" class="k-icon k-i-clock">select</span>
              </span>
            </span>
          </span>
        </div>

        <div id="inspectionTypesWrapper" style="display: none;">
          <label class="required" for="InspectionTypes" aria-required="true">Inspection Type</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="InspectionTypes"
            data-valmsg-replace="true"
          ></span>
          <span class="inspectionTypeError error field-validation-error">
            <span>You should select at least one inspection type to save the project.</span>
          </span>
          <div class>
            <span class="sub-header">What type of inspection is this?</span>
            <div class="checkbox-list-item">
              <input
                id="InspectionTypes_0__IsSelected"
                data-val="true"
                data-val-required="The IsSelected field is required."
                name="InspectionTypes[0].IsSelected"
                type="checkbox"
                value="true"
              />
              <input name="InspectionTypes[0].IsSelected" type="hidden" value="false" />
              <label class="checkbox-list-item-label">Wind / Hail</label>
            </div>
            <div class="checkbox-list-item">
              <input
                id="InspectionTypes_1__IsSelected"
                data-val="true"
                data-val-required="The IsSelected field is required."
                name="InspectionTypes[1].IsSelected"
                type="checkbox"
                value="true"
              />
              <input name="InspectionTypes[1].IsSelected" type="hidden" value="false" />
              <label class="checkbox-list-item-label">Winter Peril</label>
            </div>
            <div class="checkbox-list-item">
              <input
                id="InspectionTypes_2__IsSelected"
                data-val="true"
                data-val-required="The IsSelected field is required."
                name="InspectionTypes[2].IsSelected"
                type="checkbox"
                value="true"
              />
              <input name="InspectionTypes[2].IsSelected" type="hidden" value="false" />
              <label class="checkbox-list-item-label">Driving rain / leak detection</label>
            </div>
            <div class="checkbox-list-item">
              <input
                id="InspectionTypes_3__IsSelected"
                data-val="true"
                data-val-required="The IsSelected field is required."
                name="InspectionTypes[3].IsSelected"
                type="checkbox"
                value="true"
              />
              <input name="InspectionTypes[3].IsSelected" type="hidden" value="false" />
              <label class="checkbox-list-item-label">Other</label>
              <input
                id="InspectionTypes_3__OtherDescription"
                class="otherInspectionInput"
                name="InspectionTypes[3].OtherDescription"
                readonly
                style="width: 100%;"
                type="text"
                value
              />
              <div id="otherInspectionDescriptionRequired" class style="display: none;">
                <span
                  class="field-validation-error"
                  data-valmsg-for="Other Description"
                  data-valmsg-replace="true"
                >
                  <span class>The Other Description field is required.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-section">
      <div class="w50">
        <label
          class="block-header"
          for="Adjuster_Contact_Information:"
        >Adjuster Contact Information:</label>
        <div>
          <span class="sub-header">I am an independent adjuster</span>
          <span
            class="field-validation-valid error"
            data-valmsg-for="IsIndependentAdjuster"
            data-valmsg-replace="true"
          ></span>
          <div class="radio-options horizontal-align">
            <input
              id="claims-form-isindepentdentadjuster-yes"
              data-val="true"
              data-val-required="The I am an independent adjuster field is required."
              name="IsIndependentAdjuster"
              type="radio"
              value="True"
            />
            <label for="claims-form-isindepentdentadjuster-yes" class="radio-option-label">Yes</label>
            <input
              id="claims-form-isindepentdentadjuster-no"
              checked="checked"
              name="IsIndependentAdjuster"
              type="radio"
              value="False"
            />
            <label for="claims-form-isindepentdentadjuster-no" class="radio-option-label">No</label>
          </div>
        </div>
        <div>
          <label class="required second-level-label" for="AdjusterName" aria-required="true">Name</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="AdjusterName"
            data-valmsg-replace="true"
          ></span>
          <input
            id="AdjusterName"
            class="required"
            maxlength="128"
            name="AdjusterName"
            placeholder="Type adjuster name"
            type="text"
            value
            aria-required="true"
          />
        </div>
        <div>
          <label class="required second-level-label" for="AdjusterEmail" aria-required="true">Email</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="AdjusterEmail"
            data-valmsg-replace="true"
          ></span>
          <input
            id="AdjusterEmail"
            class="required"
            data-val="true"
            data-val-email="The Email field is not a valid e-mail address."
            data-val-maxlength="The Email cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            data-val-required="The Email field is required."
            name="AdjusterEmail"
            placeholder="Type adjuster email"
            type="email"
            value
            aria-required="true"
          />
        </div>
        <div>
          <label class="required second-level-label" for="AdjusterPhone" aria-required="true">Phone</label>
          <span
            class="field-validation-valid error"
            data-valmsg-for="AdjusterPhone"
            data-valmsg-replace="true"
          ></span>
          <input
            id="AdjusterPhone"
            class="required mask_phone"
            data-val="true"
            data-val-maxlength="The Phone cannot be longer than 50 characters"
            data-val-maxlength-max="50"
            data-val-regex="Should be a valid phone number"
            data-val-regex-pattern="^[^_]*$"
            data-val-required="The Phone field is required."
            name="AdjusterPhone"
            placeholder="Type adjuster phone"
            type="text"
            value
            aria-required="true"
          />
        </div>
        <div id="billing-contact-info" class="billing-info" style="display: none;">
          <label
            class="block-header"
            for="Billing_Contact_Information:"
          >Billing Contact Information:</label>
          <div>
            <label
              class="required second-level-label"
              for="BillingContact"
              aria-required="true"
            >Name</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="BillingContact"
              data-valmsg-replace="true"
            ></span>
            <input
              id="BillingContact"
              class="required"
              data-val="true"
              data-val-maxlength="The Name cannot be longer than 100 characters"
              data-val-maxlength-max="100"
              maxlength="100"
              name="BillingContact"
              placeholder="Type billing contact name"
              type="text"
              value
              aria-required="true"
            />
          </div>
          <div>
            <label class="required second-level-label" for="BillingEmail" aria-required="true">Email</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="BillingEmail"
              data-valmsg-replace="true"
            ></span>
            <input
              id="BillingEmail"
              class="required"
              data-val="true"
              data-val-email="The Email field is not a valid e-mail address."
              data-val-maxlength="The Email cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              name="BillingEmail"
              placeholder="Type billing contact email"
              type="email"
              value
              aria-required="true"
            />
          </div>
          <div>
            <label class="required second-level-label" for="BillingPhone" aria-required="true">Phone</label>
            <span
              class="field-validation-valid error"
              data-valmsg-for="BillingPhone"
              data-valmsg-replace="true"
            ></span>
            <input
              id="BillingPhone"
              class="required mask_phone"
              data-val="true"
              data-val-maxlength="The Phone cannot be longer than 50 characters"
              data-val-maxlength-max="50"
              data-val-regex="Should be a valid phone number"
              data-val-regex-pattern="^[^_]*$"
              name="BillingPhone"
              placeholder="Type billing contact phone"
              type="text"
              value
              aria-required="true"
            />
          </div>
        </div>
      </div>
      <div class="w50">
        <label for="Notes">Notes</label>
        <span
          class="field-validation-valid error"
          data-valmsg-for="Notes"
          data-valmsg-replace="true"
        ></span>
        <textarea
          id="Notes"
          class
          cols="20"
          data-val="true"
          data-val-maxlength="The Notes cannot be longer than 500 characters"
          data-val-maxlength-max="500"
          name="Notes"
          placeholder="Type notes"
          rows="5"
        ></textarea>
      </div>
    </div>
    <div class="additional-claim">
      <input
        id="IsAddAdditionalClaim"
        data-val="true"
        data-val-required="The Add Additional Claim field is required."
        name="IsAddAdditionalClaim"
        type="checkbox"
        value="true"
      />
      <input name="IsAddAdditionalClaim" type="hidden" value="false" />
      <label class="additional-claim-label" for="IsAddAdditionalClaim">Add Additional Claim</label>
    </div>
    <div class="wrapper">
      <button id="edit-submit" type="submit" class="button" name="op">Submit</button>
    </div>
    <input id="hidCompanyId" type="hidden" />
  </form>
</template>

<route lang="yaml">
meta:
  layout: hancock
</route>
