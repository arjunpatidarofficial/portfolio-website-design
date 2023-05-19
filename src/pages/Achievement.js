import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/navBar";
import Footer from "../components/footer";
import { memo } from "react";

const Achievement = (props) => {
  return (
    <div className="overflow-y-auto customScroll h-screen">
      <Navbar />
      <div className="border-b dark:border-gray-700  bg-gray-50 dark:bg-base dark:text-white pt-20 sm:pt-0 ">
        <div className=" flex justify-center items-center h-24  ">
          <p className=" font-medium text-2xl">Achievements</p>
        </div>
        <div className="py-10 flex flex-col sm:flex-row px-5 sm:px-20">
          <div className="w-full sm:w-1/2 flex flex-col space-y-5 items-start">
            <img
              className=" rounded-md shadow-lg"
              src="/hachethon-1.webp"
            ></img>
          </div>

          <div className="w-full sm:w-1/2 mt-10 sm:mt-0 px-5 sm:pl-10 sm:pr-20">
            <p className="text-xl font-bold">ABDM Hackethon Winner</p>
            <p className="text-sm mt-1 font-medium">National Health Athority</p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm mb-3">
              It’s an honor for me to receive “Ayushmann Utkrishtata Puraskaar”
              from Mansukh Mandaviya (Health Minister), Dr. RS Sharma (CEO,
              NHA), Kiran Gopal Vaska (Director, NHA) in Arogya Manthan -
              Celebrating the Anniversary of Pradhan Mantri Jan Arogya Yojana
              (PM-JAY) and Ayushman Bharat Digital Mission (ABDM) an initiative
              by PM Narendra Modi. Health Ministry and National Health Authority
              (NHA) were highly impressed by our healthcare solution
              "HealthTalk" and awarded it first prize in the top challenge and
              second prize in two other challenges.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm mb-3">
              We realized that India lacks digitization in healthcare and the
              absence of an open teleconsultation platform with multi-faceted
              facilities like interoperability, online transaction, multi-cat,
              etc., leads to a lot of difficulties and disorganization faced by
              patients which affects more than a billion Indians. Hence, we
              wanted to provide a solution that could be adopted easily by any
              hospital be it government or high-end, rural or urban, small or
              big and could reach and help any Indian. we came up with a new
              super-fast, easy, and seamless solution “HealthTalk”, to help
              connect doctors, and patients and digitalized all
              healthcare-related organization/communication.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              We are also glad to announce that our solution was not just
              appreciated and approached by various hospitals, insurance
              companies, VCs and investors as well and we are in further
              discussions for getting it onboard at various levels.
            </p>
            <a
              target="_blank"
              href="https://abdm.gov.in/hackathon"
              className=""
            >
              <button className="bg-customorange font-medium text-sm mt-5 sm:mt-0 rounded text-white py-1.5 px-3">
                More Information
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-gray-50 dark:bg-base dark:text-white">
        <div className=" flex justify-center items-center h-24  ">
          <p className=" font-medium text-2xl">Hackathon Product</p>
        </div>
        <div className="py-10 flex-col flex sm:flex-row px-5 sm:px-20">
          <div className="w-full sm:w-1/5 flex flex-col items-center">
            <img
              className="shadow-lg rounded-full sm:w-full w-1/2 mb-4"
              src="https://healthtalk-7f150.web.app/logo.svg"
            ></img>
            <a
              target="_blank"
              href="https://github.com/arjunpatidarofficial/UHI_Inno_Challenge_2_Arjun_Patidar_Final_submission"
              className="bg-black font-medium text-sm w-36 text-white p-2 sm:my-0 my-3"
            >
              Get Source Code <i className="fa-brands fa-github ml-1"></i>
            </a>
          </div>
          <div className="w-full sm:w-4/5 sm:pl-10 my-5 sm:mb-4 px-5 sm:pr-28">
            <p className="text-xl font-bold">HealthTalk</p>
            <p className="text-sm mt-1 font-medium">National Health Athority</p>
            <div className="mt-4 space-y-3  font-medium mb-3">
              <p> Features:</p>
              <p>
                • HealthTalk has developed separate Application for Patient
                (consumer) and Doctor (Provider) • Doctor’s appointment can be
                easily taken in few steps and can also be merged with other
                doctor’s appointment.
              </p>
              <p>• Patient can have single or multiple doctors as per need.</p>
              <p>
                • There are 2 doctors Manish (Cardiologist) and Jaynesh
                (Orthopaedic) both having a slot on 14-07-2022 at 10:00 AM,
                Radhika who wants to visit both doctors can just login in to
                HealthTalk application and book Manish and then Jaynesh for the
                same time, now all three of them can join the call at 10:00 AM
                and have a group consultation.
              </p>
              <p>
                • Seamless payment by RazerPay is integrated for faster and most
                reliable payments
                <p>
                  • Realtime video calling and chatting is implemented among the
                  doctor/counsellor and patients.
                </p>
                <p>
                  • Doctor/counsellor can share their screen with other
                  participants present in the meeting.
                </p>
                • Media could be shared to all Doctor/counsellor and patient
                present in the chat. Example: Photos, Files, Audio, Etc (No
                limitations as of now).
              </p>
              <p>
                • Doctors can generate prescription seamlessly. Which will be
                visible to patient just after the call.
              </p>
              <p>
                • As per the standards norms, prescription once generated should
                not be modified or altered once consultation is closed.
              </p>
              <p>
                • Unregister patient (consumer) can register on application and
                verify phone number easily by entering OTP.
              </p>
              <p>
                • Register patients (consumer) if not logged in or installing
                android application later can sign in easily by verifying OTP.
              </p>
              <p>
                • Patient can easily enter basic details which is helpful to
                doctors (provider) during consultations. Additionally, these
                details could be modified on the go by doctor during
                consultations.
              </p>
              <p>• Realtime update of appointments at doctor’s panel.</p>
              <p>
                • All possible checks for fields are handled at frontend and
                backends. • Multiple Teleconsultations are scheduled for same
                time and tested.
              </p>
              <p>
                • Code is deployed on Firebase. Which is easily be scale as per
                the traffic and load.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Achievement.propTypes = {};

export default memo(Achievement);
