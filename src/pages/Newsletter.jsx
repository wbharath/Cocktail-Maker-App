import { Form, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  //we can use formData API as well. But react router dom provides it. So no need to setup manually
  const formData = await request.formData()

  // console.log(formData)
  // console.log(request)
  const data = Object.fromEntries(formData)
  console.log(data)
  //here we can set up a post api call and then get the details.
  toast.success("Form Submitted")
  return redirect('/')
}

const NewsLetter = () => {
  return (
    <Form className="form" method="post">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="brad"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          lastName
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Racharla"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
      >
        Submit
      </button>
    </Form>
  )
}

export default NewsLetter
