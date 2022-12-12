import React from "react";

const InvestorModal = ({setInvestorModalOpen, dataForInvestor}) => {

  return (
    <>
    <div
      style={{width: '100vw',
      height: '100vh',
      backdropFilter: 'blur(5px)',
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0, 
      fontFamily: "'Josefin Sans', sans-serif" }}
        >
        

      <div className="profile-wrapper" >
        <div className="left">
          
            <img
              style={{ height: 250, maxWidth: '17rem' }}
              src={dataForInvestor.profileImage}
              alt="Profile Picture"
            />
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              marginTop: "1rem",
              marginBottom: "0.1rem",
            }}
          >
            {dataForInvestor.name}
          </div>
          <p>Investor</p>
        </div>
        <div className="right">
              <div className="titleCloseBtn" style={{height:0}}>
                    <button
                    style={{zIndex:10}}
                      onClick={() => {
                      setInvestorModalOpen(false);
                      }}
                      >
                      X
                    </button>
                    </div>
          <div style={{ textAlign: "right", height: "1rem" }}>
          </div>
          <div className="info">
              <h3>Personal Information</h3>
              <div className="info_data">
                <div className="data">
                  <h4>Email</h4>
                  <p>{dataForInvestor.email}</p>
                </div>

                <div className="data">
                  <h4>Phone</h4>
                  <p>{dataForInvestor.phone}</p>
                </div>
              </div>
              <div className="info_data">
                <div className="data">
                  <h4>CNIC</h4>
                  <p>{dataForInvestor.cnic}</p>
                </div>
                {/* <div className="data">
                  <h4>cell</h4>
                  <p>0001-213-998761</p>
                </div> */}
              </div>
              <div className="info_data">
                <div className="data">
                  <h4>Office-Address</h4>
                  <p style={{ width: "25rem" }}>
                    {dataForInvestor.officeAddress}
                  </p>
                </div>
              </div>
            </div>

          <div className="projects">
            <h3>Investment Details</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Overall Investments</h4>
                <p>Rs. {dataForInvestor.investmentAmount}/=</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
            </>
  );
};

export default InvestorModal;