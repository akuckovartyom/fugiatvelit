function* myGenerator() {
  let update = yield;
  console.log('Update received:', update);
}

const continuation = myGenerator();

// Start the generator
continuation.next();

// Pass the update value into the generator
continuation.next(update);
