module {
  public type CourseInterest = {
    #NEET;
    #IITJEE;
    #CEE;
    #BOARD;
  };

  public type EnquirySubmission = {
    id : Nat;
    fullName : Text;
    email : Text;
    phone : Text;
    courseInterest : CourseInterest;
    message : Text;
    submittedAt : Int;
  };

  public type EnquiryInput = {
    fullName : Text;
    email : Text;
    phone : Text;
    courseInterest : CourseInterest;
    message : Text;
  };

  public type SubmitEnquiryResult = {
    confirmationNumber : Nat;
    submittedAt : Int;
  };
};
