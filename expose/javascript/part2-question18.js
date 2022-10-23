function task(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(task, 1000);