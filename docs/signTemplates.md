# SignTemplatesManager

- [List Box Sign templates](#list-box-sign-templates)
- [Get Box Sign template by ID](#get-box-sign-template-by-id)

## List Box Sign templates

Gets Box Sign templates created by a user.

This operation is performed by calling function `getSignTemplates`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-sign-templates/).

_Currently we don't have an example for calling `getSignTemplates` in integration tests_

### Arguments

- queryParams `GetSignTemplatesQueryParamsArg`
  - Query parameters of getSignTemplates method
- headers `GetSignTemplatesHeadersArg`
  - Headers of getSignTemplates method

### Returns

This function returns a value of type `SignTemplates`.

Returns a collection of templates.

## Get Box Sign template by ID

Fetches details of a specific Box Sign template.

This operation is performed by calling function `getSignTemplateById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-sign-templates-id/).

_Currently we don't have an example for calling `getSignTemplateById` in integration tests_

### Arguments

- templateId `string`
  - The ID of a Box Sign template. Example: "123075213-7d117509-8f05-42e4-a5ef-5190a319d41d"
- headers `GetSignTemplateByIdHeadersArg`
  - Headers of getSignTemplateById method

### Returns

This function returns a value of type `SignTemplate`.

Returns details of a template.