
// STAGE 1 & 2: Fill in the Gaps


// 1. Greeting fallback
function greet(name) { 
 return name || "Guest"; 
} 
test('returns Guest when name is empty', () => { 
 // Arrange 
 const name = ""; 
 // Act 
 const result = greet(name); 
 // Assert 
 expect(result).toBe("Guest"); 
}); 

// 2. Boolean toggle 
function toggle(value) { 
 return !value; 
}
test('toggles boolean value', () => {  
 // Arrange 
 const input = true; 
 // Act 
 const result = toggle(input); 
 // Assert 
 expect(result).toBe(false); 
}); 

// 3. Add item to array 
function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test('adds item to array', () => {  
 // Arrange 
 const arr = [4, 6]; 
 // Act 
 const result = addItem(arr, 8); 
 // Assert 
 expect(result).toEqual([4, 6, 8]); 
}); 

// 4. Remove item from array 
function removeItem(arr, item) { return arr.filter(i => i !== item); } 
test('removes item from array', () => {  
 // Arrange 
 const arr = ["pen", "book"];
 // Act 
 const result = removeItem(arr, "pen"); 
 // Assert 
 expect(result).toEqual(["book"]); 
}); 

// 5. Check password length 
function isValidPassword(password) { 
 return password.length >= 6; 
} 
test('returns true for valid password length', () => {  
 // Arrange 
 const password = "Mypassword21"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
}); 




// STAGE 3: Real QA Thinking (Create Your Own Tests)

//  Function: isValidPassword 
function isValidPassword(password) { 
 return password.length >= 6; 
}
test('isValidPassword: positive case', () => { 
 // Arrange 
 const password = "myfreedom2123"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
});
test('isValidPassword: negative case', () => { 
 // Arrange 
 const password = "Jer"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(false); 
});
test('isValidPassword: boundary case', () => { 
 // Arrange 
 const password = "162123"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
});
test('isValidPassword: edge case (empty string)', () => { 
 // Arrange 
 const password = ""; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(false); 
});
test('isValidPassword: edge case (special characters)', () => { 
 // Arrange 
 const password = "!@#$%^"; 
 // Act 
 const result = isValidPassword(password); 
 // Assert 
 expect(result).toBe(true); 
});

// Function: containsWord 
function containsWord(sentence, word) { return sentence.includes(word); } 
test('containsWord: positive case', () => { 
 // Arrange 
 const sentence = "JavaScript is amazing"; 
 const word = "amazing";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(true); 
});
test('containsWord: negative case', () => { 
 // Arrange 
 const sentence = "JavaScript is my favorite"; 
 const word = "Python";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(false); 
});
test('containsWord: boundary case (full sentence)', () => { 
 // Arrange 
 const sentence = "Valary"; 
 const word = "Valary";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(true); 
});
test('containsWord: edge case (case sensitivity)', () => { 
 // Arrange 
 const sentence = "I love  Writing Poem"; 
 const word = "LOVE";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(false); 
});
test('containsWord: edge case (empty word)', () => { 
 // Arrange 
 const sentence = "Jerry"; 
 const word = "";
 // Act 
 const result = containsWord(sentence, word); 
 // Assert 
 expect(result).toBe(true); 
});

//  Function: addItem 
function addItem(arr, item) { 
 arr.push(item); 
 return arr; 
} 
test('addItem: positive case', () => { 
 // Arrange 
 const arr = ["Helen", "Valary"]; 
 const item = "Samri";
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result).toEqual(["Helen", "Valary", "Samri"]); 
});
test('addItem: add to empty array', () => { 
 // Arrange 
 const arr = []; 
 const item = 7;
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result).toEqual([7]); 
});
test('addItem: boundary case (duplicate item)', () => { 
 // Arrange 
 const arr = [10, 20]; 
 const item = 10;
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result).toEqual([10, 20, 10]); 
});
test('addItem: edge case (adding boolean)', () => { 
 // Arrange 
 const arr = [1, 2]; 
 const item = true;
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result).toEqual([1, 2, true]); 
});
test('addItem: edge case (checking length)', () => { 
 // Arrange 
 const arr = [5, 6, 7,9]; 
 const item = 11;
 // Act 
 const result = addItem(arr, item); 
 // Assert 
 expect(result.length).toBe(5); 
});
