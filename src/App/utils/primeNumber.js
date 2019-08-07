export const primeNumber = ( n ) => {
    if(!n) return ''

    function isPrime(num) {
        if ( num === 0 || num === 1 ) {
            return false;
        }
        for ( let i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    let result = [2]
    let i = 3
    while (result.length !== n) {
        i+=2
        if ( isPrime(i) ) {
            result.push(i);
        }
    }

    return result.join();

}