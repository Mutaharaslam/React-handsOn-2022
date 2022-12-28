export function About() {
    let s  =  new Promise((resolve, reject) => {
        let a = 1 + 2;
        if (a == 3){
            resolve('Promise Resolved')
        } else{
            reject('Promise Broken')
        }
    })
    s.then((message) =>{
        <div>Success {message}</div>
    }).catch((message) =>{
        <div>Failed {message}</div>
    })

    return(
        <div>{s}</div>
    )
}