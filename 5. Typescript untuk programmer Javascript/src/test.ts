
function isMagicaldrome(inputString: string): string{
    const countChar = (str : string) => {
        const counts: any= {};
        for (const s of str) {
          if (counts[s]) {
            counts[s]++
          } else {
            counts[s] = 1
          }
        }
        return counts;
      }
    
  const counted: any = countChar(inputString);
  console.log(counted);
  return 'a';
}

