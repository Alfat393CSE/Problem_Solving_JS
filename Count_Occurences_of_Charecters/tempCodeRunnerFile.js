  for (let val of str) {
    if (val.value.toUpperCase() === char || val.value.toLowerCase() === char) {
      count++;
    }
  }