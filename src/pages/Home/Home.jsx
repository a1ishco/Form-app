import React from "react";
import Form from "../../components/Form/Form";
import styles from "./styles.css";
import Api from "../../components/API/Api";
const Home = () => {
  return (
    <>
      <div className="container-fluid container-fluid-home">
        <div className="container container-home">
          <div className="row homerows">
            <div className="column" id="colhome-1">
              <div className="homecol1">
                <div className="homerow">
                  <h2>Lets chat on Whatsapp</h2>
                  <span className="spanHome">
                    <img
                      src="https://qmeter.net/_next/static/media/whatsapp.9496e9a2.svg"
                      alt=""
                      srcset=""
                    />{" "}
                    Its very fast and direct 24/7{" "}
                  </span>
                </div>
                <div className="homerow">
                  <h2>Send us your enquiry or request</h2>
                  <span className="spanHome">
                    {" "}
                    <img
                      src="https://qmeter.net/_next/static/media/mail.ca834e40.svg"
                      alt=""
                      srcset=""
                    />{" "}
                    We are replying with 24 hours
                  </span>
                </div>

                <div className="homerow">
                  <h2>You are always welcome to call us</h2>
                  <span className="spanHome">
                    UAE +971 56 9210505 | AZ +994 55 2057510
                  </span>
                </div>
              </div>
            </div>
            <div className="column columnHome" id="col-2">
              <h2>Send us inquiries</h2>
              <Form isTextareaVisible={true}/>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
