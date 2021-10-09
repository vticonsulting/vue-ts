---
title: Notes
---

Hancock.DAL/Companies/CompanyDTO.cs
Hancock.DAL/Companies/ExternalCompanyDTO.cs

```csharp
public string? ClaimNumberFormat { get; set; }
```

Hancock.Business/Company/Single/InsuranceCompany.cs

```csharp
public static readonly PropertyInfo<string?> ClaimNumberFormatProperty = RegisterProperty<string?>(c => c.ClaimFormat);

[DisplayName("Claim Number Format")]
public string ClaimNumberFormat
{
  get { return GetProperty(ClaimNumberFormatProperty);}
  set { return SetProperty(ClaimNumberFormatProperty, value);}
}
```

Hancock.Web/Helpers/ExternalClaimHelper.cs
Hancock.Web/Models/ExternalClaimModel.cs

```csharp
[RegularExpression(), ErrorMessage = "Should be in the correct format"] // TODO
public string ClaimNumber { get; set; }
public string? ClaimNumberFormat { get; set; }
```

Hancock.Web/Views/Customer/CreateInsCompany.cshtml

```html
<!-- Claim Number Format -->
<div class="row-fluid">
  <div class="span6">
    <div class="control-group">
      @HtmlFor(m => m.InsuranceCompany.ClaimNumberFormat, new { @class = "control-label"})
      <div class="controls">
        @Html.TextBoxFor(m => m.InsuranceCompany.ClaimNumberFormat)
        @Html.ValidationMessageFor(m => m.InsuranceCompany.ClaimNumberFormat)
      </div>
    </div>
  </div>
</div>
```

<route>
{
  meta: {
    layout: 'docs'
  }
}
</route>
