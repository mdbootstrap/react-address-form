Responsive Address Form with React Bootstrap 5. Templates include basic examples, use of cards, use of photos & more.

Check out [React Bootstrap Address Form Documentation](https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/) for detailed instructions & even more examples.

## Basic example

![React Bootstrap 5 Address Form](https://mdbootstrap.com/img/Marketing/github/address-form/basic.png)

```js
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';

export default function Basic() {
  return (
    <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Biling details</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='First name' type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Last name' type='text' />
                  </MDBCol>
                </MDBRow>

                <MDBInput label='Company name' type='text' className="mb-4" />
                <MDBInput label='Address' type='text' className="mb-4" />
                <MDBInput label='Email' type='text' className="mb-4" />
                <MDBInput label='Phone' type='text' className="mb-4" />
                <MDBTextArea label='Additional information' rows={4} className="mb-4" />

                <div className="d-flex justify-content-center">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Summary</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>$53.98</strong></span>
                </MDBListGroupItem>
              </MDBListGroup>

              <MDBBtn size="lg" block>
                Make purchase
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
```

## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples

[React Bootstrap Delivery address form card:
![React Bootstrap 5 Address Form](https://mdbootstrap.com/img/Marketing/github/address-form/section-2.png)](https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/#address-form-card)

[React Bootstrap Advanced address form:
![React Bootstrap 5 Address Form](https://mdbootstrap.com/img/Marketing/github/address-form/section-3.png)](https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/#advanced-address-form)

[React Bootstrap Address form with image:
![React Bootstrap 5 Address Form](https://mdbootstrap.com/img/Marketing/github/address-form/section-4.png)](https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/#address-form-image)

___

## More extended Bootstrap documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/forms/overview/">React forms overview</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/buttons/">React buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/cards/">React cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/animations/">React animations</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/dropdowns/">React dropdowns</a></li>
<li><a href="https://mdbootstrap.com/docs/react/forms/validation/">React validation</a></li>
</ul>