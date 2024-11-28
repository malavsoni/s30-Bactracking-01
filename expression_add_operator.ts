function addOperators(num: string, target: number): string[] {
  function backtrack(
    num: number,
    index: number,
    target: number,
    running_sum: number,
    
    result: string[]
  ) {
    // Base Case
    if (target == 0) {
      result.push(`${running_sum}`);
      return;
    }
    if (target < 0 || num <= 0) {
      return;
    }
    // Logic

    // extract digit
    const digits = [];
    let temp = num;

    digits.unshift(temp % 10); // Extract the last digit and add it to the beginning of the array
    temp = Math.floor(temp / 10); // Remove the last digit

    // No Choose Case
    backtrack(num, index + 1, target, path, result);
    // Choose Case
    path.push(num[index]);
    backtrack(num, index, target - candidates[index], path, result);
    path.pop(); // Backtracking Approach
  }

  let results: string[] = [];
  let number = parseInt(num, 10);

  backtrack(number, 0, target, [], results);
  return results;
}

describe("Expression Add Operators", () => {
  it("Happy Path - 01", () => {
    let num = "123",
      target = 6;
    expect(addOperators(num, target)).toStrictEqual(["1*2*3", "1+2+3"]);
  });
});
