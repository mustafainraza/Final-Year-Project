import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../../Components/Sidebar/SideBar";
import NewCampaignRequest from "../../Pages/CampaignRequest/NewCampaignRequest";
import InvestorProfilesList from "../../Pages/InvestorProfilesList";
import CampaignerProfilesList from "../../Pages/CampaignerProfilesList";
import AllCampaigns from "../../Pages/AllCampaigns";
import CampaignTimeExtendRequest from "../../Pages/CampaignTimeExtend";

const HomePage = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<AllCampaigns />} />
          <Route path="/campaignrequest" element={<NewCampaignRequest />} />
          <Route path="/campaigntimerequest" element={<CampaignTimeExtendRequest />} />
          <Route path="/campaignerlist" element={<CampaignerProfilesList />} />
          <Route path="/investorlist" element={<InvestorProfilesList />} />
          <Route path="*" element={<h1> not found</h1>} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default HomePage;
