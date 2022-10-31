import * as Yup from "yup";

// var schema = Yup.object().shape({});

const validation = (data, step) => {
  switch (step) {
    case 0:
      var schema = Yup.object().shape({
        age_group: Yup.string().required("Age Group is required"),
        gender: Yup.string().required("Gender is required"),
        tip_expected: Yup.string().when("category", {
          is: "1",
          then: Yup.string().required("Tip Expected is reqiured"),
        }),
      });
      break;
    case 1:
      var schema = Yup.object().shape({
        booking_status: Yup.string().required(),
        date_range_from: Yup.string()
          .when("booking_status", {
            is: "2",
            then: Yup.string().required("From Date is reqiured"),
          })
          .nullable(),
        date_range_to: Yup.string()
          .when("booking_status", {
            is: "2",
            then: Yup.string().required(" To Date is reqiured"),
          })
          .nullable(),
        flying_from: Yup.string().required("Flying From is reqiured"),
        destination: Yup.string().required("Destination is  reqiured"),
        prefered_language: Yup.array().min(1, "Preferred Language is required"),
        departing_on: Yup.string()
          .when("booking_status", {
            is: "1",
            then: Yup.string().required("Departing on is reqiured"),
          })
          .nullable(),
        airAndTrans: Yup.array().when("booking_status", {
          is: "1",
          then: Yup.array()
            .of(
              Yup.object().shape({
                transit: Yup.string().required("Transit is required"),
                airline: Yup.string().required("Airline is required"),
              })
            )
            .max(4, "Maximum limit is 3")
            .min(1, "required"),
        }),
      });

      break;
    case 2:
      var schema = Yup.object().shape({
        trip_name: Yup.string().required("Trip Name is required"),
        assistance_needed: Yup.string().when("category", {
          is: "2",
          then: Yup.string().required("Reqiured"),
        }),
        meetup_location: Yup.string().required("MeetUp Loaction is required"),
        short_description: Yup.string().required("Short Description is required"),
        can_assist_with: Yup.string().when("category", {
          is: "1",
          then: Yup.string().required("Can Assist With is reqiured"),
        }),
      });
      break;
    case 3:
      break;
  }

  // console.log('schema', schema)
  return schema;
};

export default validation;
