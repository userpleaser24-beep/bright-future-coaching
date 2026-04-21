import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Types "../types/enquiry";

module {
  public type EnquirySubmission = Types.EnquirySubmission;
  public type EnquiryInput = Types.EnquiryInput;
  public type SubmitEnquiryResult = Types.SubmitEnquiryResult;

  public func submit(
    submissions : List.List<EnquirySubmission>,
    nextId : Nat,
    input : EnquiryInput,
  ) : (EnquirySubmission, SubmitEnquiryResult) {
    Runtime.trap("not implemented");
  };

  public func listAll(submissions : List.List<EnquirySubmission>) : [EnquirySubmission] {
    Runtime.trap("not implemented");
  };

  public func getById(submissions : List.List<EnquirySubmission>, id : Nat) : ?EnquirySubmission {
    Runtime.trap("not implemented");
  };
};
