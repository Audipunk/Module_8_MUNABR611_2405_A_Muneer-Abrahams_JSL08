
let bankBranchInstance = null;

class BankBranch {

constructor(branchInfo) {

  if (bankBranchInstance == null) {
    this.branchInfo = branchInfo;
    bankBranchInstance = this;
  }
      return bankBranchInstance;
    }

getBranchInfo() {
    return bankBranchInstance.branchInfo;
    }
  }


const branchA = new BankBranch("Location: Claremont");

Object.freeze(branchA);

console.log("Branch Information: " + branchA.getBranchInfo());

const branchB = new BankBranch("Location: V&A Waterfront");

Object.freeze(branchB);

console.log("Branch Information: " + branchB.getBranchInfo());

if (branchA === branchB) {
  console.log("Error: instance already in use");
}


// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
