import { Box, Grid } from "@mui/material";
// import Header from "../Components/Header/Header";
import DashboardHeader from "../Dashboard/DashboardHeader";
import "../CSS/PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div>
      <DashboardHeader />
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="privacyPolicyHeading"
            >
              <h1>
                Privacy <span style={{ color: "#1ec28b" }}>Policy</span>
              </h1>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="privacyPolicyText1">
                Your privacy is important to us, and we use your Personal
                Information only for providing and improving the Site. By using
                the Site, you agree to the collection and use of information in
                accordance with this policy. These Terms apply to all visitors,
                users and others who access or use the Service.
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} className="infoHeading">
              <h1 className="infoText">
                <span style={{ color: "rgba(0,0,0,80%" }}>
                  Information Collection and use
                </span>
              </h1>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="privacyPolicyText2">
                While using our Site, we may ask you to provide us with certain
                personally identifiable information that can be used to contact
                or identify you. Personally identifiable information may
                include, but is not limited to your name and email address
                ("Personal Information"). We will also collect non-identifiable
                information that does not allow direct association with any
                specific individual, as well as your profile info, travel
                updates and any other account associated details for our
                marketing and analytical purposes. This includes cookies and
                other technologies to improve our users’ experience and overall
                performance and services of our website. We can share
                information with our third party partners in different cases as
                well.
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} className="infoHeading">
              <h1 className="infoText">
                <span style={{ color: "rgba(0,0,0,80%" }}>Communications</span>
              </h1>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="privacyPolicyText2">
                We may use your Personal Information to contact you with
                newsletters, marketing or promotional materials and other
                information that may be important. You will have an option to
                opt out of this service. However, you may not receive emails and
                notifications about the changes to the Privacy Policy or Terms
                and Conditions. However, your continued use of the Service after
                we post any modifications to the Privacy Policy and Terms and
                Conditions on this page will constitute your acknowledgment of
                the modifications and your consent to abide and be bound by the
                modified Privacy Policy and Terms and Conditions.
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} className="infoHeading">
              <h1 className="infoText">
                <span style={{ color: "rgba(0,0,0,80%" }}>Security</span>
              </h1>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="privacyPolicyText2">
                The security of your Personal Information is important to us,
                but remember that no method of transmission over the Internet,
                or method of electronic storage, is 100% secure. While we strive
                to use commercially acceptable means to protect your Personal
                Information, we cannot guarantee its absolute security. Also, if
                you use the links to enter the third-party websites, we are not
                responsible for your Personal or any other information, nor are
                we guaranteeing that they use your personal and non-personal
                information the same way as we do. You should check with each
                individual websites’ own Privacy Policy and Terms and Conditions
                before continuing to use them.
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="privacyPolicyText2">
                Also, you should keep in mind that all photographs, travel
                details and comments you post, as well as your profile picture,
                account page and username can be seen and accessible by other
                users. These may reveal your ethnicity, nationality, location,
                religion and/or sexual orientation. We are not responsible for
                what information you share and if there is any harm caused due
                to your sharing of the information.
              </p>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className="privacyPolicyText2">
                Once you delete your account, it will take some time to be
                completely removed from the system. However, other users will
                not be able to see your account, although they may be able to
                read your public postings and comments you have made.
              </p>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
