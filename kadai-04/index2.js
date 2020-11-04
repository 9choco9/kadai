// ３秒待ってHello と表示し、　２秒待ってBye　と表示する。
setTimeout(() => { 
    console.log('Hello!') 
    setTimeout(() => { 
        console.log('Bye!') 
        }, 2000)
    }, 3000)