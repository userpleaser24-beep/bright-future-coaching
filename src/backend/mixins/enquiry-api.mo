import List "mo:core/List";
import Runtime "mo:core/Runtime";
import EnquiryLib "../lib/enquiry";
import Types "../types/enquiry";

mixin (
  enquiries : List.List<Types.EnquirySubmission>,
  var nextEnquiryId : Nat,
) {
  public func submitEnquiry(input : Types.EnquiryInput) : async Types.SubmitEnquiryResult {
    Runtime.trap("not implemented");
  };

  public query func listEnquiries() : async [Types.EnquirySubmission] {
    Runtime.trap("not implemented");
  };

  public query func getEnquiry(id : Nat) : async ?Types.EnquirySubmission {
    Runtime.trap("not implemented");
  };
};
