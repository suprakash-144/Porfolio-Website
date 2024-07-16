"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { TbBrandGmail, TbPhoneCall } from "react-icons/tb";

const Contanct = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.MAIL_ID,
    //     pass: process.env.MAIL_PASSWORD,
    //   },
    // });

    // // send mail with defined transport object
    // const info = await transporter.sendMail({
    // from: `"Suprakash Gorai 👻" ${process.env.MAIL_ID}`, // sender address
    // to: data.to, // list of receivers
    // subject: data.subject, // Subject line
    // text: data.text, // plain text body
    // html: data.htm, // html body
    // });
  };
  return (
    <div id="Contact" className="container my-5">
      <div className="row row-gap-3">
        <div className="col-lg-6 col-sm-12">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="">
              <span className="text-warning">Send </span> A Message
            </h1>
            <form
              className="d-flex gap-3 flex-column w-75 justify-content-center  pt-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="Name"
                className="form-control"
                {...register("Name", { required: true })}
              />
              {errors.Name && <span>This field is required</span>}
              <input
                placeholder="Email"
                type="Email"
                className="form-control"
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.mail && <p role="alert">{errors.mail.message}</p>}
              <textarea
                placeholder="Enter your Message"
                className="form-control"
                {...register("Message", { required: true })}
              />
              {errors.Message && <span>This field is required</span>}

              <input type="submit" className="btn btn-success " />
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="d-flex justify-content-center align-items-center flex-column gap-3">
            <div className="d-flex flex-column gap-3">
              <p className="d-flex align-items-center gap-2" id="email">
                <TbBrandGmail />
                <a href="mailto:suprakashgorai14@gmail.com">
                  suprakashgorai175@gmail.com
                </a>
              </p>
              <p id="phone" className="d-flex align-items-center  gap-2">
                <TbPhoneCall />
                +919547997540
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7319.07117101009!2d87.38947029499344!3d23.477210806144917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f77a130c99f90f%3A0xf438862ff155db61!2sRajbandh%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1721155933290!5m2!1sen!2sin"
                // width="400"
                // height="300"
                style={{ border: 0, width: 50 + "vh" }}
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contanct;
