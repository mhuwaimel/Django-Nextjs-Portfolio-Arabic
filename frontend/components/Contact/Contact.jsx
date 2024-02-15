'use client'

import Loading from "@/app/loading";
import { useRef, useState } from "react";

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
  
    //   Setting button text
    const [buttonText, setButtonText] = useState("Send");
  
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    const handleValidation = () => {
      let tempErrors = {};
      let isValid = true;
  
      if (name.length <= 0) {
        tempErrors["name"] = true;
        isValid = false;
      }
      if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
      }
      if (subject.length <= 0) {
        tempErrors["subject"] = true;
        isValid = false;
      }
      if (message.length <= 0) {
        tempErrors["message"] = true;
        isValid = false;
      }
  
      setErrors({ ...tempErrors });
      console.log("errors", errors);
      return isValid;
    };
  
    //   const [form, setForm] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let isValidForm = handleValidation();
  
      if (isValidForm) {
        setLoading(true);
        const res = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            name: name,
            subject: subject,
            message: message,
          }),
        });
  
        const { error } = await res.json();
        if (error) {
          console.log(error);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Send");
          setLoading(false);
          // Reset form fields
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
          return;
        }
        // setShowSuccessMessage(true);
        alert("شكراً لتواصلك ,تم ارسال الرسالة ")
        setShowFailureMessage(false);
        setLoading(false);
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      }
      console.log(name, email, subject, message);
    };
    if (loading) {
      return <Loading />;
    }

  return (
    <form 
    className='contactform'
    // onSubmit={handleSubmit(onSubmit)}
    // ref={form} onSubmit={handleSubmit(sendEmail)}
    ref={form} onSubmit={handleSubmit}
  
   
  >
    <div dir='rtl' className='row '>
      <div className='col-12 col-md-6'>
        <div className='form-group'>
          <input
            // {...register('name', { required: true })}
            type='text'
            name='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder='اسمك الكريم'
          />
          {errors?.name && (
                    <p className="text-sm text-danger">الاسم مطلوب</p>
                  )}
        </div>
      </div>
      {/* End .col */}

      <div className='col-12 col-md-6 '>
        <div className='form-group'>
          <input
           
           
            type='email'
            name='email'
            placeholder='البريد الالكتروني'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors?.email && (
                    <p className="text-sm text-danger">
                      البريد الالكتروني مطلوب
                    </p>
                  )}
        </div>
      </div>
      {/* End .col */}

      <div className='col-12 col-md-12'>
        <div className='form-group'>
          <input
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
            type='text'
            name='subject'
            
            placeholder='الموضوع'
          />
         {errors?.subject && (
                  <p className="text-sm text-danger">موضوع الرسالة مطلوب</p>
                )}
        </div>
      </div>
      {/* End .col */}

      <div className='col-12'>
        <div className='form-group'>
          <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
            name='message'
            placeholder='رســالتك'
          ></textarea>
        {errors?.message && (
                  <p className="text-sm text-danger">محتوى الرسالة مطلوب</p>
                )}
        </div>
      </div>
      {/* End .col */}

      <div className='col-12 text-center'>
        <button type='submit'  className='button tajawalFont'>
          <span className='button-text'> إرسال Send</span>
          <span className='button-icon fa fa-send'></span>
        </button>
      </div>
      {/* End .col */}
    </div>
  </form>
  )
}

export default Contact