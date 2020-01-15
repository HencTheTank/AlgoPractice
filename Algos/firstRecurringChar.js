//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  let memo = {};
  for (let i = 0; i < input.length; i++) {
    if (memo[input[i]]) {
      console.log(input[i]);
      return input[i];
    } else {
      memo[input[i]] = true;
    }
  }
  return undefined;
}
firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]); //2
firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]); //1
firstRecurringCharacter([2, 3, 4, 5]); //undefined
firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]); //5
