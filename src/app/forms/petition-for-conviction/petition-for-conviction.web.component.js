import React from 'react'
import FormThatPrints from '../inputs/form-that-prints.component.js'
import TextInput from '../inputs/text-input.component.js'
import Select from '../inputs/select.component.js'

const petitionerRepresentativeOptions = [
  {label: 'Yes. I am the petitioner.', value: 'petitioner'},
  {label: 'No. I am an attorney representing the petitioner.', value: 'attorney'},
]

export default class PetitionForConviction_Web extends React.Component {
  render() {
    return (
      <FormThatPrints>
        <TextInput dataKey="lastName" label="Last name" {...this.props} />
        <TextInput dataKey="firstName" label="First name" {...this.props} />
        <TextInput dataKey="middleName" label="Middle name" {...this.props} />
        <TextInput dataKey="addressStreet" label="Street" {...this.props} />
        <TextInput dataKey="addressCity" label="City" {...this.props} />
        <TextInput dataKey="addressState" label="State" {...this.props} />
        <TextInput dataKey="addressZip" label="Zip" {...this.props} />
        <TextInput dataKey="dayPhone" label="Phone" {...this.props} />
        <TextInput dataKey="email" label="Email Address" {...this.props} />
        <Select dataKey="petitionerRepresentative" label="Are you filling this out for yourself?" options={petitionerRepresentativeOptions} {...this.props} />
        {this.props.data.petitionerRepresentative === 'attorney' &&
          <TextInput dataKey="barNumber" label="What is your Utah Bar number?" {...this.props} />
        }
        {/* TODO: Add in fields for the Distric, Justice Court, County and Judicial Court , needs clarity on particular data*/}
        <TextInput dataKey="addressCourtStreet" label="Court Address Street" {...this.props} />
        <TextInput dataKey="addressCourtCity" label="Court Address City" {...this.props} />
        <TextInput dataKey="addressCourtState" label="Court Address State" {...this.props} />
        <TextInput dataKey="addressCourtZip" label="Court Address Zip" {...this.props} />
        <TextInput dataKey="caseNumber" label="Case Number" {...this.props} />
        <TextInput dataKey="judgeName" label="Judge Full Name" {...this.props} />
        <input type="submit" value="Print Form" />
      </FormThatPrints>
    )
  }
}