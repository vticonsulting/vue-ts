<template>
  <ComponentsForm />
</template>

<style>
html {
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.eyebrow {
  font-size: 20px;
}
.-text-primary {
  color: #39b982;
}
.-text-base {
  color: #000;
}
.-text-error {
  color: tomato;
}
.-text-gray {
  color: rgba(0, 0, 0, 0.5);
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
.badge {
  display: inline-flex;
  width: auto;
  height: 26px;
  padding: 0 7px;
  margin: 0 5px;
  font-size: 13px;
  font-weight: 400;
  line-height: 26px;
  background: transparent;
  border-radius: 13px;
}
.badge.-fill-gradient {
  color: #fff;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  margin: 0;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  appearance: none;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}
label {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
input.error,
select.error {
  margin-bottom: 0;
}
input + p.errorMessage {
  margin-bottom: 24px;
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  margin-right: 0.5rem;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  outline-offset: -2px;
  appearance: textfield;
}
[type="search"]::-webkit-search-decoration {
  appearance: none;
}
[type="text"],
[type="number"],
[type="search"],
[type="email"],
[type="password"] {
  width: 100%;
  height: 52px;
  padding: 0 10px;
  font-size: 20px;
}
[type="text"]:focus,
[type="number"]:focus,
[type="search"]:focus,
[type="email"]:focus,
[type="password"]:focus {
  border-color: #39b982;
}
::-webkit-file-upload-button {
  font: inherit;
  appearance: button;
}
[hidden] {
  display: none;
}
.error {
  border: 1px solid red;
}
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 0;
  appearance: none;
  appearance: none;
  appearance: none;
}
select:focus {
  border-color: #39b982;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: #fff;
}
select::ms-expand {
  opacity: 0;
}
.field {
  margin-bottom: 24px;
}
.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  background: transparent;
  border: none;
  border-radius: 6px;
  transition: all 0.2s linear;
}
.button:hover {
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transform: scale(1.02);
  transform: scale(1.02);
}
.button:active {
  box-shadow: none;
  transform: scale(1);
  transform: scale(1);
}
.button:focus {
  outline: 0;
}
.button:disabled {
  box-shadow: none;
  transform: scale(1);
  transform: scale(1);
}
.button + .button {
  margin-left: 1em;
}
.button.-fill-gradient {
  color: #fff;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
.button.-fill-gray {
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.button.-size-small {
  height: 32px;
}
.button.-icon-right {
  padding: 0 20px;
  text-align: left;
}
.button.-icon-right > .icon {
  margin-left: 10px;
}
.button.-icon-left {
  padding: 0 20px;
  text-align: right;
}
.button.-icon-left > .icon {
  margin-right: 10px;
}
.button.-icon-center {
  padding: 0 20px;
}
</style>
