export const fibonacci = ( n ) => {
    let result = [0]
    let i = 1
    while (result.length !== n && n !== 0){
        result.push(i)
        i += i
    }

    return result.join();

}