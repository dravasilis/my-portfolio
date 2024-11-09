import NeonForm from "../neon-input/neon-form";
import NeonInput from "../neon-input/neon-form";
import "./contact.css";
interface contactProps {}

function Contact() {
  return (
    <div className=" flex flex-col gap-12">
      <span className="text-5xl max-mobile:text-4xl max-mobileXS:-ml-8    max-mobileXS:bg-black text-teal-200 font-bold neon-sign-purple w-max rounded-xl -mt-14 max-mobileXS:-mt-16 max-[425px]:-mt-[7rem] max-[380px]:-mt-[9rem] p-4  ">
        {" "}
        &lt; Contact / &gt;
      </span>

      <div className=" flex w-full items-center justify-center max-mobileXS:-ml-8">
        <NeonForm />
      </div>
    </div>
  );
}
export default Contact;
