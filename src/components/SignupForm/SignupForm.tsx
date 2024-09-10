import Form from "@components/common/Form/Form/Form";
import FormGroup from "@components/common/Form/FormGroup/FormGroup";
import Input from "@components/common/Form/Input/Input";
import Label from "@components/common/Form/Label/Label";
import { ISignupcredentials } from "@types/auth";
import { memo } from "react"


interface ISingnupProps extends ISignupcredentials{
    credentials: {
        email: string,
        password: string,
        confirmPassword: string,
        name: string,
        phone: string,
    },
    onSubmit:(e:React.FormEvent<HTMLFormElement>) => void,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,

}

const SignupForm = ({credentials,onChange,onSubmit}:ISingnupProps) => {
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <Form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                  <FormGroup>
                      <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</Label>
                      <Input value={credentials.name} onChange={onChange} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John D" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</Label>
                      <Input value={credentials.email} onChange={onChange} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</Label>
                      <Input value={credentials.phone} onChange={onChange} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</Label>
                      <Input type="password" value={credentials.password} onChange={onChange} name="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </FormGroup>
                  <FormGroup>
                      <Label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</Label>
                      <Input type="confirm-password" value={credentials.confirmPassword} onChange={onChange} name="confirm-password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </FormGroup>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </Form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default memo(SignupForm);