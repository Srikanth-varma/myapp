const AccordianContent=()=>{



    const accordionData = [
        {
          title: "1. How do I change my Password?",
          content: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “settings” on the page. Type your Old password, new
          password and Confirm new Password field and click “SAVE” to change your password.`,
        },
        {
          title: "2. How do I change my Email ID?",
          content: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “My profile” on the page. You can see Edit profile button/icon,
          by pressing the button/icon you will be redirected to the page. There you will enter your
          Email ID and save the change.’`,
        },
        {
          title: "3. How do I change my mobile number?",
          content: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “My profile” on the page. You can see Edit profile button/icon,
          by pressing the button/icon you will be redirected to the page. There you will enter your
          Mobile Number and save the change.`,
        },
        {
          title: "4. How do I delete my account?",
          content: `Click your profile picture at the top right corner, you will be redirected to the
        dashboard page. Then Click “settings” on the page. You can see the Delete Account
        option, by pressing the “DELETE” button you can delete your account..`,
        },
      ];
    
     
    
      const ConnectedData = [
        {
          ConnectTitle: "1. How can I create a trip?",
          ConnectContent: `Click Create a trip option at the navigation bar, it will redirect you to another page.
          There you can enter your trip details and create your trip.`,
        },
        {
          ConnectTitle: "2. How can I connect with people?",
          ConnectContent: `Click Connect people option at the navigation bar, and it will redirect you to another
          page. There you can find people by using search and filter options.
          You can also search on the home page; it will also redirect you to this connect people’s
          page.’`,
        },
        {
          ConnectTitle: "3. How do I delete my trip?",
          ConnectContent: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “Upcoming Trips” under My Trips option on the page. There
          you can see the trips under “Trips created by me”. You can select and delete a particular
          trip you want.`,
        },
        {
          ConnectTitle: "4. How do I share my experience?",
          ConnectContent: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “Past Trips” under My Trips option on the page. There you
          can see past trips with the “Upload your memories” button. Press the button, share your
          experience and post it.`,
        },
        {
          ConnectTitle: "5. How do I edit my trip?",
          ConnectContent: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “Upcoming Trips” under My Trips option on the page. There
          you can see the trips under “Trips created by me”. You can select and edit a particular trip
          you want.`,
        },
      ];
    
      const GettingStartedData = [
        {
          GettingStartedTitle: "1. How can I create a trip?",
          GettingStartedContent: `Click Create a trip option at the navigation bar, it will redirect you to another page.
          There you can enter your trip details and create your trip.`,
        },
        {
          GettingStartedTitle: "2. How can I connect with people?",
          GettingStartedContent: `Click Connect people option at the navigation bar, and it will redirect you to another
          page. There you can find people by using search and filter options.
          You can also search on the home page; it will also redirect you to this connect people’s
          page.’`,
        },
        {
          GettingStartedTitle: "3. How do I delete my trip?",
          GettingStartedContent: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “Upcoming Trips” under My Trips option on the page. There
          you can see the trips under “Trips created by me”. You can select and delete a particular
          trip you want.`,
        },
        {
          GettingStartedTitle: "4.How do I share my experience?",
          GettingStartedContent: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “Past Trips” under My Trips option on the page. There you
          can see past trips with the “Upload your memories” button. Press the button, share your
          experience and post it.`,
        },
        {
          GettingStartedTitle: "5. How do I edit my trip?",
          GettingStartedContent: `Click your profile picture at the top right corner, you will be redirected to the
          dashboard page. Then Click “Upcoming Trips” under My Trips option on the page. There
          you can see the trips under “Trips created by me”. You can select and edit a particular trip
          you want.`,
        },
      ];
    
      const PaymentData = [
        {
          PaymentTitle: "1. How students get benefit from travel companion?",
          PaymentContent: `Travel Companion help students community to have the chance to discover their
          independence while away from home and the comfort of a regular support system. Students
          can grow personally through travel in ways that aren't possible without pushing outside of their
          comfort zone.`,
        },
        {
          PaymentTitle: "2. How desi community benefit from travel companion?",
          PaymentContent: `Travel companion help the desi community to explore a wide variety of information
          including educational advantages, available communication methods, exploration chances,
          and entertainment options.’`,
        },
        {
          PaymentTitle: "3.How Can I contact travel companion?",
          PaymentContent: `Click the “Contact Us” button in the footer section, you will be redirected to the Contact
          form. You can fill out the form and submit it to contact us.`,
        },
        {
          PaymentTitle: "4.How should I enquiry for an ad?",
          PaymentContent: `Click the ad on the home page, it will redirect you to the “Enquiry for Ads” page. You
          can fill out and submit the form for the enquiry.
          You can also click the Ad’s Enquiry Link in the footer to fill out this form.`,
        },
      ];
    
      const WholeData={
        accordionData,
        ConnectedData,
        GettingStartedData,
        PaymentData
    
      }
    
      return  WholeData
    
    }
    
    export default AccordianContent 