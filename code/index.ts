/**
 * splits a comma seperated string and converts the tokens to integers. 
 * Returns the sum of the integers
 * 
 * @throws RangeError if there is a negative number
 * @param numbers a comma seperated string 0 – 1000 inclusive
 * @returns the sum of all integers between 0 and 1000 inclusive
 */
export function add (numbers: string): number {
    let integers = numbers.split(',')
    .map(x => parseInt(x))
    .filter(x => !isNaN(x));
    
    let negatives = integers.filter(x => x < 0);
    
    if (negatives.length > 0){
        // throw new RangeError(`Negatives are not allowed  ${negatives.join(', ')}`);
        throw new RangeError('Negatives are not allowed' + negatives.join(', '));
    }

    return integers.filter(x => x <= 1000).reduce((a,b) => a+b ,0);
}