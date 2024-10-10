
let bankBranchInstance = null;            // Step 1: Create a variable to store the singleton instance

class BankBranch {                         // Step 2: Define a class called `BankBranch` 

constructor(branchInfo) {                     // Step 3: Create a constructor that takes `branchInfo` 

  if (bankBranchInstance == null) {          // Step 3.1: Check if the `bankBranchInstance` variable is null.
    this.branchInfo = branchInfo;             // Step 3.2: If `bankBranchInstance` is null, create a new instance.
    bankBranchInstance = this;
  }
      return bankBranchInstance;               // Step 3.3: Return the `bankBranchInstance` whether it's newly created or existing.
    }

getBranchInfo() {                              // Step 4: Add methods to the `BankBranch` class 
    return bankBranchInstance.branchInfo;
    }
  }


const branchA = new BankBranch("Location: Claremont");           // Step 5: Usage example

Object.freeze(branchA);

console.log("Branch Information: " + branchA.getBranchInfo());

const branchB = new BankBranch("Location: V&A Waterfront");

Object.freeze(branchB);

console.log("Branch Information: " + branchB.getBranchInfo());

if (branchA === branchB) {
  console.log("Error: instance already in use");
}
