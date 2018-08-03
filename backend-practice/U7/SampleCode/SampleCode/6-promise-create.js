new Promise((_, reject) => reject('woops')).
  // Prints "caught woops"
  catch(err => { console.log('caught', err); });
