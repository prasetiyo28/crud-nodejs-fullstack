const changes = (word) => {
    const kata = word.split('');
    const filter = [];
    kata.map(letter => {
if (letter === 'A') {
    const o = 'O'    
    filter.push(o);
}else if(letter === 'a') {
    const o = 'o'    
    filter.push(o);

}else{
    filter.push(letter);
}
return letter
    });

    console.log(filter.join(''));
    
}

changes("purwakarta")