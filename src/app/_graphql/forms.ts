export const FORMS = `forms {
  id
  title
  form {
    id
    title
    description
    fields {
      firstname
      lastname
      phonenumber
      email
      typeofcase
      comments
      consent
    }
    submitButtonLabel
    confirmationType {
      confirmationMessage
    }
    redirect {
      type
    }
    documentToLinkTo
    customURL
    emails {
      id
      emailTo
      cc
      bcc
      repyTo
      emailFrom
      subject
      message
    }
  }
}`
